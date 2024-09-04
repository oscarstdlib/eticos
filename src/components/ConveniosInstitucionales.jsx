import React, { useState } from 'react';
import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const logos = [
    { src: img1, alt: 'Equidad' },
    { src: img2, alt: 'SENA' },
    { src: img3, alt: 'Messer' },

  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % logos.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? logos.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full py-6 bg-gray-100 flex flex-col items-center">
      <h2 className="text-2xl font-semibold mb-2">
        Convenios <span className="font-bold">institucionales</span>
      </h2>
      <p className="mb-4">
        Estas entidades han confiado en Éticos para la dispensación de medicamentos a sus usuarios
      </p>
      <div className="flex items-center">
        <button onClick={prevSlide} className="mx-2 text-gray-500">
          &lt;
        </button>
        <div className="flex justify-center items-center space-x-4">
          {logos.slice(currentIndex, currentIndex + 3).map((logo, index) => (
            <img key={index} src={logo.src} alt={logo.alt} className="w-24 h-auto" />
          ))}
        </div>
        <button onClick={nextSlide} className="mx-2 text-gray-500">
          &gt;
        </button>
      </div>
      <a href="#" className="text-blue-600 mt-4">
        Ver todos los convenios &gt;
      </a>
    </div>
  );
};

export default Carousel;
