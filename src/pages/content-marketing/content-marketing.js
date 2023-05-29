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
import contentMarketingImage from '../../assets/images/seo/was-ist-content-marketing.webp'
import FAQ from "../../components/sections/FAQSEO";
import Comments from "../../components/sections/Comments";
import contentMarketingimage from '../../assets/images/content/content-marketing-grundlagen-beispiele.webp'
import allinOneViewData from '../../data/allinOneViewData';
import instituteImage from '../../assets/images/content/content-marketing-institute.webp'
import ListItems from '../../components/common/ListItems';
import checkCircleIcon from '../../assets/icons/check-circle-orange.svg';
import infographicImage from '../../assets/images/content/content-marketing-infografik.webp'
import cocacolaImage from '../../assets/images/content/coca-cola.webp'
import nikeImage from '../../assets/images/content/nike.webp'
import airbnbImage from '../../assets/images/content/airbnb.webp'
import kreislaufImage from '../../assets/images/content/kreislauf.webp'
import pushpullImage from '../../assets/images/content/push-pull-online-marketing.webp'
import storytellingImage from '../../assets/images/content/storytelling.webp'
import wasistseo from '../../assets/images/seo/was-ist-seo.jpg';
import ContentWithVideo from '../../components/sections/ContentWithVideo2';
import SiteAnalysis from '../../components/sections/SiteAnalysis';

const inter = Inter({subsets: ['latin']})


