# Sites 公開版の確認方法

対象サイト: https://mario-tennis-fever-explorer.lunaclock.chatgpt.site/

このサイトは Sites のプロジェクト `appgprj_6acb4de871108191968dd2e7da4572e8` として公開している。GitHub の `develop` ブランチを更新しただけでは Sites の公開版は切り替わらない。Sites のソースリポジトリへ変更を送信し、版を保存・公開する必要がある。

## 公開状態の確認

Codex の Sites ツールで次を順に確認する。これらの操作は、この実行環境から公開URLへ直接HTTP接続できない場合にも利用できた。

1. `sites_get_site` に `project_id` を渡し、`current_live_url` が対象URLで、`access_mode` が `public` であることを確認する。
2. `sites_list_site_versions` に同じ `project_id` と `limit: 1` を渡し、最新の版番号、`source.commit_sha`、`deployment_id` を確認する。
3. `sites_get_deployment_status` に `project_id` と直前の `deployment_id` を渡す。`status` が `succeeded` で、`url` が対象URLなら、その版の公開処理は完了している。
4. 変更内容は、その版の `source.commit_sha` と Sites ソースリポジトリのコミットを照合し、配信用 `dist/` のファイルを確認する。

2026年10月12日の確認時、版 **v3** のソースコミット `8118bd9cd9eaae1659b93944a2fa54d374e8c089` は `succeeded` となり、上記の公開URLが返された。

## 公開URLへの直接接続

この管理実行環境では、公開ホストへの `curl` はプロキシの `CONNECT 403` で拒否された。現在のHTTP通信許可先に `mario-tennis-fever-explorer.lunaclock.chatgpt.site` が含まれていないためで、上記の Sites 公開結果とは別の制限である。Sites ツールによる公開確認は、ページのHTTP応答やブラウザ表示を検証したことを意味しない。

この環境からページ本文まで確認する必要がある場合は、管理環境のHTTP通信許可先に公開ホストを追加したうえで、次を実行する。

```sh
curl --fail-with-body --location --silent --show-error \
  https://mario-tennis-fever-explorer.lunaclock.chatgpt.site/tier/
```
