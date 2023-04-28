import React from 'react';
import Image from "next/image";
import FramerMotionAnimation from "../../common/FramerMotionAnimation";

const ImageAndContentAlternateRows = ({ data }) => {
    const {
        title = '',
        subTitle = '',
        dataRows = [],
    } = data;

    return (
        <section className="image-and-content container">
            <div className="title-wrapper">
                <FramerMotionAnimation type="h2" className="title">{ title }</FramerMotionAnimation>
                <FramerMotionAnimation type="p" className="title-desc">{ subTitle }</FramerMotionAnimation>
            </div>
            <div className="item-row-wrapper">
                { dataRows?.map((item, index) => (
                    <div className="item-row" key={index}>
                        <FramerMotionAnimation
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.25 }}
                            className="image-wrapper">
                            <Image src={item.image} alt={item.imageAlt} className="preview-image" />
                        </FramerMotionAnimation>
                        <FramerMotionAnimation
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.25 }}
                            className="content-wrapper">
                            <h4 className="item-title">{item.title}</h4>
                            <h4 className="item-description">{item.description}</h4>
                        </FramerMotionAnimation>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ImageAndContentAlternateRows;
