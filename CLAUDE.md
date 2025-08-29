# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Winography is a Next.js data visualization application focused on wine industry data including grape varieties, country statistics, and historical production/consumption trends. The app presents complex wine data through interactive D3-based charts and visualizations.

## Common Commands

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## Architecture Overview

### Directory Structure
- `/pages/` - Next.js file-based routing with nested route structure for countries, grapes, historic data, and learning sections
- `/components/` - Reusable UI components organized by domain (charts, layout, countries, grapes, icons, ui)
- `/data/` - Static data files containing wine statistics, country data, grape information, and historical datasets
- `/store/` - React Context for global state management (main-context.js)
- `/styles/` - Global CSS files and styling variables
- `/public/images/` - Static assets including flags, icons, and masthead images

### Key Technologies
- **Next.js 13.2.4** with Pages Router (not App Router)
- **TypeScript** for type safety (tsconfig.json configured with `@/*` path alias)
- **D3.js** for data visualizations and chart rendering
- **Material-UI (@mui/material)** for UI components
- **React Context** for state management (MainContextProvider)
- **CSS Modules** for component-level styling
- **Sass** for enhanced CSS features

### Data Flow & State Management
The application uses React Context (`MainContextProvider`) for global state, primarily tracking user session data (`isNewVisit`, `sessionStartDate`). Static data is imported directly from `/data/` files into components rather than using a complex state management solution.

### Chart System
Charts are built with D3.js and organized in `/components/charts/`. Each chart type (bar-chart, bubble-chart, histogram, etc.) has its own component with corresponding CSS modules. Charts use data from `/data/` files and are wrapped in chart-wrapper components for consistent styling and behavior.

### Routing Structure
- `/countries/` - Country-specific wine data with bar charts, bubble charts, and regional breakdowns
- `/grapes/` - Grape variety information with world rankings and regional data  
- `/historic/` - Historical production and consumption data with various chart types
- `/learning/` - Educational content including wine terminology and timeline
- `/quiz/` - Interactive wine knowledge quiz functionality

### Styling Approach
The project uses a hybrid styling approach:
- Global CSS variables defined in `/styles/variables.css`
- Component-specific CSS Modules (`.module.css` files)
- Global styles for charts and layout in `/styles/charts.css` and other global files
- Material-UI components for some UI elements

### TypeScript Configuration
- Mixed JS/TS codebase with TypeScript primarily in pages (`_app.tsx`)
- Path aliases configured with `@/*` pointing to root directory
- Strict mode disabled, allowing gradual TypeScript adoption