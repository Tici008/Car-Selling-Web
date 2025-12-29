import React, { useState } from "react";
import { Form, Input, Button, Checkbox, Typography, message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import "./SignIn.css";
import { Link, useNavigate } from "react-router";

const { Title, Text } = Typography;

const SignIn = ({ onLoginSuccess }) => {
  const navigate = useNavigate();

  const onFinish = () => {
    fetch("http://localhost:3002/users")
      .then((res) => res.json())
      .then((data) => {
        onLoginSuccess(data);
        navigate("/");
      });
  };

  return (
    <div className="signin-page-wrapper">
      <div className="signin-card">
        <div className="signin-header">
          <Title level={2} style={{ textAlign: "center", marginBottom: 0 }}>
            Welcome Back
          </Title>
          <Text
            type="secondary"
            style={{
              display: "block",
              textAlign: "center",
              marginBottom: "24px",
            }}
          >
            Please enter your details to sign in.
          </Text>
        </div>

        <Form
          name="signin_form"
          className="signin-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          layout="vertical"
          size="large"
        >
          <Form.Item
            name="email"
            rules={[
              { required: true, message: "Please input your Email!" },
              { type: "email", message: "The input is not valid E-mail!" },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Email Address"
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your Password!" }]}
          >
            <Input.Password
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>

          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="signin-form-button"
              block
            >
              Log in
            </Button>
            <div style={{ marginTop: "16px", textAlign: "center" }}>
              Or <Link to={"/car-signUp"}>register now!</Link>
            </div>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default SignIn;
