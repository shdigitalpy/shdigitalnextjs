import React from 'react';
import Image from 'next/image';
import FramerMotionAnimation from '../../common/FramerMotionAnimation';
import meeting from '../../../assets/images/meeting8.png';
import doubleDownArrow from '../../../assets/images/sharp-double-arrow-down.svg';
import checkCircleOrange from '../../../assets/icons/check-circle-orange.svg';

const listItems = [
    {
        data: 'Meta Angaben: Meta Title und Description'
    },
    {
        data: 'Seitenqualität'
    },
    {
        data: 'Internationales SEO'
    },
    {
        data: 'Seitenstruktur und Verlinkung'
    },
    {
        data: 'Serverkonfiguration'
    },
    {
        data: 'Performance'
    },
];


const AnalysisFactors = () => {
    return (
        <section className="analysis-factors bg-gray container">
            <FramerMotionAnimation className="title-wrapper">
                <h2 className="title">
                    Bis zu 140 Faktoren
                    Ihrer Webseite werden analysiert
                </h2>
                <Image src={doubleDownArrow} alt="down arrows" className="down-arrows" />
            </FramerMotionAnimation>

            <div className="main-wrapper md:flex">
                <FramerMotionAnimation
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.25 }}
                    className="image-wrapper">
                    <Image src={meeting} alt="Analysis factors" className="main-image" />
                </FramerMotionAnimation>
                <div className="content-wrapper">
                    <div className="list-wrapper">
                        { listItems?.map((item, index) => (
                            <FramerMotionAnimation
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.25, delay: index * 0.1 }}
                                className="item" key={index}>
                                <Image src={checkCircleOrange} alt="check icon" className="check-icon" />
                                { item.data }
                            </FramerMotionAnimation>
                        ))}
                    </div>
                    <FramerMotionAnimation type="p" className="description">
                        Starten Sie jetzt eine SEO-Analyse und optimieren Sie Ihre Webseite!
                    </FramerMotionAnimation>
                </div>
            </div>
        </section>
    );
};

export default AnalysisFactors;
