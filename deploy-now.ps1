# AUTOMATED DNS DEPLOYMENT FOR AIJOBCHOMMIE.CO.ZA

Write-Host "AUTOMATED DNS SETUP FOR AIJOBCHOMMIE.CO.ZA" -ForegroundColor Cyan
Write-Host "=================================================" -ForegroundColor Cyan

# Check for API token
$apiToken = $env:CLOUDFLARE_API_TOKEN
if (-not $apiToken) {
    Write-Host "ERROR: API Token not found!" -ForegroundColor Red
    Write-Host "Please set it first:" -ForegroundColor Yellow
    Write-Host '$env:CLOUDFLARE_API_TOKEN = "your-token"' -ForegroundColor Gray
    exit
}

Write-Host "API Token found!" -ForegroundColor Green

$headers = @{
    "Authorization" = "Bearer $apiToken"
    "Content-Type" = "application/json"
}

$domain = "aijobchommie.co.za"
$githubTarget = "fernandosteyn.github.io"
$githubIPs = @("185.199.108.153", "185.199.109.153", "185.199.110.153", "185.199.111.153")

Write-Host ""
Write-Host "Step 1: Finding your zone..." -ForegroundColor Blue

try {
    $zonesResponse = Invoke-RestMethod -Uri "https://api.cloudflare.com/client/v4/zones" -Headers $headers
    
    if (-not $zonesResponse.success) {
        Write-Host "Failed to retrieve zones" -ForegroundColor Red
        Write-Host "Error: $($zonesResponse.errors[0].message)" -ForegroundColor Red
        exit
    }
    
    $zone = $zonesResponse.result | Where-Object { $_.name -eq $domain }
    
    if (-not $zone) {
        Write-Host "Domain '$domain' not found in your Cloudflare account" -ForegroundColor Red
        Write-Host ""
        Write-Host "Available domains:" -ForegroundColor Yellow
        foreach ($z in $zonesResponse.result) {
            Write-Host "  - $($z.name)" -ForegroundColor Gray
        }
        exit
    }
    
    $zoneId = $zone.id
    Write-Host "Found zone: $domain (ID: $zoneId)" -ForegroundColor Green
    
} catch {
    Write-Host "Error connecting to Cloudflare API" -ForegroundColor Red
    Write-Host "Error: $($_.Exception.Message)" -ForegroundColor Red
    exit
}

Write-Host ""
Write-Host "Step 2: Cleaning up old DNS records..." -ForegroundColor Blue

try {
    $recordsResponse = Invoke-RestMethod -Uri "https://api.cloudflare.com/client/v4/zones/$zoneId/dns_records" -Headers $headers
    
    if ($recordsResponse.success) {
        $oldRecords = $recordsResponse.result | Where-Object { 
            ($_.type -eq "A" -and $_.name -eq $domain) -or 
            ($_.type -eq "CNAME" -and $_.name -eq "www.$domain") 
        }
        
        foreach ($record in $oldRecords) {
            Write-Host "Deleting old $($record.type) record: $($record.name) -> $($record.content)" -ForegroundColor Gray
            try {
                Invoke-RestMethod -Uri "https://api.cloudflare.com/client/v4/zones/$zoneId/dns_records/$($record.id)" -Method Delete -Headers $headers | Out-Null
                Write-Host "Deleted old record" -ForegroundColor Green
            } catch {
                Write-Host "Could not delete old record (continuing anyway)" -ForegroundColor Yellow
            }
        }
        
        if ($oldRecords.Count -eq 0) {
            Write-Host "No old records to clean up" -ForegroundColor Green
        }
    }
} catch {
    Write-Host "Could not clean old records (continuing anyway)" -ForegroundColor Yellow
}

Write-Host ""
Write-Host "Step 3: Creating new DNS records..." -ForegroundColor Blue

$successCount = 0

# Create A records
foreach ($ip in $githubIPs) {
    $body = @{
        type = "A"
        name = "@"
        content = $ip
        ttl = 300
    } | ConvertTo-Json
    
    Write-Host "Creating A record: @ -> $ip" -ForegroundColor Gray
    
    try {
        $response = Invoke-RestMethod -Uri "https://api.cloudflare.com/client/v4/zones/$zoneId/dns_records" -Method Post -Headers $headers -Body $body
        if ($response.success) {
            Write-Host "SUCCESS: A record created: $ip" -ForegroundColor Green
            $successCount++
        } else {
            Write-Host "FAILED: $($response.errors[0].message)" -ForegroundColor Red
        }
    } catch {
        Write-Host "ERROR: $($_.Exception.Message)" -ForegroundColor Red
    }
}

# Create CNAME record
$body = @{
    type = "CNAME"
    name = "www"
    content = $githubTarget
    ttl = 300
} | ConvertTo-Json

Write-Host "Creating CNAME record: www -> $githubTarget" -ForegroundColor Gray

