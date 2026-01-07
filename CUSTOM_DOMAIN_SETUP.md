# Setting Up Custom Domain: www.615learningforall.com

## Complete Guide to Publish to Your Domain

Follow these steps to publish your site to www.615learningforall.com:

---

## Step 1: Add Custom Domain in Netlify

1. **Go to your Netlify site dashboard**
   - Log in to Netlify
   - Select your project (615-learning-for-all or similar)

2. **Navigate to Domain Settings**
   - Click on **Domain management** in the left sidebar
   - Or go to **Site settings → Domain management**

3. **Add Custom Domain**
   - Click **Add custom domain** button
   - Enter: `615learningforall.com`
   - Click **Verify**
   - Click **Add domain**

4. **Add www Subdomain**
   - Netlify will ask if you want to add `www.615learningforall.com`
   - Click **Yes, add www subdomain**
   - Or manually add it by clicking **Add domain alias** and entering `www.615learningforall.com`

5. **Set Primary Domain**
   - Choose which version should be primary:
     - `www.615learningforall.com` (recommended)
     - OR `615learningforall.com`
   - The other will automatically redirect to your primary choice
   - Click the **Options** dropdown next to your preferred domain
   - Select **Set as primary domain**

---

## Step 2: Configure DNS Records

Netlify will show you the DNS configuration needed. You have two options:

### Option A: Use Netlify DNS (Easier - Recommended)

1. **In Netlify, click "Set up Netlify DNS"**
2. **Add your domain to Netlify DNS**
3. **Netlify will provide you with nameservers** (usually 4 nameservers like):
   ```
   dns1.p01.nsone.net
   dns2.p01.nsone.net
   dns3.p01.nsone.net
   dns4.p01.nsone.net
   ```
4. **Go to your domain registrar** (GoDaddy, Namecheap, Google Domains, etc.)
5. **Update nameservers**:
   - Find "Nameservers" or "DNS Settings"
   - Switch to "Custom Nameservers"
   - Replace existing nameservers with Netlify's nameservers
   - Save changes
6. **Wait for propagation** (can take up to 48 hours, usually 1-2 hours)

### Option B: Use External DNS (Your Current Registrar)

If you want to keep your current DNS provider:

1. **In Netlify**, look for the DNS instructions
2. **Add these DNS records at your domain registrar**:

   **For apex domain (615learningforall.com):**
   ```
   Type: A
   Name: @ (or leave blank)
   Value: 75.2.60.5
   TTL: 3600 (or Auto)
   ```

   **For www subdomain:**
   ```
   Type: CNAME
   Name: www
   Value: [your-site-name].netlify.app
   TTL: 3600 (or Auto)
   ```

