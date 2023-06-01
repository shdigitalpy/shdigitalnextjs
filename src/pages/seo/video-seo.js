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
import iframeImage from '../../assets/images/seo/iframe.webp'
import SiteAnalysis from '../../components/sections/SiteAnalysis';
import TextBlock from '../../components/sections/TextBlock';
import ContentWithVideo from '../../components/sections/ContentWithVideo2';
import videoImage from '../../assets/images/seo/video-thumbnail-aktuell.jpg'
import listIcon from '../../assets/icons/layers.svg';
import CardGridAll from '../../components/sections/CardGridAll';
import youtuberesearchImage from '../../assets/images/seo/keyword-search-youtube-seo.webp';
import FAQ from "../../components/sections/FAQVideo";

import fiveTippsData from '../../data/fiveTippsData';
import faqSeoSectionDataWIS from '../../data/faqVideoData';


const inter = Inter({subsets: ['latin']})

export default function videoSEO() {
    

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

                <section id="arten" className="section-wrapper" >
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

                <section id="einbinden" className="section-wrapper" >
                    <div className="container">
                        <div className="grid md:grid-cols-2 title-wrapper">
                            <FramerMotionAnimation
                                type="h2" className="title">
                                <div>Wie sollten Videos</div>
                                <div>auf der Webseite eingebunden werden?</div>
                            </FramerMotionAnimation>
                            <Image src={doubleArrowIcon} alt="arrows" className="ml-auto double-arrow-art" />
                        </div>
                        <div className="content-wrapper content-grid-wrapper grid md:grid-cols-2">
                            
                            
                            <FramerMotionAnimation
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="image-wrapper">
                                <Image src={iframeImage} alt="iframe" className="main-image" />
                            </FramerMotionAnimation>

                            <FramerMotionAnimation
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }} >
                               <p className="desc-sm mb-15">                     
                                Zum Einbetten der Videos auf der Webseite kommt es auf das Content-Management-System an, welches verwendet wird. In den meisten Fällen erfolgt das 
                                Einbinden der Videos auf den Webseiten mithilfe von <b>"iframes"</b>.
                                </p>

                                <p className="desc-sm mb-15">Videos sollten über späteres Nachladen (engl. lazy load) implementiert werden, sofern sich das Video nach dem Laden der Webseite nicht im sichtbaren Bereich für den Nutzer befindet.
                                </p>
                                    


                                    
                            </FramerMotionAnimation>
                            
                        </div>
                       
                    </div>
                </section>

                <section id="verhindern" className="section-wrapper" style={{ paddingBottom: 0}}>
                    <div className="container">
                        <div className="title-wrapper">
                            <FramerMotionAnimation
                                type="h2" className="title text-center">
                                Sollte man verhindern

                            </FramerMotionAnimation>
                            <Image src={doubleArrowIcon} alt="arrows" className="ml-auto double-arrow-art" />
                        </div>

                        <FramerMotionAnimation
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                            >
                                <ListItems items={seoFehlerListItems} />
                            </FramerMotionAnimation>

                            <br /><br />
                            <FramerMotionAnimation
                                type="h3" className="title text-center">
                                Tipps beim Einbinden


                            </FramerMotionAnimation>
                            <br />

                             <FramerMotionAnimation
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                            ><p className="desc-sm mb-15">
                                        Anpassung direkt im Webseitencode, Verwendung von lazy-load
                                        </p>
                        </FramerMotionAnimation>

                        <FramerMotionAnimation
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                            ><p className="desc-sm mb-15">
                                        Bei WordPress verwenden eines <a href="https://kinsta.com/de/blog/wordpress-lazy-load/#:~:text=Um%20deiner%20Webseite%20das%20native,um%20diesen%20Prozess%20zu%20erleichtern." title="Plugins" target="__blank">Plugins</a> zur Implementierung von Videos
                                        </p>
                        </FramerMotionAnimation>

                        <FramerMotionAnimation
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                            ><p className="desc-sm mb-15">
                                        100% Ladezeit optimiert, wenn Sie das Video erst durch Klicken des Users laden
                                        </p>
                        </FramerMotionAnimation>


                        <br /><br />
                        <FramerMotionAnimation
                                type="h3" className="title text-center">
                                Vorteile externe Plattform
                            </FramerMotionAnimation>
                            <br />
                        <FramerMotionAnimation
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                            >
                                <ListItems items={advantagesListItems} />
                            </FramerMotionAnimation>

                            <br /><br />
                        <FramerMotionAnimation
                                type="h3" className="title text-center">
                                Nachteile externe Plattform
                            </FramerMotionAnimation>
                            <br />
                        <FramerMotionAnimation
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                            >
                                <ListItems items={disadvantagesListItems} />
                            </FramerMotionAnimation>

                            <br /><br />
                        
                    </div>
                </section>

                <TextBlock data={post} />

                 <SiteAnalysis data={post} />

                   <section id="wichtig" className="section-wrapper" style={{ paddingBottom: 0}}>
                    <div className="container">
                       

                       

                           

                             <FramerMotionAnimation
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                            ><p className="desc-sm mb-15">
                                       Zu den wichtigen Meta-Angaben zwecks Optimierung des Videos gehört auf jeden Fall der Video-Titel, der Informationen über den Inhalt liefert.


                                        </p>
                        </FramerMotionAnimation>

                        <FramerMotionAnimation
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                            ><p className="desc-sm mb-15">
                                       Die Video-Beschreibung präzisiert den Inhalt und sollte für die detaillierte Darlegung des Inhalts und allenfalls für die Hervorhebung von wichtigen Punkten im Video dienen.


                                        </p>
                        </FramerMotionAnimation>
                        <br /><br />
                         <FramerMotionAnimation
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                            >
                                <ListItems items={markupListItems} />
                            </FramerMotionAnimation>
                            <br /><br />


                        <FramerMotionAnimation
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                            ><p className="desc-sm mb-15">
                                       Deshalb müssen immer Textelemente mit eingebunden sein. Darüber hinaus gelingt das Vorhaben nur, wenn die technischen Voraussetzungen stimmen. Inzwischen überwiegt die mobile Nutzung des Internets. Immer mehr Menschen surfen mit dem Smartphone, was auch das SEO-Marketing verändert.


                                        </p>
                        </FramerMotionAnimation>

                        <br /><br />
                         <FramerMotionAnimation
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                            >
                                <ListItems items={textListItems} />
                            </FramerMotionAnimation>
                            <br /><br />

                            <FramerMotionAnimation
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                            ><p className="desc-sm mb-15">
                                        Manchmal ist auch eine Video-Sitemap empfehlenswert. Dabei handelt es sich um eine XML-Datei mit wichtigen Zusatzinformationen beziehungsweise Metadaten zum Video. Zu den Informationen gehören der Titel, die Beschreibung, die Quelle und die Länge.


                                        </p>
                        </FramerMotionAnimation>
                        <br />
                        <FramerMotionAnimation
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                            ><p className="desc-sm mb-15">
                                        Der Google Bot erkennt die Videoinhalte in der Sitemap schneller. Man benötigt eine solche Sitemap, wenn die Videos auf dem eigenen Server gehostet werden. Die Übermittlung der Video-URLs erfolgt dann in der Sitemap an Bing oder Google.


                                        </p>
                        </FramerMotionAnimation>

                        
                       
                        
                    </div>
                </section>

                 <section id="vorteile" className="section-wrapper" style={{ paddingBottom: 0}}>
                    <div className="container">
                       

                        <div className="title-wrapper">
                            <FramerMotionAnimation
                                type="h2" className="title text-center">
                                Die Vorteile von Video-SEO


                            </FramerMotionAnimation>
                            <Image src={doubleArrowIcon} alt="arrows" className="ml-auto double-arrow-art" />
                        </div>

                           

                             <FramerMotionAnimation
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                            ><p className="desc-sm mb-15">
                                       Die Vorteile des Website-Rankings liegen klar auf der Hand. Eine Webseite, die über die Suchmaschinen besser gefunden wird, erhält eine deutlich höhere Resonanz und ist infolgedessen erfolgreicher als die Konkurrenz.


                                        </p>
                        </FramerMotionAnimation>

                        <FramerMotionAnimation
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                            ><p className="desc-sm mb-15">
                                       Das gelingt durch auf den Nutzer abgestimmte Inhalte für die Keywords eines Business von Unternehmen. Eine gute SEO-Strategie bringt die eigene Internetpräsenz auf die vorderen Plätze.



                                        </p>
                        </FramerMotionAnimation>

                        <FramerMotionAnimation
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                            ><p className="desc-sm mb-15">
                                       Beim Video ist das ähnlich. Die Optimierung spielt für die gesamte Marketingstrategie eine bedeutende Rolle.:




                                        </p>
                        </FramerMotionAnimation>
                        <br /><br />
                         <FramerMotionAnimation
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                            >
                                <ListItems items={vorteileListItems} />
                            </FramerMotionAnimation>
                            <br /><br />


                                              
                       
                        
                    </div>
                </section>


                <section id="unterschiede" className="section-wrapper" style={{ paddingBottom: 0}}>
                    <div className="container">
                       

                        <div className="title-wrapper">
                            <FramerMotionAnimation
                                type="h2" className="title text-center">
                                Unterschiede beim Ranking zwischen Google und YouTube



                            </FramerMotionAnimation>
                            <Image src={doubleArrowIcon} alt="arrows" className="ml-auto double-arrow-art" />
                        </div>

                           

                             <FramerMotionAnimation
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                            ><p className="desc-sm mb-15">
                                       Die beiden Plattformen Google-Suchmaschine und der YouTube-Videodienst unterscheiden sich anhand der Rankingfaktoren teils deutlich voneinander:



                                        </p>
                        </FramerMotionAnimation>

                       
                        <br /><br />
                         <FramerMotionAnimation
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                            >
                                <ListItems items={unterschiedListItems} />
                            </FramerMotionAnimation>
                            <br /><br />


                                              
                       
                        
                    </div>
                </section>


                <ContentWithVideo id={post.videoID} title={post.videoTitle} className="bg-gray"
                                  videoUrl={post.videoURL} thumbnail={post.videoThumbnail}
                                  description={post.videoDescription} description2={post.videoDescription2}
                                  list={post.videoList}
                                  />

                <CardGridAll data={fiveTippsData} />


                <section id="image" className="section-wrapper" >
                    <div className="container">
                      
                            <FramerMotionAnimation
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="image-wrapper">
                                <Image src={youtuberesearchImage} alt="Youtube keyword research" className="main-image" />
                            </FramerMotionAnimation>

                            <br />
                             <br />

                            </div>
                </section>

                <section id="video-content" className="section-wrapper">
                    <div className="container">
                        <div className="title-wrapper">
                            <FramerMotionAnimation
                                type="h2" className="title text-center">
                                Es gibt vielfältige Gelegenheiten Video-Content zu publizieren

                            </FramerMotionAnimation>
                            
                        </div>

                       
                        <div className="content-wrapper content-grid-wrapper grid md:grid-cols-2">
                            <FramerMotionAnimation
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                            >
                               
                                <p className="desc-sm mb-15">
                                    Tipp: Erstelle aus Videos mit dem gleichen Thema eine Playlist auf YouTube.

                                </p>
                                
                            </FramerMotionAnimation>
                            <FramerMotionAnimation
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                            >
                                <ListItems items={videoContentListItems} />
                            </FramerMotionAnimation>
                        </div>
                    </div>
                </section>


                <FAQ link={'werbung'} data={faqSeoSectionDataWIS} />

                <section id="fazit" className="section-wrapper" >
                    <div className="container">
                        <div className="grid md:grid-cols-2 title-wrapper">
                            <FramerMotionAnimation
                                type="h2" className="title">
                                <div>Fazit</div>
                                
                            </FramerMotionAnimation>
                            <Image src={doubleArrowIcon} alt="arrows" className="ml-auto double-arrow-art" />
                        </div>
                        <div className="content-wrapper">
                            
                            <FramerMotionAnimation
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }} >
                                <p className="desc-sm mb-15">Ob man möchte oder nicht, der Video-Markt wird im 2022 nochmals deutlich zulegen. Zugleich führt auch im Bereich Suchmaschinenoptimierung kein Weg an Videos vorbei.</p>

                    <p className="desc-sm mb-15">Mit der richtigen Vorgehensweise und dem nun erlangten Wissen können Sie sowohl Video- sowie YouTube-SEO meistern. Wollen Sie professionelle Optimierung für Ihr Unternehmen erreichen, so können Sie uns auch als Ihre <a href="{% url 'seo' %}" title="SEO Agentur">SEO-Agentur</a> für Videos buchen. </p>

                    <p className="desc-sm mb-15">Wir befassen uns seit Jahren damit, wie man Videos ganz oben in allen Suchmaschinen platziert. Und können Ihnen dabei helfen, mit Ihren Videos mehr Kunden zu erreichen. </p>

                    <p className="desc-sm mb-15">Falls Sie sich damit auseinandersetzen möchten, wie YouTube auch bei den Streaming-Diensten mitmischt, dann schauen Sie dieses <a href="https://www.youtube.com/watch?v=cgHNN0o50CA" title="YouTube Video zu Streaming" target="__blank">YouTube Video</a>.</p>

                    <p className="desc-sm mb-15">Gerne möchten wir von Ihnen hören, wie Sie zum Thema Videos stehen? </p>

                    <p className="desc-sm mb-15">Oder haben Sie einen SEO-Tipp, welcher im Beitrag nicht erwähnt wurde?</p>

                    <p className="desc-sm mb-15">Teilen Sie es mit uns!</p>



                                    
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
                        item: 'Welche Arten von Video-Optimierungen gibt es?',
                        link: '#arten'
                    },
                    {
                        item: 'Wie sollten Videos auf der Webseite eingebunden werden?',
                        link: '#einbinden'
                    },
                    {
                        item: 'Wichtige Informationen bei Videos',
                        link: '#umsetzung'
                    },
                    {
                        item: 'Die Vorteile von Video-SEO',
                        link: '#vorteile'
                    },
                   
                    {
                        item: 'Unterschiede beim Ranking zwischen Google und YouTube',
                        link: '#unterschiede'
                    },
                    {
                        item: 'Wie geht YouTube-SEO?',
                        link: '#youtubeseo'
                    },
                    {
                        item: 'Werbung mit YouTube-Videos',
                        link: '#werbung'
                    },
                    {
                        item: 'Fazit',
                        link: '#fazit'
                    }
                    
                  
                
                ],
                itemsCheckId: 'umsetzung',
                textblockTitle: 'Wichtige Informationen bei Videos',
                textBlock: 'Wie bereits erwähnt, orientiert sich der Algorithmus der Suchmaschinen ausschließlich am Text. Aus diesem Grund spielen die Metadaten für SEO-Video-Marketing eine wichtige Rolle. Suchmaschinen wie Google ziehen anhand dieser Informationen Rückschlüsse auf den Inhalt des Videos.',
                itemsLeftSubtitle1: 'Metadaten',
                itemsLeft: [

                    {
                        data: 'Video-Titel',
                    },
                    {
                        data: 'Video-Beschreibung',
                    },
                    {
                        data: 'Markups',
                    },
                    {
                        data: 'Video Format',
                    },
                    {
                        data: 'Video Sitemap',
                    }
                   


                   ],

                videoID: 'youtubeseo',
                videoTitle: 'Wie geht YouTube-SEO?',
                videoURL: 'https://www.youtube.com/embed/LVGHIZKuwMQ',
                videoDescription: 'Wie bei traditionellen Suchmaschinen arbeitet auch YouTube mit einem Algorithmus, der schlechte und gute Videos in einem Rankingsystem nacheinander auflistet.\n\n4 Rankingfaktoren bei YouTube:',
                videoDescription2: '',
                videoThumbnail: videoImage,
                videoList : [
                    {
                    icon: listIcon,
                    text: 'Wiedergabezeit',
                },
                {
                    icon: listIcon,
                    text: ' Autorität des Kanals',
                },
                {
                    icon: listIcon,
                    text: 'Positive Interaktion der Nutzer',
                },
                {
                    icon: listIcon,
                    text: 'Titel, Beschreibung, usw.',
                },

                ]

               
               
            };