export default function contentMarketing() {
    

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

                <div className="bg-gray">
                <br /><br /><br />
                </div>

                <WhatGoogleSays post={post} />

                 <section id="entstehung" className="section-wrapper" >
                    <div className="container">
                        <div className="grid md:grid-cols-2 title-wrapper">
                            <FramerMotionAnimation
                                type="h2" className="title">
                                <div>Die Entstehung</div>
                                <div>Klassische Beispiele und Ursprung</div>
                            </FramerMotionAnimation>
                            <Image src={doubleArrowIcon} alt="arrows" className="ml-auto double-arrow-art" />
                        </div>
                        <div className="content-wrapper content-grid-wrapper grid md:grid-cols-2">
                            <FramerMotionAnimation
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="image-wrapper ">
                                <Image src={contentMarketingimage} alt="Was ist Content Marketing" className="main-image" />
                            </FramerMotionAnimation>
                            <FramerMotionAnimation
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }} >
                                <p className="desc-sm">Content-Marketing, wie wir es heute kennen und für digitale Kanäle nutzen, ist eine neue Erscheinung. Dennoch gibt es seit dem 19. Jahrhundert Unternehmen, die für Kunden hilfreiche Magazine herausbrachten. Diese Magazine dienten damals dazu, auf eine neue Art und Weise mit Kunden zu kommunizieren. Zu diesen Unternehmen gehörten unter anderem:</p>
                            </FramerMotionAnimation>
                        </div>
                        <FramerMotionAnimation
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            type="p" className="desc-md mt-100 md:mt-0">
                            <a href="https://www.michelin.com/en/" title="Michelin" target="__blank">Michelin</a>
                            </FramerMotionAnimation>
                            <FramerMotionAnimation
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            type="p" className="desc-md mt-50 md:mt-0">
                           <a href="https://www.deere.com/en/" title="John Deere" target="__blank">John Deere</a>
                            </FramerMotionAnimation>
                            <FramerMotionAnimation
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            type="p" className="desc-md mt-50 md:mt-0">
                            <a href="https://us.pg.com/pg-history/" title="Procter & Gamble" target="__blank">Procter & Gamble</a>
                            </FramerMotionAnimation>

                        <FramerMotionAnimation
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="content-flag bg-gray">
                            
                            <p className="desc-md">
                            John Deere wollte beispielsweise Bauern 
                            dabei helfen, besser und profitabler zu werden. 
                            Zu diesem Zweck brachte man ein Kundenmagazin 
                            mit dem Namen The Furrow (Deutsch: die Ackerfurche) heraus.

                            </p>
                            <p className="desc-md">
                                Eine Neuheit für damalige Zeiten. Denn im Magazin ging es darum, die Landwirte über neue Methoden und Technologien zu informieren. Nebenbei wurden die Einsatzmöglichkeiten von John {"Deere's"} neuester Agrartechnologie vorgestellt.
                            </p>
                             <p className="desc-md">
                                Michelin veröffentlichte im 19. Jahrhundert einen kostenlosen Reiseratgeber, um die Nachfrage nach Autos zu steigern.
                            </p>
                        </FramerMotionAnimation>
                            <br /><br />
                            <FramerMotionAnimation
                                type="h2" className="title">
                                <div>Die zweite Ära im digitalen Zeitalter</div>
                            </FramerMotionAnimation>
                            
                        
                        <div className="content-wrapper">
                            <FramerMotionAnimation
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="image-wrapper">
                               
                            </FramerMotionAnimation>
                            <Image src={doubleArrowIcon} alt="arrows" className="ml-auto double-arrow-art" />
                            <FramerMotionAnimation
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }} >
                                <p className="desc-sm">
                                    Ab 2004 kommt Content-Marketing aufgrund des digitalen Zeitalters in eine neue Phase. Die Marketingfachleute starten nun mit Blogs, Artikeln oder E-Books. Die Digitalisierung nahm ihren Lauf und veränderte ganze Branchen. Zu Zeiten als Filesharing Systeme die gesamte Musikbranche auf den Kopf stellte, wurden weitere Content Formate wie Podcasts, Videos und Webinars immer populärer.
                                    </p>
                            </FramerMotionAnimation>
                         <Image width={350} height={450} src={instituteImage} alt="content-marketing-institute" />
                        <FramerMotionAnimation
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            type="p" className="desc-md mt-100 md:mt-0">
                            Im 2010 wird das <a href="https://contentmarketinginstitute.com/" title="US-amerikanische Content Marketing Institute" target="__blank">US-amerikanische Content Marketing Institute</a> und die dazugehörigen Branchenmagazine gegründet. Es hilft bei der Schulung und Umsetzung anhand von Online-Weiterbildungen und verschiedenen Events. Und trägt damit entscheidend zur weltweiten Verbreitung bei.


                            </FramerMotionAnimation>
                            <FramerMotionAnimation
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            type="p" className="desc-md mt-50 md:mt-0">
                          Das durch die Digitalisierung veränderte Verhalten der Konsumenten, sowie die Abwendung von herkömmlichen Medien, haben die neue Form von Marketing enorm an Popularität gewinnen lassen.


                            </FramerMotionAnimation>
                           
                            </div>
                    </div>
                </section>

                <section id="gruende" className="section-wrapper" >
                    <div className="container">
                 
                            <FramerMotionAnimation
                                type="h2" className="title">
                                <div>Content Marketing: </div>
                                <div>5 Gründe die dafürsprechen</div>
                            </FramerMotionAnimation>
                            <Image src={doubleArrowIcon} alt="arrows" className="ml-auto double-arrow-art" />
                                <br />
                        <div className="content-wrapper">
                            
                            <FramerMotionAnimation
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }} >
                                <p className="desc-sm">Aus Sicht eines Unternehmens, 
                                welches Wachstum anstrebt, sprechen viele Gründe für 
                                eine Anwendung dieser Marketingmethode als Verstärkung des hauseigenen Vertriebs. In dieser 
                                Infografik finden Sie einen Überblick, der im 
                                2022 wichtigsten Gründe, die für Content-Marketing sprechen:</p>

                                <ListItems items={seoImportanceListItems} />
                                <br />
                                Quelle: <a href="https://www.demandmetric.com/content/content-marketing-infographic" title="demandmetric" target="__blank">demandmetric</a>, <a href="https://www.semrush.com/blog/content-marketing-statistics/" title="SEMrush" target="__blank">SEMrush</a>
                            </FramerMotionAnimation>
                        </div>
                        
                        <br /><br />
                        <FramerMotionAnimation
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="content-flag bg-gray">
                            
                            <p className="desc-md">
                                    Und ja, Content-Marketing ist sehr wichtig für Unternehmen generell, für Sales Manager oder Marketingspezialisten ebenfalls! Es bringt neue Kunden und Sie sollten es einsetzen, weiterlesen lohnt sich auf jeden Fall.

                            </p>
                            
                        </FramerMotionAnimation>
                    </div>
                </section>

                <section id="ziele" className="section-wrapper" >
                    <div className="container">
                        <div className="grid md:grid-cols-2 title-wrapper">
                            <FramerMotionAnimation
                                type="h2" className="title">
                                <div>Was sind die Ziele von</div>
                                <div>Content als Marketingstrategie</div>
                            </FramerMotionAnimation>
                            <Image src={doubleArrowIcon} alt="arrows" className="ml-auto double-arrow-art" />
                        </div>
                        <div className="content-wrapper content-grid-wrapper grid md:grid-cols-2">
                            <FramerMotionAnimation
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="image-wrapper">
                                <Image src={infographicImage} alt="Content Infografik" className="main-image" />
                            </FramerMotionAnimation>
                            <FramerMotionAnimation
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }} >
                                <p className="desc-sm">

                                Die Ziele sind das Rückgrat einer erfolgreichen Marketingstrategie. Um die Erfolge zu verbuchen, muss man die Ziele analysieren und anschliessend das Resultat überprüfen.
                                </p>

                                <ListItems items={goalsListItems} />
                                
                            </FramerMotionAnimation>
                        </div>
                        <FramerMotionAnimation
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            type="p" className="desc-md mt-100 md:mt-0">
                            Bei der Zieldefinition gibt es verschiedene Formeln, z.B. die SMART-Formel. Ziele müssen nach dieser Formel spezifisch, messbar, erreichbar und zeitgebunden sein:
                            </FramerMotionAnimation>
                            <FramerMotionAnimation
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            type="p" className="desc-md mt-50 md:mt-0">
                           Specific, Measurable, Achievable, Realistic und Time-bound

                            </FramerMotionAnimation>
                            <FramerMotionAnimation
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            type="p" className="desc-md mt-50 md:mt-0">
                           <b>Beispiel:</b> Im kommenden Halbjahr möchten wir die Conversions aus organischen Zugriffen auf der Leistungsseite XY um 15% steigern


                            </FramerMotionAnimation>

                       
                    </div>
                </section>

                <section id="beispiele" className="section-wrapper keywords">
                    <div className="container">
                        <div className="title-wrapper">
                            <FramerMotionAnimation
                                type="h2" className="title text-center">
                                3 Beispiele von bekannten Brands
                            </FramerMotionAnimation>
                        </div>
                       
                        <div className="inner-content-wrapper bg-gray">
                            <div className="content-wrapper content-grid-wrapper grid md:grid-cols-2">
                                <FramerMotionAnimation
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                >
                                    <h4 className="content-title">Coca Cola: The Original Way</h4>
                                    <Image src={cocacolaImage} alt="img" className="main-image" />
                                    <small>Quelle:<a href="https://www.youtube.com/c/originalway/featured" title="Coca Cola" target="__blank">Coca Cola</a></small>

                                    <p className="desc-md mt-15">
                                    Coca-Cola geht jetzt auch B2B - ja richtig gehört! Jetzt geht es einmal nicht um Milliarden von Softdrink-Konsumenten, sondern um Chefköche. Coca-Cola präsentiert die Serie „The Original Way“ – eine Reise zu den inspirierendsten Chefköchen Deutschlands und ihren originalen Gerichten.

                                    </p>
                                    <p className="desc-md mt-15">
                                    Der nächste Content-Marketing-Coup, auf jeden Fall! Ein besseres Beispiel als Coca-Cola gibt es nicht. Man versteht das Handwerk Marketing seit vielen Jahrzehnten. Wenn wir einen Weihnachtsmann sehen, denken wir mal schnell an das Softgetränk. Dies ist auf eine Kampagne aus dem Jahr 1931 zurückzuführen.

                                    </p>
                                </FramerMotionAnimation>
                                <FramerMotionAnimation
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    className="mb-80 md:mb-0"
                                >
                                    <h4 className="content-title">
                                        Nike: Nichts dem Zufall überlassen

                                    </h4>
                                    <Image src={nikeImage} alt="img" className="main-image" />
                                    <small>Quelle: <a href="https://www.nike.com/ch/" title="Nike" target="__blank">Nike</a></small>
                                    <p className="desc-md mt-15">
                                Nike verwendet eine Vielzahl von Channels und Formaten, um die Leute weltweit zu unterhalte und zu beraten. Mit aufwendig inszenierten YouTube Clips können Hobbysportler persönliche Aktivitäten aufzeichnen und sich mit anderen vergleichen. Durch diesen “User-generated” Content wächst die Plattform Nike weiter und kann gleichzeitig Werbung für die eigenen Produkte machen.
                                </p>
                                <p className="desc-md mt-15">
                                Zusätzlich bietet Nike kostenlose Smartphone-Apps für verschiedene Sportarten, mit spezifischen Funktionen an. Die Nike-Produkte sind immer präsent und ein Kauf über den Online-Shop meist nur einen Klick entfernt.
                                </p>

                                </FramerMotionAnimation>

                                <FramerMotionAnimation
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    className="mb-80 md:mb-0"
                                >
                                    <h4 className="content-title">
                                        Airbnb: Destinationen

                                    </h4>
                                    <Image src={airbnbImage} alt="img" className="main-image" />
                                   <small>Quelle: <a href="https://www.airbnb.de/s/Metropolitan-City-of-Rome--Italy/experiences" title="AirBnb" target="__blank">AirBnb</a></small>

                                    <p className="desc-md mt-15">
                                    Um den Leuten das Reisen näherzubringen, veröffentlicht Airbnb auf der Plattform spezielle Erfahrungen an Orten, die man auf der Welt gesehen haben muss. Darüber hinaus veröffentlicht man Sightseeing-Tipps und aktuelle Veranstaltungen in den jeweiligen Regionen. „Metropolitan City of Rome“ ist ein Beispiel für exzellente Inhalte, die einen Nutzer ansprechen, der demnächst in diese Region verreisen möchte.


                                    </p>

                                </FramerMotionAnimation>
                            </div>

                         

                           
                        </div>
                    </div>
                </section>

                <section id="b2b" className="section-wrapper" style={{ paddingBottom: 0}}>
                    <div className="container">

                 <div className="content-wrapper content-grid-wrapper grid md:grid-cols-2">
                            <FramerMotionAnimation
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                            >
                                <h2 className="content-title-md mb-50 md:mb-24">Content Marketing im B2B</h2>
                                <p className="desc-sm mb-15">
                                <a href="https://contentmarketinginstitute.com/articles/content-influences-purchasing-research/" title="Gemäss dieser Studie" target="__blank">
                                Gemäss dieser Studie</a> vom Content-Marketing-Institute informieren sich 81% Einkäufer vor der Kontaktaufnahme mit einem Verkäufer gründlich über die Produkte über die Webseite oder andere Kanäle. Das bedeutet, dass Content-Marketing im B2B wichtiger ist denn je, da auch die klassischen Kanäle immer weiter an Bedeutung verlieren.
                                </p>
                                

                            <p className="desc-sm mb-15 md:mb-15">
                               Die 81% zeigen ausserdem, dass der Erfolg eines B2B-Unternehmens massgeblich davon abhängig sein kann. Der Ausgangspunkt im B2B ist meist ein Magazin oder Blog, der die bestehende Corporate-Website ergänzt.


                            </p>

                            <p className="desc-sm mb-15 md:mb-15">
                             Wenn Sie als Geschäftsführer oder Salesmanager folgende Zustände erreichen möchten, dann ist Content Marketing das richtige Instrument für Sie:


                            </p>
                                
                            </FramerMotionAnimation>
                            <FramerMotionAnimation
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                            >
                                <ListItems items={b2bItems} />
                            </FramerMotionAnimation>

                            
                        </div>
                        <FramerMotionAnimation
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="content-flag bg-gray">
                            
                            <p className="desc-md">
                                Wenn Sie an einem Punkt sind, bei dem Sie kurz davor 
                                stehen, Marketing mit Content professionell bei 
                                Ihnen einführen zu wollen. Dann nehmen Sie 
                                unverbindlich mit unseren Spezialisten Kontakt auf. 
                                Als Content Marketing Agentur beschäftigen wir uns damit, den digitalem Vertrieb 
                                für KMU und Grossunternehmen in der 
                                Schweiz mit SEO- und Content-Dienstleistungen zu unterstützen.

                            </p>
                           
                        </FramerMotionAnimation>

                    </div>
                </section>

                <section id="andere" className="section-wrapper" style={{ paddingBottom: 0}}>
                    <div className="container">

                 <div className="content-wrapper">
                            <FramerMotionAnimation
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                            >
                                <h2 className="content-title-md mb-50 md:mb-24">Abgrenzung zu anderen Kanälen</h2>
                                <br />
                                 <h2 className="content-title-md mb-50 md:mb-24">Was ist Inbound Marketing?</h2>
                                <p className="desc-sm mb-15">
                                Täglich wird 3.5 Milliarden mal bei Google ein Suchbegriff eingegeben. Die halbe Welt scheint für zu lösende Probleme oder zu befriedigende Bedürfnisse im Internet zu recherchieren. Oder weil die Menschen eine bestimmte Information brauchen oder etwas Bestimmtes kaufen wollen.
                                 </p>

                            <p className="desc-sm mb-15 md:mb-15">
                              Aus Sicht des Inbound-Marketing sind das potentiellen Kunden, die auf der Suche nach etwas sind. Während bei Outbound, dem Gegenteil von Inbound, ungefragt potentielle Kunden mit Werbebotschaften beeinflusst werden, macht sich Inbound-Marketing die Tatsache zunutze, dass es ein Bedürfnis gibt.
                            </p>

                           
                                
                            </FramerMotionAnimation>
                            
                            
                        </div>
                        <FramerMotionAnimation
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="content-flag bg-gray">
                            <h4 className="content-title font-medium">
                                <a href="https://de.wikipedia.org/wiki/Inbound-Marketing" title="Wikipedia Definition" target="__blank">
                                Wikipedia Definition</a>
                            </h4>
                            <p className="desc-md">
                                Inbound-Marketing (englisch inbound eingehend oder ankommend) 
                                ist eine Marketing-Methode, die darauf basiert, von potenziellen Kunden aktiv 
                                aufgesucht und gefunden zu werden. Die Kunden kommen auf einen zu. Es steht im 
                                Gegensatz zum klassischen Outbound-Marketing (Interruption marketing), bei dem 
                                Nachrichten an Kunden gesendet werden,[1] wie es per Postwurfsendung, 
                                Radiowerbung, Fernsehwerbung, Flyer, Spam, Telefonmarketing und klassischer 
                                Werbung üblich ist. Inbound-Marketing bedient sich neben Content-Marketing-Methodiken 
                                auch Maßnahmen zur Kundengewinnung und Kundenbindung wie E-Mail-Marketing, CRM und
                                Lead Nurturing, die durch Marketing Automation unterstützt werden können.
                                [2] Beim Inbound-Marketing treffen die beiden Aspekte Marketing und Vertrieb (Sales) aufeinander. 
                                Die grundlegende Philosophie ist hierbei immer die Annahme, dass Kunden ein Problem haben, 
                                welches sie gelöst haben wollen und freiwillig zu einem Anbieter kommen. Das steht im Gegensatz 
                                zu bisherigen Vertriebsmethoden wie z. B. der Kaltakquise.

                            </p>
                           
                        </FramerMotionAnimation>

                    </div>
                </section>


                <section id="contentvsinbound" className="section-wrapper" >
                    <div className="container">
                        <div className="grid md:grid-cols-2 title-wrapper">
                            <FramerMotionAnimation
                                type="h2" className="title">
                                <div>Content Marketing vs. </div>
                                <div>Inbound Marketing</div>
                            </FramerMotionAnimation>
                            <Image src={doubleArrowIcon} alt="arrows" className="ml-auto double-arrow-art" />
                        </div>
                        <div className="content-wrapper content-grid-wrapper grid md:grid-cols-2">
                            <FramerMotionAnimation
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="image-wrapper bg-gray">
                                <Image src={kreislaufImage} alt="Kreislauf" className="main-image" />
                            </FramerMotionAnimation>
                            <FramerMotionAnimation
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }} >
                                <p className="desc-sm">Aus unserer Sicht ist der Unterschied nicht so gross, wie viele Experten behaupten. Beispielsweise gibt es Aussagen, dass Content Marketing im Gegensatz zu Inbound Marketing keinem geregelten Prozess folgt.
                                </p>

                                <p className="desc-sm">Wir sehen das komplett anders, sehen wir uns den Prozess einmal im Detail an (siehe Grafik).
                                </p>
                                
                                <small> Quelle:<a href="https://www.marketing-boerse.de/fachartikel/details/1717-so-machen-sie-richtig-gutes-content-marketing/138324" title="Marketing Börse" target="__blank"> Marketing Börse</a></small>

                            </FramerMotionAnimation>
                        </div>
                        <FramerMotionAnimation
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            type="p" className="desc-md mt-100 md:mt-0">
                                Wie man sehen kann, folgt der Kreislauf einem im Marketing üblichen Ablauf von Analyse, Strategie, Planung und Implementierung sowie Kontrolle. Was viele missinterpretieren ist, dass bei Content-Marketing einfach etwas gemacht wird ohne strukturierte Vorgehensweise und dass es nur eine geringe bis gar keine Erfolgskontrolle gibt.



                            </FramerMotionAnimation>
                            <FramerMotionAnimation
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            type="p" className="desc-md mt-50 md:mt-0">
                            Aus unserer Sicht ist das abhängig davon, wie das Team des Anbieters strukturiert ist, der Content-Marketing ausführt. Denn der grosse Vorteil dabei ist, wenn der weiterführende Teil des Conversiontracking oder Retargeting mithilfe von weiteren Distributionskanälen sehr nahe am Team für Content arbeitet.

                            </FramerMotionAnimation>
                            <FramerMotionAnimation
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            type="p" className="desc-md mt-50 md:mt-0">
                                Aus diesem Grund macht es eigentlich keinen Sinn eine reine Inbound-Marketingagentur zu haben, da sinnvolle Synergien für Kunden verloren gehen. Eine andere Möglichkeit ist, solche Strukturen mit strategischen Partnerschaften abzudecken.

                                </FramerMotionAnimation>
                            <br />

                            <div className="grid md:grid-cols-2 title-wrapper">
                            <FramerMotionAnimation
                                type="h4" className="title">
                                <div>Einordnung von Content im Online-Marketing </div>
                                <FramerMotionAnimation
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            type="p" className="desc-md mt-50 md:mt-0">
                                Online Marketing funktioniert nur dann, wenn es einen ausgewogenen 
                                Mix an Pull- und Push-Marketing-Strategien gibt. 
                                Für mehr Details zu solchen Strategien empfehlen wir diesen <a href="https://www.brand-doctor.net/blog/push-oder-pull" title="Beitrag von brand-doctor.net" target="__blank">Beitrag 
                                von brand-doctor.net</a>. Den notwendigen Mix bestimmt man anhand der 
                                Ausgangslage, der Zielgruppe, Branche und der Konkurrenz.

                                </FramerMotionAnimation>
                                
                            </FramerMotionAnimation>
                            
                        </div>
                        <div className="content-wrapper content-grid-wrapper grid md:grid-cols-2">
                            <FramerMotionAnimation
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="image-wrapper">
                                <Image src={pushpullImage} alt="push pull Image" className="main-image" />
                            </FramerMotionAnimation>
                            <FramerMotionAnimation
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }} >
                                <p className="desc-sm">Wenn ein Kunde sich in der Customer-Journey noch ganz am Anfang befindet, sind Push-Werbebotschaften eher kontraproduktiv und führen im schlimmsten Fall zu einem Vertrauensverlust gegenüber der Marke des Unternehmens.

                                </p>

                                <FramerMotionAnimation
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="content-flag bg-gray">
                            
                            <p className="desc-md">
                                Wenn ein potentieller Interessent nach einem spezifischen Inhalt sucht, den wir als Anbietern liefern können, dann spielt der Content das volle Potential innerhalb der Online-Marketingstrategie aus.
                             </p>
                           
                        </FramerMotionAnimation>
                                

                            </FramerMotionAnimation>
                        </div>


                    </div>
                </section>

                 <section id="weshalb" className="section-wrapper">
                    <div className="container">
                        <div className="title-wrapper">
                            <FramerMotionAnimation
                                type="h2" className="title text-center">
                                Weshalb Sie eine Content-Marketing-Strategie brauchen

                            </FramerMotionAnimation>
                            <Image src={doubleArrowIcon} alt="arrows" className="ml-auto double-arrow-art" />
                        </div>

                        <FramerMotionAnimation
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                        >
                            <p className="desc-sm mb-15">
                                Jemand hat positive Erfahrungen mit Content auf der Unternehmenswebsite gemacht, dann erinnert diese Person sich ziemlich sicher künftig weiter an diese Interaktion. Ein Konzept ist ausschlaggebend dafür, was jegliche Personen über die eigene Marke denken.


                            </p>
                            <p className="desc-sm mb-100 md:mb-50">
                                Man sollte ein Konzept dafür haben, weil man die Loyalität und das Vertrauen der Kunden, potentiellen Kunden oder allgemein Personen, die mit dem eigenen Unternehmen interagieren, nicht auf die leichte Schulter nehmen sollte. Es ist ein hervorragendes Instrument, um dauerhafte Beziehungen zu einem vorteilhaften Publikum aufzubauen.


                            </p>
                        </FramerMotionAnimation>
                        
                        <div className="content-wrapper">
                            <FramerMotionAnimation
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                            >
                                <h4 className="content-title-md mb-50 md:mb-24">Content Strategie vs. Content-Marketing-Strategie</h4>
                                <p className="desc-sm mb-15">
                                   Die Content-Marketing-Strategie befasst sich damit, mit welchen Kommunikationsmassnahmen die Zielgruppe eines Unternehmens erreicht werden soll. Es geht darum, wie das Unternehmen als Marke wahrgenommen wird.


                                </p>
                                <p className="desc-sm mb-15">
                                Bei der Content-Strategie geht es um die Umsetzung der Inhalte. Beispielsweise die Planung und Verwaltung von Inhalten auf einer Webseite.
                                 </p>

                                
                            </FramerMotionAnimation>
                            
                        </div>
                    </div>
                </section>

                <section id="story" className="section-wrapper bg-gray">
                    <div className="container">
                        <div className="title-wrapper">
                            <FramerMotionAnimation
                                type="h2" className="title text-center">
                                Storytelling im Content-Marketing

                            </FramerMotionAnimation>
                            <Image src={doubleArrowIcon} alt="arrows" className="ml-auto double-arrow-art" />
                        </div>
                        <div className="content-wrapper content-grid-wrapper grid md:grid-cols-2">
                            <FramerMotionAnimation
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="image-wrapper p-0 bg-gray">
                                <Image src={storytellingImage} alt="Storytelling im Content Marketing" className="main-image" />
                            </FramerMotionAnimation>
                            <FramerMotionAnimation
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                            >
                                <p className="desc-sm mb-15">Beim Storytelling (deutsch: Geschichten erzählen) werden Informationen durch das Erzählen oder Darstellen einer Geschichte vermittelt. Es wird neben dem Marketing auch in der Bildung, im Journalismus und im PR eingesetzt.
                                </p>
                                <p className="desc-sm mb-0">Eine Story sollte zum Anlass passen und die Verbindung zum Produkt oder der Dienstleistung nicht aus der Luft gegriffen wirken. Eine Story muss dabei keineswegs komplex sein, oder gar epische Ausmasse annehmen. Vielmehr gilt es, die Zielgruppe zu fesseln, indem der Nutzen in einer kreativen Botschaft vermittelt wird.
                            </p>
                            </FramerMotionAnimation>
                        </div>
                        <FramerMotionAnimation
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            type="p" className="desc-md mb-0">
                            Storytelling ist im Content-Marketing von grosser Bedeutung. Die Aufmerksamkeitsspannen der Menschen werden kürzer, während die Anzahl der Inhalte exponentiell wächst. Um von Bedeutung zu sein, müssen Unternehmen daher gute Geschichten in die Unternehmensinhalte einbauen.

                            </FramerMotionAnimation>
                            
                    </div>
                </section>


                 <section id="formate" className="section-wrapper bg-gray">
                    <div className="container">
                        <div className="title-wrapper">
                            <FramerMotionAnimation type="h2" className="title text-center">
                                Die beliebtesten Content-Formate

                            </FramerMotionAnimation>
                        </div>

                        <div className="content-wrapper content-grid-wrapper grid md:grid-cols-2">
                            <FramerMotionAnimation
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                            >
                                <p className="desc-md mb-15">
                                    Während Videos immer weiter 
                                    an Bedeutung gewinnen, ist die jahrelange Nr. 1, 
                                    der Text-Content nicht mehr so populär wie vor geraumer Zeit. 
                                    Jedoch ist der Text noch in jedem anderen Format omnipräsent, 
                                    da es in der Regel eine Beschreibung zum jeweiligen Format gibt. 
                                    So zum Beispiel auch bei der Optimierung von Videos für YouTube, 
                                    was wir im Beitrag <Link href="/seo/video-seo" title="Video SEO">Video SEO</Link> im Detail ausführen.


                                </p>
                                <p className="desc-md mb-15">
                                    Was sind denn nun die gängigsten Formate neben generellem Text.


                                    </p>
                                    <p className="desc-md mb-15">
                                   Unsere Top 10 Auswahl:


                                </p>
                            </FramerMotionAnimation>
                            <ListItems items={contentFormats} />


                        </div>
                        <p className="desc-md mb-15">
                                   Das Format Video wird 
                                   ganz klar weiter rasant wachsen, denn kein Content Format schafft es, 
                                   Emotionen so zu transportieren wie beispielsweise qualitative Videos 
                                   zu einem bestimmten Thema. Zwischen 2018 und 2020 wuchs beispielsweise 
                                   die Video-App TikTok um 1157.76%. Weitere interessante Fakten zu 
                                   Statistiken der Video-App aus China finden Sie in unserem Beitrag <Link href="/marketing/tiktok-nutzer" title="Tiktok User">Tiktok User</Link>.




                                </p>
                    </div>
                </section>

                 <section id="tipps" className="section-wrapper keywords">
                    <div className="container">
                        <div className="title-wrapper">
                            <FramerMotionAnimation
                                type="h2" className="title text-center">
                              Aktuelle Content Marketing Tipps

                            </FramerMotionAnimation>
                        </div>
                        <FramerMotionAnimation
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            type="p" className="desc-md mb-50 md:mb-20">
                            Content ist verbreiteter als je zuvor, nur im Juni 2022 wurden beim im Volksmund bekanntesten CMS Wordpress rund 95 Mio. Posts veröffentlicht. Das ist eine unglaubliche Zahl und bei Weitem noch nicht alles. Es sagt uns, dass Unternehmen mehr denn je auf Content setzten.


                        </FramerMotionAnimation>
                       

                        <div className="inner-content-wrapper bg-gray">
                            <div className="content-wrapper content-grid-wrapper grid md:grid-cols-2">
                                <FramerMotionAnimation
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                >
                                    <h4 className="content-title">Content Design</h4>
                                    <p className="desc-md mt-15">
                                    Design ist und war schon immer das Mittel, um Inhalte ansprechend darzustellen. In Zeiten, in denen auf Wordpress täglich 95. Mio. Posts abgesetzt werden, muss man den Leser visuell abholen. Es gibt kaum jemanden, der ganze Textseiten online liest. Wird Content Design professionell angewendet, ist die Performance bei Suchmaschinen auch deutlich besser.
                                        </p>
                                </FramerMotionAnimation>
                                 <FramerMotionAnimation
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                >
                                    <h4 className="content-title">Qualität statt Quantität</h4>
                                    <p className="desc-md mt-15">
                                   Wenn man keine Armee von Content Writern hat, kann man nicht regelmässig grosse Mengen an hochwertige Inhalte schreiben. Deshalb ist es Fakt, dass die Zeit besser in hervorragenden Content investiert wird, statt unzählige Blogs zu veröffentlichen. Aus diesem Grund sucht man bei uns vergeblich nach einem Beitragsfeed mit wöchentlichen Updates, diesen gibt es nicht. Bei uns gibt es nur vom Team aufwändig verfasste Content Pieces, die einen Mehrwert bringen für unsere Zielgruppe.
                                   </p>
                                    </FramerMotionAnimation>
                                 <FramerMotionAnimation
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                >
                                    <h4 className="content-title">Videos, Videos und nochmals Videos</h4>
                                    <p className="desc-md mt-15">
                                    Noch nicht in Videos investiert? Dann ist jetzt höchste Zeit. Es gibt Videos bei Facebook und Instagram ja, aber wenn man eine Reichweite aufbauen möchte, dann ist es YouTube, das helfen kann.

                                    </p>

                                    </FramerMotionAnimation>

                                    <FramerMotionAnimation
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                >
                                    <h4 className="content-title">User-generated Content</h4>
                                    <p className="desc-md mt-15">
                                    Bei User-Generated-Content nutzt man die Inhalte, die von externen Usern für die eigenen Marketingzwecke generiert wurden. Dabei kommen wie auch beim Content-Marketing generell verschiedene Formate zum Einsatz. Dies können Testimonials, Videos oder Kommentare unter Blogartikeln sein.

                                        </p>
                                        <p className="desc-md mt-15">
                                        Einer der grössten Vorteile bei User-Generated-Content ist, dass man keine eigenen Ressourcen für die Erstellung des Contents einsetzten muss.

                                        </p>
                                        <p className="desc-md mt-15">
                                        Gemäss Google müssen Inhalte, die für SEO perfekt sind, folgenden Kriterien entsprechen:
                                         </p>


                                          <p className="desc-md mt-15">
                                            User-Generated-Content ist die am vertrauenswürdigste, authentischste und interaktivste Form von Inhalten und wird den Standards von der Suchmaschine mehr als gerecht. Deshalb sollte dieser Bereich nicht unterschätzt werden.


                                         </p>

                                          <p className="desc-md mt-15">
                                        Für mehr zum Thema empfehlen wir diesen <a href="https://www.sortlist.de/blog/user-generated-content/" title="Beitrag bezüglich User Generated Content" target="__blank">Beitrag bezüglich User Generated Content</a>.

                                         </p>

                                </FramerMotionAnimation>
                            </div>

                            <FramerMotionAnimation
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="mb-20 md:mb-12">
                                <p className="desc-md mt-15">
                                    Neben diesen drei Tools gibt es eine Vielzahl weiterer, die zur Keyword-Analyse, 
                                    zum Monitoring und für die technische Optimierung verwendet werden können. 
                                    Sind Sie auf der Suche nach einem geeigneten Tool, dann lesen 
                                    Sie unseren Artikel zum Thema <Link href="/seo/tools" title="SEO-Tools">SEO-Tools </Link> 
                                    im Vergleich. Unsere Agentur verwendet weitere interne Tools, 
                                    die Keyword-Daten verfeinern können, diese sind jedoch unseren 
                                    Kunden vorbehalten. Bei Interesse dürfen Sie gerne auf uns zukommen.
                                </p>
                            </FramerMotionAnimation>

                        </div>
                    </div>
                </section>

                <ContentWithVideo id={post.videoID} title={post.videoTitle} className="bg-gray"
                                  videoUrl={post.videoURL} thumbnail={post.videoThumbnail}
                                  description={post.videoDescription} description2={post.videoDescription2}
                                  list={post.videoList}
                                  />

                                  <section id="tools" className="section-wrapper keywords">
                    <div className="container">
                        <div className="title-wrapper">
                            <FramerMotionAnimation
                                type="h3" className="title text-center">
                              Die Rolle von Content im SEO


                            </FramerMotionAnimation>
                        </div>
                        <FramerMotionAnimation
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            type="p" className="desc-md mb-50 md:mb-20">
                            Content ist ausgesprochen wichtig für SEO. Die Suchmaschinen benötigen genügend Inhalte, um die Webseite zu analysieren und die Position in den Suchergebnissen, also dem Ranking, zu bestimmen. Wenn Sie keine solide Content-Strategie haben, werden die Seiten Ihrer Website niemals gesehen oder geteilt werden. Somit ist Content einer der drei wichtigen Grundsäulen von SEO.


                        </FramerMotionAnimation>

                         <FramerMotionAnimation
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            type="p" className="desc-md mb-50 md:mb-20">
                            Es sollte gute Inhalte liefern, die dem Leser einen Mehrwert bringen, ihn unterhalten, informieren oder ihm helfen.

                        </FramerMotionAnimation>
                       

                       
                    </div>
                </section>

                <section id="kpis" className="section-wrapper bg-gray" style={{ paddingBottom: "1rem", marginBottom: 0}}>
                    <div className="container">

                 <div className="content-wrapper">
                            <FramerMotionAnimation
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                            >
                                <h2 className="content-title-md mb-50 md:mb-24">Wichtige KPIs</h2>
                                <p className="desc-sm mb-15">
                                Die Key Performance Indicators kurz KPI dienen im Content-Marketing dazu, eine Reihe von Kennzahlen zu überwachen, um den Fortschritt der Strategie zu überprüfen.

                                </p>
                                

                            <p className="desc-sm mb-15 md:mb-15">
                               Die Auswahl der relevanten KPIs hängt in erster Linie von den Zielen der Content-Marketing-Strategie ab. Ein anderer ernstzunehmender Faktor ist das Format, je nachdem ob es sich um Webcontent, Videos oder andere Formate handelt, sind andere KPI von Bedeutung.



                            </p>

                            <p className="desc-sm mb-15 md:mb-15">
                             Das Content-Marketing setzt zum grössten Teil auf organische Massnahmen, deren Erfolgsmessung eher mittelfristig erfolgt. Deshalb lassen sich Auswirkungen beispielsweise auf den ROI nur langfristig und nicht direkt messen. Es gibt auch eine Vielzahl von positiven Effekten, wie z.B. Markenbekanntheit, die nur indirekt messbar bzw. auf eine bestimmte Massnahme zurückzuführen ist.



                            </p>
                            <p className="desc-sm mb-15 md:mb-15">
                            Wiederum im SEO-Bereich kann genau gemessen werden, wie viel Suchanfragen für eine Marke bestehen. Jedoch nicht im Detail, auf welche Massnahmen dies zurückzuführen ist. Nun sehen wir uns die wichtigsten KPI konkret an:
                             </p>

                                
                            </FramerMotionAnimation>
                       </div>     

                    </div>
                </section>


                 <SiteAnalysis data={post} />

                 <section id="fazit" className="section-wrapper bg-gray" style={{ paddingBottom: "1rem", marginBottom: 0}}>
                    <div className="container">

                 <div className="content-wrapper">
                            <FramerMotionAnimation
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                            >
                                <h2 className="content-title-md mb-50 md:mb-24">Fazit: Was ist Content Marketing?</h2>
                                <p className="desc-sm mb-15">
                                Nachdem nun geklärt ist, 
                                was Content-Marketing genau ist, nehmen Sie diesen Beitrag 
                                hoffentlich zur Vorlage, um bei Ihnen den Bereich voranzutreiben. 
                                Der Zeitpunkt ist jetzt der Richtige. Es ist so wichtig, 
                                weil man den digitalen Vertrieb und Marketing-Mix ergänzen und 
                                gleichzeitig wirtschaftlich davon profitieren kann. 


                                </p>
                                

                            <p className="desc-sm mb-15 md:mb-15">
                               Das Content Marketing ist gut, wenn die Zielgruppe wirklich kriegt, wonach sie gesucht hat. Dann werden langfristig die Kunden zu einer Kaufentscheidung kommen, vielleicht sogar direkt im Internet oder indem diese durch einen offline Kaufprozess bei Ihnen führen.




                            </p>

                            <p className="desc-sm mb-15 md:mb-15">
                             Die Sales Manager und Marketer in Ihrem Unternehmen werden es Ihnen ebenfalls danken...

                            </p>
                            

                                
                            </FramerMotionAnimation>
                       </div>     

                    </div>
                </section>

                <Comments slug={'content-marketing'} />



            </main>
        </>
    )
}



