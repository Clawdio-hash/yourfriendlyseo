# YourFriendlySEO - Handoff Prompt for AI Muse Assistant

Copy everything below the line into your AI Muse assistant. It explains what is already
done on the site and the manual, dashboard-only tasks that still need a human (code changes
are complete and live; these remaining items live in Beehiiv, Stripe, Google Analytics,
Google Drive, and the Vercel/host dashboards, so they cannot be done from the codebase).

---

## Context

I run **yourfriendlyseo.com** - a static Astro site deployed on Vercel from the `main`
branch of GitHub repo `Clawdio-hash/yourfriendlyseo`. It sells three products and collects
newsletter leads. The code side of a full SEO + conversion overhaul is finished and live.
I need help finishing the **manual configuration** that can only be done inside third-party
dashboards. Do not ask me to change code - the code is correct. Help me complete the
dashboard steps below, in priority order, and tell me exactly where to click.

### Fixed facts - never change these
- **Prices:** SEO Audit Template Bundle **$27**, Website Migration Toolkit **$97**,
  60-minute Strategy Session **$197**. Do not suggest changing prices.
- **Stripe checkout links** are already wired in the code and must not change.
- **Calendly booking link:** `https://calendly.com/emil-mequita-z-uw/1-on-1-seo-strategy-session`
- **Beehiiv newsletter form id:** `ec7e5c30-ae0a-4e2f-afb7-4956edb47c72`
- **Google Analytics (GA4) measurement id:** `G-5RYCLQ1XWM`
- **Contact email:** `hello@yourfriendlyseo.com`
- Do not invent statistics, client names, testimonials, subscriber counts, or results.
  Only use proof that already exists or that I give you.

---

## Already done (live in production - for your awareness, no action needed)

- Removed all unverified "1,000+" scale claims; real testimonial (Piera Palazzolo) in place.
- SEO foundation: per-page meta descriptions, sitemap.xml + robots.txt, Person +
  ProfessionalService schema, FAQ schema on /consultation, author byline on every post.
- Homepage rebuilt around one primary CTA (free SEO checklist) with headshot + intro.
- Footer dead ends fixed; new pages built: /services, /contact, /case-studies, /templates
  (redirect), topic pillar pages (local SEO, technical SEO, AI search), paginated blog.
- **Calendly** booking is wired: /consultation and /thank-you read the link above.
- **Beehiiv** newsletter signup is wired everywhere (homepage, /newsletter, /free-checklist,
  blog index, every blog post) via the v3 loader form id above. The form renders and collects
  subscribers live.
- GA4 is on every page with conversion events defined in code (they fire on the right pages;
  see task 2 - they still need to be marked as conversions in the GA4 dashboard).

---

## Manual tasks that still need doing (in priority order)

### 1. Confirm the Beehiiv post-signup redirect (HIGH)
After someone subscribes, they should land on
`https://www.yourfriendlyseo.com/thank-you?product=newsletter` (that page shows a thank-you
and fires the "newsletter_subscribe" analytics event).
- In **Beehiiv**, open the form `ec7e5c30-ae0a-4e2f-afb7-4956edb47c72` settings and confirm
  the **success / redirect URL** is exactly that address.
- Then do one **real test signup** with a throwaway email and confirm you land on the
  thank-you page. (The site build was verified without submitting a test signup, so this
  live round-trip is the one thing left to confirm by hand.)

### 2. Mark GA4 events as conversions (HIGH)
The code already sends these events; GA4 just needs them flagged as key events so they show
up as conversions in reports. In **Google Analytics (property G-5RYCLQ1XWM) > Admin >
Events / Key events**, mark these as key events once each has fired at least once:
- `newsletter_subscribe`
- `free_checklist_signup`
- `template_bundle_purchase`
- `session_booking`

### 3. Fix the $27 bundle delivery link (HIGH - affects paying customers)
The /thank-you page for a bundle purchase currently points its "Access Templates" button at a
**placeholder Google Drive URL** (`drive.google.com/drive/folders/yourfriendlyseo-audit-bundle`),
which does not resolve.
- Create the real shared Google Drive folder with the 5 templates + PDF guide (view/copy access).
- Give me the real shareable link so I can update it in the code, **and** make sure the Stripe
  purchase confirmation email delivers that same real link (the email is the primary delivery
  path; the on-page button is the backup).

### 4. Decide the contact form backend (MEDIUM)
The /contact page is built with a Netlify Forms handler plus a `mailto:hello@yourfriendlyseo.com`
fallback. **The site is on Vercel, not Netlify, so the Netlify form handler will not capture
submissions** - right now only the mailto fallback actually works.
Pick one and tell me so I can wire it:
- a Vercel-compatible form service (e.g. Formspree, Basin, Web3Forms), or
- a simple mailto-only contact section, or
- embed another Beehiiv/typeform-style form.

### 5. Replace case-studies placeholder with real stories (MEDIUM)
/case-studies is an honest placeholder (no invented results). When you have permission to
publish real client outcomes - with the client's OK and only numbers you can back up - send
them to me and I will build them out. Until then it stays as-is. Do not invent results.

### 6. Review pre-existing unverified claims (LOW - judgment call)
These were on the site before the overhaul and were left untouched because I could not verify
them. Decide whether each is defensible; if not, soften or remove:
- The "100+ LA businesses" style claim (wherever it appears).
- Newsletter testimonials shown with initials only (no full attribution).
- The homepage headshot image path and any stock/placeholder imagery.

---

## How to work with me on this
Take one task at a time, tell me exactly which dashboard and which buttons, and when a step
produces something the code needs (a real Drive link, a chosen form service), give me the exact
value and I will have it added to the site. Never change prices, Stripe links, the Calendly
link, the Beehiiv form id, or invent any numbers.
