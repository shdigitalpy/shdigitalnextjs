import Link from 'next/link';
import Head from 'next/head';
import {Inter} from 'next/font/google';
import {useEffect, useState} from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Banner from '../../components/common/Banner';
import sandro from '../../assets/images/blog/sandro.png';
import holdingLaptop from '../../assets/images/holding-laptop-3.png';
import BreadCrumb from '../../components/common/BreadCrumb';
import twitterIcon from '../../assets/icons/twitter-white.svg';
import facebookIcon from '../../assets/icons/facebook-white.svg';
import WhatGoogleSays from '../../components/sections/WhatGoogleSays';
import FramerMotionAnimation from '../../components/common/FramerMotionAnimation';
import doubleArrowIcon from '../../assets/images/sharp-double-arrow-down.svg';
import checkCircleOrange from '../../assets/icons/check-circle-orange.svg';
import taskAction from '../../assets/icons/task-actions.svg';
import Comments from "../../components/sections/Comments";
import upRightArrow from '../../assets/icons/up-right-arrow.svg';
import seoRelaunchImage from '../../assets/images/seo/relaunch-seo-web.webp'
import ListItems from '../../components/common/ListItems';
import checkCircleIcon from '../../assets/icons/check-circle-orange.svg';
import videoSEOImage from '../../assets/images/seo/videos-im-seo.jpg'
import checkMinusIcon from '../../assets/icons/minus.svg';
import videoSEOSecImage from '../../assets/images/seo/video-seo.webp'
import videoArtImage from '../../assets/images/seo/arten-video-optimierung.webp'


import faqSeoRelaunchData from '../../data/faqSeoRelaunchData';

const inter = Inter({subsets: ['latin']})

export default function seoRelaunch() {
    

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

                <section id="unternehmen" className="section-wrapper" >
                    <div className="container">
                        <div className="grid md:grid-cols-2 title-wrapper">
                            <FramerMotionAnimation
                                type="h2" className="title">
                                <div>Welche Arten von </div>
                                <div>Video-Optimierungen gibt es?</div>
                            </FramerMotionAnimation>
                            <Image src={doubleArrowIcon} alt="arrows" className="ml-auto double-arrow-art" />
                        </div>
                        <div className="content-wrapper content-grid-wrapper grid md:grid-cols-2">
                            
                            <FramerMotionAnimation
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }} >
                                <p className="desc-sm mb-15">Die meisten Maßnahmen zielen darauf ab, 
                                Filmclips zu optimieren und das Ranking bei der Video-Suche bei Google und YouTube zu verbessern.</p>
                                <p className="desc-sm mb-15">Letztere Plattform ist inzwischen die <a href="https://www.forbes.com/sites/forbesagencycouncil/2017/05/15/are-you-maximizing-the-use-of-video-in-your-content-marketing-strategy/?sh=74b7986c3584" titel="weltweit zweitgrößte Suchmaschine" target="__blank">weltweit zweitgrößte Suchmaschine</a>. Das Verweisen auf die YouTube-Videos erfolgt unter anderem in den Google-SERPs. </p>

                                    


                                    
                            </FramerMotionAnimation>
                            <FramerMotionAnimation
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="image-wrapper">
                                <Image src={videoSEOSecImage} alt="Video SEO" className="main-image" />
                            </FramerMotionAnimation>
                             <FramerMotionAnimation
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="image-wrapper p-0 bg-gray">
                                <Image src={videoArtImage} alt="Arten von Video Optimierungen" className="main-image" />
                            </FramerMotionAnimation>
                            <FramerMotionAnimation
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                            >
                               <p className="desc-sm mb-15">Bei der Suche nach einem bestimmten Musiktitel erscheinen bei Google zum Beispiel Einblendungen, die auf den Musikkanal verweisen. 
                                    </p>
                                    <p className="desc-sm mb-15">
                                        Auch das Einbinden von Videos auf der eigenen Webseite verfolgt das Ziel der Optimierung von Videos für Suchmaschinen oder Videoplattformen.
                                        </p>
                            </FramerMotionAnimation>
                        </div>
                       
                    </div>
                </section>


                <Comments slug={'video-seo'} />



            </main>
        </>
    )
}




