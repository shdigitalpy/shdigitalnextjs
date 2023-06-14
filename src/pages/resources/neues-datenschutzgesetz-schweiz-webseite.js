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
import DatenschutzImage from '../../assets/images/content/datenschutz.jpg';
import vorlageImage from '../../assets/images/seo/2021-Vorlage-SEO-Strategie-Kunde.jpg';
import upRightArrow from '../../assets/icons/up-right-arrow.svg';
import MoreInterestingPostsDatenschutz from "../../components/sections/MoreInterestingPostsDatenschutz";
import CardGridAll from '../../components/sections/CardGridAll';
import SiteAnalysis from '../../components/sections/SiteAnalysis';
import TextBlock from '../../components/sections/TextBlock';

import allinOneViewData from '../../data/allinOneViewData';

const inter = Inter({subsets: ['latin']})

const url = 'https://www.sh-digital.ch'
const category = 'resources'

export default function neuesDatenschutz() {
    

    return (
        <>
            <Head>
      
                <title>Neues Datenschutzgesetz Schweiz | SH Digital</title>
                <meta name="description" content="Neues Datenschutzgesetz: Eine Übersicht mit den wichtigsten Fakten für Webseitenbetreiber und Firmeninhaber."/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
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
                                    <Link target="__blank" href={`https://twitter.com/intent/tweet?url=${url}/${category}/${post.slug}&text=${post.title}`}>
                                        <Image src={twitterIcon} alt="twitter" className="social-icon" />
                                    </Link>
                                    <Link target="__blank" href={`https://www.facebook.com/sharer.php?u=${url}/${category}/${post.slug}`}>
                                        <Image src={facebookIcon} alt="facebook" className="social-icon" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </Banner>

                <div className="bg-gray">
                <br /><br /><br />
                </div>

                <WhatGoogleSays post={post} />

                <CardGridAll data={allinOneViewData} />

                <section id="worumgehts" className="section-wrapper keywords">
                    <div className="container">
                        <div className="title-wrapper">
                            <FramerMotionAnimation
                                type="h2" className="title text-center">
                                Worum gehts
                            </FramerMotionAnimation>
                        </div>
                        <FramerMotionAnimation
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            type="p" className="desc-md mb-15 md:mb-15">
                                Das neue Datenschutzgesetz in der Schweiz wird im Jahr 2023 in Kraft treten und trägt dem Schutz der Privatsphäre und Datensicherheit von Internetnutzern Rechnung. Es regelt, wie Unternehmen und Organisationen Daten sammeln, speichern und nutzen dürfen.


                        </FramerMotionAnimation>

                        <FramerMotionAnimation
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            type="p" className="desc-md mb-15 md:mb-15">
                            Ein weiterer Zweck des Gesetzes ist es, es an die sich ständig wandelnden Technologien und Gesellschaftspraktiken anzupassen, einschließlich Cloud Computing, Big Data, sozialer Netzwerke und dem Internet der Dinge.



                        </FramerMotionAnimation>
                    
                    </div>
                </section>

                <TextBlock data={post} />

                <SiteAnalysis data={post} />

                <section id="haftungsausschluss" className="section-wrapper" >
                    <div className="container">  
                        <FramerMotionAnimation
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="content-flag bg-gray">
                            <h4 className="content-title font-medium">
                                Haftungsausschluss
                            </h4>
                            <p className="desc-md">
                               Je nach Unternehmenstyp müssen Sie weitere wichtige Massnahmen umsetzen. Dieser kurze Überblick ersetzt nicht die detaillierte Abklärung mit einem Juristen. Dieser Beitrag dient als Denkanstoss für das Vorgehen in Ihrem Unternehmen.
                            </p>
                            <p className="desc-md">
                                Es ist wichtig zu beachten, dass wir keine Juristen sind und keine verbindlichen Rechtsberatungen anbieten können. Daher empfehlen wir Ihnen dringend, sich intensiv mit dem neuen Gesetz zu beschäftigen.

                            </p>
                            <p className="desc-md">
                                Sollten Sie Bedarf an Unterstützung oder Beratung bei der Durchführung der Google Analytics Migration oder bei der Wahl einer angemessenen Cookie-Zustimmungslösung haben, <Link href="/contact" title="Kontakt">stehen wir Ihnen gerne zur Verfügung</Link>.
                            </p>
                        </FramerMotionAnimation>
                  
                    </div>
                </section>

                <MoreInterestingPostsDatenschutz sectionid={'links'} />

                <Comments slug={'seo-strategie'} />



            </main>
        </>
    )
}



