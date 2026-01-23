# LLM.kiwi Documentation Reference

This document outlines all content that should be added to docs.llm.kiwi. Use this as a reference when updating the documentation system.

---

## New Pages to Document

### 1. Free API (`/free-api`)
**Documentation topics:**
- Rate limits: 500 requests/day, 20 RPM, 4096 max tokens
- Anonymous vs Registered users differences
- How daily limits reset (Midnight UTC)
- Model availability on free tier (standard models only)
- Intended use cases (prototyping, learning, small projects)

### 2. Features Overview (`/features`)
**Documentation topics:**
- Dashboard functionality overview
- API key management (create, rotate, delete, scopes)
- Usage statistics and monitoring
- Real-time request tracking
- Historical usage data

### 3. Premade Apps (`/apps`)
**Documentation topics:**
- AI Chat interface usage guide
- Completion Playground parameters
- Code Assistant capabilities
- How to access and use each app
- Troubleshooting common issues

### 4. Sponsorship Program (`/sponsorship`)
**Documentation topics:**
- Full eligibility criteria
- Application process step-by-step
- What's included (Pro tier for 1+ year)
- Expectations and requirements
- FAQ for applicants

---

## Pro Tier Features to Document

### JSON Mode
**Endpoint:** `POST /v1/chat/completions`
**Parameter:** `response_format: { type: "json_object" }`

**Documentation needed:**
- How to enable JSON mode
- Request/response examples
- Error handling for invalid JSON
- Model compatibility
- Best practices for prompting structured output

### Function Calling / Tools API
**Endpoint:** `POST /v1/chat/completions`
**Parameter:** `tools: [...]`

**Documentation needed:**
- Defining tool schemas
- Function call format
- Handling tool call responses
- Multi-turn function calling
- Error handling
- Parallel function calls
- Available tools types

### Image Generation
**Endpoint:** `POST /v1/images/generations`

**Documentation needed:**
- Supported models (DALL-E 3, etc.)
- Request parameters (prompt, size, quality, style)
- Response format (URL vs base64)
- Rate limits for image generation
- Pricing impact
- Content moderation

### Audio-to-Text Transcription
**Endpoint:** `POST /v1/audio/transcriptions`

**Documentation needed:**
- Supported audio formats (mp3, wav, m4a, webm, etc.)
- Whisper model options
- Language detection vs explicit language
- Timestamps and word-level timing
- Maximum file size limits
- Response formats (json, text, srt, vtt)

---

## API Reference Updates

### Base URL
```
https://api.llm.kiwi/v1
```

### Authentication
```
Authorization: Bearer YOUR_API_KEY
```

### Core Endpoints

| Endpoint | Description | Tier |
|----------|-------------|------|
| `/v1/chat/completions` | Chat completions | Free |
| `/v1/chat/completions` (JSON mode) | Structured responses | Pro |
| `/v1/chat/completions` (tools) | Function calling | Pro |
| `/v1/images/generations` | Image creation | Pro |
| `/v1/audio/transcriptions` | Speech-to-text | Pro |
| `/v1/models` | List available models | Free |

### Rate Limits by Tier

| Tier | Daily Requests | RPM | Max Tokens |
|------|----------------|-----|------------|
| Anonymous | 100 (shared) | 10 | 2048 |
| Free (registered) | 500 | 20 | 4096 |
| Pro | Unlimited* | 100 | 32768 |
| Enterprise | Custom | Custom | Custom |

*Pro has soft limits; contact support if you need more.

---

## Legal Pages Updated

### Privacy Policy (`/privacy`)
**New sections added:**
- Data Controller information (GDPR)
- Detailed data categories
- Legal basis for processing
- Cookie policy table
- Third-party services list
- Data retention periods
- User rights (GDPR)
- International data transfers

### Terms of Service (`/terms`)
**New sections added:**
- Service description
- API key security requirements
- Subscription tiers and billing
- Acceptable Use Policy
- Fair Usage Policy
- Intellectual property
- Service availability
- Account suspension/termination
- Limitation of liability
- Indemnification
- Dispute resolution

---

## New Supporting Pages

### Contact (`/contact`)
- Support: support@llm.kiwi (24h response)
- Business: business@llm.kiwi (48h response)
- Security: security@llm.kiwi (24h response)
- Sponsorship: sponsorship@llm.kiwi (5 business days)

### Sponsorship (`/sponsorship`)
- Who qualifies
- What's offered
- Application process
- Expectations

---

## Documentation Improvements Needed

### Authentication Guide
- API key generation walkthrough
- Key rotation best practices
- Environment variable recommendations
- SDK authentication examples

### Error Handling Guide
- HTTP status codes used
- Error response format
- Common error causes and fixes
- Rate limit handling (429)
- Retry strategies

### SDK/Integration Guides
- Python (openai SDK)
- JavaScript/TypeScript
- cURL examples
- Postman collection
- OpenAI SDK compatibility notes

### Model Catalog
- Complete list of available models
- Free vs Pro model access
- Model capabilities matrix
- Recommended models by use case
- Deprecation notices

### Quickstart Guides
- "First API call in 5 minutes"
- Building a chatbot
- Structured data extraction (JSON mode)
- Building AI agents (function calling)
- Content generation workflows

### Migration Guides
- From OpenAI direct to LLM.kiwi
- From other providers
- API key migration
- Code changes required

---

## SEO/Meta Updates

Each documentation page should have:
- Unique title with "LLM.kiwi" branding
- Meta description (150-160 chars)
- Canonical URL
- Open Graph tags
- Structured data (FAQ schema where applicable)

---

## Sitemap Additions

Add to sitemap:
```
/free-api
/features
/apps
/sponsorship
/contact
```

---

## Analytics & Tracking

Consider tracking:
- Most-viewed documentation pages
- Search queries within docs
- 404s / broken links
- Time on page
- Scroll depth

---

*Last updated: January 2025*
