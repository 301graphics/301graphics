# 301 Graphics — Website

Premium commercial vinyl installation website built with Next.js, Tailwind CSS, and Framer Motion.

---

## Project Structure

```
301graphics/
├── components/
│   ├── Layout.jsx          # Page wrapper with Navbar + Footer
│   ├── Navbar.jsx          # Sticky nav with mobile hamburger menu
│   ├── Footer.jsx          # Site footer with contact info
│   └── AnimateIn.jsx       # Reusable scroll-triggered animation wrapper
├── pages/
│   ├── _app.jsx            # App wrapper with page transitions
│   ├── index.jsx           # Home page
│   ├── services.jsx        # Services page
│   ├── portfolio.jsx       # Portfolio with filter + lightbox
│   ├── about.jsx           # About page
│   ├── contact.jsx         # Contact form
│   └── 404.jsx             # Custom 404 page
├── styles/
│   └── globals.css         # Global styles + Tailwind + Google Fonts
├── public/                 # Static assets (add your images here)
├── tailwind.config.js
├── next.config.js
├── postcss.config.js
└── package.json
```

---

## Getting Started Locally

### 1. Prerequisites
- Node.js 18+ installed
- npm or yarn

### 2. Install dependencies

```bash
cd 301graphics
npm install
```

### 3. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Adding Your Photos

Replace the placeholder color blocks in the **Portfolio** page with real photos:

1. Add your images to the `/public/` folder (e.g., `/public/portfolio/job1.jpg`)
2. In `pages/portfolio.jsx`, update each item in the `items` array to include an `image` field
3. Use Next.js `<Image>` component for optimized loading:

```jsx
import Image from 'next/image'

// In the portfolio grid item:
<Image
  src="/portfolio/job1.jpg"
  alt="Fleet wrap install"
  fill
  className="object-cover"
/>
```

---

## Connecting the Contact Form

The contact form currently simulates a submission. To make it live, connect it to an email service:

### Option A — EmailJS (free, no backend needed)
1. Sign up at [emailjs.com](https://emailjs.com)
2. Create a service + template
3. Install: `npm install @emailjs/browser`
4. Replace the `handleSubmit` function in `pages/contact.jsx`:

```js
import emailjs from '@emailjs/browser'

const handleSubmit = async (e) => {
  e.preventDefault()
  setLoading(true)
  await emailjs.send(
    'YOUR_SERVICE_ID',
    'YOUR_TEMPLATE_ID',
    { ...form },
    'YOUR_PUBLIC_KEY'
  )
  setLoading(false)
  setSubmitted(true)
}
```

### Option B — Formspree (dead simple)
Replace the `<form>` action with your Formspree endpoint:
```jsx
<form action="https://formspree.io/f/YOUR_ID" method="POST">
```

---

## Deploying to Vercel (Recommended)

Vercel is made by the Next.js team — deployment takes 2 minutes.

### Step 1 — Push your project to GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/yourusername/301graphics.git
git push -u origin main
```

### Step 2 — Deploy on Vercel
1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click **"New Project"**
3. Import your `301graphics` GitHub repo
4. Leave all settings as default — Vercel auto-detects Next.js
5. Click **Deploy**

Your site will be live at `https://301graphics.vercel.app` (or a custom domain).

### Step 3 — Add a Custom Domain (optional)
1. In Vercel dashboard → your project → **Domains**
2. Add `www.301graphics.com` (or your domain)
3. Update your domain's DNS records as instructed by Vercel
4. Done — SSL is automatic

---

## Customization Guide

### Colors
Edit `styles/globals.css`:
```css
:root {
  --yellow: #FFD000;  /* Change accent color here */
  --black: #000000;
}
```

### Fonts
Google Fonts are loaded in `styles/globals.css`. Swap them for any Google Font:
```css
@import url('https://fonts.googleapis.com/css2?family=YOUR_FONT&display=swap');
```
Then update `tailwind.config.js` font family names.

### Contact Info
Update your phone, email, and Instagram throughout:
- `components/Navbar.jsx`
- `components/Footer.jsx`
- `pages/contact.jsx`

### Business Info
- Update testimonials in `pages/index.jsx`
- Update stats in `pages/index.jsx` and `pages/about.jsx`
- Update service descriptions in `pages/services.jsx`

---

## SEO

Each page has its own `<title>` and `<meta description>` via the `Layout` component:

```jsx
<Layout
  title="Services"
  description="Your custom description here."
>
```

Update these in each page file to match your target keywords.

---

## Performance Tips

- Compress all images before adding to `/public/` (use [squoosh.app](https://squoosh.app))
- Use `.webp` format for best performance
- Next.js `<Image>` handles lazy loading and optimization automatically

---

## Support

Questions? Open this site in Claude and ask — it can help you customize anything.

**301 Graphics** | Atlanta, GA | @301graphics_
