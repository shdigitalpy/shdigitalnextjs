/** @type {import('next').NextConfig} */
const nextConfig = {

  async redirects() {
    return [

      {
        source: '/was-ist-seo',
        destination: '/seo/was-ist-seo',
        permanent: true,
      },

      {
        source: '/seo-wie-lange-dauert-es',
        destination: '/seo/seo-dauer',
        permanent: true,
      },
      {
        source: '/seo-strategie',
        destination: '/seo/seo-strategie',
        permanent: true,
      },

      {
        source: '/leistungen/onlineshops',
        destination: '/ecommerce/online-shop-seo',
        permanent: true,
      },
      {
        source: '/leistungen/content-marketing',
        destination: '/angebot',
        permanent: true,
      },
      {
        source: '/leistungen',
        destination: '/angebot',
        permanent: true,
      },
      {
        source: '/seo-pakete-schweiz',
        destination: '/angebot',
        permanent: true,
      },
      {
        source: '/seo-agentur-winterthur',
        destination: '/',
        permanent: true,
      },
      {
        source: '/seo-zuerich',
        destination: '/',
        permanent: true,
      },
      {
        source: '/seo-agentur-frauenfeld',
        destination: '/',
        permanent: true,
      },

      {
        source: '/seo-agentur-stgallen',
        destination: '/',
        permanent: true,
      },
      {
        source: '/seo-texte-agentur',
        destination: '/',
        permanent: true,
      },

      

    ]
  },

  reactStrictMode: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
