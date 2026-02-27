# Covenant Care Services Website

A modern, responsive home care website built with Next.js (App Router), React, Tailwind CSS, and Framer Motion.

## About

Covenant Care Services provides compassionate home care solutions throughout Maine, helping individuals maintain their independence and quality of life in the comfort of their own homes.

## Features

- **Modern Design**: Clean, professional interface with smooth animations
- **Responsive Layout**: Optimized for desktop, tablet, and mobile devices
- **Interactive Components**: Engaging user experience with Framer Motion animations
- **Contact Forms**: Functional contact and job application forms
- **Service Showcase**: Detailed presentation of care services
- **SEO Friendly**: Semantic HTML5 structure

## Technologies Used

- **Next.js 16 (App Router)** - React framework (routing, bundling, production builds)
- **React 19** - UI library
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library
- **Radix UI** - Accessible UI primitives
- **ESLint** - Linting

## Getting Started

### Prerequisites

- Node.js (modern LTS recommended)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <your-repository-url>
cd covenant_web_dev
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

### Available Scripts

- `npm run dev` - Starts the Next.js dev server
- `npm run build` - Creates a production build
- `npm run start` - Starts the production server (after `build`)
- `npm run lint` - Runs ESLint

## Project Structure

```
app/
├── page.jsx                 # Home (/)
├── services/page.jsx        # Services (/services)
└── contact/page.jsx         # Contact (/contact)

components/
├── contact/                 # Contact + application forms
├── home/                    # Home page sections
├── layout/                  # Layout, Navigation, Footer
└── ui/                      # Reusable UI components

public/
└── images/                  # Static images
```

## Customization

### Styling

The project uses Tailwind CSS for styling. You can customize the theme by modifying the `tailwind.config.js` file.

### Forms

Contact and application forms are client-side and can be connected to an API route or external form backend as needed.

## Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized production build.

### Deploy to Static Hosting

The build folder can be deployed to any static hosting service:
- Netlify
- Vercel
- GitHub Pages
- AWS S3 + CloudFront

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Contact

For questions about this website or Covenant Care Services:

- Phone: (207) 555-1234
- Email: info@covenantcareservices.com

---

Built with ❤️ for the Maine community


