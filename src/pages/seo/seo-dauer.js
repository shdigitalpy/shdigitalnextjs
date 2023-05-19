import Link from 'next/link';
import Head from 'next/head';
import {Inter} from 'next/font/google';
import {useEffect, useState} from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Banner from '../../components/common/Banner';
import BreadCrumb from '../../components/common/BreadCrumb';
import WhatGoogleSays from '../../components/sections/WhatGoogleSays';
import ContentWithVideo from '../../components/sections/ContentWithVideo2';
import FramerMotionAnimation from '../../components/common/FramerMotionAnimation';
import ListItems from '../../components/common/ListItems';
import CollapsibleList from "../../components/sections/CollapsibleList";
import FAQ from "../../components/sections/FAQSEO";
import thumbnail from '../../assets/images/dummy-thumbnail.png';
import seoImportance from '../../assets/images/seo/seo-importance.png';
import seoWork from '../../assets/images/seo/how-seo-work.png';
import keywords1 from '../../assets/images/seo/hose.jpg';
import keywords2 from '../../assets/images/seo/long-tail-keyword-analyse.jpg';
import keywords3 from '../../assets/images/seo/keyword-recherche-seo.jpg';
import holdingLaptop from '../../assets/images/holding-laptop-3.png';
import holdingLaptopVid from '../../assets/images/seo/seovideothumbnail.jpg'
import agencyImage from '../../assets/images/girl-avatar.png';
import twitterIcon from '../../assets/icons/twitter-white.svg';
import facebookIcon from '../../assets/icons/facebook-white.svg';
import checkCircleIcon from '../../assets/icons/check-circle-orange.svg';
import doubleArrowIcon from '../../assets/images/sharp-double-arrow-down.svg';
import peopleIcon from '../../assets/icons/people.svg';
import contentWritingIcon from '../../assets/icons/content-writing.svg';
import timerIcon from '../../assets/icons/timer.svg';
import linkIcon from '../../assets/icons/link.svg';
import marketAnalysisIcon from '../../assets/icons/market-analysis.svg';
import domainIcon from '../../assets/icons/domain.svg';
import declineIcon from '../../assets/icons/decline.svg';
import hourglassIcon from '../../assets/icons/hourglass.svg';
import customerReviewIcon from '../../assets/icons/customer-review.svg';
import doubleQuotesIcon from '../../assets/icons/double-quotes.svg';
import sandro from '../../assets/images/blog/sandro.png';
import wasistseo from '../../assets/images/seo/was-ist-seo.jpg';
import listIcon from '../../assets/icons/layers.svg';
import VideoContainer from "../../components/common/VideoContainer";
import playIcon from '../../assets/icons/play.svg';
import holdingLaptop2 from '../../assets/images/holding-laptop.png';
import seoDauerImage from '../../assets/images/seo/suchmaschinenoptimierung-dauer.jpg';
import seoAnalyseTop from '../../assets/images/analyse/seo-analyse.webp';
import seoAnalyseImage from '../../assets/images/analyse/seo-analyse-ratgeber.jpg';
import seoAnalyseCTAImage from '../../assets/images/analyse/cta-analyse.jpg';
import seoDauer1 from '../../assets/images/seo/seo-dauer.webp';
import seoDauer2 from '../../assets/images/seo/seo-dauer2.webp';
import checkCircleOrange from '../../assets/icons/check-circle-orange.svg';
import Comments from "../../components/sections/Comments";
import taskActionIcon from '../../assets/icons/task-actions.svg';
import implementationIcon from '../../assets/icons/implementation.svg';
import readingBookIcon from '../../assets/icons/reading-book.svg';
import CardGrid from '../../components/sections/CardGrid3';


import onpageOptimizationSectionData from '../../data/onpageOptimizationSectionData';
import offpageOptimizationSectionData from '../../data/offpageOptimizationSectionData';
import faqSeoSectionDataWIS from '../../data/FAQSectionDataWIS';

const inter = Inter({subsets: ['latin']})




