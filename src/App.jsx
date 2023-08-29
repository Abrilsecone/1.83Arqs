import React from 'react';
import NavBar from './components/NavBar/NavBar';
import HomePage from './components/HomePage/HomePage';
import ContactSection from './components/ContactPage/ContactPage';
import Footer from './components/Footer/Footer';
import OtherProjects from './components/OtherProjects/OtherProjects.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="landing-page">
        <NavBar />
        <Routes> {/* Utilizar el componente 'Routes' como contenedor principal */}
          {/* Ruta para la página de inicio */}
          <Route path="/" element={<HomePage />} />

          {/* Ruta para la página de otros proyectos */}
          <Route path="/otros-proyectos" element={<OtherProjects />} />

          {/* Ruta para agrupar featured, about-us y contact */}
          <Route path="/featured" element={<FeatureAboutContact />} />
          <Route path="/about-us" element={<FeatureAboutContact />} />
          <Route path="/contact" element={<FeatureAboutContact />} />

          {/* Ruta por defecto en caso de URL inválida */}
          <Route path="*" element={<HomePage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

// Componente para agrupar las páginas featured, about-us y contact
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
  </>
);

export default App;
