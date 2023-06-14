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
import seoOnlineshop from '../../assets/images/seo/online-shop-suchmaschinenoptimierung.jpg';
import onlineshopImage from '../../assets/images/seo/online-shop-seo.webp'
import doubleDownArrow from '../../assets/images/sharp-double-arrow-down.svg';
import squareIcon from '../../assets/icons/square.svg';
import seoTrends from '../../assets/images/seo/google-trends.png'
import galaxusImage from '../../assets/images/seo/galaxus-search.png';
import zooplusImage from '../../assets/images/seo/beispiel-zooplus.webp';
import keywords1 from '../../assets/images/seo/snippet-ebike.png';
import keywords2 from '../../assets/images/seo/snippet-migros.png';
import keywords3 from '../../assets/images/seo/snippet-heimwerker.png'
import duplicateImage from '../../assets/images/seo/duplicate-content.png'
import duplicateAhrefsImage from '../../assets/images/seo/duplicate-content-ahrefs-tool.png'
import CollapsibleList from "../../components/sections/CollapsibleList";


import onpageOptimizationSectionData from '../../data/onpageOptimizationSectionData';
import offpageOptimizationSectionData from '../../data/offpageOptimizationSectionData';
import faqSeoShopData from '../../data/faqSeoShopData';
import seoShopTechData from '../../data/seoShopTechData';
import seoLinkData from '../../data/seoLinkData';

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


const url = 'https://www.sh-digital.ch'
const category = 'ecommerce'

