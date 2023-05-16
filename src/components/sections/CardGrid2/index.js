import React from 'react';
import doubleDownArrow from '../../../assets/images/sharp-double-arrow-down.svg';
import Image from "next/image";
import FramerMotionAnimation from "../../common/FramerMotionAnimation";
import Link from "next/link";

const CardGrid = ({ data }) => {
    const {
        title = '',
        subTitle = '',
        cards = [],
    } = data;

    return (
        <section className="card-grid-2 container">
            <div className="main-wrapper grid md:grid-cols-3">
                <FramerMotionAnimation
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.15 }}
                    className="title-wrapper">
                    <div>
                        { subTitle && <h6 className="sub-title title-secondary">{ subTitle }</h6>}
                        <h1 className="title">
                            { title?.map((item, i) => <div key={i}>{item}</div>)}
                        </h1>
                    </div>
                    <Image src={doubleDownArrow} alt="arrows" className="arrows-icon" />
                </FramerMotionAnimation>

                { cards?.map((card, index) => (
                    <FramerMotionAnimation
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: (index * 0.15) + 0.15 }}
                        className="card-item" key={index}>
                        <Image src={card.icon} alt="icon" className="card-icon" />
                        { card.link ?
                        <Link href={card.link} title={card.title}>
                            <h4 className="card-title font-medium">{ card.title }</h4>
                        </Link>
                        : <h4 className="card-title font-medium">{ card.title }</h4> }

                        <p className="card-desc">{ card.description }</p>
                    </FramerMotionAnimation>
                ))}
            </div>
        </section>
    );
};

export default CardGrid;
