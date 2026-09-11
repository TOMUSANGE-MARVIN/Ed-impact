# syntax=docker/dockerfile:1

# ---------- base ----------
FROM node:22-slim AS base
ENV NEXT_TELEMETRY_DISABLED=1
WORKDIR /app

# ---------- dependencies (full, for building) ----------
FROM base AS deps
COPY package.json package-lock.json ./
RUN npm ci

# ---------- build ----------
FROM base AS builder
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NODE_ENV=production
# Payload initialises its config during the build, so it needs these present.
# They are throwaway values — real ones are injected at runtime.
ENV PAYLOAD_SECRET=build-time-placeholder-not-used-at-runtime
ENV DATABASE_URL=file:/tmp/build-only.db
# The admin import map is gitignored, so it does not exist in a clean
# checkout and must be regenerated before the Next build imports it.
RUN npm run generate:importmap
RUN npm run build

# ---------- runtime ----------
FROM base AS runner
ENV NODE_ENV=production \
    PORT=3000 \
    HOSTNAME=0.0.0.0

# Production dependencies only, plus tsx so the seed script can be run once
# after the first deploy (it is a TypeScript file executed outside Next).
COPY package.json package-lock.json ./
RUN npm ci --omit=dev \
 && npm install -g tsx \
 && npm cache clean --force

COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/src ./src
COPY --from=builder /app/next.config.mjs ./next.config.mjs
COPY --from=builder /app/tsconfig.json ./tsconfig.json

# Mount points for the two things that must survive a redeploy:
#   /app/data          -> SQLite database file
#   /app/public/media  -> Payload media uploads
RUN mkdir -p /app/data /app/public/media \
 && chown -R node:node /app/data /app/public/media

USER node
EXPOSE 3000

# Payload disables schema auto-push outside development, so pending migrations
# are applied on boot before the server starts.
CMD ["sh", "-c", "npm run payload -- migrate && npm run start"]
