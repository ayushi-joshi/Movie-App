import React, { useState , useEffect} from 'react'
import Card from './Card';
import { useTheme } from '../context/ThemeContext';

const Header = () => {
  const [nav, setNav]=useState(false)
  const { darkMode, toggleDarkMode } = useTheme();
  useEffect(() => {
    AOS.init();
  }, []);
  return (

  <div className={`flex items-center ${darkMode? "con" :"con1"} `} >
     <div className= {`mx-auto mt-3 flex flex-col items-center  p-4 ${darkMode ? 'text-white' : 'text-black'}`} data-aos="fade-up"
  data-aos-anchor-placement="top-bottom"  data-aos-duration="1000">
        <h2 className="text-3xl font-bold mb-4">Welcome to Our Movie App!</h2>
        <p className="font-bold mb-6 text-xl">Discover the latest movies, explore details, and stay connected with us.</p>

       
       
      </div>
      
  </div>
 
  )
}

export default Header

