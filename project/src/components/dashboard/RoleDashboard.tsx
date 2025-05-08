import React from 'react';
import { useUserRole } from '../../contexts/UserRoleContext';
import TopManagerDashboard from './TopManagerDashboard';
import CompanyManagerDashboard from './CompanyManagerDashboard';
import ShopManagerDashboard from './ShopManagerDashboard';
import FamilyMemberDashboard from './FamilyMemberDashboard';
import SecurityCheckerDashboard from './SecurityCheckerDashboard';

const RoleDashboard: React.FC = () => {
  const { role, loading } = useUserRole();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }
 
  switch (role) {
    case 'topManager':
      return <TopManagerDashboard />;
    case 'companyManager':
      return <CompanyManagerDashboard />;
    case 'shopManager':
      return <ShopManagerDashboard />;
    case 'familyMember':
      return <FamilyMemberDashboard />;
    case 'securityChecker':
      return <SecurityCheckerDashboard />;
    default:
      return (
        <div className="text-center py-12">
          <h2 className="text-2xl font-semibold text-gray-700">Welcome to BoxSupply</h2>
          <p className="mt-2 text-gray-500">Your role-specific dashboard will appear here.</p>
        </div>
      );
  }
};

export default RoleDashboard;
