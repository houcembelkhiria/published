import React from 'react'
import './Process.css'
import { useLanguage } from '../../LanguageContext';
import enData from './en.json';
import frData from './fr.json';
function Process() {
  const { language } = useLanguage();
	const data = language === 'en' ? enData : frData;
	
    return (
      
         <div id='process' className="timeline">
            
  <div className="outer">
  <h1>{data.OurProcess}</h1>
    <div className="card">
      <div className="info">
        <h3 className="title">1.{data.ACCOMPANIMENT}</h3>
<p>{data.ACCOMPANIMENTparagraphe}</p>
   </div>
    </div>
    <div className="card">
      <div className="info">
        <h3 className="title">2.{data.DETAILEDESTIMATE}</h3>
<p>{data.DETAILEDESTIMATEparagraphe}</p>      </div>
    </div>
    <div className="card">
      <div className="info">
        <h3 className="title">3.{data.DEVELOPMENT}</h3>
 <p>{data.DEVELOPMENTparagraphe}</p>
       </div>
    </div>
    <div className="card">
      <div className="info">
        <h3 className="title">4.{data.BILLING} </h3>
        <p></p>
      </div>
    </div>
    <div className="card">
      <div className="info">
        <h3 className="title">5.{data.FINALPRODUCT}</h3>
<p>{data.FINALPRODUCTparagraphe}</p>
      </div>
    </div>
    <div className="card">
      <div className="info">
        <h3 className="title">6.{data.MAINTENANCE}</h3>

<p>{data.MAINTENANCEparagraphe}</p>
      </div>
    </div>
  
</div>


</div>
    )
}

export default Process


