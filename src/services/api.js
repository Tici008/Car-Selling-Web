// ===============================================
// API SERVICE - QUẢN LÝ CÁC CUỘC GỌI API
// ===============================================

// MindX Mockup Server - Database ID: 69524bb98c6a1ffcdb867eb1
const API_KEY = '69524bb98c6a1ffcdb867eb1';
const API_BASE_URL = 'https://mindx-mockup-server.vercel.app/api/resources';

// ===============================================
// 1. AUTHENTICATION API - Xác thực người dùng
// ===============================================

// Đăng nhập
export async function signIn(email, password) {
  try {
    // Fetch trực tiếp từ endpoint /users
    const api = `${API_BASE_URL}/users?apiKey=${API_KEY}`;
    
    const response = await fetch(api, {
      method: 'GET',
    });

    if (!response.ok) {
      throw new Error('Không thể kết nối server!');
    }

    const responseData = await response.json();
    
    // Lấy users từ cấu trúc: data.data[]
    const users = responseData.data?.data || [];
    
    // Tìm user khớp với email và password
    const user = users.find(u => u.email === email && u.password === password);
    
    if (!user) {
      throw new Error('Email hoặc mật khẩu không đúng!');
    }
    
    // Tạo token giả (vì MindX Mockup không có JWT)
    const token = `token_${user._id}_${Date.now()}`;
    
    // Lưu token và user vào localStorage
    localStorage.setItem('authToken', token);
    localStorage.setItem('user', JSON.stringify(user));
    
    return {
      success: true,
      token: token,
      user: user
    };
    
  } catch (error) {
    console.error('Lỗi khi đăng nhập:', error);
    throw error;
  }
}

// Đăng ký
export async function signUp(fullName, email, phone, password) {
  try {
    // Fetch trực tiếp từ endpoint /users
    const api = `${API_BASE_URL}/users?apiKey=${API_KEY}`;
    
    // Kiểm tra email đã tồn tại chưa
    const checkResponse = await fetch(api);
    const responseData = await checkResponse.json();
    
    // Lấy users từ cấu trúc: data.data[]
    const existingUsers = responseData.data?.data || [];
    
    const emailExists = existingUsers.some(u => u.email === email);
    if (emailExists) {
      throw new Error('Email đã được sử dụng!');
    }
    
    // Tạo user mới - POST tới /users với apiKey
    const postApi = `${API_BASE_URL}/users?apiKey=${API_KEY}`;
    const response = await fetch(postApi, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fullName: fullName,
        email: email,
        phone: phone,
        password: password,
        createdAt: new Date().toISOString()
      }),
    });

    if (!response.ok) {
      throw new Error('Đăng ký thất bại!');
    }

    const data = await response.json();
    return {
      success: true,
      message: 'Đăng ký thành công!',
      user: data
    };
    
  } catch (error) {
    console.error('Lỗi khi đăng ký:', error);
    throw error;
  }
}

// Đăng xuất
export function logout() {
  localStorage.removeItem('authToken');
  localStorage.removeItem('user');
}

// Kiểm tra đã đăng nhập chưa
export function isAuthenticated() {
  const token = localStorage.getItem('authToken');
  return token !== null;
}

// Lấy thông tin user hiện tại
export function getCurrentUser() {
  const userString = localStorage.getItem('user');
  if (userString) {
    return JSON.parse(userString);
  }
  return null;
}

// ===============================================
// 2. USER API - Quản lý người dùng
// ===============================================

// Lấy thông tin profile
export async function getUserProfile() {
  try {
    const user = getCurrentUser();
    if (!user || !user._id) {
      throw new Error('Chưa đăng nhập!');
    }
    
    const api = `${API_BASE_URL}/users/${user._id}?apiKey=${API_KEY}`;
    
    const response = await fetch(api, {
      method: 'GET',
    });

    if (!response.ok) {
      throw new Error('Không thể lấy thông tin người dùng!');
    }

    const responseData = await response.json();
    return responseData.data || responseData;
    
  } catch (error) {
    console.error('Lỗi khi lấy profile:', error);
    throw error;
  }
}

// Cập nhật profile
export async function updateUserProfile(userData) {
  try {
    const user = getCurrentUser();
    if (!user || !user._id) {
      throw new Error('Chưa đăng nhập!');
    }
    
    const api = `${API_BASE_URL}/users/${user._id}?apiKey=${API_KEY}`;
    
    const response = await fetch(api, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      throw new Error('Cập nhật thất bại!');
    }

    const data = await response.json();
    
    // Cập nhật lại localStorage
    localStorage.setItem('user', JSON.stringify(data));
    
    return data;
    
  } catch (error) {
    console.error('Lỗi khi cập nhật profile:', error);
    throw error;
  }
}