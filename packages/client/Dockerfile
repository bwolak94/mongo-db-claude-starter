FROM node:20-alpine

WORKDIR /app

RUN corepack enable && corepack prepare pnpm@9.15.0 --activate

COPY package.json ./

RUN pnpm install --frozen-lockfile || pnpm install

COPY . .

EXPOSE 5173 6006

CMD ["pnpm", "dev"]
