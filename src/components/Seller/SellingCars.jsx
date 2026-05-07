import React, { useState } from "react";
import {
  Form,
  Input,
  Button,
  Select,
  Radio,
  Checkbox,
  Upload,
  ConfigProvider,
  theme,
  Row,
  Col,
} from "antd";
import { Plus } from "lucide-react";
import axiosModel from "../../api/axiosConfig";
import { Link, useNavigate } from "react-router";

const { TextArea } = Input;
const { Dragger } = Upload;

// Component tạo tiêu đề cho mỗi phần (có gạch chân)
const SectionTitle = ({ title }) => (
  <div className="mb-6">
    <h2 className="text-xl font-semibold text-white inline-block border-b-2 border-white pb-1">
      {title}
    </h2>
  </div>
);

// Component bọc mỗi phần (Card nền tối)
const SectionCard = ({ children }) => (
  <div className="bg-[#162432] rounded-md p-6 mb-8 shadow-lg">{children}</div>
);

export default function SellCar() {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [imageList, setImageList] = useState([]);

  const onFinish = async (values) => {
    try {
      setLoading(true); // ← bắt đầu loading

      const formData = new FormData();

      //Append data
      for (const key in values) {
        if (values[key] !== undefined && values[key] !== null) {
          formData.append(key, values[key]);
        }
      }
      //Append fuel
      if (values.fuelType !== undefined) {
        formData.append("fuel", values.fuelType);
      }

      const review = Math.floor(Math.random() * 10) + 1;
      formData.append("review", review);

      //Append file
      if (imageList.length > 0) {
        imageList.forEach((file, index) => {
          const keyName = `img${index + 1}`;
          formData.append(keyName, file);
        });
      } else {
        console.log("No image selected");
      }
      for (let [key, value] of formData.entries()) {
        console.log(`${key}: ${value}`);
      }

      const response = await axiosModel.post("/cars/create-cars", formData, {
        headers: {
          "Content-Type": "multipart/form-data", // Bắt buộc phải có header này
        },
      });
      console.log(response);
      navigate("/car-collection");
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false); // ← kết thúc loading
    }
  };

  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
        token: {
          colorBgBase: "#0b0f14",
          colorPrimary: "#0084d6",
          colorTextBase: "#ffffff",
          colorTextSecondary: "#a0aec0",
          fontFamily: "Inter, sans-serif",
          borderRadius: 4,
          controlHeightLG: 44, // Chiều cao chung cho các ô input
        },
        components: {
          Form: {
            labelColor: "#ffffff",
            itemMarginBottom: 20,
          },
          Input: {
            colorBgContainer: "#1c2b3b", // Màu nền ô input
            colorBorder: "transparent",
            hoverBorderColor: "#0084d6",
            activeBorderColor: "#0084d6",
            addonBg: "#0084d6", // Màu nền của phần đuôi (km, cc, hp)
          },
          Select: {
            colorBgContainer: "#1c2b3b",
            colorBorder: "transparent",
            hoverBorderColor: "#0084d6",
            activeBorderColor: "#0084d6",
            selectorBg: "#1c2b3b",
          },
          Checkbox: {
            colorBgContainer: "transparent",
            colorBorder: "#a0aec0",
          },
        },
      }}
    >
      <style>{`
        .ant-select-dropdown { background-color: #ffffff !important; }
        .ant-select-dropdown .ant-select-item-option-content { color: #000000 !important; }
        .ant-select-dropdown .ant-select-item-option-active { background-color: #f3f4f6 !important; }
        .ant-select-dropdown .ant-select-item-option-selected { background-color: #e0f2fe !important; font-weight: 600 !important; }
        .ant-select-dropdown .ant-select-item-option-selected .ant-select-item-option-content { color: #0369a1 !important; }
        .ant-select-selection-item { color: #ffffff !important; }
      `}</style>
      <div className="min-h-screen bg-[#0b0f14] text-white p-8 font-sans">
        <div className="w-full">
          {/* Header */}
          <div style={{ marginBottom: "20px" }} className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Sell Your Car</h1>
            <p className="text-sm text-gray-400">Homepage - Sell</p>
          </div>

          <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            size="large"
            requiredMark={false}
          >
            {/* 1. CAR DETAILS */}
            <SectionCard>
              <SectionTitle title="Car Details" />
              <Row gutter={24}>
                <Col span={24}>
                  <Form.Item label="Name" name="name">
                    <Input placeholder="Enter car name" />
                  </Form.Item>
                </Col>
                <Col xs={24} md={8}>
                  <Form.Item label="Body Type" name="bodyType">
                    <Input placeholder="Body Type" />
                  </Form.Item>
                </Col>
                <Col xs={24} md={8}>
                  <Form.Item label="Brand" name="brand">
                    <Input showSearch placeholder="Brand" />
                  </Form.Item>
                </Col>
                <Col xs={24} md={8}>
                  <Form.Item
                    label="Condition"
                    name="condition"
                    initialValue="new"
                  >
                    <Radio.Group className="flex mt-2">
                      <Radio value="New" className="text-white mr-6">
                        New
                      </Radio>
                      <Radio value="Used" className="text-white">
                        Used
                      </Radio>
                    </Radio.Group>
                  </Form.Item>
                </Col>
                <Col xs={24} md={8}>
                  <Form.Item label="Year" name="year">
                    <Input placeholder="Year" />
                  </Form.Item>
                </Col>
                <Col xs={24} md={8}>
                  <Form.Item label="Date" name="date">
                    <Input placeholder="Date" />
                  </Form.Item>
                </Col>
                <Col xs={24} md={8}>
                  <Form.Item label="Model" name="model">
                    <Input placeholder="Model" />
                  </Form.Item>
                </Col>
                <Col xs={24} md={8}>
                  <Form.Item label="Exterior Color" name="exteriorColor">
                    <Input placeholder="Exterior Color" />
                  </Form.Item>
                </Col>
                <Col xs={24} md={8}>
                  <Form.Item label="People Limit" name="peopleLimit">
                    <Input placeholder="People Limit" />
                  </Form.Item>
                </Col>
                <Col span={24} md={8}>
                  <Form.Item label="Seats" name="seats">
                    <Input placeholder="Seats" />
                  </Form.Item>
                </Col>
                <Col span={24} md={8}>
                  <Form.Item label="Type" name="type">
                    <Input placeholder="Type" />
                  </Form.Item>
                </Col>
              </Row>
            </SectionCard>

            {/* 2. ENGINE DETAILS */}
            <SectionCard>
              <SectionTitle title="Engine Details" />
              <Row gutter={24}>
                <Col xs={24} md={8}>
                  <Form.Item label="Fuel Type" name="fuelType">
                    <Select
                      placeholder="Select Option"
                      options={[
                        { value: "Diesel", label: "Diesel" },
                        { value: "Gasoline", label: "Gasoline" },
                        { value: "Electric", label: "Electric" },
                      ]}
                    />
                  </Form.Item>
                </Col>
                <Col span={24} md={8}>
                  <Form.Item label="Fuel Tank Capacity" name="fuelTankCapacity">
                    <Input placeholder="Fuel Tank Capacity" />
                  </Form.Item>
                </Col>
                <Col xs={24} md={8}>
                  <Form.Item label="Fuel Consumption" name="fuelConsumption">
                    <Input
                      placeholder="Fuel Consumption"
                      addonAfter={<span className="text-white">L/km</span>}
                    />
                  </Form.Item>
                </Col>
                <Col xs={24} md={8}>
                  <Form.Item label="Mileage" name="mileage">
                    <Input
                      placeholder="Mileage"
                      addonAfter={<span className="text-white">km</span>}
                    />
                  </Form.Item>
                </Col>
                <Col xs={24} md={8}>
                  <Form.Item label="Transmission" name="transmission">
                    <Input placeholder="Transmission" />
                  </Form.Item>
                </Col>
                <Col xs={24} md={8}>
                  <Form.Item label="Drivetrain" name="driveTrain">
                    <Select
                      placeholder="Select Option"
                      options={[
                        {
                          value: "Front-Wheel Drive",
                          label: "Front-Wheel Drive",
                        },
                        {
                          value: "Rear-Wheel Drive",
                          label: "Rear-Wheel Drive",
                        },
                        { value: "All-Wheel Drive", label: "All-Wheel Drive" },
                      ]}
                    />
                  </Form.Item>
                </Col>
                <Col xs={24} md={8}>
                  <Form.Item label="Engine " name="engine">
                    <Input placeholder="Engine" />
                  </Form.Item>
                </Col>
                <Col xs={24} md={8}>
                  <Form.Item label="Engine Torque " name="engineTorque">
                    <Input placeholder="Engine Torque" />
                  </Form.Item>
                </Col>
                <Col xs={24} md={8}>
                  <Form.Item label="Power" name="power">
                    <Input
                      placeholder="Power"
                      addonAfter={<span className="text-white">hp</span>}
                    />
                  </Form.Item>
                </Col>
              </Row>
            </SectionCard>

            {/* 3. DIMENSION */}
            <SectionCard>
              <SectionTitle title="Dimension" />
              <Row gutter={24}>
                <Col xs={24} md={6}>
                  <Form.Item label="Length" name="length">
                    <Input
                      addonAfter={<span className="text-white">mm</span>}
                    />
                  </Form.Item>
                </Col>
                <Col xs={24} md={6}>
                  <Form.Item label="Width" name="width">
                    <Input
                      addonAfter={<span className="text-white">mm</span>}
                    />
                  </Form.Item>
                </Col>
                <Col xs={24} md={6}>
                  <Form.Item label="Height" name="height">
                    <Input
                      addonAfter={<span className="text-white">mm</span>}
                    />
                  </Form.Item>
                </Col>
                <Col xs={24} md={6}>
                  <Form.Item label="Cargo Volume" name="cargoVolume">
                    <Input addonAfter={<span className="text-white">L</span>} />
                  </Form.Item>
                </Col>
              </Row>
            </SectionCard>

            {/* 5. LOCATION */}
            <SectionCard>
              <SectionTitle title="Location" />
              <Form.Item label="Address" name="location">
                <Input />
              </Form.Item>
              {/* Map Placeholder */}
              <div className="w-full h-64 bg-gray-700 rounded-md overflow-hidden relative">
                <img
                  src="https://maps.googleapis.com/maps/api/staticmap?center=Ocala+National+Forest&zoom=10&size=1000x400&maptype=roadmap&key=YOUR_API_KEY_HERE"
                  alt="Map placeholder"
                  className="w-full h-full object-cover opacity-80"
                  onError={(e) => {
                    // Fallback if image fails to load (since no API key)
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "flex";
                  }}
                />
                <div className="absolute inset-0 hidden items-center justify-center bg-[#1c2b3b] text-gray-400">
                  Map View Placeholder
                </div>
              </div>
            </SectionCard>

            {/* 6. PRICE */}
            <SectionCard>
              <SectionTitle title="Price" />
              <Form.Item label="Full Price" name="cost">
                <Input
                  prefix={<span className="text-white font-bold mr-2">$</span>}
                />
              </Form.Item>
              <Form.Item
                label="Description"
                name="description"
                className="mt-2"
              >
                <TextArea
                  rows={4}
                  placeholder="Enter car description and details..."
                />
              </Form.Item>
            </SectionCard>

            {/* 7. IMAGES & VIDEO */}
            <SectionCard>
              <SectionTitle title="Images & Video" />
              <Form.Item label="Upload your Image / Video">
                <Dragger
                  name="image"
                  onRemove={(file) =>
                    setImageList((prev) =>
                      prev.filter((item) => item.uid !== file.uid),
                    )
                  }
                  beforeUpload={(images) => {
                    setImageList((prev) => [...prev, images]);
                    return false;
                  }}
                  multiple={true}
                  className="bg-transparent border-2 border-dashed border-gray-600 hover:border-[#0084d6] transition-colors"
                  style={{ background: "transparent" }}
                >
                  <div className="flex items-center justify-center h-32">
                    {imageList.length > 0 ? (
                      <span className="text-white">
                        {imageList.length} files selected
                      </span>
                    ) : (
                      <Plus size={40} className="text-white" />
                    )}
                  </div>
                </Dragger>
              </Form.Item>
            </SectionCard>

            {/* SUBMIT BUTTON */}
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                block
                className="h-14 text-lg font-semibold bg-[#0084d6] hover:bg-[#006bb3] border-none"
              >
                Sell My Car
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </ConfigProvider>
  );
}
