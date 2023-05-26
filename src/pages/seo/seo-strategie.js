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
import seoStrategieImage from '../../assets/images/seo/strategie.jpg'
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
import seoBuyersJourneyImage from '../../assets/images/seo/buyers-journey.webp';
import vorlageImage from '../../assets/images/seo/2021-Vorlage-SEO-Strategie-Kunde.jpg';
import upRightArrow from '../../assets/icons/up-right-arrow.svg';
import MoreInterestingPostsStrategie from "../../components/sections/MoreInterestingPostsStrategie";

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

export default function seoStrategie() {
    

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

                <section id="definition" className="section-wrapper keywords" style={{paddingBottom: 0}}>
                    <div className="container">
                        
                        

                        <div className="inner-content-wrapper">
                            <div className="content-wrapper content-grid-wrapper grid md:grid-cols-2">
                                <FramerMotionAnimation
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                >
                                    <h4 className="content-title"><Link href="/seo/was-ist-seo" title="SEO">SEO</Link></h4>
                                    
                                    <p className="desc-md mt-15">
                                    SEO steht für Suchmaschinenoptimierung und befasst sich mit dem Thema, wie man bei Suchmaschinen wie z.B. Google in den organischen Suchresultaten im Internet ganz nach vorne kommt.
                                    </p>
                                    </FramerMotionAnimation>
                                <FramerMotionAnimation
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    className="mb-80 md:mb-0"
                                >
                                    <h4 className="content-title">
                                        <a href="https://de.wikipedia.org/wiki/Strategie_(Wirtschaft)" title="Strategie" target="__blank">Strategie</a>
                                    </h4>
                                   
                                    <p className="desc-md mt-15">
                                    Eine Strategie bildet die Eckpfeiler zur Zielerreichung eines gewünschten Zustands in der Zukunft. Die Strategie im Bereich {'"search engine optimization"'} ordnet sich der Unternehmensstrategie unter.
                                    </p>
                                </FramerMotionAnimation>
                            </div>

                            <FramerMotionAnimation
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="mb-20 md:mb-12">
                                <p className="desc-md mt-15">
                                   Somit befasst sich die Strategie in der 
                                   SEO-Optimierung damit, eine Vorgehensweise 
                                   zu planen sowie die Ziele und Prioritäten (z.B. Keywords) 
                                   zu setzen. Ausserdem dient es zur Orientierung während des 
                                   Optimierungsprozesses, ob man auf Kurs ist oder ob man die 
                                   falsche Vorgehensweise gewählt hat. Mit der richtigen Methode 
                                   kann ein Unternehmen echte Wettbewertsvorteile erreichen.

                                </p>
                                
                            </FramerMotionAnimation>

                            <br />
                            <div id="bedeutung" className="title-wrapper">
                            <FramerMotionAnimation
                                type="h2" className="title text-center">
                                Wozu braucht es eine Strategie?

                            </FramerMotionAnimation>
                        </div>

                            <FramerMotionAnimation
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="mb-24">
                                <p className="desc-md-2 mb-50 md:mb-15 primary">
                                    Im vorherigen Abschnitt sind wir schon ansatzweise darauf 
                                    eingegangen. Neben der grundsätzlichen Wegweisung während 
                                    eines Projekts oder der Optimierung hat die Strategie auch den 
                                    Sinn, die wichtigsten Wachstumshebel für ein Projekt zu 
                                    identifizieren. Mit welchen Themen kann ein Grossteil der potentiellen 
                                    Kunden auf dem Weg zum Verkauf Ihrer Produkte oder Abschluss Ihrer 
                                    Dienstleistung erreicht werden. Diese Methode nennt sich 
                                    {'"Themencluster"'} oder englisch {'"topic cluster"'}, eine sehr moderne und trendige Entwicklung. 
                                </p>
                                <p className="desc-md-2 mb-50 md:mb-15 primary">
                                    Dabei werden Online-Vermarkter dazu gezwungen, 
                                    sich daran anzupassen, was ein User zu einem Thema möglichst komprimiert 
                                    (in einem Beitrag) sehen will. Und verbannt viele {'"alte"'} SEO-Taktiken 
                                    (z.B. Keyword stuffing, für jede Keyword-Kombination eine Landingpage) 
                                    aus dem Suchmaschinen-Universum, was schon lange Zeit war. In der 
                                    Strategie spielt der Weg bis zum Verkaufsabschluss ebenfalls eine 
                                    grosse Rolle, deshalb kommen aus diesem Grund einige klassische 
                                    Marketingkonzepte wie das AIDA-Modell zum Zuge.
                                </p>
                                <p className="desc-md-2 primary">
                                  Kombiniert man beispielsweise die 
                                  Themencluster mit der Phase, 
                                  indem sich ein Käufer befindet, 
                                  entsteht ein sehr effektives Instrument, 
                                  um moderne SEO-Optimierung zu betreiben. 
                                  Ein interessanter Beitrag zum Thema finden Sie 
                                  unter <a href="https://moz.com/blog/keyword-research-to-match-buyers-journey" 
                                  title="Evolving Keyword Research to Match Your Buyers Journey" target="__blank">
                                  Evolving Keyword Research to Match Your Buyers Journey.
                                  </a>
                                </p>

                                                        
                            </FramerMotionAnimation>

                            

                            
                        </div>
                    </div>
                </section>

                <ContentWithVideo id={post.videoID} title={post.videoTitle}
                                  videoUrl={post.videoURL} thumbnail={post.videoThumbnail}
                                  description={post.videoDescription} description2={post.videoDescription2}
                                  list={post.videoList} imageAlt={post.videoThumbnailDesc} />


                 <section id="bestandteile" className="analysis-factors container" style={{ paddingTop: 0}} >
                    <div className="title-wrapper">
                            <FramerMotionAnimation
                                type="h2" className="title text-center">
                               Die 10 wichtigsten Bestandteile der Strategie
                            </FramerMotionAnimation>
                        </div>
                
                    <div className="main-wrapper md:flex">
                       

                        <div className="content-wrapper">
                            <div className="list-wrapper">
                                { arguItems?.map((item, index) => (
                                    <FramerMotionAnimation
                                        initial={{ opacity: 0, x: 50 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.25, delay: index * 0.1 }}
                                        className="item" key={index}>
                                        <Image src={taskAction} alt="check icon" className="check-icon" />
                                        { item.data }
                                    </FramerMotionAnimation>
                                ))}
                            </div>                           
                        </div>
                    </div>
                </section>

                 <section id="schluesse" className="section-wrapper" style={{ paddingBottom: 0}}>
                    <div className="container">
                        <div className="title-wrapper">
                            <FramerMotionAnimation
                                type="h3" className="title text-center">
                                Die richtigen Schlüsse ziehen

                            </FramerMotionAnimation>
                            <Image src={doubleArrowIcon} alt="arrows" className="ml-auto double-arrow-art" />
                        </div>

                        <FramerMotionAnimation
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                        >
                            <p className="desc-sm mb-15">
                                Bei der Strategie geht es um die Beantwortung 
                                vieler wichtiger Fragen, die dem SEO-Manager einen 
                                Eindruck vermitteln, in welche Richtung es mit dem Projekt gehen soll. 
                                Werden die richtigen Schlüsse gezogen, kann man erfolgreich und schnell organischen Traffic aufbauen. 

                            </p>
                            <p className="desc-sm mb-15 md:mb-15">
                               Werden die falschen Schlüsse gezogen, 
                               können die Resultate sehr lange auf sich warten lassen. 
                               Gar ohne eine Strategie oder ein SEO-Konzept starten zu wollen, empfehlen wir auf keinen Fall. 
                            </p>
                        
                            <p className="desc-sm mb-15">
                                Mindestens die noch folgenden Fragen sollten 
                                Sie sich in Ihrem Projekt stellen. Aus der Strategie wird 
                                zudem im Verlauf der Umsetzungsphase eine Art 
                                Cockpit für die SEO-Massnahmen, die dort laufend gemessen und neu ausgerichtet werden.

                            </p>
                            

                            
                        </FramerMotionAnimation>
                        
                    </div>
                </section>

                <section id={listId} className="analysis-factors container" style={{ paddingTop: 0}} >
                    
                    <FramerMotionAnimation type="p" className="description mb-50">
                                
                                Hier einige Fragen, zu deren Antwort man bei der Entwicklung der Strategie gelangt:


                        
                            </FramerMotionAnimation>
                    <div className="main-wrapper md:flex">
                        
                        <div className="content-wrapper">
                            <div className="list-wrapper">
                                { listItems?.map((item, index) => (
                                    <FramerMotionAnimation
                                        initial={{ opacity: 0, x: 50 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.25, delay: index * 0.1 }}
                                        className="item" key={index}>
                                        <Image src={checkCircleOrange} alt="check icon" className="check-icon" />
                                        { item.data }
                                    </FramerMotionAnimation>
                                ))}
                            </div>
                            
                           
                        </div>
                    </div>
                </section>

                <section id={listsecId} className="analysis-factors container" style={{ paddingTop: 0}} >
                    

                    <div className="title-wrapper">
                            <FramerMotionAnimation
                                type="h4" className="title text-center">
                                Sollten Sie die Strategie selber erarbeiten?

                            </FramerMotionAnimation>
                            <Image src={doubleArrowIcon} alt="arrows" className="ml-auto double-arrow-art" />
                        </div>

                   

                            <FramerMotionAnimation type="p" className="description mb-15">
                                
                                Bevor wir zu den konkreten Vorlagen und Beispielen kommen, möchten wir an dieser Stelle noch eine wichtige Anmerkung platzieren. Die SEO-Strategie ist massgeblich davon abhängig von der Person, die mit der Ausarbeitung beauftragt wird. Fragen Sie sich folgendes, wenn Sie kurz davor sind, die Strategie selbst auszuarbeiten:




                        
                            </FramerMotionAnimation>
                    <div className="main-wrapper md:flex">
                        
                        <div className="content-wrapper">
                            <div className="list-wrapper">
                                { listsecItems?.map((item, index) => (
                                    <FramerMotionAnimation
                                        initial={{ opacity: 0, x: 50 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.25, delay: index * 0.1 }}
                                        className="item" key={index}>
                                        <Image src={checkCircleOrange} alt="check icon" className="check-icon" />
                                        { item.data }
                                    </FramerMotionAnimation>
                                ))}
                            </div>
                            
                           
                        </div>
                    </div>
                     <FramerMotionAnimation type="p" className="description mb-15">
                                
                                Aus Erfahrung aus vielen Kundenprojekten wissen wir, was für ein enormer Zeitaufwand eine wirklich erfolgreiche Strategie mit fachmännischer Umsetzung bedeutet. Sollten Sie kein Fachspezialist sein, seien Sie wirklich ehrlich zu sich selbst. Setzen Sie in diesem Fall vielmehr auf einen Experten, sei das aus unserem Team oder ein Branchenkollege. Auch wenn ein Investment von Ihnen notwendig sein wird, die Resultate werden deutlich besser sein und es gibt kaum nachhaltiger investiertes Geld als das in SEO und Content Marketing.



                        
                            </FramerMotionAnimation>
                </section>
                 <section id="vorlage" className="section-wrapper bg-gray">
                    <div className="container">
                        <div className="title-wrapper">
                            <FramerMotionAnimation
                                type="h3" className="title text-center">
                               Eine Vorlage zum Download

                            </FramerMotionAnimation>
                            <Image src={doubleArrowIcon} alt="arrows" className="ml-auto double-arrow-art" />
                        </div>
                        <div className="content-wrapper content-grid-wrapper grid md:grid-cols-2">
                            <FramerMotionAnimation
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="image-wrapper p-0 bg-gray">
                                <Image width={350} height={250} src={vorlageImage} alt="Vorlage SEO Strategie" />

                                <a href="https://docs.google.com/document/d/1JIX2P8XDIadLlnomrjMEzUSedbPsgP2J/copy">
                                    <button className="cta-btn text-white bg-primary">
                                        
                                        Download

                                        <Image src={upRightArrow} alt={'up right arrow'} className="arrow-icon" />
                                    </button></a>
                            </FramerMotionAnimation>
                            <FramerMotionAnimation
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                            >
                                <p className="desc-sm mb-15">Gerne stellen wir Ihnen nachfolgend ein Template zur Verfügung, mit dem Sie sich selbst eine rudimentäre Taktik zusammenstellen können. Es handelt sich um eine Kurzfassung der Strategie, wie es bei uns in der Agentur verwendet wird. 
                                </p>
                                <p className="desc-sm mb-0"> 
                                Bitte beachten Sie dabei, dass die Erarbeitung der 
                                Ergebnisse in diesem Dokument von verschiedenen Tools 
                                (interne und öffentliche SEO-Tools) abhängig sind. 
                                Eine umfassende Strategie, wie sie in der monatlichen Betreuung 
                                bei Kunden eingesetzt wird, kann bis zu 50 und mehr Seiten umfassen. 
                                Wir laden Sie dazu ein, folgenden Download zu tätigen und sich ein Bild 
                                davon zu machen, wie das bei Ihnen aussehen könnte. Für Selbstumsetzer 
                                kann dieses Dokument vielleicht einige Hinweise darauf geben, wie man ein 
                                umfassendes Dokument ausarbeiten könnte.
                                

                                </p>
                            </FramerMotionAnimation>
                        </div>
                       
                    </div>
                </section>
                 

                

                <section id="abgrenzung" className="section-wrapper keywords">
                    <div className="container">
                <FramerMotionAnimation
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                 className="bg-white mb-20 md:mb-0">

                                 <FramerMotionAnimation
                                type="h2" className="title text-center">
                                Abgrenzung zur SEO-Analyse & Keyword-Strategie

                            </FramerMotionAnimation>
                            <br />

                                <p className="desc-md">
                                Fragen Sie sich vielleicht, decke ich das nicht mit der <Link href="/seo/seo-analyse" title="SEO-Analyse">SEO-Analyse</Link> bereits ab. 
                                Die SEO Analyse ist Teil der Strategie und ist bei der Ausarbeitung 
                                sowie in Form einer Nachbearbeitung darin involviert. Mit der Analyse 
                                liefern Sie Daten über den aktuellen Stand einer Webseite oder eines Projekts. 
                                Ein wesentlicher Unterschied zur Strategie ist die Zieldefinition und die Umsetzung, 
                                die in der Analyse noch nicht zur Sprache kommen. In der Strategie kommen Informationen 
                                zu tragen, die nicht faktenbasiert sind, währendem sich die Analyse in der Regel auf eine 
                                gründliche Überprüfung der technischen Ausgangslage (Onpage-SEO), den Backlinks und die 
                                Keywords beschränkt. Die Keyword-Recherche bzw. Analyse ist genauso notwendig, damit eine 
                                SEO-Strategie formuliert werden kann. Es ist aber wiederum nicht das Gleiche. Wenn Sie noch 
                                am Erlernen der Fachbegriffe sind, lesen Sie unbedingt unseren Beitrag <Link href="/seo/was-ist-seo" title="Was ist SEO">Was ist SEO</Link>.


                                </p>
                            </FramerMotionAnimation>


                             <FramerMotionAnimation
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                 className="bg-white mb-20 md:mb-0">
                                <h3 className="content-title">
                                    Fazit / Weiterführende Links



                                </h3>
                                <p className="desc-md">
                                Wir hoffen unser Beitrag hat Sie einige Schritte näher an die eigene Strategie gebracht. Sie sollten einige neue Informationen für eine erfolgreiche Online-Marketing-Strategie erhalten haben bzw. um das Ranking bei Suchmaschinen nachhaltig zu steigern. Somit steht einem Projektplan für Ihr Vorhaben nichts mehr im Wege. Verwenden Sie das erarbeitete Dokument auch als Cockpit für Ihre Website. Wie sich die Rankings Ihres Domains sich entwickeln, sagt einiges über die Qualität der erarbeiteten Strategie aus. Sollten Sie zu diesem Thema Hilfe benötigen oder jemanden, der für Sie eine Strategie zusammenstellt, zögern Sie nicht uns zu kontaktieren.




                                </p>
                            </FramerMotionAnimation>
                      </div>
                    </section>

                    <MoreInterestingPostsStrategie sectionid={'links'} />

                <Comments slug={'seo-strategie'} />



            </main>
        </>
    )
}



