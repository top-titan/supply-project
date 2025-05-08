import React from 'react';
import { ArrowUpRight, ArrowDownRight } from 'react-feather';

// Mock data for plan vs actual
const data = [
  { name: 'Company A', plan: 1200, actual: 1350 },
  { name: 'Company B', plan: 950, actual: 920 },
  { name: 'Company C', plan: 1500, actual: 1600 },
  { name: 'Company D', plan: 800, actual: 750 },
  { name: 'Company E', plan: 1100, actual: 1250 }
];

const PlanVsActual: React.FC = () => {
  // Find the maximum value for scaling
  const maxValue = Math.max(
    ...data.flatMap(item => [item.plan, item.actual])
  );
  
  return (
    <div className="h-64">
      <div className="space-y-4">
        {data.map((item, index) => (
          <div key={index} className="space-y-1">
            <div className="flex justify-between text-xs text-gray-600">
              <span>{item.name}</span>
              <div className="space-x-6">
                <span>Plan: {item.plan}</span>
                <span>Actual: {item.actual}</span>
              </div>
            </div>
            <div className="h-6 bg-gray-100 rounded-full overflow-hidden">
              {/* Plan bar */}
              <div 
                className="h-full bg-blue-500 rounded-full"
                style={{ width: `${(item.plan / maxValue) * 100}%` }}
              ></div>
              
              {/* Actual bar (positioned relative to plan) */}
              <div 
                className={`h-2 ${item.actual > item.plan ? 'bg-green-500' : 'bg-red-500'} rounded-full relative bottom-4`}
                style={{ 
                  width: `${(item.actual / maxValue) * 100}%`,
                  marginLeft: '0px'
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlanVsActual;
