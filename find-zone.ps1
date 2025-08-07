# Find Cloudflare Zone ID

Write-Host "Finding Zone ID for aijobchommie.co.za" -ForegroundColor Cyan

$apiToken = $env:CLOUDFLARE_API_TOKEN
if (-not $apiToken) {
    Write-Host "ERROR: API Token not set!" -ForegroundColor Red
    Write-Host "Please set it first:" -ForegroundColor Yellow
    Write-Host '$env:CLOUDFLARE_API_TOKEN = "your-token-here"' -ForegroundColor Gray
    Write-Host ""
    Write-Host "Get token from: https://dash.cloudflare.com/profile/api-tokens" -ForegroundColor Blue
    exit
}

$headers = @{
    "Authorization" = "Bearer $apiToken"
    "Content-Type" = "application/json"
}

try {
    Write-Host "Fetching zones..." -ForegroundColor Gray
    $response = Invoke-RestMethod -Uri "https://api.cloudflare.com/client/v4/zones" -Headers $headers
    
    if ($response.success) {
        Write-Host "✅ Successfully retrieved zones" -ForegroundColor Green
        
        $targetZone = $response.result | Where-Object { $_.name -eq "aijobchommie.co.za" }
        
        if ($targetZone) {
            Write-Host ""
            Write-Host "🎯 FOUND YOUR ZONE:" -ForegroundColor Green
            Write-Host "Domain: $($targetZone.name)" -ForegroundColor White
            Write-Host "Zone ID: $($targetZone.id)" -ForegroundColor Yellow
            Write-Host "Status: $($targetZone.status)" -ForegroundColor Gray
            Write-Host ""
            Write-Host "✅ Copy this Zone ID for DNS setup: $($targetZone.id)" -ForegroundColor Cyan
        } else {
            Write-Host ""
            Write-Host "❌ Domain 'aijobchommie.co.za' not found in your Cloudflare account" -ForegroundColor Red
            Write-Host ""
            Write-Host "Available zones in your account:" -ForegroundColor Yellow
            foreach ($zone in $response.result) {
                Write-Host "  - $($zone.name) (ID: $($zone.id))" -ForegroundColor Gray
            }
        }
    } else {
        Write-Host "❌ API request failed" -ForegroundColor Red
        Write-Host "Errors: $($response.errors | ConvertTo-Json)" -ForegroundColor Red
    }
} catch {
    Write-Host "❌ Error connecting to Cloudflare API" -ForegroundColor Red
    Write-Host "Error: $($_.Exception.Message)" -ForegroundColor Red
    Write-Host ""
    Write-Host "Check:" -ForegroundColor Yellow
    Write-Host "1. Your API token is correct" -ForegroundColor Gray
    Write-Host "2. Token has Zone:Read permissions" -ForegroundColor Gray
    Write-Host "3. Your internet connection is working" -ForegroundColor Gray
}