const post =  {
                slug: 'seo-strategie',
                shortTitle: 'SEO-Strategie entwickeln',
                title: 'Eine SEO-Strategie entwickeln',
                description: 'Die 10 Bausteine einer SEO-Strategie. Wie Sie Ihre Webseite anhand eines ✅Projektplans strategisch optimieren können.',
                image: seoStrategieImage,
                imageAlt: 'Eine SEO-Strategie entwickeln',
                readMoreUrl: '/seo/seo-strategie',
                date: '15.09.2021',
                update: '15.09.2021',
                readingTime: '7min Lesedauer',
                cta: 'SEO-Strategie',
                author: 'Sandro Huber',
                authorImage: sandro,
                category: 'Ratgeber',
                categoryUrl: '/blog',
                contentList: [

                    {
                        item: 'Was ist eine SEO-Strategie? (Definition)',
                        link: '#definition'
                    },
                    {
                        item: 'Wozu braucht es eine Strategie? (Bedeutung)',
                        link: '#bedeutung'
                    },
                    {
                        item: 'Wie setzt sich eine Strategie zusammen? (10 Bestandteile)',
                        link: '#bestandteile'
                    },
                    {
                        item: 'Die richtigen Schlüsse ziehen (mit Beispielfragen)',
                        link: '#schluesse'
                    },
                   
                    {
                        item: 'Eine Vorlage zum Downloaden (Google Sheets)',
                        link: '#vorlage'
                    },
                    {
                        item: 'Keyword- und SEO-Analyse oder Strategie? (Abgrenzung)',
                        link: '#abgrenzung'
                    },
                    {
                        item: 'Weiterführende Links',
                        link: '#links'
                    }
                    
                  
                
                ],
                introTitle: 'Was ist eine SEO-Strategie? (Definition)',
                introDescription: 'Der Begriff setzt sich aus SEO und Strategie zusammen:',
                videoID: 'seodauervideo',
                videoTitle: 'Ein interessantes Video zum Thema Topic Cluster',
                videoURL: 'https://www.youtube.com/embed/FAZT9Bnma9Q',
                videoDescription: 'Die Customer Journey (Kundenreise) oder auch Buyers Journey genannt definiert die einzelnen Phasen, die ein Kunde durchläuft, bevor er sich für ein Produkt oder eine Dienstleistung entscheidet.',
                videoThumbnail: seoBuyersJourneyImage,
                videoThumbnailDesc: 'SEO Kosten',
            };