const post =  {
                slug: 'video-seo',
                shortTitle: 'Video-SEO für eine bessere Reichweite',
                title: 'Video-SEO für eine bessere Reichweite',
                description: 'Wie nutzt man SEO, um erfolgreicher bei Suchmaschinen und YouTube platziert zu werden.',
                image: videoSEOImage,
                imageAlt: 'Video SEO',
                readMoreUrl: '/seo/video-seo',
                date: '25.03.2022',
                update: '25.03.2022',
                readingTime: '12min Lesedauer',
                cta: 'Video SEO',
                author: 'Sandro Huber',
                authorImage: sandro,
                category: 'Ratgeber',
                categoryUrl: '/blog',
                
                introId: 'definition',
                introTitle: '',
                introDescription: 'Wie nutzt man SEO, um erfolgreicher bei Suchmaschinen und YouTube platziert zu werden. \n\nVideo-SEO umfasst sämtliche Maßnahmen, die den Video-Content auf den Webseiten verbessern.\n\nYouTube-SEO beschäftigt sich damit, ein Video in YouTubes Listing höher zu platzieren.',
                introDescription2: 'Haben Sie schon einmal von Ryan Kaji gehört? Wahrscheinlich nicht! \n\nDieser im 2022 11-jährige Junge hat mit seinem YouTube-Kanal mit Videos knapp 30 Millionen US-Dollar verdient.\n\nUnternehmen sollten diesen Bereich nicht unterschätzen.',

                contentList: [

                    {
                        item: 'Die Chancen bei Erfolg',
                        link: '#chancen'
                    },
                    {
                        item: 'Die Planung',
                        link: '#planung'
                    },
                    {
                        item: 'Umsetzung und Weiterleitung',
                        link: '#umsetzung'
                    },
                    {
                        item: 'Überprüfen der technischen Implementation',
                        link: '#pruefung'
                    },
                   
                    {
                        item: 'SEO-Relaunch Checkliste',
                        link: '#checkliste'
                    },
                    {
                        item: 'Fehlerquellen',
                        link: '#fehlerquellen'
                    },
                    {
                        item: 'Mit SH Digital neu lancieren',
                        link: '#work-with-us'
                    },
                    {
                        item: 'Häufige Fragen',
                        link: '#faq'
                    }
                    
                  
                
                ],
                itemsCheckId: 'umsetzung',
                textblockTitle: 'Umsetzung und Weiterleitung',
                textBlock: 'Die technische Umsetzung sollte Hand-in-Hand gehen mit Abteilungen Marketing, Webentwicklung, usw. Wir empfehlen so viel wie möglich auf dem Testserver vorzubereiten. Das eine oder andere noch kurz live zu korrigieren, wird die Suchmaschine aus unserer Erfahrung noch mehr verwirren, als dass schon nicht genügend Verwirrung vorhanden ist.',
                itemsLeftSubtitle1: 'Testumgebung',
                itemsLeft: [

                    {
                        data: 'Redesign der Webseite mit neuer Struktur',
                    },
                    {
                        data: 'Umzug des Content-Management-Systems',
                    },
                    {
                        data: 'Einpflegen der neuen Inhalte',
                    },
                    {
                        data: 'Zusammenführen bestehender Inhalte',
                    },
                    {
                        data: 'Programmieren von neuen Funktionen',
                    },
                    {
                        data: 'Diverse Checks wie z.B. Responsive Design',
                    },
                    {
                        data: 'Vorbereitung der Redirects',
                    },
                    {
                        data: 'Eine individuelle 404-Fehlerseite erstellen',
                    },


                   ],
                itemsrightSubtitle: 'Liveschaltung',
                itemsRight: [
                    {
                        data: 'Neue Webseite veröffentlichen',
                    },
                    {
                        data: '301-Weiterleitungen erstellen',
                    },
                    {
                        data: 'Bei Domainumzug alte Webseite aus dem Index nehmen',
                    },
                    {
                        data: 'Die neue Webseite bei der Google Search Console anlegen',
                    }
                  


                ],
               
            };


