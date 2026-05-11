---
title: "SEO Weekly Roundup: FAQ Rich Results Gone, AI Crawlers Overtake Googlebot, and Ranking Chaos Begins"
description: "Google killed FAQ rich results on May 7th, ChatGPT's crawler is now outpacing Googlebot 3.6x, mystery ranking volatility hit on May 8th, and the back button hijacking deadline is 35 days away. Here's what it all means."
pubDate: May 11 2026
tags: SEO News Google Updates Weekly Roundup AI Search
author: Emil Mequita
---

# SEO Weekly Roundup: May 11, 2026

*What happened in search this week — and what it actually means for your site.*

---

Alright, let's get into it. This was a week that reminded me why I've been doing this for 16 years — you blink and Google completely pulls the rug out from under a feature you've been leveraging, ranking chaos starts bubbling up for no stated reason, and meanwhile the industry is having a bigger philosophical debate about whether "SEO" as we've practiced it is even the right frame anymore.

Let's break it all down.

---

## Google Just Killed FAQ Rich Results. Yes, Really.

If you had FAQ structured data running on your site to get those accordion-style search snippets, it's time to update your expectations. As of **May 7th, 2026**, Google is no longer showing FAQ rich results in search. Gone. Just like that.

Here's the full deprecation timeline if you use Search Console or the API:

- **May 7:** FAQ rich results stop appearing in search entirely
- **June:** Google removes the FAQ filter, rich result report, and Rich Results Test support from Search Console
- **August:** API support for FAQ search appearance gets axed

Before you panic and start stripping out all your FAQ schema — don't. Google was clear that unused structured data won't hurt you. FAQPage is still a valid Schema.org type, and having it on your pages isn't going to cause problems. But you should absolutely stop building *strategy* around it.

Honestly? I saw this coming. Google had already quietly demoted FAQ rich results in mid-2023 to "limited visibility" for most sites, and it's been slowly fading since. It was a feature that got heavily abused — people were stuffing FAQs everywhere just to get the expanded snippet real estate. Google gave it a slow death rather than a sudden one. Now it's official.

What should you do instead? Focus on the rich result types that are still thriving: Reviews, HowTo (for certain queries), Product schema for e-commerce, and — increasingly important — structured data that feeds entity clarity for AI systems. Which brings me to the bigger story this week...

---

## The Rankings vs. Recognition Debate Is Getting Louder

Search Engine Land published a piece this week arguing that SEO's new goal isn't rankings — it's **recognition**. And look, I know that sounds like consultant-speak, but they're onto something real here.

Visibility today is being driven by authority signals, citations across the web, entity clarity (does Google *know* who you are and what you're about?), and brand presence — not just where you sit on page one. As AI-driven search continues to reshape how results get surfaced in Google's AI Overviews, Gemini, and increasingly in third-party tools like ChatGPT, the question isn't just "do I rank?" It's "am I being *cited*?"

This isn't new thinking — I've been saying for years that brand is SEO's most underutilized lever — but the urgency is different now. AI systems are pulling from a broader web of signals, and if your brand doesn't have a coherent, consistent presence with clear entity associations, you're invisible to the next generation of search.

The practical implication: stop thinking about pages in isolation and start thinking about whether your brand is being *talked about* authoritatively across the web. That means PR, third-party mentions, structured entity data, and a content strategy that builds topical authority — not just keyword coverage.

---

## An Unconfirmed Update Has Been Stirring the Pot

If your rankings shifted this week and you're scratching your head, you're not alone. Barry Schwartz over at Search Engine Roundtable flagged that third-party tracking tools started showing significant volatility around **May 8th**, with chatter picking up in the SEO community about movement in the SERPs.

Google hasn't confirmed anything, which is pretty typical for these unannounced fluctuations. Could be a routine system tweak. Could be something bigger. We don't know yet.

What I'd tell you: don't make drastic changes based on a 48-hour ranking swing. Document what you're seeing, keep an eye on it through the week, and check your Search Console data for any crawl or indexing anomalies before you start pulling levers. Reactive SEO based on unconfirmed volatility is how you make things worse.

For context, we *just* finished the **March 2026 Core Update** on April 8th — which was notably more volatile than December 2025, with nearly 80% of top-three results shifting across the industry. If you're still recovering from that, give it more time before drawing conclusions from this week's noise.

---

## AI Crawlers Are Now Outpacing Googlebot. That's Not a Drill.

Here's the stat that should be keeping SEOs up at night: according to new data from AllI AI, OpenAI's ChatGPT crawler is now making **3.6x more requests than Googlebot**. When you rank AI crawlers by request volume, ChatGPT-User is outpacing Googlebot, Amazonbot, and Bingbot *combined*.

Let that sink in.

The web is being read by AI systems at a scale that's increasingly rivaling traditional search crawlers — and most sites are completely unprepared for it. If your site relies heavily on client-side JavaScript rendering, you may be invisible to four of the six major AI crawlers (GPTBot, ClaudeBot, PerplexityBot, CCBot) because they only fetch static HTML.

Search Engine Journal has been covering the technical SEO implications of this pretty thoroughly. The short version:

- **Server-side rendering matters** more than ever for AI discoverability
- **robots.txt is your access control layer** — you need to decide which AI crawlers you want to allow and configure accordingly
- **llms.txt** is an emerging standard worth watching — it's a markdown-based file that gives AI agents a structured way to understand your content
- **Entity-first structured data** (Organization schema, sameAs links to verified entities, FAQPage, HowTo) is becoming as much about AI comprehension as it is about traditional rich results

The SEO audit checklist just got a new layer. If you're not thinking about AI crawler accessibility alongside traditional crawl health, you're already behind.

---

## Don't Forget: Back Button Hijacking Penalty Kicks In June 15th

Quick reminder on something we covered a few weeks ago that's now approaching fast: Google's new spam policy targeting **back button hijacking** takes effect **June 15, 2026**.

If your site — or any third-party library or ad platform your site uses — is messing with users' browser back button behavior (redirecting them to unexpected pages, trapping them in navigation loops, surfacing unsolicited ads when they try to leave), you are at risk of a manual or algorithmic penalty.

The notable gotcha here: Google specifically said that even if the hijacking comes from a **third-party script or ad platform**, your site is still accountable. Google AdSense has already moved to drop its back button trigger for vignette ads on June 15th to comply, but if you use other ad networks or embedded tools, go audit those now.

You have 35 days. That's enough time to fix it — but not enough time to procrastinate.

---

## The Takeaway This Week

Five weeks into Q2 2026, and the theme is pretty clear: the rules of search visibility are fundamentally expanding. It's not just about ranking anymore — it's about being a recognized entity across the web, being readable to AI systems, and staying clean enough to avoid a growing list of spam policies.

FAQ rich results dying is a footnote. The bigger story is the direction everything is pointing: Google (and the AI systems increasingly operating alongside it) reward brands with genuine authority and cross-web presence. If your SEO strategy still looks like "publish X blog posts targeting Y keywords per month," you're playing last decade's game.

More next Monday. Go check your robots.txt this week. Seriously.

---

*Emil Mequita is the founder of YourFriendlySEO.com and has been working in SEO for 16+ years across e-commerce, media, and B2B. He writes about what's actually happening in search, minus the hype.*
