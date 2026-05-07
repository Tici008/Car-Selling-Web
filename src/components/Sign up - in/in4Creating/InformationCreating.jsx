import React, { useEffect } from "react";
import { Form, Input, Button, ConfigProvider, theme } from "antd";
import axiosModel from "../../../api/axiosConfig";
import { Link, useNavigate } from "react-router";

export default function InformationCreating({ onCreatingSuccess }) {
  const navigate = useNavigate();
  console.log(localStorage.getItem("token"));

  const onFinish = async (values) => {
    try {
      const userInfo = await axiosModel.post("/users/profile", {
        name: values.name,
        email: values.email,
        phone: values.phone,
        address: values.address,
      });

      console.log(userInfo);
      onCreatingSuccess(true);
      navigate("/");
    } catch (err) {
      console.log("Oops, something went wrong:", err);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
        token: {
          colorBgBase: "#0b0f14",
          colorBgContainer: "#162432",
          colorBorder: "#162432",
          colorPrimary: "#0084d6",
          colorTextBase: "#ffffff",
          colorTextSecondary: "#a0aec0",
          fontFamily: "Inter, sans-serif",
          controlHeightLG: 48,
          borderRadius: 4,
        },
        components: {
          Form: {
            labelColor: "#e2e8f0",
            itemMarginBottom: 24,
          },
          Input: {
            colorBgContainer: "#162432",
            colorBorder: "#162432",
            activeBorderColor: "#0084d6",
            hoverBorderColor: "#0084d6",
            paddingBlockLG: 10,
            paddingInlineLG: 16,
          },
          Button: {
            colorPrimary: "#0084d6",
            colorPrimaryHover: "#006bb3",
            colorPrimaryActive: "#00528a",
            fontWeight: 500,
          },
        },
      }}
    >
      <div className="min-h-screen bg-[#0b0f14] flex items-center justify-center p-6">
        <div className="w-full max-w-md">
          <h1
            className="text-3xl font-bold text-white mb-8 text-center"
            style={{ fontFamily: "'Lato', sans-serif" }}
          >
            Last step to purchase
          </h1>
          <Form
            name="profile_info"
            layout="vertical"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            size="large"
            className="w-full"
            requiredMark={false}
          >
            <Form.Item
              label={<span className="text-sm font-medium">Name</span>}
              name="name"
              rules={[{ required: true, message: "Please input your name!" }]}
            >
              <Input placeholder="Full Name" />
            </Form.Item>

            <Form.Item
              label={<span className="text-sm font-medium">Email</span>}
              name="email"
              rules={[
                { required: true, message: "Please input your email!" },
                { type: "email", message: "Please enter a valid email!" },
              ]}
            >
              <Input placeholder="name@mail.com" />
            </Form.Item>

            <Form.Item
              label={<span className="text-sm font-medium">Phone Number</span>}
              name="phone"
              rules={[
                { required: true, message: "Please input your phone number!" },
              ]}
            >
              <Input placeholder="000-000-000" />
            </Form.Item>

            <Form.Item
              label={<span className="text-sm font-medium">Address</span>}
              name="address"
              rules={[
                { required: true, message: "Please input your address!" },
              ]}
            >
              <Input placeholder="Your Address" />
            </Form.Item>

            <Form.Item className="mt-8 mb-0">
              <Button
                type="primary"
                htmlType="submit"
                block
                className="text-base h-12"
              >
                Save Information
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </ConfigProvider>
  );
}
