# Travel Country Explorer

A comprehensive platform that helps travelers understand countries deeply before visiting—from regional insights and culture to climate, attractions, and the best times to visit.

## Project Overview

Travel Country Explorer provides detailed information about countries, focusing on:

- Basic travel information (language, currency, timezone, visa requirements)
- Cultural insights and etiquette
- Regional breakdowns with detailed maps
- Climate data and best times to visit
- Local attractions and travel tips

The project is built with modern web technologies to provide a responsive, user-friendly experience.

## Key Features

1. **Country Overview Pages**: Essential travel info, cultural etiquette, and regional breakdowns
2. **Destination Pages**: In-depth guides for specific cities and regions
3. **Interactive Maps**: Visual exploration of regions and attractions
4. **Month-by-Month Travel Guides**: Seasonal recommendations

## Tech Stack

- **Frontend**: Next.js 14+ with TypeScript
- **Styling**: Tailwind CSS
- **Mapping**: Mapbox GL JS (planned)
- **Deployment**: Vercel (planned)

## Getting Started

### Prerequisites

- Node.js 18.0.0 or later
- npm or yarn

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/travel-country-explorer.git
   cd travel-country-explorer
   ```

2. Install dependencies:
   ```
   npm install
   # or
   yarn
   ```

3. Run the development server:
   ```
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

```
travel-country-explorer/
├── public/                # Static assets
│   └── images/            # Images for countries, regions, etc.
├── src/                   # Source code directory
│   ├── app/               # Next.js app directory
│   │   ├── about/         # About page
│   │   ├── countries/     # Country pages
│   │   ├── regions/       # Region pages (to be implemented)
│   │   ├── globals.css    # Global styles
│   │   ├── layout.tsx     # Root layout
│   │   ├── not-found.tsx  # 404 page
│   │   └── page.tsx       # Home page
│   ├── components/        # Reusable components
│   │   ├── country/       # Country-specific components
│   │   │   ├── ClimateSection.tsx
│   │   │   ├── LanguagePhrases.tsx
│   │   │   ├── LanguageSection.tsx
│   │   │   ├── QuickFactsBox.tsx
│   │   │   └── RegionalBreakdown.tsx
│   │   └── layout/        # Layout components
│   │       ├── Footer.tsx
│   │       └── Navbar.tsx
│   └── data/              # Data models and content
│       └── countries.ts   # Country data
├── next.config.mjs        # Next.js configuration
├── package.json           # Project dependencies
├── tailwind.config.js     # Tailwind CSS configuration
└── tsconfig.json          # TypeScript configuration
```

## Implemented Features

- ✅ **Responsive Layout**: Works on mobile, tablet, and desktop screens
- ✅ **Country Overview**: Basic page structure with regions
- ✅ **Language Section**: Details about official and common languages
- ✅ **Cultural Insights**: Do's, don'ts, and cultural tips
- ✅ **Climate Section**: Monthly weather data and travel recommendations
- ✅ **Quick Facts Box**: Essential country information
- ✅ **Regional Breakdown**: Visual representation of different regions

## Features Under Development

- ⚠️ **Currency & Exchange Section**: Detailed information about local currency and exchange tips
- ⚠️ **Timezone Section**: Complete timezone information and variations
- ⚠️ **Visa Requirements Section**: Detailed visa information for various nationalities
- ⚠️ **Health & Safety Section**: Comprehensive safety and health information
- ⚠️ **Interactive Map**: Mapbox integration for exploring regions and attractions
- ⚠️ **Destination Pages**: Detailed pages for each region and city
- ⚠️ **Month-by-Month Travel Guide**: Best places to visit each month

## Next Steps

1. Complete all sections for the Portugal country overview:
    - Add Currency & Exchange section
    - Add Visa Requirements section
    - Expand Health & Safety information

2. Implement the interactive map using Mapbox

3. Create detailed region/city pages

4. Add month-by-month travel guides

5. Expand to additional countries

## Images & Assets

The project uses high-quality images from Unsplash to showcase destinations. For development purposes, you'll need to download these images and place them in the appropriate directories in the `public/images/` folder. See the Recommended Images list provided separately.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- All country data is researched from multiple travel resources and official sources
- Icons provided by Heroicons
- Images sourced from Unsplash (see image credits in the individual components)