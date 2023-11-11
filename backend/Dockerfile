FROM oven/bun:latest

WORKDIR /app

COPY package*.json ./

RUN bun install

COPY . .

# RUN bunx prisma generate
# RUN bunx prisma migrate dev --name init