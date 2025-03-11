# quality_tag_api


quality_tag_api/        # バックエンドとインフラを管理するリポジトリ
│── apps/             # バックエンドアプリケーション
│   ├── api/          # Express APIアプリケーション
│   │   ├── src/
│   │   │   ├── controllers/   # コントローラー
│   │   │   ├── middleware/    # ミドルウェア
│   │   │   ├── models/        # データモデル
│   │   │   ├── routes/        # ルーティング
│   │   │   ├── services/      # ビジネスロジック
│   │   │   ├── utils/         # ヘルパー関数
│   │   │   ├── config.ts      # 設定ファイル
│   │   │   ├── index.ts       # アプリのエントリーポイント
│   │   ├── package.json       # バックエンド用のnpm設定
│   │   ├── tsconfig.json      # TypeScriptの設定
│   │   ├── Dockerfile         # Cloud Run用のDockerfile
│   │   ├── .dockerignore      # Dockerの無視ファイル
│   │   ├── .env               # 環境変数ファイル（ローカル用）
│── cdktf/            # インフラ管理
│   ├── src/
│   │   ├── stacks/          # Cloud Run, VPC, Cloud SQL などのスタック
│   │   ├── providers.ts     # Google Cloud Providerの設定
│   │   ├── cdktf.ts         # CDKTFのエントリーポイント
│   ├── package.json         # CDKTF用のnpm設定
│   ├── tsconfig.json        # TypeScriptの設定
│── .github/          # GitHub Actions (CI/CD)
│   ├── workflows/
│   │   ├── deploy.yml       # CI/CDのデプロイ設定
│── .gitignore
│── README.md