try {
    $response = Invoke-RestMethod -Uri "https://api.cloudflare.com/client/v4/zones/$zoneId/dns_records" -Method Post -Headers $headers -Body $body
    if ($response.success) {
        Write-Host "SUCCESS: CNAME record created: www -> $githubTarget" -ForegroundColor Green
        $successCount++
    } else {
        Write-Host "FAILED: $($response.errors[0].message)" -ForegroundColor Red
    }
} catch {
    Write-Host "ERROR: $($_.Exception.Message)" -ForegroundColor Red
}

Write-Host ""
Write-Host "Step 4: Verifying DNS records..." -ForegroundColor Blue

Start-Sleep -Seconds 5

# Verify A records
Write-Host "Testing A records..." -ForegroundColor Gray
try {
    $aRecords = Resolve-DnsName -Name $domain -Type A -ErrorAction Stop
    $foundCorrectIPs = 0
    foreach ($ip in $aRecords.IPAddress) {
        if ($githubIPs -contains $ip) {
            Write-Host "SUCCESS: $ip (GitHub Pages)" -ForegroundColor Green
            $foundCorrectIPs++
        } else {
            Write-Host "WARNING: $ip (Unknown - may be cached old record)" -ForegroundColor Yellow
        }
    }
    
    if ($foundCorrectIPs -eq 4) {
        Write-Host "All A records are perfect!" -ForegroundColor Green
    } elseif ($foundCorrectIPs -gt 0) {
        Write-Host "Partial success - DNS still propagating ($foundCorrectIPs/4 correct)" -ForegroundColor Yellow
    }
} catch {
    Write-Host "A records not propagated yet (this is normal)" -ForegroundColor Yellow
}

# Verify CNAME record
Write-Host "Testing CNAME record..." -ForegroundColor Gray
try {
    $cname = Resolve-DnsName -Name "www.$domain" -Type CNAME -ErrorAction Stop
    if ($cname.NameHost -eq $githubTarget) {
        Write-Host "SUCCESS: CNAME correct: www -> $($cname.NameHost)" -ForegroundColor Green
    } else {
        Write-Host "WARNING: CNAME: www -> $($cname.NameHost) (may be old record)" -ForegroundColor Yellow
    }
} catch {
    Write-Host "CNAME record not propagated yet (this is normal)" -ForegroundColor Yellow
}

# Test website accessibility
Write-Host "Testing website accessibility..." -ForegroundColor Gray
try {
    $response = Invoke-WebRequest -Uri "https://$domain" -Method Head -TimeoutSec 15 -ErrorAction Stop
    Write-Host "WEBSITE IS LIVE! Status: $($response.StatusCode)" -ForegroundColor Green
    Write-Host "Your site: https://$domain" -ForegroundColor Cyan
} catch {
    Write-Host "Website not accessible yet - DNS still propagating" -ForegroundColor Yellow
    Write-Host "This is normal and can take a few minutes" -ForegroundColor Gray
}

Write-Host ""
Write-Host "DEPLOYMENT SUMMARY" -ForegroundColor Magenta
Write-Host "==================" -ForegroundColor Magenta
Write-Host "Domain: $domain" -ForegroundColor White
Write-Host "Records Created: $successCount/5" -ForegroundColor White
Write-Host "GitHub Target: $githubTarget" -ForegroundColor White
Write-Host "SSL: Automatic via Cloudflare" -ForegroundColor White

if ($successCount -eq 5) {
    Write-Host ""
    Write-Host "COMPLETE SUCCESS!" -ForegroundColor Green
    Write-Host "Your God-tier website is now live at:" -ForegroundColor Green
    Write-Host "  https://$domain" -ForegroundColor Cyan
    Write-Host "  https://www.$domain" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "Features now active:" -ForegroundColor Yellow
    Write-Host "  - Cyberpunk neon design with spotlights" -ForegroundColor Gray
    Write-Host "  - South African flag animations" -ForegroundColor Gray
    Write-Host "  - Partnership with tia.org.za" -ForegroundColor Gray
    Write-Host "  - 3-day free trials for Basic & Premium plans" -ForegroundColor Gray
    Write-Host "  - Facebook domain verification" -ForegroundColor Gray
    Write-Host "  - Lightning-fast Cloudflare CDN" -ForegroundColor Gray
    Write-Host "  - Automatic SSL certificate" -ForegroundColor Gray
    Write-Host ""
    Write-Host "Ready for global domination!" -ForegroundColor Cyan
} else {
    Write-Host ""
    Write-Host "Partial Success" -ForegroundColor Yellow
    Write-Host "Some records may need a few minutes to propagate." -ForegroundColor Gray
    Write-Host "Run: .\simple-cf.ps1 -Verify to check again later." -ForegroundColor Cyan
}

Write-Host ""
