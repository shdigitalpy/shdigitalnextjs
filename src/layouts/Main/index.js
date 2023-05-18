import React from 'react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import FramerMotionAnimation from "../../components/common/FramerMotionAnimation";



const structuredData = 


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
        } +

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
            } +

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




const MainLayout = ({ children }) => {
    return (
        <>

         <Head>
         <script
                key="structured-data"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
              />

               </Head>

            <FramerMotionAnimation
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}>
                <Header/>
            </FramerMotionAnimation>
            {children}
            <FramerMotionAnimation
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}>
                <Footer />
            </FramerMotionAnimation>
        </>
    );
};

export default MainLayout;
