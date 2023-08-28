// App.jsx
import React from 'react';
import NavBar from './components/NavBar/NavBar';
import HomePage from './components/HomePage/HomePage';
import FeaturedProjects from './components/FeaturedProjectsPage/FeaturedProjectsPage';
import ContactSection from './components/ContactPage/ContactPage';
import Footer from './components/Footer/Footer';
import AboutUs from './components/AboutUs/AboutUs';
import './App.css';

const App = () => {
  return (
    <div className="landing-page">
      <NavBar />
      <div id="home">
        <HomePage />
      </div>
      <div id="featured">
        <FeaturedProjects />
      </div>
      <div id="abaout-us">
        <AboutUs/>
      </div>
      <div id="contact">
        <ContactSection />
      </div>
      <Footer/>
    </div>
  );
};

export default App;
