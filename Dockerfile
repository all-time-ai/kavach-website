# ------------------------------
# 1️⃣ Base image
# ------------------------------
FROM node:20-alpine AS base
WORKDIR /app

# ------------------------------
# 2️⃣ Install dependencies
# ------------------------------
FROM base AS deps

# Install libc6-compat for Alpine (required by some packages)
RUN apk add --no-cache libc6-compat

COPY package.json package-lock.json* ./
RUN npm ci

# ------------------------------
# 3️⃣ Build the Next.js app
# ------------------------------
FROM base AS builder

COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Disable telemetry during build
ENV NEXT_TELEMETRY_DISABLED=1

RUN npm run build

# ------------------------------
# 4️⃣ Production image
# ------------------------------
FROM base AS runner

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Create non-root user
RUN addgroup --system --gid 1001 nodejs \
  && adduser --system --uid 1001 nextjs

WORKDIR /app

# Copy only necessary files
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

USER nextjs

EXPOSE 3000

CMD ["npm", "start"]
