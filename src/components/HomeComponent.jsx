import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Navbar'
import Home from '../pages/Home'
import MovieDetail from './MovieDetail'

import { useTheme } from '../context/ThemeContext';
import Contact from './Contact'
const HomeComponent = () => {
    
  const { darkMode, toggleDarkMode } = useTheme();
  return (

    <div className= {`${darkMode ? 'dark' : 'light'}`}>
     <Router>
     <Navbar/>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path="/detail/:movieId" element={<MovieDetail/>} />
  <Route path="/contact" element={<Contact/>} />
 </Routes>
     </Router>
    </div>
  )
}

export default HomeComponent
