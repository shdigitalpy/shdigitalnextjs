import React from 'react';
import Image from "next/image";
import FramerMotionAnimation from "../../common/FramerMotionAnimation";

const CardGridWithImage = ({ data }) => {
    const {
        title = 'Title here',
        cards = [],
    } = data;

    return (
        <section className="card-grid-with-image container">
            <FramerMotionAnimation>
                <h2 className="title font-medium text-center">
                    {title?.map((item, index) => (
                        <div key={index}>{item}</div>
                    ))}
                </h2>
            </FramerMotionAnimation>
            <FramerMotionAnimation>
                <div className="cards-wrapper grid grid-cols-1 md:grid-cols-3">
                    {cards?.map((card, index) => (
                        <div className="card" key={index}>
                            <div className="main-block bg-gray">
                                <div className="card-image-container">
                                    <Image src={card.image.name} alt={card.image.alt} className="card-image" />
                                </div>
                                <h4 className="card-title font-medium">{card.title}</h4>
                                <p className="card-desc">{card.description}</p>
                            </div>
                            <div className="details-block grid grid-cols-2">
                                {card.details?.map((item, index2) => (
                                    <div className="detail-item" key={index2}>
                                        <p className="key font-medium">{Object.keys(item)[0]}</p>
                                        <p className="value">{Object.values(item)[0]}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </FramerMotionAnimation>
        </section>
    );
};

export default CardGridWithImage;
