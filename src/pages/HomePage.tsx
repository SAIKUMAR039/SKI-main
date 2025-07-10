import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';
import Testimonials from '../components/Testimonials';
import ServiceHori from '../components/ServiceHori';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <ServiceHori />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact/>
    </>
  );
};

export default HomePage;