export default function seoDauer() {
    

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

                <ContentWithVideo id={post.videoID} title={post.videoTitle} className="bg-gray"
                                  videoUrl={post.videoURL} thumbnail={post.videoThumbnail}
                                  description={post.videoDescription} description2={post.videoDescription2}
                                  list={post.videoList}
                                  />


                

                <section id="wiefunktioniertes" className="section-wrapper bg-gray">
                    <div className="container">
                        <div className="title-wrapper">
                            <FramerMotionAnimation
                                type="h2" className="title text-center">
                                Beispiel erste Situation
                            </FramerMotionAnimation>
                            <Image src={doubleArrowIcon} alt="arrows" className="ml-auto double-arrow-art" />
                        </div>
                        <div className="content-wrapper content-grid-wrapper grid md:grid-cols-2">
                            <FramerMotionAnimation
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="image-wrapper p-0 bg-gray">
                                <Image src={seoDauer1} alt="img" className="main-image" />
                            </FramerMotionAnimation>
                            <FramerMotionAnimation
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                            >
                                <p className="desc-sm mb-15">Es ist beispielsweise der Ausgangspunkt für ein neues Projekt für ein Start-up oder ein neues Unternehmen. Man möchte bei der Gründung des Unternehmens oder während der Lancierung eines neues Produkts in SEO investieren.</p>
                                <p className="desc-sm mb-0">Oder die Ausgangslage ist eine bestehende aber selten aktualisierte Webseite, bei der bisher kaum Suchmaschinenoptimierung betrieben wurde.</p>
                            </FramerMotionAnimation>
                        </div>
                        
                        <br/>

                   
                        <div className="title-wrapper">
                            <FramerMotionAnimation
                                type="h2" className="title text-center">
                                Beispiel zweite Situation
                            </FramerMotionAnimation>
                            <Image src={doubleArrowIcon} alt="arrows" className="ml-auto double-arrow-art" />
                        </div>
                        <div className="content-wrapper content-grid-wrapper grid md:grid-cols-2">
                            <FramerMotionAnimation
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="image-wrapper p-0 bg-gray">
                                <Image src={seoDauer2} alt="img" className="main-image" />
                            </FramerMotionAnimation>
                            <FramerMotionAnimation
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                            >
                                <p className="desc-sm mb-15">Es handelt sich um die Ausgangssituation bei einem Unternehmen oder einer bestehenden Webseite, welche über bestehende Autorität bei Suchmaschinen verfügt. Bei diesen Unternehmen sind meist einige Massnahmen selbst oder mit einer anderen Agentur umgesetzt worden, diese führten jedoch nicht zum Erfolg.</p>
                            </FramerMotionAnimation>
                        </div>
                        
                  </div>
                </section>

                <section id="analyse" className="section-wrapper" style={{ paddingBottom: 0}}>
                    <div className="container">
                        <div className="title-wrapper">
                            <FramerMotionAnimation
                                type="h2" className="title text-center">
                                Wie erscheint man ganz vorne bei Google?
                            </FramerMotionAnimation>
                            <Image src={doubleArrowIcon} alt="arrows" className="ml-auto double-arrow-art" />
                        </div>

                        <FramerMotionAnimation
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                        >
                            <p className="desc-sm mb-15">
                                Grundsätzlich möchte jedes Unternehmen ganz oben bei Google erscheinen, doch dies geht nur, wenn man seinen Kunden einen wirklichen Mehrwert in Form von Content anbieten kann. Gemäss einer Studie von Backlinko.com haben Webseiten, die auf der Seite 1 ganze oben ranken im Durchschnitt 3.8x mehr Backlinks als alle anderen Seiten.


                            </p>
                            <p className="desc-sm mb-15 md:mb-15">
                                Grundsätzlich möchte jedes Unternehmen ganz oben bei Google erscheinen, doch dies geht nur, wenn man seinen Kunden einen wirklichen Mehrwert in Form von Content anbieten kann. Gemäss einer <a href="https://backlinko.com/search-engine-ranking" 
                                title=" Studie von Backlinko.com">Studie von Backlinko.com</a> haben Webseiten, die auf der Seite 1 ganze oben ranken im Durchschnitt 3.8x mehr Backlinks als alle anderen Seiten.
                            </p>
                        
                            <p className="desc-sm mb-15">
                                Das soll Ihnen nicht vermitteln, dass man nur Backlinks aufbauen sollte, sondern dass man Linkaufbau nicht vernachlässigen sollte und es immer noch einen Einfluss auf das Google Ranking hat.


                            </p>
                            <p className="desc-sm mb-15 md:mb-15">
                                Die gleiche Studie hat anhand eines Beispiels dargelegt, wie selbst Suchresultate mit hohem Domain Rating von 73 ohne den passenden Content nicht ganz oben in der Suche erscheinen. Unsere Erfahrungen mit Kunden zeigt ein gleiches Bild wie die eben erwähnten Studien. Man erscheint ganz oben bei Google, indem man einen Mix aus Kritieren erfüllt, bestehend aus <b>qualitativem Content</b>, der für die Zielgruppe relevant ist und das Suchbedürfnis des jeweiligen Suchbegriffs befriedigt.


                            </p>

                            <p className="desc-sm ">
                                Des Weiteren müssen die Faktoren bezüglich Onpage- sowie Offpage-Optimierung stimmen, damit eine Website überhaupt den Anforderungen entspricht und somit weit oben in den Index kommt. Die Onpage-Optimierung wird vielfach als grösster Bereich dargestellt, der auf allen Unterseiten ausgeführt wird.

                            </p>
                        </FramerMotionAnimation>
                        
                    </div>
                </section>

                <section id={listId} className="analysis-factors container" style={{ paddingTop: 0}} >
                    
                    <FramerMotionAnimation type="p" className="description mb-50">
                                Hier einige Kriterien, mit deren Beachtung man bei Google weiter nach oben kommt:
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
                            <FramerMotionAnimation type="p" className="description">
                               Dies ist eine Auswahl von Punkten und keine abschliessende Liste. In unserem Beitrag über SEO haben wir die Ranking-Faktoren genauer umschrieben. Schliesslich geht es um das Vertrauen von Google, das Ergebnis zuoberst anzeigen zu lassen, dass das entsprechende Keyword am besten abdeckt. Den Suchenden zufriedenstellt und dieser seine Antwort in jeglicher Form erhält und nicht zu Google zurückkehren muss.


                            </FramerMotionAnimation>
                           
                        </div>
                    </div>
                </section>



 <section style={{ whiteSpace: "break-spaces" }} className="content-with-video container">
            <FramerMotionAnimation>
                <div className="flex flex-col md:flex-row">
                    <FramerMotionAnimation
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.25 }}
                        className="content-wrapper flex-1">
                        <h2 className="title font-medium">Wie funktioniert Indexierung & Ranking?</h2>
                        <p className="desc">Index</p>
                        <div className="tag-images flex align-center">
                           <FramerMotionAnimation type="p" className="description">
                               Der Index oder Google Index ist die Gesamtzahl aller mit dem Googlebot gecrawlten Webseiten. 
                               Bei diesem Vorgang speichert Google Seiten ab, die dann in den Suchergebnissen als 
                               SERPs angezeigt werden. Der Quellcode wird ausgelesen und an den Index gesendet. 
                               Täglich werden viele neue Seiten erfasst aber auch aus dem Index gelöscht. Die Google 
                               web crawlers springen von Link zu Link auf weitere Webseiten, welche damit ebenfalls 
                               erfasst werden. Verstösst eine Webseite massiv gegen die Webmaster-Richtlinien von Google, 
                               dann wird Sie aus dem Index entfernt.
                            </FramerMotionAnimation>
                        </div>
                        <br />
                        <p className="desc">Ranking</p>
                        <div className="tag-images flex align-center">
                           <FramerMotionAnimation type="p" className="description">
                            Die Anzahl der Webseiten werden im Index nicht nach einer fixen Sortierung gegliedert. Es gibt diverse Ranking-Kriterien auch Rankingfaktoren genannt, nach denen der Index sortiert wird, damit eine Suchanfrage nach einer ganz bestimmten Reihenfolge angezeigt wird. Wie genau diese Ranking-Faktoren funktionieren, gibt Google nicht bekannt, es handelt sich um ein Betriebsgeheimnis der Suchmaschine. Jedoch werden immer wieder Hinweise von Google dazu veröffentlicht, nach welchen Spezialisten versuchen, eine entsprechende Liste zusammenzustellen.

                            <br /> <br />
                            Als erfahrene Fachspezialisten einer SEO-Agentur haben unsere Teammitglieder durch
                            die langjährige Arbeit an Projekten und die Verfolgung von den veröffentlichten 
                            Daten von Google eine Art <b>dynamisches Gebilde</b> dafür entwickelt, worauf es 
                            wirklich ankommt. Unser Team versucht dabei immer wieder, unsere Vermutungen 
                            anhand von Tests darzulegen oder Wissen darüber bei Bloggern und Branchenkollegen 
                            nachzulesen, welche in die Gleichung Richtung unterwegs sind.


                            </FramerMotionAnimation>
                        </div>
                    </FramerMotionAnimation>



                    <FramerMotionAnimation
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.25 }}
                        className="video-wrapper flex-1">
                        <VideoContainer url="https://www.youtube.com/embed/BNHR6IQJGZs"
                                        className="thumbnail-wrapper relative">
                            <Image src={holdingLaptopVid} alt={'thumbnail'} className="thumbnail" />
                            <Image src={playIcon} alt={"play icon"} className="play-icon" />
                        </VideoContainer>
                    </FramerMotionAnimation>
                </div>
            </FramerMotionAnimation>
        </section>




                <section id="" className="analysis-factors container" style={{ paddingTop: 0}} >
                    <FramerMotionAnimation
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.25 }}
                        className="content-wrapper flex-1">
                        <h2 className="title font-medium">Was beeinflusst die Dauer von SEO massgeblich?</h2>
                    
                    </FramerMotionAnimation>
                    <br />
                    <FramerMotionAnimation type="p" className="description mb-50">
                                Wie in der Einleitung bereits erwähnt, unterscheiden wir aus Erfahrung mit unseren Kunden grundsätzlich zwischen folgenden Ausgangslagen:
                            </FramerMotionAnimation>
                    <div className="main-wrapper md:flex">
                        
                        <div className="content-wrapper">

                        <FramerMotionAnimation
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.25 }}
                        className="content-wrapper flex-1">
                        <h4 className="title font-medium">Ausgangslage</h4>
                        <br />
                    
                    </FramerMotionAnimation>

                            <div className="list-wrapper">
                                { ausgangslageItems?.map((item, index) => (
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

                        <div className="content-wrapper">

                        <FramerMotionAnimation
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.25 }}
                        className="content-wrapper flex-1">
                        <h4 className="title font-medium">Was ist die IST-Situation</h4>
                        <br />
                    
                    </FramerMotionAnimation>
                    <FramerMotionAnimation type="p" className="description mb-15">
                        Dann wiederum ist die Frage nach der aktuellen IST-Situation, bei neuen Projekten ist dies naheliegend. Bei bestehenden Webseiten sollten Sie sich folgendes Fragen, wenn es darum geht, wie schnell man mit SEO-Massnahmen Ergebnisse erzielt:



                            </FramerMotionAnimation>

                            <div className="list-wrapper">
                                { istItems?.map((item, index) => (
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

                                <FramerMotionAnimation type="p" className="description">
                                Diese vier Einstiegsfragen lassen uns ein Projekt einordnen, wie viel Aufwand die Optimierung auf ein Level ist, die mit der Konkurrenz mithalten kann. Aus der Beantwortung dieser Fragen kann auch die Dauer für die Resultate aus den SEO-Massnahmen abgeleitet werden. Wenn Sie erfolgreiche Suchmaschinenoptimierung betreiben möchten, ist eine professionelle SEO-Strategie unumgänglich.




                            </FramerMotionAnimation>
                            
                           
                        </div>
                    </div>

                    <FramerMotionAnimation className="description mt-50"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                        >
                            <p className="desc-sm mb-15">
                                Wenn eine vorläufige Bewertung der ersten drei Fragen zeigt, dass diese enorm viel Aufwand erfordern, sollten Sie einen Webseiten-Relaunch in Betracht ziehen. Denn Webseiten mit veralteter Technik haben es deutlich schwerer, das Vertrauen bei Nutzer und somit auch bei den Suchmaschinen aufzubauen.



                            </p>
                            <p className="desc-sm mb-15 md:mb-15">
                               Wie schon erwähnt stellt auch die Situation Ihrer Konkurrenten ein entscheidender Faktor dar, wie schnell es mit SEO vorangeht. Finden Sie beispielsweise auf der ersten Seite Ihrer wichtigsten Keywords nur Suchergebnisse mit unschlagbarem Linkprofil (Domain Rating von 50+), dann müssen Sie vermutlich deutlich mehr Aufwand und Kosten aufbringen, als wenn die Situation anders wäre. In diesem Fall gibt es andere Strategien, als auf diese Keywords zu setzen, welche wir in unserer <Link href="/monatliche-seo-betreuun" title="monatlichen SEO Betreuung">monatlichen SEO Betreuung</Link> einsetzen und mit denen man langfristig Erfolg bei SEO-Optimierung haben kann.

                            </p>
                        
                            <p className="desc-sm mb-15">
                                Zu guter Letzt ist es die Suchmaschine selbst, die bestimmt, wie lange es dauert. Selbst wenn eine neu erstellte Unterseite schnell indexiert wird, kann es trotzdem unterschiedlich viel Zeit benötigen, bis die Suchmaschine Ihre Prüfungen abgeschlossen hat und den Content einstuft. Der Suchalgorithmus hat wie längst in diesem Guide erwähnt, gewisse Rankingfaktoren, die von Google überprüft werden. Diese dienen als Qualitätsrichtlinien von den Ergebnissen und haben massgeblichen Einfluss auf das Google-Ranking.


                            </p>
                            <p className="desc-sm mb-15 md:mb-15">
                                Auf der anderen Seite ändern sich der Algorithmus dauernd und die Guidelines von Google werden angepasst, somit kann eine veröffentlichte Unterseite schon nach einigen Monaten nicht mehr den Guidelines entsprechend. Darauf muss ein professioneller SEO-Experte reagieren können. Die Search Console ist ein interessantes Tool, welches Aufschluss darüber gibt, ob eine Seite bereits indexiert worden ist und ob man dafür organische Impressionen oder gar Klicks erhalten hat.



                            </p>

                            
                        </FramerMotionAnimation>
                </section>



                 <section id="" className="analysis-factors container" style={{ paddingTop: 0}} >
                    <FramerMotionAnimation
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.25 }}
                        className="content-wrapper flex-1">
                        <h2 className="title font-medium">Was sagt Google zur Dauer?</h2>
                    
                    </FramerMotionAnimation>
                    <br />
                    <FramerMotionAnimation type="p" className="description mb-50">
                               Aus einem <a href="https://support.google.com/webmasters/answer/7474347?hl=de" 
                               title="Beitrag für die Search-Console Hilfe">Beitrag für die Search-Console Hilfe</a> kann man entnehmen, dass Google offiziell sagt, dass man nach einer gestellten Indexierung bis zu einer Woche warten soll, bis man überhaupt überprüft, ob die Seite im “Index” ist.

                    Wenn die Webseite neu ist, kann dies noch viel länger dauern. Google gibt an, dass es zwischen ein bis zwei Tagen und einigen Wochen dauern kann. Dies wurde auch im Zusammenhang mit der Indexierung beantragen Funktion in der Google Search Console erwähnt.
                            </FramerMotionAnimation>
                    
                </section>


             

            
                 <CardGrid data={dauerPhasesData} />

                <Comments slug={'seo-dauer'} />
            </main>


        </>
    )
}



