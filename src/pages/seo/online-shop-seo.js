import Link from 'next/link';
import Head from 'next/head';
import {Inter} from 'next/font/google';
import {useEffect, useState} from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Banner from '../../components/common/Banner';
import seoKostenImage from '../../assets/images/seo/kosten-seo.webp';
import sandro from '../../assets/images/blog/sandro.png';
import holdingLaptop from '../../assets/images/holding-laptop-3.png';
import BreadCrumb from '../../components/common/BreadCrumb';
import twitterIcon from '../../assets/icons/twitter-white.svg';
import facebookIcon from '../../assets/icons/facebook-white.svg';
import WhatGoogleSays from '../../components/sections/WhatGoogleSays';
import FramerMotionAnimation from '../../components/common/FramerMotionAnimation';
import doubleArrowIcon from '../../assets/images/sharp-double-arrow-down.svg';
import seoDauer1 from '../../assets/images/seo/seo-dauer.webp';
import seoDauer2 from '../../assets/images/seo/seo-dauer2.webp';
import seoKostenIntroImage from '../../assets/images/seo/seo-kosten-schweiz.webp'
import ContentWithVideo from '../../components/sections/ContentWithVideo2';
import checkCircleOrange from '../../assets/icons/check-circle-orange.svg';
import taskAction from '../../assets/icons/task-actions.svg';
import seoStudie from '../../assets/images/seo/studie.webp'
import FAQ from "../../components/sections/FAQSEO";
import Comments from "../../components/sections/Comments";
import WorkWithUs from "../../components/sections/WorkWithUsKosten";
import seoOnlineshop from '../../assets/images/seo/online-shop-suchmaschinenoptimierung.jpg';
import onlineshopImage from '../../assets/images/seo/online-shop-seo.webp'
import doubleDownArrow from '../../assets/images/sharp-double-arrow-down.svg';
import squareIcon from '../../assets/icons/square.svg';

import onpageOptimizationSectionData from '../../data/onpageOptimizationSectionData';
import offpageOptimizationSectionData from '../../data/offpageOptimizationSectionData';
import faqSeoKostenData from '../../data/faqSeoKostenData';

const inter = Inter({subsets: ['latin']})


const number1 = 1500;
const number2 = 2500;
const number3 = 2000;

