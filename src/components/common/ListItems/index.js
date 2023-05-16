import React from 'react';
import Image from 'next/image';
import arrowRight from '../../../assets/icons/arrow-right.svg';
import FramerMotionAnimation from '../FramerMotionAnimation';

const ListItems = ({ items }) => {
    return (
        <div className="list-items">
            { items?.map((item, index) => (
                <FramerMotionAnimation
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.25, delay: index * 0.1 }}
                    className="item" key={index}>
                    <Image src={item.icon || arrowRight} alt="arrow" className="item-icon" />
                    <p className="item-text">{ item.text }</p>
                </FramerMotionAnimation>
            ))}
        </div>
    );
};

export default ListItems;
