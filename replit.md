# Covenant Care Services Website

## Overview
A Next.js website for Covenant Care Services, a home care company. The site includes pages for services, contact, and service requests.

## Tech Stack
- **Framework**: Next.js 16 (App Router) with Turbopack
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI primitives, shadcn/ui-style components
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Language**: JavaScript (JSX)

## Project Structure
- `app/` - Next.js App Router pages (layout, home, services, contact, request-services)
- `components/` - Reusable UI components (contact, home, layout, lib, request-services, ui)
- `public/` - Static assets
- `next.config.js` - Next.js configuration
- `tailwind.config.js` - Tailwind CSS configuration

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
The app loads images from:
- `images.unsplash.com`
- `qtrypzzcjebvfcihiynt.supabase.co`
