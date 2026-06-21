# NG School of Music — Website

A premium, fully-responsive music academy website built with **React + Vite + Tailwind CSS + Framer Motion**.

---

## 📁 Project Structure

```
ng-school-of-music/
├── public/
│   └── favicon.svg                  # Favicon (replace with actual logo)
├── src/
│   ├── assets/
│   │   └── gallery/                 # 📸 Place actual academy photos here
│   ├── components/
│   │   ├── Navbar.jsx               # Sticky navbar with mobile hamburger
│   │   ├── Footer.jsx               # Full footer with links & address
│   │   ├── ScrollToTop.jsx          # Scroll-to-top floating button
│   │   ├── WhatsAppFloat.jsx        # Floating WhatsApp CTA button
│   │   └── SectionHeader.jsx        # Reusable section heading component
│   ├── pages/
│   │   ├── Home.jsx                 # Hero, Why Us, Courses, Founder, Testimonials, Gallery, CTA
│   │   ├── About.jsx                # About, Mission, Vision, Founder story, Timeline
│   │   ├── Courses.jsx              # All 8 courses with full details & WhatsApp CTA
│   │   ├── Gallery.jsx              # Filterable gallery with lightbox
│   │   └── Contact.jsx              # Form (→ WhatsApp), Map, Address, Social links
│   ├── utils/
│   │   └── data.js                  # ✏️  All site content — edit this file
│   ├── App.jsx                      # Router + animated page transitions
│   ├── index.css                    # Global styles, Tailwind layers, animations
│   └── main.jsx                     # React entry point
├── index.html                       # HTML shell with Google Fonts + SEO meta
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── vercel.json                      # SPA routing for Vercel deployment
└── package.json
```

---

## 🚀 Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```

---

## ✏️ How to Customise

### 1. Update WhatsApp Number
Open `src/utils/data.js` and change:
```js
export const WHATSAPP_NUMBER = '91XXXXXXXXXX'  // Your 10-digit number with country code
export const PHONE_NUMBER = '+91 XXXXX XXXXX'
```
Also update the WhatsApp links in `src/components/WhatsAppFloat.jsx`.

### 2. Add Real Photos
- Place all academy photos in `/src/assets/gallery/`
- Import them in `src/utils/data.js` and replace the placeholder `bg` values in `GALLERY_ITEMS` with actual image `src` values
- For the Founder photo, import and use it in the About page and Home founder section

### 3. Add Google Maps Embed
Replace the iframe `src` in `src/pages/Contact.jsx` with your actual Google Maps embed URL:
1. Go to [maps.google.com](https://maps.google.com)
2. Search for your address
3. Click Share → Embed a map → Copy HTML
4. Paste the `src` URL into the `<iframe>` in Contact.jsx

### 4. Social & Contact Links
All links are centralised in `src/utils/data.js` → `SOCIAL_LINKS` and `ADDRESS` objects.

---

## 🎨 Design System

| Token | Value |
|-------|-------|
| Primary Gold | `#D4AF37` |
| Background | `#0B0B0B` |
| Secondary BG | `#111827` |
| Body font | Inter |
| Display font | Playfair Display |
| Accent font | Cormorant Garamond |

CSS utility classes (defined in `index.css`):
- `.gold-text` — gold gradient text
- `.gold-shimmer` — animated shimmer text
- `.glass-card` — glassmorphism card
- `.btn-gold` — filled gold button
- `.btn-outline-gold` — outlined gold button
- `.section-label` — small uppercase eyebrow label

---

## 🌐 Deploy on Vercel

1. Push this project to a GitHub repo
2. Go to [vercel.com](https://vercel.com) → New Project → Import repo
3. Framework preset: **Vite**
4. Build command: `npm run build`
5. Output directory: `dist`
6. Click **Deploy**

The `vercel.json` file handles SPA routing so all routes work correctly.

---

## 📋 Pages

| Page | Route | Key Sections |
|------|-------|-------------|
| Home | `/` | Hero · Stats · Why Us · Courses · Founder · Testimonials · Gallery · CTA |
| About | `/about` | Story · Mission/Vision · Founder · Timeline |
| Courses | `/courses` | All 8 courses with outcomes + FAQ |
| Gallery | `/gallery` | Filterable grid + lightbox |
| Contact | `/contact` | WhatsApp form · Map · Address · Social |

---

## 💡 Quick Wins Before Launch

- [ ] Replace all `[Photo]` placeholders with real images
- [ ] Update WhatsApp number in `data.js` and `WhatsAppFloat.jsx`
- [ ] Add real Google Maps embed URL in `Contact.jsx`
- [ ] Add a real `favicon.svg` or `.ico` in `/public/`
- [ ] Test on mobile (especially WhatsApp redirect and form UX)
- [ ] Add real student testimonial names/photos once collected
- [ ] Update `index.html` meta description and OG tags with final copy

---

Built with ❤️ for NG School of Music, Mumbai.
