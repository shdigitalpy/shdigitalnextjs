import React from 'react';
import Image from 'next/image';
import FramerMotionAnimation from "../../common/FramerMotionAnimation";
import seoagentur from '../../../assets/images/mainpage/seo-agentur.webp';
import downArrow from '../../../assets/icons/down-arrow-1.svg';
import upRightArrow from '../../../assets/icons/up-right-arrow.svg';

const Hero = () => {
    return (
        <FramerMotionAnimation type="section" className="hero flex flex-col md:flex-row  bg-gray">
            <FramerMotionAnimation
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}>
                <Image src={seoagentur} alt={'hero'} className="flex-1 hero-img"  />
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
                <h1 className="title font-semibold">SEO Agentur</h1>
                <p className="desc">
                    Die von Sandro Huber entwickelte und einmalige Marketing Methode hilft Software, Industrie sowie
                    E-Commerce Unternehmen mit dem Angebot bei Google auf die erste Seite
                    zu kommen. Unsere Kunden lassen dadurch die Konkurrenz hinter sich und können die eigenen Produkte
                    oder Dienstleistungen schneller verkaufen.
                </p>
                <button className="cta-btn text-white bg-primary">
                    Kostenlose Potentialanalyse
                    <Image src={upRightArrow} alt={'up right arrow'} className="arrow-icon" />
                </button>
            </FramerMotionAnimation>
        </FramerMotionAnimation>
    );
};

export default Hero;
