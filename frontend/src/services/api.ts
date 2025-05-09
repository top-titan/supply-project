import axios, { AxiosRequestConfig, AxiosResponse, AxiosError, InternalAxiosRequestConfig } from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true
});

// Request interceptor for adding auth token
api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
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
    if (response.data.token) {
      localStorage.setItem('token', response.data.token);
    }
    return response.data;
  },
  register: async (userData: any) => {
    const response = await api.post('/auth/register', userData);
    if (response.data.token) {
      localStorage.setItem('token', response.data.token);
    }
    return response.data;
  },
  getProfile: async () => {
    const response = await api.get('/auth/profile');
    return response.data;
  },
  logout: () => {
    localStorage.removeItem('token');
  },
};

export const userService = {
  getAll: async () => {
    const response = await api.get('/users');
    return response.data;
  },
  update: async (id: string, userData: any) => {
    const response = await api.put(`/users/${id}`, userData);
    return response.data;
  },
  delete: async (id: string) => {
    const response = await api.delete(`/users/${id}`);
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