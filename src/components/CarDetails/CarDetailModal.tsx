import React from 'react';
import { Dialog } from '@headlessui/react';
import { X } from 'lucide-react';
import { Car } from '../../types';
import CarGallery from './CarGallery';
import CarSpecifications from './CarSpecifications';
import CarFeatures from './CarFeatures';
import MaintenanceHistory from './MaintenanceHistory';
import FinancingOptions from './FinancingOptions';
import SimilarCars from './SimilarCars';

interface CarDetailModalProps {
  car: Car;
  allCars: Car[];
  isOpen: boolean;
  onClose: () => void;
}

const CarDetailModal: React.FC<CarDetailModalProps> = ({
  car,
  allCars,
  isOpen,
  onClose,
}) => {
  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      className="fixed inset-0 z-50 overflow-y-auto"
    >
      <div className="flex items-center justify-center min-h-screen">
        <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />

        <div className="relative bg-white w-full max-w-6xl mx-4 p-6 rounded-lg">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">
                {car.brand} {car.model} {car.year}
              </h2>
              <p className="text-gray-600">{car.description}</p>
            </div>

            <CarGallery images={car.images} />

            <div>
              <h3 className="text-2xl font-bold mb-4">Especificaciones técnicas</h3>
              <CarSpecifications specs={car.specs} />
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">Características y equipamiento</h3>
              <CarFeatures features={car.features} />
            </div>

            {car.videoUrl && (
              <div>
                <h3 className="text-2xl font-bold mb-4">Video</h3>
                <div className="aspect-w-16 aspect-h-9">
                  <iframe
                    src={car.videoUrl}
                    className="w-full h-[400px]"
                    allowFullScreen
                  />
                </div>
              </div>
            )}

            <div>
              <h3 className="text-2xl font-bold mb-4">Historial de mantenimiento</h3>
              <MaintenanceHistory records={car.maintenance} />
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">Opciones de financiamiento</h3>
              <FinancingOptions options={car.financing} />
            </div>

            <SimilarCars currentCar={car} allCars={allCars} />
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default CarDetailModal;