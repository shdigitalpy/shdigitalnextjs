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
import tiktokImage from '../../assets/images/tiktok/tiktok-nutzerzahlen.svg'
import tiktokdemoImage from '../../assets/images/tiktok/tiktok-demografie.jpg'
import Comments from "../../components/sections/Comments";
import FAQ from "../../components/sections/FAQSEO";
import WorkWithUs from "../../components/sections/WorkWithUsTikTok";
import tiktokengImage from '../../assets/images/tiktok/tik-tok-engagement.gif';
import tiktokdownloadsImage from '../../assets/images/tiktok/tiktok-downloads.webp'
import faqSeoKostenData from '../../data/faqSeoKostenData';
import tiktokcomImage from '../../assets/images/tiktok/social-media-populaerste-plattformen.webp'


export default function tiktokNutzer() {
    

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


                 <section id="uebersicht" className="section-wrapper keywords">
                    <div className="container">
                        <div className="title-wrapper">
                            <FramerMotionAnimation
                                type="h2" className="title text-center">
                                Was ist TikTok und wann ist es entstanden?
                            </FramerMotionAnimation>
                        </div>
                        <FramerMotionAnimation
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            type="p" className="desc-md mb-15 md:mb-15">
                       TikTok ist als Video-Plattform 2016 in China entstanden. Merkmal der App sind mit dem Smartphone gedrehte Kurzvideos. Der Slogan "Make every second count" reflektiert sich in den meist nur 15 Sekunden dauernden Handy-Videos, die Nutzer mit Musik veredeln.
                        </FramerMotionAnimation>
                        

                       
                    </div>
                </section>

                <section id="intro" className="section-wrapper keywords">
                    <div className="container">
                        <div className="title-wrapper">
                            <FramerMotionAnimation
                                type="h2" className="title text-center">
                                Was ist TikTok und wann ist es entstanden?
                            </FramerMotionAnimation>
                        </div>
                        <FramerMotionAnimation
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            type="p" className="desc-md mb-15 md:mb-15">
                       TikTok ist als Video-Plattform 2016 in China entstanden. Merkmal der App sind mit dem Smartphone gedrehte Kurzvideos. Der Slogan "Make every second count" reflektiert sich in den meist nur 15 Sekunden dauernden Handy-Videos, die Nutzer mit Musik veredeln.
                        </FramerMotionAnimation>
                        

                       
                    </div>
                </section>

                <section className="section-wrapper keywords">
                    <div className="container">
                        <div className="title-wrapper">
                            <FramerMotionAnimation
                                type="h2" className="title text-center">
                                TikTok auf einen Blick

                            </FramerMotionAnimation>
                        </div>
                        

                        <div id="uebersicht" className="inner-content-wrapper bg-gray">
                            <div className="content-wrapper content-grid-wrapper grid md:grid-cols-2">
                                <FramerMotionAnimation
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                >
                                    <h4 className="content-title">Aktive Nutzer</h4>
                                  
                                    <p className="desc-md mt-15">
                                    TikTok hat 1.6 Milliarden aktive Nutzer, die weltweit die App verwenden.</p>
                                </FramerMotionAnimation>
                                <FramerMotionAnimation
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    className="mb-80 md:mb-0"
                                >
                                    <h4 className="content-title">
                                        Anzahl Downloads
                                    </h4>
                                    <p className="desc-md mt-15">
                                    Das App wurde per Januar 2022 weltweit 25.7 Millionen Mal über den Google Play Store heruntergeladen.
                                    <br />Beim Apple Store waren es zum gleichen Zeitpunkt rund 12.33 Millionen Mal.
                                    </p>

                                </FramerMotionAnimation>

                                 <FramerMotionAnimation
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    className="mb-80 md:mb-0"
                                >
                                    <h4 className="content-title">
                                        Nutzerwachstum
                                    </h4>
                                    <p className="desc-md mt-15">
                                    Die Video-App konnte die weltweite Nutzerzahl zwischen 2021 und 2022 um 28% steigern. Zwischen 2018 und 2020 war das Wachstum 1157.76%.

                                    </p>

                                </FramerMotionAnimation>

                                 <FramerMotionAnimation
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    className="mb-80 md:mb-0"
                                >
                                    <h4 className="content-title">
                                        Bewertung
                                    </h4>
                                    <p className="desc-md mt-15">
                                   Der offiziell bestätigte Wert aus dem Jahr 2021 beträgt 280 Milliarden. Im 2022 gab es Datenlecks bei privaten Investoren, bei den veröffentlichten Transaktionen wurden die Aktien für 300 bis 400 Milliarden US-Dollar gehandelt.


                                    </p>

                                </FramerMotionAnimation>

                                <FramerMotionAnimation
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    className="mb-80 md:mb-0"
                                >
                                    <h4 className="content-title">
                                        Influencer Einnahmen

                                    </h4>
                                    <p className="desc-md mt-15">
                                   Um auf der chinesischen App Einnahmen von USD 100'000 zu generieren, benötigt es 10'000 Follower sowie 270 Millionen Aufrufe.


                                    </p>

                                </FramerMotionAnimation>

                                <FramerMotionAnimation
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    className="mb-80 md:mb-0"
                                >
                                    <h4 className="content-title">
                                        Globale Demografie

                                    </h4>
                                    <p className="desc-md mt-15">
                                   Die Generation Z nutzt es in den USA und global am meisten. Die grösste Gruppe sind Frauen zwischen 18 - 24 Jahren und machen rund 25% aus.



                                    </p>

                                </FramerMotionAnimation>

                                <FramerMotionAnimation
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    className="mb-80 md:mb-0"
                                >
                                    <h4 className="content-title">
                                        Konkurrenz


                                    </h4>
                                    <p className="desc-md mt-15">
                                  Anhand der Gesamtzahl der Nutzer liegt das App von ByteDance weiterhin hinter der Konkurrenz. Im Vergleich haben Facebook 1.3 Milliarden und YouTube 1 Milliarde mehr monatliche Nutzer als die Video-Plattform aus China.
                                  <br />TikTok hat von der Gesamtzahl der Nutzer seit März 2022 Instagram und die inländische Konkurrenz WeChat hinter sich gelassen.



                                    </p>

                                </FramerMotionAnimation>


                                <FramerMotionAnimation
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    className="mb-80 md:mb-0"
                                >
                                    <h4 className="content-title">
                                        Nutzer Schweiz


                                    </h4>
                                    <p className="desc-md mt-15">
                                  In der Schweiz gibt es auf der chinesischen Video-Plattform rund 2 Mio. aktive Nutzer pro Monat im 2022.




                                    </p>

                                </FramerMotionAnimation>
                                <FramerMotionAnimation
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    className="mb-80 md:mb-0"
                                >
                                    <h4 className="content-title">
                                        Influencer in der Schweiz



                                    </h4>
                                    <p className="desc-md mt-15">
                                  Thispronto ist der bekannteste TikToker in der Schweiz nach den Anzahl von Followern 15.5 Mio (Stand: April 2022). Thispronto konnte auch am meisten Follower zulegen, Total 1.8 Mio. Follower seit Oktober 2021.

                                  Seit diesem Jahr ist noeminikita mit 12.7 Mio. die Nr. 2 in der Schweiz. Sie konnte ebenfalls gut zulegen, 1.1 Mio. neue Follower seit Oktober 2021. Sie löst damit nickychampa auf dem zweiten Platz in der Schweiz ab.




                                    </p>

                                </FramerMotionAnimation>


                            </div>

                           
                        </div>
                    </div>
                </section>

                 <section id="aktivenutzer" className="section-wrapper keywords">
                    <div className="container">
                        <div className="title-wrapper">
                            <FramerMotionAnimation
                                type="h2" className="title text-center">
                                Tik Tok Nutzer weltweit

                            </FramerMotionAnimation>
                        </div>
                        <FramerMotionAnimation
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            type="p" className="desc-md mb-15 md:mb-15">
                                 Gemäss <a href="https://www.bloomberg.com/news/articles/2022-04-07/tiktok-user-growth-surged-before-russia-ukraine-war?leadSource=uverify%20wall" title="Bloomberg" target="__blank">Bloomberg</a> hat die Video-App per Q1 2022 rund 1.6 Milliarden aktive Nutzer weltweit.


                        </FramerMotionAnimation>

                        <table class="tg">
                        <thead>
                          <tr>
                            <th class="tg-1oat" >Jahr</th>
                            <th class="tg-1oat" >Aktive Nutzer ⌀</th>
                            <th class="tg-1oat" >Wachstum</th>
                            
                          </tr>
                        </thead>
                        <tbody>
                          
                          
                          
                          
                            
                            <tr>
                            <td class="tg-1oat">2022</td>
                            <td class="tg-1oat">1'600'000'000</td>
                            <td class="tg-1oat">28%</td>
                            
                          </tr>

                          <tr>
                            <td class="tg-1oat">2021 </td>      
                            <td class="tg-1oat">1'250'000'000</td>
                            <td class="tg-1oat">25%</td>
                            
                            
                          </tr>

                          <tr>
                            <td class="tg-1oat">2020</td>                       
                            <td class="tg-1oat">1'000'000'000</td>
                            <td class="tg-1oat">-</td>                          
                            
                            
                          </tr>


                        </tbody>
                        </table>
                        

                       
                    </div>
                </section>

                <section id="nutzerschweiz" className="section-wrapper keywords">
                    <div className="container">
                        <div className="title-wrapper">
                            <FramerMotionAnimation
                                type="h2" className="title text-center">
                                Tik Tok Nutzer Schweiz

                            </FramerMotionAnimation>
                        </div>
                        <FramerMotionAnimation
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            type="p" className="desc-md mb-15 md:mb-15">
                                Wenn man davon ausgeht, dass das Wachstum der Nutzerzahlen in der Schweiz leicht unter dem weltweiten Schnitt liegt, verwenden <b>aktuell im 2022 ca. 2 Mio. Menschen in der Schweiz</b> TikTok. Gemäss Statista waren es im Jahr 2021 noch rund 1.7 Mio. Nutzer auf der Videoplattform. 

                        </FramerMotionAnimation>

                       <table class="tg">
                        <thead>
                          <tr>
                            <th class="tg-1oat">Jahr</th>
                            <th class="tg-1oat">Aktive Nutzer (Schätzungen)</th>
                            
                            
                          </tr>
                        </thead>
                        <tbody>
                          
                          
                          
                          
                            
                            <tr>
                            <td class="tg-1oat">2022</td>
                            <td class="tg-1oat">2 Mio.</td>
                           
                            
                          </tr>

                          <tr>
                            <td class="tg-1oat">2021 </td>      
                            <td class="tg-1oat">1.7 Mio.</td>
                           
                            
                            
                          </tr>

                          


                        </tbody>
                        </table>
                        

                       
                    </div>
                </section>

                <section id="demografie" className="section-wrapper keywords">
                    <div className="container">
                        <div className="title-wrapper">
                            <FramerMotionAnimation
                                type="h2" className="title text-center">
                                Demografie

                            </FramerMotionAnimation>
                        </div>
                        <FramerMotionAnimation
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            type="p" className="desc-md mb-15 md:mb-15">
                                Die neusten Zahlen per <b>Januar 2022</b> von <a href="https://www.statista.com/statistics/1299771/tiktok-global-user-age-distribution/" title="Statista" target="__blank"> Statista</a> zeigen, dass von den globalen Nutzern zwei Altersgruppen gibt, die die App dominieren.

                        </FramerMotionAnimation>

                       <table class="tg">
                        <thead>
                          <tr>
                            <th class="tg-1oat">in Prozent</th>
                            <th class="tg-1oat">Geschlecht</th>
                            <th class="tg-1oat">Alter</th>
                            
                          </tr>
                        </thead>
                        <tbody>
                          
                          
                          
                          
                            
                            <tr>
                            <td class="tg-1oat">25.0%</td>
                            <td class="tg-1oat">Frauen</td>
                            <td class="tg-1oat">zwischen 18 und 24 Jahren</td>
                           
                            
                          </tr>

                          <tr>
                            <td class="tg-1oat">18.0%</td>
                            <td class="tg-1oat">Männer</td>
                            <td class="tg-1oat">zwischen 18 und 24 Jahren</td>
                           
                            
                          </tr>

                          <tr>
                            <td class="tg-1oat">17.6%</td>
                            <td class="tg-1oat">Frauen</td>
                            <td class="tg-1oat">zwischen 25 und 34 Jahren</td>
                           
                            
                          </tr>

                          <tr>
                            <td class="tg-1oat">13.6%</td>
                            <td class="tg-1oat">Männer</td>
                            <td class="tg-1oat">zwischen 25 und 34 Jahren</td>
                           
                            
                          </tr>

                          


                        </tbody>
                        </table>

                       <br />
                        <p>Um die Video-App nutzen zu dürfen, müssen alle User mindestens 13 Jahre alt sein </p>

                       <br />
                        <p>Der Grossteil der Nutzer sind also Millennials oder aus der Generation Z. 
                        Zur <a href="https://de.wikipedia.org/wiki/Generation_Z" title="Generation Z" target="__blank">Generation Z</a> 
                        werden Leute dazugerechnet, die zwischen 1997 und 2010 zur Welt gekommen sind. 
                        Bei der <a href="https://de.wikipedia.org/wiki/Generation_Y" title="Generation Y" target="__blank">Generation Y</a>
                        bzw. den Millennials von 1981 bis 1996. Aufgrund von kulturellen und technischen Einflüssen können 
                        diese Altersgruppen auf Mobiltelefonen bereits intuitiv überlegen. </p>
                        <br />

                        <Image src={tiktokdemoImage} alt="TikTok Demografie" />

                        
                        

                       
                    </div>
                </section>


                <section id="verweildauer" className="section-wrapper keywords">
                    <div className="container">
                        <div className="title-wrapper">
                            <FramerMotionAnimation
                                type="h2" className="title text-center">
                                Wie viel Zeit verbringen die Leute auf der Video-App?


                            </FramerMotionAnimation>
                        </div>
                        <FramerMotionAnimation
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="desc-md mb-15 md:mb-15">
                                <p className="desc-md mb-15 md:mb-15">Gemäss <a href="https://www.tiktok.com/business/en/blog/tiktok-drives-greater-audience-engagement/#section2" title="offiziellen Angaben" target="__blank">offiziellen Angaben</a> sind die Videos auf der Plattform viel ansprechender als herkömmliche Medien.</p>

                            <p className="desc-md mb-15 md:mb-15">Man will durch eine Studie bewiesen haben, dass die Inhalte als Werbemittel viel relevanter sind. Für Unternehmen soll dieser Umstand völlig neue Möglichkeiten eröffnen, Botschaften an potentielle Kunden zu vermitteln.</p>

                            <p className="desc-md mb-15 md:mb-15">Beim Vergleich zu anderen Videoformaten wie z.B. digitale Videos, TV, usw. will man mit den <a href="https://ads.tiktok.com/" target="__blank" title="Ads">Ads</a> 23% besser sein als Werbung in diesen anderen Formaten.  </p>

                            <p className="desc-md mb-15 md:mb-15">Wir teilen diese Auffassung, da die Ersteller der Videos auf TikTok eine Art von "Kurzgeschichte" darstellen müssen. Im Gegensatz dazu werden zum Beispiel auf Instagram oftmals Fotos aus dem vermeintlich coolsten Alltag publiziert. </p>

                            <p className="desc-md mb-15 md:mb-15">Die chinesische Video-App hat die höchste Verweildauer <a href="https://www.statista.com/statistics/579411/top-us-social-networking-apps-ranked-by-session-length/" title="bei den Nutzern in den USA" target="__blank">bei den Nutzern in den USA</a>. Im Durchschnitt pro Sitzung rund 10 Minuten. Facebook als Vergleich hat etwas weniger als 5 Minuten. TikTok-Marketing kann also aus Sicht der Aufmerksamkeit eine sehr effektive Werbeform sein.</p>

                         

                        </FramerMotionAnimation>

                        <Image src={tiktokengImage} alt="TikTok Engagement" />
                        


                    </div>
                </section>



                 <section id="downloads" className="section-wrapper keywords">
                    <div className="container">
                        <div className="title-wrapper">
                            <FramerMotionAnimation
                                type="h2" className="title text-center">
                                Offizielle TikTok Downloads



                            </FramerMotionAnimation>
                        </div>
                 <Image src={tiktokdownloadsImage} alt="TikTok Downloads" />

                 <small>Quelle Play Store: <a href="https://de.statista.com/statistik/daten/studie/1028345/umfrage/anzahl-der-downloads-von-tiktok-ueber-den-google-play-store-weltweit/" title="Play Store" target="__blank">Play Store</a></small><br />
                    <small>Quelle Apple Store: <a href="https://de.statista.com/statistik/daten/studie/1028358/umfrage/anzahl-der-downloads-von-tiktok-ueber-den-apple-app-store-weltweit/" title="Apple Store" target="__blank">Apple Store</a><a href="https://de.statista.com/statistik/daten/studie/1028358/umfrage/anzahl-der-downloads-von-tiktok-ueber-den-apple-app-store-weltweit/" title="Apple Store" target="__blank">Apple Store</a></small>

                
                </div>
                </section>


                <section id="firmenbewertung" className="section-wrapper keywords">
                    <div className="container">
                        <div className="title-wrapper">
                            <FramerMotionAnimation
                                type="h2" className="title text-center">
                                Wie viel Wert hat TikTok aktuell?




                            </FramerMotionAnimation>
                        </div>
                 <p className="desc-md mb-15 md:mb-15">Schon per Ende letztes Jahr führte die chinesische Video-App die Rangliste der <a href="https://en.wikipedia.org/wiki/List_of_unicorn_startup_companies" title="Unicorn Startups" target="__blank">Unicorn Startups</a> an. Dabei handelt es sich um die wertvollsten Startups, die nicht an der Börse gehandelt werden. Es gab immer wieder Spekulationen über einen IPO der Video-Plattform. Bisher ist es jedoch nicht dazu gekommen.</p>

                    <p className="desc-md mb-15 md:mb-15">Nicht öffentliche Daten von TikTok gelangen über <a href="https://36kr.com/" title="36Kr" target="__blank">36Kr</a> an die Öffentlichkeit. Wonach die Bewertung für die Video-Plattform in diesen Transaktionen bei 325 bis 450 Milliarden lag. Dies bestätigten auch weitere Zeitungen wie die South China Morning Post. </p>

                    <p className="desc-md mb-15 md:mb-15">Der Mutterkonzern ByteDance startete kürzlich eine Runde von Aktienrückkäufen im Besitz von Mitarbeitern zu einem Preis von 132 US-Dollar pro Aktie, teilten drei Quellen mit, was einem Anstieg von etwa 5 % pro Aktie gegenüber dem Rückkauf des Unternehmens im Mai entspricht. Das würde das Unternehmen jedoch weniger als 200 Milliarden Dollar wert machen.</p>

                
                </div>
                </section>

                <section id="influencer" className="section-wrapper keywords">
                    <div className="container">
                        <div className="title-wrapper">
                            <FramerMotionAnimation
                                type="h2" className="title text-center">
                                Influencer Einnahmen

                            </FramerMotionAnimation>
                        </div>

                   <p className="desc-md mb-15 md:mb-15">Auf Basis dieses <a href="https://www.cnbc.com/2021/04/30/how-much-money-you-can-make-off-social-media-following-calculator.html" title="Artikels">Artikels</a> haben wir untersucht, wie viel Einnahmen es auf den verschiedenen Plattformen benötigt, um USD 100'000 zu generieren:
                    </p>

                    <table class="tg">
                        <thead>
                          <tr>
                            <th class="tg-1oat">Plattform</th>
                            <th class="tg-1oat" >Follower für </th>
                            <th class="tg-1oat">Verdienst</th>
                                            
                          </tr>
                        </thead>
                        <tbody>

                         <tr>
                            <td class="tg-1oat">YouTube</td>
                            <td class="tg-1oat">100'000 Subscribers, 24 Millionen Aufrufe</td>
                            <td class="tg-1oat">für USD 100'000</td>
                            
                          </tr>

                          <tr>
                            <td class="tg-1oat">Instagram</td>
                            <td class="tg-1oat">5'000 Follower und 308 bezahlte Posts</td>
                            <td class="tg-1oat">für USD 100'000</td>
                         
                            
                          </tr>

                          <tr>
                            <td class="tg-1oat">TikTok</td>
                            <td class="tg-1oat">10'000 Follower und 270 Millionen Aufrufe</td>
                            <td class="tg-1oat">für USD 100'000 </td>
                
                            
                          </tr>

                        </tbody>
                        </table>
                </div>
                </section>

                <section id="vergleich" className="section-wrapper keywords">
                    <div className="container">
                        <div className="title-wrapper">
                            <FramerMotionAnimation
                                type="h2" className="title text-center">
                                Wo steht man in der Social Media Welt?




                            </FramerMotionAnimation>
                        </div>
                 <p  className="desc-md mb-15 md:mb-15">Das sind die erfolgreichsten Plattformen nach Nutzern in Milliarden. Facebook liegt nach wie vor von der Beliebtheit bei Nutzern ganz vorne. Das App von ByteDance hat in den letzten Jahren massiv aufgeholt. 
            </p>
            <p  className="desc-md mb-15 md:mb-15">

                Eingangs haben wir uns gefragt, ob nun TikTok die am schnellsten wachsende Video-Plattform ist. YouTube ist im 2021 von 2.3 Milliarden auf 2.6 Milliarden User gewachsen. Es ergibt sich ein Nutzerwachstum von 13.04%.
            </p>
            <p  className="desc-md mb-15 md:mb-15">Weiter oben in diesem Beitrag haben wir bereits gesehen, dass die chinesische Videoplattform rund 25% gewachsen ist. <b>Es ist also richtig, TikTok ist von den grössten Social Media Unternehmen die am schnellsten wachsende Video-Plattform.</b> </p>
                
             <Image src={tiktokcomImage} alt="Vergleich Plattformen" />
             <small>Quelle unter anderem: <a href="https://www.statista.com/statistics/272014/global-social-networks-ranked-by-number-of-users/" title="Statista" target="__blank">Statista</a></small>

                </div>
                </section>


                <section id="influencerch" className="section-wrapper keywords">
                    <div className="container">
                        <div className="title-wrapper">
                            <FramerMotionAnimation
                                type="h2" className="title text-center">
                               TikToker in der Schweiz





                            </FramerMotionAnimation>
                        </div>
                 <p  className="desc-md mb-15 md:mb-15">Der mit Abstand bekannteste Influencer auf der Video-Plattform in der Schweiz ist thispronto. Sein Account wächst am stärksten und hat am meisten Follower. Hier die Zahlen über die zehn einflussreichsten Vertreter:</p>
                    <table class="tg">
                        <thead>
                          <tr>
                            <th class="tg-1oat">Nummer</th>
                            <th class="tg-1oat">Name</th>
                            <th class="tg-1oat">Follower</th>
                            <th class="tg-1oat">Vergleich Okt 21 / April 22</th>
                            <th class="tg-1oat">Link</th>
                            
                            
                          </tr>
                        </thead>
                        <tbody>
                          
                          

                         <tr>
                            <td class="tg-1oat">Nr. 1</td>
                            <td class="tg-1oat">thispronto</td>
                            <td class="tg-1oat">15.5 Mio.</td>
                            <td class="tg-1oat">+ 1.8 Mio.</td>
                            <td class="tg-1oat"><a href="https://www.tiktok.com/@thispronto" target="__blank" title="Profil">Profil</a></td>
                           
                            
                          </tr>

                          <tr>
                            <td class="tg-1oat">Nr. 2</td>
                            <td class="tg-1oat">noeminikita</td>
                            <td class="tg-1oat">12.7 Mio.</td>
                            <td class="tg-1oat">+ 1.1 Mio.</td>
                            <td class="tg-1oat"><a href="https://www.tiktok.com/@noeminikita" target="__blank" title="Profil">Profil</a></td>
                           
                            
                          </tr>

                          <tr>
                            <td class="tg-1oat">Nr. 3</td>
                            <td class="tg-1oat">nickychampa</td>
                            <td class="tg-1oat">12.0 Mio.</td>
                            <td class="tg-1oat">+ 0.3 Mio.</td>
                            <td class="tg-1oat"><a href="https://www.tiktok.com/@nickychampa" target="__blank" title="Profil">Profil</a></td>
                           
                            
                          </tr>

                          <tr>
                            <td class="tg-1oat">Nr. 4</td>
                            <td class="tg-1oat">deanschneider.official</td>
                            <td class="tg-1oat">10.0 Mio.</td>
                            <td class="tg-1oat">- 0.1 Mio.</td>
                            <td class="tg-1oat"><a href="https://www.tiktok.com/@deanschneider.official" target="__blank" title="Profil">Profil</a></td>
                           
                            
                          </tr>

                          <tr>
                            <td class="tg-1oat">Nr. 5</td>
                            <td class="tg-1oat">tugcedmr61</td>
                            <td class="tg-1oat">5.6 Mio.</td>
                            <td class="tg-1oat">+ 1.1 Mio.</td>
                            <td class="tg-1oat"><a href="https://www.tiktok.com/@tugcedmr61" target="__blank" title="Profil">Profil</a></td>
                           
                            
                          </tr>

                          <tr>
                            <td class="tg-1oat">Nr. 6</td>
                            <td class="tg-1oat">kris8an</td>
                            <td class="tg-1oat">3.1 Mio.</td>
                            <td class="tg-1oat">+ 0.3 Mio.</td>
                            <td class="tg-1oat"><a href="https://www.tiktok.com/@kris8an" target="__blank" title="Profil">Profil</a></td>
                           
                            
                          </tr>

                          <tr>
                            <td class="tg-1oat">Nr. 7</td>
                            <td class="tg-1oat">marcoandredasilva</td>
                            <td class="tg-1oat">2.9 Mio.</td>
                            <td class="tg-1oat">+ 0.2 Mio.</td>
                            <td class="tg-1oat"><a href="https://www.tiktok.com/@marcoandredasilva" target="__blank" title="Profil">Profil</a></td>
                           
                            
                          </tr>

                          <tr>
                            <td class="tg-1oat">Nr. 8</td>
                            <td class="tg-1oat">aditotoro</td>
                            <td class="tg-1oat">1.9 Mio.</td>
                            <td class="tg-1oat">+ 0.2 Mio.</td>
                            <td class="tg-1oat"><a href="https://www.tiktok.com/@aditotoro" target="__blank" title="Profil">Profil</a></td>
                           
                            
                          </tr>

                          <tr>
                            <td class="tg-1oat">Nr. 9</td>
                            <td class="tg-1oat">diana_mengyan</td>
                            <td class="tg-1oat">1.4 Mio.</td>
                            <td class="tg-1oat">+ 0.0 Mio.</td>
                            <td class="tg-1oat"><a href="https://www.tiktok.com/@diana_mengyan" target="__blank" title="Profil">Profil</a></td>
                           
                            
                          </tr>

                          <tr>
                            <td class="tg-1oat">Nr. 10</td>
                            <td class="tg-1oat">kevinbannier_</td>
                            <td class="tg-1oat">1.4 Mio.</td>
                            <td class="tg-1oat">+ 0.0 Mio.</td>
                            <td class="tg-1oat"><a href="https://www.tiktok.com/@kevinbannier_" target="__blank" title="Profil">Profil</a></td>
                           
                            
                          </tr>

                                                  


                        </tbody>
                        </table>
                </div>
                </section>

                     <WorkWithUs />

                <Comments slug={'tiktok-nutzer'} />



            </main>
        </>
    )
}



