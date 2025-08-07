# AI Job Chommie - GitHub Pages Deployment Script
# This script builds and deploys the site with proper domain configuration

Write-Host "🚀 Starting AI Job Chommie Deployment..." -ForegroundColor Green

# Step 1: Clean build directory
Write-Host "🧹 Cleaning build directory..." -ForegroundColor Yellow
if (Test-Path "build") {
    Remove-Item -Recurse -Force "build"
}

# Step 2: Install dependencies (if needed)
Write-Host "📦 Installing dependencies..." -ForegroundColor Yellow
npm install

# Step 3: Build the project
Write-Host "🏗️ Building production version..." -ForegroundColor Yellow
npm run build

# Step 4: Ensure CNAME file exists in build directory
Write-Host "🌐 Configuring custom domain..." -ForegroundColor Yellow
$cnameContent = "aijobchommie.co.za"
$cnameContent | Out-File -FilePath "build/CNAME" -Encoding ASCII -NoNewline

# Step 5: Add all changes to git
Write-Host "📝 Adding changes to git..." -ForegroundColor Yellow
git add .

# Step 6: Commit changes
$commitMessage = "Deploy: $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss') - Updated build with domain configuration"
Write-Host "💾 Committing changes..." -ForegroundColor Yellow
git commit -m $commitMessage

# Step 7: Push to GitHub
Write-Host "🚀 Pushing to GitHub..." -ForegroundColor Yellow
git push origin main

Write-Host "✅ Deployment Complete!" -ForegroundColor Green
Write-Host "" 
Write-Host "📊 Deployment Status:" -ForegroundColor Cyan
Write-Host "  🔗 GitHub Pages URL: https://fernandosteyn.github.io/aijobchommie-website/" -ForegroundColor White
Write-Host "  🌐 Custom Domain: https://aijobchommie.co.za" -ForegroundColor White
Write-Host "  ⏱️ DNS Propagation: May take up to 24-48 hours" -ForegroundColor White
Write-Host ""
Write-Host "🔧 Next Steps:" -ForegroundColor Cyan  
Write-Host "  1. Check GitHub Pages settings in repository" -ForegroundColor White
Write-Host "  2. Verify custom domain is set to: aijobchommie.co.za" -ForegroundColor White
Write-Host "  3. Enable 'Enforce HTTPS' if available" -ForegroundColor White
Write-Host "  4. Wait for DNS propagation (usually 2-4 hours)" -ForegroundColor White
Write-Host ""
Write-Host "If domain does not work immediately:" -ForegroundColor Yellow
Write-Host "  - DNS changes can take time to propagate globally" -ForegroundColor White
Write-Host "  - Try accessing the GitHub Pages URL first to verify deployment" -ForegroundColor White
Write-Host "  - Clear browser cache and try again" -ForegroundColor White
