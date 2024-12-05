import React from 'react';
import { Car } from '../../types';
import CarCard from '../CarCard/CarCard';

interface SimilarCarsProps {
  currentCar: Car;
  allCars: Car[];
}

const SimilarCars: React.FC<SimilarCarsProps> = ({ currentCar, allCars }) => {
  const getSimilarCars = () => {
    const priceRange = currentCar.price * 0.15;
    const minPrice = currentCar.price - priceRange;
    const maxPrice = currentCar.price + priceRange;

    return allCars
      .filter(car => 
        car.id !== currentCar.id &&
        car.category === currentCar.category &&
        car.price >= minPrice &&
        car.price <= maxPrice
      )
      .slice(0, 3);
  };

  const similarCars = getSimilarCars();

  return (
    <div className="py-12">
      <h2 className="text-2xl font-bold mb-8">Vehículos similares</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {similarCars.map(car => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </div>
  );
};

export default SimilarCars;