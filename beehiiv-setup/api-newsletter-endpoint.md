# Beehiiv API - Newsletter Sending Endpoint

## Publication Info
- **Publication ID:** `pub_c6f2747c-0b61-463a-a7aa-2e524362d2af`
- **API Key:** Stored in `.env` as `BEEHIIV_API_KEY`

---

## Create & Schedule Newsletter Post

### Endpoint
```
POST https://api.beehiiv.com/v2/publications/{publicationId}/posts
```

### Authentication
```
Authorization: Bearer {BEEHIIV_API_KEY}
Content-Type: application/json
```

### Request Body (Minimal Example)
```json
{
  "title": "SEO News This Week: March 30, 2026",
  "subtitle": "Google drops two algorithm updates, AI Overviews eating your clicks",
  "blocks": [
    {
      "type": "paragraph",
      "plaintext": "Big week in SEO. Here's the 2-minute rundown:"
    },
    {
      "type": "heading",
      "level": "2",
      "text": "1. Google's March 2026 Core Update is live"
    },
    {
      "type": "paragraph",
      "plaintext": "Started rolling out March 27th. Takes ~2 weeks..."
    }
  ],
  "email_settings": {
    "email_subject_line": "📰 This week in SEO: Google drops TWO algorithm updates",
    "email_preview_text": "Plus: AI Overviews are killing your clicks (here's what to do)"
  },
  "scheduled_at": "2026-03-31T16:00:00Z"
}
```

### Full Block Types Available
- `paragraph` - Regular text (use `plaintext` or `formattedText`)
- `heading` - Headers (levels 1-6)
- `list` - Ordered/unordered lists
- `button` - CTA buttons
- `image` - Images with captions
- `table` - Data tables
- `columns` - Multi-column layouts

### Response (Success - 201)
```json
{
  "data": {
    "id": "post_xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
    "status": "confirmed",
    "title": "SEO News This Week: March 30, 2026",
    "scheduled_at": "2026-03-31T16:00:00Z",
    ...
  }
}
```

---

## Cron Job Implementation

### Option 1: Direct API Call (via cron tool)

The Monday newsletter cron should:
1. Prepare the newsletter content (or read from a prepared draft file)
2. Call the Beehiiv API to create the post
3. Set `scheduled_at` for the desired send time

### Example cURL Command
```bash
curl -X POST "https://api.beehiiv.com/v2/publications/pub_c6f2747c-0b61-463a-a7aa-2e524362d2af/posts" \
  -H "Authorization: Bearer $BEEHIIV_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Weekly SEO Roundup",
    "blocks": [...],
    "email_settings": {
      "email_subject_line": "Subject here",
      "email_preview_text": "Preview text here"
    }
  }'
```

### Option 2: Draft → Confirm Workflow

1. Create posts as drafts (no `scheduled_at`)
2. Review in Beehiiv dashboard
3. Manually confirm to send

---

## Useful Endpoints

| Method | Endpoint | Purpose |
|--------|----------|---------|
| GET | `/v2/publications` | List publications (get IDs) |
| GET | `/v2/publications/{id}/posts` | List all posts |
| POST | `/v2/publications/{id}/posts` | Create new post |
| GET | `/v2/publications/{id}/posts/{postId}` | Get specific post |
| DELETE | `/v2/publications/{id}/posts/{postId}` | Delete post |

---

## Rate Limits
- 100 requests per minute per API key
- Use `429` response handling with exponential backoff

---

## Monday Cron Job Spec

**Schedule:** Every Monday at 9:00 AM PT  
**Trigger:** System cron via Clawdbot  
**Task:**
1. Read newsletter draft from `content-drafts/email-seo-roundup-{date}.md`
2. Convert to Beehiiv blocks format
3. POST to create/schedule the newsletter
4. Notify via Telegram when scheduled

**Clawdbot cron format:**
```
cron add --schedule "0 9 * * 1" --text "Send weekly SEO newsletter via Beehiiv API"
```