const videoContentListItems = [

{
        icon: checkCircleIcon,
        text: 'Video-Platform wie z.B. Youtube',
    },
    {
        icon: checkCircleIcon,
        text: 'Forum & Wissensplatformen',
    },
    {
        icon: checkCircleIcon,
        text: 'Social-Media-Pages: Facebook, LinkedIn, usw.',
    },
    {
        icon: checkCircleIcon,
        text: 'Paid-Ads: Google Ads, Facebook Werbeanzeigen, usw.',
    },
    {
        icon: checkCircleIcon,
        text: 'Webseite: Blog, Produktseite, usw.',
    },
    {
        icon: checkCircleIcon,
        text: 'Local-SEO Dienste: z.B. Google My Business',
    },
    {
        icon: checkCircleIcon,
        text: 'E-Mail Signatur',
    },
     {
        icon: checkCircleIcon,
        text: 'E-Mail Newsletter',
    },

    ]




const disadvantagesListItems = [

    {
        icon: checkMinusIcon,
        text: 'Allerdings kann es passieren, dass sich die Besucher der Webpräsenz mit unerwünschten Werbeanzeigen konfrontiert sehen, auf die der Betreiber der Homepage keinen Einfluss hat',
    },
 

    ]


const seoFehlerListItems = [

{
        icon: checkMinusIcon,
        text: 'Generell ist davon abzuraten, das Video auf dem eigenen Server hochzuladen. Dadurch geht wichtiger Speicherplatz verloren. Infolgedessen verlangsamt sich die Ladezeit und es kommt unter Umständen auf der gesamten Webseite zu Ausfällen und Verzögerungen.',
    },
    {
        icon: checkMinusIcon,
        text: 'Lange Ladezeiten wirken sich negativ auf die SEO aus. Eine Video-Host-Plattform bietet klare Vorteile. So gelingt die Integration mithilfe des Einbettungs-Codes sehr schnell. Eine unnötige Belegung eigenen Speicherplatzes entfällt und infolgedessen verlangsamt sich auch nicht die Geschwindigkeit der Webseite.',
    },
 
   
    

    ]


