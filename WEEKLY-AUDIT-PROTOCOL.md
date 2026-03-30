# Weekly Self-Audit & Continuous Improvement Protocol

**Automation Agent:** YourFriendlySEO Assistant  
**Schedule:** Every Sunday at 7pm PST  
**Report To:** Emil via Telegram

---

## Weekly Self-Audit Checklist (Every Sunday 7pm)

### 1. Website Quality Audit

**Crawl yourfriendlyseo.com and check:**

- [ ] No placeholder content (lorem ipsum, "coming soon", TBD)
- [ ] All CTAs functional and linked correctly
- [ ] Mobile formatting correct on all pages
- [ ] Page load speed acceptable (< 3 seconds)
- [ ] Content written in first person from Emil's voice
- [ ] All images load correctly
- [ ] No broken links (internal or external)
- [ ] All product payment links work
- [ ] Email forms render correctly

**Pages to audit:**
- Homepage (/)
- About (/about)
- Blog index (/blog)
- Each blog post (/blog/[slug])
- Consultation (/consultation)
- Thank you (/thank-you)

**Tools:**
- `npm run build` — check for build errors
- Manual click-through of all CTAs
- Mobile viewport testing (375px, 768px, 1024px)
- PageSpeed Insights API for load times

---

### 2. Google Search Console Check

**Access:**
- Email: clawdio.yourfriendlyseo@gmail.com
- Password: $GOOGLE_GSC_PASSWORD (env var)

**Check:**
- [ ] Indexing status (how many pages indexed vs submitted)
- [ ] Crawl errors (4xx, 5xx errors)
- [ ] Mobile usability issues
- [ ] Core Web Vitals (LCP, FID, CLS)
- [ ] Security issues
- [ ] Manual actions (penalties)

**Performance metrics:**
- Total clicks (last 7 days)
- Total impressions (last 7 days)
- Average CTR
- Average position
- Top 10 queries (positions + clicks)
- Top 10 pages (clicks + impressions)

**Ranking opportunities:**
- Queries with impressions >100 and position 11-20 (page 2)
- Pages with high impressions but low CTR (< 2%)

---

### 3. Email List Health

**Platform:** Beehiiv (once set up)