const post =  {
               
                slug: 'content-marketing',
                shortTitle: 'Was ist Content Marketing',
                title: 'Ein Content Marketing Ratgeber',
                description: 'In diesem umfassenden Guide erklären wir die Grundlagen von Content Marketing und ob es wichtig ist. Und wie es anhand einiger Tipps im Marketing eingesetzt werden sollte.',
                image: contentMarketingImage,
                imageAlt: 'Content Marketing',
                readMoreUrl: '/content-marketing/content-marketing',
                date: '08.07.2022',
                update: '08.07.2022',
                readingTime: '15min Lesedauer',
                cta: 'Was ist Content Marketing',
                author: 'Sandro Huber',
                authorImage: sandro,
                

                googleId: 'definition',
                introTitle: 'Was ist Content Marketing?',
                introDescription: 'Content Marketing ist eine Marketing Ausrichtung, bei der mithilfe von Inhalten eine klar definierte Zielgruppe angesprochen wird. Hierfür wird informierender und beratender Content publiziert, mit dem Ziel, die Zielgruppe vom eigenen Unternehmen zu überzeugen und als Kunden zu gewinnen.',
                
                videoID: 'seocontent',
                videoTitle: 'SEO-Content vs. Content',
                videoURL: 'https://www.youtube.com/embed/1YXnseEjaKs',
                videoDescription: 'Unter Suchmaschinenoptimierung (Abkürzung: SEO) werden technische und inhaltliche Massnahmen verstanden, um die Rankings einer Website in den Suchergebnissen zu verbessern.',
                videoDescription2: 'Suchmaschinen erkennen anhand verschiedener Faktoren, ob User mit einer Webseite oder Inhalt zufrieden waren.',
                videoThumbnail: wasistseo,
                contentList: [

                    {
                        item: 'Definition',
                        link: '#definition'
                    },
                    {
                        item: 'Die Entstehung',
                        link: '#entstehung'
                    },
                    {
                        item: 'Content Marketing: 5 Gründe die dafürsprechen',
                        link: '#gruende'
                    },
                    {
                        item: 'Ziele',
                        link: '#ziele'
                    },
                    {
                        item: '3 Beispiele',
                        link: '#beispiele'
                    },
                    {
                        item: 'Einsatz im B2B',
                        link: '#b2b'
                    },
                    {
                        item: 'Abgrenzung zu anderen Kanälen',
                        link: '#andere'
                    },
                    {
                        item: 'Weshalb Sie eine Content-Marketing-Strategie brauchen',
                        link: '#weshalb'
                    },
                    {
                        item: 'Storytelling',
                        link: '#story'
                    },
                    {
                        item: 'Die beliebtesten Content Formate',
                        link: '#formate'
                    },
                    {
                        item: 'Content Marketing Tipps 2022',
                        link: '#tipps'
                    },
                    {
                        item: 'SEO-Content vs. Content',
                        link: '#seocontent'
                    }
                    ,
                    {
                        item: 'Wichtige KPIs',
                        link: '#kpis'
                    },
                    {
                        item: 'Checkliste',
                        link: '#checkliste'
                    }
                    ,
                    {
                        item: 'Fazit',
                        link: '#fazit'
                    }
                
                    
                    
                    
                    
                  
                
                ],
                itemsCheckId: 'checkliste',
                textblockTitle: '',
                textBlock: '',
                itemsLeftSubtitle1: 'Google Search Console',
                itemsLeft: [

                    {
                        data: 'Anzahl organische Klicks',
                    },
                    {
                        data: 'Anzahl organische Impressionen',
                    },
                    {
                        data: 'Durchschnittliche Klick-through Rate (CTR)',
                    },
                    {
                        data: 'Durchschnittliche Position bei der Suchmaschine',
                    },
                    {
                        data: 'Anzahl und Entwicklung der Brand-Searches',
                    }
                   ],
                itemsrightSubtitle: 'Google Analytics',
                itemsRight: [
                    {
                        data: 'Durchschnittliche Interaktionsdauer',
                    },
                    {
                        data: 'Neue und wiederkehrende Nutzer',
                    },
                    {
                        data: 'Downloads von Content-Pieces (z.B. Kostenloses E-Book)',
                    },
                    {
                        data: 'Absprungrate (gibt es ab GA 4 nicht mehr)',
                    },
                    {
                        data: 'Conversionrate vom organischen Traffic',
                    },
                    {
                        data: 'Anzahl von definierten Ereignissen (Advanced)',
                    },
                    {
                        data: 'Conversion Pfade der organischen Besucher (Advanced)',
                    },


                ],
                itemsrightSubtitle2: 'Digitaler Vertrieb',
                itemsRight2: [
                    {
                        data: 'Leadentwicklung bzw. gewonnene Interessenten über Online-Shop bzw. Webseite',
                    },
                     {
                        data: 'Digitales Umsatzwachstum',
                    },
                    {
                        data: 'Umsatz nach Produkten',
                    },
                    {
                        data: 'Kundenbindungsrate',
                    },
                    {
                        data: 'Umsatzsteigerung bei bestehenden Kunden',
                    },
                    {
                        data: 'Direkte Kontaktanfragen',
                    },
                    {
                        data: 'Offertenanfragen',
                    },


                ],
               
                
                
            };



