import React, { useState } from 'react';
import { Form, Input, Button, Checkbox, message } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import './SignUp.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { authAPI } from '../../services/api';

const SignUp = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onFinish = async (values) => {
    setLoading(true);
    try {
      // Call API
      const response = await authAPI.signUp({
        fullName: values.fullName,
        email: values.email,
        phone: values.phone,
        password: values.password,
        agreeToTerms: values.agreement,
      });

      if (response.success) {
        message.success('Đăng ký thành công! Vui lòng đăng nhập.');
        setTimeout(() => {
          navigate('/signin');
        }, 1000);
      }
    } catch (error) {
      message.error(error.message || 'Đăng ký thất bại. Vui lòng thử lại!');
      console.error('Sign up error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup-page">
      <Header />
      
      <div className="signup-container">
        <div className="signup-content">
          <div className="signup-header">
            <h1>Create Account</h1>
            <p>Sign up to get started</p>
          </div>

          <Form
            form={form}
            name="signup"
            className="signup-form"
            onFinish={onFinish}
            layout="vertical"
            size="large"
            scrollToFirstError
          >
            <Form.Item
              name="fullName"
              label="Full Name"
              rules={[
                { required: true, message: 'Please input your full name!' },
                { min: 2, message: 'Name must be at least 2 characters!' }
              ]}
            >
              <Input 
                prefix={<UserOutlined />} 
                placeholder="Enter your full name"
                autoComplete="name"
              />
            </Form.Item>

            <Form.Item
              name="email"
              label="Email"
              rules={[
                { required: true, message: 'Please input your email!' },
                { type: 'email', message: 'Please enter a valid email!' }
              ]}
            >
              <Input 
                prefix={<MailOutlined />} 
                placeholder="Enter your email"
                autoComplete="email"
              />
            </Form.Item>

            <Form.Item
              name="phone"
              label="Phone Number"
              rules={[
                { required: true, message: 'Please input your phone number!' },
                { 
                  pattern: /^[0-9]{10,11}$/, 
                  message: 'Please enter a valid phone number!' 
                }
              ]}
            >
              <Input 
                prefix={<PhoneOutlined />} 
                placeholder="Enter your phone number"
                autoComplete="tel"
              />
            </Form.Item>

            <Form.Item
              name="password"
              label="Password"
              rules={[
                { required: true, message: 'Please input your password!' },
                { min: 6, message: 'Password must be at least 6 characters!' },
                {
                  pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
                  message: 'Password must contain uppercase, lowercase and number!'
                }
              ]}
              hasFeedback
            >
              <Input.Password
                prefix={<LockOutlined />}
                placeholder="Create a password"
                autoComplete="new-password"
              />
            </Form.Item>

            <Form.Item
              name="confirmPassword"
              label="Confirm Password"
              dependencies={['password']}
              hasFeedback
              rules={[
                { required: true, message: 'Please confirm your password!' },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error('Passwords do not match!'));
                  },
                }),
              ]}
            >
              <Input.Password
                prefix={<LockOutlined />}
                placeholder="Confirm your password"
                autoComplete="new-password"
              />
            </Form.Item>

            <Form.Item
              name="agreement"
              valuePropName="checked"
              rules={[
                {
                  validator: (_, value) =>
                    value ? Promise.resolve() : Promise.reject(new Error('Please accept the terms and conditions')),
                },
              ]}
            >
              <Checkbox>
                I agree to the <Link to="/terms">Terms & Conditions</Link> and{' '}
                <Link to="/privacy">Privacy Policy</Link>
              </Checkbox>
            </Form.Item>

            <Form.Item>
              <Button 
                type="primary" 
                htmlType="submit" 
                className="signup-button"
                loading={loading}
                block
              >
                Create Account
              </Button>
            </Form.Item>

            <div className="signin-link">
              Already have an account? <Link to="/signin">Sign In</Link>
            </div>
          </Form>

          {/* Social Sign Up */}
          <div className="social-signup">
            <div className="divider">
              <span>Or sign up with</span>
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

export default SignUp;
