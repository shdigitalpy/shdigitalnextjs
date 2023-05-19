import React from 'react';
import Image from "next/image";
import squareIcon from '../../../assets/icons/square.svg';
import FramerMotionAnimation from "../../common/FramerMotionAnimation";


const SiteAnalysis = ({ data }) => {
    return (
        <section id={data.itemsCheckId} className="site-analysis container bg-gray" style={{ whiteSpace: "break-spaces" }}>
        
            <FramerMotionAnimation type="h3" className="title text-center">
                {data.itemsTitleH3}
            </FramerMotionAnimation>
            <div className="content-wrapper bg-white grid md:grid-cols-2">
                <div className="list-box">
                    <FramerMotionAnimation type="h6" className="list-title">
                       {data.itemsLeftSubtitle1}
                    </FramerMotionAnimation>
                    <div className="list-wrapper">
                        { data.itemsLeft?.map((item, index) => (
                            <FramerMotionAnimation
                                initial={{ opacity: 0, x: -70 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.25, delay: index * 0.1 }}
                                className="list-item-wrapper" key={index}>
                                <Image src={squareIcon} alt="square" className="item-icon" />
                                { item.data }
                            </FramerMotionAnimation>
                        ))}
                    </div>
                </div>
                <div className="list-box">
                    <FramerMotionAnimation type="h6" className="list-title">
                        {data.itemsrightSubtitle}                    </FramerMotionAnimation>
                    <div className="list-wrapper">
                        { data.itemsRight?.map((item, index) => (
                            <FramerMotionAnimation
                                initial={{ opacity: 0, x: 70 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.25, delay: index * 0.1 }}
                                className="list-item-wrapper" key={index}>
                                <Image src={squareIcon} alt="square" className="item-icon" />
                                { item.data }
                            </FramerMotionAnimation>
                        ))}
                    </div>
                </div>
                <div className="list-box mt-5">
                    <FramerMotionAnimation type="h6" className="list-title">
                        {data.itemsrightSubtitle2}                    </FramerMotionAnimation>
                    <div className="list-wrapper">
                        { data.itemsRight2?.map((item, index) => (
                            <FramerMotionAnimation
                                initial={{ opacity: 0, x: 70 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.25, delay: index * 0.1 }}
                                className="list-item-wrapper" key={index}>
                                <Image src={squareIcon} alt="square" className="item-icon" />
                                { item.data }
                            </FramerMotionAnimation>
                        ))}
                    </div>
                </div>
                <div className="list-box mt-5">
                    <FramerMotionAnimation type="h6" className="list-title">
                        {data.itemsrightSubtitle3}                    </FramerMotionAnimation>
                    <div className="list-wrapper">
                        { data.itemsRight3?.map((item, index) => (
                            <FramerMotionAnimation
                                initial={{ opacity: 0, x: 70 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.25, delay: index * 0.1 }}
                                className="list-item-wrapper" key={index}>
                                <Image src={squareIcon} alt="square" className="item-icon" />
                                { item.data }
                            </FramerMotionAnimation>
                        ))}
                    </div>
                </div>
                <div className="list-box mt-5">
                    <FramerMotionAnimation type="h6" className="list-title">
                        {data.itemsrightSubtitle4}                    </FramerMotionAnimation>
                    <div className="list-wrapper">
                        { data.itemsRight4?.map((item, index) => (
                            <FramerMotionAnimation
                                initial={{ opacity: 0, x: 70 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.25, delay: index * 0.1 }}
                                className="list-item-wrapper" key={index}>
                                <Image src={squareIcon} alt="square" className="item-icon" />
                                { item.data }
                            </FramerMotionAnimation>
                        ))}
                    </div>
                </div>
                
            </div>
            { data.itemsRightBottomText ?
            <FramerMotionAnimation type="p" className="description mt-10 mb-10">
                        {data.itemsRightBottomText} <a href={data.itemsRightBottomLink} title={data.itemsRightBottomLinkText}>{data.itemsRightBottomLinkText}</a>
                    </FramerMotionAnimation> : undefined }
        </section>
    );
};

export default SiteAnalysis;
