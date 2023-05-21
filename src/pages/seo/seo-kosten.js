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

                <ContentWithVideo id={post.videoID} title={post.videoTitle} className="bg-gray"
                                  videoUrl={post.videoURL} thumbnail={post.videoThumbnail}
                                  description={post.videoDescription} description2={post.videoDescription2}
                                  list={post.videoList} imageAlt={post.videoThumbnailDesc} />

                 <section id="kosten" className="section-wrapper keywords">
                    <div className="container">
                        <div className="title-wrapper">
                            <FramerMotionAnimation
                                type="h2" className="title text-center">
                                Was versteht man unter SEO-Kosten?
                            </FramerMotionAnimation>
                        </div>
                        <FramerMotionAnimation
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            type="p" className="desc-md mb-15 md:mb-15">
                        Generell gibt es zwei verschiedene Szenarien, um SEO zu betreiben:
                        </FramerMotionAnimation>
                        

                        <div className="inner-content-wrapper bg-gray" style={{ padding: "1rem"}}>
                            <div className="content-wrapper content-grid-wrapper grid md:grid-cols-2">
                                <FramerMotionAnimation
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                >
                                    <h4 className="content-title">Man macht SEO selbst</h4>
                                   
                                </FramerMotionAnimation>
                                <FramerMotionAnimation
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    className="md:mb-0"
                                >
                                    <h4 className="content-title">
                                        Man beauftragt eine Agentur
                                    </h4>

                                </FramerMotionAnimation>
                            </div>

                            
                        </div>
                    </div>
                </section>

                <section id="analyse" className="section-wrapper" style={{ padding: 0}}>
                    <div className="container">
                        
                        <FramerMotionAnimation
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                        >
                            <p className="desc-sm">
                                In beiden Szenarien ist die Frage, was wird für SEO benötigt?


                            </p>
                            <p className="desc-sm mb-15 md:mb-15">
                              Folgendes:
                            </p>
                           
                        </FramerMotionAnimation>
                        
                    </div>
                </section>

                <section id={listId} className="analysis-factors container" style={{ paddingTop: 0}} >
                    
                
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
                            <FramerMotionAnimation type="p" className="content-flag description">
                            Es braucht also einen internen oder externen Spezialisten, der die Situation analysiert und die notwendigen Schritte einleitet. Die SEO-Kosten sind also die kumulierten Arbeitszeiten und allfällige Kosten für Tools, die für die Optimierung Ihrer Webseite anfallen.

                            </FramerMotionAnimation>

                            <FramerMotionAnimation type="p" className="description mt-25">
                            Es stellt sich also die Frage, möchten Sie selbst die Stunden investieren und die obigen Dinge angehen oder wollen Sie das outsourcen und dafür bezahlen?
                            <br />Hier vier Argumente, weshalb wir keine Selbstumsetzung empfehlen:

                        </FramerMotionAnimation>
                           
                        </div>
                    </div>
                </section>

                <section className="analysis-factors container" style={{ paddingTop: 0}} >
                    
                
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

                            <FramerMotionAnimation type="p" className="description mt-25">
                          Verpassen Sie es nicht, bereits heute damit zu beginnen. Statt sechs Monate selbst zu testen, was funktioniert, lieber frühzeitig professionell angehen. Denn sechs Monate Zeit {'"gewinnen oder verlieren"'} können bei der Suchmaschinenoptimierung bereits einen grossen Unterschied machen.

                        </FramerMotionAnimation>
                           
                        </div>
                    </div>
                </section>

                <section id="waskostet" className="section-wrapper keywords">
                    <div className="container">
                        <div className="title-wrapper">
                            <FramerMotionAnimation
                                type="h2" className="title text-center">
                               Was kostet SEO bei einer Agentur?
                            </FramerMotionAnimation>
                        </div>
                        <FramerMotionAnimation
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            type="p" className="desc-md mb-15 md:mb-15">
                        Die Preise für Suchmaschinenoptimierung richten sich nach dem Wettbewerb, es gibt günstigere und teurere Anbieter. In der Schweiz ergibt sich aus unserer Sicht nach einer Konkurrenzanalyse und von Aussagen von Kunden nachfolgendes Bild.
                        </FramerMotionAnimation>

                        <FramerMotionAnimation
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            type="p" className="desc-md mb-15 md:mb-15">
                        Es hat viele gute Anbieter und diese arbeiten fast ausschliesslich alle mit einer monatlichen SEO-Betreuung. 

                        </FramerMotionAnimation>
                        

                        <table class="table-auto border-collapse border-spacing-2">
                        <thead>
                          <tr>
                            
                            <th>Gruppe</th>
                            <th>Preis</th>
                            <th>Leistung</th>
                            
                          </tr>
                        </thead>
                        <tbody>
                          
                          <tr>

                            <td>Kleinere Full Service SEO-Agenturen</td>                        
                            <td>Ab {formattedNumber1} monatlich </td>
                            <td>Betreuung, Beratung, Einzelpakete</td>                          
                            
                            
                          </tr>
                          
                          <tr>
                            <td>Grössere Full Service SEO-Agenturen </td>       
                            <td>Ab {formattedNumber2} monatlich</td>
                            <td>Betreuung, Beratung, Workshops, Einzelpakete, Google Ads</td>
                        
                          </tr>

                          <tr>
                            <td>Webagenturen im Nebengeschäft </td>     
                            <td>Ab {formattedNumber3} monatlich</td>
                            <td>Betreuung, Beratung, Workshops, Google Ads</td>
                        
                          </tr>
                     

                        </tbody>
                        </table>
                    </div>
                </section>

                 <section id="angebot" className="analysis-factors container" style={{ paddingTop: 0}} >
                    <div className="container">
                    <div className="title-wrapper">
                            <FramerMotionAnimation
                                type="h2" className="title text-center">
                               Welches Angebot ist das Richtige für Sie?
                            </FramerMotionAnimation>
                        </div>
                        <FramerMotionAnimation
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            type="p" className="desc-md mb-15 md:mb-15">
                                Aufgrund Erfahrungswerten mit bisherigen Kunden geben wir nachfolgend unsere Einschätzung an, wie viel ein Unternehmen für SEO ausgeben sollte:

                        </FramerMotionAnimation>
                        </div>
                
                    <div className="main-wrapper md:flex">
                        <div className="title-wrapper">
                            <FramerMotionAnimation
                                type="h2" className="title text-center">
                              6 Monate à CHF {`5'000 bis 10'000.--`} für Einzelunternehmer & lokale Kleinunternehmen
                            </FramerMotionAnimation>
                        </div>
                        <div className="content-wrapper">

                            <div className="list-wrapper">
                                { firstItems?.map((item, index) => (
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

                    <div className="main-wrapper md:flex">
                        <div className="title-wrapper">
                            <FramerMotionAnimation
                                type="h2" className="title text-center">
                              6 Monate à CHF {`10'000 bis 20'000.--`} Einzelunternehmer mit grösserem Auftragsvolumen und Onlineshops
                            </FramerMotionAnimation>
                        </div>
                        <div className="content-wrapper">

                            <div className="list-wrapper">
                                { secondItems?.map((item, index) => (
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

                    <div className="main-wrapper md:flex">
                        <div className="title-wrapper">
                            <FramerMotionAnimation
                                type="h2" className="title text-center">
                              6 Monate à CHF {`30'000 bis 50'000.--`} Einzelunternehmer mit grösserem Auftragsvolumen und Onlineshops
                            </FramerMotionAnimation>
                        </div>
                        <div className="content-wrapper">

                            <div className="list-wrapper">
                                { thirdItems?.map((item, index) => (
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
                    <FramerMotionAnimation type="p" className="content-flag description">
                                Bitte beachten Sie auch, dass der Erfolg durch eine SEO-Agentur 
                                auch abhängig davon ist, welche Ziele Sie verfolgen und mit welchen SEO-Voraussetzungen gestartet wird.


                            </FramerMotionAnimation>
                </section>

                     <section id="wiefunktioniertes" className="section-wrapper bg-gray">
                    <div className="container">
                        <div className="title-wrapper">
                            <FramerMotionAnimation
                                type="h3" className="title text-center">
                               Ist das nun zu viel oder zu wenig?

                            </FramerMotionAnimation>
                            <Image src={doubleArrowIcon} alt="arrows" className="ml-auto double-arrow-art" />
                        </div>
                        <div className="content-wrapper content-grid-wrapper grid md:grid-cols-2">
                            <FramerMotionAnimation
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="image-wrapper p-0 bg-gray">
                                <Image src={seoStudie} alt="Studie Gartner" className="main-image" />
                            </FramerMotionAnimation>
                            <FramerMotionAnimation
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                            >
                                <p className="desc-sm mb-15">Wenn Sie den 
                                Wert von SEO verstanden haben, sind diese Beträge 
                                nicht hoch und nicht tief. Jedoch wie kann ich messen, ob das für mein Unternehmen wirklich so stimmt?</p>
                                <p className="desc-sm mb-0"> 
                                Ich, Sandro Huber, der Autor dieses Beitrags bin ein 
                                grosser Fan von den Methoden von Warren Buffett. Deshalb vergleiche 
                                ich SEO immer wieder gerne mit Investments im Finanzbereich. Zwei Grundsätze 
                                von Buffett sind, dass für ansprechende Gewinne Geduld notwendig ist und die gewünschten 
                                Umsätze kommen, wenn man in das richtige Management investiert.</p>
                            </FramerMotionAnimation>
                        </div>
                        <FramerMotionAnimation
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            type="p" className="desc-md mb-0">
                            </FramerMotionAnimation>
                            Übertragen in den SEO-Bereich bedeutet das, dass man den richtigen Partner, also Agentur wählen sollte.
                            <FramerMotionAnimation
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            type="p" className="desc-md mb-0">
                                
                                Einen noch entscheidenderen Faktor in Bezug auf SEO-Kosten können wir von Buffett lernen. 
                                Buffett untersuchte im Buch <a href="https://www.amazon.de/Warren-Buffett-Interpretation-Financial-Statements/dp/1416573186"
                                target="__blank" title="Interpretation of Financial Statements">Interpretation of Financial Statements</a> , 
                                wie viel Unternehmen für den Bereich Entwicklung und Werbung ausgeben sollen.

                            </FramerMotionAnimation>

                            <FramerMotionAnimation
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            type="p" className="desc-md mb-0 font-semibold">
                                <br />
                               Und wie es Unternehmen wie z.B. Coca-Cola. machen, die einen langfristigen Wettbewerbsvorteil haben.


                            </FramerMotionAnimation>

                            <FramerMotionAnimation
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            type="p" className="desc-md mb-0">
                                
                                Er kommt zum Schluss, dass Unternehmen nicht mehr als 60% seines Umsatzes in Lohn, Werbung und {'"Selling-Expenses"'} ausgeben sollten. Spricht Geld für den Verkauf und die Neukundengewinnung. Die besten haben sogar nur 20% des Umsatzes für diesen Typ von Ausgaben.



                            </FramerMotionAnimation>

                            <FramerMotionAnimation
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            type="p" className="desc-md mb-0">
                                
                                Folgende <a href="https://www.gartner.de/de/marketing/studie/jaehrliche-cmo-spend-survey"
                                target="__blank" title="Erhebung von Gartner">Erhebung von Gartner</a> hat die Marketingverantwortlichen von Unternehmen befragt, welche in den letzten Jahren auf einen Durchschnitt von rund 10% gekommen sind.



                            </FramerMotionAnimation>

                             <FramerMotionAnimation
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            type="p" className="desc-md mb-0">
                                
                                Nehmen wir also die Daten von Buffett und der obigen Erhebung, kommen wir auf einen Wert von 10% für die Gesamt-Marketingkosten.
                            </FramerMotionAnimation>
                            <br />

                             <FramerMotionAnimation type="p" className="content-flag description">
                                        Wir gehen nun davon aus, dass Ihr Geschäftsmodell deutlich oder teilweise von Online-Kundengewinnung abhängt, dann sollten Sie in jedem Fall <b> mindestens 3% Ihres Umsatzes</b> in SEO oder ähnliche Strategien investieren.

                                            Diese Zahl soll für Sie als Richtwert dienen, den wir für Sie aus Erfahrungswerten und Fakten abgeleitet haben. Diese Kennzahl können wir auch in der Praxis wiederfinden, wenn wir die Gespräche mit Kunden suchen.



                            </FramerMotionAnimation>
                                <br />
                            <FramerMotionAnimation
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            type="p" className="desc-md mb-0">
                                        Nun drehen wir die Sache um. Sollten Sie jährlich ca. 
                                        {`CHF 200'000.-- bis 300'000.--`} Umsatz machen, ist ein Mindestbetrag von monatlich 
                                        {`CHF 500.-- bis 1'000.--`} für SEO in Ordnung. Für andere Umsätze können 
                                        Sie es sich jetzt einfach selbst errechnen.

                                            <br /><br />
                                    Wichtig: Obwohl wir diesen Richtwert empfehlen, können 
                                    Faktoren wie Konkurrenz, Ziele, usw. die Situation komplett 
                                    verändern. Wenn ein Konkurrenzunternehmen einen 
                                    jährlichen Umsatz 
                                    von  {`CHF 300'000.--`} erzielt, jedoch seinerseits monatlich deutlich mehr 
                                    als die 3% ausgibt, dann verändert sich die Lage 
                                    für Ihr Unternehmen wiederum.

                            </FramerMotionAnimation>
                    </div>
                </section>

                     <section id="potential" className="section-wrapper keywords">
                    <div className="container">
                        <div className="title-wrapper">
                            <FramerMotionAnimation
                                type="h2" className="title text-center">
                                Warum ist diese Art von Online Marketing so effektiv?
                            </FramerMotionAnimation>
                        </div>
                        <FramerMotionAnimation
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            type="p" className="desc-md mb-15 md:mb-15">
                        Das grösste Potential von Suchmaschinenoptimierung ist, dass es langfristig zu einer automatisierten Wachstumsmaschine für Ihr Unternehmen wird.
                        </FramerMotionAnimation>

                        <FramerMotionAnimation
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            type="p" className="desc-md mb-15 md:mb-15">
                        
                                <b>Weshalb</b>: Mit den umgesetzten SEO-Massnahmen deckt man langfristig die Nachfrage 
                                der Kunden bei Suchmaschinen ab. Dadurch wird man als Unternehmen 
                                von Google als eine Autorität im Internet wahrgenommen. 
                                Diese Sichtbarkeit verschafft einem von selbst neue Backlinks 
                                und Leute, die mit einem arbeiten wollen.

                        </FramerMotionAnimation>

                        <FramerMotionAnimation
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            type="p" className="desc-md mb-15 md:mb-15">
                        
                               Durch diesen Autoritätsgewinn ist es wiederum leichter, Top-Rankings bei neuen Keywords zu erlangen. Ist Ihr Unternehmen einmal eine starke Online-Marke, werden Seiten auch schneller indexiert.

                        </FramerMotionAnimation>
                            <FramerMotionAnimation
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            type="p" className="desc-md mb-15 md:mb-15">
                        
                                Überspitzt gesagt, wird Ihnen jede heute getätigte Massnahme die künftige Sichtbarkeit vervielfachen.


                        </FramerMotionAnimation>
                        

                       

                            
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
                slug: 'seo-kosten',
                shortTitle: 'SEO-Kosten Guide',
                title: 'SEO-Kosten Guide',
                description: '',
                image: seoKostenImage,
                imageAlt: 'Wie viel kostet SEO',
                readMoreUrl: '/seo/seo-kosten',
                date: '9.03.2022',
                update: '9.03.2022',
                readingTime: '10min Lesedauer',
                cta: 'Was kostet SEO',
                category: 'Ratgeber',
                categoryUrl: '/blog',
                author: 'Sandro Huber',
                authorImage: sandro,
                contentList: [

                    {
                        item: 'Was versteht man unter SEO-Kosten?',
                        link: '#kosten'
                    },
                    {
                        item: 'Was kostet Suchmaschinenoptimierung?',
                        link: '#waskostet'
                    },
                    {
                        item: 'Welches Angebot ist das Richtige für Sie?',
                        link: '#angebot'
                    },
                    {
                        item: 'Was bringt eine Investition in SEO für Potentiale mit?',
                        link: '#potential'
                    },
                   
                    {
                        item: 'Häufige Fragen',
                        link: '#faq'
                    },
                  
                
                ],
                introTitle: 'Mit welchen Preisen sollte man rechnen',
                introDescription: 'In Gesprächen mit potentiellen Kunden werden wir immer wieder mit der Frage konfrontiert, wie viel denn SEO kostet.\n\nZu Beginn einmal, SEO ist nicht kostenlos! Auch wenn Sie es selbst machen, kostet die Zeit, die Sie dafür aufwenden. Es gibt keine Tricks, mit denen man SEO automatisieren kann. \n\nMit wie viel Budget Sie mit Ihrem Unternehmen SEO betreiben sollten, erfahren Sie in diesem Beitrag.',
                videoID: 'seodauervideo',
                videoTitle: 'Mögliches Szenario zur Veranschaulichung',
                videoURL: 'https://www.youtube.com/embed/rukIWLURqlE',
                videoDescription: 'In diesem Video erklären wir Ihnen, was SEO-Kosten sind und wie Sie herausfinden, wie viel Sie investieren sollten. ',
                videoDescription2: 'Wir haben die Angebote von SEO-Agenturen durchleuchtet und eine Preisangabe für die Schweiz gemacht. Zudem erfahren Sie, weshalb SEO mehr Potenzial hat als Google Ads.',
                videoThumbnail: seoKostenIntroImage,
                videoThumbnailDesc: 'SEO Kosten'

               
            
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

const arguItems = [

                    {
                        data: 'Sie werden viel länger benötigen als gedacht'
                    },
                    {
                        data: 'Sie werden viel für SEO-Tools ausgeben müssen'
                    },
                    {
                        data: 'Sie werden sich viel Wissen aneignen müssen und immer auf dem Laufenden bleiben'
                    },
                    {data: 'Wenn die Konkurrenz einen Anbieter bezahlt, haben Sie ziemlich sicher das Nachsehen'},


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