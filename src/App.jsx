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
          <Route path="/" element={<HomePage />} />
          <Route path="/featured" element={<FeaturedProjects />} />
          <Route path="/contact" element={<ContactSection />} />
          <Route path="/other-projects" element={<OtherProjects />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
