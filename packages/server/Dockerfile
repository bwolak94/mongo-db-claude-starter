FROM node:20-alpine

WORKDIR /app

RUN corepack enable && corepack prepare pnpm@9.15.0 --activate

COPY package.json ./
COPY ../../pnpm-workspace.yaml ./pnpm-workspace.yaml

RUN pnpm install --frozen-lockfile || pnpm install

COPY . .

EXPOSE 4000

CMD ["pnpm", "dev"]
