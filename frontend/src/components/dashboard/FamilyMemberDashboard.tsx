import React from 'react';
import { Package, Calendar, AlertTriangle, TrendingUp } from 'react-feather';
import StatCard from './StatCard';
import ConsumptionChart from './ConsumptionChart';
import PlanVsActual from './PlanVsActual';
import RecentActivities from './RecentActivities';

const FamilyMemberDashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-gray-900">Family Dashboard</h1>
      
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          title="Current Boxes" 
          value="24" 
          unit="boxes"
          change="2 new" 
          positive={true} 
          icon={<Package className="h-6 w-6 text-blue-500" />} 
        />
        <StatCard 
          title="Next Delivery" 
          value="3" 
          unit="days"
          change="On schedule" 
          positive={true} 
          icon={<Calendar className="h-6 w-6 text-green-500" />} 
        />
        <StatCard 
          title="Alerts" 
          value="1" 
          change="Action needed" 
          positive={false} 
          icon={<AlertTriangle className="h-6 w-6 text-orange-500" />} 
        />
        <StatCard 
          title="Usage Trend" 
          value="12.5" 
          unit="%"
          change="2.3% decrease" 
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
      
      {/* Recent Activities */}
      <div className="bg-white rounded-lg shadow">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-medium text-gray-900">Recent Activities</h2>
        </div>
        <RecentActivities />
      </div>
    </div>
  );
};

export default FamilyMemberDashboard;
