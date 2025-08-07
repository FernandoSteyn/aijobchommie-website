# 🌐 CLOUDFLARE DNS MANAGEMENT SCRIPT FOR AIJOBCHOMMIE.CO.ZA 🌐

param(
    [switch]$Login,
    [switch]$Setup,
    [switch]$Verify,
    [switch]$Status,
    [string]$ZoneId = ""
)

$domain = "aijobchommie.co.za"
$githubTarget = "fernandosteyn.github.io"

# GitHub Pages IP addresses
$githubIPs = @(
    "185.199.108.153",
    "185.199.109.153", 
    "185.199.110.153",
    "185.199.111.153"
)

Write-Host "🌐 CLOUDFLARE DNS MANAGER FOR AIJOBCHOMMIE.CO.ZA" -ForegroundColor Cyan
Write-Host "=" * 60 -ForegroundColor Cyan

function Show-Help {
    Write-Host "`n📋 USAGE:" -ForegroundColor Yellow
    Write-Host "  .\cloudflare-dns-setup-fixed.ps1 -Login        # Authenticate with Cloudflare" -ForegroundColor White
    Write-Host "  .\cloudflare-dns-setup-fixed.ps1 -Setup        # Configure DNS records" -ForegroundColor White
    Write-Host "  .\cloudflare-dns-setup-fixed.ps1 -Verify       # Check DNS records" -ForegroundColor White
    Write-Host "  .\cloudflare-dns-setup-fixed.ps1 -Status       # Show account status" -ForegroundColor White
    Write-Host "`n🔐 AUTHENTICATION REQUIRED:" -ForegroundColor Yellow
    Write-Host "You'll need your Cloudflare API Token with Zone:Edit permissions" -ForegroundColor Gray
    Write-Host "Get it from: https://dash.cloudflare.com/profile/api-tokens" -ForegroundColor Gray
}

function Test-Authentication {
    try {
        $result = wrangler whoami 2>&1
        if ($LASTEXITCODE -eq 0) {
            Write-Host "✅ Authenticated with Cloudflare" -ForegroundColor Green
            Write-Host "$result" -ForegroundColor Gray
            return $true
        } else {
            Write-Host "❌ Not authenticated with Cloudflare" -ForegroundColor Red
            return $false
        }
    }
    catch {
        Write-Host "❌ Cloudflare CLI not working: $($_.Exception.Message)" -ForegroundColor Red
        return $false
    }
}

function Start-Login {
    Write-Host "`n🔐 CLOUDFLARE AUTHENTICATION" -ForegroundColor Yellow
    Write-Host "This will open your browser to authenticate with Cloudflare..." -ForegroundColor Gray
    Write-Host "If you prefer using an API token, you can set it manually:" -ForegroundColor Gray
    Write-Host "  Set-Item -Path env:CLOUDFLARE_API_TOKEN -Value 'your-token-here'" -ForegroundColor Cyan
    
    Read-Host "`nPress Enter to continue with browser authentication"
    
    try {
        wrangler login
        if ($LASTEXITCODE -eq 0) {
            Write-Host "✅ Successfully authenticated!" -ForegroundColor Green
            Test-Authentication
        } else {
            Write-Host "❌ Authentication failed" -ForegroundColor Red
        }
    }
    catch {
        Write-Host "❌ Login error: $($_.Exception.Message)" -ForegroundColor Red
    }
}

function Get-ZoneId {
    param([string]$domain)
    
    Write-Host "🔍 Finding zone ID for $domain..." -ForegroundColor Blue
    try {
        # Use wrangler to list zones and find our domain
        $zones = wrangler zone list 2>&1
        if ($LASTEXITCODE -ne 0) {
            Write-Host "❌ Could not list zones. Make sure you're authenticated." -ForegroundColor Red
            return $null
        }
        
        Write-Host "Available zones:" -ForegroundColor Gray
        Write-Host "$zones" -ForegroundColor Gray
        
        # For now, we'll ask user to provide zone ID manually
        Write-Host "`n📋 Please find your zone ID from the list above" -ForegroundColor Yellow
        $zoneId = Read-Host "Enter the Zone ID for $domain"
        
        if ($zoneId) {
            Write-Host "✅ Using Zone ID: $zoneId" -ForegroundColor Green
            return $zoneId
        }
        
        return $null
    }
    catch {
        Write-Host "❌ Error getting zone ID: $($_.Exception.Message)" -ForegroundColor Red
        return $null
    }
}

