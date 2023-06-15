/** @type {import('next').NextConfig} */
const nextConfig = {

  async redirects() {
    return [

      {
        source: '/potentialanalyse',
        destination: '/contact',
        permanent: true,
      },


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

      {
        source: '/leistungen/seo-analyse-paket',
        destination: '/resources/onpage-analyse',
        permanent: true,
      },
      {
        source: '/seo-agentur-fuer-kleine-unternehmen',
        destination: '/',
        permanent: true,
      },
      {
        source: '/ratgeber/seo-kosten',
        destination: '/seo/seo-kosten',
        permanent: true,
      },

      {
        source: '/ratgeber/relaunch-seo',
        destination: '/seo/relaunch-seo',
        permanent: true,
      },

      {
        source: '/ratgeber/online-shop-seo',
        destination: '/ecommerce/online-shop-seo',
        permanent: true,
      },

      {
        source: '/seo-analyse',
        destination: '/seo/seo-analyse',
        permanent: true,
      },

      {
        source: '/local-seo',
        destination: '/seo/local-seo',
        permanent: true,
      },

      {
        source: '/tiktok-nutzer',
        destination: '/saas/tiktok-nutzer',
        permanent: true,
      },

      {
        source: '/onlineshop-erstellen-lassen',
        destination: '/angebot',
        permanent: true,
      },

      {
        source: '/seo-tools/serp-overlap-tool',
        destination: '/seo/seo-tools',
        permanent: true,
      },

          

    ]
  },

  reactStrictMode: true,
  images: {
    unoptimized: true,
  },

}

module.exports = nextConfig