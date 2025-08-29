import { getServerSideSitemap } from "next-sitemap";

export default function Sitemap() {
    return null;
  }
  
  export async function getServerSideProps({ res }) {
    const baseUrl = 'https://winography.net';
  
  const pages = [
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