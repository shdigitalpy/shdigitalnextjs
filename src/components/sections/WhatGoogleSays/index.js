import React from 'react';
import Image from 'next/image';
import FramerMotionAnimation from '../../common/FramerMotionAnimation';
import doubleDownArrow from '../../../assets/images/double-arrow-right-gray.png';
import arrowRight from '../../../assets/icons/arrow-right.svg';
import arrowRightOrange from '../../../assets/icons/arrow-right-orange.svg';


const WhatGoogleSays = ({ post }) => {


    return (
        

        <section className="what-google-says container bg-gray">
            <div className="title-description-wrapper">
                <FramerMotionAnimation className="title-wrapper" id={post.introId}>
                    <h2 className="title mt-5">{post.introTitle}</h2>
                    <Image src={doubleDownArrow} alt="arrows" className="title-arrow-art" />
                </FramerMotionAnimation>
                <div className="description-wrapper" style={{ whiteSpace: "break-spaces" }}>
                    <FramerMotionAnimation type="p">{post.introDescription}</FramerMotionAnimation>

                    {post.introDescription2 ? <FramerMotionAnimation type="p">{post.introDescription2}</FramerMotionAnimation> : undefined}
                     {post.introDescription3 ? <FramerMotionAnimation type="p">{post.introDescription3}</FramerMotionAnimation> : undefined}
                    
                </div>
            </div>
            <div className="table-content-wrapper bg-white">
                <div className="table-title-wrapper">
                    <h6 className="table-title">Inhaltsverzeichnis</h6>
                </div>
                <div className="content-list-wrapper">
                    { post.contentList?.map((data, index) => (
                        <FramerMotionAnimation
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.25, delay: index * 0.1 }}
                            className="list-item"
                            key={index}>
                            
                            <Image src={arrowRight} alt="arrow" className="arrow-icon arrow-black" />
                            <Image src={arrowRightOrange} alt="arrow" className="arrow-icon arrow-orange" />
                            <a href={data.link} title={data.item}>
                            { data.item }
                            </a>
                        </FramerMotionAnimation>
                    ))}


                </div>
            </div>
        </section>
      
    );
};

export default WhatGoogleSays;