const advantagesListItems = [

{
        icon: checkCircleIcon,
        text: 'Durch die plattformeigene Suche erhöht sich die Reichweite. Das Video findet sowohl auf der eigenen Webseite als auch auf der Video-Plattform Beachtung',
    },
    {
        icon: checkCircleIcon,
        text: 'Durch die plattformeigene Suche erhöht sich die Reichweite und steigert die Akzeptanz bei Nutzern',
    },
    {
        icon: checkCircleIcon,
        text: 'Beim Einbinden lassen sich zudem Untertitel problemlos integrieren und die Chancen auf eine hohe Platzierung auf der Suchergebnisliste steigen',
    },

    ]



const markupListItems = [

{
        icon: checkCircleIcon,
        text: 'Markups sind dazu da, zusätzliche HTML-Elemente für Google & Co. strukturiert zu markieren.',
    },
    {
        icon: checkCircleIcon,
        text: 'Wichtig ist zudem, die Informationen auch als Text einzupflegen. Die Suchmaschinen können die auf der Webseite befindlichen Videos nur anhand der Einbettung in einen Content identifizieren.',
    },

    ]



const textListItems = [

{
        icon: checkCircleIcon,
        text: 'Wichtig ist auch, dass die gängigen Browser das betreffende Video-Format auch wirklich darstellen können.',
    },
    {
        icon: checkCircleIcon,
        text: 'Es ist für die Nutzererfahrung sinnvoll, die für Webvideos übliche HD-Auflösung zu wählen.',
    },

    {
        icon: checkMinusIcon,
        text: 'Wer Videos präsentiert, verzichtet zum Beispiel besser auf Flash und ähnliche Techniken. Nur wenige mobile Endgeräte unterstützen dies noch.',
    },

    ]


