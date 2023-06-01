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
import localSEOImage from '../../assets/images/seo/local-tipps.jpg';
import localWebImage from '../../assets/images/seo/local-seo.webp'
import google3packImage from '../../assets/images/seo/google-3pack.webp'
import ContactFormLocal from "../../components/sections/ContactFormLocal";
import suggestImage from '../../assets/images/seo/google-suggest.jpg';

import fiveTippsData from '../../data/fiveTippsData';
import faqSeoSectionDataWIS from '../../data/faqVideoData';


const inter = Inter({subsets: ['latin']})

export default function localSEO() {
    

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
                                <div>Was sagt uns das?</div>
                                
                            </FramerMotionAnimation>
                            <Image src={doubleArrowIcon} alt="arrows" className="ml-auto double-arrow-art" />
                        </div>
                        <div className="content-wrapper content-grid-wrapper grid md:grid-cols-2">
                            
                            <FramerMotionAnimation
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }} >
                                <p className="desc-sm mb-15">Die lokale Suchmaschinenoptimierung gewinnt an immer grösserer Bedeutung, vor allem für lokal tätige Unternehmen ist es wichtig, dass man bei den wichtigsten Tools perfekt vertreten ist, damit für angehende Kunden kein Weg an Ihnen vorbeiführt.</p>
                                <p className="desc-sm mb-15">Von all diesen lokalen Suchanfragen führen laut der gleichen Studie rund ein Drittel zum Kauf. Die Erfahrung mit unseren Kunden zeigt, dass viele Anfragen, welche durch lokale Suchmaschinenoptimierung erzeugt worden sind, bei denen die Konkurrenz wenig oder kaum lokal optimiert war, der Kontakt ohne grossen Aufwand zum Abschluss geführt hat. Man sollte deshalb in den organischen Suchergebnissen für die eigenen Produkte und Dienstleistungen sowie für verwandte Themen direkt verfügbar sein. Durch die neueste Entwicklung der Mobile First-Indexierung werden auch für Google-Local-SEO kriegen die mobilen Endgeräte nochmals eine deutlich wichtigere Rolle zugeteilt.


                                </p>
                            </FramerMotionAnimation>
                            <FramerMotionAnimation
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="image-wrapper">
                                <Image src={localWebImage} alt="Local SEO" className="main-image" />
                            </FramerMotionAnimation>

                            <FramerMotionAnimation
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                            >
                               
                                    <p className="desc-sm mb-15">Für die <a href="#betroffeneunternehmen" alt="folgenden Unternehmen">Unternehmen</a> weiter unten sollte eine <strong>lokale Marketingstrategie</strong> also ganz oben auf der To-do-Liste stehen. Profitieren Sie von unseren angebotenen Dienstleistungen in diesem Bereich, damit Sie langfristig alle Probleme auf Ihrer mobilen Seite beheben können.
                                </p>
                            </FramerMotionAnimation>
                            
                            <FramerMotionAnimation
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                            >

                            <p className="desc-sm mb-15">In diesem Beitrag erfahren Sie alles Wichtige in Bezug auf die Optimierung für die lokale Google Suche. Zudem geben wir ein paar Expertentipps aus der Praxis, welche für die Eigenumsetzung praktisch sind oder wir für Sie umsetzen können.




                                </p>
                               
                                    
                            </FramerMotionAnimation>

                             
                        </div>
                       
                    </div>
                </section>

                <section id="definition" className="section-wrapper" >
                    <div className="container">
                        <div className="grid md:grid-cols-2 title-wrapper">
                            <FramerMotionAnimation
                                type="h2" className="title">
                                <div>Was ist Local-SEO und für welche Unternehmen ist es empfehlenswert</div>
                                
                            </FramerMotionAnimation>
                            <Image src={doubleArrowIcon} alt="arrows" className="ml-auto double-arrow-art" />
                        </div>
                        <div className="content-wrapper ">
                            
                            
                            <FramerMotionAnimation
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="image-wrapper">
                          
                            </FramerMotionAnimation>

                            <FramerMotionAnimation
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }} >
                               <p className="desc-sm mb-15">                     
                                Es ist ein Teilbereich aus der Suchmaschinenoptimierung und befasst sich mit der Verbesserung der Auffindbarkeit bei der Suche nach lokalen Produkten und Dienstleistungen. Die Optimierung möchte mehr lokale Kunden erreichen, um diese durch den Besuch des Geschäfts zum Kauf zu animieren. Grundsätzlich kann man bei Google zwischen Local Pack und die Rankings für lokale Keywords unterscheiden.

                                </p>

                                <p className="desc-sm mb-15">SEO-Local wird auch den Bereichen <a href="https://de.wikipedia.org/wiki/Targeted_Advertising" target="__blank" title="Targeted Advertisting">Targeted Advertisting</a> - auf die Zielgruppe ausgerichtete Werbeformen - sowie Geomarketing - Werbeformen, die speziell auf Regionen zugeschnitten sind, zugeschrieben. Wenn Sie mehr über die beiden Bereiche lesen möchten, finden Sie ganz unten weiterführende Informationen.


                                </p>
                                    


                                    
                            </FramerMotionAnimation>


                            <br />

                            <FramerMotionAnimation
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }} >
                             

                               <div className="title-wrapper">
                            <FramerMotionAnimation
                                type="h3" className="title">
                                <div>Ist mein Unternehmen betroffen?</div>
                                
                            </FramerMotionAnimation>
                        </div>                   
                                  <p className="desc-sm mb-15">Die Optimierung von lokalen Suchergebnissen ist vor allem für Unternehmen wichtig, die Dienstleistung oder Produkte in einer bestimmten Region anbieten. Von können also alle Firmen profitieren, die ihre Dienstleistungen und Produkte an einem bestimmten Ort oder in einem bestimmten Umkreis anbieten:



                                </p>

                                <ListItems items={companyListItems}/>

                                <br />
                                <p className="desc-sm mb-15">Auch für landesweit tätige Unternehmen kann die lokale Verbesserung ebenfalls zusätzliche Kunden aus der unmittelbaren Umgebung anziehen - möglicherweise ein vorher nicht berücksichtigter Absatzkanal.

                                </p>
                                    


                                    
                            </FramerMotionAnimation>


                            <br />

                            <FramerMotionAnimation
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }} >
                             

                               <div className="title-wrapper">
                            <FramerMotionAnimation
                                type="h3" className="title">
                                <div>Lokale Ranking Faktoren</div>
                                
                            </FramerMotionAnimation>
                        </div>                   
                                  <p className="desc-sm mb-15">Ein grosser Vorteil bei Local SEO ist, dass man keine grossen Ressourcen benötigt, um gute Ergebnisse erzielen zu können. Es benötigt die richtigen Schritte, welche dann vergleichsweise einfach ausgeführt werden können. Die Suchmaschinen machen die Suchergebnisse davon abhängig, ob standortbezogene Suchwörter verwendet werden oder ermitteln anhand der IP-Adresse die nächstmöglichen Anbieter.

                                </p>


                                <p className="desc-sm mb-15">On-Page Signale müssen klar gegeben sein, decken Sie die richtigen Keywords für die lokale Suche ab, welche wirklich strategisch für die Branche relevant sind. Als Erstes werden Ihre potenziellen Kunden die Google Bewertungen lesen - ein entscheidender Faktor um das Vertrauen zu gewinnen. Die Suchmaschinen werden den Suchenden nur Ergebnisse zeigen, die auch entsprechende Autorität mitbringen. Au diesem Grund ist das Backlinkprofil auch ein Rankingfaktor. Neben den Backlinks gibt es im lokalen Suchmaschinenmarketing zudem die Online-Verzeichnisse, es ist wichtig, dass legitime Seiten bestätigen, dass Ihre Unternehmens-Website und die Daten darauf wirklich korrekt sind. Das User-Verhalten bildet ebenfalls einen zentralen Bestandteil, wie der Google Algorithmus das Ranking bestimmt. Die begriffe CTR, Mobile Klicks und Social Media Check-ins sollten Ihnen ein Begriff sein.
                                </p>

                                <ListItems items={rankingListItems}/>

                                <br /><br />
                                <p className="desc-sm mb-15">Ausserdem hängt die Relevanz von drei verschiedenen Faktoren ab:
                                <br /><br />Aussagekraft: Wie oft klickt ein User auf eine bestimmte Webseite in den Suchergebnissen
                              <br /> <br />Zugehörigkeit: Wie deutlich kann Ihr Unternehmen einer Kategorie von Google My Business zugeordnet werden

                              <br /><br />Distanz: Wie weit ist das Unternehmen vom Standort des Kunden entfernt




                                </p>
                                    


                                    
                            </FramerMotionAnimation>


                            <br />

                            <FramerMotionAnimation
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }} >
                             

                               <div className="title-wrapper">
                            <FramerMotionAnimation
                                type="h3" className="title">
                                <div>Google 3-Pack einfach erklärt</div>
                                
                            </FramerMotionAnimation>
                                </div>                   
                                  <p className="desc-sm mb-15">Der wichtigste und einfachste Punkt ist zu verstehen, 
                                  was das Local Pack (auch Local Snack Pack genannt) 
                                  ist. Das Local Pack zeigt die drei 
                                  relevantesten Ergebnisse der lokalen Suche gemäss 
                                  Geotargeting und Relevanz zum eingegebenen Suchbegriff. Das Local 
                                  Pack listet nicht Ihre Website und die darauf verfügbaren Daten auf, 
                                  sondern der Eintrag bei Google My Business ist relevant um dafür zu ranken. 
                                  Somit wissen Sie auch, worauf man den Fokus bei der Strategie setzen sollte. 
                                  Im Artikel <Link href="/seo/seo-strategie" title="SEO-Strategie entwickeln">SEO-Strategie entwickeln</Link> erfahren Sie wie man eine umfassende Strategie für Suchmaschinen und Kunden generell erarbeiten kann.


                                </p>

                                
                            </FramerMotionAnimation>

                             <FramerMotionAnimation
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }} >
                                <p className="desc-sm mb-15">Das folgende Bild zeigt das Ergebnis der lokalen Suche einer Buchhandlung in Zürich.
                                </p>
                                
                            </FramerMotionAnimation>
                            <FramerMotionAnimation
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="image-wrapper">
                                <Image src={google3packImage} alt="Google 3 Pack" width={400} />
                            </FramerMotionAnimation>



                             <br />

                            <FramerMotionAnimation
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }} >
                             

                               <div id="keywords" className="title-wrapper">
                            <FramerMotionAnimation
                                type="h3" className="title">
                                <div>Keywords für lokale Sichtbarkeit</div>
                                
                            </FramerMotionAnimation>
                                </div>                   
                                  <p className="desc-sm mb-15">Bei der Keywordrecherche geht es hier darum, eine verhältnismässig übersichtliche Liste an Local Keywords zu generieren, die massgeblich sind für lokale Ergebnisse in den Suchmaschinen. Anders als in der sonstigen SEO-Themenwelt hat man bei den Local Keywords in der Regel einmal eine Liste zu erstellen und diese ändert sich in der Regel kaum, womit sich das doch deutlich von sonstigem SEO unterscheidet. Mit Google Suggest können Sie bereits eine erste aussagekräftige Liste erstellen:



                                </p>

                                
                            </FramerMotionAnimation>

                            <FramerMotionAnimation
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="image-wrapper">
                                <Image src={suggestImage} alt="Google 3 Pack" width={400} />
                            </FramerMotionAnimation>

                            <FramerMotionAnimation
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }} >
                                <p className="desc-sm mb-15">

                                Unsere Methoden der Keyword-Recherche sind aufbauend, das bedeutet wir beginnen mit einem Haupt-Keyword z.B.
                                {'Buchhandlung'} und bauen darauf auf. 
                                In diesem Fall scheint der Begriff {'Buchhandlung'} + {'Ort'} gängig zu sein. 
                                Man kann mithilfe von verschiedenen Methoden 
                                die Liste erweitern z.B. Keyword-Modifiers machen 
                                bei der lokalen Suche sicherlich ebenfalls Sinn. 
                                Ein Beispiel dazu kann sein {'günstige Buchhandlung'}, 
                                obwohl womöglich dann eher {'Bücher günstig'} infrage kommt. 
                                Dies müsste im Detail analysiert und die Keyword Varianten 
                                mit Synonymen erweitert werden. Hilfreiche Tools dabei sind 
                                beispielsweise das Keyword Tool von ahrefs.com, welches {'Having same terms'} Keywords ausspuckt - um 
                                nur eines zu erwähnen. Weitere Informationen 
                                zu Keywords finden Sie auch in 
                                unseren <Link href="/seo/was-ist-seo" title="SEO">SEO</Link> Guide.
                            </p>
                                
                            </FramerMotionAnimation>
                            
                        </div>
                       
                    </div>
                </section>




                <ContactFormLocal />

                <section id="kosten" className="section-wrapper keywords">
                    <div className="container">
                       
                
                        

                        <div className="inner-content-wrapper bg-gray" style={{ padding: "1rem"}}>
                            <div className="content-wrapper content-grid-wrapper grid md:grid-cols-2">
                                <FramerMotionAnimation
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                >
                                    <h4 className="content-title">Lokale Content Tipps</h4>

                                    <p className="desc-sm mb-15">

                                Beschäftigen Sie sich bei der Keywordrecherche für Ihr lokales Unternehmen auf folgende Keyword-Kombinationen, diese sind sehr im Trend:


                            </p>

                            <p className="desc-sm mb-15">

                                 Wo kauft man + in meiner Nähe



                            </p>

                            <p className="desc-sm mb-15">

                                Lebensmittelgeschäft in meiner Nähe geöffnet


                            </p>

                            <p className="desc-sm mb-15">

                                zu verkaufen + in meiner Nähe


                            </p>
                                   
                                </FramerMotionAnimation>
                                <FramerMotionAnimation
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    className="md:mb-0"
                                >
                                    <h4 className="content-title">
                                        Local Links

                                    </h4>

                                      <p className="desc-sm mb-15">

                                Man sollte Lokale Links nur aufbauen, wenn diese wirklich einen Bezug zum eigenen Unternehmen hat. Bleiben wir bei der Buchhandlung, wenn diese in Zürich ansässig ist, wieviel Sinn ergibt dann ein Backlink einer anderen Buchhandlung aus Basel? Wenig! Denn es wird kaum einen Kunden aus Basel, der dem Backlink folgt, nach Zürich ein Buch kaufen gehen. Bleiben Sie also beim Backlinkaufbau in Ihrer Region.



                            </p>

                            <p className="desc-sm mb-15">Bei Local Backlinks sollte man zwischen wirklichen Backlinks und Branchenbüchern oder Verzeichnissen unterscheiden. Ein Backlink kommt von einer anderen Webseite, die auf die eigene Webseite verlinken, da es einen thematischen Zusammenhang gibt. Die Online Verzeichnisse beinhalten eine Liste von Unternehmensprofilen, bei dem Ihr Unternehmen unter vielen anderen aufgelistet wird.

                                </p>

                                <p className="desc-sm mb-15">Eine Linkbuilding Strategie erfordert einen grossen manuellen Aufwand, jedoch lohnt sich dieser in jeder Hinsicht, denn Sie können parallel zu Gastbeiträgen oder Verlinkungen auf die eigene Webseite ein Netzwerk zu Presse und Gemeinschaften aufbauen in der eigenen Branche oder Region aufbauen. Was Ihnen weitere Synergien ergeben wird.



                                </p>

                                </FramerMotionAnimation>


                                <FramerMotionAnimation
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    className="md:mb-0"
                                >
                                    <h4 className="content-title">
                                        Strukturierte Daten


                                    </h4>

                                      <p className="desc-sm mb-15">

                               Verwenden Sie die Local Business strukturierten Daten für Ihre Webseite, um den Suchmaschinen das Signal zu geben, dass Sie relevant für den entsprechenden Bereich sind. Dann werden Sie, wenn weitere Faktoren stimmig sind, auch am besten gelistet. Wenn Sie sich nichts unter strukturierten Daten vorstellen können, Sie markieren auf Ihrer Webseite die wichtigsten Informationen zu Ihrem lokalen Geschäft wie Typ des Unternehmens z.B. Autogarage, Radiosender, usw. und weitere Angaben zu Standort, Öffnungszeiten und Kontaktmöglichkeiten. Zu diesem Zweck bietet Schema.org ein Schema an, um Webseiten im Internet einheitlich zu strukturieren.





                            </p>

                           

                                </FramerMotionAnimation>

                                <FramerMotionAnimation
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    className="md:mb-0"
                                >
                                    <h4 className="content-title">
                                        Mobile Optimierung


                                    </h4>

                                      <p className="desc-sm mb-15">

                                Auch hier ist die Mobile Optimierung wieder ein wichtiger Aspekt. Zum einen um die User-Experience auf dem Smartphone für lokale Suchbegriffe zu gewährleisten. Wenn ein Kunde einige Kilometer von Ihrem Unternehmen entfernt und in Kauflaune ist, wollen Sie diesen nicht verlieren, weil die Telefon-Nr. aufgrund des fehlenden Responsive Webdesign auf Ihrer Website nicht verfügbar ist. Aus Erfahrung wissen wir, dass lokale Geschäfte vor allem auf Smartphones gesucht werden.
                                Google erkennt, ob eine Website für mobile Geräte nutzerfreundlich gestaltet ist und bezieht das als Kriterium für das lokale Ranking bei mobilen Suchen ein.
                            </p>

                           

                                </FramerMotionAnimation>

                                <FramerMotionAnimation
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    className="md:mb-0"
                                >
                                    <h4 className="content-title">
                                        Systematische Nutzung lokaler Tools



                                    </h4>

                                      <p className="desc-sm mb-15">

                              Unbestritten ist Google 
                              Maps die absolute Nr. 1 unter den 
                              lokalen Suchen nach Standort. 
                              Jedoch in Zeiten von Spracherkennung 
                              könnten die Apple Maps wieder an Bedeutung gewinnen. 
                              Wenn in Ihrem Markt vor allem vom 
                              iPhone aus gesucht wird und die 
                              Spracherkennung sich weiter verbessert, wird der Grossteil der 
                              iPhone Besitzer von der Siri- Spracherkennungssoftware von Apple - 
                              die meisten Nutzer womöglich auf Apple Maps weiterleiten. 
                              Aus diesem Grund sollten Sie eine eingehende Trafficanalyse 
                              machen, wo die meisten Suchanfragen herkommen. Wenn das 
                              iPhone darunter ist, könnte sich ein Apple Maps Eintrag lohnen. 
                              Für spezifische Branchen wie Restaurants, Hotels, Shops, usw. 
                              eignet sich auch Yelp oder Tripadvisor.

                            </p>

                            <p className="desc-sm mb-15">

                              Es gibt spezifische Tools für Local-SEO-Management, die sich explizit auf lokale Suche spezialisiert haben. Einige davon werden wir Ihnen am Ende dieses Beitrags verlinken. Man kann dadurch die lokalen Positionen in den Suchmaschinen durch einen etwas andere Blickwinkel betrachten.



                            </p>

                           

                                </FramerMotionAnimation>
                            
                            </div>

                            
                        </div>
                    </div>
                </section>


                <section id="summary" className="section-wrapper keywords">
                    <div className="container">
                        <div className="title-wrapper">
                            <FramerMotionAnimation
                                type="h2" className="title text-center">
                               Zusammenfassung

                            </FramerMotionAnimation>
                        </div>
                        <FramerMotionAnimation
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            type="p" className="desc-md mb-15 md:mb-15">
                        Für regional tätige Branchen bietet diese Art von Suchmaschinenoptimierung einen hohen Mehrwert. Man wird deutlich besser gefunden und ist durch Geotargeting - aufgrund der IP Adresse wird der Standort zugeordnet - immer präsent. Man erreicht zusätzliche potenzielle Kunden, welche sonst den Weg vielleicht zum Konkurrenten machen. Lokales Internetmarketing ist keine Hexerei - mit dem richtigen Überblick und mit regelmässiger Pflege kann ein entscheidender Mehrwert für Ihr Unternehmen erreicht werden.


                        </FramerMotionAnimation>

                      
                    </div>
                </section>

            

                <Comments slug={'local-seo'} />



            </main>
        </>
    )
}




