import React from 'react';
import { Package, Users, AlertTriangle, TrendingUp } from 'react-feather';
import StatCard from './StatCard';
import ConsumptionChart from './ConsumptionChart';
import PlanVsActual from './PlanVsActual';
import RecentActivities from './RecentActivities';
import ShopAlerts from './ShopAlerts';

const CompanyManagerDashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-gray-900">Company Manager Dashboard</h1>
      
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          title="Company Boxes" 
          value="8,742" 
          unit="boxes"
          change="7% increase" 
          positive={true} 
          icon={<Package className="h-6 w-6 text-blue-500" />} 
        />
        <StatCard 
          title="Active Families" 
          value="432" 
          change="12 new" 
          positive={true} 
          icon={<Users className="h-6 w-6 text-green-500" />} 
        />
        <StatCard 
          title="Alerts" 
          value="5" 
          change="2 resolved" 
          positive={true} 
          icon={<AlertTriangle className="h-6 w-6 text-orange-500" />} 
        />
        <StatCard 
          title="Efficiency" 
          value="92.3" 
          unit="%"
          change="1.5% increase" 
          positive={true} 
          icon={<TrendingUp className="h-6 w-6 text-yellow-500" />} 
        />
      </div>
      
      {/* Charts and Data */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Monthly Consumption</h2>
          <ConsumptionChart />
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Plan vs Actual</h2>
          <PlanVsActual />
        </div>
      </div>
      
      {/* Activity and Alerts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-medium text-gray-900">Recent Activities</h2>
          </div>
          <RecentActivities />
        </div>
        
        <div className="bg-white rounded-lg shadow">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-medium text-gray-900">Shop Alerts</h2>
          </div>
          <ShopAlerts />
        </div>
      </div>
    </div>
  );
};

export default CompanyManagerDashboard;
