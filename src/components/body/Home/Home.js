import React from 'react';
import './Home.css';
import { useLanguage } from '../../LanguageContext';
import enData from './en.json';
import frData from './fr.json';
function Home() {

    const { language } = useLanguage();
  const data = language === 'en' ? enData : frData;
    return (
        <div id='home' className='home'>
            <div className='home-content'>
                <h3>{data.WeDigitalizeYourBusiness}</h3>
               <a href="#about_us" >{data.AboutUs}</a>
               <a  href="#footer">{data.ContactUs}</a>
            </div>
        </div>
    );
}

export default Home;
