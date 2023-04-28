import React from 'react';
import Image from "next/image";
import Link from "next/link";
import meeting from '../../../assets/images/meeting6.png';
import upRightArrowIcon from '../../../assets/icons/up-right-arrow.svg';
import FramerMotionAnimation from "../../common/FramerMotionAnimation";

const Evidence = ({ img, fullImg = false, className = '' }) => {
    return (
        <section className={`evidence ${fullImg ? '' : 'container'} ${className}`}>
            <FramerMotionAnimation
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="image-wrapper">
                <Image src={img || meeting} alt="evidence" className="main-image" />
            </FramerMotionAnimation>
            <FramerMotionAnimation className={`content-wrapper md:flex ${fullImg ? 'container' : ''}`}>
                <div className="title-wrapper mt-8">
                    <h1 className="title">
                        <div>SIE SUCHEN</div>
                        <div>BEWEISE?</div>
                    </h1>
                    <p className="desc">Werfen Sie einen Blick in Projekte, die wir bisher umgesetzt haben.</p>
                </div>
                <Link href={"/agentur"} className="read-more-link btn-primary bg-primary text-white flex">
                    Mehr erfahren
                    <Image src={upRightArrowIcon} alt="arrow icon" className="read-more-icon" />
                </Link>
            </FramerMotionAnimation>
        </section>
    );
};

export default Evidence;