const formattedNumber1 = number1.toLocaleString('en-CH', {
    style: 'currency',
    currency: 'CHF',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

const formattedNumber2 = number2.toLocaleString('en-CH', {
    style: 'currency',
    currency: 'CHF',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

const formattedNumber3 = number3.toLocaleString('en-CH', {
    style: 'currency',
    currency: 'CHF',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

export default function seoKosten() {
    

    return (
        <>
            
            <main className="what-is-seo">
                <Banner arrow={false} bg={holdingLaptop} className="post-banner">
                    <BreadCrumb category={post.category} categoryUrl={post.categoryUrl} post={post} />
                    <h1 className="banner-heading-md text-white uppercase">{post.title}</h1>
                    <div className="author-wrapper">
                        <Image src={post.authorImage} alt={post.author} className="agency-image" />
                        <div className="details-wrapper">
                            <p className="agency-name">{post.author}</p>
                            <div className="date-time-wrapper">
                                <p className="date">Erstellt: {post.date}</p> ·
                                 <p className="date">Aktualisiert: {post.update}</p> ·
                                <p className="read-time">{post.readingTime}</p>
                            </div>
                            <div className="social-wrapper">
                                Teilen :
                                <div className="social-links-wrapper">
                                    <Link href={`https://twitter.com/intent/tweet?url=${post.slug}&text=${post.title}`}>
                                        <Image src={twitterIcon} alt="twitter" className="social-icon" />
                                    </Link>
                                    <Link href={`https://www.facebook.com/sharer.php?u=${post.slug}`}>
                                        <Image src={facebookIcon} alt="facebook" className="social-icon" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </Banner>

                <WhatGoogleSays post={post} />


            <section id="wiefunktioniertes" className="section-wrapper bg-gray">
                    <div className="container">
                        <div className="title-wrapper">
                            <FramerMotionAnimation
                                type="h3" className="title text-center">
                               Weshalb lohnt sich Suchmaschinenoptimierung für Onlineshops?

                            </FramerMotionAnimation>
                            <Image src={doubleArrowIcon} alt="arrows" className="ml-auto double-arrow-art" />
                        </div>
                        <div className="content-wrapper content-grid-wrapper grid md:grid-cols-2">
                            <FramerMotionAnimation
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="image-wrapper p-0 bg-gray">
                                <Image src={onlineshopImage} alt="Studie Gartner" className="main-image" />
                            </FramerMotionAnimation>
                            <FramerMotionAnimation
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                            >
                                <p className="desc-sm mb-15">Wenn Sie den 
                                Mit SEO können Sie die organische Sichtbarkeit des Onlineshops signifikant erhöhen. 
                                Potenzielle Kunden finden die Produkte aus Ihrem Sortiment an verschiedenen Stellen bei der Recherche über ein Produkt. Dieser Ausbau der Reichweite bei Suchmaschinen skaliert die Websuchanfragen über die Zeit für den eigenen Shop drastisch.
                                </p>
                                <p className="desc-sm mb-0"> 
                                Zum einen werden bestehende Suchbegriffe für ein höheres Rankings optimiert, 
                                anderseits sollen sich auch die Anzahl der Suchbegriffe mit SEO erhöhen, 
                                auf denen Sie gefunden werden. In unserem Beitrag über <Link href="/seo/was-ist-seo" title="SEO">SEO</Link> finden Sie weitere 
                                Gründe und Statistiken, weshalb Sie noch heute in Suchmaschinenoptimierung investieren sollten!

                                </p>
                            </FramerMotionAnimation>
                        </div>
                       
                    </div>
                </section>

              <section id={itemsCheckId} className="site-analysis container bg-gray" style={{ whiteSpace: "break-spaces" }}>
        
                 <div className="content-wrapper bg-white grid md:grid-cols-2">
                <div className="list-box">
                    <FramerMotionAnimation type="h6" className="list-title">
                       {itemsLeftSubtitle1}
                    </FramerMotionAnimation>
                    <div className="list-wrapper">
                        { itemsLeft?.map((item, index) => (
                            <FramerMotionAnimation
                                initial={{ opacity: 0, x: -70 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.25, delay: index * 0.1 }}
                                className="list-item-wrapper" key={index}>
                                <Image src={squareIcon} alt="square" className="item-icon" />
                                {item.data}
                            </FramerMotionAnimation>
                        ))}
                    </div>
                </div>
                
                
            </div>
             <div className="content-wrapper bg-white grid md:grid-cols-2">
                <div className="list-box">
                    <FramerMotionAnimation type="h6" className="list-title">
                       {itemsLeftSubtitle2}
                    </FramerMotionAnimation>
                    <div className="list-wrapper">
                        { itemsLeft2?.map((item, index) => (
                            <FramerMotionAnimation
                                initial={{ opacity: 0, x: -70 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.25, delay: index * 0.1 }}
                                className="list-item-wrapper" key={index}>
                                <Image src={squareIcon} alt="square" className="item-icon" />
                                {item.data}
                            </FramerMotionAnimation>
                        ))}
                    </div>
                    <br />
                    <FramerMotionAnimation type="p" className="list-title">
                   <small>**Im Optimalfall müssen dort dynamische Informationen verarbeitet werden können, die auf jeder Seite anders sind.</small>
                    </FramerMotionAnimation>


                </div>
                
                
            </div>
            
        </section>

         <section id="" className="analysis-factors bg-gray container">
            <FramerMotionAnimation className="title-wrapper">
                <h2 className="title">
                    Aufsetzen eines Onlineshops für SEO
                </h2>
                <Image src={doubleDownArrow} alt="down arrows" className="down-arrows" />
            </FramerMotionAnimation>
            <FramerMotionAnimation type="p" className="description mb-10">
                        Das Vorgehen unterscheidet sich, falls ein neuer Online-Shop aufgesetzt werden soll oder wenn ein bestehendes Shopsystem angepasst oder sogar ein Relaunch gemacht werden soll. Wir haben versucht ein allgemein gültiges Vorgehen zu formulieren:

                    </FramerMotionAnimation>
            <div className="main-wrapper md:flex">
                
                <div className="content-wrapper">
                    <div className="list-wrapper">
                    <ol className="pl-5 mt-2 space-y-1 list-decimal list-inside">
                     { listAufsetzen?.map((item, index) => (
                            <FramerMotionAnimation
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.25, delay: index * 0.1 }}
                                className="item" key={index}>
                     
                        <li>{ item.data }</li>
                      


                       
                                
                                
                            </FramerMotionAnimation>
                        ))}
                     </ol>
                    </div>
                    <FramerMotionAnimation type="p" className="description">
                       Diese Schritte sollen Ihnen einen kurzen Überblick verschaffen, wie man vorgehen könnte. In der Praxis sollte dies viel umfassender geplant werden.

                    </FramerMotionAnimation>
                   
                </div>
            </div>
        </section>
                   

                   
                                       

                <FAQ link={'faq'} data={faqSeoKostenData} />

                 <WorkWithUs />

                <Comments slug={'seo-kosten'} />



            </main>
        </>
    )
}




const post = {
                slug: 'online-shop-seo',
                shortTitle: 'Online-Shop SEO',
                category: 'Ratgeber',
                categoryUrl: '/blog',
                title: 'Online-Shop SEO perfektionieren',
                description: 'Diese SEO-Massnahmen machen deinen Online-Shop bei Google erfolgreich! ✪Tipps zu Keywords & Shopsystem.',
                image: seoOnlineshop,
                imageAlt: 'Online Shop SEO',
                readMoreUrl: '/seo/online-shop-seo',
                date: '03.03.2022',
                update: '03.03.2022',
                readingTime: '21min Lesedauer',
                cta: 'Online Shop SEO',
                author: 'Sandro Huber',
                authorImage: sandro,
                contentList: [

                    {
                        item: 'Weshalb lohnt sich Suchmaschinenoptimierung für Onlineshops?',
                        link: '#lohnt'
                    },
                    {
                        item: 'Welche Funktionen muss ein Onlineshop für SEO mitbringen?',
                        link: '#funktionen'
                    },
                    {
                        item: 'Aufsetzen eines Onlineshops für SEO',
                        link: '#setup'
                    },
                    {
                        item: 'Shopsysteme',
                        link: '#shopsysteme'
                    },
                   
                    {
                        item: 'Shop-SEO-Analyse',
                        link: '#shopanalyse'
                    },
                     {
                        item: 'Struktur des Onlineshops',
                        link: '#struktur'
                    },
                     {
                        item: 'Onpage für Onlineshops',
                        link: '#onpage'
                    },
                     {
                        item: 'Technische Suchmaschinenoptimierung für Shops',
                        link: '#technisch'
                    },
                     {
                        item: 'Shop Content Marketing',
                        link: '#content'
                    },
                    {
                        item: 'Shop Kategorie Checkliste',
                        link: '#checkliste'
                    },
                     {
                        item: 'Linkaufbau',
                        link: '#linkaufbau'
                    },
                    {
                        item: 'Fazit',
                        link: '#fazit'
                    },
                    {
                        item: 'Häufige Fragen',
                        link: '#faq'
                    },
                  
                
                ],
                introTitle: '',
                introDescription: 'Online-Shop SEO will Produkte eines Webshops möglichst weit oben bei Google platzieren und damit viele neue Kunden ansprechen.',
                introDescription2: 'Heute zeigen wir Ihnen, wie wir für unsere Kunden mit Online-Shop im Durchschnitt mindestens 500% mehr Besucher in einem Jahr erreichen konnten. Die massgebenden Bereiche für erfolgreiches E-Commerce-SEO zeigen wir auf und erklären mit Beispielen, wie man diese bearbeiten kann.',
                introDescription3: 'Neben Tipps haben wir auch einige Vergleiche für Sie bereit. Wir nehmen einige Shopsysteme unter die Lupe und prüfen, wie diese sich für Suchmaschinen eignen.\n\nAlles in allem erfahren Sie in diesem Guide, wie man das Google-Ranking des eigenen Online-Shops verbessern kann. Wie man die richtigen Keywords findet und eine Strategie für den eigenen Shop aufsetzt.',
                videoID: 'seodauervideo',
                videoTitle: 'Mögliches Szenario zur Veranschaulichung',
                videoURL: 'https://www.youtube.com/embed/rukIWLURqlE',
                videoDescription: 'In diesem Video erklären wir Ihnen, was SEO-Kosten sind und wie Sie herausfinden, wie viel Sie investieren sollten. ',
                videoDescription2: 'Wir haben die Angebote von SEO-Agenturen durchleuchtet und eine Preisangabe für die Schweiz gemacht. Zudem erfahren Sie, weshalb SEO mehr Potenzial hat als Google Ads.',
                videoThumbnail: seoKostenIntroImage,
                videoThumbnailDesc: 'SEO Kosten'



               
            
            };

const itemsCheckId = 'funktionen'
const itemsLeftSubtitle1 = 'Zwingend'
const itemsLeft = [

                      {
                        data: 'URLs, Page Title und Meta Descriptions müssen pro Seite definiert werden können'
                    },
                    {
                        data: ' Auf den Kategorieseiten (z.B. Tierbedarf / Hund ) muss es möglich sein, über und unter den Produkten Text einzufügen'
                    },
                    {
                        data: 'Für jedes Bild muss ein ALT-Attribut gesetzt werden können'
                    },
                    {data: 'Überschriften (h1, h2, usw.) müssen gesetzt werden können'},

                    {data: ' Bei allen Links muss ein Anchor- und Linktitel definiert werden können'},

                       {data: ' Bei allen Links muss ein Anchor- und Linktitel definiert werden können'},
                          {data: 'Es benötigt einen Text-Editor für die Produkte, mit dem das Content Design verändert werden kann'},
                             {data: 'Es braucht einen Content-Bereich wie z.B. Ratgeber, Blog, usw.'},
                                {data: ' robots.txt und XML-Sitemap müssen generiert werden'},
                                   {data: ' Weiterleitungen müssen einfach gesetzt werden können'},
                                      {data: ' Interne Verlinkung über eine Breadcrumb und ähnliche Produkte'},


                ];

const itemsLeftSubtitle2 = 'Optional'
const itemsLeft2 = [

                      {
                        data: ' Der allgemeine HTML-head-Bereich** muss bearbeitbar sein'
                    },
                    {
                        data: ' Produktbewertungsfunktion moderierbar'
                    },
                    {
                        data: ' Es muss möglich sein, strukturierte Daten zu verwenden oder diese manuell einzufügen'
                    },
                    {data: ' Man muss einfach Produkte-Videos in die Beschreibung einbinden können'},

                   

                ];

const listAufsetzen = [

                    {
                        id: '1',
                        data: 'Prüfen, ob das bestehende oder geplante Shopsystem die SEO-Funktionen erfüllt'
                    },
                    {   
                         id: '2',
                        data: 'Falls nicht alle Punkte erfüllt werden können, definieren von Prioritäten (Wachstumshebel)'
                    },
                    {
                        data: 'Weitere Faktoren wie z.B. PageSpeed, Mobile-Fähigkeit, usw. berücksichtigen'
                    },
                    {data: 'Konkrete Massnahmen ableiten & umsetzen (Setup oder Umzug)'},
                     {data: 'Die User-Experience einschliessen'},
                      {data: 'SEO-Checks durchführen'},

                       {data: 'Den Online Shop live stellen'},


                ];


const firstItems = [

                    {
                        data: 'Handwerker'
                    },
                    {
                        data: 'Bio-Laden'
                    },
                    {
                        data: 'Restaurants'
                    },
                    {data: 'Rechtsanwälte'},
                        {data: 'Immobilienmakler'},

                ];


const secondItems = [

                    {
                        data: 'Kleine und mittlere Onlineshops'
                    },
                    {
                        data: 'KMU andere Branchen'
                    },
                    {
                        data: 'Digitalagenturen'
                    },
                    {data: 'Immobilienmakler (mehrere Standorte)'},


                ];



const thirdItems = [

                    {
                        data: 'Software, SaaS, IT'
                    },
                    {
                        data: 'Grosse Onlineshops'
                    },
                    {
                        data: 'Industriehersteller'
                    },
                    {data: 'Versicherungen & Banken'},


                ];