import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import StatsSection from './components/StatsSection';
import SpecialSection from './components/SpecialSection.jsx'
import Events from './components/Events.jsx';
import Join from './components/Join.jsx';


function App() {
  return (
    <>
    <Navbar />
    <Hero/>
    <SpecialSection/>
    <StatsSection/>
    <Events />
    <Join />
    <Footer/>
    </>
  )
}

export default App;
