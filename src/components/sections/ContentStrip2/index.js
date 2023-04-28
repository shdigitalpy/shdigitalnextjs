import React from 'react';
import Image from "next/image";
import FramerMotionAnimation from "../../common/FramerMotionAnimation";
import doubleArrows from '../../../assets/images/double-down-arrow-light-gray.png';

const ContentStrip2 = ({ title = '', description = '', className = ''}) => {
    return (
        <section className={`content-strip-2 container ${className}`}>
            <div className="content-wrapper md:flex items-center justify-between bg-primary">
                <div className="title-wrapper">
                    <FramerMotionAnimation type="h2" className="title text-white">{ title }</FramerMotionAnimation>
                </div>
                <FramerMotionAnimation className="arrows-wrapper">
                    <Image src={doubleArrows} alt="arrows" className="arrows-icon" />
                </FramerMotionAnimation>
                <div className="description-wrapper">
                    <FramerMotionAnimation type="p" className="">{ description }</FramerMotionAnimation>
                </div>
            </div>
        </section>
    );
};

export default ContentStrip2;
