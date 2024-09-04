import React from 'react';
import icon1 from '../assets/icon1.png';
import icon2 from '../assets/icon2.png';
import icon3 from '../assets/icon3.png';
import icon4 from '../assets/icon4.png';

const NuestrosNegocios = () => {
  return (
    <div id="nuestros-negocios" className="section bg-[#D8E9F9] py-10">
      <div className="container mx-auto px-4 lg:px-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <div className="flex items-center space-x-4" data-aos="zoom-in" data-aos-duration="300" data-aos-easing="ease-out">
          <img src={icon4} alt="Empleados" className="w-16"/>
          <div>
            <b className="text-xl">+3500</b><br></br> Empleados
          </div>
        </div>
        <div className="flex items-center space-x-4" data-aos="zoom-in" data-aos-duration="300" data-aos-delay="200" data-aos-easing="ease-out">
          <img src={icon1} alt="Clientes directos" className="w-16"/>
          <div>
            <small>Clientes directos</small><br></br>
            <b className="text-xl">+10.000</b><br></br>
            <small className='text-xs'>del canal distribución mayorista</small>
          </div>
        </div>
        <div className="flex items-center space-x-4" data-aos="zoom-in" data-aos-duration="300" data-aos-delay="400" data-aos-easing="ease-out">
          <img src={icon2} alt="Centros de distribución" className="w-16"/>
          <div>
            <b className="text-xl">6</b><br></br> Centros de distribución
          </div>
        </div>
        <div className="flex items-center space-x-4" data-aos="zoom-in" data-aos-duration="300" data-aos-delay="600" data-aos-easing="ease-out">
          <img src={icon3} alt="Capacidad de almacenamiento" className="w-16"/>
          <div>
            <b className="text-xl">+40.000 mts2</b><br></br> Capacidad de almacenamiento
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 mt-10 font-sm md:hidden">
        <div className="flex items-center space-x-4 mb-4" data-aos="zoom-in" data-aos-duration="300" data-aos-easing="ease-out">
          <img src={icon4} alt="Empleados" className="w-8"/>
          <div>
            <b className="text-lg">+3500</b> Empleados
          </div>
        </div>
        <div className="flex items-center space-x-4 mb-4" data-aos="zoom-in" data-aos-duration="300" data-aos-delay="200" data-aos-easing="ease-out">
          <img src={icon1} alt="Clientes directos" className="w-8"/>
          <div>
            <b className="text-lg">+10.000</b> Clientes directos del canal distribución mayorista
          </div>
        </div>
        <div className="flex items-center space-x-4 mb-4" data-aos="zoom-in" data-aos-duration="300" data-aos-delay="400" data-aos-easing="ease-out">
          <img src={icon2} alt="Centros de distribución" className="w-8"/>
          <div>
            <b className="text-lg">6</b> Centros de distribución
          </div>
        </div>
        <div className="flex items-center space-x-4 mb-4" data-aos="zoom-in" data-aos-duration="300" data-aos-delay="600" data-aos-easing="ease-out">
          <img src={icon3} alt="Capacidad de almacenamiento" className="w-8"/>
          <div>
            <b className="text-lg">+40.000 mts</b> Capacidad de almacenamiento
          </div>
        </div>
      </div>
    </div>
  );
};

export default NuestrosNegocios;
