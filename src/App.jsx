import React from 'react';
import NavBar from './components/NavBar/NavBar';
import HomePage from './components/HomePage/HomePage';
import FeaturedProjects from './components/FeaturedProjectsPage/FeaturedProjectsPage';
import ContactSection from './components/ContactPage/ContactPage';
import Footer from './components/Footer/Footer';
import OtherProjects from './components/OtherProjects/OtherProjects.jsx';
import AboutUs from './components/AboutUs/AboutUs'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="landing-page">
        <NavBar />
      <Routes>
        <Route path="/" element={<FeatureAboutContact />} />
        <Route path="/otros-proyectos" element={<OtherProjects />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
        <Footer />
      </div>
    </Router>
  );
};

// Componente para agrupar las páginas featured, about-us, contact y homepage
const FeatureAboutContact = () => (
  <>
    <div id="featured">
      <FeaturedProjects />
    </div>
    <div id="about-us">
      <AboutUs />
    </div>
    <div id="contact">
      <ContactSection />
    </div>
    <div id="home">
      <HomePage />
    </div>
  </>
);

export default App;
