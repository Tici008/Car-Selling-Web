// API Configuration
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:3000/api';

// Helper function for API calls
const apiCall = async (endpoint, options = {}) => {
  const defaultHeaders = {
    'Content-Type': 'application/json',
  };

  // Add token if exists
  const token = localStorage.getItem('authToken');
  if (token) {
    defaultHeaders['Authorization'] = `Bearer ${token}`;
  }

  const config = {
    ...options,
    headers: {
      ...defaultHeaders,
      ...options.headers,
    },
  };

  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, config);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Something went wrong');
    }

    return data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

// Authentication API
export const authAPI = {
  // Sign In
  signIn: async (credentials) => {
    // TODO: Replace with your actual API endpoint
    // return apiCall('/auth/login', {
    //   method: 'POST',
    //   body: JSON.stringify(credentials),
    // });
    
    // Temporary mock response
    console.log('Sign In API called with:', credentials);
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          success: true,
          token: 'mock-jwt-token',
          user: {
            id: 1,
            email: credentials.email,
            name: 'User Name',
          },
        });
      }, 1000);
    });
  },

  // Sign Up
  signUp: async (userData) => {
    // TODO: Replace with your actual API endpoint
    // return apiCall('/auth/register', {
    //   method: 'POST',
    //   body: JSON.stringify(userData),
    // });
    
    // Temporary mock response
    console.log('Sign Up API called with:', userData);
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          success: true,
          message: 'Account created successfully',
          user: {
            id: 1,
            email: userData.email,
            name: userData.fullName,
          },
        });
      }, 1000);
    });
  },

  // Forgot Password
  forgotPassword: async (email) => {
    // TODO: Replace with your actual API endpoint
    // return apiCall('/auth/forgot-password', {
    //   method: 'POST',
    //   body: JSON.stringify({ email }),
    // });
    
    console.log('Forgot Password API called with:', email);
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          success: true,
          message: 'Password reset email sent',
        });
      }, 1000);
    });
  },

  // Reset Password
  resetPassword: async (token, newPassword) => {
    // TODO: Replace with your actual API endpoint
    // return apiCall('/auth/reset-password', {
    //   method: 'POST',
    //   body: JSON.stringify({ token, newPassword }),
    // });
    
    console.log('Reset Password API called');
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          success: true,
          message: 'Password reset successfully',
        });
      }, 1000);
    });
  },

  // Logout
  logout: () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
    // TODO: Call logout API if needed
    // return apiCall('/auth/logout', { method: 'POST' });
  },
};

// User API
export const userAPI = {
  // Get current user profile
  getProfile: async () => {
    // TODO: Replace with your actual API endpoint
    // return apiCall('/user/profile', { method: 'GET' });
    
    console.log('Get Profile API called');
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          success: true,
          user: {
            id: 1,
            email: 'user@example.com',
            name: 'User Name',
            phone: '0123456789',
          },
        });
      }, 500);
    });
  },

  // Update user profile
  updateProfile: async (userData) => {
    // TODO: Replace with your actual API endpoint
    // return apiCall('/user/profile', {
    //   method: 'PUT',
    //   body: JSON.stringify(userData),
    // });
    
    console.log('Update Profile API called with:', userData);
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          success: true,
          message: 'Profile updated successfully',
        });
      }, 1000);
    });
  },
};

// Helper functions for local storage
export const authStorage = {
  setToken: (token) => {
    localStorage.setItem('authToken', token);
  },
  
  getToken: () => {
    return localStorage.getItem('authToken');
  },
  
  removeToken: () => {
    localStorage.removeItem('authToken');
  },
  
  setUser: (user) => {
    localStorage.setItem('user', JSON.stringify(user));
  },
  
  getUser: () => {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  },
  
  removeUser: () => {
    localStorage.removeItem('user');
  },
  
  isAuthenticated: () => {
    return !!localStorage.getItem('authToken');
  },
};

export default {
  authAPI,
  userAPI,
  authStorage,
};
