import React from 'react';
import Image from 'next/image';
import visibilityIcon from '../../../assets/icons/visibility.svg';
import handshakeIcon from '../../../assets/icons/handshake.svg';
import doubleDownArrow from '../../../assets/images/sharp-double-arrow-down.svg';
import FramerMotionAnimation from "../../common/FramerMotionAnimation";

const CustomerExpectation = () => {
    return (
        <section className="customer-expectation container">
            <div className="content-wrapper grid md:grid-cols-3">
                <div className="title-wrapper">
                    <FramerMotionAnimation type="h2" className="title">
                        What can our customers expect?
                    </FramerMotionAnimation>
                    <FramerMotionAnimation type="p" className="description">
                        From technical optimization to content creation, we take care of everything that a
                        strong digital brand needs.
                    </FramerMotionAnimation>
                    <FramerMotionAnimation>
                        <Image src={doubleDownArrow} alt="down arrows" className="down-arrows" />
                    </FramerMotionAnimation>
                </div>

                <FramerMotionAnimation
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.25 }}
                    className="point-wrapper bg-gray">
                    <Image src={visibilityIcon} alt="point icon" className="point-icon" />
                    <h6 className="point-title font-semibold">Visibility</h6>
                    <p className="description">
                        Acquiring on the phone or hoping for recommendations is becoming a bigger challenge for
                        companies.Our service places you as an answer provider for your target group in search
                        engines and you become ubiquitous in your market . As a result, you gain additional new
                        inquiries via the website.
                    </p>
                </FramerMotionAnimation>

                <FramerMotionAnimation
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.25 }}
                    className="point-wrapper bg-gray">
                    <Image src={handshakeIcon} alt="point icon" className="point-icon" />
                    <h6 className="point-title font-semibold">Competitiveness</h6>
                    <p className="description">
                        If a company relies on existing business relationships and existing customers,
                        long-term competitiveness is at risk .We increase the likelihood that prospects
                        will become your customers.
                    </p>
                </FramerMotionAnimation>
            </div>
        </section>
    );
};

export default CustomerExpectation;
