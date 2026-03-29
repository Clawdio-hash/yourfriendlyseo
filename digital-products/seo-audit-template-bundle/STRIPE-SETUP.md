# Stripe Payment Link Setup Instructions

**Product:** SEO Audit Template Bundle  
**Price:** $27 USD

---

## Manual Setup (Stripe Dashboard)

Since the API key has restricted permissions, you'll need to create the payment link manually through the Stripe Dashboard.

### Step 1: Create Product

1. Log into [Stripe Dashboard](https://dashboard.stripe.com/)
2. Go to **Products** → **Add product**
3. Fill in details:

**Product Information:**
- **Name:** SEO Audit Template Bundle
- **Description:**
  ```
  Professional SEO audit templates for small businesses. Includes:
  • Technical SEO Audit Checklist (60+ checkpoints)
  • On-Page SEO Audit Template
  • Local SEO Audit Template
  • Backlink Audit Tracker
  • Monthly SEO Report Template
  
  Formats: Google Sheets + Excel
  Instant download after purchase.
  ```
- **Image:** Upload product image (recommended: 1200x630px)

**Pricing:**
- **Price:** $27.00 USD
- **Billing:** One-time payment
- **Tax behavior:** Taxable (or "Not subject to tax" depending on your setup)

**Metadata (Optional but Recommended):**
- `product_type`: `digital_template`
- `category`: `seo_tools`
- `delivery_method`: `instant_download`
- `format`: `google_sheets,excel`

### Step 2: Create Payment Link

1. After creating the product, click **Create payment link**
2. Configure payment link:

**General:**
- **Product:** SEO Audit Template Bundle ($27)
- **Quantity:** Fixed quantity (1)

**Payment options:**
- Enable **Card** payments
- Enable **Apple Pay** / **Google Pay** (recommended)
- Optional: Enable **Cash App Pay**, **Afterpay**, etc.

**After payment:**
- **Success message:** 
  ```
  Thank you for your purchase! 🎉
  
  Your SEO Audit Template Bundle is ready.
  Check your email for download instructions.
  ```
- **Success URL (redirect):** `https://www.yourfriendlyseo.com/downloads/seo-audit-bundle` (create this page)
- **Collect customer information:** Email address (required)

**Confirmation email:**
- Use Stripe's default email
- **OR** configure custom email with download link

**Additional options:**
- Allow **promotional codes** (optional - for future discounts)
- **Customer creation:** Automatically create customer in Stripe

### Step 3: Copy Payment Link

After creating, Stripe will provide a shareable link like:
```
https://buy.stripe.com/XXXXXXXX
```

Copy this link and update:
1. `/digital-products/seo-audit-template-bundle/README.md` (replace `#stripe-link`)
2. Pillar Post #2 (SEO Audit blog post)
3. Any product landing pages

### Step 4: Set Up Product Delivery

**Option A: Manual Delivery (Simple)**
1. When payment succeeds, Stripe sends email notification
2. Manually email customer the Google Sheets link
3. Include Excel export as attachment

**Option B: Automated Delivery (Recommended)**
1. Use Stripe webhook to detect `checkout.session.completed`
2. Automatically send download email via your email service
3. Include:
   - Google Sheets link (view-only, customer makes copy)
   - Excel file download link
   - Video walkthrough link
   - Usage guide PDF

**Webhook endpoint (if automating):**
```
POST https://www.yourfriendlyseo.com/api/stripe-webhook
```

### Step 5: Create Download Page

Create a success/download page at:
```
https://www.yourfriendlyseo.com/downloads/seo-audit-bundle
```

**Page should include:**
- ✅ Thank you message
- 📥 Download links (Google Sheets + Excel)
- 📹 Video walkthrough embed (15 min tutorial)
- 📄 Usage guide PDF download
- 💬 Support email (support@yourfriendlyseo.com)
- ⭐ Upsell other products (DIY SEO Course, AI SEO Toolkit)

---

## Product Files to Upload

Once you have a file hosting solution (Google Drive, Gumroad, SendOwl, etc.), upload:

1. **SEO Audit Template Bundle (Google Sheets)**
   - Share link: "Anyone with the link can view"
   - Users will click "File > Make a Copy"

2. **SEO Audit Template Bundle (Excel)**
   - Zip file containing all 5 templates
   - Host on your server or file hosting service

3. **Video Walkthrough** (to be created)
   - 15-minute tutorial using the templates
   - Upload to YouTube (unlisted) or Vimeo
   - Embed on download page

4. **Usage Guide PDF** (to be created)
   - Step-by-step instructions
   - Screenshots and examples
   - Tips and best practices

---

## Alternative: Use Gumroad (Easier Setup)

If Stripe is complex, consider [Gumroad](https://gumroad.com/):

**Pros:**
- Simple setup (10 minutes)
- Handles file delivery automatically
- Built-in affiliate system
- Lower fees for small volume

**Cons:**
- 10% fee (vs Stripe's 2.9% + $0.30)
- Less control over checkout experience
- Not as professional for high-volume

---

## Testing Payment Link

Before going live:

1. Use Stripe **Test mode**
2. Test with card: `4242 4242 4242 4242` (any future expiry, any CVC)
3. Verify success page loads
4. Verify confirmation email sends
5. Test download links work
6. Switch to **Live mode** when ready

---

## Marketing the Product

Once payment link is live, promote through:

✅ **Blog post CTAs** (Pillar Post #2: SEO Audit guide)  
✅ **Email list** (launch announcement)  
✅ **Free lead magnet** (upsell from free checklist)  
✅ **Social media** (Twitter, LinkedIn)  
✅ **Product landing page** (dedicated sales page)

---

## Pricing Strategy Notes

**$27 is positioned as:**
- Low barrier to entry (impulse buy territory)
- Less than 1 hour of consultant time
- More than free tools but less than premium ($99+)

**Future price testing:**
- Start at $27 for first 100 customers
- Consider raising to $37-$49 after validation
- Offer launch discount (e.g., "$49 value, now just $27")
- Bundle with other products for $97+

---

**Next Step:** Once you've created the Stripe payment link, paste it here and I'll update all references in the content.
