import React from 'react';
import Image from "next/image";
import VideoContainer from "../../common/VideoContainer";
import playIcon from "../../../assets/icons/play.svg";
import FramerMotionAnimation from "../../common/FramerMotionAnimation";
import ListItems from '../../../components/common/ListItems';

const ContentWithVideo = (
    {
        title = '',
        description = '',
        description2 = '',
        list = '',
        videoUrl = '',
        thumbnail = '',
        id = '',
        imageAlt = '',
        className = ''
    }) => {
    return (
        <section style={{ whiteSpace: "break-spaces" }} id={id} className={`content-with-video-2 container flex md:grid md:grid-cols-2 ${className}`}>
            <FramerMotionAnimation
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="video-wrapper">
                <VideoContainer url={videoUrl}
                                className="thumbnail-wrapper relative">
                    <Image src={thumbnail} alt={imageAlt} className="thumbnail-image" />
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
                { list ? <br/> : undefined}
                { list ?
                <ListItems items={ list } /> : undefined }
                { list ? <br/> : undefined}
                { description2 && <p className="description">{ description2 }</p> }
            </FramerMotionAnimation>
        </section>
    );
};

export default ContentWithVideo;