function Set-DNSRecords {
    param([string]$zoneId)
    
    if (-not $zoneId) {
        $zoneId = Get-ZoneId -domain $domain
        if (-not $zoneId) {
            Write-Host "❌ Could not determine Zone ID. Cannot proceed with DNS setup." -ForegroundColor Red
            return
        }
    }
    
    Write-Host "`n🚀 SETTING UP DNS RECORDS FOR $domain" -ForegroundColor Cyan
    
    # Get API token
    $apiToken = $env:CLOUDFLARE_API_TOKEN
    if (-not $apiToken) {
        Write-Host "`n🔑 API Token Required" -ForegroundColor Yellow
        Write-Host "Set your Cloudflare API Token with Zone:Edit permissions:" -ForegroundColor Gray
        Write-Host "  `$env:CLOUDFLARE_API_TOKEN = 'your-token-here'" -ForegroundColor Cyan
        Write-Host "`nGet token from: https://dash.cloudflare.com/profile/api-tokens" -ForegroundColor Gray
        return
    }
    
    Write-Host "✅ API Token found" -ForegroundColor Green
    
    # Create API commands for DNS records
    Write-Host "`n📝 Creating DNS records..." -ForegroundColor Blue
    
    $headers = @{
        "Authorization" = "Bearer $apiToken"
        "Content-Type" = "application/json"
    }
    
    # Create A records for root domain
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
                Write-Host "❌ Failed to create A record for $ip" -ForegroundColor Red
                Write-Host "Error: $($response.errors | ConvertTo-Json)" -ForegroundColor Red
            }
        }
        catch {
            Write-Host "❌ API Error creating A record for ${ip}: $($_.Exception.Message)" -ForegroundColor Red
        }
    }
    
    # Create CNAME record for www
    $body = @{
        type = "CNAME"
        name = "www"
        content = $githubTarget
        ttl = 3600
    } | ConvertTo-Json
    
    Write-Host "Creating CNAME record: www -> $githubTarget" -ForegroundColor Gray
    
    try {
        $response = Invoke-RestMethod -Uri "https://api.cloudflare.com/client/v4/zones/$zoneId/dns_records" -Method Post -Headers $headers -Body $body
        if ($response.success) {
            Write-Host "✅ CNAME record created: www -> $githubTarget" -ForegroundColor Green
        } else {
            Write-Host "❌ Failed to create CNAME record" -ForegroundColor Red
            Write-Host "Error: $($response.errors | ConvertTo-Json)" -ForegroundColor Red
        }
    }
    catch {
        Write-Host "❌ API Error creating CNAME record: $($_.Exception.Message)" -ForegroundColor Red
    }
    
    Write-Host "`n🎉 DNS SETUP COMPLETE!" -ForegroundColor Green
    Write-Host "Your records should propagate within a few minutes with Cloudflare." -ForegroundColor Yellow
    Write-Host "Run: .\cloudflare-dns-setup-fixed.ps1 -Verify to check the results" -ForegroundColor Cyan
}

function Test-DNSRecords {
    Write-Host "`n🔍 VERIFYING DNS RECORDS" -ForegroundColor Blue
    
    # Test A records
    Write-Host "`nTesting A records for $domain..." -ForegroundColor Gray
    try {
        $aRecords = Resolve-DnsName -Name $domain -Type A -ErrorAction Stop
        $foundIPs = $aRecords.IPAddress
        
        Write-Host "Found A records:" -ForegroundColor Green
        foreach ($ip in $foundIPs) {
            if ($githubIPs -contains $ip) {
                Write-Host "  ✅ $ip (GitHub Pages)" -ForegroundColor Green
            } else {
                Write-Host "  ⚠️  $ip (Unknown/Old record)" -ForegroundColor Yellow
            }
        }
        
        $correctCount = ($foundIPs | Where-Object { $githubIPs -contains $_ }).Count
        if ($correctCount -eq 4) {
            Write-Host "🎉 All A records are correct!" -ForegroundColor Green
        } else {
            Write-Host "⚠️  Only $correctCount/4 correct A records found" -ForegroundColor Yellow
        }
    }
    catch {
        Write-Host "❌ Could not resolve A records: $($_.Exception.Message)" -ForegroundColor Red
    }
    
    # Test CNAME record
    Write-Host "`nTesting CNAME record for www.$domain..." -ForegroundColor Gray
    try {
        $cnameRecord = Resolve-DnsName -Name "www.$domain" -Type CNAME -ErrorAction Stop
        if ($cnameRecord.NameHost -eq $githubTarget) {
            Write-Host "✅ CNAME record is correct: www -> $($cnameRecord.NameHost)" -ForegroundColor Green
        } else {
            Write-Host "❌ CNAME record is incorrect: www -> $($cnameRecord.NameHost)" -ForegroundColor Red
            Write-Host "   Expected: $githubTarget" -ForegroundColor Yellow
        }
    }
    catch {
        Write-Host "❌ Could not resolve CNAME record: $($_.Exception.Message)" -ForegroundColor Red
    }
    
    # Test website accessibility
    Write-Host "`nTesting website accessibility..." -ForegroundColor Gray
    $testUrls = @("https://$domain", "https://www.$domain")
    
    foreach ($url in $testUrls) {
        try {
            $response = Invoke-WebRequest -Uri $url -Method Head -TimeoutSec 10 -ErrorAction Stop
            Write-Host "✅ $url - Status: $($response.StatusCode)" -ForegroundColor Green
        }
        catch {
            Write-Host "❌ $url - Not accessible yet" -ForegroundColor Red
        }
    }
}

# Main execution logic
if (-not $Login -and -not $Setup -and -not $Verify -and -not $Status) {
    Show-Help
    exit
}

if ($Login) {
    Start-Login
}

if ($Status) {
    Test-Authentication
}

if ($Setup) {
    if (Test-Authentication) {
        Set-DNSRecords -zoneId $ZoneId
    } else {
        Write-Host "❌ Please authenticate first: .\cloudflare-dns-setup-fixed.ps1 -Login" -ForegroundColor Red
    }
}

if ($Verify) {
    Test-DNSRecords
}

Write-Host "`n📋 NEXT STEPS:" -ForegroundColor Cyan
Write-Host "1. Login: .\cloudflare-dns-setup-fixed.ps1 -Login" -ForegroundColor White
Write-Host "2. Setup: .\cloudflare-dns-setup-fixed.ps1 -Setup" -ForegroundColor White  
Write-Host "3. Verify: .\cloudflare-dns-setup-fixed.ps1 -Verify" -ForegroundColor White
Write-Host "`n🌍 Once complete, your site will be live at: https://$domain" -ForegroundColor Green
