import React, { useState } from 'react';
import { Form, Input, Button, Checkbox, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import './SignIn.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { authAPI, authStorage } from '../../services/api';

const SignIn = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onFinish = async (values) => {
    setLoading(true);
    try {
      // Call API
      const response = await authAPI.signIn({
        email: values.email,
        password: values.password,
        remember: values.remember,
      });

      if (response.success) {
        // Store token and user info
        authStorage.setToken(response.token);
        authStorage.setUser(response.user);
        
        message.success('Đăng nhập thành công!');
        setTimeout(() => {
          navigate('/');
        }, 1000);
      }
    } catch (error) {
      message.error(error.message || 'Đăng nhập thất bại. Vui lòng thử lại!');
      console.error('Sign in error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signin-page">
      <Header />
      
      <div className="signin-container">
        <div className="signin-content">
          <div className="signin-header">
            <h1>Welcome Back</h1>
            <p>Sign in to your account</p>
          </div>

          <Form
            form={form}
            name="signin"
            className="signin-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            layout="vertical"
            size="large"
          >
            <Form.Item
              name="email"
              label="Email"
              rules={[
                { required: true, message: 'Please input your email!' },
                { type: 'email', message: 'Please enter a valid email!' }
              ]}
            >
              <Input 
                prefix={<UserOutlined />} 
                placeholder="Enter your email"
                autoComplete="email"
              />
            </Form.Item>

            <Form.Item
              name="password"
              label="Password"
              rules={[
                { required: true, message: 'Please input your password!' },
                { min: 6, message: 'Password must be at least 6 characters!' }
              ]}
            >
              <Input.Password
                prefix={<LockOutlined />}
                placeholder="Enter your password"
                autoComplete="current-password"
              />
            </Form.Item>

            <Form.Item className="form-options">
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>
              <Link to="/forgot-password" className="forgot-link">
                Forgot password?
              </Link>
            </Form.Item>

            <Form.Item>
              <Button 
                type="primary" 
                htmlType="submit" 
                className="signin-button"
                loading={loading}
                block
              >
                Sign In
              </Button>
            </Form.Item>

            <div className="signup-link">
              Don't have an account? <Link to="/signup">Sign Up</Link>
            </div>
          </Form>

          {/* Social Login */}
          <div className="social-login">
            <div className="divider">
              <span>Or continue with</span>
            </div>
            <div className="social-buttons">
              <Button className="social-btn google" block>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M19.8055 10.0415C19.8055 9.39098 19.7515 8.76898 19.6525 8.17548H10.2V11.6915H15.6115C15.3775 12.9465 14.6565 14.0085 13.5855 14.7115V17.0335H16.8265C18.7175 15.3025 19.8055 12.8765 19.8055 10.0415Z" fill="#4285F4"/>
                  <path d="M10.2 19.2998C12.7065 19.2998 14.8065 18.4698 16.8265 17.0338L13.5855 14.7118C12.6825 15.3178 11.5405 15.6808 10.2 15.6808C7.7955 15.6808 5.7525 13.9318 5.0055 11.6748H1.6515V14.0698C3.6615 18.0448 6.6135 19.2998 10.2 19.2998Z" fill="#34A853"/>
                  <path d="M5.0055 11.6748C4.8015 11.0688 4.6845 10.4178 4.6845 9.74978C4.6845 9.08178 4.8015 8.43078 5.0055 7.82478V5.42978H1.6515C0.9645 6.80078 0.5745 8.33178 0.5745 9.74978C0.5745 11.1678 0.9645 12.6988 1.6515 14.0698L5.0055 11.6748Z" fill="#FBBC05"/>
                  <path d="M10.2 3.81879C11.6625 3.81879 12.9675 4.31979 14.0025 5.30979L16.8895 2.42379C14.8065 0.509785 12.7065 -0.200215 10.2 -0.200215C6.6135 -0.200215 3.6615 1.05479 1.6515 5.02979L5.0055 7.42479C5.7525 5.16779 7.7955 3.81879 10.2 3.81879Z" fill="#EA4335"/>
                </svg>
                Google
              </Button>
              <Button className="social-btn facebook" block>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M20 10C20 4.48 15.52 0 10 0C4.48 0 0 4.48 0 10C0 14.84 3.44 18.87 8 19.8V13H6V10H8V7.5C8 5.57 9.57 4 11.5 4H14V7H12C11.45 7 11 7.45 11 8V10H14V13H11V19.95C16.05 19.45 20 15.19 20 10Z" fill="#1877F2"/>
                </svg>
                Facebook
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SignIn;