const arguItems = [

                    {
                        data: 'Projekt-/Kundenziele eruieren'
                    },
                    {
                        data: 'Zielgruppe bestimmen'
                    },
                    {
                        data: 'Konkurrenzanalyse'
                    },
                    {data: 'Keyword-Recherche durchführen'},

                    {data: 'Keyword-Map erstellen'},

                    {data: 'Webseitenstruktur ggf. ändern / aufsetzen'},

                    {data: 'Technischer Onpage Audit (Crawlbarkeit, Zertifikate, Interne Verlinkung, Performance, Mobile-Pagespeed, usw.)'},

                    {data: 'Backlink-Analyse / Linkbuilding-Strategie (Offpage)'},
                    
                    {data: 'Content Planung / Content-Strategie (Content Marketing)'},
                    
                    {data: 'Umsetzung (Massnahmenplanung) mit anschliessender KPI Messung (Reporting)'},

                ];

const listId = "schluesse2"
const listItems = [

                    {
                        data: ' Welches Ziel verfolgt die Strategie?'
                    },
                    {
                        data: 'Wer ist der primäre Kunde und wo online bewegt dieser sich?'
                    },
                    {
                        data: 'In welchem Bereich besteht bei unserem Projekt das grösste Potential (z.B. Nutzerverhalten oder Links)?'
                    },
                    {data: 'Wie sollte die URL-Struktur künftig aussehen?'},
                        
                    {data: 'Welche Keywords oder Themen werden zuerst bearbeitet und von wem?'},

                    {data: 'Benötigen wir eine Linkaufbau-Strategie?'},

                ];


const listsecId = "schluesse2"
const listsecItems = [

                    {
                        data: 'Habe ich strategische Fähigkeiten?'
                    },
                    {
                        data: 'Habe ich ein erweitertes SEO-Fachwissen?'
                    },
                    {
                        data: 'Sind mir die oben im Beitrag erwähnten Begriffe bekannt?'
                    },
                    {data: 'Habe ich die zeitlichen Ressourcen mich intensiv damit zu befassen?'},
                        
                    {data: 'Kenne ich mich in allen SEO-Bereichen sehr gut aus?'},

                ];