const post = {
                slug: 'seo-dauer',
                shortTitle: 'Wie lange dauert SEO',
                title: 'Wie lange dauert SEO',
                description: 'Sie fragen sich sicherlich, bis wann Resultate erzielt werden können bzw. wie lange es dauert. ',
                image: seoDauerImage,
                imageAlt: 'SEO Dauer',
                readMoreUrl: '/seo/post1',
                date: '9.12.2022',
                readingTime: '10min Lesedauer',
                cta: 'SEO Dauer',
                author: 'Sandro Huber',
                authorImage: sandro,
                contentList: [

                    {
                        item: 'Wie lange dauert es im Detail?',
                        link: '#dauer'
                    },
                    {
                        item: 'Wie erscheint man ganz vorne bei Google?',
                        link: '#ganzvorne'
                    },
                    {
                        item: 'Wie funktioniert Indexierung & Ranking?',
                        link: '#indexierung'
                    },
                    {
                        item: 'Was beeinflusst die Dauer von SEO massgeblich?',
                        link: '#beeinflusst'
                    },
                    {
                        item: '3 Phasen eines SEO-Projekts',
                        link: '#phasen'
                    },
                    {
                        item: 'Häufige Fehler bei der Dauer',
                        link: '#fehler'
                    },
                    {
                        item: 'Weiterlesen interessante Beiträge',
                        link: '#weiterlesen'
                    },
                    {
                        item: 'Fazit',
                        link: '#fazit'
                    },
                ],
                introTitle: 'Antwort',
                introDescription: 'Bis man Erfolge verzeichnen kann, dauert es mindestens ca. 6 - 12 Monate. Die SEO-Dauer hängt davon ab, wie gross die Konkurrenz in der Branche ist und wie gut die umgesetzten Massnahmen den Ranking-Kriterien der Suchmaschinen entsprechen.',
                videoID: 'seodauervideo',
                videoTitle: 'Bis wann gibt es Resultate',
                videoURL: 'https://www.youtube.com/embed/1YXnseEjaKs',
                videoDescription: 'Sie fragen sich sicherlich, bis wann Resultate erzielt werden können bzw. wie lange es dauert, bis man Top-Rankings erreicht. Um herauszufinden, wie lange SEO-Marketing dauert, muss man sich zuerst fragen, über welche Ausgangslage man spricht. \n\nGrundsätzlich unterscheidet man bei der Dauer zwischen bestehenden Webseiten, die schon Autorität bei Suchmaschinen mitbringen oder komplett neue Projekte, die erst am Anfang stehen und gar keine Autorität haben.',
                videoDescription2: 'Bei völlig neuen Webseiten sollten parallel zusätzlich Backlinks aufgebaut werden, damit man bei Google einen ersten Sichtbarkeitsgewinn verbuchen kann. Aus unserer Sicht staffelt sich SEO in drei Phasen, die Planungs-, die Umsetzungs- sowie die Verbesserungsphase. \n\nEs gilt in der Planungsphase neben den Analysetätigkeiten eine Handvoll Links zu akquirieren und somit schnellstmöglich auf ein Domain Rating von mindestens 10 zu kommen. Bei einem Domain Rating über 10 sind mit gut recherchiertem Content schnelle Resultate in den Suchergebnissen möglich.',
                videoThumbnail: seoAnalyseTop,

                imageId: '65',
                imageData : [
                        {   
                            imageId: '65',
                            image: seoAnalyseImage,
                            imageAlt: "test", 
                            title: 'hallao',
                            description: 'dafasdfasdf'

                        }
                    ]
            
            }


