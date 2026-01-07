# GitHub Setup for Netlify Deployment

## Quick Start: Push to GitHub

Follow these steps to get your project on GitHub and deploy to Netlify:

---

## Step 1: Initialize Git Repository (if not already done)

```bash
# Navigate to your project directory
cd /path/to/your/project

# Initialize git (skip if already initialized)
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit: 615 Learning For All platform"
```

---

## Step 2: Create GitHub Repository

### Option A: Using GitHub Website

1. Go to https://github.com/new
2. Repository name: `615-learning-for-all` (or your preferred name)
3. Description: "Nashville-based neurodiversity-affirming tutoring platform"
4. Choose **Private** or **Public**
5. **DO NOT** initialize with README, .gitignore, or license (you already have these)
6. Click **Create repository**

### Option B: Using GitHub CLI (if installed)

```bash
gh repo create 615-learning-for-all --private --source=. --remote=origin
```

---

## Step 3: Connect Local Repository to GitHub

After creating the GitHub repository, connect your local project:

```bash
# Add GitHub as remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/615-learning-for-all.git

# Verify remote was added
git remote -v

# Push to GitHub
git branch -M main
git push -u origin main
```

---

## Files That WILL Be Committed to GitHub

Your `.gitignore` is already configured correctly. These files/folders **WILL** be committed:

### ✅ Application Code
```
├── app/                          # All Next.js pages and routes
├── components/                   # React components
├── contexts/                     # React contexts
├── lib/                         # Utility functions
├── types/                       # TypeScript types
├── public/                      # Static assets (if any)
```

### ✅ Configuration Files
```
├── package.json                 # Dependencies
├── package-lock.json            # Locked dependencies
├── next.config.js              # Next.js config
├── tailwind.config.ts          # Tailwind config
├── tsconfig.json               # TypeScript config
├── postcss.config.js           # PostCSS config
├── components.json             # shadcn/ui config
├── netlify.toml                # Netlify config
├── middleware.ts               # Next.js middleware
├── .eslintrc.json             # ESLint config
├── .gitignore                  # Git ignore rules
```

### ✅ Documentation
```
├── README.md                    # Project documentation
├── SETUP.md                     # Setup guide
├── DEPLOYMENT.md               # Deployment guide
├── CUSTOM_DOMAIN_SETUP.md      # Domain setup guide
├── GITHUB_SETUP.md             # This file
```

---

## Files That WILL NOT Be Committed (Excluded by .gitignore)

### ❌ Never Commit These
```
├── node_modules/               # Dependencies (too large, auto-installed)
├── .next/                      # Build output (regenerated on deploy)
├── .env                        # Environment variables (SECURITY RISK!)
├── .env.local                  # Local environment variables
├── *.log                       # Log files
├── .DS_Store                   # Mac system files
```

**IMPORTANT**: Never commit `.env` files! They contain sensitive credentials.

---

## Step 4: Connect GitHub to Netlify

### Method 1: Netlify Dashboard (Recommended)

1. **Log in to Netlify**: https://app.netlify.com
2. Click **"Add new site"** → **"Import an existing project"**
3. Choose **"Deploy with GitHub"**
4. **Authorize Netlify** to access your GitHub account (if first time)
5. **Select your repository**: `615-learning-for-all`
6. **Configure build settings**:
   ```
   Branch to deploy: main
   Build command: npm run build
   Publish directory: .next
   ```
7. Click **"Deploy site"**

### Important: Add Environment Variables BEFORE Deploy

**Before deploying**, add environment variables:

1. In Netlify, click **"Site settings"** → **"Environment variables"**
2. Add these variables:

   ```
   Variable 1:
   Key: NEXT_PUBLIC_SUPABASE_URL
   Value: https://vwetftkpvbymbyjazjpq.supabase.co
   Scopes: All scopes (or at least "Builds")

   Variable 2:
   Key: NEXT_PUBLIC_SUPABASE_ANON_KEY
   Value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ3ZXRmdGtwdmJ5bWJ5amF6anBxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njc3MzA3MTMsImV4cCI6MjA4MzMwNjcxM30.YAAAFTvVNRtzriYPkxU6vVsQfA_BLmBD97agl96CZAI
   Scopes: All scopes (or at least "Builds")
   ```

3. Click **"Save"**
4. Go back and trigger a new deploy

---

## Step 5: Verify Deployment

