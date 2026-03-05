# Covenant Care Services Website

## Overview
A Next.js website for Covenant Care Services LLC, a Maine-based Personal Care Agency. The site has four pages: Home, Services, Contact (with Contact Us + Careers tabs), and Request Services.

## Tech Stack
- **Framework**: Next.js 16 (App Router) with Turbopack
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI primitives, shadcn/ui-style components
- **Icons**: Lucide React
- **Language**: JavaScript (JSX)

## Design
- Inspired by saferesidential.care — clean, professional healthcare aesthetic
- Deep navy (`brand-navy: #0B3A66`) as primary brand color with blue accent scale
- Clean white/gray-50 alternating sections
- Simple card-based layouts (no heavy animations)
- Consistent page banners: navy background with white text and a small label above the heading
- Navigation: fixed white bar, logo left, links center, solid CTA button right

## Pages
- `/` — Home: hero, about/services overview (ADL/IADL lists), service highlights grid, How It Works, staff section, CTA
- `/services` — Services: all 8 services in a 4-col card grid with feature lists, CTA
- `/contact` — Contact: contact info bar, tab switcher (Contact Us / Careers), contact form or application form, privacy policy
- `/request-services` — Request Services: step-by-step instructions, PDF download, intake form upload

## Project Structure
- `app/` — Next.js App Router pages
- `components/layout/` — Navigation, Footer, Layout wrapper
- `components/home/` — HeroSection
- `components/contact/` — ContactForm, ApplicationForm
- `components/request-services/` — ClientIntakeUploadForm
- `components/ui/` — Radix-based primitives (button, input, label, etc.)
- `public/images/` — Static images (logo.jpg is currently a 0-byte placeholder — needs real logo)
- `public/forms/` — Downloadable PDF forms

## Running the App
- **Dev**: `npm run dev` (runs on port 5000)
- **Build**: `npm run build`
- **Start**: `npm run start` (runs on port 5000)

## Replit Configuration
- Port: **5000** (required by Replit webview)
- Host: `0.0.0.0` (required for Replit network access)
- `allowedDevOrigins` set to `['*']` to allow Replit preview domains
- Dependencies installed with `--legacy-peer-deps` due to ESLint peer dep conflict between eslint@8 and @eslint/js@10

## Known Issues / To-Do
- `public/images/logo.jpg` is a 0-byte placeholder — the client must upload their real logo file
- External image domains configured: `images.unsplash.com`, `qtrypzzcjebvfcihiynt.supabase.co`
