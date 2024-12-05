import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CarCard from '../CarCard/CarCard';
import { Car } from '../../types';

const CarGrid = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const cars: Car[] = [
    {
      id: '1',
      brand: 'Toyota',
      model: 'RAV4',
      year: 2020,
      price: 18990000,
      mileage: 45000,
      imageUrl: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?auto=format&fit=crop&q=80',
      transmission: 'Automático',
      fuel: 'Bencina',
      category: 'SUV',
      description: 'Toyota RAV4 en excelente estado, único dueño, mantenciones al día.',
      condition: 'Usado',
      images: [
        {
          id: '1',
          url: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?auto=format&fit=crop&q=80',
          alt: 'Toyota RAV4 front'
        },
        {
          id: '2',
          url: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?auto=format&fit=crop&q=80',
          alt: 'Toyota RAV4 side'
        }
      ],
      specs: {
        engine: '2.5L 4-cilindros',
        power: '203 HP',
        transmission: 'Automática 8 velocidades',
        fuelType: 'Bencina',
        fuelEfficiency: '14.5 km/l',
        acceleration: '8.5s',
        topSpeed: '180 km/h'
      },
      features: [
        {
          category: 'Seguridad',
          items: ['ABS', 'Airbags', 'Control de estabilidad', 'Cámara de retroceso']
        },
        {
          category: 'Confort',
          items: ['Aire acondicionado', 'Asientos eléctricos', 'Bluetooth', 'Pantalla táctil']
        }
      ],
      maintenance: [
        {
          date: '2023-12-15',
          mileage: 40000,
          service: 'Mantenimiento programado',
          description: 'Cambio de aceite, filtros y revisión general'
        }
      ],
      financing: [
        {
          term: 36,
          downPayment: 3798000,
          monthlyPayment: 499000,
          apr: 12.5
        },
        {
          term: 48,
          downPayment: 3798000,
          monthlyPayment: 399000,
          apr: 13.5
        }
      ]
    },
    // Add more cars with complete data here
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={container}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {cars.map((car) => (
            <CarCard key={car.id} car={car} allCars={cars} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CarGrid;