const contentFormats = [

    {
        icon: checkCircleIcon,
        text: 'Videos',
    },
    {
        icon: checkCircleIcon,
        text: 'Anleitungen und Tutorials',
    },
    {
        icon: checkCircleIcon,
        text: 'Infografiken',
    },
    {
        icon: checkCircleIcon,
        text: 'Blogbeiträge',
    },
    {
        icon: checkCircleIcon,
        text: 'Erfolgsstorys',
    },
    {
        icon: checkCircleIcon,
        text: 'Testimonials',
    },
    {
        icon: checkCircleIcon,
        text: 'Datenvisualisierungen',
    },
    {
        icon: checkCircleIcon,
        text: 'Interviews',
    },
    {
        icon: checkCircleIcon,
        text: 'White Papers',
    },
    {
        icon: checkCircleIcon,
        text: 'Studien und Umfragen',
    },


    ]





const b2bItems = [

    {
        icon: checkCircleIcon,
        text: 'Kundenbindung intensivieren',
    },
    {
        icon: checkCircleIcon,
        text: 'Neue Vertriebsstrategien erschliessen',
    },
    {
        icon: checkCircleIcon,
        text: 'Vertrauen bei potentiellen Kunden stärken',
    },
    {
        icon: checkCircleIcon,
        text: 'Zugriffe und Anfragen über die Webseite erhöhen',
    },
    {
        icon: checkCircleIcon,
        text: 'Wettbewerbsfähigkeit gegenüber der Konkurrenz verbessern',
    },


    ]


