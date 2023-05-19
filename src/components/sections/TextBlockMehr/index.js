import React from 'react';
import Image from 'next/image';
import FramerMotionAnimation from '../../common/FramerMotionAnimation';
import meeting from '../../../assets/images/meeting8.png';
import doubleDownArrow from '../../../assets/images/sharp-double-arrow-down.svg';
import checkCircleOrange from '../../../assets/icons/check-circle-orange.svg';



const TextBlockMehr = ({data}) => {
    return (
        <section style={{ whiteSpace: "break-spaces" }} className="analysis-factors container">
           
            <FramerMotionAnimation type="p" className="title mb-10">
                        {data.blockquoteTitle}
                    </FramerMotionAnimation>

                    <FramerMotionAnimation className="description mb-10">
                        <p class="p-4 my-4 border-l-4 border-gray-300 bg-gray-50 dark:border-gray-500 dark:bg-gray-800">
                        {data.blockQuote}<br />
                        {data.blockQuote1}
                        </p>
                    </FramerMotionAnimation>
            
        </section>
    );
};

export default TextBlockMehr;
