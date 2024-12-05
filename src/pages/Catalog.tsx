import React from 'react';
import CarGrid from '../components/CarGrid/CarGrid';

const Catalog = () => {
  return (
    <div className="pt-20">
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8">Nuestro Catálogo</h1>
          <p className="text-gray-600 max-w-2xl">
            Explora nuestra selección de vehículos de alta calidad. Todos nuestros autos pasan por
            una rigurosa inspección para garantizar su excelente estado.
          </p>
        </div>
      </div>
      <CarGrid />
    </div>
  );
};

export default Catalog;