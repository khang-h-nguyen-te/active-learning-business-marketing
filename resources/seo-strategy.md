# SEO Strategy — Active Learning Business

## Priority
**Social-first, SEO-secondary.** Growth comes from shares and social discovery.
SEO is a compounding bonus — write for humans, structure for search engines.

## Core SEO Principles
1. Every post targets one primary keyword
2. Title tag = post title (keep under 60 chars)
3. Meta description = post hook (keep under 155 chars)
4. OG image on every post (1200×630 WebP)
5. Slug = kebab-case primary keyword (e.g. `feynman-technique-ai`)

## Target Keyword Clusters

### Pillar 1: Active Learning Techniques
| Keyword | Intent | Difficulty |
|---------|--------|-----------|
| feynman technique studying | Informational | Medium |
| how to use feynman technique | Informational | Medium |
| spaced repetition app | Informational | High |
| active recall vs passive learning | Informational | Low |
| how to retain what you study | Informational | Medium |

### Pillar 2: Student Productivity
| Keyword | Intent | Difficulty |
|---------|--------|-----------|
| how to study smarter not harder | Informational | High |
| best study schedule university | Informational | Medium |
| focus techniques for students | Informational | Medium |
| pomodoro technique for studying | Informational | Medium |
| how to stop forgetting what you study | Informational | Low |

### Pillar 3: AI in Education
| Keyword | Intent | Difficulty |
|---------|--------|-----------|
| how to use ChatGPT to study | Informational | Medium |
| AI study tools for students | Informational | Low–Medium |
| best AI tools for learning | Informational | Medium |
| AI tutor for university students | Informational | Low |
| how AI is changing education | Informational | Medium |

## On-Page SEO Checklist (per post)
- [ ] Primary keyword in: title, first paragraph, one H2, meta description, slug
- [ ] H2 subheadings (2–4 per post) include secondary keywords naturally
- [ ] Images: alt text describes the image with keyword context
- [ ] Internal link to at least one other post (once 4+ posts exist)
- [ ] External link to one credible source (research paper, known publication)
- [ ] Word count: 800–1,500 words (quality over length)

## Technical SEO (handled by Next.js)
- `<Head>` with title + meta description on every page
- OG tags on every blog post
- Canonical URLs (Next.js default behaviour)
- Sitemap: generate with `next-sitemap` when blog reaches 10+ posts
- robots.txt: allow all

## Content Calendar SEO Notes
- First 8 posts: target Low difficulty keywords to build domain authority
- Posts 9–24: mix Medium difficulty as authority grows
- Never chase High difficulty keywords before 6 months of publishing

## Link Building (organic, no outreach needed early)
- Share posts in relevant Reddit communities (r/GetStudying, r/learnmachinelearning)
- Post threads on Twitter/X summarising each post
- Answer Quora questions with post links where genuinely helpful
