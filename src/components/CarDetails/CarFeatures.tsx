import React from 'react';
import { CarFeature } from '../../types';
import { Check } from 'lucide-react';

interface CarFeaturesProps {
  features?: CarFeature[];
}

const CarFeatures: React.FC<CarFeaturesProps> = ({ features = [] }) => {
  if (features.length === 0) {
    return (
      <div className="text-center text-gray-500 py-4">
        No hay características disponibles
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {features.map((category, index) => (
        <div key={index}>
          <h3 className="text-lg font-semibold mb-4">{category.category}</h3>
          <ul className="space-y-2">
            {category.items.map((item, itemIndex) => (
              <li key={itemIndex} className="flex items-center space-x-2">
                <Check className="w-5 h-5 text-green-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};