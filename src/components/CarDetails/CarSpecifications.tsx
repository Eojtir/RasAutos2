import React from 'react';
import { CarSpecs } from '../../types';
import { Car, GaugeCircle, GitFork, Fuel, Timer, Gauge } from 'lucide-react';

interface CarSpecificationsProps {
  specs?: CarSpecs;
}

const CarSpecifications: React.FC<CarSpecificationsProps> = ({ specs = {
  engine: 'No disponible',
  power: 'No disponible',
  transmission: 'No disponible',
  fuelType: 'No disponible',
  fuelEfficiency: 'No disponible',
  acceleration: 'No disponible',
  topSpeed: 'No disponible'
} }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
        <Car className="w-8 h-8 text-blue-600" />
        <div>
          <h4 className="text-sm text-gray-500">Motor</h4>
          <p className="font-semibold">{specs.engine}</p>
        </div>
      </div>

      <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
        <GaugeCircle className="w-8 h-8 text-blue-600" />
        <div>
          <h4 className="text-sm text-gray-500">Potencia</h4>
          <p className="font-semibold">{specs.power}</p>
        </div>
      </div>

      <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
        <GitFork className="w-8 h-8 text-blue-600" />
        <div>
          <h4 className="text-sm text-gray-500">Transmisión</h4>
          <p className="font-semibold">{specs.transmission}</p>
        </div>
      </div>

      <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
        <Fuel className="w-8 h-8 text-blue-600" />
        <div>
          <h4 className="text-sm text-gray-500">Consumo</h4>
          <p className="font-semibold">{specs.fuelEfficiency}</p>
        </div>
      </div>

      <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
        <Timer className="w-8 h-8 text-blue-600" />
        <div>
          <h4 className="text-sm text-gray-500">0-100 km/h</h4>
          <p className="font-semibold">{specs.acceleration}</p>
        </div>
      </div>

      <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
        <Gauge className="w-8 h-8 text-blue-600" />
        <div>
          <h4 className="text-sm text-gray-500">Velocidad máxima</h4>
          <p className="font-semibold">{specs.topSpeed}</p>
        </div>
      </div>
    </div>
  );
};