const goalsListItems = [

    {
        icon: checkCircleIcon,
        text: 'Markenbekanntheit steigern',
    },
    {
        icon: checkCircleIcon,
        text: 'Organischen Traffic steigern',
    },
    {
        icon: checkCircleIcon,
        text: 'Leadgenerierung',
    },
    {
        icon: checkCircleIcon,
        text: 'Interessengruppen für Retargeting',
    },
    {
        icon: checkCircleIcon,
        text: 'Conversions steigern',
    },
    {
        icon: checkCircleIcon,
        text: 'Kundenbindung',
    },
    {
        icon: checkCircleIcon,
        text: 'Upselling',
    },
    {
        icon: checkCircleIcon,
        text: 'Suchmaschinenranking verbessern',
    },

    ]

const seoImportanceListItems = [
    {
        icon: checkCircleIcon,
        text: 'Content Marketing kostet 62% weniger als traditionelle Marketingkanäle',
    },
    {
        icon: checkCircleIcon,
        text: 'B2B Unternehmen mit Blog erhalten 67% monatliche Leads mehr als die, die es nicht machen',
    },
    {
        icon: checkCircleIcon,
        text: '70% der Internetnutzer lesen vorzugsweise hochwertige Artikel oder Webseiteninhalte anstatt eine Werbeanzeige',
    },
    {
        icon: checkCircleIcon,
        text: 'Content Marketing bringt 55% mehr Traffic als Alternativen',
    },
    {
        icon: checkCircleIcon,
        text: 'Die Top-Unternehmen wollen im 2022 das Budget für Content um 72% erhöhen',
    },

];