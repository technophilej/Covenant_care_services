# Covenant Care Services Website

## Overview
A Next.js website for Covenant Care Services LLC, a Maine-based Personal Care Agency. The site has four pages: Home, Services, Contact (with Contact Us + Careers tabs), and Request Services.

## Tech Stack
- **Framework**: Next.js 16 (App Router) with Turbopack
- **Styling**: Tailwind CSS with custom brand colors
- **UI Components**: Radix UI primitives, shadcn/ui-style components
- **Icons**: Lucide React
- **Language**: JavaScript (JSX)

## Design System
Inspired by saferesidential.care — clean, professional healthcare aesthetic, unique to Covenant Care.

### Colors (from logo)
- `brand-navy` (#0B3A66) — deep navy, primary brand color
- `brand-blue` scale — medium blue accent
- `brand-green` scale — green from logo, used for accents/CTAs
- `brand-teal` scale — teal accent

### Navigation (two-tier, like reference site)
- **Top bar**: Navy background, "Compassion. Dignity. Support." tagline left, phone/email/hours right
- **Main nav**: White, sticky on scroll (adds shadow), logo left, nav links center, "Request Services" pill button right
- Active link: green underline indicator
- Careers is a shortcut to /contact?tab=careers — Contact link highlights when on /contact

### Page Layout Pattern
- **Banner**: Navy background with decorative circle accents, green section label, bold white heading, subtitle
- **Sections**: Alternating white and gray-50 with clear section labels (green dash + label above headings)
- **Cards**: Rounded with subtle borders and hover shadow lift
- **CTAs**: Navy or green pill buttons with arrow icons

## Pages
- `/` — Home: hero with full-width image, about (2-col with caregiver photo), service highlights grid, How It Works, staff section (navy bg), final CTA
- `/services` — Services: all 8 services alternating image/text with real photos + feature lists, CTA
- `/contact` — Contact: contact info bar, tab switcher (Contact Us / Careers), forms, privacy policy
- `/request-services` — Request Services: step-by-step instructions sidebar, PDF download, upload form

## Project Structure
- `app/` — Next.js App Router pages
- `components/layout/` — Navigation (two-tier), Footer, Layout wrapper
- `components/home/` — HeroSection (full-width image with overlay)
- `components/contact/` — ContactForm, ApplicationForm
- `components/request-services/` — ClientIntakeUploadForm
- `components/ui/` — Radix-based primitives
- `public/images/` — All real images (logo.jpg, hero.jpg, service photos, contact photos)
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

## External Images
- `images.unsplash.com`
- `qtrypzzcjebvfcihiynt.supabase.co`
