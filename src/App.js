import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Features from './components/Features';
import Footer from './components/Footer';
import NuestrosNegocios from './components/Nuestros_negocios';
import SobreNosotros from './components/sobreNosostros';
import CardSection from './components/CardSection';
import ConveniosInstitucionales from './components/ConveniosInstitucionales';
import Testimonios from './components/Testimonios';



function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <Features />
      <SobreNosotros/>
      <NuestrosNegocios/>
      
      <CardSection/>
      <ConveniosInstitucionales/>
      <Testimonios/>
      <Footer />
     
    </div>
  );
}

export default App;
