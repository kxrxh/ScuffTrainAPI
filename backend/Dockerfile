FROM oven/bun:latest
WORKDIR /opt/app

COPY --from=node:18 /usr/local/bin/node /usr/local/bin/node
COPY ./package.json ./
COPY ./bun.lockb ./

# Install packages
RUN bun install

# Run generation
COPY . .

RUN bunx prisma generate


EXPOSE 3000

CMD ["bun", "start"]