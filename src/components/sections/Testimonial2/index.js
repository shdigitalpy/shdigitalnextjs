import React from 'react';
import clientImage from '../../../assets/images/client-1.png';
import Image from "next/image";
import FramerMotionAnimation from "../../common/FramerMotionAnimation";

const Testimonials = () => {
    return (
        <section className="testimonial-2 container">
            <FramerMotionAnimation className="title-wrapper text-center">
                <h6 className="title-secondary">Testimonials</h6>
                <h2 className="title">What our clients says</h2>
            </FramerMotionAnimation>

            <div className="content-wrapper">
                <div className="testimonial-block bg-gray">
                    <FramerMotionAnimation>
                        <p className="feedback">
                            I recommend to try who has problem skin! Previously, I used other pharmacy products,
                            but this one helped) The gel is economical, the smell is wow, it&apos;s second, after
                            washing it is not felt, it also moisturizes the skin. The result is super!
                        </p>
                        <div className="client-details hidden md:block">
                            <p className="position">
                                Kate Taubiks, Chief Mobile Officer
                            </p>
                            <p className="company font-medium">BMW</p>
                        </div>
                    </FramerMotionAnimation>
                    <FramerMotionAnimation className="client-details-wrapper">
                        <Image src={clientImage} alt="client" className="client-image" />
                        <div className="client-details md:hidden">
                            <p className="position">
                                Kate Taubiks, Chief Mobile Officer
                            </p>
                            <p className="company font-medium">BMW</p>
                        </div>
                    </FramerMotionAnimation>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
