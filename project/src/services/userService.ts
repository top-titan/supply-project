import { User } from "../types/User";
// Mock data for user roles and permissions
const userRoles = [
  {
    userId: "1",
    role: "topManager",
    permissions: {
      companies: { view: true, create: true, edit: true, delete: true },
      shops: { view: true, create: true, edit: true, delete: true },
      families: { view: true, create: true, edit: true, delete: true },
      users: { view: true, create: true, edit: true, delete: true },
      consumption: { view: true, create: true, edit: true, delete: true },
      reports: { view: true, create: true, edit: true, delete: true },
    },
  },
  {
    userId: "2",
    role: "companyManager",
    permissions: {
      companies: { view: true, create: false, edit: true, delete: false },
      shops: { view: true, create: true, edit: true, delete: true },
      families: { view: true, create: true, edit: true, delete: true },
      users: { view: true, create: true, edit: true, delete: false },
      consumption: { view: true, create: true, edit: true, delete: false },
      reports: { view: true, create: true, edit: false, delete: false },
    },
  },
  {
    userId: "3",
    role: "shopManager",
    permissions: {
      companies: { view: false, create: false, edit: false, delete: false },
      shops: { view: true, create: false, edit: true, delete: false },
      families: { view: true, create: true, edit: true, delete: false },
      users: { view: true, create: false, edit: false, delete: false },
      consumption: { view: true, create: true, edit: true, delete: false },
      reports: { view: true, create: true, edit: false, delete: false },
    },
  },
  {
    userId: "4",
    role: "familyMember",
    permissions: {
      companies: { view: false, create: false, edit: false, delete: false },
      shops: { view: true, create: false, edit: false, delete: false },
      families: { view: true, create: false, edit: false, delete: false },
      users: { view: false, create: false, edit: false, delete: false },
      consumption: { view: true, create: false, edit: false, delete: false },
      reports: { view: false, create: false, edit: false, delete: false },
    },
  },
  {
    userId: "5",
    role: "securityChecker",
    permissions: {
      companies: { view: true, create: false, edit: false, delete: false },
      shops: { view: true, create: false, edit: false, delete: false },
      families: { view: true, create: false, edit: false, delete: false },
      users: { view: true, create: false, edit: false, delete: false },
      consumption: { view: true, create: false, edit: false, delete: false },
      reports: { view: true, create: false, edit: false, delete: false },
    },
  },
];

export const getUserRole = (userId: string) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const userRole = userRoles.find((ur) => ur.userId === userId);

      if (userRole) {
        resolve(userRole);
      } else {
        // Default to basic permissions if no specific role is found
        resolve({
          role: null,
          permissions: {
            companies: {
              view: false,
              create: false,
              edit: false,
              delete: false,
            },
            shops: { view: false, create: false, edit: false, delete: false },
            families: {
              view: false,
              create: false,
              edit: false,
              delete: false,
            },
            users: { view: false, create: false, edit: false, delete: false },
            consumption: {
              view: false,
              create: false,
              edit: false,
              delete: false,
            },
            reports: { view: false, create: false, edit: false, delete: false },
          },
        });
      }
    }, 500);
  });
};

export const getUsers = (): Promise<User[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: "1",
          name: "Admin User",
          email: "admin@example.com",
          role: "topManager",
        },
        {
          id: "2",
          name: "Company Manager",
          email: "company@example.com",
          role: "companyManager",
        },
        {
          id: "3",
          name: "Shop Manager",
          email: "shop@example.com",
          role: "shopManager",
        },
        {
          id: "4",
          name: "Family Member",
          email: "family@example.com",
          role: "familyMember",
        },
        {
          id: "5",
          name: "Security Checker",
          email: "security@example.com",
          role: "securityChecker",
        },
      ]);
    }, 1000);
  });
};
