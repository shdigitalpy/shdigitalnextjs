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

import onpageOptimizationSectionData from '../../data/onpageOptimizationSectionData';
import offpageOptimizationSectionData from '../../data/offpageOptimizationSectionData';
import faqSeoDauerData from '../../data/faqSeoDauerData';

const inter = Inter({subsets: ['latin']})




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

                 <section id="keywords" className="section-wrapper keywords">
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
                        item: 'Was kostet SEO von SH Digital?',
                        link: '#shdigital'
                    },
                    {
                        item: 'Häufige Fragen',
                        link: '#fehler'
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