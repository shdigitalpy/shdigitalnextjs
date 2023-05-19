import React from 'react';
import clientImage from '../../../assets/images/davide-sposato.jpg';
import Image from "next/image";
import FramerMotionAnimation from "../../common/FramerMotionAnimation";

const Testimonials = () => {
    return (
        <section className="testimonial-2 container">
            <FramerMotionAnimation className="title-wrapper text-center">
                <h6 className="title-secondary">Testimonials</h6>
                <h2 className="title">Was unsere Kunden sagen</h2>
            </FramerMotionAnimation>

            <div className="content-wrapper">
                <div className="testimonial-block bg-gray">
                    <FramerMotionAnimation>
                        <p className="feedback">
                           Die Zusammenarbeit mit SH Digital ist professionell, kompetent und unkompliziert. Man bietet eine ehrliche Beratung, transparente Erläuterungen der Maßnahmen und zeitnahe Umsetzung der Aufträge.
                        </p>
                        <div className="client-details hidden md:block">
                            <p className="position">
                                Davide Sposato, Geschäftsführer 
                            </p>
                            <p className="company font-medium">Work-in AG</p>
                        </div>
                    </FramerMotionAnimation>
                    <FramerMotionAnimation className="client-details-wrapper">
                        <Image src={clientImage} alt="client" className="client-image" />
                        <div className="client-details md:hidden">
                            <p className="position">
                                Davide Sposato, Geschäftsführer 
                            </p>
                            <p className="company font-medium">Work-in AG</p>
                        </div>
                    </FramerMotionAnimation>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
