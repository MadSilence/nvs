import React from 'react';
import {useTranslation} from "react-i18next";
import './Main.css'
import detail from '../../icons/detail.png'
import service1 from '../../icons/service1.webp'
import service2 from '../../icons/service2.webp'
import service3 from '../../icons/service3.webp'
import service4 from '../../icons/service4.webp'
import service5 from '../../icons/service5.webp'
import service6 from '../../icons/service6.webp'




const Main = () => {
    const {t} = useTranslation()

    return (
        <div id="main-content" className="main-content-wrapper">
            <div className="about">
                <div className="about-text">
                    <h2>{t('about')}</h2>
                    <p className="text">{t('ooo')}</p>
                </div>
                <div className="about-img">
                    <img src={detail} className="example-img" alt="Example"/>
                </div>
            </div>
            <div className="warning">
                <p className="warning-text">{t('ooo-next')}</p>
            </div>
            <div id="services" className="service-container">
                <h2 className="service-header">{t('services')}</h2>
                <div className="service-wrapper">
                    <div className="service">
                        <img src={service1} className="service-img" alt="Blueprint"/>
                        <div className="service-info">{t('service1')}</div>
                    </div>
                    <div className="service">
                        <img src={service2} className="service-img" alt="Calculator"/>
                        <div className="service-info">{t('service2')}</div>
                    </div>
                    <div className="service">
                        <img src={service3} className="service-img" alt="Factory"/>
                        <div className="service-info">{t('service6')}</div>
                    </div>
                    <div className="service">
                        <img src={service4} className="service-img" alt="Sorting"/>
                        <div className="service-info">{t('service4')}</div>
                    </div>
                    <div className="service">
                        <img src={service5} className="service-img" alt="Service"/>
                        <div className="service-info">{t('service5')}</div>
                    </div>
                    <div className="service">
                        <img src={service6} className="service-img" alt="testing"/>
                        <div className="service-info">{t('service3')}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;