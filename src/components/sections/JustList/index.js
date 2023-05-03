import React from 'react';
import Image from 'next/image';
import FramerMotionAnimation from '../../common/FramerMotionAnimation';
import meeting from '../../../assets/images/meeting8.png';
import doubleDownArrow from '../../../assets/images/sharp-double-arrow-down.svg';
import checkCircleOrange from '../../../assets/icons/check-circle-orange.svg';


const AnalysisFactors = ({ data, smallSource }) => {


    return (

       
        <section className="analysis-factors container">
           
            <div className="main-wrapper md:flex">
                
                <div className="content-wrapper">
                    <div className="list-wrapper">
                        { data?.map((item, index) => (
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


                 { smallSource ? <small> {smallSource} </small> :  "" }
                </div>

            </div>


        </section>
    );
};

export default AnalysisFactors;
