import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Home, 
  Users, 
  ShoppingBag, 
  Package, 
  BarChart2, 
  Shield, 
  Settings, 
  X,
  UserCircle,
  FileText
} from 'lucide-react';
import { useUserRole } from '../../contexts/UserRoleContext';

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, setIsOpen }) => {
  const { role, permissions } = useUserRole();

  const navItems = [
    { name: 'Dashboard', href: '/', icon: Home, visible: true },
    { 
      name: 'Companies', 
      href: '/companies', 
      icon: ShoppingBag, 
      visible: permissions?.companies.view 
    },
    { 
      name: 'Shops', 
      href: '/shops', 
      icon: Package, 
      visible: permissions?.shops.view 
    },
    { 
      name: 'Families', 
      href: '/families', 
      icon: Users, 
      visible: permissions?.families.view 
    },
    { 
      name: 'Users', 
      href: '/users', 
      icon: UserCircle, 
      visible: permissions?.users.view 
    },
    { 
      name: 'Consumption', 
      href: '/consumption', 
      icon: FileText, 
      visible: permissions?.consumption.view 
    },
    { 
      name: 'Reports', 
      href: '/reports', 
      icon: BarChart2, 
      visible: permissions?.reports.view 
    },
    { 
      name: 'Security', 
      href: '/security', 
      icon: Shield, 
      visible: role === 'securityChecker' 
    },
    { name: 'Profile', href: '/profile', icon: Settings, visible: true },
  ];

  return (
    <>
      {/* Mobile sidebar overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-gray-600 bg-opacity-75 lg:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform ease-in-out duration-300 lg:translate-x-0 lg:static lg:inset-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="h-full flex flex-col">
          <div className="flex items-center justify-between px-4 py-6 border-b">
            <h1 className="text-xl font-bold text-blue-600">BoxSupply</h1>
            <button
              type="button"
              className="lg:hidden rounded-md text-gray-500 hover:text-gray-600 focus:outline-none"
              onClick={() => setIsOpen(false)}
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <nav className="flex-1 px-2 py-4 overflow-y-auto">
            <ul className="space-y-1">
              {navItems
                .filter(item => item.visible)
                .map((item) => (
                  <li key={item.name}>
                    <NavLink
                      to={item.href}
                      className={({ isActive }) =>
                        `flex items-center px-4 py-2.5 text-sm font-medium rounded-md transition-colors ${
                          isActive
                            ? 'bg-blue-50 text-blue-600'
                            : 'text-gray-700 hover:bg-gray-100'
                        }`
                      }
                    >
                      <item.icon className="mr-3 h-5 w-5" />
                      {item.name}
                    </NavLink>
                  </li>
                ))}
            </ul>
          </nav>

          <div className="px-4 py-4 border-t">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white">
                  <UserCircle className="h-5 w-5" />
                </div>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-700">User Controls</p>
                <p className="text-xs text-gray-500">Manage your account</p>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;