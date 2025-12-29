import React from "react";
import { Form, Input, Button, Typography, message } from "antd";
import { UserOutlined, MailOutlined, LockOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router";
import "./SignUp.css";

const { Title, Text } = Typography;

const SignUp = ({ onHandleId }) => {
  const navigate = useNavigate();

  const onFinish = (values) => {
    fetch("http://localhost:3002/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: Date.now(),
        username: values.username,
        email: values.email,
        password: values.password,
      }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Đăng ký thất bại, vui lòng thử lại!");
      })
      .then((data) => {
        onHandleId(data.id);
        navigate("/car-signIn");
      })
      .catch((error) => {
        console.error("Lỗi:", error);
        message.error(error.message || "Không thể kết nối đến server!");
      });
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
        >
          <Form.Item
            name="username"
            tooltip="What do you want others to call you?"
            rules={[
              {
                required: true,
                message: "Please input your username!",
                whitespace: true,
              },
              { min: 3, message: "Username must be at least 3 characters" },
            ]}
          >
            <Input prefix={<UserOutlined />} placeholder="Username" />
          </Form.Item>

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
                      "The two passwords that you entered do not match!"
                    )
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
