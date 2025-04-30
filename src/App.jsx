import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import StatsSection from "./components/StatsSection";
import SpecialSection from "./components/SpecialSection.jsx";
import Events from "./components/Events.jsx";
import Join from "./components/Join.jsx";
// import EventCard from "./components/EventCard.jsx";
import EventPage from "./components/EventPage.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <SpecialSection />
      <StatsSection />
      <Events />
      <Join />
      <Footer />
      {/* <EventCard /> */}
      <EventPage />
    </>
  );
}

export default App;
