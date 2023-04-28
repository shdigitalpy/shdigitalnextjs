import React from 'react';
import Image from "next/image";
import squareIcon from '../../../assets/icons/square.svg';
import FramerMotionAnimation from "../../common/FramerMotionAnimation";

const itemsLeft = [
    {
        data: 'Hat der Title Tag Die richtige Lange',
    },
    {
        data: 'Hat die Meta Description die richtige Lange',
    },
    {
        data: 'Crawkbarkeit: Gibt es Problem mit dem Zugiff auf die Webseite',
    },
    {
        data: 'Wurden die Cononical Angaben ruchtig gemacht',
    },
    {
        data: 'Ist die Sprache richting eingestellt',
    },
    {
        data: 'Ist die URL SEO freundlich',
    },
    {
        data: 'Sind weitere Angaben Wie viewport, robots, favicon, etc korrekt',
    },
];

const itemsRight = [
    {
        data: 'Wie viele Worter befinden sich auf der Seite',
    },
    {
        data: 'iKeyword -Analyse: Wurden die richtigen Themen verwndet',
    },
    {
        data: 'Sind die Textinhalte leicht lesbar',
    },
    {
        data: 'Werden die richtigen Medien Fur das Thema verwendet',
    },
    {
        data: 'Sind die inhaltlich relevanten Markups gesetzt',
    },
    {
        data: 'Ist det Content unsperched und Mobile friendly ',
    },
];

const SiteAnalysis = () => {
    return (
        <section className="site-analysis container bg-gray">
            <FramerMotionAnimation type="h2" className="title text-center">
                Checkliste grundliche SEO - Website - Analyse
            </FramerMotionAnimation>
            <div className="content-wrapper bg-white grid md:grid-cols-2">
                <div className="list-box">
                    <FramerMotionAnimation type="h6" className="list-title">
                        Meta Angaben und URL
                    </FramerMotionAnimation>
                    <div className="list-wrapper">
                        { itemsLeft?.map((item, index) => (
                            <FramerMotionAnimation
                                initial={{ opacity: 0, x: -70 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.25, delay: index * 0.1 }}
                                className="list-item-wrapper" key={index}>
                                <Image src={squareIcon} alt="square" className="item-icon" />
                                { item.data }
                            </FramerMotionAnimation>
                        ))}
                    </div>
                </div>
                <div className="list-box">
                    <FramerMotionAnimation type="h6" className="list-title">
                        Content
                    </FramerMotionAnimation>
                    <div className="list-wrapper">
                        { itemsRight?.map((item, index) => (
                            <FramerMotionAnimation
                                initial={{ opacity: 0, x: 70 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.25, delay: index * 0.1 }}
                                className="list-item-wrapper" key={index}>
                                <Image src={squareIcon} alt="square" className="item-icon" />
                                { item.data }
                            </FramerMotionAnimation>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SiteAnalysis;
