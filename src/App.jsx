import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import StatsSection from './components/StatsSection';
import SpecialSection from './components/SpecialSection.jsx'


function App() {
  return (
    <>
    <Navbar />
    <Hero/>
    <SpecialSection/>
    <StatsSection/>
    <Footer/>
    </>
  )
}

export default App;
