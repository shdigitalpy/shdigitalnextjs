import React from 'react';
import Image from "next/image";
import VideoContainer from "../../common/VideoContainer";
import playIcon from "../../../assets/icons/play.svg";
import FramerMotionAnimation from "../../common/FramerMotionAnimation";

const ContentWithVideo = (
    {
        title = '',
        description = '',
        description2 = '',
        videoUrl = '',
        thumbnail = '',
        id = '',
        className = ''
    }) => {
    return (
        <section id={id} className={`content-with-video-2 container flex md:grid md:grid-cols-2 ${className}`}>
            <FramerMotionAnimation
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="video-wrapper">
                <VideoContainer url={videoUrl}
                                className="thumbnail-wrapper relative">
                    <Image src={thumbnail} alt="thumbnail" className="thumbnail-image" />
                    <Image src={playIcon} alt={"play icon"} className="play-icon" />
                </VideoContainer>
            </FramerMotionAnimation>
            <FramerMotionAnimation
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="content-wrapper">
                <h3 className="section-title">{ title }</h3>
                <p className="description">{ description }</p>
                <p className="description">{ description2 }</p>
            </FramerMotionAnimation>
        </section>
    );
};

export default ContentWithVideo;
