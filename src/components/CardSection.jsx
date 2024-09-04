import React from 'react';
import laecoImg from '../assets/laeco.png'; 
import torresImg from '../assets/torres.png'; 
import eticos2Img from '../assets/eticos2.png'; 
import eticos1Img from '../assets/eticos1.jpg'; 
import chevron from '../assets/chevronr.svg'; 

const CardSection = () => {
  return (

    <div className="section relative bg-gray-100 py-8 px-10">
      <h2 className="text-3xl font-bold mb-4">
                Nuestros negocios
                <div className="bg-[#004F9B] h-1 w-32"></div>
              </h2>
      <div className="fondo-deco1 absolute inset-0 bg-cover bg-center"></div>
      <div id="card" className="section-cont max-w-screen-xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 ml-8 relative inline-block">
          
          <div className="deco absolute inset-x-0 bottom-0 h-1 bg-blue-500"></div>
        </h2>
        <div className="card-cont grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Tarjeta 1 */}
          <div className="card shadow-lg rounded-lg overflow-hidden w-full bg-white relative">
            <div className="image">
              <img src={laecoImg} alt="Droguería La Economía" className="w-full h-40 object-cover" />
            </div>
            <div className="card-info p-4">
              <h3 className="card-title text-xs font-semibold mb-2">Droguería La Economía</h3>
              <p className="text-gray-700 mb-4 text-xs">Cadena de droguerías líder en el suministro de medicamentos, dispositivos médicos, productos de higiene personal, cuidado del bebé y cosméticos entre otros, que tiene como compromiso principal la salud y el bienestar de nuestros clientes.</p>
              <a href="https://www.droguerialaeconomia.com/" target="_blank" rel="noopener noreferrer" className="absolute bottom-5 text-blue-500 flex items-center ">
                drogerialaeconomía.com 
                <svg class="h-4 w-4 text-sky-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          {/* Tarjeta 2 */}
          <div className="card shadow-lg rounded-lg overflow-hidden w-full bg-white relative">
            <div className="image">
              <img src={torresImg} alt="Farmacia Torres" className="w-full h-40 object-cover" />
            </div>
            <div className="card-info p-4">
              <h3 className="card-title text-xs font-semibold mb-2">Farmacia Torres</h3>
              <p className="text-gray-700 mb-4 text-xs">Procuramos porque cada vez más familias tengan acceso a una vida de bienestar y salud, y creemos que la mejor manera de hacerlo es acompañarlas en cada etapa sus vidas ofreciéndoles los mejores productos para mejorar su calidad de vida.</p>
              <a href="https://www.farmaciatorres.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500 absolute bottom-5 flex items-center">
                farmaciatorres.com 
                <svg class="h-4 w-4 text-sky-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          {/* Tarjeta 3 */}
          <div className="card  relative shadow-lg rounded-lg overflow-hidden w-full bg-white">
            <div className="image">
              <img src={eticos2Img} alt="Distribución al por mayor" className="w-full h-40 object-cover" />
            </div>
            <div className="card-info p-4">
              <h3 className="card-title text-xs font-semibold mb-2">Distribución al por mayor</h3>
              <p className="text-gray-700 mb-4 text-xs">Distribuimos medicamentos, productos de salud, intrahospitalarios y consumo masivo a más de 7.000 farmacias en toda Colombia.</p>
              <a href="distribucion.html" className="text-blue-500 flex items-center absolute bottom-5">
                Conoce más 
                <svg class="h-4 w-4 text-sky-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          {/* Tarjeta 4 */}
          <div className="card shadow-lg rounded-lg overflow-hidden w-full bg-white">
            <div className="image">
              <img src={eticos1Img} alt="Convenios institucionales" className="w-full h-40 object-cover" />
            </div>
            <div className="card-info p-4 h-full ">
              <h3 className="card-title text-xs font-semibold mb-2">Convenios institucionales</h3>
              <p className="text-gray-700 mb-4 text-xs">Droguería líder en suministro de medicamentos, dispositivos médicos y productos de cuidado personal. Comprometidos con la salud y bienestar de nuestros clientes, ofrecemos servicios especializados para garantizar el cuidado óptimo, con enfoque en prescripciones precisas y suministro oportuno. Descubre la diferencia en atención médica que ofrecemos.</p>
              <a href="convenios.html" className="text-blue-500 flex items-center end-0">
                Conoce más 
                <svg class="h-4 w-4 text-sky-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSection;