const listId = 'test'
const listItems = [

                    {
                        data: 'Links von relevanten Quellen auf die eigene Webseite'
                    },
                    {
                        data: 'Komprimierte Bilder für eine schnelle Seitenladezeit'
                    },
                    {
                        data: 'Verwenden von Bild- und Videomaterial entsprechend der Suchintention'
                    },
                    {data: 'Texte für Menschen nicht für Maschinen'},

                    {data: 'Eine interne Verlinkung nach Webseitenstruktur'},

                    {data: ' Überschriften so gestalten, damit Google web crawlers den Inhalt verstehen'}

                ];

const ausgangslageItems = [

                    {
                        data: ' Neues SEO-Projekt für Startup oder Neugründung'
                    },
                    {
                        data: 'Bestehende Webseite eines Unternehmens'
                    }

                ];

const istItems = [

                    {
                        data: 'Wie ist die Webseite technisch optimiert?'
                    },
                    {
                        data: 'Ist die Struktur der Webseite korrekt aufgesetzt?'
                    },
                    {
                        data: 'Hat die Webseite ein ansprechendes Mobile Design?'
                    },
                    {data: 'Wie steht es um das Linkprofil der Webseite?'},



                ];


const dauerPhasesData = {
    title: '3 Phasen eines SEO-Projekts',
    description: 'Ein SEO-Projekt gliedert sich in drei Phasen, die wiederum jeweils einen individuellen Zweck während der Dauer eines Projekts verfolgen.',
    cardsData: [
        {
            icon: taskActionIcon,
            title: 'Planungsphase',
            description: [
                { link: false, data: 'Während der Planungsphase wird die Webseite im Detail anhand einer' },
                { link: true, data:'SEO-Analyse', url: 'https://google.com' },
                { link: false, data: 'zerlegt. Aufgrund einer Konkurrenzanalyse werden Bereiche bei' }
            ],
        },
        {
            icon: implementationIcon,
            title: 'Umsetzungsphase',
            description: [
                { link: false, data: 'Die Verbesserungsphase ist dazu da, die bisherigen Erkenntnisse ganz detailliert auszuwerten und gegebenenfalls die Gesamtstrategie anzupassen. Durch die stetige Weiterentwicklung des Suchmaschinenalgorithmus haben sich ziemlich sicher neue technische Onpage Herausforderungen ergeben, welche entsprechend wieder behoben werden müssen. Durch den Lernen & Verbessern Vorgang kann die SEO-Strategie neu ausgerichtet werden und erfolgreiche Massnahmen auf den weiteren Verlauf adaptiert werden.' },
            ],
        },
        {
            icon: readingBookIcon,
            title: 'Lernen & Verbessern',
            description: [
                { link: false, data: 'Die Verbesserungsphase ist dazu da, die bisherigen Erkenntnisse ganz detailliert auszuwerten und gegebenenfalls die Gesamtstrategie anzupassen.' },
            ],
        }
    ]
}
