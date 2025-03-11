# Node.js イメージを使用
FROM node:18-alpine

# 作業ディレクトリの設定
WORKDIR /usr/src/app

# 依存関係のインストール
COPY package.json package-lock.json ./
RUN npm install

# ソースコードをコピー
COPY . .

# TypeScriptをビルド
RUN npm run build

# ポートの指定
EXPOSE 8080

# アプリの実行
CMD ["node", "dist/index.js"]

