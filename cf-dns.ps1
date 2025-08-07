# CLOUDFLARE DNS SETUP FOR AIJOBCHOMMIE.CO.ZA

param(
    [switch]$Login,
    [switch]$Setup,
    [switch]$Verify
)

Write-Host "🌐 CLOUDFLARE DNS MANAGER FOR AIJOBCHOMMIE.CO.ZA" -ForegroundColor Cyan

if ($Login) {
    Write-Host "`n🔐 CLOUDFLARE LOGIN" -ForegroundColor Yellow
    Write-Host "Opening browser for authentication..." -ForegroundColor Gray
    wrangler login
    if ($LASTEXITCODE -eq 0) {
        Write-Host "✅ Successfully authenticated!" -ForegroundColor Green
    } else {
        Write-Host "❌ Authentication failed" -ForegroundColor Red
    }
    exit
}

if ($Setup) {
    Write-Host "`n🚀 DNS RECORD SETUP" -ForegroundColor Yellow
    
    # Check auth
    wrangler whoami
    if ($LASTEXITCODE -ne 0) {
        Write-Host "❌ Please login first: .\cf-dns.ps1 -Login" -ForegroundColor Red
        exit
    }
    
    # List zones
    Write-Host "`n📋 Available zones:" -ForegroundColor Blue
    wrangler zone list
    
    $zoneId = Read-Host "`nEnter Zone ID for aijobchommie.co.za"
    
    if (-not $zoneId) {
        Write-Host "❌ Zone ID required" -ForegroundColor Red
        exit
    }
    
    # Get API token
    $apiToken = $env:CLOUDFLARE_API_TOKEN
    if (-not $apiToken) {
        Write-Host "`n🔑 Please set your API token first:" -ForegroundColor Yellow
        Write-Host "Go to: https://dash.cloudflare.com/profile/api-tokens" -ForegroundColor Gray
        Write-Host "Create token with Zone:Edit permissions" -ForegroundColor Gray
        Write-Host "`nThen run:" -ForegroundColor Yellow
        Write-Host "`$env:CLOUDFLARE_API_TOKEN = 'your-token-here'" -ForegroundColor Cyan
        exit
    }
    
    Write-Host "✅ API Token found" -ForegroundColor Green
    
    # GitHub Pages IPs
    $githubIPs = @(
        "185.199.108.153",
        "185.199.109.153", 
        "185.199.110.153",
        "185.199.111.153"
    )
    
    $headers = @{
        "Authorization" = "Bearer $apiToken"
        "Content-Type" = "application/json"
    }
    
    Write-Host "`n📝 Creating DNS records..." -ForegroundColor Blue
    
    # Create A records
    foreach ($ip in $githubIPs) {
        $body = @{
            type = "A"
            name = "@"
            content = $ip
            ttl = 3600
        } | ConvertTo-Json
        
        Write-Host "Creating A record: @ -> $ip" -ForegroundColor Gray
        
        try {
            $response = Invoke-RestMethod -Uri "https://api.cloudflare.com/client/v4/zones/$zoneId/dns_records" -Method Post -Headers $headers -Body $body
            if ($response.success) {
                Write-Host "✅ A record created: $ip" -ForegroundColor Green
            } else {
                Write-Host "❌ Failed: $($response.errors[0].message)" -ForegroundColor Red
            }
        }
        catch {
            Write-Host "❌ Error: $($_.Exception.Message)" -ForegroundColor Red
        }
    }
    
    # Create CNAME record
    $body = @{
        type = "CNAME"
        name = "www"
        content = "fernandosteyn.github.io"
        ttl = 3600
    } | ConvertTo-Json
    
    Write-Host "Creating CNAME record: www -> fernandosteyn.github.io" -ForegroundColor Gray
    
    try {
        $response = Invoke-RestMethod -Uri "https://api.cloudflare.com/client/v4/zones/$zoneId/dns_records" -Method Post -Headers $headers -Body $body
        if ($response.success) {
            Write-Host "✅ CNAME record created" -ForegroundColor Green
        } else {
            Write-Host "❌ Failed: $($response.errors[0].message)" -ForegroundColor Red
        }
    }
    catch {
        Write-Host "❌ Error: $($_.Exception.Message)" -ForegroundColor Red
    }
    
    Write-Host "`n🎉 DNS setup complete!" -ForegroundColor Green
    Write-Host "Records will propagate in a few minutes with Cloudflare" -ForegroundColor Yellow
    exit
}

if ($Verify) {
    Write-Host "`n🔍 VERIFYING DNS RECORDS" -ForegroundColor Blue
    
    $domain = "aijobchommie.co.za"
    $githubIPs = @("185.199.108.153", "185.199.109.153", "185.199.110.153", "185.199.111.153")
    
    # Test A records
    Write-Host "`nTesting A records..." -ForegroundColor Gray
    try {
        $aRecords = Resolve-DnsName -Name $domain -Type A -ErrorAction Stop
        foreach ($ip in $aRecords.IPAddress) {
            if ($githubIPs -contains $ip) {
                Write-Host "✅ $ip (GitHub Pages)" -ForegroundColor Green
            } else {
                Write-Host "⚠️  $ip (Unknown)" -ForegroundColor Yellow
            }
        }
    }
    catch {
        Write-Host "❌ Could not resolve A records" -ForegroundColor Red
    }
    
    # Test CNAME record
    Write-Host "`nTesting CNAME record..." -ForegroundColor Gray
    try {
        $cname = Resolve-DnsName -Name "www.$domain" -Type CNAME -ErrorAction Stop
        if ($cname.NameHost -eq "fernandosteyn.github.io") {
            Write-Host "✅ CNAME correct: $($cname.NameHost)" -ForegroundColor Green
        } else {
            Write-Host "❌ CNAME incorrect: $($cname.NameHost)" -ForegroundColor Red
        }
    }
    catch {
        Write-Host "❌ Could not resolve CNAME" -ForegroundColor Red
    }
    
    # Test website
    Write-Host "`nTesting website accessibility..." -ForegroundColor Gray
    try {
        $response = Invoke-WebRequest -Uri "https://$domain" -Method Head -TimeoutSec 10 -ErrorAction Stop
        Write-Host "✅ Website accessible: Status $($response.StatusCode)" -ForegroundColor Green
    }
    catch {
        Write-Host "❌ Website not accessible yet" -ForegroundColor Red
    }
    
    exit
}

# Show help if no parameters
Write-Host "`n📋 USAGE:" -ForegroundColor Yellow
Write-Host "  .\cf-dns.ps1 -Login        # Authenticate with Cloudflare" -ForegroundColor White
Write-Host "  .\cf-dns.ps1 -Setup        # Configure DNS records" -ForegroundColor White
Write-Host "  .\cf-dns.ps1 -Verify       # Check DNS records" -ForegroundColor White

Write-Host "`n🚀 QUICK START:" -ForegroundColor Cyan
Write-Host "1. .\cf-dns.ps1 -Login" -ForegroundColor White
Write-Host "2. Get API token from https://dash.cloudflare.com/profile/api-tokens" -ForegroundColor White
Write-Host "3. `$env:CLOUDFLARE_API_TOKEN = 'your-token'" -ForegroundColor White
Write-Host "4. .\cf-dns.ps1 -Setup" -ForegroundColor White
Write-Host "5. .\cf-dns.ps1 -Verify" -ForegroundColor White
