import React from 'react';
import Image from "next/image";
import doubleDownArrow from '../../../assets/images/double-down-arrow-banner.png';
import doubleDownArrowLight from '../../../assets/images/double-down-arrow-light-gray.png';
import FramerMotionAnimation from "../FramerMotionAnimation";

const Banner = ({ bg, children, arrow, arrowLight = false, gradientClass = false, className = '' }) => {
    return (
        <section className={`banner container relative ${className}`}>
            { bg && <Image src={bg} alt="banner" className="banner-bg" /> }
            { gradientClass && <div className={`gradient ${gradientClass}`}/> }
            <FramerMotionAnimation className="content-wrapper text-white flex items-center relative">
                { arrow && (
                    <Image src={ arrowLight ? doubleDownArrowLight : doubleDownArrow} alt="down arrows" className="banner-arrows" />
                )}
                <div className="content">
                    { children }
                </div>
            </FramerMotionAnimation>
        </section>
    );
};

export default Banner;
