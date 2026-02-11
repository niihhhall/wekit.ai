# Final Cloud Run Deployment Guide

## 1. Rebuild and Push Commands

### Build with API Key
```bash
docker build --no-cache \
  --build-arg VITE_GEMINI_API_KEY=your_actual_api_key_here \
  -t gcr.io/wekit-mvp/wekit-app .
```

### Push to Container Registry
```bash
docker push gcr.io/wekit-mvp/wekit-app
```

---

## 2. Deploy Command (Final)

Execute this command exactly:

```bash
gcloud run deploy wekit-app \
  --image gcr.io/wekit-mvp/wekit-app \
  --platform managed \
  --region asia-south1 \
  --allow-unauthenticated \
  --project wekit-mvp
```

*Note: We do NOT need to specify `--port` because the container now listens on whatever port Cloud Run assigns via the `$PORT` environment variable.*

---

## 3. Local Verification

To test locally, you must provide the `PORT` environment variable:

```bash
docker run -p 8080:8080 -e PORT=8080 gcr.io/wekit-mvp/wekit-app
```

Then visit: http://localhost:8080

If you see the app, the dynamic port configuration is working!
