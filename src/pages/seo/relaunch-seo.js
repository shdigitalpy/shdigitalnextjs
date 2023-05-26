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
import relaunchSEOImage from '../../assets/images/seo/relaunch-wissen.webp'
import SiteAnalysis from '../../components/sections/SiteAnalysis';
import TextBlock from '../../components/sections/TextBlock';
import TextBlockMehr from '../../components/sections/TextBlockMehr';
import abdeckungImage from '../../assets/images/seo/abdeckung.png';
import fehlerImage from '../../assets/images/seo/fehler.png'
import checkMinusIcon from '../../assets/icons/minus.svg';
import WorkWithUs from "../../components/sections/WorkWithUsRelaunch";
import FAQ from "../../components/sections/FAQSEO";

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

                <section id="einleitung" className="section-wrapper" style={{ paddingBottom: 0}}>
                    <div className="container">
                        <div className="title-wrapper">
                            <FramerMotionAnimation
                                type="h2" className="title text-center">
                                Einleitung
                            </FramerMotionAnimation>
                            <Image src={doubleArrowIcon} alt="arrows" className="ml-auto double-arrow-art" />
                        </div>

                        <FramerMotionAnimation
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                        >
                            <p className="desc-sm mb-15">
                                Unterschätzen Sie die Wirkung eines Neustarts nicht. In der Regel liest man in diesem Zusammenhang von den Gefahren und <b>möglichen negativen Auswirkungen</b>.


                            </p>
                            <p className="desc-sm mb-15 md:mb-15">
                               In diesem Ratgeber möchte ich Ihnen auch die <b>Chancen</b> aufzeigen. Ein Neustart ist mit entsprechender Planung und Monitoring möglich.
                            </p>
                        
                            <p className="desc-sm mb-15">
                                Man muss verhindern, dass Google die Seite komplett neu bewerten. Da man sonst Gefahr läuft, dass man wieder von null startet.
                            </p>
                            <p className="desc-sm mb-15 md:mb-15">
                            Deshalb ist der Relaunch mit Risiken verbunden, welche es zu reduzieren gilt.


                            </p>
                        </FramerMotionAnimation>
                        
                    </div>
                </section>

                <section id="chancen" className="section-wrapper" style={{ paddingBottom: 0}}>
                    <div className="container">

                 <div className="content-wrapper content-grid-wrapper grid md:grid-cols-2">
                            <FramerMotionAnimation
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                            >
                                <h2 className="content-title-md mb-50 md:mb-24">Die Chancen bei Erfolg</h2>
                                <p className="desc-sm mb-15">
                                Aus einer Übearbeitung ergeben sich für Suchmaschinenoptimierung viele Möglichkeiten (siehe Liste).


                                </p>
                                <p className="desc-sm mb-15 md:mb-15">
                               Keine Frage die Neulancierung einer Webseite ist ein komplexes und mit Risiko verbundenes Thema. Jedoch können dabei für den Erfolg bei Suchmaschinen zentrale Elemente überarbeitet werden. Der SEO-Relaunch kann die Umsetzung entscheidend beeinflussen und ein Projekt in richtige Bahnen lenken.

                            </p>
                                
                            </FramerMotionAnimation>
                            <FramerMotionAnimation
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                            >
                                <ListItems items={seoRelaunchListItems} />
                            </FramerMotionAnimation>
                        </div>

                    </div>
                </section>

                 <section id="planung" className="section-wrapper" style={{ paddingBottom: 0}}>
                    <div className="container">

                 <div className="content-wrapper content-grid-wrapper grid md:grid-cols-2">
                            <FramerMotionAnimation
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                            >
                                <h2 className="content-title-md mb-50 md:mb-24">Die Planung</h2>
                                <p className="desc-sm mb-15">
                                Ein Relaunch kann mit der Beteiligung von verschiedenen Personen komplex werden. Um es so einfach wie möglich durchzuführen, sollte man sich auf einen für alle verständlichen Ablauf einigen. Die Schritte sollten zwingend eingehalten werden.
                                </p>
                                <p className="desc-sm mb-15 md:mb-15">
                               Es ist ausserdem wichtig, genügend Zeit einzuplanen, denn <b>die Qualität sollte im Vordergrund stehen</b>. Im Nachhinein etwas in den Suchergebnissen reparieren zu wollen, geht in der Regel schief.
                            </p>
                            <p className="desc-sm mb-15 md:mb-15">
                               Die genaue Planung ist von der Art des Neustarts abhängig. Ob nur die URL-Struktur angepasst, oder die gesamte neu gestaltet wird, diese allgemein gültige Schritt-für-Schritt-Anleitung hilft dabei, den Fokus nicht zu verlieren.
                            </p>
                                
                            </FramerMotionAnimation>
                            <FramerMotionAnimation
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                            >
                                <ListItems items={seoRelaunchPlanungItems} />
                            </FramerMotionAnimation>
                        </div>

                    </div>
                </section>

                <section id="wiefunktioniertes" className="section-wrapper">
                    <div className="container">
                        
                        <div className="content-wrapper content-grid-wrapper grid md:grid-cols-2">
                            <FramerMotionAnimation
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="image-wrapper p-0 bg-gray">
                                <Image src={relaunchSEOImage} alt="Relaunch Checkliste" className="main-image" />
                            </FramerMotionAnimation>
                            <FramerMotionAnimation
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                            >
                                <p className="desc-sm mb-15">Falls nicht vorhanden, sollte man sich einen Überblick über alle URL verschaffen. Wenn ein professioneller Experte ein Projekt im Bereich SEO begleitet, dann sollte diese Liste bereits vorhanden sein. Ansonsten gibt es Tools wie z.B. Screaming Frog, die das sehr gut können.</p>
                                <p className="desc-sm mb-0">Empfehlenswert: Eine komplette <Link href="/seo/seo-analyse" title="SEO-Analyse">SEO-Analyse</Link> durchzuführen macht Sinn, damit man Dinge wie Keyword-Recherche, technischer SEO-Check, usw. abdecken kann. Ausserdem hat man dann eine optimale Datenbasis für die richtige Webseiten-Struktur.</p>
                            </FramerMotionAnimation>
                        </div>
                       
                    </div>
                </section>

                <TextBlock data={post} />

                <SiteAnalysis data={post} />
                <section id="text" className="section-wrapper">
                    <div className="container">
                 <div className="content-wrapper">
                            <FramerMotionAnimation
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                            >

                                
                                <p className="desc-sm mb-15">
                                Wie man aus dieser Übersicht sehen kann, ist die Vorbereitung schon die halbe Miete. Bei der Umsetzung sind vor allem die Entwickler gefordert, welche in jeder Hinsicht unterstützt werden sollten.

                                </p>
                                <p className="desc-sm mb-15 md:mb-15">
                               301-Weiterleitungen: Es darf keinen Neustart ohne Weiterleitungen geben, diese müssen permanent sein. Dabei spricht man von 301-Weiterleitungen, weil der Status 301 die permanente Weiterleitung beschreibt. Es müssen neben Haupt- und Unterseiten der Webseite auch Bilder weitergeleitet werden.


                            </p>
                            <p className="desc-sm mb-15 md:mb-15">
                               <b>Tipp</b>: Es kann hilfreich sein, die alte Webseite weiterhin schnell verfügbar zu halten. Diese sollte auf einer anderen Domain oder Subdomain platziert werden, welche nicht indexiert wird. Vielleicht muss man im Verlaufe des Monitorings nochmals auf alte Daten darauf zurückgreifen.


                            </p>
                                
                            </FramerMotionAnimation>
                            
                        </div>

                        </div>
                </section>

                <section id="pruefung"  className="section-wrapper">
                    <div className="container">

                    <div className="content-wrapper mb-50 md:mb-24">
                            <FramerMotionAnimation
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                            >
                                <h2 className="content-title-md mb-50 md:mb-24">Überprüfen der technischen Implementation</h2>
                                <p className="desc-sm mb-15">
                                Man sollte als Erstes sicherstellen, dass alle Weiterleitungen wie geplant funktionieren. Es gibt verschiedene Tools, die man dafür verwenden kann. Ein Beispiel ist das Google Sheet von Redirectinator oder wenn man ein bezahltes Tool hat, gibt es dort auch viele Möglichkeiten.

                                </p>
                                
                                
                            </FramerMotionAnimation>
                            
                        </div>

                    <h2 className="content-title-md mb-50 md:mb-24">Relaunch-SEO Checkliste</h2>

                 <div id="checkliste" className="content-wrapper">
                            
                            <FramerMotionAnimation
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                            >
                                <ListItems items={seoRelaunchCheckliste} />
                            </FramerMotionAnimation>
                        </div>

                    
                            <br /><br /><br />
                        <div className="content-wrapper">
                                <h3 className="content-title-md mb-50 md:mb-24">Monitoring</h3>
                    <p className="desc-sm mb-15 md:mb-15">
                                    Die kommenden Wochen nach der Liveschaltung werden sehr wichtig. Man sollte die Google Search Console verwenden, um den Verlauf in den Suchergebnissen zu überprüfen.

                            </p>
                                <br /><br />
                            <Image src={abdeckungImage} alt="Google Search Console Abdeckung" className="main-image" />
                            
                            <br /><br />
                        <p className="desc-sm mb-15 md:mb-15">
                                    Werden dort Fehler in Bezug auf das Crawling angezeigt. Wenn es Abdeckungsprobleme gibt, sollten diese schnellstmöglich behoben werden. Natürlich ist nicht jeder Fehler gleich eine Katastrophe, gewisse Punkte können extra so gewollt sein. Da kommt es natürlich darauf an, wie die URL-Struktur aufgebaut ist und welche URLs man in den Index schicken möchte.

                            </p>
                            <br /><br />
                            <Image src={fehlerImage} alt="Google Search Console Abdeckung" className="main-image" />
                            
                            <br /><br />

                            <p className="desc-sm mb-15 md:mb-15">
                                    <b>Rankings</b>: Ein Augenmerk legen Sie natürlich auf die Rankings der wichtigsten Keywords. Geraten Sie nicht in Panik, wenn es zu Verschiebungen kommt. Die Suchmaschine benötigt mindestens 2 Monate, um sich an die neuen Gegebenheiten anzupassen.



                            </p>
                             <p className="desc-sm mb-15 md:mb-15">
                                   Dabei kann es zu massiven Rankingverschiebungen kommen, die sich aber langfristig wieder einpendeln. Sofern alles richtig umgesetzt wurde und die Rankingabstürze nicht im Zusammenhang mit Fehlern passieren. Mit der SEO-Relaunch Checkliste stellen Sie sicher, dass es keine solchen Fehler gibt.

                            </p>

                                <p className="desc-sm mb-15 md:mb-15">
                                   Aus unserer Sicht das beste Tool für die Überprüfung von Rankings ist SEMrush. Weitere Informationen zu SEMrush finden Sie in unserem Artikel über SEO-Tools im Vergleich.

                                    </p>
                                        <p className="desc-sm mb-15 md:mb-15">
                                    Der organische Traffic sollte sich im gleichen Bereich bewegen wie zuvor, ausser es kommt zu temporären Rankingverlusten. Dann kann dieser leicht zurückgehen, sollte sich aber innert eines Monates wieder erholen. Alles, was auffällt, sollte sofort behoben werden!
                                        </p>



                    </div>

                    </div>
                </section>

                <section id="fehlerquellen" className="section-wrapper" style={{ paddingBottom: 0}}>
                    <div className="container">
                        <div className="title-wrapper">
                            <FramerMotionAnimation
                                type="h2" className="title text-center">
                                Fehlerquellen
                            </FramerMotionAnimation>
                            <Image src={doubleArrowIcon} alt="arrows" className="ml-auto double-arrow-art" />
                        </div>

                        <FramerMotionAnimation
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                        >
                            <p className="desc-sm mb-15">
                                Die grösste Fehlerquelle ist, einen Relaunch schnell über die Bühne bringen zu wollen. Dabei werden gerne Dinge nicht entsprechend sauber ausgeführt, wie es sein sollte. Dabei kann es zu massiven Rankingverlusten kommen, die man womöglich über Jahre mit einer gezielten Umsetzung erreicht hat.


                            </p>
                            
                        </FramerMotionAnimation>
                        
                    </div>
                </section>

                <section id="chancen" className="section-wrapper" style={{ paddingBottom: 0}}>
                    <div className="container">

                 <div className="content-wrapper content-grid-wrapper grid md:grid-cols-2">
                            
                            <FramerMotionAnimation
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                            >
                                <ListItems items={seoFehlerListItems} />
                            </FramerMotionAnimation>
                        </div>

                    </div>
                </section>

                <WorkWithUs />

                <FAQ link={'faq'} data={faqSeoRelaunchData} />

                <Comments slug={'seo-strategie'} />



            </main>
        </>
    )
}




