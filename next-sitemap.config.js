/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://example.com',
  generateRobotsTxt: true, // (optional)
  changefreq: 'monthly',
  priority: 1.0,
  generateRobotsTxt: true, // (optional)
  exclude: [
    '*/datenschutz',
    '*/agb',
    '*/404',
    '*/thank-you'
  ],
}