const seoFehlerListItems = [

{
        icon: checkMinusIcon,
        text: 'Man hat während der Vorbereitung zu wenig Zeit eingeplant',
    },
    {
        icon: checkMinusIcon,
        text: 'Der Neustart wurde nicht genutzt um die SEO-Strategie zu verbessern',
    },
    {
        icon: checkMinusIcon,
        text: 'Der Aufwand wird massiv unterschätzt oder zu wenig Ressourcen eingeplant',
    },
    {
        icon: checkMinusIcon,
        text: 'Es wurde kein SEO-Experte in das Projekt einbezogen',
    },
    {
        icon: checkMinusIcon,
        text: 'Das Testing und Monitoring wird vernachlässigt',
    },
    {
        icon: checkMinusIcon,
        text: 'Die bisherige Seite ist nicht mehr als Backup verfügbar',
    },
    {
        icon: checkMinusIcon,
        text: 'Die bisherige Seite wird noch indexiert und es entsteht Duplicate-Content',
    }
   
    

    ]

const seoRelaunchCheckliste = [

{
        icon: checkCircleIcon,
        text: 'Funktionieren die 301-Weiterleitungen?',
    },
    {
        icon: checkCircleIcon,
        text: 'Ist die Website indexierbar?',
    },
    {
        icon: checkCircleIcon,
        text: 'Gibt es Fehlercodes (z.B. 4xx, 5xx)?',
    },
    {
        icon: checkCircleIcon,
        text: 'Gibt es nicht funktionierende interne Links?',
    },
    {
        icon: checkCircleIcon,
        text: 'Wurde die XML Sitemap aktualisiert?',
    },
    {
        icon: checkCircleIcon,
        text: 'Ist die robots.txt Datei korrekt und werden keine wichtigen Seiten vom Index blockiert?',
    },
    {
        icon: checkCircleIcon,
        text: 'Funktionieren die Seiten-Tags wie z.B. Google Analytics korrekt?',
    },
    {
        icon: checkCircleIcon,
        text: 'Wurde der Property in der Google Search Console angepasst und die Sitemap eingereicht?',
    },
     {
        icon: checkCircleIcon,
        text: 'Ist die Pagespeed wie geplant?',
    },
    {
        icon: checkCircleIcon,
        text: 'Gibt es sonstige SEO-Fehler?',
    },


    ]

const seoRelaunchPlanungItems = [
    {
        icon: checkCircleIcon,
        text: 'URL-Liste erstellen',
    },
    {
        icon: checkCircleIcon,
        text: 'Keyword-Recherche durchführen',
    },
    {
        icon: checkCircleIcon,
        text: 'Technischer SEO-Check',
    },
    {
        icon: checkCircleIcon,
        text: 'Inhalte überprüfen',
    },
    {
        icon: checkCircleIcon,
        text: 'Webseitenstruktur anpassen',
    },
    {
        icon: checkCircleIcon,
        text: '301-Weiterleitungen einrichten',
    },
    {
        icon: checkCircleIcon,
        text: 'Überprüfung nach der Liveschaltung',
    },
    {
        icon: checkCircleIcon,
        text: 'Backlinks anpassen lassen',
    },
];


const seoRelaunchListItems = [
    {
        icon: checkCircleIcon,
        text: 'Bereinigung der Website- und URL-Struktur',
    },
    {
        icon: checkCircleIcon,
        text: 'Festlegen der Seitentypen aus SEO-Sicht',
    },
    {
        icon: checkCircleIcon,
        text: 'Pagespeed verbessern',
    },
    {
        icon: checkCircleIcon,
        text: 'Strukturierte Daten Setup',
    },
    {
        icon: checkCircleIcon,
        text: 'Redesign der Webseite (UX, UI)',
    },
    {
        icon: checkCircleIcon,
        text: 'Neue SEO-relevante Features (z.B. Produktfilter bei Onlineshops)',
    },
    {
        icon: checkCircleIcon,
        text: 'Benutzerfreundlichkeit verbessern',
    },
];

