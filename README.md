# JKKNIU Chess Club — Official Website

A production-quality, responsive website for the JKKNIU Chess Club, built with React,
Vite, Bootstrap 5, Bootstrap Icons and React Router.

## Tech Stack
- React 18 + Vite
- Bootstrap 5 (CSS grid/components) + custom navy/gold theme (`src/index.css`)
- Bootstrap Icons
- React Router v6

## Project Structure
```
src/
├── components/   Reusable UI components (Navbar, Footer, cards, form widgets...)
├── pages/        One file per route (Home, About, Committee, Tournaments...)
├── data/         Mock/sample content — replace with real club data
├── assets/       Logo and static assets
├── App.jsx       Route definitions
├── main.jsx      App entry point
└── index.css     Theme (colors, typography, components)
```

All content in `src/data/*.js` is placeholder/sample data clearly commented as such —
swap it for real committee members, tournaments, events, news and gallery photos
whenever they're available.

## 1. Install Dependencies
Make sure you have **Node.js 18+** installed, then from the project root run:

```bash
npm install
```

## 2. Run the Project Locally
```bash
npm run dev
```
This starts a local dev server (usually at `http://localhost:5173`) with hot-reload.

## 3. Build for Production
```bash
npm run build
```
This outputs an optimized production build into the `dist/` folder.

To preview the production build locally:
```bash
npm run preview
```

## Notes
- The club logo is at `src/assets/logo.png` (also copied to `public/logo.png` for the favicon).
- All phone numbers, emails, social links and historical records are placeholders —
  search for "placeholder" comments in `src/data/` and update them.
- The Contact page embeds a generic Google Maps search for JKKNIU; replace the iframe
  `src` with an exact campus location/embed link when available.
