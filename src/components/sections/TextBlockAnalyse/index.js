import React from 'react';
import Link from "next/link";
import Image from 'next/image';
import FramerMotionAnimation from '../../common/FramerMotionAnimation';
import meeting from '../../../assets/images/meeting8.png';
import doubleDownArrow from '../../../assets/images/sharp-double-arrow-down.svg';
import checkCircleOrange from '../../../assets/icons/check-circle-orange.svg';



const TextBlockAnalyse = ( { data } ) => {
    return (
        <section className="analysis-factors container">
            
            { data.textanalyseTitle ?
            <FramerMotionAnimation type="h2" className="title text-center">
                {data.textanalyseTitle}
            </FramerMotionAnimation> : undefined }
            

            { data.textanalyseText ?
            <FramerMotionAnimation type="p" className="description mt-10 mb-10">
                        {data.textanalyseText}
                    </FramerMotionAnimation> : undefined }

                { data.textanalyseText2 ?
                    <FramerMotionAnimation type="p" className="description mb-10">
                        {data.textanalyseText2}
                    </FramerMotionAnimation>
                    : undefined }

                    { data.textanalyseQuote ?
                    <FramerMotionAnimation className="description mb-10">
                        <p class="p-4 my-4 border-l-4 border-gray-300 bg-gray-50 dark:border-gray-500 dark:bg-gray-800">
                        {data.textanalyseQuote} 

                        <Link href={data.textanalyseLink} title={data.textanalyseLinktext}>{data.textanalyseLinktext}</Link>.
                        </p>
                    </FramerMotionAnimation> :undefined }
            
        </section>
    );
};

export default TextBlockAnalyse;

