import React from 'react';
import logoBlanco from '../assets/logo-blanco.png';
import pin from '../assets/pin.png';
import phone from '../assets/phone.png';

const Footer = () => {
  return (
    
    <footer className="bg-[#004F9B] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-4">
            <img src={logoBlanco} alt="Éticos Logo" className="h-10 mb-2" />
            <p className="flex items-center"><img src={pin} alt="Pin Icon" className="w-4 h-4 mr-2" />Barranquilla</p>
            <p className="flex items-center"><img src={pin} alt="Pin Icon" className="w-4 h-4 mr-2" />Vía 40 #11 – 124</p>
            <p className="flex items-center"><img src={phone} alt="Phone Icon" className="w-4 h-4 mr-2" />Tel: +57 (605) 360 5274</p>
            <p className="flex items-center"><img src={phone} alt="Phone Icon" className="w-4 h-4 mr-2" />Línea nacional: 01 8000 915 356</p>
          </div>
          <div className="mb-4">
            <h2 className="font-semibold">Menú</h2>
            <ul>
              <li>Inicio</li>
              <li>Nosotros</li>
              <li>Canales de distribución</li>
              <li>Trabaja con nosotros</li>
              <li>Ética</li>
              <li>Contacto</li>
            </ul>
          </div>
          <div className="mb-4">
            <h2 className="font-semibold">Accesos rápidos</h2>
            <ul>
              <li>Intranet</li>
              <li>Club del Transferencistas</li>
              <li>Pago PSE</li>
            </ul>
          </div>
          <div className="mb-4">
            <h2 className="font-semibold">Servicio al usuario</h2>
            <ul>
              <li>Preguntas frecuentes</li>
            </ul>
          </div>
          <div className="mb-4">
            <h2 className="font-semibold">Contacto</h2>
            <ul>
              <li>Ventas comerciales</li>
              <li>Convenios institucionales</li>
              <li>Radicar PORS</li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-8">
          <p>© 2023 Éticos. Todos los derechos reservados. v1 - <a href="#" className="text-blue-300">Política de privacidad</a></p>
          <p className="mt-2">Powered by <a href="http://mooba.co" target="_blank" rel="noopener noreferrer" className="text-blue-300">mooba</a></p>
          {/* Logos */}
          <div className="flex justify-center space-x-4 mt-4">
            <a href="http://mooba.co" target="_blank" rel="noopener noreferrer">
         
            </a>
            <a href="http://mooba.co" target="_blank" rel="noopener noreferrer">
              <img src={pin} alt="Pin Icon" className="h-10" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
