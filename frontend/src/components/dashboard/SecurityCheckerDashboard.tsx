import React from 'react';
import { Shield, AlertTriangle, CheckCircle, Clock } from 'react-feather';
import StatCard from './StatCard';

const SecurityCheckerDashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-gray-900">Security Dashboard</h1>
      
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          title="Security Checks" 
          value="128" 
          change="12 today" 
          positive={true} 
          icon={<Shield className="h-6 w-6 text-blue-500" />} 
        />
        <StatCard 
          title="Open Alerts" 
          value="5" 
          change="2 critical" 
          positive={false} 
          icon={<AlertTriangle className="h-6 w-6 text-red-500" />} 
        />
        <StatCard 
          title="Resolved Issues" 
          value="42" 
          change="8 today" 
          positive={true} 
          icon={<CheckCircle className="h-6 w-6 text-green-500" />} 
        />
        <StatCard 
          title="Average Response" 
          value="2.4" 
          unit="hours"
          change="30min faster" 
          positive={true} 
          icon={<Clock className="h-6 w-6 text-yellow-500" />} 
        />
      </div>
      
      {/* Security Alerts */}
      <div className="bg-white rounded-lg shadow">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-medium text-gray-900">Security Alerts</h2>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            {securityAlerts.map((alert, index) => (
              <div 
                key={index} 
                className={`p-4 rounded-lg border ${
                  alert.severity === 'critical' 
                    ? 'border-red-200 bg-red-50' 
                    : alert.severity === 'warning'
                    ? 'border-yellow-200 bg-yellow-50'
                    : 'border-blue-200 bg-blue-50'
                }`}
              >
                <div className="flex items-start">
                  <div className={`p-2 rounded-full ${
                    alert.severity === 'critical' 
                      ? 'bg-red-100 text-red-500' 
                      : alert.severity === 'warning'
                      ? 'bg-yellow-100 text-yellow-500'
                      : 'bg-blue-100 text-blue-500'
                  }`}>
                    <AlertTriangle className="h-5 w-5" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-gray-900">{alert.title}</h3>
                    <p className="mt-1 text-sm text-gray-600">{alert.description}</p>
                    <div className="mt-2 flex space-x-4">
                      <span className="text-xs text-gray-500">{alert.location}</span>
                      <span className="text-xs text-gray-500">{alert.time}</span>
                    </div>
                  </div>
                </div>
                <div className="mt-3 flex justify-end space-x-3">
                  <button className="px-3 py-1 text-xs font-medium rounded-md bg-white border border-gray-300 text-gray-700 hover:bg-gray-50">
                    Dismiss
                  </button>
                  <button className="px-3 py-1 text-xs font-medium rounded-md bg-blue-600 text-white hover:bg-blue-700">
                    Investigate
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Recent Security Checks */}
      <div className="bg-white rounded-lg shadow">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-medium text-gray-900">Recent Security Checks</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Location
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Inspector
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {securityChecks.map((check, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {check.location}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {check.type}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      check.status === 'Passed' 
                        ? 'bg-green-100 text-green-800' 
                        : check.status === 'Failed'
                        ? 'bg-red-100 text-red-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {check.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {check.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {check.inspector}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

// Mock data for security alerts
const securityAlerts = [
  {
    title: 'Unauthorized Access Attempt',
    description: 'Multiple failed login attempts detected from unusual IP address.',
    severity: 'critical',
    location: 'Main Warehouse',
    time: '15 minutes ago'
  },
  {
    title: 'Security Camera Offline',
    description: 'Security camera in the east wing loading dock is offline.',
    severity: 'warning',
    location: 'East Wing',
    time: '2 hours ago'
  },
  {
    title: 'Inventory Discrepancy',
    description: 'System detected a discrepancy between physical count and system inventory.',
    severity: 'info',
    location: 'Section B-12',
    time: '4 hours ago'
  },
  {
    title: 'Expired Credentials',
    description: 'User credentials for 3 staff members will expire in the next 48 hours.',
    severity: 'info',
    location: 'System-wide',
    time: '1 day ago'
  }
];

// Mock data for security checks
const securityChecks = [
  {
    location: 'Main Warehouse',
    type: 'Physical Security Audit',
    status: 'Passed',
    date: 'Today, 10:30 AM',
    inspector: 'John Smith'
  },
  {
    location: 'North Distribution Center',
    type: 'Access Control Check',
    status: 'Pending',
    date: 'Today, 9:15 AM',
    inspector: 'Maria Rodriguez'
  },
  {
    location: 'Server Room',
    type: 'System Security Audit',
    status: 'Failed',
    date: 'Yesterday, 4:45 PM',
    inspector: 'David Chen'
  },
  {
    location: 'South Wing Storage',
    type: 'Inventory Security Check',
    status: 'Passed',
    date: 'Yesterday, 2:30 PM',
    inspector: 'Sarah Johnson'
  },
  {
    location: 'Administrative Offices',
    type: 'Document Security Audit',
    status: 'Passed',
    date: '2 days ago',
    inspector: 'Robert Williams'
  }
];

export default SecurityCheckerDashboard;
