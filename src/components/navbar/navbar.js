import React, { useState } from 'react';
import './navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import LanguageToggle from '../LanguageToggle';
import enData from './en.json';
import frData from './fr.json';
import { useLanguage } from '../LanguageContext';
function Navbar() {

    const { language } = useLanguage();
	const data = language === 'en' ? enData : frData;

    const [showNavItems, setShowNavItems] = useState(false);

    const toggleNavItems = () => {
        setShowNavItems(!showNavItems);
    };

    return (
        <div className='navbar'>
            <button className="nav_btn" onClick={toggleNavItems}>                
                <FontAwesomeIcon icon={faBars} />
</button>
            <ul id='nav_items' className={`nav_items ${showNavItems ? 'active' : ''}`}>
                
                <li> <a href='#home'> <img src='./nefta (2).png'/></a></li>
                <li><a href='#home'>{data.Home}</a></li>
                <li><a href='#about_us'>{data.AboutUs}</a></li>
                <li> <a href='#Our_Services'>{data.OurServices}</a></li>
                <li><a href='#process'>{data.Process}</a></li>
                <li><a href='#footer'>{data.ContactUs}</a></li>
                <li className="language-toggle-container"><LanguageToggle /></li>
                </ul>
        </div>
    )
}

export default Navbar;
