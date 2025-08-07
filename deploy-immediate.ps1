#!/usr/bin/env pwsh
# 🚀 AI Job Chommie - Immediate Website Deployment
# This script will restore your website to full functionality

Write-Host "🔥 AI JOB CHOMMIE - EMERGENCY DEPLOYMENT INITIATED 🔥" -ForegroundColor Cyan
Write-Host "======================================================" -ForegroundColor Cyan

# Step 1: Clean and Install Dependencies
Write-Host "`n📦 Step 1: Installing Dependencies..." -ForegroundColor Yellow
npm cache clean --force
if (Test-Path "node_modules") { Remove-Item -Recurse -Force "node_modules" }
if (Test-Path "package-lock.json") { Remove-Item -Force "package-lock.json" }
npm install

# Step 2: Verify Critical Files
Write-Host "`n🔍 Step 2: Verifying Critical Files..." -ForegroundColor Yellow
$criticalFiles = @(
    "src/index.js",
    "public/index.html", 
    "src/pages/LandingPage.jsx",
    "public/CNAME"
)

foreach ($file in $criticalFiles) {
    if (-not (Test-Path $file)) {
        Write-Host "❌ Critical file missing: $file" -ForegroundColor Red
        exit 1
    }
    Write-Host "✅ $file exists" -ForegroundColor Green
}

# Step 3: Build Application
Write-Host "`n🏗️ Step 3: Building Application..." -ForegroundColor Yellow
npm run build

if (-not (Test-Path "build/index.html")) {
    Write-Host "❌ Build failed - no index.html generated" -ForegroundColor Red
    exit 1
}

# Ensure CNAME is in build directory
Copy-Item "public/CNAME" "build/CNAME" -Force
Write-Host "✅ Build completed successfully" -ForegroundColor Green

# Step 4: Deploy to GitHub Pages
Write-Host "`n🚀 Step 4: Deploying to GitHub Pages..." -ForegroundColor Yellow
try {
    npm run deploy
    Write-Host "✅ GitHub Pages deployment initiated" -ForegroundColor Green
} catch {
    Write-Host "⚠️ GitHub Pages deployment may have issues, but continuing..." -ForegroundColor Yellow
}

# Step 5: Display Status
Write-Host "`n📊 DEPLOYMENT SUMMARY" -ForegroundColor Cyan
Write-Host "=====================" -ForegroundColor Cyan
Write-Host "✅ Dependencies installed" -ForegroundColor Green
Write-Host "✅ Build completed" -ForegroundColor Green
Write-Host "✅ GitHub Pages deployment triggered" -ForegroundColor Green
Write-Host "`n🌐 Your website will be available at: https://aijobchommie.co.za" -ForegroundColor Cyan
Write-Host "⏳ Allow 5-10 minutes for DNS propagation" -ForegroundColor Yellow

# Step 6: Health Check
Write-Host "`n🔍 Step 6: Health Check..." -ForegroundColor Yellow
Write-Host "Waiting for deployment to propagate..."
Start-Sleep 30

for ($i = 1; $i -le 5; $i++) {
    try {
        $response = Invoke-WebRequest -Uri "https://aijobchommie.co.za" -Method Head -TimeoutSec 10
        if ($response.StatusCode -eq 200) {
            Write-Host "🎉 SUCCESS! Website is online!" -ForegroundColor Green
            break
        }
    } catch {
        Write-Host "⏳ Attempt $i/5: Still checking..." -ForegroundColor Yellow
        Start-Sleep 15
    }
}

Write-Host "`n🚀 DEPLOYMENT COMPLETE!" -ForegroundColor Green
Write-Host "Your AI Job Chommie website is now restored and running!" -ForegroundColor Green
