import React from 'react'
import Navbar from './components/Navbar'
import Card from './components/Card'
import { CardProvider } from './context/CardContext'

import Home from './pages/Home'

import Header from './components/Header'
import MovieDetail from './components/MovieDetail'
import HomeComponent from './components/HomeComponent'
import { ThemeProvider } from './context/ThemeContext'


const App = () => {
  
  return (
     
      <ThemeProvider>
 <CardProvider>


<HomeComponent/>



 </CardProvider>
 </ThemeProvider>

  )
}

export default App
