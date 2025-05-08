import React from 'react';
import { AlertTriangle, TrendingDown, Package, Clock } from 'react-feather';

// Mock data for shop alerts
const shopAlerts = [
  {
    id: 1,
    shop: 'Shop A',
    issue: 'Low inventory',
    description: 'Inventory below 15% threshold',
    severity: 'high',
    time: '2 hours ago',
    icon: Package,
    iconColor: 'text-red-500',
    iconBg: 'bg-red-100',
  },
  {
    id: 2,
    shop: 'Shop B',
    issue: 'Consumption spike',
    description: '35% increase in daily consumption',
    severity: 'medium',
    time: '5 hours ago',
    icon: TrendingDown,
    iconColor: 'text-orange-500',
    iconBg: 'bg-orange-100',
  },
  {
    id: 3,
    shop: 'Shop C',
    issue: 'Delivery delay',
    description: 'Scheduled delivery is delayed by 2 days',
    severity: 'medium',
    time: '1 day ago',
    icon: Clock,
    iconColor: 'text-yellow-500',
    iconBg: 'bg-yellow-100',
  },
  {
    id: 4,
    shop: 'Shop D',
    issue: 'System error',
    description: 'Inventory tracking system error detected',
    severity: 'low',
    time: '2 days ago',
    icon: AlertTriangle,
    iconColor: 'text-blue-500',
    iconBg: 'bg-blue-100',
  },
];

const ShopAlerts: React.FC = () => {
  return (
    <div className="flow-root">
      <ul className="divide-y divide-gray-200">
        {shopAlerts.map((alert) => (
          <li key={alert.id} className="py-4 px-6 hover:bg-gray-50 transition-colors duration-150">
            <div className="flex items-center space-x-4">
              <div className={`flex-shrink-0 h-10 w-10 rounded-full ${alert.iconBg} flex items-center justify-center`}>
                <alert.icon className={`h-5 w-5 ${alert.iconColor}`} />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center">
                  <p className="text-sm font-medium text-gray-900 truncate">
                    {alert.shop}
                  </p>
                  <span className={`ml-2 px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                    ${alert.severity === 'high' ? 'bg-red-100 text-red-800' : 
                      alert.severity === 'medium' ? 'bg-yellow-100 text-yellow-800' : 
                      'bg-blue-100 text-blue-800'}`}>
                    {alert.severity}
                  </span>
                </div>
                <p className="text-sm font-medium text-gray-700 truncate">
                  {alert.issue}
                </p>
                <p className="text-sm text-gray-500 truncate">
                  {alert.description}
                </p>
              </div>
              <div className="flex-shrink-0 flex items-center text-sm text-gray-500">
                <Clock className="mr-1.5 h-4 w-4 text-gray-400" />
                {alert.time}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShopAlerts;
