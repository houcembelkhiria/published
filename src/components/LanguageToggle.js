// LanguageToggle.js
import React from 'react';
import { useLanguage } from './LanguageContext';
import './LanguageToggle.css'; // Import your CSS file for styling

function LanguageToggle() {
  const { toggleLanguage, language } = useLanguage();

  return (
    <div className="language-toggle">
      <label className="switch">
        <input type="checkbox" onChange={toggleLanguage} checked={language === 'fr'} />
        <span className={`slider ${language === 'fr' ? 'france' : 'us'}`}></span>
      </label>
    </div>
  );
}

export default LanguageToggle;
