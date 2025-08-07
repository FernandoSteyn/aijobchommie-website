#!/usr/bin/env pwsh
# Deploy to Netlify using drag-and-drop method

Write-Host "🌟 NETLIFY DEPLOYMENT PREPARATION" -ForegroundColor Cyan
Write-Host "==================================" -ForegroundColor Cyan

# Build the application
Write-Host "Building for Netlify..." -ForegroundColor Yellow
npm run build

# Ensure CNAME is in build
Copy-Item "public/CNAME" "build/CNAME" -Force

# Create a compressed package for easy deployment
$buildPath = "build"
$zipPath = "aijobchommie-website-deploy.zip"

if (Test-Path $zipPath) { Remove-Item $zipPath }

Write-Host "Creating deployment package..." -ForegroundColor Yellow
Compress-Archive -Path "$buildPath\*" -DestinationPath $zipPath

Write-Host "✅ NETLIFY DEPLOYMENT PACKAGE READY!" -ForegroundColor Green
Write-Host "Package created: $zipPath" -ForegroundColor Cyan
Write-Host ""
Write-Host "📋 NETLIFY DEPLOYMENT INSTRUCTIONS:" -ForegroundColor Yellow
Write-Host "1. Go to https://netlify.com and sign up/login" -ForegroundColor White
Write-Host "2. Click 'Sites' then 'Add new site' > 'Deploy manually'" -ForegroundColor White  
Write-Host "3. Drag and drop the file: $zipPath" -ForegroundColor Cyan
Write-Host "4. After deployment, go to Site Settings > Domain management" -ForegroundColor White
Write-Host "5. Add custom domain: aijobchommie.co.za" -ForegroundColor White
Write-Host "6. Update your DNS to point to Netlify" -ForegroundColor White
Write-Host ""
Write-Host "🚀 Your website will be live within minutes!" -ForegroundColor Green
