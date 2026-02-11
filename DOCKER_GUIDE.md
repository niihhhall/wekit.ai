# Docker Guide for We Kit Launch Command

This guide explains how to build, run, and manage your React application using Docker.

## Prerequisites

- [Docker Desktop](https://www.docker.com/products/docker-desktop/) installed and running.

## Quick Start

The easiest way to run the application is using `docker-compose`.

### 1. Set your Environment Variable

You need to provide your `GEMINI_API_KEY` for the build process. You can do this by creating a `.env` file in the root directory:

**Create a file named `.env`:**
```env
VITE_GEMINI_API_KEY=your_actual_api_key_here
```

### 2. Build and Run

Run the following command in your terminal:

```bash
docker-compose up --build
```

- This command builds the image and starts the container.
- It automatically picks up the `VITE_GEMINI_API_KEY` from your `.env` file.

### 3. Access the Application

Open your browser and navigate to:
[http://localhost:3000](http://localhost:3000)

## Manual Docker Commands

If you prefer to run `docker` commands directly (without Compose):

### Build the Image

You must pass the build argument manually:

```bash
docker build --build-arg VITE_GEMINI_API_KEY=your_actual_api_key_here -t we-kit-app .
```

### Run the Container

```bash
docker run -p 3000:80 we-kit-app
```

## Important Notes

> [!IMPORTANT]
> **Build-Time Variables**: The `VITE_GEMINI_API_KEY` is baked into the application at **build time**. If you change your API key, you must **rebuild** the image:
> `docker-compose up --build`

> [!TIP]
> **Port Mapping**: The application runs on port `80` inside the container but is mapped to port `3000` on your host machine.

## Troubleshooting

- **"API Key missing"**: Ensure you created the `.env` file with `VITE_GEMINI_API_KEY` or passed it as a build argument.
- **Port already in use**: If port 3000 is taken, change the mapping in `docker-compose.yml`:
    ```yaml
    ports:
      - "8080:80" # Maps to localhost:8080 instead
    ```
