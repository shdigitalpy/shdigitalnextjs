import React from 'react';
import FramerMotionAnimation from '../../common/FramerMotionAnimation';
import meeting from '../../../assets/images/meeting9.png';
import doubleDownArrow from '../../../assets/images/sharp-double-arrow-down.svg';
import checkCircleOrange from '../../../assets/icons/check-circle-orange.svg';
import Image from "next/image";
import upRightArrowIcon from "../../../assets/icons/up-right-arrow.svg";

const listItems = [
    {
        data: '100% spezialisiert auf Software, Industrie und E-Commerce'
    },
    {
        data: 'Methode in mehr als 30 langfristigen Kampagnen perfektionieren'
    },
    {
        data: 'Wir übernehmen für Sie die komplexen Themen und schaffen Ihnen Freiheit.'
    },
];

const OurBenefits = () => {
    return (
        <section className="our-benefits bg-gray container">
            <div className="main-wrapper grid md:grid-cols-2">
                <FramerMotionAnimation
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.25 }}
                    className="image-wrapper">
                    <Image src={meeting} alt="Analysis factors" className="main-image" />
                </FramerMotionAnimation>
                <div className="md:flex items-end">
                    <div className="content-wrapper">
                        <FramerMotionAnimation className="title-wrapper">
                            <h2 className="title">
                               Online-Marketing-Kanal endlich professionell angehen
                            </h2>
                            <p className="description">
                                Um als Unternehmen mit Suchmaschinenoptimierung Erfolg zu haben, benötigen Sie eine auf Ihre Situation abgestimmte Strategie.
                            </p>
                        </FramerMotionAnimation>
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
                        <FramerMotionAnimation className="btn-wrapper">
                            <button className="btn-primary">
                                Kostenlose Potentialanalyse
                                <Image src={upRightArrowIcon} alt="arrow icon" className="read-more-icon" />
                            </button>
                        </FramerMotionAnimation>
                    </div>

                    <Image src={doubleDownArrow} alt="down arrows" className="down-arrows" />
                </div>
            </div>
        </section>
    );
};

export default OurBenefits;
