import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import FramerMotionAnimation from '../../common/FramerMotionAnimation';
import heartIcon from '../../../assets/icons/heart.svg';
import twitterBlueIcon from '../../../assets/icons/linkedin.svg';

import socialProofSectionData from '../../../data/socialProofSectionData';

const SocialProof = () => {
    const { title = '', items = [] } = socialProofSectionData;

    const data = [[], [], []];
    let arrIndex = 0;
    items.forEach((item, index) => {
        const pos = (index + 1);
        data[arrIndex].push(item);
        arrIndex++;
        if (pos % 3 === 0) arrIndex = 0;
    });


    return (
        <section className="social-proof container">
            <FramerMotionAnimation type="h2" className="title text-center">
                { title }
            </FramerMotionAnimation>

            <div className="content-wrapper">
                <div className="cards-wrapper grid md:grid-cols-3">
                    { data?.map((col, colIndex) => (
                        <div className="card-col-wrapper" key={colIndex}>
                            { col?.map((item, index) => (
                                <FramerMotionAnimation
                                    initial={{ opacity: 0, x: 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.3, delay: index * 0.1 }}
                                    className="card-wrapper bg-gray" key={index}>
                                    <div className="user-details-wrapper flex">
                                        <Image src={item.image} alt="user image" className="user-image" />
                                        <div>
                                            <p className="name font-semibold">{ item.name }</p>

                                            { item.title ? <p className="name">{ item.title }</p> : "" }

                                            { item.company ? <p className="name">{ item.company }</p> : "" }
                                          
                                        </div>

                                        { item.twitterLink ?
                                        <Link href={item.twitterLink} className="social-icon-link">
                                            <Image src={twitterBlueIcon} alt="twitter" className="social-icon" />
                                        </Link>
                                        : ""}
                                    </div>
                                    <p className="tweet-content">{ item.content }</p>
                                    
                                </FramerMotionAnimation>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SocialProof;