const post =  {
               
                slug: 'neues-datenschutzgesetz-schweiz-webseite',
                shortTitle: 'Neues Datenschutzgesetz in der Schweiz',
                title: 'Neues Datenschutzgesetz: Fakten für Webseitenbetreiber',
                description: 'Wir haben für Sie die wichtigsten Aspekte des neuen Datenschutzgesetzes (nDSG) für Webseitenbetreiber zusammengestellt.',
                image: DatenschutzImage,
                imageAlt: 'Neues Datenschutzgesetz: Fakten',
                date: '08.02.2023',
                update: '10.02.2023',
                readingTime: '3min Lesedauer',
                cta: 'Neues Datenschutzgesetz in der Schweiz',
                author: 'Sandro Huber',
                authorImage: sandro,
                category: 'Ressourcen',
                categoryUrl: '/resources',
                introTitle: 'Wichtig zu wissen',
                introDescription: 'Wir haben für Sie die wichtigsten Aspekte des neuen Datenschutzgesetzes (nDSG) für Webseitenbetreiber zusammengestellt. \n\nFalls es neuere Entwicklungen geben sollte, werden wir den Beitrag weiter anpassen. Wichtig, lesen Sie den Haftungsausschluss am Ende dieses Beitrags.',
                
                contentList: [

                    {
                        item: 'Auf einen Blick',
                        link: '#aufeinenblick'
                    },
                    {
                        item: 'Worum gehts',
                        link: '#worumgehts'
                    },
                    {
                        item: 'Webseitenbetreiber sollten sich mindestens',
                        link: '#webseitenbetreiber'
                    },
                    {
                        item: 'Haftungsausschluss',
                        link: '#haftungsausschluss'
                    },
                    {
                        item: 'Weiterlesen',
                        link: '#links'
                    }
                    
                    
                  
                
                ],
                itemsCheckId: 'webseitenbetreiber',
                textblockTitle: 'Webseitenbetreiber sollten sich mindestens',
                textBlock: 'Wenn es um Webseiten geht, müssen Unternehmen sicherstellen, dass sie ihre Besucher über die Verwendung ihrer Daten informieren und ihnen die Möglichkeit geben, dieser Verwendung zu widersprechen. Außerdem müssen sie sicherstellen, dass ihre Webseite technisch gesichert ist und dass sie keine unzulässigen Cookies verwenden. \n\nIn der folgenden Checkliste finden Sie einige Punkte, die Sie angehen sollten:',
                itemsLeftSubtitle1: 'Cookie Banner',
                itemsLeft: [

                    {
                        data: 'Einen Cookie Banner erstellen',
                    },
                    {
                        data: 'Alle Einstellungen müssen standardmässig abgewählt sein',
                    },
                    {
                        data: 'Bearbeitung der Daten auf ein Minimum beschränken',
                    },
                    {
                        data: 'Standardvorgehen darf Privatsphäre am wenigsten verletzen',
                    },
                    {
                        data: 'Falls Sie potentielle Kunden im Ausland bzw. in der EU ansprechen, stellen Sie sicher, dass Sie Ihre Cookie Consent Lösung für diese Besucher der Datenschutzgrundverordnung der EU anpassen',
                    }
                   ],
                itemsrightSubtitle: 'Datenschutzerklärung',
                itemsRight: [
                    {
                        data: 'Ergänzung bezüglich Datenbeschaffung',
                    },
                    {
                        data: 'Wer ist für die Website verantwortlich und wie kann der Kontakt erfolgen?',
                    },
                    {
                        data: 'Für welchen Zweck oder für welche Zwecke werden die Personendaten bearbeitet?',
                    },
                    {
                        data: 'Wer sind allfällige Empfänger:innen der bearbeiteten Personendaten?',
                    },
                    {
                        data: 'Wie wird ein allfälliger Daten-Export abgesichert?',
                    },
                    {
                        data: 'Welche Rechte haben die betroffenen Personen im Zusammenhang mit dem Datenschutz?',
                    },
                    {
                        data: 'Weitere generelle Anpassung an das neue Datenschutzgsetz',
                    },


                ],
                itemsrightSubtitle2: 'Impressum',
                itemsRight2: [
                    {
                        data: 'Ein vollständiges Impressum erstellen',
                    }


                ],
                itemsrightSubtitle3: 'Google Analytics',
                itemsRight3: [
                    {
                        data: 'Von Google Universal Analytics auf Google Analytics 4 umsteigen',
                    },
                    {
                        data: 'Die richtigen Einstellungen in Google Analytics 4 vornehmen',
                    }


                ],
                
                
            };




const arguItems = [

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


