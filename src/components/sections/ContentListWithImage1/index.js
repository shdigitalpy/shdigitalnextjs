import React from 'react';
import Link from "next/link";
import Image from "next/image";
import rightArrow from '../../../assets/icons/arrow-right.svg';
import upRightArrowIcon from '../../../assets/icons/arrow-up-right-short-dark.svg';
import FramerMotionAnimation from "../../common/FramerMotionAnimation";

const ContentListWithImage = ({ data }) => {
    const {
        title = '',
        subTitle = '',
        viewAllLinkUrl = '/',
        mainImage = '',
        mainImageAlt = '',
        contentList = []
    } = data;

    return (
        <section className="content-list-with-image container">
            <FramerMotionAnimation>
                <div className="head-wrapper md:flex justify-between">
                    <div className="title-container">
                        <h2 className="title">{ title }</h2>
                        <p className="sub-title">{ subTitle }</p>
                    </div>
                    <Link href={viewAllLinkUrl} className="view-all-link flex items-center">
                        <p>Zum Ratgeber</p>
                        <Image src={rightArrow} alt="icon" className="redirect-icon" />
                    </Link>
                </div>
            </FramerMotionAnimation>

            <div className="main-wrapper md:flex">
                <FramerMotionAnimation
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0 }}
                    className="image-wrapper">
                    <Image src={mainImage} alt={mainImageAlt} className="main-image" />
                </FramerMotionAnimation>
                <FramerMotionAnimation
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="content-wrapper w-full">
                    { contentList?.map((item, index) => (
                        <div className="item md:flex hover:bg-gray"
                            key={index}>
                            <h4 className="content-title w-full">
                                { item.title }
                                <Image src={upRightArrowIcon} alt="icon" className="redirect-icon-2" />
                            </h4>
                            <p className="content-description"> { item.description }</p>
                            <Image src={upRightArrowIcon} alt="icon" className="redirect-icon" />
                        </div>
                    ))}
                </FramerMotionAnimation>
            </div>
        </section>
    );
};

export default ContentListWithImage;
