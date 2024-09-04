// src/components/Testimonials.js
import React from 'react';
import { ReactComponent as ChevronLeft } from '../assets/chevronl.svg';
import { ReactComponent as ChevronRight } from '../assets/chevronr.svg';
import imgTest1 from '../assets/img-test1.jpg';
import imgTest2 from '../assets/img-test2.jpg';
import imgTest3 from '../assets/img-test3.jpg';
import imgTest4 from '../assets/img-test4.jpg';
import imgTest5 from '../assets/img-test5.jpg';

const testimonials = [
  {
    name: "MIS BEBESITOS PAÑALERA",
    role: "Cliente",
    image: imgTest2,
    feedback: "Escojo a Eticos Por todos los descuentos que nos dan y llegan mis pedidos a tiempo"
  },
  {
    name: "PAÑALERA FER",
    role: "Cliente",
    image: imgTest1,
    feedback: "Gracias a Eticos por las actividades, premios y por esos descuentos que aplican todos los días"
  },
  {
    name: "DROGUERÍA KAREOR",
    role: "Cliente",
    image: imgTest3,
    feedback: "Soy cliente de la empresa hace más de 30 años y siempre me he sentido contento con la atención ya que cuentan con muy buen despacho, grandes descuentos, excelentes vendedores y una atención impecable."
  },
  {
    name: "DROGUERÍA CENTRAL",
    role: "Cliente",
    image: imgTest4,
    feedback: "Droguería central certifica que Eticos limitada brinda un servicio de entrega rápido y oportuno, sus procesos siempre son innovadores y con la ética empresarial que siempre caracteriza a la empresa."
  },
  {
    name: "PLÁSTICOS ANDRÉS FELIPE",
    role: "Cliente",
    image: imgTest5,
    feedback: "Eticos es una experiencia innovadora y agradable, sobre todo por las dinámicas que tienen todos los meses, acompañado de un trato muy bueno a mano de su gran equipo de trabajo que siempre da lo mejor."
  }
];

const Testimonials = () => {
  return (
    <div className="bg-blue-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-blue-900">Testimonios</h2>
          <p className="mt-2 text-blue-600">Esto piensan de nuestros clientes acerca de nosotros</p>
        </div>
        <div className="flex items-center justify-between">
          <button className="p-2 bg-blue-200 rounded-full hover:bg-blue-300 focus:outline-none">
            <ChevronLeft className="w-8 h-8" />
          </button>
          <div className="flex space-x-4 overflow-x-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 w-80 flex-shrink-0">
                <div className="flex justify-center mb-4">
                  <img src={testimonial.image} alt={testimonial.name} className="rounded-full w-20 h-20" />
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                  <p className="mt-4 text-gray-700">{testimonial.feedback}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="p-2 bg-blue-200 rounded-full hover:bg-blue-300 focus:outline-none">
            <ChevronRight className="w-8 h-8" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
