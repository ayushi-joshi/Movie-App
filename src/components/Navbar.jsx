import React, { useState, useEffect } from 'react'
import { MdOutlineDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { RiMenu3Line } from "react-icons/ri";
import { FaSearch } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { BiMoviePlay } from "react-icons/bi";
const Navbar = () => {

  const [nav, setNav]=useState(false)
  const [scrolled, setScrolled] = useState(false);
  const { darkMode, toggleDarkMode } = useTheme();
 
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
   
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (


      <nav className={`fixed h-[10vh] z-10 opacity-95 px-3 top-0 w-full ${scrolled&&darkMode ? 'bg-black' : ''}  ${darkMode ? 'dark text-white' : 'bg-gray-200 text-black'}`}>
      
    <div className=" mx-auto flex justify-between items-center">
        <div className={`flex items-center justify-center`}>
        <BiMoviePlay size={30} color='#FFC72C'/>
            <h1 className="text-xl font-bold ms-2">Movie App</h1>
        </div>
        <div className={`lg:flex items-center space-x-10 mt-2 w-5/6 justify-end me-7 hidden ${darkMode ? 'text-white' : 'text-black'}`}>
            <Link to="/" className=" font-bold ">Home</Link>
           
            <Link to={"/contact"} className=" font-bold">Contact</Link>
           </div>
           
           <button id="darkModeToggle" className="text-white flex lg:w-12 w-48 justify-end" onClick={toggleDarkMode}>
        {darkMode ? <CiLight size={35} color='yellow' className='mt-3' /> : <MdOutlineDarkMode size={35} color='black' className='mt-3' />}
      </button> 
           
      
        <div className="flex items-center space-x-10 mt-2 lg:hidden">
{nav ?         

<>
  < AiOutlineClose color='white' className={`cursor-pointer ${darkMode ? 'color-white' : 'color-black'}`}  size={25} onClick={()=>setNav(!nav)} />
<div className={`h-40 w-40  top-16 right-0 fixed  ${darkMode ? 'text-black bg-white' : 'text-white bg-slate-500'} `}>
  <div className='flex flex-col items-center space-y-4 mt-4'>
  <Link  to="/" className=" font-bold ">Home</Link>
            
            <Link  to="/contact" className=" font-bold">Contact</Link>
  </div>
</div> 

</>
:< RiMenu3Line size={25} className={`cursor-pointer ${darkMode ? 'color-white' : 'color-black'}`}  onClick={()=>setNav(!nav)} />
}

            
           </div>
    </div>
    
</nav>


 
  )
}

export default Navbar
{/* <CiLight size={35} /> */}