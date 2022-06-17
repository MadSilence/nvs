import React from 'react';
import './Footer.css'
import {useTranslation} from "react-i18next";

const Footer = () => {
    const { t } = useTranslation()

    return (
        <div>
            <div className="footer-wrapper">
                <div className="footer-elements-wrapper">
                    <div className="first-contact-group">
                        <p>{t('contacts')}</p>
                        <p>{t('address')}</p>
                        <p>{t('email')}</p>
                    </div>
                    <div className="second-contact-group">
                        <p>{t('telephone')}</p>
                        <p>{t('fax')}</p>
                        <p>{t('mobile')}</p>
                    </div>
                </div>
            </div>
            <div className="development">
                <p className="author">© 2022 - Designed By | Peter Kostoglod</p>
            </div>
        </div>

    );
};

export default Footer;