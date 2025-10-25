# Stage 1 - build
FROM node:18-alpine AS builder
WORKDIR /app

# copiar package.json e package-lock para aproveitar cache
COPY package*.json ./
RUN npm install --production

# copiar o restante do código
COPY . .

# Stage 2 - runtime
FROM node:18-alpine
WORKDIR /app

# copiar node_modules do builder
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app ./

ENV NODE_ENV=production
ENV PORT=8080

EXPOSE 8080
CMD ["node", "src/app.js"]