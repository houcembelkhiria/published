import React from 'react';
import './Footer.css'; 
import { useLanguage } from '../LanguageContext';
import enData from './en.json';
import frData from './fr.json';

const Footer = () => {
  const { language } = useLanguage();
	const data = language === 'en' ? enData : frData;
  return (
    <footer id='footer' className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>{data.AboutUs}</h3>
<p>{data.AboutUsText}</p>
          <img src='./nefta (2).png'/>
        </div>
        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: contact@neftallc.top</p>
        </div>
        <div className="footer-section">
          <h3>{data.FollowUs}</h3>
          <a href='https://www.facebook.com/neftallc'>Facebook</a>
          <a>Twitter</a>
          <a href='https://www.linkedin.com/company/101320649/admin/feed/posts/'>LinkedIn</a>
        </div>
      
    
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Nefta. {data.AllRightsReserved}</p>
      </div>
    </footer>
  );
};

export default Footer;
