import './App.css';
import LoadingScreen from 'react-loading-screen';
import Navbar from './components/navbar/navbar';
import Home from './components/body/Home/Home';
import AboutUs from './components/body/About Us/AboutUs';
import OurServices from './components/body/Our Services/OurServices';
import Process from './components/body/Process/Process';
import Footer from './components/Footer/Footer';
import React, { useState, useEffect } from 'react';
import { LanguageProvider } from './components/LanguageContext';
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Use setTimeout to toggle the loading state after 5 seconds
    const timer = setTimeout(() => {
      setLoading(false); // Set loading to false after 5 seconds
    }, 2000); 

    // Clear the timer if the component unmounts
    return () => clearTimeout(timer);
  }, []); // Empty dependency array means this effect runs once when the component mounts

  return (
    <div className="App">
      <LoadingScreen
    loading={loading}
    bgColor='#000002'
    spinnerColor='#FF312E'
    textColor='#676767'
    logoSrc='./nefta (2).png'
    text='Just a moment'
  > 
 <LanguageProvider>
 <div>
    <Navbar/>
  <Home/>
  <AboutUs/>
  <OurServices/>
  <Process/>
  <Footer/>  
  </div>
  </LanguageProvider>
  </LoadingScreen>
  
    </div>
  );
}

export default App;
