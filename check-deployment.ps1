# 🚀 AI Job Chommie - Deployment Verification Script
# Run this after enabling GitHub Pages

Write-Host "🔥 AI JOB CHOMMIE - DEPLOYMENT CHECK 🔥" -ForegroundColor Cyan
Write-Host "==========================================" -ForegroundColor Yellow

Write-Host "`n📊 Checking GitHub Pages status..." -ForegroundColor Green
$githubUrl = "https://fernandosteyn.github.io/aijobchommie-website"
$customUrl = "https://aijobchommie.co.za"

try {
    $response = Invoke-WebRequest -Uri $githubUrl -Method Head -ErrorAction SilentlyContinue
    if ($response.StatusCode -eq 200) {
        Write-Host "✅ GitHub Pages URL is LIVE: $githubUrl" -ForegroundColor Green
    }
} catch {
    Write-Host "⏳ GitHub Pages still deploying: $githubUrl" -ForegroundColor Yellow
    Write-Host "   (This is normal for first deployment - wait 2-5 minutes)" -ForegroundColor Yellow
}

Write-Host "`n🌐 Checking custom domain..." -ForegroundColor Green
try {
    $customResponse = Invoke-WebRequest -Uri $customUrl -Method Head -ErrorAction SilentlyContinue
    if ($customResponse.StatusCode -eq 200) {
        Write-Host "✅ Custom domain is LIVE: $customUrl" -ForegroundColor Green
        Write-Host "🎉 FACEBOOK VERIFICATION READY!" -ForegroundColor Magenta
    }
} catch {
    Write-Host "⏳ Custom domain pending DNS setup: $customUrl" -ForegroundColor Yellow
    Write-Host "   Configure DNS with Cloudshare first" -ForegroundColor Yellow
}

Write-Host "`n📋 Next Steps:" -ForegroundColor Cyan
Write-Host "1. Enable GitHub Pages (if not done)" -ForegroundColor White
Write-Host "2. Configure DNS with Cloudshare" -ForegroundColor White
Write-Host "3. Wait for SSL certificate (automatic)" -ForegroundColor White
Write-Host "4. Verify Facebook domain" -ForegroundColor White

Write-Host "`n🇿🇦 PROUDLY SOUTH AFRICAN - READY FOR TIA.ORG.ZA! 🇿🇦" -ForegroundColor Magenta
