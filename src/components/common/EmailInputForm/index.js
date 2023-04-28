import React, { useState } from 'react';

const EmailInputForm = (
    {
        placeHolder = '',
        btnText = '',
        btnClass = '',
        inputClass = '',
        className = ''
    }) => {
    const [email, setEmail] = useState('');

    const emailSubmitHandler = (e) => {
        e.preventDefault();
    };

    return (
        <form className={`email-input-form ${className}`} onSubmit={emailSubmitHandler}>
            <input type="email"
                   placeholder={placeHolder}
                   value={email}
                   className={`email-input ${inputClass}`}
                   required
                   onChange={e => setEmail(e.target.value)} />
            <button type="submit" className={`email-submit-btn ${btnClass}`}>{ btnText }</button>
        </form>
    );
};

export default EmailInputForm;
