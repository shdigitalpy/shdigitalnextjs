import React from 'react';
import Image from "next/image";
import Link from "next/link";
import teamSectionData from '../../../data/teamSectionData';
import FramerMotionAnimation from "../../common/FramerMotionAnimation";

const Team = () => {
    return (
        <section className="team container">
            <FramerMotionAnimation>
                <h1 className="title text-center">Unser bestes Team</h1>
            </FramerMotionAnimation>

            <div className="team-content-wrapper grid md:grid-cols-5">
                { teamSectionData?.map((person, index) => (
                    <FramerMotionAnimation
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="team-person" key={index}>
                        <div className="image-wrapper">
                            <Image src={person.image} alt={person.name} className="person-image" />
                            <div className="social-wrapper grid grid-cols-3">
                                { person?.social?.map((social, index) => (
                                    <a target="__blank" href={social.link} className="social-link" key={index}>
                                        <Image src={social.icon} alt={social.name} className="social-icon" />
                                    </a>
                                ))}
                            </div>
                        </div>
                        <p className="name">{ person.name }</p>
                        <p className="position">{ person.position }</p>
                    </FramerMotionAnimation>
                ))}
            </div>
        </section>
    );
};

export default Team;
