import React, {useRef, useState} from 'react';
import Image from "next/image";
import chevronDownIcon from '../../../assets/icons/chevron-down.svg';
import FramerMotionAnimation from "../../common/FramerMotionAnimation";
import {useDimensions} from "../../../hooks/useDimensions";
import CollapsibleContent from "../../common/CollapsibleContent";

const ImageAndCollapsibleContent = ({ data }) => {
    const [activeAccordion, setActiveAccordion] = useState(null);

    const {
        title = [''],
        mainImage,
        collapsibleBlocks
    } = data;

    const accordionActiveChangeHandler = (pos) => {
        if (activeAccordion === pos) {
            return setActiveAccordion(null);
        }
        setActiveAccordion(pos);
    };

    return (
        <section className="image-collapsible-content container bg-gray">
            <FramerMotionAnimation>
                <h2 className="title font-medium text-center">
                    { title?.map((item, index) => <div key={index}>{item}</div>)}
                </h2>
            </FramerMotionAnimation>
            <div className="content-wrapper md:flex">
                <FramerMotionAnimation
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.25 }}>
                    <div className="image-wrapper">
                        <Image src={mainImage} alt="meeting" className="image" />
                    </div>
                </FramerMotionAnimation>
                <div className="content">
                    { collapsibleBlocks?.map((block, i) => (
                        <div className="block" key={i}>
                            <h4 className="block-title font-medium">{block.title}</h4>
                            { block.collapsible?.map((collapsible, index) => {
                                const isActive = (activeAccordion === collapsible.id);
                                return (
                                    <FramerMotionAnimation
                                        key={index}
                                        initial={{ opacity: 0, x: 50 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5, delay: i * 0.15 }}>
                                        <Accordion index={i}
                                                   isActive={isActive}
                                                   collapsible={collapsible}
                                                   changeHandler={accordionActiveChangeHandler} />
                                    </FramerMotionAnimation>
                                )
                            })}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const Accordion = ({ isActive, collapsible, changeHandler }) => {
    const contentRef = useRef(null);
    const { height } = useDimensions(contentRef);

    return (
        <div className={`collapsible-row ${collapsible.divider ? 'collapsible-divider' : ''}`}
             key={collapsible.id}>
            <div className="collapsible-title font-medium flex items-center w-full"
                 onClick={() => changeHandler(collapsible.id)}>
                <Image src={collapsible.icon} alt="icon" className="collapsible-title-icon" />
                <h4>
                    {collapsible.step && (
                        <div className="step">{ collapsible.step }</div>
                    )}
                    <div>{collapsible.title}</div>
                </h4>
                <Image src={chevronDownIcon} alt="arrow down"
                       className={`arrow-down-icon ml-auto ${isActive ? 'active' : ''}`} />
            </div>
            <CollapsibleContent className="content-wrapper" expanded={isActive} height={height}>
                <div className="collapsible-content" ref={contentRef}>
                    { collapsible.content }
                </div>
            </CollapsibleContent>
        </div>
    )
};

export default ImageAndCollapsibleContent;
