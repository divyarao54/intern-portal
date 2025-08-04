# Deployment Guide for Intern Portal

This guide will help you deploy both the frontend and backend of your Intern Portal project.

## Project Structure
- **Frontend**: React app in `/client` folder
- **Backend**: Node.js/Express server in `/server` folder

## Backend Deployment (Recommended: Railway)

### Option 1: Railway (Recommended)
1. Go to [railway.app](https://railway.app)
2. Sign up with GitHub
3. Click "New Project" → "Deploy from GitHub repo"
4. Select your repository
5. Set environment variables:
   ```
   MONGODB_URI=your_mongodb_atlas_uri
   JWT_SECRET=your_jwt_secret
   PORT=5000
   ```
6. Deploy

### Option 2: Render
1. Go to [render.com](https://render.com)
2. Sign up and connect GitHub
3. Click "New Web Service"
4. Select your repository
5. Set build command: `npm install`
6. Set start command: `npm start`
7. Add environment variables (same as above)

## Frontend Deployment (Vercel - Recommended)

### Deploy to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Click "New Project"
4. Import your repository
5. Set build settings:
   - Framework Preset: Create React App
   - Build Command: `npm run build`
   - Output Directory: `build`
6. Add environment variable:
   ```
   REACT_APP_API_URL=https://your-backend-url.railway.app
   ```
7. Deploy

## Environment Variables Setup

### Backend (.env)
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/database
JWT_SECRET=your_super_secret_key
PORT=5000
```

### Frontend (.env)
```env
REACT_APP_API_URL=https://your-backend-url.railway.app
```

## MongoDB Atlas Setup
1. Go to [mongodb.com](https://mongodb.com)
2. Create a free cluster
3. Get your connection string
4. Add your deployment platform's IP to whitelist
5. Update MONGODB_URI in your backend environment variables

## Testing Deployment
1. Test backend endpoints: `https://your-backend-url.railway.app/api/auth/register`
2. Test frontend: Visit your Vercel URL
3. Try registration and login flows

## Troubleshooting
- Ensure CORS is properly configured in backend
- Check that environment variables are set correctly
- Verify MongoDB Atlas IP whitelist includes your deployment platform
- Check server logs for any errors

## Alternative Deployment Options

### Backend Alternatives:
- **Heroku**: Good but now paid
- **DigitalOcean App Platform**: Good performance
- **AWS EC2**: More control, complex setup

### Frontend Alternatives:
- **Netlify**: Similar to Vercel
- **GitHub Pages**: Free but limited
- **Firebase Hosting**: Google's solution 