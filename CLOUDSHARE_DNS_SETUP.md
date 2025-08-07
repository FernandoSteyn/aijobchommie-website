# 🌐 CLOUDSHARE DNS CONFIGURATION GUIDE 🌐

## 🎯 **EXACT STEPS FOR CLOUDSHARE DNS SETUP**

### **Login to Cloudshare Control Panel**
1. Go to: `https://www.cloudshare.co.za/` 
2. Login to your account
3. Navigate to **"Manage Domains"** or **"DNS Management"**
4. Select domain: `aijobchommie.co.za`

### **DNS Records to Configure**

#### **🔵 A Records (Root Domain)**
Add these **4 A records** for `@` (root domain):

```
Type: A
Name: @
Value: 185.199.108.153
TTL: 3600

Type: A
Name: @
Value: 185.199.109.153
TTL: 3600

Type: A
Name: @
Value: 185.199.110.153
TTL: 3600

Type: A
Name: @
Value: 185.199.111.153
TTL: 3600
```

#### **🔴 CNAME Record (WWW Subdomain)**
Add this **CNAME record** for `www`:

```
Type: CNAME
Name: www
Value: fernandosteyn.github.io
TTL: 3600
```

### **⚡ Step-by-Step Process**

1. **Delete Old Records**: Remove any existing A or CNAME records for `@` and `www`
2. **Add A Records**: Create 4 separate A records (one for each GitHub IP)
3. **Add CNAME Record**: Create the www CNAME pointing to your GitHub Pages
4. **Save Changes**: Apply all DNS changes
5. **Wait for Propagation**: DNS changes take 4-48 hours

### **🔍 Verification Commands**

After DNS setup, run these commands to verify:

```powershell
# Check A records
nslookup aijobchommie.co.za

# Check CNAME records  
nslookup www.aijobchommie.co.za

# Check DNS propagation globally
# Visit: https://dnschecker.org
```

### **📋 Cloudshare Interface Tips**

- Look for **"DNS Records"**, **"Advanced DNS"**, or **"Zone File"** section
- Some interfaces show **"Host"** instead of **"Name"**
- Use `@` for root domain (not blank or aijobchommie.co.za)
- TTL can be 300, 600, 3600, or "Auto" - any is fine

### **🚨 Common Issues**

1. **Wrong CNAME Target**: Use `fernandosteyn.github.io` (NOT the full URL)
2. **Multiple Root Records**: Delete old A records before adding new ones
3. **Subdomain vs Root**: `@` is root, `www` is subdomain
4. **Case Sensitivity**: Use lowercase for all values

### **📞 Cloudshare Support**

If you need help:
- **Support Email**: Usually `support@cloudshare.co.za`
- **Phone**: Check their website for current number
- **Live Chat**: Available on their website

### **⏰ Timeline**

- **DNS Changes**: 4-48 hours propagation
- **SSL Certificate**: Automatic after DNS resolves
- **Facebook Verification**: Ready after SSL is active

---

## 🎉 **SUCCESS INDICATORS**

When DNS is working correctly:
1. ✅ `https://aijobchommie.co.za` loads your website
2. ✅ `https://www.aijobchommie.co.za` redirects to main domain
3. ✅ Green padlock (SSL certificate) appears
4. ✅ Facebook meta-tag is visible in page source

**Your God-tier website will then be live for the world to see!** 🌍🚀
