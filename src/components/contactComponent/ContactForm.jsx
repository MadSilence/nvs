import React, {useState} from 'react';
import './ContactForm.template.css'
import phone from "../../icons/phone.png";
import email_ico from "../../icons/email.png";
import address from "../../icons/address.png";
import {useTranslation} from "react-i18next";

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const {t} = useTranslation()

    return (
        <div id="contacts">
            <p className="default-text">{t('get-in-touch')}</p>
            <h1 className="default-text-title">{t('contact')}</h1>
            <div className="popup-inner">
                <div className="left-address">
                    <div>
                        <div className="phone left-item">
                            <img src={phone} className="contact-img" alt="cellphone"/>
                            <p>+375 29 6090558</p>
                        </div>
                        <div className="email left-item">
                            <img src={email_ico} className="contact-img" alt="email"/>
                            <p>{t('email')}</p>
                        </div>
                        <div className="location left-item">
                            <img src={address} className="contact-img" alt="address icon"/>
                            <p>{t('address')}</p>
                        </div>
                    </div>
                </div>
                <div className="right-address">
                    <div className="form-group">
                        <label htmlFor="name">
                            {t('form-name')}
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </label>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">
                            {t('form-email')}
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </label>
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">
                            {t('form-message')}
                            <textarea
                                type="text"
                                id="message"
                                name="message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            />
                        </label>
                    </div>
                    <button type="submit">{t('form-button')}</button>
                </div>
            </div>
        </div>
    )
        ;
};

export default ContactForm;