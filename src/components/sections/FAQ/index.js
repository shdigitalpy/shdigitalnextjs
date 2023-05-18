import React, {useEffect, useRef, useState} from 'react';
import Image from "next/image";
import layersIcon from '../../../assets/icons/layers.svg';
import chevronDownIcon from '../../../assets/icons/chevron-down.svg';
import playIcon from '../../../assets/icons/play.svg';
import FramerMotionAnimation from "../../common/FramerMotionAnimation";
import {useDimensions} from "../../../hooks/useDimensions";
import CollapsibleContent from "../../common/CollapsibleContent";
import VideoContainer from "../../common/VideoContainer";

const FAQ = ({ data, dark = true }) => {
    const [activeAccordion, setActiveAccordion] = useState(null);

    const {
        title = [''],
        items = []
    } = data;

    const accordionActiveChangeHandler = (pos) => {
        if (activeAccordion === pos) {
            return setActiveAccordion(null);
        }
        setActiveAccordion(pos);
    };

    return (
        <section className={`faq container ${dark ? 'bg-gray' : 'bg-white'}`} itemScope itemType="https://schema.org/FAQPage">
            <FramerMotionAnimation>
                <h2 className="title text-center">
                    { title?.map((item, index) => <div key={index}>{item}</div>) }
                </h2>
            </FramerMotionAnimation>

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
            className="faq-item">
            <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className={`question-wrapper flex items-center ${dark ? 'bg-white' : 'bg-gray'}`}
                 onClick={() => accordionChangeHandler(index)}>
                <Image src={item.icon || layersIcon} alt="item icon" className="question-icon" />
                <h4 itemProp="name" className="question font-medium">{ item.question }</h4>
                <div className={`arrow-container flex items-center justify-center ml-auto ${isActive ? 'active' : ''}`}>
                    <Image src={chevronDownIcon} alt="chevron icon" className={`arrow-icon ${isActive ? 'active' : ''}`} />
                </div>
            </div>
            <CollapsibleContent className={`content-wrapper ${dark ? 'bg-white' : 'bg-gray'}`} expanded={show} height={height}>
                <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer" className="answer-wrapper md:flex" ref={contentRef}>
                    <VideoContainer url="https://www.youtube.com/embed/1YXnseEjaKs"
                                    className="video-container relative" stop={!isActive}>
                        <Image src={item.answer.media.thumbnail} alt="thumbnail" className="thumbnail" />
                        <Image src={playIcon} alt="play" className="play-icon" />
                    </VideoContainer>
                    <div itemProp="text" className="content-container">
                        { item.answer.description }
                    </div>
                </div>
            </CollapsibleContent>
        </FramerMotionAnimation>
    );
};

export default FAQ;
