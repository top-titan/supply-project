import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, Bell, User, Search, ChevronDown, MenuIcon } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { useUserRole } from '../../contexts/UserRoleContext';

interface HeaderProps {
  setSidebarOpen: (isOpen: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ setSidebarOpen }) => {
  const { currentUser, logout } = useAuth();
  const { role } = useUserRole();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

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
    <header className="z-10 py-4 bg-white shadow-sm">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <button
              type="button"
              className="p-2 rounded-md lg:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <MenuIcon className="w-6 h-6 text-gray-500" />
            </button>
            <div className="relative lg:ml-4">
              <div className="flex items-center md:ml-6">
                <div className="relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 pr-4 py-2 sm:text-sm border-gray-300 rounded-md"
                    placeholder="Search..."
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none">
              <Bell className="h-6 w-6" />
            </button>

            <div className="relative">
              <div className="flex items-center">
                <button className="max-w-xs flex items-center text-sm rounded-full focus:outline-none">
                  <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white">
                    <User className="h-5 w-5" />
                  </div>
                  <span className="ml-2 text-gray-700 font-medium hidden md:block">
                    {currentUser?.name || 'User'}
                  </span>
                  <span className="ml-1 text-gray-500 text-xs hidden md:block">
                    ({getRoleDisplayName(role)})
                  </span>
                  <ChevronDown className="ml-1 h-4 w-4 text-gray-500" />
                </button>
              </div>
              {/* Dropdown would go here */}
            </div>
            <button
              onClick={handleLogout}
              className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;