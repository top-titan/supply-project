import React from 'react';
import { Package, Users, ShoppingBag, Clock, AlertTriangle, FileText } from 'react-feather';

// Mock data for recent activities
const activities = [
  {
    id: 1,
    title: 'New Delivery',
    description: 'Shop A received 250 boxes',
    time: '2 hours ago',
    icon: Package,
    iconColor: 'text-blue-500',
    iconBg: 'bg-blue-100',
  },
  {
    id: 2,
    title: 'Family Registration',
    description: 'Smith family registered at Shop B',
    time: '4 hours ago',
    icon: Users,
    iconColor: 'text-green-500',
    iconBg: 'bg-green-100',
  },
  {
    id: 3,
    title: 'Inventory Alert',
    description: 'Shop C inventory below threshold',
    time: '6 hours ago',
    icon: AlertTriangle,
    iconColor: 'text-red-500',
    iconBg: 'bg-red-100',
  },
  {
    id: 4,
    title: 'New Company',
    description: 'Company XYZ added to the system',
    time: '1 day ago',
    icon: ShoppingBag,
    iconColor: 'text-purple-500',
    iconBg: 'bg-purple-100',
  },
  {
    id: 5,
    title: 'Monthly Report',
    description: 'April consumption report generated',
    time: '2 days ago',
    icon: FileText,
    iconColor: 'text-yellow-500',
    iconBg: 'bg-yellow-100',
  },
];

const RecentActivities: React.FC = () => {
  return (
    <div className="flow-root">
      <ul className="divide-y divide-gray-200">
        {activities.map((activity) => (
          <li key={activity.id} className="py-4 px-6 hover:bg-gray-50 transition-colors duration-150">
            <div className="flex items-center space-x-4">
              <div className={`flex-shrink-0 h-10 w-10 rounded-full ${activity.iconBg} flex items-center justify-center`}>
                <activity.icon className={`h-5 w-5 ${activity.iconColor}`} />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-gray-900 truncate">
                  {activity.title}
                </p>
                <p className="text-sm text-gray-500 truncate">
                  {activity.description}
                </p>
              </div>
              <div className="flex-shrink-0 flex items-center text-sm text-gray-500">
                <Clock className="mr-1.5 h-4 w-4 text-gray-400" />
                {activity.time}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentActivities;
