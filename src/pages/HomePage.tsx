import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';
import Testimonials from '../components/Testimonials';
const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact/>
    </>
  );
};

export default HomePage;