// Define User type
export interface User {
  id: string;
  name: string;
  email: string;
  role?: string;
}

// Define mock users for testing
const users = [
  {
    id: "1",
    name: "Admin User",
    email: "admin@boxsupply.com",
    password: "admin123",
    role: "topManager",
  },
  {
    id: "2",
    name: "Company Manager",
    email: "manager@company.com",
    password: "manager123",
    role: "companyManager",
  },
  {
    id: "3",
    name: "Shop Manager",
    email: "shop@boxsupply.com",
    password: "shop123",
    role: "shopManager",
  },
  {
    id: "4",
    name: "Security Checker",
    email: "security@boxsupply.com",
    password: "security123",
    role: "securityChecker",
  },
  {
    id: "5",
    name: "Family Member",
    email: "family@example.com",
    password: "family123",
    role: "familyMember",
  },
];

export const loginUser = (email: string, password: string): Promise<User> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulate API call
      const user = users.find(
        (u) => u.email === email && u.password === password
      );

      if (user) {
        // Create a user object without the password for security
        const userWithoutPassword = {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role,
        };

        // Store in localStorage to persist login
        localStorage.setItem(
          "currentUser",
          JSON.stringify(userWithoutPassword)
        );
        resolve(userWithoutPassword);
      } else {
        reject(new Error("Invalid login credentials"));
      }
    }, 1000);
  });
};

export const getCurrentUser = (): Promise<User | null> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Get user from localStorage
      const userJson = localStorage.getItem("currentUser");
      if (userJson) {
        const user = JSON.parse(userJson);
        resolve(user);
      } else {
        resolve(null);
      }
    }, 500);
  });
};

export const logoutUser = (): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Remove user from localStorage
      localStorage.removeItem("currentUser");
      resolve();
    }, 500);
  });
};
