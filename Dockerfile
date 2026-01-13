FROM node:20-bullseye-slim
WORKDIR /app
RUN apt-get update && apt-get install -y --no-install-recommends \
	ca-certificates \
	openssl \
	&& rm -rf /var/lib/apt/lists/*
COPY package.json package-lock.json* ./
# Use npm install (no lockfile present) and skip dev dependencies to avoid npm ci failures
RUN npm install --omit=dev --no-audit --no-fund || npm install --production
COPY . .
RUN npx prisma generate || true
EXPOSE 3000
CMD ["node","src/index.js"]
