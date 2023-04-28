import React from 'react';
import Link from "next/link";
import Image from "next/image";
import upRightArrow from '../../../assets/icons/up-right-arrow-dark.svg';
import FramerMotionAnimation from "../../common/FramerMotionAnimation";

const ContentStrip = ({ title, btnTitle, btnUrl }) => {
    return (
        <section className="content-strip container">
            <FramerMotionAnimation>
                <div className="content-wrapper bg-primary flex flex-col md:flex-row items-center">
                    <h2 className="title font-medium text-white">{ title }</h2>
                    <Link href={btnUrl} className="cta-btn bg-white flex items-center">
                        <p className="btn-text font-medium">{ btnTitle }</p>
                        <Image src={upRightArrow} alt={"up right arrow"} className="btn-icon" />
                    </Link>
                </div>
            </FramerMotionAnimation>
        </section>
    );
};

export default ContentStrip;