const post =  {
                slug: 'relaunch-seo',
                shortTitle: 'Relaunch-SEO',
                title: 'Relaunch-SEO',
                description: 'Es gibt gute Gründe für einen CMS-Wechsel, Redesign oder Rebranding. Bei einem Relaunch sollte SEO berücksichtigt werden, denn eine Website kann schnell Sichtbarkeit und Traffic verlieren.',
                image: seoRelaunchImage,
                imageAlt: 'Relaunch-SEO',
                readMoreUrl: '/seo/relaunch-seo',
                date: '15.03.2022',
                update: '15.03.2022',
                readingTime: '6min Lesedauer',
                cta: 'Relaunch SEO',
                author: 'Sandro Huber',
                authorImage: sandro,
                category: 'Ratgeber',
                categoryUrl: '/blog',
                introId: '',
                introTitle: 'Checkliste für den perfekten Neustart Ihrer Webseite',
                introDescription: 'Es gibt gute Gründe für einen CMS-Wechsel, Redesign oder Rebranding. Bei einem Relaunch sollte SEO berücksichtigt werden, denn eine Website kann schnell Sichtbarkeit und Traffic verlieren. \n\nHeute zeigen wir, auf was man bei einem SEO-Relaunch achten sollte. Mit der Schritt-für-Schritt-Anleitung gelingt jeder Neustart, ohne wichtige Rankings bei Suchmaschinen zu verlieren.',
                
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

