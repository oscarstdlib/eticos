import React from 'react';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <header>
      <div className="bg-[#004F9B] px-2.5 hidden md:block h-10 pt-2">
        <div className="max-w-screen-xl mx-auto flex justify-end items-center text-sm font-thin">
          <ul className="flex">
            <li>
              <a
                href="https://www.eticos.com/contacto"
                className="text-white  px-2.5 hover:underline"
              >
                Servicio al cliente
              </a>
            </li>
            <li>
              <a
                href="https://intranet.eticosweb.net/sso/security/login?loggedin_url=https%3A%2F%2Fintranet.eticosweb.net%2F"
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white py-2 px-2.5 hover:underline"
              >
                Club de transferencistas
              </a>
            </li>
            <li>
              <a
                href="https://intranet.eticosweb.net/sso/security/login?loggedin_url=https%3A%2F%2Fintranet.eticosweb.net%2F"
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white py-2 px-2.5 hover:underline"
              >
                Intranet
              </a>
            </li>
            <li>
              <a
                href="https://portalpagos.davivienda.com/#/comercio/5920/ETICOS%20SERRANO%20GOMEZ"
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white py-2 px-2.5 hover:underline"
              >
                Pagos PSE
              </a>
            </li>
          </ul>
        </div>
      </div>



      <div className="max-w-screen-xl px-4 mx-auto w-full box-border shadow-xl">
        <div className="flex justify-between items-center h-16">
          <a href="index.html" target="_self">
            <img src={logo} alt="logo" style={{ width: '120px' }} />
          </a>
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative cursor-default text-sm hover:text-gray-800 hover:font-medium px-3 py-2">
              <span>Nosotros</span>
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2 rotate-90 translate-x-0.5">
                <img src="assets/chevronr.svg" alt="" className="w-4" />
              </div>
            </div>
            <div className="relative cursor-default text-sm hover:text-gray-800 hover:font-medium px-3 py-2">
              <span>Canales de venta</span>
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2 rotate-90 translate-x-0.5">
                <img src="assets/chevronr.svg" alt="" className="w-4" />
              </div>
            </div>
            <a href="convenios.html" className="text-sm hover:underline px-3 py-2">Convenios Institucionales</a>
            <a href="campanas.html" className="text-sm hover:underline px-3 py-2">Campañas</a>
            <a href="https://www.magneto365.com/co/empresas/eticos" target="_blank"   rel="noopener noreferrer" className="text-sm hover:underline px-3 py-2">Trabaja con nosotros</a>
            <a href="contacto.html" className="text-sm hover:underline px-3 py-2">Contacto</a>
            <a href="https://ventas.eticos.com/" className="bg-[#004F9B] text-white px-4 py-2 rounded hover:bg-blue-700 text-sm" target="_blank"  rel="noopener noreferrer">
              Compra en línea
            </a>
          </div>
          <button id="menuhamb" className="md:hidden p-2 shadow-md rounded-md">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 6H20M4 12H20M4 18H20" stroke="#004F9B" strokeWidth="1.5" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
