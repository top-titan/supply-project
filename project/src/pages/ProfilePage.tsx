import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useUserRole } from '../contexts/UserRoleContext';

const ProfilePage: React.FC = () => {
  const { currentUser } = useAuth();
  const { role } = useUserRole();

  const getRoleDisplayName = (role: string | null) => {
    if (!role) return 'User';
    
    const roleMap: Record<string, string> = {
      topManager: 'Top Manager',
      companyManager: 'Company Manager',
      shopManager: 'Shop Manager',
      securityChecker: 'Security Checker',
      familyMember: 'Family Member'
    };
    
    return roleMap[role] || 'User';
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">User Profile</h1>
      <div className="bg-white rounded-lg shadow p-6">
        {currentUser && (
          <div className="space-y-4">
            <div>
              <h2 className="text-lg font-medium">User Information</h2>
              <div className="mt-2 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Name</label>
                  <div className="mt-1 p-2 border border-gray-300 rounded-md bg-gray-50">
                    {currentUser.name || 'N/A'}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <div className="mt-1 p-2 border border-gray-300 rounded-md bg-gray-50">
                    {currentUser.email}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Role</label>
                  <div className="mt-1 p-2 border border-gray-300 rounded-md bg-gray-50">
                    {getRoleDisplayName(role)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
