import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const outputPath = path.join(root, "assets", "beginner-video-metadata.json");
const dataJsPath = path.join(root, "data.js");

function loadBeginnerVideos() {
  const source = fs.readFileSync(dataJsPath, "utf8");
  const match = source.match(/export const beginnerVideos = (\[[\s\S]*?\n\]);/);
  if (!match) {
    throw new Error("Failed to load beginnerVideos from data.js");
  }
  return new Function(`return (${match[1]});`)();
}

const beginnerVideos = loadBeginnerVideos();

function buildWatchUrl(youtubeId) {
  return `https://www.youtube.com/watch?v=${youtubeId}`;
}

function buildOEmbedUrl(youtubeId) {
  return `https://www.youtube.com/oembed?url=${encodeURIComponent(buildWatchUrl(youtubeId))}&format=json`;
}

function normalizeDescription(value = "") {
  return value
    .replace(/\\n/g, "\n")
    .replace(/\\"/g, "\"")
    .replace(/\\u0026/g, "&")
    .replace(/\\u003c/g, "<")
    .replace(/\\u003e/g, ">");
}

function summarizeDescription(description = "") {
  const lines = normalizeDescription(description)
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean)
    .filter((line) => !/^https?:\/\//i.test(line))
    .filter((line) => !/^\d{1,2}:\d{2}/.test(line))
    .filter((line) => !/^[#＃]/.test(line));

  return lines.slice(0, 3).join(" ").slice(0, 220);
}

function readExistingMetadata() {
  try {
    return JSON.parse(fs.readFileSync(outputPath, "utf8"));
  } catch {
    return {};
  }
}

async function fetchOEmbedTitle(youtubeId) {
  const response = await fetch(buildOEmbedUrl(youtubeId));
  if (!response.ok) {
    throw new Error(`oEmbed failed: ${response.status}`);
  }
  const payload = await response.json();
  return String(payload.title || "").trim();
}

async function fetchDescription(youtubeId) {
  const response = await fetch(buildWatchUrl(youtubeId), {
    headers: {
      "user-agent": "Mozilla/5.0",
    },
  });
  if (!response.ok) {
    throw new Error(`watch failed: ${response.status}`);
  }

  const html = await response.text();
  const match = html.match(/"shortDescription":"(?<desc>(?:\\.|[^"])*)"/);
  return match?.groups?.desc ? normalizeDescription(match.groups.desc) : "";
}

async function buildMetadata() {
  const existing = readExistingMetadata();
  const entries = {};

  for (const video of beginnerVideos) {
    const fallback = existing[video.id] || {};

    try {
      const [title, description] = await Promise.all([
        fetchOEmbedTitle(video.youtubeId),
        fetchDescription(video.youtubeId),
      ]);

      entries[video.id] = {
        title: title || fallback.title || "",
        summary: summarizeDescription(description) || fallback.summary || "",
      };
    } catch {
      entries[video.id] = {
        title: fallback.title || "",
        summary: fallback.summary || "",
      };
    }
  }

  return entries;
}

const metadata = await buildMetadata();
fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, `${JSON.stringify(metadata, null, 2)}\n`);
console.log(`Generated beginner video metadata for ${Object.keys(metadata).length} videos.`);