1. **Wait for build to complete** (usually 2-5 minutes)
2. **Check build logs** for any errors
3. **Visit your Netlify URL** (e.g., https://your-site.netlify.app)
4. **Test the site**:
   - Homepage loads
   - Navigation works
   - Login/register pages load
   - Tutor marketplace loads

---

## Future Updates: Push Changes to GitHub

Whenever you make changes to your project:

```bash
# Check what files changed
git status

# Add all changed files
git add .

# Commit with a descriptive message
git commit -m "Description of what you changed"

# Push to GitHub
git push

# Netlify will automatically deploy the changes!
```

**Netlify Auto-Deploy**: Once connected, Netlify automatically deploys whenever you push to GitHub! 🎉

---

## Complete Checklist

### Before Pushing to GitHub:
- [ ] Project builds successfully (`npm run build`)
- [ ] `.gitignore` is configured (it is!)
- [ ] Remove any sensitive data from code
- [ ] README.md is up to date (it is!)

### GitHub Setup:
- [ ] Create GitHub repository
- [ ] Connect local repository to GitHub
- [ ] Push code to GitHub
- [ ] Verify all files are pushed

### Netlify Setup:
- [ ] Connect GitHub repository to Netlify
- [ ] Add environment variables in Netlify
- [ ] Verify build settings
- [ ] Deploy site
- [ ] Check deployment logs
- [ ] Test deployed site

### After Deployment:
- [ ] Add custom domain (www.615learningforall.com)
- [ ] Configure DNS
- [ ] Update Supabase redirect URLs
- [ ] Test authentication
- [ ] Test all pages and features

---

## Project Structure Summary

Your complete project structure that will be on GitHub:

```
615-learning-for-all/
├── app/                          # Next.js 13 App Router
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                 # Home page
│   ├── globals.css              # Global styles
│   ├── admin/                   # Admin portal
│   ├── auth/                    # Auth callback
│   ├── contact/                 # Contact page
│   ├── faq/                     # FAQ page
│   ├── login/                   # Login page
│   ├── parent/                  # Parent portal
│   ├── pricing/                 # Pricing page
│   ├── register/                # Register page
│   ├── specialist/              # Specialist portal
│   ├── tutor/                   # Tutor portal
│   └── tutors/                  # Tutor marketplace
├── components/                   # React components
│   ├── ui/                      # shadcn/ui components
│   ├── Header.tsx               # Header component
│   ├── Footer.tsx               # Footer component
│   └── PortalLayout.tsx         # Portal layout
├── contexts/                     # React contexts
│   └── AuthContext.tsx          # Authentication context
├── hooks/                        # Custom hooks
│   └── use-toast.ts             # Toast hook
├── lib/                         # Utilities
│   ├── supabase.ts             # Supabase client
│   └── utils.ts                # Utility functions
├── types/                       # TypeScript types
│   └── index.ts                # Type definitions
├── public/                      # Static files (if any)
├── .bolt/                       # Bolt configuration
├── .eslintrc.json              # ESLint config
├── .gitignore                   # Git ignore rules
├── components.json              # shadcn/ui config
├── CUSTOM_DOMAIN_SETUP.md      # Domain guide
├── DEPLOYMENT.md               # Deployment guide
├── GITHUB_SETUP.md             # This file
├── middleware.ts               # Next.js middleware
├── netlify.toml                # Netlify config
├── next-env.d.ts               # Next.js types
├── next.config.js              # Next.js config
├── package-lock.json           # Locked dependencies
├── package.json                # Dependencies
├── postcss.config.js           # PostCSS config
├── README.md                   # Main documentation
├── SETUP.md                    # Setup guide
├── tailwind.config.ts          # Tailwind config
└── tsconfig.json               # TypeScript config
```

---

## Security Reminder

### ⚠️ NEVER Commit These to GitHub:
- `.env` files
- API keys or secrets
- Database credentials
- Private keys
- Passwords

### ✅ DO Add These to Netlify Dashboard:
- All environment variables
- API keys (in Netlify's secure env vars)
- Database credentials (in Netlify's secure env vars)

---

## Troubleshooting

### Issue: "Permission denied" when pushing to GitHub

**Solution**: Set up SSH keys or use personal access token
```bash
# Generate SSH key
ssh-keygen -t ed25519 -C "your_email@example.com"

# Add to GitHub: Settings → SSH and GPG keys → New SSH key
```

Or use GitHub Personal Access Token:
- GitHub → Settings → Developer settings → Personal access tokens
- Use token as password when pushing

### Issue: "Build failed" on Netlify

**Solutions**:
1. Check environment variables are set
2. Review build logs in Netlify
3. Verify `package.json` scripts are correct
4. Ensure all dependencies are listed

### Issue: Files not showing up on GitHub

**Solution**: Check `.gitignore` - make sure you're not accidentally excluding files

---

## Quick Reference Commands

```bash
# Check git status
git status

# Add all files
git add .

# Commit
git commit -m "Your message"

# Push to GitHub
git push

# Pull latest changes
git pull

# View commit history
git log --oneline

# Create new branch
git checkout -b feature-name

# Switch branches
git checkout main
```

---

## Need Help?

- **GitHub Docs**: https://docs.github.com
- **Netlify Docs**: https://docs.netlify.com
- **Git Tutorial**: https://git-scm.com/book/en/v2

Your project is ready to push to GitHub and deploy to Netlify! 🚀
