FROM node:18-alpine

WORKDIR /usr/src/app

# ルートの tsconfig.json を先にコピー（extendsで参照されるため）
COPY tsconfig.json ./

# ルートの package.json をコピー
COPY package.json package-lock.json ./

# api の package.json だけ先にコピーして install 時にworkspaceが認識できるようにする
COPY apps/api/package.json ./apps/api/

# 依存関係のインストール（ルート + ワークスペースまとめて）
RUN npm install

# api の全ソースコードをコピー
COPY apps/api ./apps/api

# TypeScript ビルド
RUN npm run build --workspace=api

EXPOSE 8080
CMD ["node", "apps/api/dist/index.js"]
