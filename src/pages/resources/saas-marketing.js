import Link from 'next/link';
import Head from 'next/head';
import {Inter} from 'next/font/google';
import {useEffect, useState} from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Banner from '../../components/common/Banner';
import sandro from '../../assets/images/blog/sandro.png';
import BreadCrumb from '../../components/common/BreadCrumb';
import twitterIcon from '../../assets/icons/twitter-white.svg';
import facebookIcon from '../../assets/icons/facebook-white.svg';
import WhatGoogleSays from '../../components/sections/WhatGoogleSays';
import FramerMotionAnimation from '../../components/common/FramerMotionAnimation';
import doubleArrowIcon from '../../assets/images/sharp-double-arrow-down.svg';
import VideoContainer from "../../components/common/VideoContainer";
import saasMImage from '../../assets/images/saas-marketing-ai.jpg'
import holdingLaptop from '../../assets/images/holding-laptop-3.png';
import holdingLaptopVid from '../../assets/images/seo/seovideothumbnail.jpg'
import playIcon from '../../assets/icons/play.svg';
import MoreInterestingPostsDatenschutz from "../../components/sections/MoreInterestingPostsDatenschutz";
import Comments from "../../components/sections/Comments";
import checkMinusIcon from '../../assets/icons/minus.svg';
import ListItems from '../../components/common/ListItems';
import upRightArrowIcon from '../../assets/icons/up-right-arrow.svg';
import imageSEOpro from '../../assets/images/seo-performance-pro.png'
import checkCircleOrange from '../../assets/icons/check-circle-orange.svg';
import JustList from '../../components/sections/JustList';

import allinOneViewData from '../../data/allinOneViewData';
const inter = Inter({subsets: ['latin']})

const url = 'https://www.sh-digital.ch'
const category = 'resources'

export default function effektivesMarketing() {
    

    return (
        <>
            <Head>
      
                <title>Effektives Marketing in der Software-Branche | SH Digital</title>
                <meta name="description" content="Effektives Marketing in der Software-Branche"/>
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

                 <section id="indexierung" style={{ whiteSpace: "break-spaces", paddingBottom: "0" }} className="content-with-video container">
            <FramerMotionAnimation>
                <div className="flex flex-col md:flex-row">
                    <FramerMotionAnimation
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.25 }}
                        className="content-wrapper flex-1">
                        <h2 className="title font-medium"></h2>
                        <p className="desc">Für Verkaufsleiter, Marketingverantwortliche, Business Developer und CEOs der Software-Branche</p>
                        
                        <br />
                        <div className="tag-images flex align-center">


                           <FramerMotionAnimation type="p" className="description">
                               

                        Die heutige Zeit stellt uns vor neue Herausforderungen im Marketing:
                        <br /><br />
                        <b>Die herkömmlichen Kanäle erzielen nicht mehr die gleichen Erfolge wie noch vor einigen Jahren. </b>
                        <br /><br />
                        Haben Sie auch das Gefühl, dass Ihre Marketingbemühungen nicht mehr die gewünschten Ergebnisse erzielen?
                        <br /><br />
                        Viele Unternehmen neigen dazu, Fachjargon als vermeintlich geeignete Marketingbotschaft einzusetzen. 
                        <br /><br />
                        Doch die Wahrheit ist, dass es immer schwieriger wird, das Angebot einfach auszudrücken. Insbesondere für Personen, die bereits lange in der Branche tätig sind.


                         </FramerMotionAnimation>
                        </div>
                        <br />

                        <h2 className="title font-medium"></h2>
                        <p className="desc">Wie verkaufen die meisten Sofware-Unternehmen:</p>

                      
                    </FramerMotionAnimation>





                    <FramerMotionAnimation
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.25 }}
                        className="video-wrapper flex-1">
                         <Image src={imageSEOpro} alt="image SEO pro" className="cta-icon" />
                    </FramerMotionAnimation>
                </div>
            </FramerMotionAnimation>
        </section>


        <section id="indexierung" style={{ whiteSpace: "break-spaces" }} className="content-with-video container">
            <FramerMotionAnimation>
                <div className="">
                    <FramerMotionAnimation
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.25 }}
                        className="content-wrapper ">
                       

                        <ListItems items={fehlerListItems} />

                        <br /><br />


                        <div className="title-wrapper">
                            <h2 className="title font-medium"></h2>
                                <p className="desc">
                       
                            Um künftig noch erfolgreich zu sein, stehen Software-Unternehmen vor der Herausforderung, bezüglich Online Marketing auf ein völlig neues Niveau zu gelangen. 
                            Aber die Liste an Punkten, die zu Reibung mit potenziellen Kunden führen, sind lang.
                            </p>
                        </div>


                        <FramerMotionAnimation
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            type="p" className="desc-md mb-15 md:mb-15">
                             
                            <br /><br />
                            <b>Dafür haben wir in den letzten Jahren die Performance-SEO Pro-Methode®</b> entwickelt:  

                            
                         </FramerMotionAnimation>

                        <br />

                        
                        
                        <div className="main-wrapper md:flex">
                        
                        <div className="content-wrapper">
                            <div className="list-wrapper">
                                { listItems?.map((item, index) => (
                                    <FramerMotionAnimation
                                        initial={{ opacity: 0, x: 50 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.25, delay: index * 0.1 }}
                                        className="item" key={index}>
                                        <div style={{display: "flex", alignItems:"center"}} >
                                        <Image src={checkCircleOrange} alt="check icon" className="check-icon" />
                                        <div style={{marginLeft: "15px"}}>
                                        { item.data }<br /><br />
                                        </div>
                                        </div>
                                    </FramerMotionAnimation>
                                ))}
                            </div>
                            
                           
                        </div>
               
                    </div>


                         <br />
                         <Link href="/angebot" className="cta-btn btn-primary flex bg-primary items-center text-white">
                            Zum Angebot
                        <Image src={upRightArrowIcon} alt="arrow icon" className="cta-icon" />
                    </Link>
                    </FramerMotionAnimation>





                    
                </div>
            </FramerMotionAnimation>
        </section>


                <Comments slug={'seo-strategie'} />



            </main>
        </>
    )
}



