import { getServerSideSitemap } from "next-sitemap";
import { COUNTRIES_DATA } from "@/data/country-data";
import { GRAPES_DATA } from "@/data/grape-data";

export default function Sitemap() {
    return null;
  }
  
  export async function getServerSideProps({ res }) {
    const baseUrl = 'https://winography.net';
  
  // Static pages
  const staticPages = [
    {
      loc: baseUrl,
      lastmod: new Date().toISOString(),
      changefreq: "monthly",
      priority: 1,
    },
    {
      loc: `${baseUrl}/countries`,
      lastmod: new Date().toISOString(),
      changefreq: "monthly",
      priority: 0.8,
    },
    {
      loc: `${baseUrl}/grapes`,
      lastmod: new Date().toISOString(),
      changefreq: "monthly",
      priority: 0.8,
    },
    {
      loc: `${baseUrl}/historic`,
      lastmod: new Date().toISOString(),
      changefreq: "monthly",
      priority: 0.8,
    },
    {
      loc: `${baseUrl}/quiz`,
      lastmod: new Date().toISOString(),
      changefreq: "monthly",
      priority: 0.6,
    },
    {
      loc: `${baseUrl}/learning`,
      lastmod: new Date().toISOString(),
      changefreq: "monthly",
      priority: 0.6,
    },
    {
      loc: `${baseUrl}/about`,
      lastmod: new Date().toISOString(),
      changefreq: "monthly",
      priority: 0.2,
    },
    {
      loc: `${baseUrl}/countries/bar-chart`,
      lastmod: new Date().toISOString(),
      changefreq: "yearly",
      priority: 0.6,
    },
    {
      loc: `${baseUrl}/grapes/bar-chart`,
      lastmod: new Date().toISOString(),
      changefreq: "yearly",
      priority: 0.6,
    },
    {
      loc: `${baseUrl}/historic/histogram-individual-production`,
      lastmod: new Date().toISOString(),
      changefreq: "yearly",
      priority: 0.3,
    },
    {
      loc: `${baseUrl}/historic/histogram-comparison-production`,
      lastmod: new Date().toISOString(),
      changefreq: "yearly",
      priority: 0.3,
    },
    {
      loc: `${baseUrl}/historic/stackedarea`,
      lastmod: new Date().toISOString(),
      changefreq: "yearly",
      priority: 0.3,
    },
    // Additional static pages
    {
      loc: `${baseUrl}/countries/regions/bar-chart`,
      lastmod: new Date().toISOString(),
      changefreq: "yearly",
      priority: 0.6,
    },
    {
      loc: `${baseUrl}/countries/regions/top-wine-grapes`,
      lastmod: new Date().toISOString(),
      changefreq: "yearly",
      priority: 0.5,
    },
    {
      loc: `${baseUrl}/countries/regions/bubble-map`,
      lastmod: new Date().toISOString(),
      changefreq: "yearly",
      priority: 0.5,
    },
    {
      loc: `${baseUrl}/countries/bubble-chart`,
      lastmod: new Date().toISOString(),
      changefreq: "yearly",
      priority: 0.6,
    },
    {
      loc: `${baseUrl}/countries/nationaltop`,
      lastmod: new Date().toISOString(),
      changefreq: "yearly",
      priority: 0.6,
    },
    {
      loc: `${baseUrl}/countries/worldtopten`,
      lastmod: new Date().toISOString(),
      changefreq: "yearly",
      priority: 0.6,
    },
    {
      loc: `${baseUrl}/grapes/worldtop`,
      lastmod: new Date().toISOString(),
      changefreq: "yearly",
      priority: 0.6,
    },
    {
      loc: `${baseUrl}/learning/terms`,
      lastmod: new Date().toISOString(),
      changefreq: "monthly",
      priority: 0.5,
    },
    {
      loc: `${baseUrl}/learning/wine-history-timeline`,
      lastmod: new Date().toISOString(),
      changefreq: "monthly",
      priority: 0.5,
    },
    {
      loc: `${baseUrl}/quiz/quiz`,
      lastmod: new Date().toISOString(),
      changefreq: "monthly",
      priority: 0.4,
    },
    // Historic data pages
    {
      loc: `${baseUrl}/historic/histogram-individual-production`,
      lastmod: new Date().toISOString(),
      changefreq: "yearly",
      priority: 0.3,
    },
    {
      loc: `${baseUrl}/historic/histogram-individual-consumption`,
      lastmod: new Date().toISOString(),
      changefreq: "yearly",
      priority: 0.3,
    },
    {
      loc: `${baseUrl}/historic/histogram-indiv-consumption-per-capita`,
      lastmod: new Date().toISOString(),
      changefreq: "yearly",
      priority: 0.3,
    },
    {
      loc: `${baseUrl}/historic/histogram-comparison-consumption`,
      lastmod: new Date().toISOString(),
      changefreq: "yearly",
      priority: 0.3,
    },
    {
      loc: `${baseUrl}/historic/histogram-comp-consumption-per-capita`,
      lastmod: new Date().toISOString(),
      changefreq: "yearly",
      priority: 0.3,
    },
  ];

  // Generate dynamic country pages
  const countryPages = COUNTRIES_DATA.map(country => ({
    loc: `${baseUrl}/countries/${country.id}`,
    lastmod: new Date().toISOString(),
    changefreq: "monthly",
    priority: 0.7,
  }));

  // Generate dynamic country sub-pages
  const countrySubPages = [];
  COUNTRIES_DATA.forEach(country => {
    countrySubPages.push(
      {
        loc: `${baseUrl}/countries/nationaltop/${country.id}`,
        lastmod: new Date().toISOString(),
        changefreq: "yearly",
        priority: 0.6,
      },
      {
        loc: `${baseUrl}/countries/worldtopten/${country.id}`,
        lastmod: new Date().toISOString(),
        changefreq: "yearly",
        priority: 0.6,
      },
      {
        loc: `${baseUrl}/countries/bubble-chart/${country.id}`,
        lastmod: new Date().toISOString(),
        changefreq: "yearly",
        priority: 0.5,
      }
    );
  });

  // Generate dynamic grape pages
  const grapePages = GRAPES_DATA.map(grape => ({
    loc: `${baseUrl}/grapes/${grape.id}`,
    lastmod: new Date().toISOString(),
    changefreq: "monthly",
    priority: 0.7,
  }));

  // Generate dynamic grape sub-pages
  const grapeSubPages = [];
  GRAPES_DATA.forEach(grape => {
    grapeSubPages.push(
      {
        loc: `${baseUrl}/grapes/worldtop/${grape.id}`,
        lastmod: new Date().toISOString(),
        changefreq: "yearly",
        priority: 0.6,
      },
      {
        loc: `${baseUrl}/grapes/worldtop/bubble-chart/${grape.id}`,
        lastmod: new Date().toISOString(),
        changefreq: "yearly",
        priority: 0.5,
      }
    );
  });

  // Combine all pages
  const pages = [
    ...staticPages,
    ...countryPages,
    ...countrySubPages,
    ...grapePages,
    ...grapeSubPages,
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${pages.map(page => `
      <url>
        <loc>${page.loc}</loc>
        <lastmod>${page.lastmod}</lastmod>
        <changefreq>${page.changefreq}</changefreq>
        <priority>${page.priority}</priority>
      </url>
    `).join('')}
  </urlset>
`;

res.setHeader('Content-Type', 'text/xml');
res.write(sitemap);
res.end();

return {
  props: {},
};
}