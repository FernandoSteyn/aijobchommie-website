# 🔑 GET CLOUDFLARE API TOKEN FOR DNS MANAGEMENT

## 🎯 **STEP-BY-STEP INSTRUCTIONS**

### **1. Go to Cloudflare API Tokens Page**
Open in browser: **https://dash.cloudflare.com/profile/api-tokens**

### **2. Create Custom Token**
1. Click **"Create Token"**
2. Choose **"Custom token"** (not "Use template")

### **3. Configure Token Permissions**

#### **Token Name:**
```
aijobchommie-dns-management
```

#### **Permissions (Add these 3):**
```
Zone : Zone Settings : Edit
Zone : Zone : Read  
Zone : DNS : Edit
```

#### **Zone Resources:**
```
Include : Specific zone : aijobchommie.co.za
```

#### **IP Address Filtering (Optional):**
```
Leave blank for now
```

### **4. Create and Copy Token**
1. Click **"Continue to summary"**
2. Click **"Create Token"**  
3. **COPY THE TOKEN** (you won't see it again!)

### **5. Test the Token**
Run this in PowerShell:
```powershell
$env:CLOUDFLARE_API_TOKEN = "your-token-here"
```

### **6. Get Your Zone ID**
Run this to find your zone ID:
```powershell
$headers = @{
    "Authorization" = "Bearer $env:CLOUDFLARE_API_TOKEN"
    "Content-Type" = "application/json"
}
$response = Invoke-RestMethod -Uri "https://api.cloudflare.com/client/v4/zones" -Headers $headers
$response.result | Where-Object { $_.name -eq "aijobchommie.co.za" } | Select-Object name, id
```

## 🚀 **AFTER YOU HAVE THE TOKEN:**

1. Set the token: `$env:CLOUDFLARE_API_TOKEN = "your-token"`
2. Run DNS setup: `.\simple-cf.ps1 -Setup`
3. Verify setup: `.\simple-cf.ps1 -Verify`

## 🔐 **SECURITY NOTES:**
- Keep your API token secure
- Don't share it or commit it to code
- You can revoke it anytime from the Cloudflare dashboard
- The token is scoped only to DNS editing for your domain

---
**Once you have the token, come back and we'll set up your DNS records automatically! 🌍**