**Metrics:**
- Total subscribers
- Weekly growth (#, %)
- Open rate (last email)
- Click rate (last email)
- Unsubscribe rate

**Goals (Phase 1):**
- Month 1: 25 subscribers
- Month 2: 50 subscribers  
- Month 3: 100 subscribers

---

### 4. Sessions & Revenue vs Goals

**Access:** Google Analytics (when set up)

**Track:**
- Organic sessions (last 7 days)
- Sessions vs monthly goal
- Revenue (Stripe dashboard)
- Revenue vs monthly goal
- Top traffic sources
- Top landing pages
- Conversion rate (sessions → sales)

**Phase 1 Goals (Month 1-3):**
- Sessions: 500/month by Month 3
- Revenue: First sale within 30 days
- Email subscribers: 100 by Month 3

---

### 5. Content Audit

**Published posts:**
- [ ] All in first person ("I", "my", "I've found")
- [ ] Emil's voice and real-world experience referenced
- [ ] No generic AI language ("dive into", "in conclusion")
- [ ] Actionable takeaways in every post
- [ ] Internal links working
- [ ] Author bio present with Emil's photo + LinkedIn

**Unpublished content:**
- [ ] 2 posts minimum queued for next week
- [ ] Editorial calendar updated
- [ ] Content gaps identified from GSC data

---

## Sunday Evening Audit Report Template

**Send to Emil via Telegram every Sunday at 7pm:**

```
📊 WEEKLY AUDIT REPORT
Week of [Date]

🌐 WEBSITE HEALTH
✅/❌ All pages loading correctly
✅/❌ All CTAs functional
✅/❌ Mobile formatting good
✅/❌ Page speed acceptable
✅/❌ No broken links
Issues found: [List or "None"]

🔍 GOOGLE SEARCH CONSOLE
Indexed pages: X / Y
Crawl errors: X
Mobile issues: X
Top query: "[keyword]" (position X, Y clicks)
Ranking opportunities: [Top 3 queries on page 2]

📧 EMAIL LIST (if active)
Subscribers: X (+Y this week, +Z%)
Open rate: X%
Click rate: X%

📈 TRAFFIC & REVENUE
Organic sessions: X (goal: Y)
Revenue: $X (goal: $Y)
Top page: [URL] (X sessions)
Conversions: X sales

✅ WINS THIS WEEK
- [Achievement 1]
- [Achievement 2]

⚠️ NEEDS ATTENTION
- [Issue 1]
- [Issue 2]

💡 RECOMMENDATIONS
- [Action 1]
- [Action 2]

Status: [On Track / Behind Target / Ahead]
```

---

## Immediate Alerts (Send as Soon as Detected)

**Alert Emil immediately via Telegram if:**

🚨 **Critical Issues:**
- Site down or returning 500 errors
- Stripe payment links broken
- Email forms not submitting
- Security issue detected in GSC
- Manual action/penalty from Google

⚠️ **Performance Alerts:**
- Sessions trending >20% below target
- Revenue >30 days with no sale
- Content publishing <2 posts/week for 2 consecutive weeks
- Major traffic drop (>30% week-over-week)
- Crawl errors >10 in GSC

📈 **Positive Alerts:**
- First product sale!
- Keyword reaches page 1 (top 10)
- Traffic milestone (500, 1K, 5K sessions)
- Email list milestone (100, 500, 1K subscribers)

---

## Continuous Improvement Protocol

**Before reporting any task complete, ask:**

1. **Is this the best version of this work?**
   - Would I be proud to show this to a real customer?
   - Is it better than competitor content?
   - Does it provide unique value?

2. **Would a real visitor find this useful and trustworthy?**
   - No placeholder content
   - No broken experiences
   - Clear value proposition

3. **Does this represent Emil's brand well?**
   - Written in his voice (first person, expert but accessible)
   - References real experience
   - Warm and helpful tone

4. **Is there anything broken, missing, or incomplete?**
   - All links work
   - All images load
   - All forms function
   - Mobile experience good

**If the answer to ANY of these is "no":**  
→ Fix it before reporting completion

---

## Self-Improvement Actions

**Weekly (Every Sunday):**
- Review last week's audit report
- Compare metrics week-over-week
- Identify patterns (what's working, what's not)
- Update documentation based on learnings
- Propose strategy adjustments

**Monthly (First Monday):**
- Comprehensive content audit
- Competitor analysis (check thedigitalring.com, semrush.com/blog)
- Technical SEO deep-dive
- Backlink analysis
- Update editorial calendar for next month

**Quarterly:**
- Review and update SOUL.md (communication style)
- Review and update AGENTS.md (protocols)
- Evaluate automation effectiveness
- Propose new tools or improvements

---

## Google Search Console Submission

**Status:** Pending

**Steps to complete:**

1. **Verify ownership:**
   - Go to [Google Search Console](https://search.google.com/search-console)
   - Add property: https://www.yourfriendlyseo.com
   - Verify via HTML file upload or DNS TXT record

2. **Submit sitemap:**
   - URL: https://www.yourfriendlyseo.com/sitemap-index.xml
   - Sitemaps → Add new sitemap → Submit

3. **Request indexing for all URLs:**
   - Manual URL inspection for:
     - Homepage
     - /about
     - /blog
     - /blog/diy-seo-guide-for-small-business
     - /blog/how-to-conduct-seo-audit-small-business
     - /consultation
   - Click "Request Indexing" for each

4. **Set up email alerts:**
   - Settings → Users and permissions
   - Add: clawdio.yourfriendlyseo@gmail.com as Owner
   - Enable email notifications for:
     - Critical issues
     - Manual actions
     - New messages

**Expected timeline:**
- Verification: 1 day
- Initial indexing: 3-7 days
- Full crawl: 2-4 weeks
- First ranking data: 7-14 days

---

## Automation Scripts

**Location:** `/home/clawdio/clawd/yourfriendlyseo/scripts/`

**Create these scripts:**

### `weekly-audit.sh`
```bash
#!/bin/bash
# Run weekly audit checks
# Executed via cron every Sunday at 7pm PST

# Build check
cd /home/clawdio/clawd/yourfriendlyseo
npm run build > /tmp/build.log 2>&1

if [ $? -ne 0 ]; then
  echo "🚨 BUILD FAILED" >> /tmp/audit-report.txt
  cat /tmp/build.log >> /tmp/audit-report.txt
fi

# Link check (simplified)
curl -s https://www.yourfriendlyseo.com | grep -o 'href="[^"]*"' | wc -l

# TODO: Add GSC API calls
# TODO: Add GA4 API calls
# TODO: Add Stripe API calls
```

### `send-audit-report.sh`
```bash
#!/bin/bash
# Send audit report via Telegram
# Called after weekly-audit.sh completes

REPORT=$(cat /tmp/audit-report.txt)
# Send via Telegram using message tool
```

**Cron schedule:**
```
0 19 * * 0 /home/clawdio/clawd/yourfriendlyseo/scripts/weekly-audit.sh
10 19 * * 0 /home/clawdio/clawd/yourfriendlyseo/scripts/send-audit-report.sh
```

---

## Status

**Implemented:**
- ✅ Audit checklist defined
- ✅ Report template created
- ✅ Alert triggers documented
- ✅ Continuous improvement protocol established
- ✅ GSC access configured (credentials stored)

**Pending:**
- ⏳ Google Search Console verification and submission
- ⏳ Google Analytics 4 setup
- ⏳ Automation scripts creation
- ⏳ Cron job scheduling
- ⏳ GSC/GA4 API integration

**Next Steps:**
1. Complete GSC verification and sitemap submission
2. Set up GA4 property
3. Create automation scripts
4. Run first manual audit this Sunday
5. Refine report format based on first run

---

**Last Updated:** 2026-03-29  
**Owner:** YourFriendlySEO Assistant  
**Review Frequency:** Monthly
