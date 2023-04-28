import React from 'react';
import Image from "next/image";
import Link from "next/link";
import upRightArrowIcon from '../../../assets/icons/up-right-arrow.svg';
import FramerMotionAnimation from "../../common/FramerMotionAnimation";

const ImageContentPot = ({ data }) => {
    const {
        reverse = false,
        title,
        subTitle,
        image,
        imageAlt,
        description,
        ctaText,
        ctaUrl,
        className,
    } = data;

    return (
        <section className="image-content-with-cta container">
            <FramerMotionAnimation className="title-wrapper text-center">
                { subTitle && <h6 className="sub-title title-secondary">{ subTitle }</h6> }
                { title && <h1 style={{ whiteSpace: "break-spaces"}} className="title">{ title }</h1> }
            </FramerMotionAnimation>
            <div className="main-wrapper md:flex">
                <FramerMotionAnimation
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.25 }}
                    className="image-wrapper">
                    <Image src={image} alt={imageAlt} className="main-image" />
                </FramerMotionAnimation>
                <FramerMotionAnimation
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.25 }}
                    className="content-wrapper">
                    { description?.map((item, index) => (
                        <p key={index} className="description-item" style={{ whiteSpace: "break-spaces"}}>{ item }</p>
                    ))}
                    
                </FramerMotionAnimation>
            </div>
        </section>
    );
};

export default ImageContentPot;
