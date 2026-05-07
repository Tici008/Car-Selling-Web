import React from "react";
import { Form, Input, Button, Typography, message, Select } from "antd";
import { UserOutlined, MailOutlined, LockOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router";
import "./SignUp.css";
import axios from "axios";
import axiosModel from "../../../api/axiosConfig";

const { Title, Text } = Typography;

const SignUp = ({ onHandleId }) => {
  const navigate = useNavigate();

  const onFinish = async (values) => {
    try {
      const response = await axiosModel.post("/register", {
        email: values.email,
        password: values.password,
        isActive: true,
        role: values.role,
      });
      console.log(response);

      navigate("/car-signIn");
    } catch (err) {
      console.log(err);
    }
  };

  const [form] = Form.useForm();

  return (
    <div className="signup-page-wrapper">
      <div className="signup-card">
        <div className="signup-header">
          <Title level={2} style={{ textAlign: "center", marginBottom: 0 }}>
            Create Account
          </Title>
          <Text
            type="secondary"
            style={{
              display: "block",
              textAlign: "center",
              marginBottom: "24px",
            }}
          >
            Join us! Enter your details below.
          </Text>
        </div>

        <Form
          form={form}
          name="signup_form"
          className="signup-form"
          onFinish={onFinish}
          scrollToFirstError
          layout="vertical"
          size="large"
          initialValues={{ role: "CUSTOMER" }}
        >
          <Form.Item
            name="email"
            rules={[
              { type: "email", message: "The input is not valid E-mail!" },
              { required: true, message: "Please input your E-mail!" },
            ]}
          >
            <Input prefix={<MailOutlined />} placeholder="Email Address" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              { required: true, message: "Please input your password!" },
              { min: 6, message: "Password must be at least 6 characters" },
            ]}
            hasFeedback
          >
            <Input.Password prefix={<LockOutlined />} placeholder="Password" />
          </Form.Item>

          <Form.Item
            name="confirm"
            dependencies={["password"]}
            hasFeedback
            rules={[
              { required: true, message: "Please confirm your password!" },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error(
                      "The two passwords that you entered do not match!",
                    ),
                  );
                },
              }),
            ]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              placeholder="Confirm Password"
            />
          </Form.Item>
          <Form.Item
            name="role"
            rules={[{ required: true, message: "Please select your role" }]}
          >
            <Select placeholder="Select your role">
              <Option value="CUSTOMER">Customer</Option>
              <Option value="SELLER">Seller</Option>
            </Select>
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="signup-form-button"
              block
            >
              Register
            </Button>

            <div style={{ marginTop: "16px", textAlign: "center" }}>
              Already have an account? <Link to={"/car-signIn"}>Sign in</Link>
            </div>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default SignUp;
