FROM oven/bun:latest

WORKDIR /app

COPY package*.json ./

RUN bun install

COPY . .

EXPOSE 3030

# RUN bunx prisma generate
# RUN bunx prisma migrate dev --name init