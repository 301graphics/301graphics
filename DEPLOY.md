# 301graphics.com v10 — Deploy & Setup Guide

Same stack you already run: Next.js 14 on Vercel, code in GitHub. Six pages plus seven city pages, a working quote form with photo upload, reviews, Instagram, scheduling and analytics hooks. Everything in this zip replaces the old repo contents.

## 1. Preview it before it goes live (10 min)

| Step | What to do |
|---|---|
| 1 | In GitHub, open your 301graphics repo and create a new branch called `v10` (Branches → New branch). |
| 2 | On the `v10` branch, delete the old files and upload everything from this zip (drag the whole folder contents into "Add file → Upload files"). Do **not** upload `node_modules` or `.next` (they are not in the zip). |
| 3 | Commit. Vercel builds the branch automatically and posts a **preview URL** on the commit (also visible in the Vercel dashboard → Deployments). Open it on your phone and laptop. |
| 4 | Happy with it? Open a pull request `v10 → main` and merge. Vercel deploys to 301graphics.com in about a minute. |

Old links keep working: `/contact` → `/quote`, `/portfolio` → `/work`, `/fleet` → `/commercial`.

## 2. Environment variables (Vercel → Project → Settings → Environment Variables)

Add these, then redeploy (Deployments → ⋯ → Redeploy). Everything works without them; they just switch features on.

| Variable | Value | Turns on |
|---|---|---|
| `RESEND_API_KEY` | from resend.com (below) | Quote form emails land in your Gmail with photos attached |
| `QUOTE_TO_EMAIL` | `301graphic@gmail.com` | Where quote requests go |
| `QUOTE_FROM_EMAIL` | `301 Graphics Website <onboarding@resend.dev>` | Sender (switch to `quotes@301graphics.com` after domain verification) |
| `NEXT_PUBLIC_CALENDLY_URL` | your Calendly event link | "Book a call / site survey" panel on the quote page |
| `NEXT_PUBLIC_GA_ID` | `G-XXXXXXXXXX` | Google Analytics 4 with call-click, email-click and quote-submit events |
| `NEXT_PUBLIC_GOOGLE_WRITE_REVIEW_URL` | your GBP "write a review" link | "Leave a review" button next to the reviews |
| `NEXT_PUBLIC_INSTAGRAM_FEED_ID` | Behold feed ID | Live @301graphics_ feed instead of the built-in gallery |

Until `RESEND_API_KEY` is set, the form still works: it opens the visitor's email app with everything pre-filled so nothing is lost.

## 3. One-time account setups

**Resend (quote form email, free)**
1. Sign up at resend.com with 301graphic@gmail.com.
2. API Keys → Create → copy it into `RESEND_API_KEY` on Vercel.
3. Optional, later: Domains → add 301graphics.com, add the DNS records they show at GoDaddy, then set `QUOTE_FROM_EMAIL` to `301 Graphics <quotes@301graphics.com>`. Until then the free `onboarding@resend.dev` sender delivers only to your own Gmail, which is exactly what we need.

**Calendly (booking, free)**
1. calendly.com → create a 15-minute event called "Quote call / site survey".
2. Copy the event link into `NEXT_PUBLIC_CALENDLY_URL`.

**Google Analytics 4 (free)**
1. analytics.google.com → Create property "301graphics.com" → Web data stream → copy the Measurement ID (`G-…`) into `NEXT_PUBLIC_GA_ID`.
2. Vercel Analytics is already wired in code: Vercel dashboard → your project → Analytics → Enable.

**Google reviews**
1. business.google.com → Home → "Get more reviews" → copy the short link into `NEXT_PUBLIC_GOOGLE_WRITE_REVIEW_URL`.
2. The two current 5-star reviews (Judy, Olivia) are in `data/reviews.js` with the excerpt Google emailed. Paste the full text from your GBP Reviews tab and set `full: true`. Add new reviews the same way.

**Instagram (optional)**
1. behold.so → connect @301graphics_ → create a grid feed → copy the feed ID into `NEXT_PUBLIC_INSTAGRAM_FEED_ID`. Without it the site shows four of your install photos linking to Instagram.

## 4. Editing content later (no code)

| Want to change | File |
|---|---|
| Phone, email, hours, Instagram, city list | `data/site.js` |
| Service names and descriptions, "how we work" points, FAQ | `data/services.js` |
| Reviews | `data/reviews.js` |
| Portfolio photos and captions | `data/work.js` + drop photos into `public/work/` (two sizes: `name.jpg` at 1500px and `name-s.jpg` at 800px) |
| Hero slides | `components/Hero.jsx`, `SLIDES` list at the top |

## 5. What's in the build

| Page | Path | Audience |
|---|---|---|
| Home | `/` | Everyone. Two doors: business vs. personal |
| Fleet & retail | `/commercial` | Fleet managers, retailers, facilities |
| Trade partners | `/trade` | Print shops, sign companies, agencies, coordinators |
| Your ride | `/personal` | Local color change / accents / PPF customers |
| Work | `/work` | Filterable gallery of 52 installs, lightbox, no client names |
| About | `/about` | Owner story, certifications, coverage |
| Quote | `/quote` | Form with photo upload, routing by client type, Calendly, next steps |
| City pages | `/areas/kennesaw` … | Local SEO for 7 metro cities |

Also included: `sitemap.xml`, `robots.txt`, Open Graph image, LocalBusiness + FAQ structured data, self-hosted fonts (no Google Fonts request), 404 page.
