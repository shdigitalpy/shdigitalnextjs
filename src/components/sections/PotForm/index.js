import React, {useEffect, useState} from 'react';
import Image from 'next/image';
import showResult from '../../../assets/images/potentialanalyse.webp';
import FramerMotionAnimation from "../../common/FramerMotionAnimation";
import {useReCaptcha} from "next-recaptcha-v3";
import {postForm} from "../../../api/form";
import {useRouter} from "next/navigation";

const PotForm = () => {
    const [success, setSuccess] = useState(false);

    const { push } = useRouter();
    const { executeRecaptcha } = useReCaptcha();

    const submitHandler = async (e) => {
        e.preventDefault();

        const token = await executeRecaptcha("form_submit");

        const data = {
            client: e.target.name.value || '',
            company: e.target.company.value || '',
            email: e.target.email.value || '',
            phone: e.target.phone.value || '',
            position: e.target.position.value || '',
            source: e.target.source.value || '',
            interest: e.target.interest.value || '',
            recaptcha: token,
        };

        const res = await postForm(data);
        console.log("res", res);
        setSuccess(true);
        push('/thank-you');
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
                <Image src={showResult} alt="kostenlose Potentialanalyse" className="main-image" />
            </FramerMotionAnimation>

            <div className="content-wrapper bg-primary2">
                <FramerMotionAnimation type="h2" className="title text-white">
                   Unverbindliche Anfrage
                </FramerMotionAnimation>

                <FramerMotionAnimation
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.25 }}>
                    <form className="form-wrapper" onSubmit={submitHandler}>
                        <div className="input-wrapper">
                            <input type="text" name="name" className="input" placeholder="Name" required />
                        </div>
                        <div className="input-wrapper">
                            <input type="text" name="company" className="input" placeholder="Unternehmen" required />
                        </div>
                        <div className="input-wrapper">
                            <input type="email" name="email" className="input" placeholder="E-Mail Adresse" required />
                        </div>
                        <div className="input-wrapper">
                            <input type="phone" name="phone" className="input" placeholder="Telefon" required />
                        </div>
                        <div className="input-wrapper">
                            <input type="text" name="position" className="input" placeholder="Position im Unternehmen" required />
                        </div>

                        <div className="input-wrapper">
                            <input type="text" name="source" className="input" placeholder="Wie bist du auf uns gekommen?" required />
                        </div>

                        <div className="input-wrapper">
                            <input type="text" name="interest" className="input" placeholder="Woran bist du interessiert?" required />
                        </div>
                        <div className="input-wrapper">
                            <button className="submit-btn bg-white text-primary2" type="submit">Jetzt senden</button>
                            {/*{ success && <p className="text-white success-msg text-lg mt-5">Success!</p> }*/}
                        </div>
                    </form>
                </FramerMotionAnimation>
            </div>
        </section>
    );
};

export default PotForm;
