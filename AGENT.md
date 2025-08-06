# AI Job Chommie Website - Agent Guidelines

## Commands
- **Development**: `npm start` (React dev server on localhost:3000)
- **Build**: `npm run build` (creates production build in ./build)
- **Test**: `npm test` (runs React tests in watch mode)
- **Deploy**: `npm run deploy` (deploys to GitHub Pages)
- **Single test**: `npm test -- --testNamePattern="TestName"` or `npm test -- ComponentName.test.js`

## Architecture
- **Framework**: React 18 with Create React App
- **Routing**: React Router DOM v6 for client-side navigation
- **Styling**: Global CSS with cyberpunk/neon theme
- **Deployment**: GitHub Pages with gh-pages package
- **Pages**: Landing, About, Terms, Privacy, Pricing, Refund (Paystack compliant)
- **Components**: Navigation, Logo, LoadingScreen, AnnouncementBanner

## Code Style
- **Files**: JSX for components, JS for entry point
- **Imports**: React first, then libraries, then local components
- **Components**: Functional components with hooks, default exports
- **CSS**: BEM-style class naming (e.g., "nav-container", "nav-links")
- **Structure**: src/components/, src/pages/, src/styles/
- **No TypeScript**: Pure JavaScript/JSX codebase
