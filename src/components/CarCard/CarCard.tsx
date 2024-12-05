import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Car } from '../../types';
import { Fuel, Calendar, GitFork } from 'lucide-react';
import CarDetailModal from '../CarDetails/CarDetailModal';

interface CarCardProps {
  car: Car;
  allCars?: Car[];
}

const CarCard: React.FC<CarCardProps> = ({ car, allCars = [] }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.div
        whileHover={{ y: -5 }}
        className="bg-white rounded-lg shadow-lg overflow-hidden"
      >
        <div className="relative h-48">
          <img
            src={car.imageUrl}
            alt={`${car.brand} ${car.model}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full">
            ${car.price.toLocaleString()}
          </div>
        </div>

        <div className="p-4">
          <h3 className="text-xl font-semibold mb-2">
            {car.brand} {car.model}
          </h3>

          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="flex items-center text-gray-600">
              <Calendar className="w-4 h-4 mr-2" />
              <span>{car.year}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <GitFork className="w-4 h-4 mr-2" />
              <span>{car.transmission}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Fuel className="w-4 h-4 mr-2" />
              <span>{car.fuel}</span>
            </div>
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="w-full bg-gray-100 text-blue-600 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
          >
            Ver detalles
          </button>
        </div>
      </motion.div>

      <CarDetailModal
        car={car}
        allCars={allCars}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default CarCard;