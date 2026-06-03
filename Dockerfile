# Use Node.js LTS
FROM node:22-slim

# =========================================================================
# 1. COPY THE AWS LAMBDA WEB ADAPTER LAYER
# This translates Lambda events directly into standard HTTP port traffic
# =========================================================================
COPY --from=public.ecr.aws/awsguru/aws-lambda-adapter:0.8.4 /lambda-adapter /opt/extensions/lambda-adapter

# Set working directory
WORKDIR /app

# Copy package files first (better caching)
COPY package*.json ./

# Install dependencies
RUN npm ci
# RUN npm install

# Copy rest of the app
COPY . .

# Build the Next.js app
RUN npm run build

# Expose Next.js default port
EXPOSE 3000

# Start the app
CMD ["npm", "start"]