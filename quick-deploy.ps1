#!/usr/bin/env pwsh
# Quick deployment with path optimization

Write-Host "🚀 Quick Deployment Started" -ForegroundColor Cyan

# Build the app
npm run build

# Copy build to a temp short path
$tempPath = "C:\temp\build"
if (Test-Path $tempPath) { Remove-Item -Recurse -Force $tempPath }
Copy-Item -Recurse "build" $tempPath

# Ensure CNAME is there
Copy-Item "public/CNAME" "$tempPath/CNAME" -Force

# Initialize git in temp directory
Set-Location $tempPath
git init
git add .
git commit -m "Deploy website"

# Add remote and force push to gh-pages
git remote add origin https://github.com/YOUR_USERNAME/aijobchommie-website.git
git branch -M gh-pages
git push -f origin gh-pages

# Return to original directory
Set-Location "C:\Users\user\aijobchommie-website"

Write-Host "✅ Deployment attempted with shorter paths" -ForegroundColor Green
