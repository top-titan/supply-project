import React from 'react';

// Mock data for consumption chart
const data = [
  { month: 'Jan', value: 1200 },
  { month: 'Feb', value: 1900 },
  { month: 'Mar', value: 1500 },
  { month: 'Apr', value: 1700 },
  { month: 'May', value: 2100 },
  { month: 'Jun', value: 1800 },
  { month: 'Jul', value: 2300 },
  { month: 'Aug', value: 2500 },
  { month: 'Sep', value: 2200 },
  { month: 'Oct', value: 2400 },
  { month: 'Nov', value: 2600 },
  { month: 'Dec', value: 2800 },
];

const ConsumptionChart: React.FC = () => {
  // Find the maximum value for scaling
  const maxValue = Math.max(...data.map(item => item.value));
  
  return (
    <div className="h-64">
      <div className="flex h-full items-end">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex-1 flex flex-col items-center group"
          >
            <div className="relative w-full px-1">
              <div
                className="w-full bg-blue-500 hover:bg-blue-600 transition-all duration-300 rounded-t"
                style={{ 
                  height: `${(item.value / maxValue) * 200}px` 
                }}
              ></div>
              
              {/* Tooltip */}
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                {item.value.toLocaleString()} boxes
              </div>
            </div>
            <div className="text-xs text-gray-500 mt-2">{item.month}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConsumptionChart;
