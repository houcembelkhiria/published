// AboutUs.js
import React from 'react';
import { useLanguage } from '../../LanguageContext';
import enData from './en.json';
import frData from './fr.json';
import './AboutUs.css'
function AboutUs() {
  const { language } = useLanguage();
  const data = language === 'en' ? enData : frData;

  return (
    <div id='about_us' className='about_us'>
      <br/><br/><br/>
      <h1>{data.aboutTitle}</h1>
      <p>{data.aboutText}</p>
    </div>
  );
}

export default AboutUs;
