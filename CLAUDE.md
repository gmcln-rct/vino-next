# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Winography is a Next.js data visualization application focused on wine industry data including grape varieties, country statistics, and historical production/consumption trends. The app presents complex wine data through interactive D3-based charts and visualizations.

## Common Commands

```bash
# Development server (runs on http://localhost:3000)
npm run dev

# Production build (outputs static export to /out directory)
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

**Important:** The actual project files are located in the `winography/` subdirectory, not the repository root.

## Node Version Requirements

This project requires specific Node.js and npm versions as defined in package.json:
- Node.js: 18.19.1
- npm: >=9.0.0

## Architecture Overview

### Directory Structure
- `/pages/` - Next.js file-based routing with nested route structure for countries, grapes, historic data, and learning sections
- `/components/` - Reusable UI components organized by domain:
  - `/charts/` - D3 chart components (bar-chart, bubble-chart, histogram, stacked-area-chart, etc.)
  - `/layout/` - Layout components (header, footer, masthead, data-list, detail-section)
  - `/countries/` - Country-specific components
  - `/grapes/` - Grape-specific components
  - `/icons/` - Icon components
  - `/ui/` - Reusable UI elements
  - `/utils/` - Utility components
- `/data/` - Static JavaScript data files containing wine statistics exported as modules
- `/store/` - React Context for global state management (main-context.js)
- `/styles/` - Global CSS files and styling variables
- `/public/images/` - Static assets including flags, icons, and masthead images

### Key Technologies
- **Next.js 13.2.4** with Pages Router (not App Router)
- **React 18.2.0** with functional components and hooks
- **JavaScript** (not TypeScript) - despite having jsconfig.json, this is a JS codebase
- **D3.js v7.9.0** for data visualizations and chart rendering
- **Material-UI (@mui/material) v5** for UI components
- **React Context** for minimal global state management
- **CSS Modules** for component-level styling
- **Sass** for enhanced CSS features
- **next-sitemap** for sitemap generation

### Next.js Configuration
The next.config.js has important settings:
- `reactStrictMode: true` - Enables React strict mode
- `trailingSlash: true` - All URLs end with trailing slashes
- `images: { unoptimized: true }` - Image optimization disabled for static export

### Deployment
The site is deployed on Netlify with the following configuration:
- Build command: `npm run build`
- Publish directory: `.next`
- Uses Ubuntu 22.04 LTS (Jammy) build image
- Domain: winography.net
- Generates sitemap and robots.txt via next-sitemap

### Data Flow & State Management
The application uses React Context (`MainContextProvider` in `/store/main-context.js`) for minimal global state, primarily tracking:
- `isNewVisit` - Whether this is a new user session (resets after 1 hour)
- `sessionStartDate` - Timestamp of session start

Static wine data is imported directly from `/data/` files into components. Data files export JavaScript objects/arrays and include:
- Country data (production, consumption, regional breakdowns)
- Grape variety data (top 100, origins, country distributions)
- Historical data (production and consumption trends over time)
- Quiz data, wine terms, and timeline data

### Chart System Architecture
All charts are built with D3.js and follow a consistent pattern:
1. **Chart components** use `useRef` to create SVG references
2. **useEffect** handles D3 rendering, triggered by data/size changes
3. **D3 selection cleanup** - Each render starts with `d3.select(svgRef.current).selectAll("*").remove()`
4. **Responsive sizing** - Charts calculate dimensions based on window size and container size props
5. **Tooltips** - D3 tooltips appended to body with inline styles
6. **Color coding** - Red wines use #B03E3E, white wines use #A19F18
7. **Chart wrappers** - `chart-wrapper.js` and `chart-wrapper-bubble.js` provide container sizing logic

Available chart types:
- `bar-chart.js` - Vertical bar charts with responsive axes
- `bubble-chart.js` - Bubble charts for multi-dimensional data
- `bubble-chart-regional.js` - Regional bubble visualizations
- `bubble-multi-chart.js` - Multiple bubble chart datasets
- `histogram-chart.js` - Distribution histograms
- `histogram-comparison-chart.js` - Side-by-side histogram comparisons
- `stacked-area-chart.js` - Time series stacked area charts

### Routing Structure
- `/` - Homepage (index.js) with main navigation
- `/countries/` - Country-specific wine data with bar charts, bubble charts, and regional breakdowns
- `/grapes/` - Grape variety information with world rankings and regional data
- `/historic/` - Historical production and consumption data with various chart types
- `/learning/` - Educational content including wine terminology and timeline
- `/quiz/` - Interactive wine knowledge quiz
- `/about/` - About page
- `/sitemap.xml.js` - Dynamic sitemap generation

### Styling Approach
The project uses a hybrid styling approach:
- Global CSS loaded in `_app.js` via `global.css`
- Component-specific CSS Modules (`.module.css` files) imported into components
- CSS variables for theming (likely in `/styles/variables.css`)
- Material-UI components with Emotion for some UI elements
- Global chart styles for consistent D3 visualization appearance

### Application Entry Point
The `_app.js` file wraps the entire application with:
- `MainContextProvider` for global state
- `Layout` component (header, footer structure)
- Comprehensive SEO meta tags and structured data (schema.org)
- Google Analytics integration (gtag.js)
- Social media meta tags (Open Graph, Twitter Cards)

### Path Aliases
The jsconfig.json configures `@/*` to map to the root directory, allowing imports like:
```javascript
import { MainContextProvider } from "@/store/main-context";
import data from "@/data/country-data";
```

### Static Data Pattern
Data files in `/data/` export JavaScript objects/arrays. Example pattern:
```javascript
// data/country-data.js
export const countryData = [ /* data */ ];
```

Import pattern in components:
```javascript
import { countryData } from '@/data/country-data';
```