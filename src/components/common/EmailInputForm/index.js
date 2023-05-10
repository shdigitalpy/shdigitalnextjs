import React, {useEffect, useState} from 'react';
import {postForm} from "../../../api/form";
import {useReCaptcha} from "next-recaptcha-v3";

const EmailInputForm = (
    {
        placeHolder = '',
        btnText = '',
        btnClass = '',
        inputClass = '',
        className = ''
    }) => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);

    const { executeRecaptcha } = useReCaptcha();

    const emailSubmitHandler = async (e) => {
        e.preventDefault();

        const token = await executeRecaptcha("form_submit");
        console.log("captcha token", token)

        const data = {
            email: e.target.email.value || '',
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
        <>
            <form className={`email-input-form ${className}`} onSubmit={emailSubmitHandler}>
                <input type="email"
                       placeholder={placeHolder}
                       value={email}
                       name="email"
                       className={`email-input ${inputClass}`}
                       required
                       onChange={e => setEmail(e.target.value)} />
                <button type="submit" className={`email-submit-btn ${btnClass}`}>{ btnText }</button>
            </form>
            { success && <p className="text-white success-msg text-lg mt-5">Success!</p> }
        </>
    );
};

export default EmailInputForm;
