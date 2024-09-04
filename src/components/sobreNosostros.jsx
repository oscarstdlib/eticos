import React from 'react';
import home1 from '../assets/home1.jpg'; // Cambia la ruta según tu estructura de carpetas
import home2 from '../assets/home2.jpg'; // Cambia la ruta según tu estructura de carpetas
import chevron from '../assets/chevronr.svg'; // Cambia la ruta según tu estructura de carpetas
import fondo1 from '../assets/fondo3.png'; // Imagen de fondo

const SobreNosotros = () => {
  return (
    <div className="section relative">
      <div className="absolute inset-0">
        <img
          src={fondo1}
          alt="Fondo"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="max-w-screen-xl mx-auto p-4 relative z-10">
        <div className="section-cont flex flex-row">
          <div className="flex items-center justify-center w-full md:w-3/5">
            <div
              className="w-full md:w-3/5 relative p-6  bg-opacity-80"
              data-aos="slide-right"
              data-aos-duration="500"
              data-aos-easing="ease-out"
            >
              <h2 className="text-3xl font-bold mb-4">
                Sobre nosotros
                <div className="bg-[#004F9B] h-1 w-32"></div>
              </h2>
              <p className="text-gray-700 mb-4">
                Eticos Serrano Gómez Ltda., es una empresa con más de 40 años en el mercado colombiano, dedicada a satisfacer las necesidades de salud de los colombianos mediante el suministro oportuno de medicamentos, productos de consumo masivo e insumos hospitalarios de alta calidad de la industria farmacéutica nacional y multinacional, cumpliendo con las Buenas Prácticas de Almacenamiento (BPA) y normas internacionales de calidad, manteniendo nuestra filosofía orientada a la satisfacción total del cliente.
              </p>
              <a href="nosotros.html" className="text-blue-500 flex items-center">
                Conoce más
                <svg class="h-8 w-8 text-sky-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center w-full md:w-2/5 relative">
            <div className="relative w-1/2 mx-auto mt-12 md:mt-0 max-w-sm">
              <img src={home1} alt="home1" className="w-full shadow-lg" />
              <img
                src={home2}
                alt="home2"
                className="absolute top-0 right-0 w-full shadow-lg transform translate-x-[-60%] translate-y-[10%]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SobreNosotros;
