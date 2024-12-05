import React from 'react';
import { FinancingOption } from '../../types';
import { Calendar } from 'lucide-react';

interface FinancingOptionsProps {
  options?: FinancingOption[];
}

const FinancingOptions: React.FC<FinancingOptionsProps> = ({ options = [] }) => {
  if (options.length === 0) {
    return (
      <div className="text-center text-gray-500 py-4">
        No hay opciones de financiamiento disponibles
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {options.map((option, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between mb-4">
            <Calendar className="w-6 h-6 text-blue-600" />
            <span className="text-lg font-semibold">{option.term} meses</span>
          </div>
          
          <div className="space-y-3">
            <div>
              <p className="text-sm text-gray-500">Pie</p>
              <p className="text-lg font-semibold">
                ${option.downPayment.toLocaleString()}
              </p>
            </div>
            
            <div>
              <p className="text-sm text-gray-500">Cuota mensual</p>
              <p className="text-lg font-semibold">
                ${option.monthlyPayment.toLocaleString()}
              </p>
            </div>
            
            <div>
              <p className="text-sm text-gray-500">Tasa anual</p>
              <p className="text-lg font-semibold">{option.apr}%</p>
            </div>
          </div>
          
          <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Solicitar
          </button>
        </div>
      ))}
    </div>
  );
};