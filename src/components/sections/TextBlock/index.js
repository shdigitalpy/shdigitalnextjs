import React from 'react';
import Image from 'next/image';
import FramerMotionAnimation from '../../common/FramerMotionAnimation';
import meeting from '../../../assets/images/meeting8.png';
import doubleDownArrow from '../../../assets/images/sharp-double-arrow-down.svg';
import checkCircleOrange from '../../../assets/icons/check-circle-orange.svg';



const TextBlock = ({data}) => {
    return (
        <section className="analysis-factors container">
           
            <FramerMotionAnimation type="p" className="description mb-10">
                        {data.textBlock}
                    </FramerMotionAnimation>

                    <FramerMotionAnimation type="p" className="description mb-10">
                        {data.textBlock2}
                    </FramerMotionAnimation>

                    <FramerMotionAnimation type="p" className="description mb-10">
                        {data.textBlock3}
                    </FramerMotionAnimation>
            
        </section>
    );
};

export default TextBlock;
