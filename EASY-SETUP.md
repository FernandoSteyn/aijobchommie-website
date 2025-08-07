# 🚀 ULTRA-EASY DNS SETUP - 5 MINUTES TOTAL

## 🎯 **I'LL DO 95% - YOU JUST CLICK 3 BUTTONS**

### **STEP 1: Get Token (2 minutes)**
1. **Click this link**: https://dash.cloudflare.com/profile/api-tokens
2. **Click**: "Create Token" 
3. **Click**: "Custom token"
4. **Fill in exactly**:
   - Token name: `dns-setup`
   - Permissions: `Zone:DNS:Edit` and `Zone:Zone:Read`
   - Zone: `aijobchommie.co.za`
5. **Click**: "Continue to summary" → "Create Token"
6. **COPY the token** (looks like: `1234abcd_xyz...`)

### **STEP 2: Paste Token Here (30 seconds)**
```powershell
$env:CLOUDFLARE_API_TOKEN = "PASTE-YOUR-TOKEN-HERE"
```

### **STEP 3: Run My Magic Script (2 minutes)**
```powershell
.\auto-dns-setup.ps1
```

**That's it! I'll handle everything else automatically!**

---

## ✨ **WHAT MY SCRIPT DOES FOR YOU:**
- ✅ Finds your zone ID automatically
- ✅ Deletes any old DNS records
- ✅ Creates 4 perfect A records for GitHub Pages
- ✅ Creates perfect CNAME record for www
- ✅ Verifies everything works
- ✅ Tests your website accessibility
- ✅ Gives you a success report

## 🌍 **RESULT:**
Your God-tier website will be live at `https://aijobchommie.co.za` within 5 minutes!
