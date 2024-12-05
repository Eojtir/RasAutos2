import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="pt-20">
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold mb-8">Sobre Nosotros</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <p className="text-gray-600 mb-6">
                  RasAutos es una empresa líder en la venta de autos usados en Chile. Con más de 10 años
                  de experiencia en el mercado, nos hemos destacado por ofrecer vehículos de alta calidad
                  y un servicio al cliente excepcional.
                </p>
                <p className="text-gray-600 mb-6">
                  Nuestra misión es proporcionar a nuestros clientes la mejor experiencia en la compra
                  de su vehículo usado, garantizando calidad, transparencia y confianza en cada transacción.
                </p>
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80"
                  alt="RasAutos office"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;