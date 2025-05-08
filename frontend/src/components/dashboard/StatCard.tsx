import React from 'react';
import { ArrowUpRight, ArrowDownRight } from 'react-feather';

interface StatCardProps {
  title: string;
  value: string;
  unit?: string;
  change: string;
  positive: boolean;
  icon: React.ReactNode;
}

const StatCard: React.FC<StatCardProps> = ({ 
  title, 
  value, 
  unit, 
  change, 
  positive, 
  icon 
}) => {
  return (
    <div className="bg-white rounded-lg shadow p-6 transition-all duration-300 hover:shadow-md">
      <div className="flex items-center">
        <div className="p-3 rounded-full bg-gray-100">{icon}</div>
        <div className="ml-5">
          <p className="text-sm font-medium text-gray-500">{title}</p>
          <div className="flex items-baseline">
            <p className="text-2xl font-semibold text-gray-900">{value}</p>
            {unit && <span className="ml-1 text-sm text-gray-500">{unit}</span>}
          </div>
        </div>
      </div>
      <div className="mt-4">
        <div className={`flex items-center text-sm ${positive ? 'text-green-500' : 'text-red-500'}`}>
          {positive ? (
            <ArrowUpRight className="h-4 w-4 mr-1" />
          ) : (
            <ArrowDownRight className="h-4 w-4 mr-1" />
          )}
          <span>{change}</span>
        </div>
      </div>
    </div>
  );
};

export default StatCard;
