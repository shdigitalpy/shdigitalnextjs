import React, {useEffect, useRef, useState} from 'react';
import Image from "next/image";
import layersIcon from '../../../assets/icons/layers.svg';
import chevronDownIcon from '../../../assets/icons/chevron-down.svg';
import playIcon from '../../../assets/icons/play.svg';
import FramerMotionAnimation from "../../common/FramerMotionAnimation";
import {useDimensions} from "../../../hooks/useDimensions";
import CollapsibleContent from "../../common/CollapsibleContent";
import VideoContainer from "../../common/VideoContainer";

const CollapsibleList = ({ data, dark = true, link }) => {
    const [activeAccordion, setActiveAccordion] = useState(null);

    const {
        title = [''],
        description = [''],
        items = []
    } = data;

    const accordionActiveChangeHandler = (pos) => {
        if (activeAccordion === pos) {
            return setActiveAccordion(null);
        }
        setActiveAccordion(pos);
    };

    return (
        <section id={link} className={`collapsible-list container ${dark ? 'bg-gray' : 'bg-white'}`}>
            <FramerMotionAnimation>
                <h2 className="title text-center">
                    { title?.map((item, index) => <div key={index}>{item}</div>) }
                </h2>
                
            </FramerMotionAnimation>

            <FramerMotionAnimation>
            <div className="description">
                    { description?.map((item, index) => <div key={index}>{item}<br/><br/></div>) }
                </div></FramerMotionAnimation>

            <div className="accordion-wrapper flex flex-col">
                { items?.map((item, index) => {
                    const isActive = (activeAccordion === index);
                    return (
                        <Accordion key={index}
                                   dark={dark}
                                   index={index}
                                   item={item}
                                   isActive={isActive}
                                   changeHandler={accordionActiveChangeHandler} />
                    );
                })}
            </div>
        </section>
    );
};

const Accordion = ({ index, isActive, item, dark, changeHandler }) => {
    const [show, setShow] = useState(null);
    const contentRef = useRef(null);
    const { height } = useDimensions(contentRef);

    const accordionChangeHandler = () => {
        if (isActive) {
            setShow(false);
            return setTimeout(() => changeHandler(index), 250);
        }
        changeHandler(index);
    }

    useEffect(() => setShow(isActive), [isActive]);

    return (
        <FramerMotionAnimation
            key={index}
            initial={{ opacity: 0, y: -70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, delay: index * 0.15 }}
            className="collapsible-item">
            <div className={`question-wrapper flex items-center ${dark ? 'bg-white' : 'bg-gray'}`}
                 onClick={() => accordionChangeHandler(index)}>
                <Image src={item.icon || layersIcon} alt="item icon" className="question-icon" />
                <h4 className="question font-medium">{ item.question }</h4>
                <div className={`arrow-container flex items-center justify-center ml-auto ${isActive ? 'active' : ''}`}>
                    <Image src={chevronDownIcon} alt="chevron icon" className={`arrow-icon ${isActive ? 'active' : ''}`} />
                </div>
            </div>
            <CollapsibleContent className={`content-wrapper ${dark ? 'bg-white' : 'bg-gray'}`} expanded={show} height={height}>
                <div className="answer-wrapper md:flex" ref={contentRef}>

                    {item.answer.media.check === "no" ? " " :

                        item.answer.media.check === "video" ? (
                            <VideoContainer
                                url={item.answer.media.videoUrl}
                                className="video-container relative"
                                stop={!isActive}
                            >
                                <Image src={item.answer.media.thumbnail} alt="thumbnail" className="thumbnail" />
                                <Image src={playIcon} alt="play" className="play-icon" />
                            </VideoContainer>
                        ) : item.answer.media.check === "image" ? (
                            <div className="video-container relative">
                                <Image src={item.answer.media.thumbnail} alt="thumbnail" className="thumbnail" />
                            </div>
                        ) : (
                            ""
                        )}


                    <div className="content-container" style={{ whiteSpace: "break-spaces" }}>
                    { item.answer.description }
                    { item.answer.description2 ? <div className="content-container desc-md" style={{ whiteSpace: "break-spaces" }}>
                    <br></br>{ item.answer.description2 }
                    </div> : undefined }
                    { item.answer.linklocation ? <div className="content-container desc-md"><a href={ item.answer.linklocation } title={ item.answer.linktext }>{ item.answer.linktext }</a>
                    </div> : undefined }
                    </div>

                   { item.answer.blockquote ? <div className="content-container content-flag" style={{ whiteSpace: "break-spaces" }}>{ item.answer.blockquote }
                    </div> : undefined }

                    


                                    
                    
                </div>

            </CollapsibleContent>
        </FramerMotionAnimation>
    );
};

export default CollapsibleList;