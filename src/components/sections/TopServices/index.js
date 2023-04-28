import React, {useEffect, useRef, useState} from 'react';
import Image from "next/image";
import FramerMotionAnimation from "../../common/FramerMotionAnimation";
import {useDimensions} from "../../../hooks/useDimensions";
import CollapsibleContent from "../../common/CollapsibleContent";
import chevronDownIcon from '../../../assets/icons/chevron-down.svg';

const TopServices = ({ data }) => {
    const [activeAccordion, setActiveAccordion] = useState(null);

    const {
        title = '',
        subTitle = '',
        items = []
    } = data;

    const accordionActiveChangeHandler = (pos) => {
        if (activeAccordion === pos) {
            return setActiveAccordion(null);
        }
        setActiveAccordion(pos);
    };

    return (
        <section className="top-services container bg-gray">
            <FramerMotionAnimation>
                <h4 className="title-secondary text-center">{ subTitle }</h4>
                <h2 className="title text-center">{ title }</h2>
            </FramerMotionAnimation>

            <div className="accordion-wrapper flex flex-col">
                { items?.map((item, index) => {
                    const isActive = (activeAccordion === index);
                    return (
                        <Accordion key={index}
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

const Accordion = ({ index, isActive, item, changeHandler }) => {
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
            <div className="question-wrapper bg-white flex items-center"
                 onClick={() => accordionChangeHandler(index)}>
                <Image src={item.icon} alt="layers icon" className="question-icon" />
                <h4 className="question font-medium">{ item.topic }</h4>
                <div className={`arrow-container flex items-center justify-center ml-auto ${isActive ? 'active' : ''}`}>
                    <Image src={chevronDownIcon} alt="chevron icon" className={`arrow-icon ${isActive ? 'active' : ''}`} />
                </div>
            </div>
            <CollapsibleContent className="content-wrapper bg-white" expanded={show} height={height}>
                <div className="answer-wrapper" ref={contentRef}>
                    <div className="content-container">
                        { item.description }
                    </div>
                </div>
            </CollapsibleContent>
        </FramerMotionAnimation>
    );
};

export default TopServices;
