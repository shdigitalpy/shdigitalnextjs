import React from 'react';
import Image from "next/image";
import marketingch from '../../../assets/images/marketingch.jpg';
import leaderdigital from '../../../assets/images/leaderdigital.jpg';
import suchmaschinenImage from '../../../assets/images/mainpage/suchmaschinenoptimierung-video.webp';
import playIcon from '../../../assets/icons/play.svg';
import FramerMotionAnimation from "../../common/FramerMotionAnimation";
import VideoContainer from "../../common/VideoContainer";

const ContentWithVideo = () => {
    return (
        <section style={{ whiteSpace: "break-spaces" }} className="content-with-video container">
            <FramerMotionAnimation>
                <div className="flex flex-col md:flex-row">
                    <FramerMotionAnimation
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.25 }}
                        className="content-wrapper flex-1">
                        <h2 className="title font-medium">Der Konkurrenz immer einen Schritt voraus</h2>
                        <p className="desc">Bekannt aus:</p>
                        <div className="tag-images flex align-center">
                            <a 
                            href="https://marketing.ch/suchmaschinenmarketing/sandro-huber-zeigt-auf-in-6-schritten-zu-erfolgreichem-b2b-seo-im-jahr-2022/" target="__blank" title="marketing.ch">
                            <Image src={marketingch} alt={'marketing.ch'} /></a>
                            
                            <a 
                            href="https://www.leaderdigital.ch/news/wie-sandro-huber-mit-seiner-seo-dienstleistung-unternehmen-im-digitalen-vertrieb-unterstuetzt-8538.html" target="__blank" 
                            title="leaderdigital">
                            <Image src={leaderdigital} alt={'leaderdigital'} /></a>
                        </div>
                    </FramerMotionAnimation>

                    <FramerMotionAnimation
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.25 }}
                        className="video-wrapper flex-1">
                        <VideoContainer url="https://www.youtube.com/embed/1YXnseEjaKs"
                                        className="thumbnail-wrapper relative">
                            <Image src={suchmaschinenImage} alt={'suchmaschinenoptimierung-video'} className="thumbnail" />
                            <Image src={playIcon} alt={"abspielen icon"} className="play-icon" />
                        </VideoContainer>
                    </FramerMotionAnimation>
                </div>
            </FramerMotionAnimation>
        </section>
    );
};

export default ContentWithVideo;
