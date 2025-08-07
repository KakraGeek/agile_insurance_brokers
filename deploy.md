# Vercel Deployment Guide

## Prerequisites
- ✅ Vercel CLI installed globally (`npm install -g vercel`)
- ✅ Node.js and npm installed
- ✅ Git repository initialized

## Deployment Steps

### 1. Login to Vercel
```bash
vercel login
```

### 2. Deploy to Vercel
```bash
vercel
```

### 3. Follow the prompts:
- **Set up and deploy?** → `Y`
- **Which scope?** → Select your account
- **Link to existing project?** → `N` (for first deployment)
- **What's your project's name?** → `agile-insurance-website` (or your preferred name)
- **In which directory is your code located?** → `./` (current directory)
- **Want to override the settings?** → `N` (use default settings)

### 4. For Production Deployment
```bash
vercel --prod
```

## Environment Variables (if needed)
If you need to set environment variables:
```bash
vercel env add VARIABLE_NAME
```

## Useful Commands

### Check deployment status
```bash
vercel ls
```

### View deployment logs
```bash
vercel logs
```

### Open project dashboard
```bash
vercel open
```

### Pull latest environment variables
```bash
vercel env pull
```

## Configuration
- `vercel.json` is configured for optimal Next.js deployment
- Images are cached for 1 year for better performance
- Security headers are automatically added
- Build command: `npm run build`
- Output directory: `.next`

## Troubleshooting
- If build fails, check the logs: `vercel logs`
- Ensure all dependencies are in `package.json`
- Verify Node.js version compatibility
- Check for any TypeScript errors before deploying 