# Ambassadors United – Website Prototype

A visual prototype for **Ambassadors United (AU)**, a modern Christian youth community. It's a fast, mobile-friendly website with a built-in admin dashboard, so the team can publish blog posts and store products without touching code.

> Status: **prototype**. Content and design are being refined before launch.

---

## What's inside

| Page | What it does |
|---|---|
| **Home** | Hero section, latest posts, weekly prayer schedule |
| **About** | Who AU is and what it stands for |
| **Blog & Series** | Posts and series, filterable by category |
| **Testimonies** | Scrollable stories from the community |
| **Schedule** | Weekly programme, with "add to calendar" |
| **Store** | Merch and resources, filterable by type |
| **Connect** | Ways to get in touch and join |
| **Admin** | Sign in with Google to add or remove posts and products |

## Built with

| Part | Tool |
|---|---|
| Website | React 19 + TypeScript, built with Vite |
| Styling | Tailwind CSS (navy, black and white brand: see [BRANDING.md](BRANDING.md)) |
| Content & login | Firebase (Firestore database + Google sign-in) |
| Icons & motion | Lucide icons, Motion |
| Started from | Google AI Studio |

## How the content works

```
Visitor ──▶ Website (React) ──reads──▶ Firestore: posts, products
Admin  ──▶ Admin page ──Google sign-in──▶ adds / deletes posts and products
```

Anyone can **read** content. Only the approved admin account can **change** it (see `firestore.rules`).

## Run it on your computer

1. Install [Node.js](https://nodejs.org) (version 20 or newer).
2. In this folder, run `npm install`.
3. Copy `.env.example` to `.env.local` and fill in the values.
4. Run `npm run dev` and open http://localhost:3000.

## Project layout

```
src/
├─ App.tsx                  ← all public pages
├─ components/AdminDashboard.tsx  ← admin page
├─ lib/firebase.ts          ← database + login setup
└─ index.css                ← global styles
public/logo.png             ← AU logo
BRANDING.md                 ← colours, fonts, design rules
firestore.rules             ← who can read / write content
```

## Credits

Designed and built by [Louis Ampobi](https://github.com/Louis-the-code).
