import React from 'react'
import './Cards.css'
import { useLanguage } from '../../LanguageContext';
import enData from './en.json';
import frData from './fr.json';
function Cards() {

	const { language } = useLanguage();
	const data = language === 'en' ? enData : frData;
	
  return (
    <div>
      <div className="wrapper">
  <div className="cols">
			<div className="col" >
				<div className="container">
        <div className="front" id='web' >
						<div className="inner">
							<p>{data.DesktopApplications}</p>
						</div>
					</div>
					<div className="back">
						<div className="inner">
							<p>{data.DesktopApplicationsParagraphe}</p>

				</div>
					</div>
				</div>
			</div>




			<div className="col" >
				<div className="container">
					<div className="front" id='mobile'>
						<div className="inner">
							<p>{data.MobileApplication}</p>
						</div>
					</div>
					<div className="back">
						<div className="inner">
<p>{data.MobileApplicationParagraphe}</p>
						</div>
					</div>
				</div>
			</div>
			<div className="col">
				<div className="container">
					<div className="front" id='erp' >
						<div className="inner">
							<p>{data.ERPSolutions}</p>
						</div>
					</div>
					<div className="back">
						<div className="inner">
<p>{data.ERPSolutionsParagraphe}</p>			

			</div>
					</div>
				</div>
			</div>

		
			<div className="col">
				<div className="container">
					<div className="front" id='ecommerce' >
						<div className="inner">
							<p>{data.ECommerce}</p>
						</div>
					</div>
					<div className="back">
						<div className="inner">
						<p>{data.ECommerceParagraphe}</p>	

	</div>
					</div>
				</div>
			</div>
	
		</div>
 </div>
    </div>
  )
}

export default Cards
