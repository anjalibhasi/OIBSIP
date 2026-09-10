# 🚀 GitHub Setup Guide for Temperature Converter

## Prerequisites

### Step 1: Install Git
1. Go to [git-scm.com](https://git-scm.com/download/win)
2. Download Git for Windows
3. Run the installer with default settings
4. Restart your terminal/PowerShell

### Step 2: Configure Git
After installing git, run these commands in PowerShell:

```powershell
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

---

## GitHub Repository Setup

### Step 1: Create Repository on GitHub

1. Go to [github.com](https://github.com)
2. Click **"New"** button (or go to github.com/new)
3. Fill in details:
   - **Repository name**: `OIBSIP-Temperature-Converter`
   - **Description**: A professional temperature converter using HTML, CSS, and JavaScript
   - **Public** or **Private** (your choice)
   - **Don't** initialize with README (we already have one)
   - **Don't** add .gitignore (optional)
4. Click **"Create repository"**

### Step 2: Copy Repository URL
After creating, you'll see a page with your repository URL. Copy it - it will look like:
```
https://github.com/YourUsername/OIBSIP-Temperature-Converter.git
```

Or for SSH (if you have SSH keys set up):
```
git@github.com:YourUsername/OIBSIP-Temperature-Converter.git
```

---

## Local Setup Commands

Run these commands in PowerShell from your project directory:

### Navigate to Project
```powershell
cd "C:\Users\DELL\Desktop\OIBSIP\Task-3-Temperature-Converter"
```

### Initialize Git Repository
```powershell
git init
```

### Add All Files
```powershell
git add .
```

### Create Initial Commit
```powershell
git commit -m "Initial commit: Temperature Converter project"
```

### Add Remote Repository
Replace `YourUsername` with your GitHub username:
```powershell
git remote add origin https://github.com/YourUsername/OIBSIP-Temperature-Converter.git
```

### Push to GitHub
```powershell
git branch -M main
git push -u origin main
```

---

## What Gets Pushed to GitHub

The following files will be uploaded:

### Code Files ✅
- `index.html` - HTML structure (12 KB)
- `style.css` - CSS styling (25 KB)
- `script.js` - JavaScript logic (8 KB)

### Documentation ✅
- `README.md` - Main documentation
- `QUICK_REFERENCE.md` - Quick lookup guide
- `CSS_AND_WORKFLOW_GUIDE.md` - Visual guide
- `EXAMPLES.md` - Code examples
- `PROJECT_SUMMARY.md` - Project overview
- `DOCUMENTATION_INDEX.md` - Navigation guide
- `00_START_HERE.md` - Entry point
- `GITHUB_SETUP.md` - This file

---

## Optional: Add .gitignore

If you want to exclude certain files, create a `.gitignore` file:

```powershell
# Create .gitignore in your project folder
@"
# OS Files
.DS_Store
Thumbs.db
*.swp
*.swo

# IDE Files
.vscode/
.idea/
*.sublime-project
*.sublime-workspace

# Node modules (if you add any)
node_modules/
npm-debug.log

# Build files (if applicable)
dist/
build/
.cache
"@ | Out-File -Encoding UTF8 .gitignore
```

Then commit it:
```powershell
git add .gitignore
git commit -m "Add .gitignore file"
git push
```

---

## Optional: Add GitHub Topics

On your GitHub repository page:

1. Click ⚙️ **Settings**
2. Scroll to **Repository topics**
3. Add topics:
   - `temperature-converter`
   - `html-css-javascript`
   - `responsive-design`
   - `web-app`
   - `portfolio`
   - `oibsip`

---

## Optional: Add to GitHub Profile README

Create a section in your profile README:

```markdown
## 🌡️ Featured Project: Temperature Converter

A professional temperature converter built with vanilla HTML, CSS, and JavaScript.

- **Live Demo**: [View Project](https://yourusername.github.io/OIBSIP-Temperature-Converter/)
- **Repository**: [GitHub Repo](https://github.com/yourusername/OIBSIP-Temperature-Converter)

**Features:**
- Accurate temperature conversions (Celsius ↔ Fahrenheit ↔ Kelvin)
- Beautiful dark theme with smooth animations
- Fully responsive design
- Comprehensive documentation

**Tech Stack:** HTML5 • CSS3 • JavaScript (Vanilla)
```

---

## Quick Command Reference

```powershell
# Check git status
git status

# View commit history
git log

# Add new files
git add .

# Commit changes
git commit -m "Your message"

# Push to GitHub
git push

# Pull latest changes
git pull

# Create new branch
git checkout -b feature-name

# Switch branch
git checkout branch-name

# Delete local branch
git branch -d branch-name
```

---

## Troubleshooting

### "fatal: not a git repository"
```powershell
# Run this in your project folder
git init
```

### "fatal: could not read Username"
```powershell
# Add your GitHub credentials
git config --global user.name "YourGitHubUsername"
git config --global user.email "your.email@example.com"
```

### "fatal: Authentication failed"
```powershell
# Use HTTPS URL instead of SSH
git remote set-url origin https://github.com/YourUsername/OIBSIP-Temperature-Converter.git
```

### "Please tell me who you are"
```powershell
# Set your git user for this repository
git config user.name "Your Name"
git config user.email "your.email@example.com"
```

---

## Next Steps After Pushing

1. **Enable GitHub Pages** (to host live demo)
   - Go to Settings → Pages
   - Select branch: `main`
   - Click "Save"
   - Your project will be live at: `https://yourusername.github.io/OIBSIP-Temperature-Converter/`

2. **Add a README Badge** (optional)
   ```markdown
   ![Made with HTML CSS JavaScript](https://img.shields.io/badge/Made%20with-HTML%20CSS%20JavaScript-blue)
   ```

3. **Share Your Project**
   - Tweet it
   - Add to your portfolio
   - Share on LinkedIn
   - Add to GitHub profile

---

## Repository Structure on GitHub

Your repository will look like:
```
OIBSIP-Temperature-Converter/
├── index.html
├── style.css
├── script.js
├── README.md
├── QUICK_REFERENCE.md
├── CSS_AND_WORKFLOW_GUIDE.md
├── EXAMPLES.md
├── PROJECT_SUMMARY.md
├── DOCUMENTATION_INDEX.md
├── 00_START_HERE.md
└── GITHUB_SETUP.md
```

---

## Final Verification

After pushing, verify everything worked:

1. Go to your repository on GitHub
2. Check that all files are there
3. README.md should display automatically
4. Click on files to verify content

---

## Get Help

- **Git Help**: `git help <command>`
- **GitHub Help**: https://docs.github.com
- **GitHub Issues**: Use the repo's Issues tab to track problems

---

## Summary of Commands (Copy-Paste)

```powershell
# Install git from https://git-scm.com/download/win
# Then restart PowerShell and run:

git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

cd "C:\Users\DELL\Desktop\OIBSIP\Task-3-Temperature-Converter"

git init
git add .
git commit -m "Initial commit: Temperature Converter project"
git remote add origin https://github.com/YourUsername/OIBSIP-Temperature-Converter.git
git branch -M main
git push -u origin main
```

---

**You're all set! Your Temperature Converter is now ready for GitHub! 🚀**

Questions? Check the troubleshooting section above or visit [GitHub Docs](https://docs.github.com).
