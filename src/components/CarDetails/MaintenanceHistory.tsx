import React from 'react';
import { MaintenanceRecord } from '../../types';
import { Calendar, Wrench } from 'lucide-react';

interface MaintenanceHistoryProps {
  records?: MaintenanceRecord[];
}

const MaintenanceHistory: React.FC<MaintenanceHistoryProps> = ({ records = [] }) => {
  if (records.length === 0) {
    return (
      <div className="text-center text-gray-500 py-4">
        No hay registros de mantenimiento disponibles
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {records.map((record, index) => (
        <div key={index} className="border-l-4 border-blue-600 pl-4 py-2">
          <div className="flex items-center space-x-2 text-gray-600 mb-1">
            <Calendar className="w-4 h-4" />
            <span>{record.date}</span>
            <Wrench className="w-4 h-4 ml-4" />
            <span>{record.mileage.toLocaleString()} km</span>
          </div>
          <h4 className="font-semibold">{record.service}</h4>
          <p className="text-gray-600">{record.description}</p>
        </div>
      ))}
    </div>
  );
};