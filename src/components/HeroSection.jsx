import React, { useState } from 'react';
import banner1 from '../assets/banner.jpg';
import banner2 from '../assets/banner2.jpg';
import banner3 from '../assets/banner3.jpg';

const HeroSection = () => {
  const slides = [
    {
      image: banner1,
      title: "Con más de <span class='text-blue-300'>40 años de trayectoria</span> en el sector farmacéutico colombiano",
      description:
        "Nuestra empresa se destaca como una compañía confiable, visionaria y humanitaria. Desde nuestros inicios, hemos tenido el compromiso de ser una compañía con los más altos estándares de calidad y buenas prácticas en el almacenamiento y comercialización de nuestros productos.",
      button: "Ver nuestros negocios",
    },
    {
      image: banner2,
      title: "Con más de <span class='text-blue-300'>40 años de trayectoria</span> en el sector farmacéutico colombiano",
      description: "Comprometidos con el desarrollo de nuevas soluciones farmacéuticas.",
      button: "Descubre más",
    },
    {
      image: banner3,
      title: "Con más de <span class='text-blue-300'>40 años de trayectoria</span> en el sector farmacéutico colombiano",
      description: "Comprometidos con el desarrollo de nuevas soluciones farmacéuticas.",
      button: "Descubre más",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <section className="relative w-full  md:h-[600px] overflow-hidden">
      {/* Imagen de fondo */}
      <div
        className="w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${slides[currentIndex].image})`,
        }}
      >
        {/* Contenido del carrusel */}
        <div className="top-0 left-0 w-full flex justify-end p-10">
          <div className="max-w-xl px-8 pt-2 pb-6 bg-white bg-opacity-80 rounded-lg ml-8 shadow-lg">
            {/* Botones de navegación */}
            <div className="grid grid-cols-3">
              <div className="grid grid-cols-3 col-span-2 justify-center">
                {slides.map((_, index) => (
                  <div
                    key={index}
                    className={`h-1 my-auto ${index === currentIndex ? 'bg-blue-500' : 'bg-gray-300'}`}
                  ></div>
                ))}
              </div>
              <div className="space-x-2 justify-end flex">
                <button
                  onClick={prevSlide}
                  className="bg-[#DADDDD] p-1 hover:scale-110 shadow-md focus:outline-none"
                >
                  <svg className="h-8 w-8 text-sky-700" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <polyline points="15 6 9 12 15 18" />
                  </svg>
                </button>
                <button
                  onClick={nextSlide}
                  className="bg-[#DADDDD] p-1 hover:scale-110 shadow-md focus:outline-none"
                >
                  <svg className="h-8 w-8 text-sky-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="text-2xl font-extrabold my-4" dangerouslySetInnerHTML={{ __html: slides[currentIndex].title }} />
            <p className="text-gray-800 font-medium text-base mb-6">
              {slides[currentIndex].description}
            </p>
            <button className="bg-[#004F9B] text-white py-2 px-4 rounded hover:bg-[#003f7d]">
              {slides[currentIndex].button}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
