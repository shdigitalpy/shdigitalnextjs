import React from 'react';
import Image from 'next/image';
import Link from "next/link";
import rightArrowIcon from '../../../assets/icons/arrow-right.svg';
import FramerMotionAnimation from "../../common/FramerMotionAnimation";

const CardGrid = ({ data,sectionid }) => {
    const {
        title = 'Title here',
        cards = [],
        logoWrapperTitle = 'Logos title here',
        logos = [],
    } = data;

    return (
        <section id={sectionid} className="card-grid container bg-gray">
            <FramerMotionAnimation>
                <h2 className="title font-medium text-center">{title}</h2>
            </FramerMotionAnimation>
            <FramerMotionAnimation initial={{ opacity: 0, y: 50 }}
                                   whileInView={{ opacity: 1, y: 0 }}
                                   transition={{ duration: 0.5, delay: 0.5}}>
                <div className="cards-wrapper grid gap-0 grid-cols-1 md:grid-cols-3">
                    { cards?.map((card, index) => (
                        <div className="card bg-white" key={index}>
                            <Image src={card.icon} alt={'card icon'} className="card-icon" />
                            <h5 className="card-title title-up font-semibold">{card.titleUp}</h5>
                            <h5 className="card-title title-below relative font-semibold">{card.titleBelow}</h5>
                            <p className="card-desc">{card.description}</p>
                            
                        </div>
                    )) }
                </div>
                <div className="logos-wrapper md:flex">
                    <h4 className="logos-title font-medium">{logoWrapperTitle}</h4>
                    <div className="logos grid grid-cols-2 md:grid-cols-4">
                        { logos?.map((logo, index) => (
                            <FramerMotionAnimation
                                        initial={{ opacity: 0, y: "100%" }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.15 }}
                                        viewport={{ once: true }}
                                        className="logo-box bg-white flex items-center justify-center"
                                        key={index}>

                                 <a href={logo.link} target="_blank" title={logo.alt} rel="noopener noreferrer">
                                    <Image src={logo.image} alt={logo.alt} className="logo-image" />
                                </a>
                                
                            </FramerMotionAnimation>
                        )) }
                    </div>
                </div>
            </FramerMotionAnimation>
        </section>
    );
};

export default CardGrid;