const post =  {



               slug: 'saas-marketing',
                shortTitle: 'Effektives Marketing in der Software-Branche',
                title: 'Effektives Marketing in der Software-Branche',
                description: 'Effektives Marketing in der Software-Branche',
                image: saasMImage,
                imageAlt: 'Effektives Marketing in der Software-Branche',
                date: '13.07.2023',
                update: '13.07.2023',
                readingTime: '1min Lesedauer',
                cta: 'Zum Beitrag',
                author: 'Sandro Huber',
                authorImage: sandro,
           
               
                category: 'Ressourcen',
                categoryUrl: '/resources',
                
                
                
            };


const listItems = [

                    {
                        data: 'Diese Methode greift die essenziellen Aspekte auf, um für die Zielgruppe Ihres Softwarehauses attraktiv zu bleiben.'
                    },
                    {
                        data: 'Darüber hinaus ergänzt unsere Methode das traditionelle SEO um Werkzeuge, die schnellere Erfolge ermöglichen. Unser Ansatz besteht darin, die langfristigen Ergebnisse durch die geschickte Integration von zeitlich effizienten Marketingmassnahmen zu verkürzen, die sich optimal mit SEO kombinieren lassen.'
                    },
                    {
                        data: 'Dank der Performance-SEO Pro-Methode® werden unsere Kunden dauerhaft sichtbar und können durch die Reduzierung von Reibungspunkten qualifizierte Anfragen von Geschäftskunden über die Webseite generieren. Zudem ermöglichen wir automatisierte Neukundentermine, die Ihren Vertrieb unterstützen.'
                    },
            

                ];

const fehlerListItems = [

{
        icon: checkMinusIcon,
        text: 'Sie verstricken sich in Fachausdrücken und pitchen das Angebot, anstatt die wirklichen Schmerzpunkte der Kunden zu adressieren.',
    },
    {
        icon: checkMinusIcon,
        text: 'In einer Zeit der kurzen Aufmerksamkeitsspanne führt dies dazu, dass Werbeanzeigen und Webseiteninhalte häufig nicht attraktiv genug für potenzielle Kunden sind.',
    },

    {
        icon: checkMinusIcon,
        text: 'Wenn diese Probleme mit anderen Faktoren wie einer schwachen Markenpräsenz, veralteten Inhalten oder einer insgesamt unzureichenden Website kombiniert werden, führt dies zu einem Mangel an Neukunden im Online-Bereich.',
    },
    
 
   
    

    ]


