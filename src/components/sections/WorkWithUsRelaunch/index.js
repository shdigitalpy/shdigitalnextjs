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
                    <h6 className="sub-title title-secondary">Steht ein Relaunch an?</h6>
                    <h1 className="title text-white">
                        <div>Mit SH Digital neu lancieren</div>
                        
                    </h1>
                    

                    <p className="description text-white">
                        Unser Team hat schon viele Website-Relaunchs begleitet oder komplett durchgeführt. 
                    </p>
                    
                    <Link href={"/contact"} className="inquire-btn btn-secondary">
                        Jetzt anfragen
                        <Image src={upRightArrowIcon} alt="arrow icon" className="inquire-btn-icon" />
                    </Link>
                </FramerMotionAnimation>
            </div>
        </section>
    );
};

export default WorkWithUs;
