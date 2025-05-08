import React, { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from './AuthContext';
import { getUserRole } from '../services/userService';

type Role = 'topManager' | 'companyManager' | 'shopManager' | 'familyMember' | 'securityChecker' | null;

interface Permissions {
  companies: {
    view: boolean;
    create: boolean;
    edit: boolean;
    delete: boolean;
  };
  shops: {
    view: boolean;
    create: boolean;
    edit: boolean;
    delete: boolean;
  };
  families: {
    view: boolean;
    create: boolean;
    edit: boolean;
    delete: boolean;
  };
  users: {
    view: boolean;
    create: boolean;
    edit: boolean;
    delete: boolean;
  };
  consumption: {
    view: boolean;
    create: boolean;
    edit: boolean;
    delete: boolean;
  };
  reports: {
    view: boolean;
    create: boolean;
    edit: boolean;
    delete: boolean;
  };
}

interface UserRoleContextType {
  role: Role;
  permissions: Permissions | null;
  loading: boolean;
}

const UserRoleContext = createContext<UserRoleContextType>({
  role: null,
  permissions: null,
  loading: true,
});

export const useUserRole = () => useContext(UserRoleContext);

export const UserRoleProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { currentUser, loading: authLoading } = useAuth();
  const [role, setRole] = useState<Role>(null);
  const [permissions, setPermissions] = useState<Permissions | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserRole = async () => {
      if (!currentUser) {
        setRole(null);
        setPermissions(null);
        setLoading(false);
        return;
      }

      try {
        const userRoleData = await getUserRole(currentUser.id) as { role: Role; permissions: Permissions };
        setRole(userRoleData.role);
        setPermissions(userRoleData.permissions);
      } catch (error) {
        console.error('Failed to fetch user role:', error);
      } finally {
        setLoading(false);
      }
    };
    if (!authLoading) {
      fetchUserRole();
    }
  }, [currentUser, authLoading]);

  return (
    <UserRoleContext.Provider value={{ role, permissions, loading }}>
      {children}
    </UserRoleContext.Provider>
  );
};
