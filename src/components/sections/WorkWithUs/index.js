import React from 'react';
import Image from "next/image";
import Link from "next/link";
import holdingLaptop from '../../../assets/images/holding-laptop-2.png';
import upRightArrowIcon from '../../../assets/icons/up-right-arrow-dark.svg';
import FramerMotionAnimation from "../../common/FramerMotionAnimation";

const WorkWithUs = () => {
    return (
        <section id="work-with-us" className="work-with-us relative">
            <Image src={holdingLaptop} alt="Work with us" className="bg-image" />
            <div className="container">
                <FramerMotionAnimation
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="content-wrapper relative">
                    <h6 className="sub-title title-secondary">Bereit für das nächste Level</h6>
                    <h1 className="title text-white">
                        <div>Wollen Sie</div>
                        <div>mit uns arbeiten?</div>
                    </h1>
                    <p className="description text-white">
                        Wenn Sie Lust haben und es Sinn macht, dass wir uns näher über Ihre Ausgangslage unterhalten,
                        dann vereinbaren Sie doch ein kostenloses Erstgespräch in Form einer SEO-Potentialanalyse
                    </p>
                    <Link href={"/"} className="inquire-btn btn-secondary">
                        Jetzt anfragen
                        <Image src={upRightArrowIcon} alt="arrow icon" className="inquire-btn-icon" />
                    </Link>
                </FramerMotionAnimation>
            </div>
        </section>
    );
};

export default WorkWithUs;
