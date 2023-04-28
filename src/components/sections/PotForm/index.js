import React from 'react';
import Image from 'next/image';
import showResult from '../../../assets/images/potentialanalyse.webp';
import FramerMotionAnimation from "../../common/FramerMotionAnimation";

const PotForm = () => {
    const submitHandler = (e) => {
        e.preventDefault();
    };

    return (
        <section className="contact-form md:flex">
            <FramerMotionAnimation
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="image-wrapper">
                <Image src={showResult} alt="kostenlose Potentialanalyse" className="main-image" />
            </FramerMotionAnimation>

            <div className="content-wrapper bg-primary2">
                <FramerMotionAnimation type="h2" className="title text-white">
                    Jetzt die Potentialanalyse anfragen
                </FramerMotionAnimation>

                <FramerMotionAnimation
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.25 }}
                    className="form-wrapper" onSubmit={submitHandler}>
                    <div className="input-wrapper">
                        <input type="text" className="input" placeholder="Name" required />
                    </div>
                    <div className="input-wrapper">
                        <input type="text" className="input" placeholder="Unternehmen" required />
                    </div>
                    <div className="input-wrapper">
                        <input type="email" className="input" placeholder="E-Mail Adresse" required />
                    </div>
                    <div className="input-wrapper">
                        <input type="phone" className="input" placeholder="Telefon" required />
                    </div>
                    <div className="input-wrapper">
                        <input type="text" className="input" placeholder="Position im Unternehmen" required />
                    </div>

                    <div className="input-wrapper">
                        <input type="text" className="input" placeholder="Wie bist du auf uns gekommen?" required />
                    </div>

                    <div className="input-wrapper">
                        <input type="text" className="input" placeholder="Woran bist du interessiert?" required />
                    </div>
                    <div className="input-wrapper">
                        <button className="submit-btn bg-white text-primary2" type="submit">Jetzt senden</button>
                    </div>
                </FramerMotionAnimation>
            </div>
        </section>
    );
};

export default PotForm;
