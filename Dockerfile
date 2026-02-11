# Stage 1: Build the application
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files first to leverage cache
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Build-time environment variables
# Note: VITE_ variables must be present at build time to be inlined into the code
ARG VITE_GEMINI_API_KEY
ENV VITE_GEMINI_API_KEY=$VITE_GEMINI_API_KEY

# Build the application
RUN npm run build

# Stage 2: Serve the application with Nginx
FROM nginx:alpine

# Copy the built files from the builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy the Nginx configuration template
# The nginx:alpine image will automatically substitute environment variables
# (like ${PORT}) in files found in /etc/nginx/templates/ and output to /etc/nginx/conf.d/
COPY nginx.conf.template /etc/nginx/templates/default.conf.template

# Default PORT if not provided (Local development)
ENV PORT=8080

# Expose the port (Documentation only)
EXPOSE 8080

# Start Nginx (The default entrypoint handles envsubst)
CMD ["nginx", "-g", "daemon off;"]