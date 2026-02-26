# Covenant Care Services Website

A modern, responsive home care website built with React, Tailwind CSS, and Framer Motion.

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

- **React 18** - Frontend framework
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
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
npm start
```

4. Open your browser and navigate to `http://localhost:3000`

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (one-way operation)

## Project Structure

```
src/
├── components/
│   ├── home/          # Homepage components
│   ├── contact/       # Contact form components
│   └── ui/            # Reusable UI components
├── pages/             # Page components
├── utils/             # Utility functions
└── api/               # API configurations
```

## Customization

### Styling

The project uses Tailwind CSS for styling. You can customize the theme by modifying the `tailwind.config.js` file.

### Forms

Contact forms are currently set up to log submissions to the console. To connect them to a backend service, update the `handleSubmit` functions in:
- `src/components/contact/ContactForm.jsx`
- `src/components/contact/ApplicationForm.jsx`

### Routing

Routes are defined using React Router. Add new routes in your main `App.js` file.

## Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

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
- Email: info@covenantcareme.com
- Website: https://covenantcareme.com

---

Built with ❤️ for the Maine community


