import React from 'react';
import Image from "next/image";
import holdingLaptop from '../../../assets/images/holding-laptop-4.png';
import doubleArrowRightIcon from '../../../assets/images/double-arrow-right-gray.png';
import arrowRightIcon from '../../../assets/icons/arrow-right.svg';
import chartIcon from '../../../assets/icons/chart.svg';
import growthIcon from '../../../assets/icons/increase.svg';
import awardIcon from '../../../assets/icons/award.svg';
import FramerMotionAnimation from "../../common/FramerMotionAnimation";

const WhoAreWe = () => {
    return (
        <section className="who-are-we container">
            <FramerMotionAnimation className="title-wrapper text-center">
                <h6 className="title-secondary">Über SH Digital</h6>
                <h1 className="title">Wer sind wir</h1>
            </FramerMotionAnimation>
            <FramerMotionAnimation className="main-image-wrapper">
                <Image src={holdingLaptop} alt="Who are we" className="main-image" />
            </FramerMotionAnimation>
            <div className="content-wrapper md:flex items-center">
                <FramerMotionAnimation className="points-wrapper">
                    <p className="point-item">
                        <Image src={arrowRightIcon} alt="point icon" className="point-icon" />
                        30+ Premium-Projekte betreut
                    </p>
                    <p className="point-item">
                        <Image src={arrowRightIcon} alt="point icon" className="point-icon" />
                        5500% Wachstum erreicht für Kunden
                    </p>
                    <p className="point-item">
                        <Image src={arrowRightIcon} alt="point icon" className="point-icon" />
                        15+ Jahre Erfahrung im Google Marketing
                    </p>
                </FramerMotionAnimation>
                <FramerMotionAnimation className="arrow-wrapper">
                    <Image src={doubleArrowRightIcon} alt="double arrows" className="arrow-icon" />
                </FramerMotionAnimation>
                <FramerMotionAnimation className="stats-wrapper">
                    <div className="stats-item">
                        <Image src={chartIcon} alt="stats icon" className="stats-icon" />
                        <p className="stats-title">Projekte</p>
                        <p className="stats-value">30+</p>
                    </div>
                    <div className="stats-item">
                        <Image src={growthIcon} alt="stats icon" className="stats-icon" />
                        <p className="stats-title">Wachstum</p>
                        <p className="stats-value">5500%</p>
                    </div>
                    <div className="stats-item">
                        <Image src={awardIcon} alt="stats icon" className="stats-icon" />
                        <p className="stats-title">Jahre Erfahrung</p>
                        <p className="stats-value">15+</p>
                    </div>
                </FramerMotionAnimation>
            </div>
        </section>
    );
};

export default WhoAreWe;
