import React from 'react';
import Image from "next/image";
import Link from "next/link";
import FramerMotionAnimation from "../../common/FramerMotionAnimation";

const CardGrid = ({ data, sectionid }) => {
    const {
        title = '',
        description = '',
        cardsData = []
    } = data;

    return (
        <section id={sectionid} className="card-grid-3 container">
            <div className="title-wrapper text-center">
                <FramerMotionAnimation type="h2" className="title">{ title }</FramerMotionAnimation>
                <FramerMotionAnimation type="p" className="description">{ description }</FramerMotionAnimation>
            </div>

            <div className="content-wrapper grid md:grid-cols-3">
                { cardsData?.map((card, index) => (
                    <FramerMotionAnimation
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.25, delay: index * 0.1 }}
                        key={index}
                        className="card-wrapper bg-gray hover:bg-white">
                        <Image src={card.icon} alt="card icon" className="card-icon" />
                        <h6 className="card-title">{ card.title }</h6>
                        <div className="card-description">
                            { card.description?.map((item, i) => (
                                <React.Fragment key={i}>
                                    { item.link ? (
                                        <Link href={item.url} className="desc-link">{ item.data }</Link>
                                    ) : (
                                        item.data
                                    )}
                                </React.Fragment>
                            ))}
                        </div>
                    </FramerMotionAnimation>
                ))}
            </div>
        </section>
    );
};

export default CardGrid;