const post =  {
                slug: 'local-seo',
                shortTitle: 'Local SEO für lokale Unternehmen',
                title: 'Local SEO für lokale Unternehmen',
                description: '',
                image: localSEOImage,
                imageAlt: 'Local SEO',
                readMoreUrl: '/seo/local-seo',
                date: '26.04.2021',
                update: '26.04.2021',
                readingTime: '11min Lesedauer',
                cta: 'Local SEO',
                author: 'Sandro Huber',
                authorImage: sandro,
                category: 'Ratgeber',
                categoryUrl: '/blog',
                
                introId: 'definition',
                introTitle: 'Tipps & Checkliste',
                introDescription: 'Innert weniger Sekunden können Sie in der heutigen Zeit über die Suchmaschine Google einen lokalen Service finden. Gemäss der Mobile Search Trends Studie von Google beziehen sich ein Drittel der Suchanfragen auf eine Suche bezüglich einer lokalen Dienstleistung.',
                introDescription2: '',

                contentList: [

                    {
                        item: 'Was ist Local-SEO und für welche Unternehmen ist es empfehlenswert',
                        link: '#definition'
                    },
                    {
                        item: 'Keywords für lokale Sichtbarkeit',
                        link: '#keywords'
                    },
                     {
                        item: 'Kostenlosen Local SEO Guide',
                        link: '#guide'
                    },
                    {
                        item: 'Zusammenfassung',
                        link: '#summary'
                    },
                    
                   
                    
                  
                
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



const companyListItems = [

{
        icon: checkCircleIcon,
        text: 'Restaurants',
    },
    {
        icon: checkCircleIcon,
        text: 'Immobilienfirmen',
    },
    {
        icon: checkCircleIcon,
        text: 'Arztpraxen',
    },
    {
        icon: checkCircleIcon,
        text: 'Blumenläden',
    },
    {
        icon: checkCircleIcon,
        text: 'Anwaltsbüros',
    },
    {
        icon: checkCircleIcon,
        text: 'Handwerker',
    },
    {
        icon: checkCircleIcon,
        text: 'Fitness-Center',
    },
     {
        icon: checkCircleIcon,
        text: 'Buchhandlungen',
    },
    {
        icon: checkCircleIcon,
        text: 'Agenturbüros von Versicherungen',
    },
    {
        icon: checkCircleIcon,
        text: 'Autogaragen mit Showroom',
    },
    {
        icon: checkCircleIcon,
        text: 'Filialen von Konzernen',
    },
    {
        icon: checkCircleIcon,
        text: 'Jegliche Firmen mit lokalen Verkaufsräumlichkeiten',
    },

    ]



const rankingListItems = [

{
        icon: checkCircleIcon,
        text: 'Click-Through-Rate (CTR): Wie oft klickt ein User auf eine bestimmte Webseite in den Suchergebnissen',
    },
    {
        icon: checkCircleIcon,
        text: 'Mobile Klicks: Ein Button auf der Webseite, welcher den Benutzer sofort dazu veranlasst, dass Unternehmen anzurufen oder in Kontakt zu treten',
    },
    {
        icon: checkCircleIcon,
        text: 'Social Media Check-ins: Wenn die Konsumenten auf den Social Media Profilen sich bei Ihrer Firma einchecken bzw. den Besuch an Ihrem Standort markieren',
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