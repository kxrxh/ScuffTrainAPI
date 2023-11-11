FROM oven/bun:latest

WORKDIR /app

COPY package*.json ./

RUN bun install
RUN bunx prisma generate

COPY . .

EXPOSE 3030