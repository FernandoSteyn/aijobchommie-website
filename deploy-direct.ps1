#!/usr/bin/env pwsh
# Direct deployment to GitHub Pages using git subtree

Write-Host "🚀 DEPLOYING DIRECTLY TO GITHUB PAGES..." -ForegroundColor Cyan

# Build the application
Write-Host "Building application..." -ForegroundColor Yellow
npm run build

# Ensure CNAME is in build
Copy-Item "public/CNAME" "build/CNAME" -Force

# Add and commit build directory
git add build
git commit -m "Update build for deployment"

# Force push build directory to gh-pages branch
Write-Host "Pushing to gh-pages branch..." -ForegroundColor Yellow
git subtree push --prefix build origin gh-pages

Write-Host "✅ DEPLOYMENT COMPLETED!" -ForegroundColor Green
Write-Host "Your website will be live at: https://aijobchommie.co.za" -ForegroundColor Cyan
Write-Host "Allow 5-10 minutes for propagation" -ForegroundColor Yellow
