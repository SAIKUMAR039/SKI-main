import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';


import CompanyLogos from '../components/CompanyLogos';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <CompanyLogos />
      <About />
      <Services />
      <Portfolio />
      
      <Contact/>
    </>
  );
};

export default HomePage;