# Simple Cloudflare DNS Setup

param([switch]$Login, [switch]$Setup, [switch]$Verify)

Write-Host "Cloudflare DNS Manager for aijobchommie.co.za" -ForegroundColor Cyan

if ($Login) {
    Write-Host "Opening browser for Cloudflare login..." -ForegroundColor Yellow
    wrangler login
    exit
}

if ($Setup) {
    Write-Host "Setting up DNS records..." -ForegroundColor Yellow
    
    # Check authentication
    wrangler whoami
    if ($LASTEXITCODE -ne 0) {
        Write-Host "Please login first: .\simple-cf.ps1 -Login" -ForegroundColor Red
        exit
    }
    
    # List zones
    Write-Host "Available zones:" -ForegroundColor Blue
    wrangler zone list
    
    $zoneId = Read-Host "Enter Zone ID for aijobchommie.co.za"
    
    if (-not $zoneId) {
        Write-Host "Zone ID required" -ForegroundColor Red
        exit
    }
    
    # Check for API token
    $apiToken = $env:CLOUDFLARE_API_TOKEN
    if (-not $apiToken) {
        Write-Host "API Token required!" -ForegroundColor Red
        Write-Host "1. Go to: https://dash.cloudflare.com/profile/api-tokens" -ForegroundColor Gray
        Write-Host "2. Create token with Zone:Edit permissions" -ForegroundColor Gray
        Write-Host "3. Run: Set-Item -Path env:CLOUDFLARE_API_TOKEN -Value 'your-token'" -ForegroundColor Gray
        exit
    }
    
    $headers = @{
        "Authorization" = "Bearer $apiToken"
        "Content-Type" = "application/json"
    }
    
    # GitHub IPs
    $ips = @("185.199.108.153", "185.199.109.153", "185.199.110.153", "185.199.111.153")
    
    # Create A records
    foreach ($ip in $ips) {
        $body = @{
            type = "A"
            name = "@"
            content = $ip
            ttl = 3600
        } | ConvertTo-Json
        
        Write-Host "Creating A record: $ip" -ForegroundColor Gray
        
        try {
            $response = Invoke-RestMethod -Uri "https://api.cloudflare.com/client/v4/zones/$zoneId/dns_records" -Method Post -Headers $headers -Body $body
            if ($response.success) {
                Write-Host "Success: A record $ip" -ForegroundColor Green
            } else {
                Write-Host "Failed: $($response.errors[0].message)" -ForegroundColor Red
            }
        } catch {
            Write-Host "Error: $($_.Exception.Message)" -ForegroundColor Red
        }
    }
    
    # Create CNAME record
    $body = @{
        type = "CNAME"
        name = "www"
        content = "fernandosteyn.github.io"
        ttl = 3600
    } | ConvertTo-Json
    
    Write-Host "Creating CNAME record: www" -ForegroundColor Gray
    
    try {
        $response = Invoke-RestMethod -Uri "https://api.cloudflare.com/client/v4/zones/$zoneId/dns_records" -Method Post -Headers $headers -Body $body
        if ($response.success) {
            Write-Host "Success: CNAME record" -ForegroundColor Green
        } else {
            Write-Host "Failed: $($response.errors[0].message)" -ForegroundColor Red
        }
    } catch {
        Write-Host "Error: $($_.Exception.Message)" -ForegroundColor Red
    }
    
    Write-Host "DNS setup complete!" -ForegroundColor Green
    exit
}

if ($Verify) {
    Write-Host "Verifying DNS records..." -ForegroundColor Blue
    
    # Test A records
    try {
        $records = Resolve-DnsName -Name "aijobchommie.co.za" -Type A
        foreach ($ip in $records.IPAddress) {
            Write-Host "A record: $ip" -ForegroundColor Green
        }
    } catch {
        Write-Host "Could not resolve A records" -ForegroundColor Red
    }
    
    # Test CNAME
    try {
        $cname = Resolve-DnsName -Name "www.aijobchommie.co.za" -Type CNAME
        Write-Host "CNAME: $($cname.NameHost)" -ForegroundColor Green
    } catch {
        Write-Host "Could not resolve CNAME" -ForegroundColor Red
    }
    
    # Test website
    try {
        $response = Invoke-WebRequest -Uri "https://aijobchommie.co.za" -Method Head -TimeoutSec 5
        Write-Host "Website: HTTP $($response.StatusCode)" -ForegroundColor Green
    } catch {
        Write-Host "Website not accessible yet" -ForegroundColor Red
    }
    
    exit
}

# Show help
Write-Host ""
Write-Host "USAGE:" -ForegroundColor Yellow
Write-Host "  .\simple-cf.ps1 -Login" -ForegroundColor White
Write-Host "  .\simple-cf.ps1 -Setup" -ForegroundColor White
Write-Host "  .\simple-cf.ps1 -Verify" -ForegroundColor White
