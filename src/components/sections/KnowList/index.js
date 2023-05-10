import React from 'react';
import Image from 'next/image';
import FramerMotionAnimation from '../../common/FramerMotionAnimation';
import meeting from '../../../assets/images/meeting8.png';
import doubleDownArrow from '../../../assets/images/sharp-double-arrow-down.svg';
import checkCircleOrange from '../../../assets/icons/check-circle-orange.svg';



const KnowList = ({data}) => {
    return (
        <section id={data.listId} className="analysis-factors bg-gray container">
            <FramerMotionAnimation className="title-wrapper">
                <h2 className="title">
                    {data.listTitle}
                </h2>
                <Image src={doubleDownArrow} alt="down arrows" className="down-arrows" />
            </FramerMotionAnimation>
            <FramerMotionAnimation type="p" className="description mb-10">
                        {data.listDescription}
                    </FramerMotionAnimation>
            <div className="main-wrapper md:flex">
                
                <div className="content-wrapper">
                    <div className="list-wrapper">
                        { data.listItems?.map((item, index) => (
                            <FramerMotionAnimation
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.25, delay: index * 0.1 }}
                                className="item" key={index}>
                                <Image src={checkCircleOrange} alt="check icon" className="check-icon" />
                                { item.data }
                            </FramerMotionAnimation>
                        ))}
                    </div>
                    <FramerMotionAnimation type="p" className="description">
                        {data.listDescription2}
                    </FramerMotionAnimation>
                    <FramerMotionAnimation type="p" className="description">
                        {data.listDescription3}
                    </FramerMotionAnimation>
                </div>
            </div>
        </section>
    );
};

export default KnowList;