const vorteileListItems = [

{
        icon: checkCircleIcon,
        text: 'So erhöht sich der Traffic der Webpräsenz durch die Links häufig geklickter und gut gelisteter YouTube-Clips. Die Videos erhöhen darüber hinaus die Sichtbarkeit in den sogenannten SERPs.',
    },
    {
        icon: checkCircleIcon,
        text: 'Zu bestimmten Themen werden Videos von Nutzern bei Suchmaschinen gefordert, der Einfluss auf das Ranking ist in diesem Fall positiv.',
    },

    {
        icon: checkCircleIcon,
        text: 'Durch die Integration von Videos erhöht sich die Verweildauer auf einer Webseite, wenn die Videos angeschaut werden. Eine höhere Verweildauer ist ein Signal für die Suchmaschine, dass es sich um guten Content handelt. Somit sollte die entsprechende Seite höher im Ranking aufsteigen.',
    },
    {
        icon: checkCircleIcon,
        text: 'Filmclips wirken auf viele User sehr anziehend, sodass sich diese von dem Video dazu animieren lassen, länger auf der Webseite zu bleiben. Möglichkeiten, Videos zu erstellen, gibt es mehr als genug. Es könnte sich zum Beispiel um ein Produktvideo, eine Firmenvorstellung oder eine Anleitung handeln.',
    },
    {
        icon: checkCircleIcon,
        text: 'Videos können außerdem den Anreiz bieten, auf eine Webseite zu verlinken. Eine natürliche Chance um Backlinks aufzubauen.',
    },
   
   
    

    ]

const unterschiedListItems = [

{
        icon: checkCircleIcon,
        text: 'Bei der Google-Suchmaschine spielt es eine Rolle, ob der Text-Inhalt die Suchanfrage bedient. Ob der Inhalt vollständig und aktuell ist und ob die Seite über die relevante (Backlink-)Autorität verfügt. Mehr Informationen zu den Rankingfaktoren gibt es in unserem Beitrag über SEO.',
    },
    {
        icon: checkCircleIcon,
        text: 'Bei YouTube geht es hingegen vor allem um Social Sharing, der Interaktion mit dem Nutzer, der Watch time und dem Vertrauen in den Kanal. Ausschlaggebend ist somit die Frequenz, in der der Kanal die Videos hochlädt, aber auch die Klicks und die Wiedergabezeit. Eine Rolle spielt auch, wie lange der Kanal bereits aktiv ist und die Anzahl der Abonnenten.',
    },

   
   
    

    ]