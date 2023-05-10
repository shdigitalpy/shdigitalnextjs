import React, {useEffect, useState} from 'react';
import Image from 'next/image';
import usingLaptop from '../../../assets/images/usingLaptop.png';
import FramerMotionAnimation from "../../common/FramerMotionAnimation";
import {useReCaptcha} from "next-recaptcha-v3";
import {postForm} from "../../../api/form";

const ContactForm = () => {
    const [success, setSuccess] = useState(false);

    const { executeRecaptcha } = useReCaptcha();

    const submitHandler = async (e) => {
        e.preventDefault();

        const token = await executeRecaptcha("form_submit");
        console.log("captcha token", token)

        const data = {
            client: e.target.name.value || '',
            company: e.target.pursue.value || '',
            email: e.target.email.value || '',
            position: e.target.position.value || '',
            recaptcha: token,
        };

        const res = await postForm(data);
        console.log("res", res);
        setSuccess(true);
    };

    useEffect(() => {
        if (success) {
            setTimeout(() => setSuccess(false), 5000)
        }
    }, [success]);

    return (
        <section className="contact-form md:flex">
            <FramerMotionAnimation
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="image-wrapper">
                <Image src={usingLaptop} alt="contact us" className="main-image" />
            </FramerMotionAnimation>

            <div className="content-wrapper bg-primary2">
                <FramerMotionAnimation type="h2" className="title text-white">
                    Analyse jetzt kostenlos anfordern!
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
                        <input type="text" className="input" placeholder="Position im Unternehmen" required />
                    </div>
                    <div className="input-wrapper">
                        <button className="submit-btn bg-white text-primary2" type="submit">Jetzt senden</button>
                        { success && <p className="text-white success-msg text-lg mt-5">Success!</p> }
                    </div>
                </FramerMotionAnimation>
            </div>
        </section>
    );
};

export default ContactForm;
