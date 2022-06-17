import React from 'react';
import './Header.css'
import logo from '../../icons/logo.png'
import {useTranslation} from "react-i18next";
import i18next from "i18next";


const languages = [
    {
        code: 'en',
        name: 'English'
    },
    {
        code: 'ru',
        name: 'Russian'
    }
]


const Header = () => {
    const {t} = useTranslation()

    return (
        <div className="header-block">
            <div className="header-wrapper">
                <div className="first-header-group">
                    <img src={logo} className="logo" alt="Logo"/>
                </div>
                <div className="nav-group">
                    <a className='anchor-link' href="#main-content">{t('about-header')}</a>
                    <a className="anchor-link" href="#services">{t('services-header')}</a>
                    <a className="anchor-link" href="#contacts">{t('contacts-header')}</a>
                </div>
                <div className="second-header-group">
                    <div className="sec-center">
                            {languages.map(({code, name}) => (
                                    <button className="lng-btn" onClick={() => i18next.changeLanguage(code)}>{code.toUpperCase()}</button>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;