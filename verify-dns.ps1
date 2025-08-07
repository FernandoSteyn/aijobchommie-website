# 🌐 DNS VERIFICATION SCRIPT FOR AIJOBCHOMMIE.CO.ZA 🌐

param(
    [switch]$Continuous,
    [int]$IntervalMinutes = 15
)

Write-Host "🚀 DNS VERIFICATION FOR AIJOBCHOMMIE.CO.ZA" -ForegroundColor Cyan
Write-Host "=" * 50 -ForegroundColor Cyan

function Test-DNSConfiguration {
    Write-Host "`n⏰ DNS Check Started: $(Get-Date)" -ForegroundColor Yellow
    
    # Expected GitHub Pages IPs
    $expectedIPs = @(
        "185.199.108.153",
        "185.199.109.153", 
        "185.199.110.153",
        "185.199.111.153"
    )
    
    # Check root domain A records
    Write-Host "`n🔵 Checking A Records for aijobchommie.co.za..." -ForegroundColor Blue
    try {
        $aRecords = Resolve-DnsName -Name "aijobchommie.co.za" -Type A -ErrorAction Stop
        $actualIPs = $aRecords.IPAddress
        
        Write-Host "Found IPs:" -ForegroundColor Green
        foreach ($ip in $actualIPs) {
            if ($expectedIPs -contains $ip) {
                Write-Host "  ✅ $ip (GitHub Pages)" -ForegroundColor Green
            } else {
                Write-Host "  ❌ $ip (Unknown - may be old/incorrect)" -ForegroundColor Red
            }
        }
        
        $correctIPs = $actualIPs | Where-Object { $expectedIPs -contains $_ }
        if ($correctIPs.Count -eq 4) {
            Write-Host "🎉 All A records are correct!" -ForegroundColor Green
        } elseif ($correctIPs.Count -gt 0) {
            Write-Host "⚠️  Partial A record configuration ($($correctIPs.Count)/4 correct)" -ForegroundColor Yellow
        } else {
            Write-Host "❌ No correct A records found!" -ForegroundColor Red
        }
    }
    catch {
        Write-Host "❌ Could not resolve A records: $($_.Exception.Message)" -ForegroundColor Red
    }
    
    # Check www CNAME record
    Write-Host "`n🔴 Checking CNAME Record for www.aijobchommie.co.za..." -ForegroundColor Blue
    try {
        $cnameRecord = Resolve-DnsName -Name "www.aijobchommie.co.za" -Type CNAME -ErrorAction Stop
        if ($cnameRecord.NameHost -eq "fernandosteyn.github.io") {
            Write-Host "✅ CNAME record is correct: $($cnameRecord.NameHost)" -ForegroundColor Green
        } else {
            Write-Host "❌ CNAME record is incorrect: $($cnameRecord.NameHost)" -ForegroundColor Red
            Write-Host "   Expected: fernandosteyn.github.io" -ForegroundColor Yellow
        }
    }
    catch {
        Write-Host "❌ Could not resolve CNAME record: $($_.Exception.Message)" -ForegroundColor Red
    }
    
    # Test website accessibility
    Write-Host "`n🌐 Testing Website Accessibility..." -ForegroundColor Blue
    
    $testUrls = @(
        "https://aijobchommie.co.za",
        "https://www.aijobchommie.co.za"
    )
    
    foreach ($url in $testUrls) {
        try {
            Write-Host "Testing $url..." -ForegroundColor Gray
            $response = Invoke-WebRequest -Uri $url -Method Head -TimeoutSec 10 -ErrorAction Stop
            Write-Host "✅ $url - Status: $($response.StatusCode)" -ForegroundColor Green
            
            # Check for SSL
            if ($url.StartsWith("https://")) {
                Write-Host "   🔒 SSL Certificate: Working" -ForegroundColor Green
            }
        }
        catch {
            Write-Host "❌ $url - Error: $($_.Exception.Message)" -ForegroundColor Red
        }
    }
    
    # DNS Propagation Status
    Write-Host "`n📡 DNS Propagation Summary:" -ForegroundColor Magenta
    $aRecordsOK = try { (Resolve-DnsName -Name "aijobchommie.co.za" -Type A -ErrorAction Stop).Count -eq 4 } catch { $false }
    $cnameOK = try { (Resolve-DnsName -Name "www.aijobchommie.co.za" -Type CNAME -ErrorAction Stop).NameHost -eq "fernandosteyn.github.io" } catch { $false }
    $websiteOK = try { (Invoke-WebRequest -Uri "https://aijobchommie.co.za" -Method Head -TimeoutSec 5 -ErrorAction Stop).StatusCode -eq 200 } catch { $false }
    
    if ($aRecordsOK -and $cnameOK -and $websiteOK) {
        Write-Host "🎉 FULL SUCCESS! Your website is live and accessible!" -ForegroundColor Green
        Write-Host "🌍 Visit: https://aijobchommie.co.za" -ForegroundColor Cyan
        return $true
    } elseif ($aRecordsOK -and $cnameOK) {
        Write-Host "🔄 DNS is configured correctly, waiting for website to become accessible..." -ForegroundColor Yellow
        return $false
    } else {
        Write-Host "⚠️  DNS configuration still propagating or needs correction..." -ForegroundColor Yellow
        return $false
    }
}

# Run verification
if ($Continuous) {
    Write-Host "🔄 Running in continuous mode (checking every $IntervalMinutes minutes)" -ForegroundColor Cyan
    Write-Host "Press Ctrl+C to stop" -ForegroundColor Gray
    
    do {
        $success = Test-DNSConfiguration
        if ($success) {
            Write-Host "`n🎊 SUCCESS! Website is fully operational!" -ForegroundColor Green
            break
        }
        
        Write-Host "`n⏳ Waiting $IntervalMinutes minutes before next check..." -ForegroundColor Gray
        Start-Sleep -Seconds ($IntervalMinutes * 60)
    } while ($true)
} else {
    Test-DNSConfiguration
}

Write-Host "`n" -ForegroundColor White
Write-Host "📋 NEXT STEPS:" -ForegroundColor Cyan
Write-Host "1. Configure DNS records in Cloudshare (see CLOUDSHARE_DNS_SETUP.md)" -ForegroundColor White
Write-Host "2. Wait for DNS propagation (4-48 hours)" -ForegroundColor White
Write-Host "3. Run this script with -Continuous flag to monitor progress" -ForegroundColor White
Write-Host "4. Once live, test all features and Facebook verification" -ForegroundColor White
Write-Host "`nTo monitor continuously: .\verify-dns.ps1 -Continuous" -ForegroundColor Yellow
