FROM oven/bun:latest

WORKDIR /app

COPY package*.json ./

# generated prisma files
COPY prisma ./prisma/

RUN bun install
RUN bunx prisma generate

COPY . .

EXPOSE 3030
