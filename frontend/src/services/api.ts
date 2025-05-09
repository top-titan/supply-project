import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor for adding auth token
api.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const token = localStorage.getItem('token');
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

// Response interceptor for handling errors
api.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {
    if (error.response?.status === 401) {
      // Handle unauthorized access
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export const authService = {
  login: async (email: string, password: string) => {
    const response = await api.post('/auth/login', { email, password });
    return response.data;
  },
  register: async (userData: any) => {
    const response = await api.post('/auth/register', userData);
    return response.data;
  },
  logout: () => {
    localStorage.removeItem('token');
  },
};

export const userService = {
  getProfile: async () => {
    const response = await api.get('/users/profile');
    return response.data;
  },
  updateProfile: async (userData: any) => {
    const response = await api.put('/users/profile', userData);
    return response.data;
  },
};

export const companyService = {
  getAll: async () => {
    const response = await api.get('/companies');
    return response.data;
  },
  create: async (companyData: any) => {
    const response = await api.post('/companies', companyData);
    return response.data;
  },
  update: async (id: string, companyData: any) => {
    const response = await api.put(`/companies/${id}`, companyData);
    return response.data;
  },
  delete: async (id: string) => {
    const response = await api.delete(`/companies/${id}`);
    return response.data;
  },
};

export const shopService = {
  getAll: async () => {
    const response = await api.get('/shops');
    return response.data;
  },
  create: async (shopData: any) => {
    const response = await api.post('/shops', shopData);
    return response.data;
  },
  update: async (id: string, shopData: any) => {
    const response = await api.put(`/shops/${id}`, shopData);
    return response.data;
  },
  delete: async (id: string) => {
    const response = await api.delete(`/shops/${id}`);
    return response.data;
  },
};

export const familyService = {
  getAll: async () => {
    const response = await api.get('/families');
    return response.data;
  },
  create: async (familyData: any) => {
    const response = await api.post('/families', familyData);
    return response.data;
  },
  update: async (id: string, familyData: any) => {
    const response = await api.put(`/families/${id}`, familyData);
    return response.data;
  },
  delete: async (id: string) => {
    const response = await api.delete(`/families/${id}`);
    return response.data;
  },
};

export default api; 