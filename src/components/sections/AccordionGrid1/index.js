import React, {useState, useRef, useEffect} from 'react';
import Image from 'next/image';
import plusIcon from '../../../assets/icons/plus.svg';
import minusIcon from '../../../assets/icons/minus.svg';
import doubleArrowDown from '../../../assets/images/sharp-double-arrow-down.svg'
import FramerMotionAnimation from '../../common/FramerMotionAnimation';
import { useDimensions } from "../../../hooks/useDimensions";
import CollapsibleContent from "../../common/CollapsibleContent";

const AccordionGrid = ({ data }) => {
    const [activeAccordion, setActiveAccordion] = useState(null);

    const {
        title = [''],
        items = [],
    } = data;

    const halfLength = Math.ceil(items.length / 2);
    const leftItems = [], rightItems = [];

    items.forEach((item, index) => {
        const pos = index + 1;
        if (pos <= halfLength) leftItems.push({id: pos, ...item});
        else rightItems.push({id: pos, ...item});
    })

    const accordionActiveChangeHandler = (pos) => {
        if (activeAccordion === pos) {
            return setActiveAccordion(null);
        }
        setActiveAccordion(pos);
    };

    return (
        <section className="accordion-grid container">
            <FramerMotionAnimation>
                <div className="title-container flex">
                    <Image src={doubleArrowDown} alt="double arrow down" className="double-arrow-art" />
                    <h2 className="title font-medium">
                        { title?.map((item, index) => (
                            <div key={index}>{item}</div>
                        )) }
                    </h2>
                </div>
            </FramerMotionAnimation>

            <div className="accordions grid items-start grid-cols-1 md:grid-cols-2">
                <div className="grid left-items">
                    { leftItems?.map((item, index) => {
                        const isActive = (item.id === activeAccordion);
                        return <Accordion isActive={isActive}
                                          index={index}
                                          isLeft={true}
                                          item={item}
                                          changeHandler={accordionActiveChangeHandler}
                                          key={index} />
                    })}
                </div>

                <div className="grid right-items">
                    { rightItems?.map((item, index) => {
                        const isActive = (item.id === activeAccordion);
                        return <Accordion isActive={isActive}
                                          index={index}
                                          isLeft={false}
                                          item={item}
                                          changeHandler={accordionActiveChangeHandler}
                                          key={index} />;
                    })}
                </div>
            </div>
        </section>
    );
};

const Accordion = ({ isLeft = false, index, isActive, item, changeHandler }) => {
    const contentRef = useRef(null);
    const contentRef2 = useRef(null);
    const { height } = useDimensions(contentRef);

    return (
        <FramerMotionAnimation
            initial={{ opacity: 0, x: isLeft ? -70 : 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.25, delay: index * 0.15 }}
            className={`accordion-wrapper bg-gray ${isActive ? 'active' : ''}`} key={index}>
            <div ref={contentRef2} onClick={() => changeHandler(item.id)}
                 className="accordion-title flex items-baseline justify-between font-medium">
                { item.title }
                <Image src={isActive ? minusIcon : plusIcon} alt="plus icon" className="accordion-icon" />
            </div>
            <CollapsibleContent className="content-wrapper bg-gray" expanded={isActive} height={height}>
                <div ref={contentRef}
                    className="accordion-content">
                    { item.description }
                </div>
            </CollapsibleContent>
        </FramerMotionAnimation>
    );
};

export default AccordionGrid;
