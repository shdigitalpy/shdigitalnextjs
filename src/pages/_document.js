import { Html, Head, Main, NextScript } from 'next/document'
import { useRouter } from 'next/router';
import Script from 'next/script'

const structuredDataCorp = 


        {
          "@context": "https://schema.org",
          "@type": "Corporation",
          "name": "SH Digital GmbH",
          "url": "https://www.sh-digital.ch/",
          "logo": "https://www.sh-digital.ch/static/images/sh_digital_final_logo_cdscas_c_scale,w_250.webp",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+41 43 508 29 13",
            "contactType": "customer service",
            "areaServed": "CH",
            "availableLanguage": ["en","German"]
          },
          "sameAs": [
            "https://www.facebook.com/shdigitalch",
            "https://twitter.com/sh_digital_ch",
            "https://www.youtube.com/channel/UCEPNZoDVpLFfdV018jxB5eA",
            "https://www.linkedin.com/in/sandro-h-811008136/?originalSubdomain=ch"
          ]
        } 

const structuredDataPS = 

            {
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "SH Digital",
              "priceRange" : "$$",
              "image": "https://www.sh-digital.ch/static/images/sh_digital_final_logo_cdscas_c_scale,w_250.webp",
              "@id": "https://www.sh-digital.ch{{ request.get_full_path }}",
              "url": "https://www.sh-digital.ch/kontakt",
              "telephone": "043 508 29 13",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Widenacker 30",
                "addressLocality": "Niederneunforn",
                "postalCode": "8525",
                "addressCountry": "CH"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 47.59440867014385,
                "longitude": 8.787581353977743
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday"
                ],
                "opens": "08:00",
                "closes": "18:00"
                
              } 
            }

const structuredDataBCTop = 

              {
                "@context": "https://schema.org/", 
                "@type": "BreadcrumbList", 
                "itemListElement": [{
                  "@type": "ListItem", 
                  "position": 1, 
                  "name": "SEO Agentur",
                  "item": "https://www.sh-digital.ch/"  
                },{
                  "@type": "ListItem", 
                  "position": 2, 
                  "name": "Leistungen",
                  "item": "https://www.sh-digital.ch/leistungen"  
                },{
                  "@type": "ListItem", 
                  "position": 3, 
                  "name": "Wissen",
                  "item": "https://www.sh-digital.ch/ratgeber"  
                },{
                  "@type": "ListItem", 
                  "position": 4, 
                  "name": "Über uns",
                  "item": "https://www.sh-digital.ch/agentur"  
                },{
                  "@type": "ListItem", 
                  "position": 5, 
                  "name": "Kontakt",
                  "item": "https://www.sh-digital.ch/kontakt"  
                }]
              } 



export default function Document() {




  return (
    <Html lang="de">
      <Head>
      
      <link rel="icon" href="/favicon.ico"/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192"  href="/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        {/*<link rel="manifest" href="/manifest.json" />*/}
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
      
        <script
                key="structured-data"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredDataCorp) }}
              />
              <script
                key="structured-data"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredDataPS) }}
              />
              <script
                key="structured-data"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredDataBCTop) }}
              />


              <Script id="gtag-script" strategy="lazyOnload" dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-MFG8F2H');`}}></Script>
        </Head>

      <body>
      <noscript dangerouslySetInnerHTML={{ __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MFG8F2H"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>`}}></noscript>
        <Main />
        <NextScript />

      </body>
    </Html>
  )
}