3. **Alternative for apex domain** (if A record doesn't work):
   ```
   Type: ALIAS or ANAME (if supported)
   Name: @ (or leave blank)
   Value: [your-site-name].netlify.app
   TTL: 3600 (or Auto)
   ```

4. **Save all DNS records**

---

## Step 3: Wait for DNS Propagation & SSL

1. **DNS Propagation**
   - Can take anywhere from 5 minutes to 48 hours
   - Usually completes within 1-2 hours
   - Check status: https://dnschecker.org (enter 615learningforall.com)

2. **SSL Certificate (HTTPS)**
   - Netlify automatically provisions SSL certificate
   - This happens after DNS is configured
   - Look for "HTTPS" section in Netlify → Domain management
   - Status will change from "Waiting for DNS" → "Provisioning" → "Active"
   - Usually takes 1-10 minutes after DNS propagates

3. **Check Certificate Status**
   - In Netlify: Domain management → HTTPS
   - Wait for: **"Your site has HTTPS enabled"**
   - Certificate is issued by Let's Encrypt (free)

---

## Step 4: Update Supabase Configuration

Once your domain is live, update Supabase:

1. **Go to Supabase Dashboard**
   - Visit: https://supabase.com/dashboard
   - Select your project

2. **Update Site URL**
   - Go to **Authentication → URL Configuration**
   - Update **Site URL** to: `https://www.615learningforall.com`
   - Click **Save**

3. **Add Redirect URLs**
   - In the same section, under **Redirect URLs**
   - Add:
     ```
     https://www.615learningforall.com/auth/callback
     https://615learningforall.com/auth/callback
     ```
   - Click **Save**

4. **Test Authentication**
   - Visit your site
   - Try to register/login
   - Confirm redirects work correctly

---

## Step 5: Verify Deployment

1. **Visit Your Site**
   - Go to: https://www.615learningforall.com
   - Confirm it loads correctly

2. **Check All Pages**
   - Home page: https://www.615learningforall.com
   - Login: https://www.615learningforall.com/login
   - Register: https://www.615learningforall.com/register
   - Tutors: https://www.615learningforall.com/tutors
   - Pricing: https://www.615learningforall.com/pricing

3. **Test Authentication**
   - Try registering a new account
   - Verify email/password login works
   - Check Google OAuth (if enabled)

4. **Check HTTPS**
   - Confirm padlock icon in browser
   - All pages should load with `https://`
   - No mixed content warnings

---

## Troubleshooting

### Domain Not Loading

**Issue**: Site doesn't load at custom domain

**Solutions**:
1. Check DNS propagation: https://dnschecker.org
2. Verify DNS records are correct in your registrar
3. Clear browser cache (Ctrl+Shift+Delete)
4. Try incognito/private browsing
5. Wait longer (up to 48 hours for full propagation)

### SSL Certificate Not Provisioning

**Issue**: "Your site is not secure" warning

**Solutions**:
1. Verify DNS is fully propagated first
2. In Netlify, go to Domain management → HTTPS
3. Click **Verify DNS configuration**
4. If stuck, click **Renew certificate**
5. Contact Netlify support if still stuck

### Authentication Redirects Failing

**Issue**: After login, redirected to wrong URL

**Solutions**:
1. Verify Supabase Site URL is updated
2. Check Supabase Redirect URLs include your domain
3. Clear cookies and try again
4. Check browser console for errors

### "Not Found" or 404 Errors

**Issue**: Some pages show 404

**Solutions**:
1. Trigger a new deploy in Netlify
2. Verify build completed successfully
3. Check Netlify deploy logs
4. May need to clear Netlify cache

---

## Quick Reference: Common DNS Registrars

### GoDaddy
1. Log in to GoDaddy
2. Go to **My Products → Domains**
3. Click domain name → **DNS**
4. Update DNS records or nameservers

### Namecheap
1. Log in to Namecheap
2. Go to **Domain List**
3. Click **Manage** next to domain
4. **Advanced DNS** tab for records
5. **Domain** tab for nameservers

### Google Domains
1. Log in to Google Domains
2. Click your domain
3. **DNS** in left sidebar
4. **Custom name servers** or **Custom records**

### Cloudflare
1. Log in to Cloudflare
2. Select your domain
3. **DNS** tab
4. Add records or update nameservers

---

## Timeline Expectations

| Step | Time |
|------|------|
| Add domain in Netlify | 2 minutes |
| Configure DNS records | 5 minutes |
| DNS propagation | 1-48 hours (usually 1-2 hours) |
| SSL certificate provisioning | 1-10 minutes after DNS |
| Update Supabase | 2 minutes |
| Total time | ~2-48 hours (usually 1-3 hours) |

---

## Post-Setup Checklist

Once your domain is live:

- [ ] Site loads at https://www.615learningforall.com
- [ ] HTTPS is active (padlock in browser)
- [ ] Both www and non-www redirect correctly
- [ ] All pages load without errors
- [ ] Authentication works (register/login)
- [ ] Supabase redirect URLs updated
- [ ] No mixed content warnings
- [ ] Test on mobile devices
- [ ] Test on different browsers
- [ ] Share with team for testing

---

## Need Help?

### Netlify Support
- Documentation: https://docs.netlify.com/domains-https/custom-domains/
- Support: https://answers.netlify.com/

### DNS Propagation Check
- Global DNS Check: https://dnschecker.org
- What's My DNS: https://www.whatsmydns.net

### SSL Check
- SSL Labs Test: https://www.ssllabs.com/ssltest/

---

## Your Next Steps RIGHT NOW:

1. ✅ **Go to Netlify dashboard**
2. ✅ **Add environment variables** (if you haven't already):
   - NEXT_PUBLIC_SUPABASE_URL
   - NEXT_PUBLIC_SUPABASE_ANON_KEY
3. ✅ **Trigger a deploy** to ensure it builds successfully
4. ✅ **Add custom domain** (615learningforall.com)
5. ✅ **Configure DNS** at your registrar
6. ⏳ **Wait for DNS propagation**
7. ✅ **Update Supabase redirect URLs**
8. 🎉 **Test your live site!**

Your site is ready to go live - just follow these steps and it will be published to www.615learningforall.com!
