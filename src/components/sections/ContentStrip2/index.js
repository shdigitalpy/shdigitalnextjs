import React from 'react';
import Image from "next/image";
import FramerMotionAnimation from "../../common/FramerMotionAnimation";
import doubleArrows from '../../../assets/images/double-down-arrow-light-gray.png';
import Link from "next/link";
import upRightArrowIcon from '../../../assets/icons/up-right-arrow-dark.svg';

const btnTitle = 'Anfrage'
const btnUrl = '/contact'


const ContentStrip2 = ({ data, className = ''}) => {
    return (
        <section className={`content-strip-2 container ${className}`}>
            <div className="content-wrapper md:flex items-center justify-between bg-primary">
                <div className="title-wrapper">

                    <FramerMotionAnimation type="h2" className="title text-white">

                {data.contentStripT}
                     </FramerMotionAnimation>
                    
               
                </div>
                <FramerMotionAnimation className="arrows-wrapper">
                    <Image src={doubleArrows} alt="arrows" className="arrows-icon" />
                </FramerMotionAnimation>
                <div className="description-wrapper">
                    <FramerMotionAnimation type="p" className="">

                    {data.contentStripD}

                    </FramerMotionAnimation>
                    <br />
                    <FramerMotionAnimation>
                     <Link href={"/"} className="inquire-btn btn-secondary">
                        {data.contentStripBT}
                        <Image src={upRightArrowIcon} alt="arrow icon" className="inquire-btn-icon" />
                    </Link>
                    </FramerMotionAnimation>
                </div>

                
            </div>
        </section>
    );
};

export default ContentStrip2;
