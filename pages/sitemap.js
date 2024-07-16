export default function sitemap() {

    const baseUrl = 'https://winography.net/';
    return [
      {
        url: baseUrl,
        lastModified: new Date(),
        changeFrequency: 'montly',
        priority: 1,
      },
      {
        url: `${baseUrl}/countries`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.6,
      },
    {
        url: `${baseUrl}/grapes`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
    },
    {
        url: `${baseUrl}/historic`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
    },
    {
        url: `${baseUrl}/quiz`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.6,
    },
    {
        url: `${baseUrl}/learning`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.6,
    },
    {
        url: `${baseUrl}/about`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.2,
    },
    {
        url: `${baseUrl}/countries/bar-chart`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.6,
    },
    {
        url: `${baseUrl}/grapes/bar-chart`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.6,
    },
    {
        url: `${baseUrl}/historic/histogram-individual-production`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.3
    },
    {
        url: `${baseUrl}/historic/histogram-comparison-production`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.3
    },
    {
        url: `${baseUrl}/historic/stackedarea`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.3
    },
    ]
  }