import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { spawnSync } from "node:child_process";

const root = process.cwd();
const inputPath = path.join(root, "docs", "repository-guide.html");
const outputPath = path.join(root, "docs", "repository-guide.pdf");

const browserCandidates = [
  "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
  "C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe",
  "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
];

function resolveBrowserPath() {
  return browserCandidates.find((candidate) => fs.existsSync(candidate)) ?? null;
}

if (!fs.existsSync(inputPath)) {
  console.error(`[repo-guide] Source HTML not found: ${inputPath}`);
  process.exit(1);
}

const browserPath = resolveBrowserPath();
if (!browserPath) {
  console.error("[repo-guide] Edge/Chrome was not found in the expected install paths.");
  process.exit(1);
}

fs.mkdirSync(path.dirname(outputPath), { recursive: true });

const sourceUrl = pathToFileURL(inputPath).href;
const args = [
  "--headless=new",
  "--disable-gpu",
  "--allow-file-access-from-files",
  "--no-pdf-header-footer",
  `--print-to-pdf=${outputPath}`,
  sourceUrl,
];

const result = spawnSync(browserPath, args, {
  cwd: root,
  encoding: "utf8",
});

if (result.status !== 0) {
  console.error("[repo-guide] Failed to export PDF.");
  if (result.stderr) {
    console.error(result.stderr.trim());
  }
  process.exit(result.status ?? 1);
}

console.log(`[repo-guide] PDF exported: ${outputPath}`);
