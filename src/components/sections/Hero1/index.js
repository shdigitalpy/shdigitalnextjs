import React from 'react';
import Image from 'next/image';
import Link from "next/link";
import FramerMotionAnimation from "../../common/FramerMotionAnimation";
import seoagentur from '../../../assets/images/mainpage/seo-agentur-sichtbarkeit.webp';
import downArrow from '../../../assets/icons/down-arrow-1.svg';
import upRightArrow from '../../../assets/icons/up-right-arrow.svg';

const Hero = () => {
    return (
        <FramerMotionAnimation type="section" className="hero flex flex-col md:flex-row  bg-gray">
            <FramerMotionAnimation
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}>
                <Image src={seoagentur} alt={'SEO Agentur - konstante Sichtbarkeit'} className="flex-1 hero-img"  />
            </FramerMotionAnimation>
            <FramerMotionAnimation
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="content-wrapper flex-1 relative">
                <div className="arrows-container">
                    <Image src={downArrow} alt="down arrow"/>
                    <Image src={downArrow} alt="down arrow"/>
                </div>
                <h1 className="title font-semibold">SEO Agentur: Konstante Sichtbarkeit im Web</h1>
                <p className="desc">
                    Unser Ansatz, die Performance SEO-Pro-Methode®, ist speziell darauf ausgerichtet, 
                    Unternehmen in den Bereichen Software, Industrie und E-Commerce dabei zu unterstützen, 
                    die Sichtbarkeit im Online-Bereich signifikant zu steigern. 
                    Insbesondere bei komplexen und erklärungsbedürftigen Angeboten 
                    setzen wir auf eine effektive Kombination aus SEO-Strategien und 
                    gezielten Werbeanzeigen. Durch diese Maßnahmen generieren wir 
                    für Ihr Unternehmen eine höhere Anzahl qualifizierter Besucher 
                    auf Ihrer Webseite. Dies wiederum trägt dazu bei, 
                    Ihre Sales-Pipeline zu füllen und die Conversion Rate zu verbessern, 
                    um letztendlich Ihren Geschäftserfolg zu maximieren.





                </p>
                <Link href="/contact">
                <button className="cta-btn text-white bg-primary">
                    
                    Kontakt

                    <Image src={upRightArrow} alt={'up right arrow'} className="arrow-icon" />
                </button></Link>
            </FramerMotionAnimation>
        </FramerMotionAnimation>
    );
};

export default Hero;
