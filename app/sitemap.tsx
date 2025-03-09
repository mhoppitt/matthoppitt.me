import type { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://matthoppitt.me',
      lastModified: new Date(),
      // changeFrequency: 'ad-hoc',
      priority: 1,
    }
  ]
}