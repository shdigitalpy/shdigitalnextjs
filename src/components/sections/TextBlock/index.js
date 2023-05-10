import React from 'react';
import Image from 'next/image';
import FramerMotionAnimation from '../../common/FramerMotionAnimation';
import meeting from '../../../assets/images/meeting8.png';
import doubleDownArrow from '../../../assets/images/sharp-double-arrow-down.svg';
import checkCircleOrange from '../../../assets/icons/check-circle-orange.svg';



const TextBlock = ( { data } ) => {
    return (
        <section className="analysis-factors container">
            
            { data.textblockTitle ?
            <FramerMotionAnimation type="h2" className="title text-center">
                {data.textblockTitle}
            </FramerMotionAnimation> : undefined }
            

            { data.textBlock ?
            <FramerMotionAnimation type="p" className="description mt-10 mb-10">
                        {data.textBlock}
                    </FramerMotionAnimation> : undefined }

                { data.textBlock2 ?
                    <FramerMotionAnimation type="p" className="description mb-10">
                        {data.textBlock2}
                    </FramerMotionAnimation>
                    : undefined }

                    { data.textBlock3 ?
                    <FramerMotionAnimation type="p" className="description mb-10">
                        {data.textBlock3}
                    </FramerMotionAnimation> : undefined }
            
        </section>
    );
};

export default TextBlock;