export default function seoKosten() {
    

    return (
        <>

        <Head>
      
                <title>Online-Shop SEO perfektionieren (inkl. Checklisten)</title>
                <meta name="description" content="Diese SEO-Massnahmen machen deinen Online-Shop bei Google erfolgreich! ✪Tipps zu Keywords & Shopsystem."/>
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

                <WhatGoogleSays post={post} />


            <section id="lohnt" className="section-wrapper bg-gray">
                    <div className="container">
                        <div className="title-wrapper">
                            <FramerMotionAnimation
                                type="h3" className="title text-center">
                               Weshalb lohnt sich Suchmaschinenoptimierung für Onlineshops?

                            </FramerMotionAnimation>
                            <Image src={doubleArrowIcon} alt="arrows" className="ml-auto double-arrow-art" />
                        </div>
                        <div className="content-wrapper content-grid-wrapper grid md:grid-cols-2">
                            <FramerMotionAnimation
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="image-wrapper p-0 bg-gray">
                                <Image src={onlineshopImage} alt="Studie Gartner" className="main-image" />
                            </FramerMotionAnimation>
                            <FramerMotionAnimation
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                            >
                                <p className="desc-sm mb-15">
                                Mit SEO können Sie die organische Sichtbarkeit des Onlineshops signifikant erhöhen. 
                                Potenzielle Kunden finden die Produkte aus Ihrem Sortiment an verschiedenen Stellen bei der Recherche über ein Produkt. Dieser Ausbau der Reichweite bei Suchmaschinen skaliert die Websuchanfragen über die Zeit für den eigenen Shop drastisch.
                                </p>
                                <p className="desc-sm mb-0"> 
                                Zum einen werden bestehende Suchbegriffe für ein höheres Rankings optimiert, 
                                anderseits sollen sich auch die Anzahl der Suchbegriffe mit SEO erhöhen, 
                                auf denen Sie gefunden werden. In unserem Beitrag über <Link href="/seo/was-ist-seo" title="SEO">SEO</Link> finden Sie weitere 
                                Gründe und Statistiken, weshalb Sie noch heute in Suchmaschinenoptimierung investieren sollten!

                                </p>
                            </FramerMotionAnimation>
                        </div>
                       
                    </div>
                </section>

              <section id={itemsCheckId} className="site-analysis container bg-gray" style={{ whiteSpace: "break-spaces" }}>
        
                 <div className="content-wrapper bg-white grid md:grid-cols-2">
                <div className="list-box">
                    <FramerMotionAnimation type="h6" className="list-title">
                       {itemsLeftSubtitle1}
                    </FramerMotionAnimation>
                    <div className="list-wrapper">
                        { itemsLeft?.map((item, index) => (
                            <FramerMotionAnimation
                                initial={{ opacity: 0, x: -70 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.25, delay: index * 0.1 }}
                                className="list-item-wrapper" key={index}>
                                <Image src={squareIcon} alt="square" className="item-icon" />
                                {item.data}
                            </FramerMotionAnimation>
                        ))}
                    </div>
                </div>
                
                
            </div>
             <div className="content-wrapper bg-white grid md:grid-cols-2">
                <div className="list-box">
                    <FramerMotionAnimation type="h6" className="list-title">
                       {itemsLeftSubtitle2}
                    </FramerMotionAnimation>
                    <div className="list-wrapper">
                        { itemsLeft2?.map((item, index) => (
                            <FramerMotionAnimation
                                initial={{ opacity: 0, x: -70 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.25, delay: index * 0.1 }}
                                className="list-item-wrapper" key={index}>
                                <Image src={squareIcon} alt="square" className="item-icon" />
                                {item.data}
                            </FramerMotionAnimation>
                        ))}
                    </div>
                    <br />
                    <FramerMotionAnimation type="p" className="list-title">
                   <small>**Im Optimalfall müssen dort dynamische Informationen verarbeitet werden können, die auf jeder Seite anders sind.</small>
                    </FramerMotionAnimation>


                </div>
                
                
            </div>
            
        </section>

         <section id="setup" className="analysis-factors bg-gray container">
            <FramerMotionAnimation className="title-wrapper">
                <h2 className="title">
                    Aufsetzen eines Onlineshops für SEO
                </h2>
                <Image src={doubleDownArrow} alt="down arrows" className="down-arrows" />
            </FramerMotionAnimation>
            <FramerMotionAnimation type="p" className="description mb-10">
                        Das Vorgehen unterscheidet sich, falls ein neuer Online-Shop aufgesetzt werden soll oder wenn ein bestehendes Shopsystem angepasst oder sogar ein Relaunch gemacht werden soll. Wir haben versucht ein allgemein gültiges Vorgehen zu formulieren:

                    </FramerMotionAnimation>
            <div className="main-wrapper md:flex">
                
                <div className="content-wrapper">
                    <div className="list-wrapper">
                    <ol className="pl-5 mt-2 space-y-1 list-decimal list-inside">
                     { listAufsetzen?.map((item, index) => (
                            <FramerMotionAnimation
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.25, delay: index * 0.1 }}
                                className="item" key={index}>
                     
                        <li>{ item.data }</li>
                      


                       
                                
                                
                            </FramerMotionAnimation>
                        ))}
                     </ol>
                    </div>
                    <FramerMotionAnimation type="p" className="description">
                       Diese Schritte sollen Ihnen einen kurzen Überblick verschaffen, wie man vorgehen könnte. In der Praxis sollte dies viel umfassender geplant werden.

                    </FramerMotionAnimation>
                   
                </div>
            </div>
        </section>
                   
          <section id="shopsysteme" className="section-wrapper keywords">
                    <div className="container">
                        <div className="title-wrapper">
                            <FramerMotionAnimation
                                type="h2" className="title text-center">
                               Welche Shopsysteme gibt es?
                            </FramerMotionAnimation>
                        </div>
                        <FramerMotionAnimation
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            type="p" className="desc-md mb-15 md:mb-15">
                        Aus dem vorherigen Abschnitt haben wir gelernt, dass das korrekte Aufsetzen des Shopsystem essenziell für den Erfolg mit SEO ist. Nicht nur wie das Ganze aufgebaut wird, sondern auch auf welcher Technologie dies basiert.


                        </FramerMotionAnimation>

                        <FramerMotionAnimation
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            type="p" className="desc-md mb-15 md:mb-15">
                        Wir möchten hier nicht nur einen Blick auf die verschiedenen Shopsysteme werfen, sondern auch konkret auf die dahinterstehende Technologie. Diese ist ausschlaggebend für den Funktionsumfang und die Möglichkeiten, die eine Optimierung für Suchmaschinen bietet.

 

                        </FramerMotionAnimation>

                        <FramerMotionAnimation
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            type="p" className="desc-md mb-15 md:mb-15">
                        Vorweg möchten wir erwähnen, dass wir das Universum von Shopsystem für KMU sowie grössere Unternehmen untersuchen. Da sich aus unserer Erfahrung mit Kunden in diesen zwei Bereichen signifikante Unterschiede bestehen. Ob diese Unterschiede gut oder schlecht sind, erfahren Sie am Ende dieses Abschnitts.



 

                        </FramerMotionAnimation>

                            <br />
                        <div className="title-wrapper">
                            <FramerMotionAnimation
                                type="h3" className="title text-center">
                               Shopsystem im KMU-Bereich


                            </FramerMotionAnimation>
                            <Image src={doubleArrowIcon} alt="arrows" className="ml-auto double-arrow-art" />
                        </div>
                        <div className="content-wrapper content-grid-wrapper grid md:grid-cols-2">
                            <FramerMotionAnimation
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="image-wrapper p-0 bg-gray">
                                <Image src={seoTrends} alt="Shopsysteme Trends" className="main-image" />
                            </FramerMotionAnimation>
                            <FramerMotionAnimation
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                            >
                                <p className="desc-sm mb-15">Die in der Grafik aufgeführte Popularität setzt sich aus unserer eigenen Meinung sowie den Statistiken von Google Trends zusammen. Wir haben die Shopsysteme für KMU nach Suchbegriffe und Thema untersucht und unsere eigene Meinung einfliessen lassen.</p>
                                <p className="desc-sm mb-0"> 
                                Aus unserer Analyse entstanden ist folgendes Popularitäts-Ranking, dies betrifft nur die Schweiz. Viele dieser Shopsysteme sind weltweit oder insbesondere im DACH-Raum verbreitet.

                                </p>
                            </FramerMotionAnimation>
                        </div>
                       
                
                        

                       <table class="tg">
                        <thead>
                          <tr>
                            
                            <th class="tg-1oat">Software</th>
                            <th class="tg-1oat">Technologie</th>
                            <th class="tg-1oat">Popularität Shopsystem (1 - 10)</th>
                            
                          </tr>
                        </thead>
                        <tbody>
                          
                          <tr>

                            <td class="tg-1oat">Shopify</td>                        
                            <td class="tg-1oat">Ruby on Rails</td>
                            <td class="tg-1oat">9</td>                          
                            
                            
                          </tr>
                          
                          <tr>
                            <td class="tg-1oat">WooCommerce </td>       
                            <td class="tg-1oat">PHP</td>
                            <td class="tg-1oat">9</td>
                        
                          </tr>

                          <tr>
                            <td class="tg-1oat">PrestaShop</td>
                            <td class="tg-1oat">PHP</td>
                            <td class="tg-1oat">7</td>
                          </tr>
                            
                            <tr>
                            <td class="tg-1oat">Magento</td>
                            <td class="tg-1oat">PHP</td>
                            <td class="tg-1oat">5</td>
                          </tr>

                          

                           <tr>
                            <td class="tg-1oat">OpenCart</td>
                            <td class="tg-1oat">PHP</td>
                            <td class="tg-1oat">2</td>
                          </tr>

                          <tr>
                            <td class="tg-1oat">Gambio</td>
                            <td class="tg-1oat">PHP</td>
                            <td class="tg-1oat">2</td>
                          </tr>

                         

                        </tbody>
                        </table>
                        <br /><br />
                        <FramerMotionAnimation
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                            >
                                <p className="desc-sm mb-15">Fazit: In der Schweiz sind <a href="https://www.shopify.com/de" target="__blank" title="Shopify">Shopify</a> und <a href="https://woocommerce.com/" target="__blank" title="Woocommerce">Woocommerce</a>, als Plugin für Wordpress, generell und insbesondere bei kleinen und mittelgrossen Unternehmen sehr verbreitet.</p>
                                <p className="desc-sm mb-0"> 
                               Aus unserer Erfahrung mit bisherigen Kunden wissen wir, dass die Lösungen von Anbietern wie z.B. Gambio, Jimdo, usw. eher nicht für SEO in Frage kommen. Es ist möglich, dort SEO zu betreiben, langfristig hat man aufgrund des eingeschränkten Funktionsumfanges enorme Nachteile (Stand: Frühling 2022).


                                </p>
                            </FramerMotionAnimation>
                                <br /><br />
                             <div className="title-wrapper">
                            <FramerMotionAnimation
                                type="h3" className="title text-center">
                               Shopsystem bei den grossen Unternehmen

                            </FramerMotionAnimation>
                            <Image src={doubleArrowIcon} alt="arrows" className="ml-auto double-arrow-art" />
                        </div>
                        <div className="content-wrapper content-grid-wrapper grid md:grid-cols-2">
                            <FramerMotionAnimation
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="image-wrapper p-0 bg-gray">
                                
                                    <table class="tg">
                        <thead>
                          <tr>
                            
                            <th class="tg-1oat">Unternehmen</th>
                            <th class="tg-1oat">Shopsystem</th>
                            <th class="tg-1oat">Technologie</th>
                            <th class="tg-1oat">Umsatz Mio. 2020</th>
                            
                          </tr>
                        </thead>
                        <tbody>
                          
                          <tr>

                            <td class="tg-1oat"><a target="__blank" href="https://www.digitec.ch/" title="digitec.ch">digitec.ch</a></td>                       
                            <td class="tg-1oat"><a target="__blank" href="https://builtwith.com/digitec.ch" title="builtwith.com">Eigenentwicklung</a></td>
                            <td class="tg-1oat">React, Next.js</td> 
                            <td class="tg-1oat">1 125.0</td>                            
                            
                            
                          </tr>
                          
                          <tr>
                             <td class="tg-1oat"><a target="__blank" href="https://www.galaxus.ch/" title="galaxus.ch">galaxus.ch</a></td>                      
                            <td class="tg-1oat"><a target="__blank" href="https://builtwith.com/galaxus.ch" title="builtwith.com">Eigenentwicklung</a></td>
                            <td class="tg-1oat">React, Next.js</td> 
                            <td class="tg-1oat">561.0</td>  
                        
                          </tr>

                            <tr>
                             <td class="tg-1oat"><a target="__blank" href="https://www.brack.ch/" title="brack.ch">brack.ch</a></td>                        
                            <td class="tg-1oat"><a target="__blank" href="https://builtwith.com/brack.ch" title="builtwith.com">Eigenentwicklung</a></td>
                            <td class="tg-1oat">React, Gatsby.js</td>   
                            <td class="tg-1oat">460.0</td>  
                        
                          </tr>
                            
                              <tr>
                             <td class="tg-1oat"><a target="__blank" href="https://www.nespresso.com/ch/" title="nespresso.com/ch">nespresso.com/ch/</a></td>                       
                            <td class="tg-1oat"><a target="__blank" href="https://builtwith.com/nespresso.com" title="builtwith.com">Magento / SAP-Hybris</a></td>
                            <td class="tg-1oat">PHP</td>    
                            <td class="tg-1oat">400.0</td>  
                        
                          </tr>

                          

                             <tr>
                             <td class="tg-1oat"><a target="__blank" href="https://www.microspot.ch/de" title="microspot.ch">microspot.ch</a></td>                      
                            <td class="tg-1oat"><a target="__blank" href="https://builtwith.com/microspot.ch" title="builtwith.com">SAP-Hybris</a></td>
                            <td class="tg-1oat">React, Java</td>    
                            <td class="tg-1oat">334.0</td>  
                        
                          </tr>

                           <tr>
                             <td class="tg-1oat"><a target="__blank" href="https://shop.migros.ch/de/" title="shop.migros.ch">shop.migros.ch</a></td>                       
                            <td class="tg-1oat"><a target="__blank" href="https://builtwith.com/shop.migros.ch" title="builtwith.com">Eigenentwicklung</a></td>
                            <td class="tg-1oat">PHP</td>    
                            <td class="tg-1oat">266.0</td>  
                        
                          </tr>

                         

                        </tbody>
                        </table>


                                                        </FramerMotionAnimation>
                            <FramerMotionAnimation
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                            >
                                <p className="desc-sm mb-15">Bei den grössten Unternehmen mit 
                                Onlineshop setzen fast 70% auf eigenentwickelte Shopsysteme. 
                                Zu diesem Ergebnis kamen wir während der Analyse 
                                von den <a href="https://blog.carpathia.ch/2021/05/20/die-umsatzstaerksten-schweizer-onlineshops-2021/" target="__blank" title="10 umsatzstärksten Onlineshops">10 umsatzstärksten Onlineshops</a> im 2020. 
                                Hier ein Auszug aus den Shops mit Hauptsitz in der Schweiz.</p>
                                <p className="desc-sm mb-0"> 
                                Aus unserer Analyse entstanden ist folgendes Popularitäts-Ranking, dies betrifft nur die Schweiz. Viele dieser Shopsysteme sind weltweit oder insbesondere im DACH-Raum verbreitet.

                                </p>
                            </FramerMotionAnimation>

                            <FramerMotionAnimation
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                            >
                                <p className="desc-sm mb-15">
                                    Es ist offensichtlich, die grossen Unternehmen im E-Commerce Bereich in der Schweiz setzen auf eigenentwickelte Lösungen. Aus unserer Sicht hat dies vor allem den Grund, dass diese Lösungen extrem skalierbar sind und viel besser auf die Nutzererfahrung eingegangen werden kann.


                                </p>
                            </FramerMotionAnimation>
                        </div>
                    </div>
                </section>

                 <section id="analyse" className="section-wrapper" style={{ padding: 0}}>
                    <div className="container">
                        
                        <FramerMotionAnimation
                                type="h3" className="title text-center">
                               Fazit Shopystem für SEO

                            </FramerMotionAnimation>
                            <br />

                        
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
                            Für die meisten kleinen Unternehmen ist WooCommerce oder Shopify eine gute Wahl. 
                            Man macht sich dadurch aber auch abhängig von der Strategie des Anbieters. 
                            Dafür kriegt man viele wichtige Updates einfach dazu.

                            </FramerMotionAnimation>

                            
                           
                        </div>
                    </div>
                </section>

                <section id="shopanalyse" className="section-wrapper keywords">
                    <div className="container">
                        <div className="title-wrapper">
                            <FramerMotionAnimation
                                type="h2" className="title text-center">
                                Shop-SEO-Analyse
                            </FramerMotionAnimation>
                        </div>
                        <FramerMotionAnimation
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            type="p" className="desc-md mb-50 md:mb-20">
                           In diesem Abschnitt geben wir Ihnen Tipps für die Vorbereitung von Onlineshops auf die Optimierung von Suchmaschinen. 
                           Dies ist kein umfassender Ratgeber zum Thema 
                           SEO-Analyse, sondern soll Ihnen aufzeigen, 
                           was bei Webshops anders ist als bei normalen Webseiten. 
                           Den umfassenden Ratgeber finden Sie unter <Link href="/seo/seo-analyse" title="SEO Analyse">SEO Analyse</Link>.


                        </FramerMotionAnimation>
                         <FramerMotionAnimation
                                type="h4" className="title text-center">
                                Zielgruppe kennen
                            </FramerMotionAnimation>
                        <FramerMotionAnimation
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            type="p" className="desc-md mb-50 md:mb-20">
                           Grundsätzlich geht es bei der Zielgruppe darum, wer deine Produkte kauft und kaufen möchte. Wonach suchen die potenziellen Käufer und mit welchen Produkten erreicht man diese. Folgende Fragen können bei der Zielgruppenanalyse helfen:

                        </FramerMotionAnimation>
                        <FramerMotionAnimation
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="mb-24">
                                <p className="desc-md-2 mb-50 md:mb-15 primary">
                                    Welche Motivation hat deine Zielgruppe beim Online-Einkauf?


                                </p>
                                <p className="desc-md-2 mb-50 md:mb-15 primary">
                                   Über welche Kanäle recherchiert deine Zielgruppe?

                                </p>
                                <p className="desc-md-2 primary">
                                    Wer ist deine Zielgruppe im Detail?

                                </p>
                                 <p className="desc-md-2 primary">
                                    Was ist das Alleinstellungsmerkmal unseres Produkts und wie nützt dies dem potentiellen Kunden?


                                </p>
                                
                            </FramerMotionAnimation>

                        <FramerMotionAnimation
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            type="p" className="desc-md mb-90 md:mb-32">
                            Dies sind nur drei Beispielfragen, welche in der Zielgruppenanalyse im Rahmen der SEO-Strategie im Detail ausgearbeitet werden. Der SEO-Experte definiert für das Unternehmen die detaillierten Zielgruppeninformationen im Zuge der Strategie.
                        </FramerMotionAnimation>

                        <FramerMotionAnimation
                                type="h4" className="title text-center">
                                Keyword Recherche

                            </FramerMotionAnimation>
                        <FramerMotionAnimation
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            type="p" className="desc-md mb-50 md:mb-20">
                           Auf der Suchen nach den richtigen Keywords für Onlineshops wird man oft über {'"informelle Keywords"'} stolpern. Das sind Suchbegriffe, die zum Finden von hilfreichen Informationen zu jeglichen Themen eingegeben werden.

                        </FramerMotionAnimation>

                        <div className="inner-content-wrapper bg-gray">
                            <div className="content-wrapper content-grid-wrapper grid md:grid-cols-2">
                                <FramerMotionAnimation
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                >
                                    <h4 className="content-title">Beispiel</h4>
                                    
                                    <p className="desc-md mt-15">Wie druckt man selbst etwas aus dem 3D-Drucker.
                                    </p>
                                </FramerMotionAnimation>
                                <FramerMotionAnimation
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                >
                                <p className="desc-md mt-15">
                                Diese Suchbegriffe können im Bereich E-Commerce auch verwendet werden, jedoch werden die meisten Suchanfragen sich um {'"produktspezifische Informationen"'} nicht um {'"informelle Keywords"'} drehen.
                                 Wie druckt man selbst etwas aus dem 3D-Drucker.
                                    </p>
                                </FramerMotionAnimation>
                                <FramerMotionAnimation
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    className="mb-80 md:mb-0"
                                >
                                    <h4 className="content-title">
                                        Beispiel
                                    </h4>
                                   
                                    <p className="desc-md mt-15">Beispiel: 3D-Drucker, 3D-Drucker kaufen.</p>

                                </FramerMotionAnimation>
                                <FramerMotionAnimation
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                >
                                <p className="desc-md mt-15">
                               Dies bedeutet, der wichtigste Faktor bei der Keyword-Recherche für Onlineshops ist, einen entsprechenden Produkt-Fokus im Hinterkopf zu behalten. Umgangssprachlich mag das sehr einfach klingen, in der Praxis gibt es viele hilfreiche Tricks, um das Ganze zu vereinfachen.


                                    </p>
                                </FramerMotionAnimation>
                            </div>

                            <FramerMotionAnimation
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                 className="content-flag bg-white mb-20 md:mb-0">
                                
                                <p className="desc-md">
                                   Man sollte bei der Recherche der Keywords versuchen, 
                                   nicht nur die klassischen SEO-Kennzahlen zu verwenden. 
                                   Man kann beispielsweise Informationen aus <a href="https://ads.google.com/" target="__blank" title="Google Ads">Google Ads</a> verwenden, um den 
                                   Produkt-Fokus eines Keywords festzustellen. 
                                   Bei SH Digital haben wir Tools, die solche Daten automatisch 
                                   nach Thema aufbereiten.


                                </p>
                            </FramerMotionAnimation>

                            <FramerMotionAnimation
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                 className="bg-white mb-20 md:mb-0">
                                
                                <p className="desc-md">
                                  Um eine möglichst passende Keywordliste für das Unternehmen zu finden, versucht man verschiedene Informationen aus den wichtigsten Quellen zusammenzutragen.
                                  <br />Eine gute und in SEO vielfach nicht verwendete Quelle sind grosse E-Commerce Anbieter und deren Webseiten. Man kriegt dort einen Eindruck, welche Suchbegriffe von einer grossen Anzahl von Kunden bereits verwendet wurde. Und kann diese Keywords neben weiteren in die Keywordliste aufnehmen.




                                </p>
                            </FramerMotionAnimation>

                            
                    
                       
                            <FramerMotionAnimation
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="image-wrapper p-0 bg-gray">
                                <Image src={galaxusImage} alt="Galaxus Image" className="main-image" />
                                <small>Quelle: galaxus.ch</small>
                            </FramerMotionAnimation>
                            <br />
                            <FramerMotionAnimation
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                            >
                                <p className="desc-sm mb-15">Wenn Sie den 
                               An dieser Stelle kann nicht detailliert auf eine ausführliche Recherche eingegangen werden, diese gestaltet sich sehr umfassend und kann einige Zeit in Anspruch nehmen. Aus unserer Sicht ist ein Experte von einer SEO-Agentur zu bevorzugen, wenn es um eine Keyword-Recherche für Onlineshops geht. Eine solide Datenbasis ist ein zentraler Erfolgsfaktor für den Erfolg bei SEO für Ihr Unternehmen.

                                </p>
                                <p className="desc-sm mb-0"> 
                               Falls Sie noch weitere Informationen zur Keyword-Recherche suchen, verlinken wir am Ende dieses Beitrags auf weitere interessante Beiträge.

                                </p>
                            </FramerMotionAnimation>
                        </div>
                    </div>
                </section>

                

              <section className="site-analysis container bg-gray" style={{ whiteSpace: "break-spaces" }}>
        
                 <div className="content-wrapper bg-white grid md:grid-cols-2">
                <div className="list-box">
                    <FramerMotionAnimation type="h6" className="list-title">
                      Konkurrenzanalyse
                    </FramerMotionAnimation>
                    <div className="list-wrapper">
                        { itemsComp?.map((item, index) => (
                            <FramerMotionAnimation
                                initial={{ opacity: 0, x: -70 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.25, delay: index * 0.1 }}
                                className="list-item-wrapper" key={index}>
                                <Image src={squareIcon} alt="square" className="item-icon" />
                                {item.data}
                            </FramerMotionAnimation>
                        ))}
                    </div>
                </div>
                
                
            </div>

            <FramerMotionAnimation
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                            >
                                <p className="desc-sm mb-15">Wenn Sie den 
                                            Die Antworten auf obenstehende Fragen geben einem Aufschluss, inwiefern man SEO für das eigene Unternehmen betreiben sollte. Je nach Bereich, in dem man etwas aufzuholen hat, sollte man dies tun. Langfristig ist natürlich das Ziel, auf allen Ebenen mit der Konkurrenz schrittzuhalten.

                                </p>
                               
                            </FramerMotionAnimation>

        </section>
         <br /> <br />
         <section id="struktur" className="section-wrapper" style={{ padding: 0}}>
                    <div className="container">
                        
                        <FramerMotionAnimation
                                type="h3" className="title text-center">
                               Struktur des Onlineshops


                            </FramerMotionAnimation>
                            <FramerMotionAnimation type="p" className="content-flag description">
                           Hat man verlässliche Daten in der Analyse sammeln können, dann sollen diese jetzt im Webshop verwendet werden können. Durch die professionelle Keyword-Recherche und anschliessendem Mapping wissen wir, welche Keywords auf welcher Seite im Onlineshop vorkommen sollen.


                            </FramerMotionAnimation>
                            <FramerMotionAnimation type="p" className="content-flag description">
                           Wir intern verwenden ein Tool, bei dem die Keyword-Liste in Form einer Content-Type Übersicht dargestellt werden kann. Somit kenne ich als Besitzer des Onlineshops, welche Seiten ich anlegen muss und welches die passende URL ist.


                            </FramerMotionAnimation>

                        
                    </div>
                </section>
                <br />
                <section className="analysis-factors container" style={{ paddingTop: 0}} >
                     <FramerMotionAnimation
                                type="h4" className="title text-center">
                               URL-Struktur



                            </FramerMotionAnimation>
                             <br /> <br />
                            <FramerMotionAnimation type="p" className=" description">
                              Die Struktur der URL ist abhängig von den Seiten, die wir implementieren möchten. In der Regel sieht das bei Onlineshops wie folgt aus:

                            </FramerMotionAnimation>
                             <br />
                
                    <div className="main-wrapper md:flex">
                        
                        <div className="content-wrapper">
                            <div className="list-wrapper">
                                { listStructure?.map((item, index) => (
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


                <section className="analysis-factors container" style={{ paddingTop: 0}} >
                     <FramerMotionAnimation
                                type="h4" className="title text-center">
                               Startseite
                            </FramerMotionAnimation>
                             <br /> <br />
                            <FramerMotionAnimation type="p" className=" description">
                              Die Startseite ist immer die <b>populärste Seite auf Ihrem Onlineshops</b>. 
                              Das bedeutet, dort muss das <b>Wichtigste zu Ihrem Unternehmen und die Marke </b>stehen.

                            </FramerMotionAnimation>
                            
                             <FramerMotionAnimation type="p" className=" description">
                            Beispiel: Sie betreiben einen Shop, der Hundezubehör verkauft. 
                            Das Unternehmen heisst Dog4Life AG in der Schweiz. Ihre Kunden möchten folgendes sehen:

                             <br /><br />
                            <br />
                            </FramerMotionAnimation>
                
                    <div className="main-wrapper md:flex">
                        
                        <div className="content-wrapper">
                            <div className="list-wrapper">
                                { listExample?.map((item, index) => (
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
                            

                             <FramerMotionAnimation type="p" className=" description">
                                Jetzt stellt sich die Frage, soll die Startseite für das Keyword 
                                <b>Hunde Shop</b> und die Marke Dog4Life optimiert werden. Anhand 
                                verschiedener Kriterien wird <b>Branche + Shop</b> eruiert, es kann 
                                <b>Hundezubehör Shop</b>, <b>Hunde Shop</b> oder ähnliches sein.

                            </FramerMotionAnimation>

                            <FramerMotionAnimation type="p" className=" description">
                                Für eine Beurteilung braucht es eine umfassende Analyse, 
                                die mehr Daten als oberflächliche Basisinformationen bieten. 
                                Viele Kunden kennen bereits die wichtigsten Keywords, da diese 
                                von Konkurrenten belegt sind oder diese tendenziell viel 
                                Suchvolumen haben. Nicht in jedem Fall ist dies dann das richtige Keyword.


                            </FramerMotionAnimation>
                           
                        </div>

                    </div>
                </section>
                
                   <section className="section-wrapper bg-white" style={{ whiteSpace: "break-spaces", paddingBottom: 0 }}>
                    <div className="container">
                        <div className="title-wrapper">
                            <FramerMotionAnimation
                                type="h4" className="title text-center">
                               Kategorieseiten inkl. Checkliste


                            </FramerMotionAnimation>
                            <Image src={doubleArrowIcon} alt="arrows" className="ml-auto double-arrow-art" />
                            <small>Quelle: zooplus.ch</small>
                        </div>
                        <div className="content-wrapper content-grid-wrapper grid md:grid-cols-2">
                            <FramerMotionAnimation
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="image-wrapper p-0 bg-gray">
                                <Image src={zooplusImage} alt="Zooplus Image" className="main-image" />
                            </FramerMotionAnimation>
                            <FramerMotionAnimation
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                            >
                                <p className="desc-sm mb-15">
                                Die Kategorieseiten sind sehr wichtig für Shop-SEO, 
                                diese dienen als Angebotsübersicht, bei dem sich potentielle 
                                Kunden einen Überblick verschaffen. Die Kategorieseiten sind 
                                Ausgangspunkt für die wichtigsten Vorgänge auf Ihrer Webseite. 
                                Ausserdem lassen sich damit meist die wichtigsten Keywords abdecken.


                                <br /><br />
                                Die Kategorieseite sollte so aufgebaut werden, dass 
                                die Überschrift, Einleitungstext, Filter sowie die Produkte 
                                bereits im Abovethefold des Webshops zu sehen sind. Beim 
                                Aufbau der Produktauflistung empfehlen wir, sich bei der 
                                Konkurrenz zu orientieren. Je nach Branche und Anzahl 
                                Produkte funktionieren unterschiedliche Layouts. Eine 
                                ausführlichere Checkliste mit Fragen finden Sie unter 
                                Kategorieseite Checkliste
                                <br /><br />Die Produktauflistung sollte zudem 
                                farblich abgestimmt sein, bei einigen Kundenprojekten 
                                konnten wir die Anzahl Klicks schon mit kleinen Änderungen 
                                am Layout viele neue Klicks generieren. UX / UI ist nicht 
                                zu unterschätzen und sollte optimal verwendet werden.

                                </p>
                                </FramerMotionAnimation>

                        </div>
                       
                    </div>
                </section>

              <section className="site-analysis container bg-gray" style={{ whiteSpace: "break-spaces" }}>
        
                 <div className="content-wrapper bg-white grid md:grid-cols-2">
                <div className="list-box">
                    <FramerMotionAnimation type="h6" className="list-title">
                       Kategorieseite richtig aufbauen

                    </FramerMotionAnimation>
                    <div className="list-wrapper">
                        { listCategory?.map((item, index) => (
                            <FramerMotionAnimation
                                initial={{ opacity: 0, x: -70 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.25, delay: index * 0.1 }}
                                className="list-item-wrapper" key={index}>
                                <Image src={squareIcon} alt="square" className="item-icon" />
                                {item.data}
                            </FramerMotionAnimation>
                        ))}
                    </div>
                </div>
                
                
            </div>
            
            
        </section>


              <section className="site-analysis container bg-gray" style={{ whiteSpace: "break-spaces" }}>
              <FramerMotionAnimation
                                type="h4" className="title text-center">
                                  Produktseiten inkl. Checkliste


                            </FramerMotionAnimation>
              
                            <FramerMotionAnimation
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                            >
                                <p className="desc-sm mb-15">
                                   Oftmals werden die Produktseiten als minder wichtig herabgestuft oder von Agenturen gar nicht bearbeitet. Wir empfehlen dort Ressourcen zu investieren, denn es sind die Seiten, welche den Kaufabschluss begünstigen bzw. von dort kommt in der Regel der Umsatz. Aus SEO-Sicht ist die Kategorieseite wichtiger als Produktseite. Aus Kundensicht in der Regel die Produktseite. Da man für Kunden und nicht für Suchmaschinen optimieren sollte, nimmt die Produktseite einen höheren Rang ein.


                                </p>
                                <p className="desc-sm mb-15">
                                    In unserer SEO-Agentur haben wir in verschiedenen Projekten User-Experience-Tests durchgeführt. Wenn die Produktseite überdurchschnittlich viel relevante Informationen enthalten hatte, kehrte der gleiche Benutzer mehrfach als Direkteinstieg oder über die Markensuche zurück. In Diskussionen mit SEO-Kunden bestand immer wieder der Irrglaube, man müsse gewisse Informationen zurückhalten, um den potentiellen Kunden neugieriger zu machen.


                                </p>

                                <p className="desc-sm mb-15">
                                   Unser Tipp: Gestalten Sie die Produktbeschreibung so vielfältig und trotzdem einheitlich wie möglich und beachten Sie folgende Punkte:



                                </p>
                               
                            </FramerMotionAnimation>
                            <br />
        
                 <div className="content-wrapper bg-white grid md:grid-cols-2">
                <div className="list-box">
                    <FramerMotionAnimation type="h6" className="list-title">
                      Wichtig zu beachten

                    </FramerMotionAnimation>
                    <div className="list-wrapper">
                        { itemsImport?.map((item, index) => (
                            <FramerMotionAnimation
                                initial={{ opacity: 0, x: -70 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.25, delay: index * 0.1 }}
                                className="list-item-wrapper" key={index}>
                                <Image src={squareIcon} alt="square" className="item-icon" />
                                {item.data}
                            </FramerMotionAnimation>
                        ))}
                    </div>
                </div>
                
                
            </div>
            <br/><br/>

            <p className="desc-sm mb-15">Unter Beachtung dieser Punkte verbessern Sie das Einkaufserlebnis für Ihre Kunden und maximieren die Conversion Ihrer Produkte.
                                </p>

                                <p className="desc-sm mb-15">Wenn Sie den 
                                   Gute Beispiele von Produktbeschreibungen lassen sich viele im Netz finden. Bei digitec.ch und zalando.ch ist es aus unserer Sicht sehr gut umgesetzt.
                                </p>
                                <br /> <br/>


              
                            <FramerMotionAnimation
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                            >
                                <p className="desc-sm mb-15">
                                   Um erfolgreich bei Shop-SEO zu werden, sollte eine Strategie zur Erstellung von nicht kommerziellen Inhalten definiert werden. Meist wird dies in Form eines Ratgebers oder eines Bereichs mit Wissenstexten umgesetzt. In diesem Ratgeberbereich werden die wichtigsten Problemstellungen im Zusammenhang mit den Produkten in Form der Möglichkeit zur Eigenrecherche des Kunden abgehandelt.



                                </p>
                                <p className="desc-sm mb-15">
                                    Durch gezielte Informationen will man die Bedürfnisse der Kunden befriedigen und einen Leitfaden bieten, der zum Kaufabschluss animiert. Ein solcher Bereich ist nicht zentral in den Shop zu integrieren, sondern eher am Rande. Es bietet sich an, einen Ratgeber dezent am Schluss des Hauptmenüs einzufügen. Oder in Form eines Untermenüs, dann allerdings so, dass der Kunde schnell dahin gelangt.



                                </p>

                                <p className="desc-sm mb-15">
                                    Im Bereich Content Marketing gehen wir weiter unten nochmals auf nicht kommerzielle Inhalte für Shops ein.




                                </p>
                               
                            </FramerMotionAnimation>

           

        </section>

        <section id="onpage" className="section-wrapper keywords">
                    <div className="container">
                        <div className="title-wrapper">
                            <FramerMotionAnimation
                                type="h2" className="title text-center">
                                Onpage für Onlineshops

                            </FramerMotionAnimation>
                        </div>
                        <FramerMotionAnimation
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            type="p" className="desc-md mb-50 md:mb-20">
                            Im vorherigen Abschnitt haben wir gezeigt, welche Seitentypen bei Onlineshops vorkommen können. Nun geht es mehr ins Detail, welche effektiven Onpage-Massnahmen müssen beachtet werden.


                        </FramerMotionAnimation>
                        <FramerMotionAnimation
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            type="p" className="desc-md mb-50 md:mb-20">
                            Nach einer Keyword-Recherche weiss man, welche Keywords wichtig sind. Wenn man diese den Seiten zugewiesen hat, geht es darum, die einzelnen Seiten selbst zu optimieren. Dabei gibt es, obwohl es unterschiedliche Seitentypen gibt, die gleichen Faktoren zu beachten.


                        </FramerMotionAnimation>

                         <FramerMotionAnimation
                                type="h4" className="title text-center">
                                 Page Title & Meta Description
                            </FramerMotionAnimation>
                        <FramerMotionAnimation
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            type="p" className="desc-md mb-90 md:mb-32">
                           Bei der Auslieferung bei Google des Page Title und der Meta Beschreibung einer Unterseite spricht man vom Snippet. Ob ein potentieller Kunde auf Ihr Suchergebnis klickt oder nicht, ist massgeblich vom Snippet abhängig. Denn sprechen die dort verwendeten Informationen den Benutzer an, so folgt dieser mit einem Klick in Ihren Online Shop.


                        </FramerMotionAnimation>

                        <FramerMotionAnimation
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            type="p" className="desc-md mb-90 md:mb-32">
                           Aus diesem Grund sollte man die Informationen im Snippet selbst steuern und festlegen. Vor allem für die wichtigen Keywords kann man damit mehr als die Konkurrenz herausholen, wenn man den Snippet individuell pro Shopseite gestaltet.


                        </FramerMotionAnimation>

                        <div className="inner-content-wrapper bg-gray">
                            <div className="content-wrapper content-grid-wrapper grid md:grid-cols-2">
                                <FramerMotionAnimation
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                >
                                    <h4 className="content-title">Beispiel Snippet Kategorie</h4>
                                    <Image src={keywords1} alt="img" className="main-image" />
                                </FramerMotionAnimation>
                                <FramerMotionAnimation
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    className="mb-80 md:mb-0"
                                >
                                    <h4 className="content-title">
                                        Beispiel Snippet Produkt

                                    </h4>
                                    <Image src={keywords2} alt="img" className="main-image" />
                                    
                                </FramerMotionAnimation>

                                 <FramerMotionAnimation
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    className="mb-80 md:mb-0"
                                >
                                    <h4 className="content-title">
                                        Beispiel Snippet Sonstiges


                                    </h4>
                                    <Image src={keywords3} alt="img" className="main-image" />
                                    
                                </FramerMotionAnimation>
                            </div>

                            <FramerMotionAnimation
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="mb-20 md:mb-12">
                                <p className="desc-md mt-15">
                                    Wir haben willkürlich drei Snippets aus der Schweiz von Onlineshops rausgesucht. Ob diese gut optimiert sind oder nicht, lassen wir an dieser Stelle offen. Bei Onlinshops sollte man darauf hinarbeiten, dass im Snippet auch Preise und Bewertungen von Kunden angezeigt werden.

                                </p>
                                
                            </FramerMotionAnimation>

                            <FramerMotionAnimation
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="mb-24">
                                
                                   <h5 className="content-title">
                                        Benutzerfreundlichkeit (Usability)
                                    </h5>
                                <p className="desc-md-2 mb-50 md:mb-15 primary">
                                    Ein Onlineshop ist benutzerfreundlich, wenn der Benutzer schnell zu den gewünschten Produkten kommt, die er sucht. Sich jeder intuitiv im Onlineshop zurechtfindet. Einer der wichtigsten Punkte ist ein übersichtlicher Shop mit leicht zu bedienender Navigation, die das schnelle Auffinden der gewünschten Produkte ermöglicht. Da sich die Onlinewelt in einem Wandel hin zu Mobile befindet, ist die Usability sowohl auf dem Desktop-Gerät wie auch dem Mobile sicherzustellen.


                                </p>
                                <div className="site-analysis">
                                <div className="content-wrapper bg-white grid md:grid-cols-2">
                                <div className="list-box">
                                    
                                    <div className="list-wrapper">
                                        { itemsUsability?.map((item, index) => (
                                            <FramerMotionAnimation
                                                initial={{ opacity: 0, x: -70 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.25, delay: index * 0.1 }}
                                                className="list-item-wrapper" key={index}>
                                                <Image src={squareIcon} alt="square" className="item-icon" />
                                                {item.data}
                                            </FramerMotionAnimation>
                                        ))}
                                    </div>
                                </div>
                                
                                
                            </div> 
                            </div>
                                
                                
                            </FramerMotionAnimation>





                            <FramerMotionAnimation
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                 type="p" className="desc-md-2 primary mb:100 md:mb-24">
                               In erster Linie bezieht sich Benutzerfreundlichkeit auf Effizienz, Effektivität und Zufriedenheit der Kunden in Ihrem Webshop. Wie man technische Verbesserung anbringen kann, die das Verhalten effizienter machen.


                            </FramerMotionAnimation>

                           <FramerMotionAnimation
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="mb-24">
                                <h5 className="content-title">
                                        Benutzererfahrung (User Experience, UX)

                                    </h5>
                                <p className="desc-md-2 mb-50 md:mb-15 primary">
                                    
                                    Die User Experience ist der Eindruck, welche Ihr Onlineshop beim Kunden hinterlässt. Welches Gefühl bei dem Benutzer aufkommt, wenn er mit dem Onlineshop interagiert. Dabei spielen Marketingbotschaften wie auch die Leistung des Shops eine zentrale Rolle.



                                </p>
                                   
                                <p className="desc-md-2 mb-50 md:mb-15 primary">
                                    Wenn Ihr Onlineshop einfach zu bedienen ist, ist die Benutzererfahrung nicht zwingend gut. Nachfolgend möchten wir einige Bespiele anführen, die zur Veranschaulichung von UX dienen:



                                </p>

                                <table class="tg">
                        <thead>
                          <tr>
                            <th class="tg-1oat">Zustand</th>
                            <th class="tg-1oat">Gefühle</th>
                            <th class="tg-1oat">SEO-Massnahme im Webshop</th>
                            
                          </tr>
                        </thead>
                        <tbody>
                          
                          <tr>
                            <td class="tg-1oat">Viele nicht relevante Inhalte im Blog</td>                      
                            <td class="tg-1oat">Fühlt sich verwirrt, stellt Seriosität der Marke infrage</td>
                            <td class="tg-1oat">Klare prägnante Inhalte</td>                            
                
                            
                          </tr>
                          
                          <tr>
                            <td class="tg-1oat">Inhalte sind schlecht platziert, unten & rechts </td>       
                            <td class="tg-1oat">Fühlt sich gelangweilt und genervt</td>
                            <td class="tg-1oat">Inhalte im oberen Bereich und auf der linken Seite platzieren</td>
        
                            
                          </tr>
                            
                            <tr>
                            <td class="tg-1oat">Der Onlineshop lädt sehr langsam</td>
                            <td class="tg-1oat">Wird ungeduldig </td>
                            <td class="tg-1oat">Ladezeiten beschleunigen</td>
            
                            
                          </tr>

                          <tr>
                            <td class="tg-1oat">Unpassende Farben verwendet</td>
                            <td class="tg-1oat">Fühlt sich unsicher, Stimmung trübt</td>
                            <td class="tg-1oat">Wählen Sie Farben gemäss Branchenstandards</td>
                            
                          </tr>

                        </tbody>
                        </table>





                                 <p className="desc-md-2 mb-50 md:mb-15 primary">
                                    Im Verlaufe eines SEO-Projekts, im Optimalfall bereits bei Erstellung des Shops, sollten Sie sich mit UX auseinandersetzen und eine Software verwenden, um mögliche Schwachpunkte zu analysieren. Dabei finden Sie heraus, was in Ihrer Branche die Standards sind und wie Sie zur Verbesserung beitragen können. In diesem Zusammenhang kann man sich auch vieles von den Top-Konkurrenten abschauen, die womöglich das gleiche ebenfalls gemacht haben.




                                </p>




                                
                                
                            </FramerMotionAnimation>

                            <FramerMotionAnimation
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="mb-24">
                                <h5 className="content-title">
                                        Duplicate Content


                                    </h5>
                                <p className="desc-md-2 mb-50 md:mb-15 primary">
                                    
                                    Online-Shops mit Shopsystemen sind anfällig für Duplicate Content, deshalb haben wir hier einen extra Abschnitt dazu verfasst. Meistens werden solche Inhalte von Shop- oder CMS-System automatisch generiert. Es kann sich um Suchergebnisseiten im eigenen Onlineshop handeln oder Filter-Seiten, die gleiche Produkte oder Inhalte mehrfach zeigen.



                                </p>
                                   
                                <p className="desc-md-2 mb-50 md:mb-15 primary">
                                    Auch bei internationalen Shops muss man aufpassen, da dort die gleichen Produkte für verschiedene Länder oder Sprachen angezeigt werden. Dabei muss mit einem entsprechenden Tag die jeweilige Zugehörigkeit markiert werden.




                                </p>


                                 <Image src={duplicateImage} alt="duplicate content" className="main-image" />
                                 <small>Quelle: <a href="https://ahrefs.com/blog/duplicate-content/" target="__blank" title="ahrefs blog">ahrefs blog</a></small>
                                 <br />
                                 <br />
                                 <p className="desc-md-2 mb-50 md:mb-15 primary">
                                    Bei Kunden haben wir Duplicate Content beobachtet, wenn von Lieferanten die Produktbeschreibungen eins zu eins übernommen werden. Wir empfehlen Ihnen dabei eigene und abgeänderte Versionen zu erstellen.



                                </p>

                                <p className="desc-md-2 mb-50 md:mb-15 primary">
                                    <a href="https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls?hl=de" target="__blank" title="duplicate content definition">Die offizielle Definition, was bei Google als Duplicate Content angesehen wird</a>, darf hier nicht fehlen:


                                </p>
                                <b className="desc-md-2 mb-50 md:mb-15 primary">
                                Von Duplicate Content wird gesprochen, 
                                wenn umfassende Inhalte in derselben Sprache auf derselben oder einer 
                                anderen Webseite mehrfach vorhanden sind.</b>
                                <br /><br /><p className="desc-md-2 mb-50 md:mb-15 primary">
                                    Die wichtigsten Basis-Tipps für Onlineshops aus unserer Sicht:



                                </p>

                                <ul>
                                    
                                    <li>Verwende Top-Level-Domains</li>
                                     <li> Reduziere wiederkehrende Textbausteine</li>
                                      <li>Vermeide die Veröffentlichung von Platzhaltern</li>
                                       <li>Reduziere ähnliche Inhalte</li>
                                </ul>

                                <br/><br/>
                                 <h5 className="content-title">
                                        Bei Ihrem Onlineshop prüfen



                                    </h5>
                                <p className="desc-md-2 mb-50 md:mb-15 primary">
                                    
                                    Besteht der Verdacht auf Duplicate Content 
                                    bei Ihrem Onlineshop, so gibt es verschiedene Tools, 
                                    um dies zu prüfen. Der Anbieter ahrefs.com stellt eine Analyse zur Verfügung, 
                                    die Content Quality Report heisst. 
                                    Dort kann man die betroffenen Seiten auslesen und entsprechende Schritte in die Wege leiten.




                                </p>

                                <Image src={duplicateAhrefsImage} alt="ahrefs Duplicate Content" className="main-image"/>

                                
                                
                            </FramerMotionAnimation>
                        </div>
                    </div>
                </section>

                <CollapsibleList link={'technisch'} data={seoShopTechData} />




                <section id="content" className="section-wrapper keywords">
                    <div className="container">
                        <div className="title-wrapper">
                            <FramerMotionAnimation
                                type="h2" className="title text-center">
                               Content Marketing


                            </FramerMotionAnimation>
                        </div>
                        <FramerMotionAnimation
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            type="p" className="desc-md mb-50 md:mb-20">
                            Als Shopbetreiber möchten Sie hohe Einnahmen erzielen. Eine gezielte Contentstrategie kann Ihrem Unternehmen dabei helfen, mehr Kunden zu erreichen. Ob nun ein Text verfasst wird, um ein Problem der Zielgruppe zu lösen oder ein Produkt zu bewerben, nützliche Inhalte kommen bei Benutzern in der Regel sehr gut an. Auch bei Suchmaschinen kommen einzigartige Inhalte gut an, denn diese möchten den Benutzer mit Ihrem Algorithmus möglichst gut bedienen.



                        </FramerMotionAnimation>

                        <FramerMotionAnimation
                                type="h4" className="title text-center">
                                 Markenaufbau
                            </FramerMotionAnimation>
                        <FramerMotionAnimation
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            type="p" className="desc-md mb-50 md:mb-20">
                        Personen im Internet kaufen eher bei Marken, das ist seit langem bekannt. Besonders große und bekannte Marken werden von Google als Autoritäten eingestuft und aus diesem Grund bei bestimmten Suchanfragen bevorzugt.


                        </FramerMotionAnimation>

                         
                        <FramerMotionAnimation
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            type="p" className="desc-md mb-90 md:mb-32">
                           Das Problem beim Branding von Kampagnen ist, dass der Effekt nur schwer messbar ist. Markenbekanntheit lässt sich nur schwer erforschen oder bestimmen. Somit ist es problematisch, den genauen Effekt einer einzelnen Content-Kampagne zu bestimmen. Hier kommt E-A-T ins Spiel, ein von Google eingeführte Markenbewertung. Wenn Sie E-A-T für Content Marketing im Kontext von SEO nicht berücksichtigen, können Sie gleich die Flinte ins Korn werfen.



                        </FramerMotionAnimation>
                        <FramerMotionAnimation
                                type="h4" className="title text-center">
                                Vertrauen stärken

                            </FramerMotionAnimation>
                        <FramerMotionAnimation
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            type="p" className="desc-md mb-90 md:mb-32">
                           <a href="" title="In diesem Leitfaden bestätigt Google" target="__blank">In diesem Leitfaden bestätigt Google</a>, was wir auch in der Praxis beobachten. Man sollte sich in einem bestimmten Bereich einen Ruf für Kompetenz über die eigene Webseite oder einen informellen Bereich des Shops aufbauen. Content Marketing ist dazu das effektivste Instrument.



                        </FramerMotionAnimation>

                        <FramerMotionAnimation
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            type="p" className="desc-md mb-15 md:mb-10">
                           Google streicht auch hervor, dass man Kompetenz zeigt, z.B. indem man auch als Shop einen eigenen Kundenservice-Bereich implementiert. Alle diese Faktoren gehen wieder in den Bereich von E-A-T, auf das wir oben bereits eingegangen sind. Eine Checkliste für den Vertrauensaufbau von Onlineshops bei Nutzern:

                        </FramerMotionAnimation>

                        <div className="site-analysis" style={{ padding: 0}}>
                                <div className="content-wrapper bg-white grid md:grid-cols-2">
                                <div className="list-box">
                                    
                                    <div className="list-wrapper">
                                        { itemsTrust?.map((item, index) => (
                                            <FramerMotionAnimation
                                                initial={{ opacity: 0, x: -70 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.25, delay: index * 0.1 }}
                                                className="list-item-wrapper" key={index}>
                                                <Image src={squareIcon} alt="square" className="item-icon" />
                                                {item.data}
                                            </FramerMotionAnimation>
                                        ))}
                                    </div>
                                </div>
                                
                                
                            </div> 
                            </div>


                            <FramerMotionAnimation
                                type="h4" className="title text-center">
                                Interne Verlinkung


                            </FramerMotionAnimation>
                        <FramerMotionAnimation
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            type="p" className="desc-md mb-90 md:mb-32">
                          Das Content Marketing wird im Bereich SEO dazu verwendet, die interne Verlinkung zu stärken. Mit dem Erstellen von Inhalten und entsprechenden internen Links sollen wichtige Unterseiten gestärkt werden.



                        </FramerMotionAnimation>

                        <FramerMotionAnimation
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            type="p" className="desc-md mb-15 md:mb-10">
                           Dazu gibt es wiederum Standards von Google aus dem gleichen Leitfaden in Bezug auf Linktext, Keywords, usw., die man berücksichtigen sollte. In diesem Ratgeber können wir nicht detailliert über die interne Verlinkung eingehen, da dies den Rahmen sprengt. Trotzdem führen wir Ihnen einige Google-Tipps dazu auf:


                        </FramerMotionAnimation>

                        <div className="site-analysis" style={{ padding: 0}}>
                                <div className="content-wrapper bg-white grid md:grid-cols-2">
                                <div className="list-box">
                                    
                                    <div className="list-wrapper">
                                        { itemsInternal?.map((item, index) => (
                                            <FramerMotionAnimation
                                                initial={{ opacity: 0, x: -70 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.25, delay: index * 0.1 }}
                                                className="list-item-wrapper" key={index}>
                                                <Image src={squareIcon} alt="square" className="item-icon" />
                                                {item.data}
                                            </FramerMotionAnimation>
                                        ))}
                                    </div>
                                </div>
                                
                                
                            </div> 
                            </div>

                    </div>
                </section>


                 <section id="linkaufbau" className="section-wrapper keywords">
                    <div className="container bg-grey">
                        <div className="title-wrapper">
                            <FramerMotionAnimation
                                type="h2" className="title text-center">
                               Linkaufbau



                            </FramerMotionAnimation>
                        </div>
                        <FramerMotionAnimation
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            type="p" className="desc-md mb-50 md:mb-20">
                            Grundsätzlich bewertet die Google-Suchmaschine Links als Gradmesser für Popularität im Internet. Dabei galt lange, dass ältere Domains möglicherweise effektiver sind als Neue. Die genauen Rankingfaktoren sind nicht bekannt, jedoch können viele SEO-Experten aus Erfahrungen sagen, dass gewisse Faktoren wichtiger sind als andere.




                        </FramerMotionAnimation>

                       
                        <FramerMotionAnimation
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            type="p" className="desc-md mb-50 md:mb-20">
                        <Link href="/seo/was-ist-seo#ranking" title="In unserem Was-ist-SEO-Artikel">In unserem Was-ist-SEO-Artikel</Link> legen wir dar, welche die zehn wichtigsten Rankingfaktoren aus unserer Sicht sind. Es ist von zentraler Bedeutung, dass wenn man versucht Links von anderen Webseiten zu bekommen, dass dies hochwertige und zum eigenen Unternehmen relevante Quellen sind.

                        </FramerMotionAnimation>

                         
                        <FramerMotionAnimation
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            type="p" className="desc-md mb-90 md:mb-32">
                           Beim Linkaufbau für Onlineshops sehen wir vier wichtige Bereiche:

                        </FramerMotionAnimation>


                        </div>

                     <CollapsibleList link={'backlinks'} data={seoLinkData} />
                </section>
                                       


                <FAQ link={'faq'} data={faqSeoShopData} />

                 <WorkWithUs />

                <Comments slug={'seo-kosten'} />



            </main>
        </>
    )
}




const post = {
                slug: 'online-shop-seo',
                shortTitle: 'Online-Shop SEO',
                category: 'E-Commerce',
                categoryUrl: '/ecommerce',
                title: 'Online-Shop SEO perfektionieren',
                description: 'Diese SEO-Massnahmen machen deinen Online-Shop bei Google erfolgreich! ✪Tipps zu Keywords & Shopsystem.',
                image: seoOnlineshop,
                imageAlt: 'Online Shop SEO',
                readMoreUrl: '/seo/online-shop-seo',
                date: '03.03.2022',
                update: '03.03.2022',
                readingTime: '21min Lesedauer',
                cta: 'Online Shop SEO',
                author: 'Sandro Huber',
                authorImage: sandro,
                contentList: [

                    {
                        item: 'Weshalb lohnt sich Suchmaschinenoptimierung für Onlineshops?',
                        link: '#lohnt'
                    },
                    {
                        item: 'Welche Funktionen muss ein Onlineshop für SEO mitbringen?',
                        link: '#funktionen'
                    },
                    {
                        item: 'Aufsetzen eines Onlineshops für SEO',
                        link: '#setup'
                    },
                    {
                        item: 'Shopsysteme',
                        link: '#shopsysteme'
                    },
                   
                    {
                        item: 'Shop-SEO-Analyse',
                        link: '#shopanalyse'
                    },
                     {
                        item: 'Struktur des Onlineshops',
                        link: '#struktur'
                    },
                     {
                        item: 'Onpage für Onlineshops',
                        link: '#onpage'
                    },
                     {
                        item: 'Technische Suchmaschinenoptimierung für Shops',
                        link: '#technisch'
                    },
                     {
                        item: 'Shop Content Marketing',
                        link: '#content'
                    },
                    
                     {
                        item: 'Linkaufbau',
                        link: '#linkaufbau'
                    },
                    
                    {
                        item: 'Häufige Fragen',
                        link: '#faq'
                    },
                  
                
                ],
                introTitle: '',
                introDescription: 'Online-Shop SEO will Produkte eines Webshops möglichst weit oben bei Google platzieren und damit viele neue Kunden ansprechen.',
                introDescription2: 'Heute zeigen wir Ihnen, wie wir für unsere Kunden mit Online-Shop im Durchschnitt mindestens 500% mehr Besucher in einem Jahr erreichen konnten. Die massgebenden Bereiche für erfolgreiches E-Commerce-SEO zeigen wir auf und erklären mit Beispielen, wie man diese bearbeiten kann.',
                introDescription3: 'Neben Tipps haben wir auch einige Vergleiche für Sie bereit. Wir nehmen einige Shopsysteme unter die Lupe und prüfen, wie diese sich für Suchmaschinen eignen.\n\nAlles in allem erfahren Sie in diesem Guide, wie man das Google-Ranking des eigenen Online-Shops verbessern kann. Wie man die richtigen Keywords findet und eine Strategie für den eigenen Shop aufsetzt.',
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
                        data: 'Lassen Sie sich Zeit für das Planen des Shopsystems, ein Wechsel ist mit viel Aufwand verbunden und kann teuer werden.'
                    },
                    {
                        data: 'Denken Sie an die Zukunft. Auch wenn Ihr Unternehmen aktuell klein ist, rechnen Sie damit, dass Sie künftig grösser sein können.'
                    },
                    {
                        data: 'Verwenden Sie kein Shopsystem, weil es anderen verwenden. Prüfen Sie Ihre Bedürfnisse und wählen Sie dann.'
                    },
                    {data: 'Eine Umsetzung'},

                    {data: 'Denken Sie an eine Eigenentwicklung, denn dann haben Sie die volle Kontrolle über Design, Funktionen, usw. Ob eine Eigenentwicklung möglich ist hängt vom Budget ab. Wenn Sie ein Online-Business aufbauen möchten, ist der Shop das Herzstück Ihres Geschäfts und sollte dementsprechend Rechnung getragen werden.'},


                ];

const itemsCheckId = 'funktionen'
const itemsLeftSubtitle1 = 'Zwingend'
const itemsLeft = [

                      {
                        data: 'URLs, Page Title und Meta Descriptions müssen pro Seite definiert werden können'
                    },
                    {
                        data: ' Auf den Kategorieseiten (z.B. Tierbedarf / Hund ) muss es möglich sein, über und unter den Produkten Text einzufügen'
                    },
                    {
                        data: 'Für jedes Bild muss ein ALT-Attribut gesetzt werden können'
                    },
                    {data: 'Überschriften (h1, h2, usw.) müssen gesetzt werden können'},

                    {data: ' Bei allen Links muss ein Anchor- und Linktitel definiert werden können'},

                       {data: ' Bei allen Links muss ein Anchor- und Linktitel definiert werden können'},
                          {data: 'Es benötigt einen Text-Editor für die Produkte, mit dem das Content Design verändert werden kann'},
                             {data: 'Es braucht einen Content-Bereich wie z.B. Ratgeber, Blog, usw.'},
                                {data: ' robots.txt und XML-Sitemap müssen generiert werden'},
                                   {data: ' Weiterleitungen müssen einfach gesetzt werden können'},
                                      {data: ' Interne Verlinkung über eine Breadcrumb und ähnliche Produkte'},


                ];

const itemsLeftSubtitle2 = 'Optional'
const itemsLeft2 = [

                      {
                        data: ' Der allgemeine HTML-head-Bereich** muss bearbeitbar sein'
                    },
                    {
                        data: ' Produktbewertungsfunktion moderierbar'
                    },
                    {
                        data: ' Es muss möglich sein, strukturierte Daten zu verwenden oder diese manuell einzufügen'
                    },
                    {data: ' Man muss einfach Produkte-Videos in die Beschreibung einbinden können'},

                   

                ];

const itemsTrust = [

                    {
                        id: '1',
                        data: 'Eine angemessene Menge an Inhalten'
                    },
                    {   
                         id: '2',
                        data: 'Ablenkende Werbung vermeiden'
                    },
                    {
                        data: 'Optimieren von Inhalten für Nutzer, nicht für die Suchmaschinen'
                    },
                    {data: 'Erstellen von frischen, einzigartigen Inhalten'},
                     


                ];

const listAufsetzen = [

                    {
                        id: '1',
                        data: 'Prüfen, ob das bestehende oder geplante Shopsystem die SEO-Funktionen erfüllt'
                    },
                    {   
                         id: '2',
                        data: 'Falls nicht alle Punkte erfüllt werden können, definieren von Prioritäten (Wachstumshebel)'
                    },
                    {
                        data: 'Weitere Faktoren wie z.B. PageSpeed, Mobile-Fähigkeit, usw. berücksichtigen'
                    },
                    {data: 'Konkrete Massnahmen ableiten & umsetzen (Setup oder Umzug)'},
                     {data: 'Die User-Experience einschliessen'},
                      {data: 'SEO-Checks durchführen'},

                       {data: 'Den Online Shop live stellen'},


                ];


const itemsComp = [

                    {
                        data: ' Wer ist unsere Konkurrenz?'
                    },
                    {
                        data: ' Wie viele indexierte URLs hat die Konkurrenz?'
                    },
                    {
                        data: ' Wie viele Top10 Rankings hat die Konkurrenz?'
                    },
                    {data: ' Wie hoch ist das Domain Rating der Konkurrenz?'},

                    {data: 'Wie oft wird die Marke der Konkurrenz gesucht?'},
                    {data: ' Wie ist man bezüglich Mobile Web aufgestellt?'},
                    {data: 'Wie gestaltet sich das Nutzerverhalten bei der Konkurrenz?'},

                ];


const listStructure = [

                    {
                        data: '[domain]/ (startseite)'
                    },
                    {
                        data: '[domain]/kategorie1'
                    },
                    {
                        data: '[domain]/kategorie1/produkt1'
                    },
                    {data: '[domain]/kategorie1/produkt2'},
                    {data: '[domain]/kategorie2/produkt1'},
                     {data: '[domain]/kategorie2/produkt2'},
                    {data: '[domain]/ratgeber'},
                    {data: '[domain]/blog'},


                ];



const listExample = [

                    {
                        data: 'Was für ein Unternehmen haben Sie bzw. aus welcher Branche'
                    },
                    {
                        data: 'Welche Vorteile bietet dein Shop, was andere nicht bieten können (USP)'
                    },
                    

                ];


const listCategory = [

                    {
                        data: ' Eine Keyword-optimierte Überschrift'
                    },
                    {
                        data: 'Sekundärnavigation (Breadcrumb)'
                    },
                    {
                        data: 'Ein kurzer Einleitungstext mit den wichtigsten Informationen zum Angebot'
                    },
                    {
                        data: 'Auflistung von Produkten inkl. Kurzbeschreibung'
                    },
                    {
                        data: 'Filter- und Sortierfunktion nach Produktrelevanz am besten links oder oben'
                    },
                    {
                        data: ' Einen langen Text zur Kategorie'
                    },
                    
                    

                ];

const itemsImport = [

      {
                        data: 'Überschrift ist der Produktename oder die -bezeichung'
                    },
                    {
                        data: 'Sekundärnavigation (Breadcrumb)'
                    },
                    {
                        data: 'Mindestens 50 Wörter einzigartiger Inhalt (sonst Abstufung durch Suchmaschine)'
                    },
                    {
                        data: 'Gestalten Sie einen Kopfbereich mit Bild und den wichtigsten Informationen wie z.B. Preis, Verfügbarkeit und USP.'
                    },
                    {
                        data: ' Bereichern Sie die Inhalte mit Bildern, Produkte-Videos, usw.'
                    },
                    {
                        data: 'Zeigen Sie die Zahlungsmöglichkeiten, damit der Kunde nicht danach suchen muss'
                    },

                     {
                        data: 'Zeigen Sie echte Kundenbewertungen zu den Produkten'
                    },
                    

                     {
                        data: 'Sofern relevant, Technische Details und mögliches Zubehör zum Produkt anzeigen'
                    },
                     {
                        data: 'Ähnliche Produkte anzeigen, sofern es um ein Produkt mit grosser Auswahl handelt'
                    },
                    
                    


    ]


const itemsUsability = [

      {
                        data: 'Bietet das Design alle notwendigen Elemente?'
                    },
                    {
                        data: 'Ist die Navigation einfach und zielführend?'
                    },
                    {
                        data: 'Gelangt man ohne grossen Aufwand zu den Produkten?'
                    },
                    {
                        data: 'Ist der Bezahlprozess sicher und einfach?'
                    },
                    {
                        data: 'Gibt es entsprechende Suchfelder und Sortiermöglichkeiten, die eine Suche oder Verfeinerung leicht machen?'
                    },
                    {
                        data: 'Gelangt ein Benutzer einfach zu hochwertigen Produktfotos oder -videos?'
                    },

    ]

const itemsInternal = [
                            {
                            data: 'Einen aussagekräftigen Ankertext wählen'
                    },
                    {
                        data: 'Interne Links leicht erkennbar machen'
                    },
                    {
                        data: 'Keine Ankertexte wie z.B. Seite, Artikel oder hier klicken'
                    },
                    {
                        data: 'Keine interne Verlinkung oder thematischen Bezug'
                    },
                   

    ]