const post = {
                slug: 'tiktok-nutzer',
                shortTitle: 'TikTok Zahlen 2022',
                title: 'TikTok Zahlen 2022',
                description: '',
                image: tiktokImage,
                imageAlt: 'TikTok Zahlen 2022',
                readMoreUrl: '/seo/seo-kosten',
                date: '11.04.2022',
                update: '11.04.2022',
                readingTime: '7min Lesedauer',
                cta: 'TikTok Nutzerzahlen',
                category: 'Ratgeber',
                categoryUrl: '/blog',
                author: 'Sandro Huber',
                authorImage: sandro,
                contentList: [

                    {
                        item: 'Auf einen Blick',
                        link: '#uebersicht'
                    },
                    {
                        item: 'Aktive Nutzer weltweit',
                        link: '#aktivenutzer'
                    },
                    {
                        item: 'Aktive Nutzer Schweiz',
                        link: '#nutzerschweiz'
                    },
                    {
                        item: 'Demografie & Alter',
                        link: '#demografie'
                    },
                   
                    {
                        item: 'Verweildauer',
                        link: '#verweildauer'
                    },
                    
                    {
                        item: 'Downloads',
                        link: '#downloads'
                    },
                    {
                        item: 'Firmenbewertung',
                        link: '#firmenbewertung'
                    },
                    {
                        item: 'Vergleich',
                        link: '#vergleich'
                    },
                    {
                        item: 'Influencer Einnahmen',
                        link: '#influencer'
                    },
                    {
                        item: 'Influencer in der Schweiz',
                        link: '#influencerch'
                    },
                   
                  
                
                ],
                introTitle: '',
                introDescription: 'Ist TikTok wirklich die am stärksten wachsende Video-Plattform? \n\nWenn es bei Apps um Wachstum geht, interessieren immer die Nutzerzahlen. \n\nWen hat die Video-Plattform seit Q1 2022 hinter sich gelassen?\n\nHeute geht es um harte Zahlen des sozialen Netzwerks aus China. Los geht es!',
                
               
            
            };

const listId = 'test'
const listItems = [

                    {
                        data: 'Die Suchbegriffe'
                    },
                    {
                        data: 'Ein SEO-Tool'
                    },
                    {
                        data: 'Eine Planung'
                    },
                    {data: 'Eine Umsetzung'},

                    {data: 'Ein Reporting'},


                ];

