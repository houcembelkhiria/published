import React from 'react'
import './OurServices.css'
import Card from './Cards'
import { useLanguage } from '../../LanguageContext';
import enData from './en.json';
import frData from './fr.json';
function OurServices() {
    const { language } = useLanguage();
  const data = language === 'en' ? enData : frData;
    return (
        <div id='Our_Services' className='Our_Services'>
            <h1>{data.OurServices}</h1>
            <Card/>
     </div>
    )
}

export default OurServices
