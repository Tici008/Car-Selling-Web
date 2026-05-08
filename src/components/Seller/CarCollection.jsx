import React, { useEffect, useState } from "react";
import {
  ConfigProvider,
  theme,
  Form,
  Input,
  Select,
  Button,
  Popconfirm,
  message,
} from "antd";
import { ArrowLeft, Trash2, Save } from "lucide-react";
import axiosConfig from "../../api/axiosConfig";
import CarCard from "../Car_Card-noFeatured/CarCard";
import axiosModel from "../../api/axiosConfig";
import { useNavigate } from "react-router";

const { TextArea } = Input;

export default function CarCollection() {
  // State để lưu trữ xe đang được chọn để edit (null nghĩa là đang ở trang collection)
  const navigate = useNavigate();
  const [selectedCar, setSelectedCar] = useState(null);
  const [carList, setCarList] = useState([]); // State để lưu trữ danh sách xe của người bán
  const fetchCars = async () => {
    try {
      const response = await axiosConfig.get("/cars/my-cars");
      console.log(response);
      setCarList(response.data.cars);
    } catch (error) {
      console.error("Error fetching cars:", error);
    }
  };
  useEffect(() => {
    fetchCars();
  }, []);

  const handleSave = (values) => {
    let updatedCar = {
      ...values,
      cost: values.cost,
      fuelConsumption: values.fuelConsumption + " L/100km",
      mileage: values.mileage + "km",
      width: values.width + "mm",
      length: values.length + "mm",
      height: values.height + "mm",
      cargoVolume: values.cargoVolume + "L",
      fuelTankCapacity: values.fuelTankCapacity + "L",
    };
    console.log("Saved car details:", updatedCar);
    const response = axiosModel.put(`/cars/${selectedCar.cId}`, updatedCar);
    console.log(response);
    setSelectedCar(null);
    navigate("/car-collection");
    // Quay lại trang collection sau khi save
  };

  const handleUpdating = (values) => {
    setSelectedCar(values); // Quay lại trang collection sau khi update
  };
  const handleDelete = () => {
    const response = axiosModel.delete(`/cars/${selectedCar.cId}`);
    console.log(response);
    message.success("Car deleted successfully!");
    setSelectedCar(null); // Quay lại trang collection sau khi delete
    navigate("/car-collection");
  };

  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
        token: {
          colorBgBase: "#0b0f14",
          colorPrimary: "#0084d6",
          colorTextBase: "#ffffff",
          fontFamily: "Inter, sans-serif",
          borderRadius: 4,
        },
        components: {
          Input: {
            colorBgContainer: "#162432",
            colorBorder: "#2a3642",
            hoverBorderColor: "#0084d6",
            activeBorderColor: "#0084d6",
          },
          Select: {
            colorBgContainer: "#162432",
            colorBorder: "#2a3642",
            hoverBorderColor: "#0084d6",
            activeBorderColor: "#0084d6",
            selectorBg: "#162432",
          },
          Form: {
            labelColor: "#9ca3af", // text-gray-400
          },
        },
      }}
    >
      <div className="min-h-screen bg-[#0b0f14] text-white p-8 font-sans">
        <div className="max-w-7xl mx-auto">
          {selectedCar !== null ? (
            /* ================= EDIT CAR VIEW ================= */
            <div className="animate-fade-in">
              {/* Nút Back */}
              <button
                onClick={() => setSelectedCar(null)}
                className="flex items-center text-gray-400 hover:text-white mb-6 transition-colors"
              >
                <ArrowLeft size={20} className="mr-2" /> Back to Collection
              </button>

              {/* Header của trang Edit */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
                <div>
                  <h1 className="text-3xl font-bold mb-2">Edit Car Details</h1>
                  <p className="text-sm text-gray-400">
                    Update information for Card Placeholder {selectedCar + 1}
                  </p>
                </div>

                {/* Nút Delete với Popconfirm */}
                <Popconfirm
                  title="Delete this car?"
                  description="Are you sure you want to delete this car from your collection? This action cannot be undone."
                  onConfirm={handleDelete}
                  okText="Yes, Delete"
                  cancelText="Cancel"
                  okButtonProps={{ danger: true }}
                >
                  <Button
                    danger
                    type="primary"
                    size="large"
                    icon={<Trash2 size={18} />}
                  >
                    Delete Car
                  </Button>
                </Popconfirm>
              </div>

              {/* Form chỉnh sửa */}
              <div className="bg-[#162432] p-6 sm:p-8 rounded-lg border border-gray-800 shadow-lg">
                <Form
                  layout="vertical"
                  onFinish={handleSave}
                  initialValues={{
                    title: `Car Placeholder ${selectedCar + 1}`,
                    condition: "used",
                  }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                    <Form.Item
                      label="Car Title"
                      name="name"
                      rules={[{ required: true }]}
                    >
                      <Input
                        size="large"
                        placeholder="e.g. Tesla Model 3 Standard Range"
                      />
                    </Form.Item>

                    <Form.Item
                      label="Price ($)"
                      name="cost"
                      rules={[{ required: true }]}
                    >
                      <Input
                        size="large"
                        type="number"
                        placeholder="e.g. 56690"
                      />
                    </Form.Item>

                    <Form.Item label="Condition" name="condition">
                      <Select
                        size="large"
                        options={[
                          { value: "new", label: "New" },
                          { value: "used", label: "Used" },
                        ]}
                      />
                    </Form.Item>

                    <Form.Item label="Year" name="year">
                      <Input
                        size="large"
                        type="number"
                        placeholder="e.g. 2021"
                      />
                    </Form.Item>
                    <Form.Item label="Date" name="date">
                      <Input
                        size="large"
                        type="number"
                        placeholder="e.g. 2021"
                      />
                    </Form.Item>

                    <Form.Item label="Brand" name="brand">
                      <Input
                        size="large"
                        type="text"
                        placeholder="e.g. Lamborghini"
                      />
                    </Form.Item>

                    <Form.Item label="Model" name="model">
                      <Input size="large" placeholder="e.g. Model 3" />
                    </Form.Item>
                    <Form.Item label="Seats" name="seats">
                      <Input size="large" type="number" placeholder="e.g. 5" />
                    </Form.Item>
                    <Form.Item label="People Limit" name="peopleLimit">
                      <Input size="large" type="number" placeholder="e.g. 5" />
                    </Form.Item>

                    <Form.Item label="Type" name="type">
                      <Input
                        size="large"
                        type="text"
                        placeholder="e.g. Sedan"
                      />
                    </Form.Item>
                    <Form.Item label="Body Type" name="bodyType">
                      <Input size="large" type="text" placeholder="e.g. SUV" />
                    </Form.Item>
                    <Form.Item label="Exterior Color" name="exteriorColor">
                      <Input size="large" placeholder="e.g. Red" />
                    </Form.Item>
                    {/*  Fuel and Transmission */}
                    <Form.Item label="Fuel Type" name="fuelType">
                      <Select
                        size="large"
                        placeholder="e.g. Gasoline"
                        options={[
                          { value: "Gasoline", label: "Gasoline" },
                          { value: "Diesel", label: "Diesel" },
                        ]}
                      />
                    </Form.Item>

                    <Form.Item label="Fuel Consumption" name="fuelConsumption">
                      <Input
                        size="large"
                        type="number"
                        placeholder="e.g. 150 litres/100km"
                      />
                    </Form.Item>
                    <Form.Item
                      label="Fuel Tank Capacity"
                      name="fuelTankCapacity"
                    >
                      <Input
                        size="large"
                        type="number"
                        placeholder="e.g. 150 L"
                      />
                    </Form.Item>

                    <Form.Item label="Transmission" name="transmission">
                      <Input
                        size="large"
                        type="text"
                        placeholder="e.g. Automatic"
                      />
                    </Form.Item>

                    <Form.Item label="Drivetrain" name="driveTrain">
                      <Select
                        size="large"
                        placeholder="e.g. Front-Wheel Drive"
                        options={[
                          {
                            value: "Front-wheel Drive",
                            label: "Front-Wheel Drive",
                          },
                          {
                            value: "Rear-wheel Drive",
                            label: "Rear-Wheel Drive",
                          },
                          {
                            value: "All-wheel Drive",
                            label: "All-Wheel Drive",
                          },
                        ]}
                      />
                    </Form.Item>

                    <Form.Item label="Mileage (km)" name="mileage">
                      <Input
                        size="large"
                        type="number"
                        placeholder="e.g. 150km"
                      />
                    </Form.Item>

                    {/* Engine */}
                    <Form.Item label="Engine" name="engine">
                      <Input
                        size="large"
                        type="text"
                        placeholder="e.g. 2.0L Turbo"
                      />
                    </Form.Item>
                    <Form.Item label="Engine Torques" name="engineTorques">
                      <Input
                        size="large"
                        type="text"
                        placeholder="e.g. 300 Nm"
                      />
                    </Form.Item>

                    <Form.Item label="Power" name="power">
                      <Input
                        size="large"
                        type="text"
                        placeholder="e.g. 200 HP"
                      />
                    </Form.Item>

                    {/* Dimensions */}
                    <Form.Item label="Width" name="width">
                      <Input
                        size="large"
                        type="number"
                        placeholder="e.g. 1800mm"
                      />
                    </Form.Item>
                    <Form.Item label="Length" name="length">
                      <Input
                        size="large"
                        type="number"
                        placeholder="e.g. 4500mm"
                      />
                    </Form.Item>
                    <Form.Item label="Height" name="height">
                      <Input
                        size="large"
                        type="number"
                        placeholder="e.g. 1500mm"
                      />
                    </Form.Item>
                    <Form.Item label="Cargo Volume" name="cargoVolume">
                      <Input
                        size="large"
                        type="number"
                        placeholder="e.g. 500L"
                      />
                    </Form.Item>
                    {/* Location */}
                    <Form.Item label="Location" name="location">
                      <Input
                        size="large"
                        type="text"
                        placeholder="Change your location"
                      />
                    </Form.Item>
                  </div>

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

                  <div className="flex justify-end mt-8 pt-6 border-t border-gray-800">
                    <Button
                      onClick={() => setSelectedCar(null)}
                      size="large"
                      className="mr-4 bg-transparent text-white border-gray-600 hover:border-white"
                    >
                      Cancel
                    </Button>
                    <Button
                      type="primary"
                      htmlType="submit"
                      size="large"
                      icon={<Save size={18} />}
                      className="bg-[#0084d6]"
                    >
                      Save Changes
                    </Button>
                  </div>
                </Form>
              </div>
            </div>
          ) : (
            /* ================= COLLECTION VIEW ================= */
            <div className="animate-fade-in">
              {/* Header */}
              <div className="mb-8">
                <h1 className="text-3xl font-bold mb-2">Your Car Collection</h1>
                <p className="text-sm text-gray-400">Homepage - Collection</p>
              </div>

              {/* Top Controls (Results count) */}
              <div style={{ marginBottom: "1.5rem" }} className="mb-6">
                <h2 className="text-xl font-semibold">
                  {carList.length} Results
                </h2>
              </div>

              {/* Grid Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {carList.length > 0 ? (
                  carList.map((car, index) => (
                    <CarCard
                      key={car.id}
                      cImg={car.img1}
                      cTitle={car.name}
                      cPrice={car.cost}
                      cLocation={car.location}
                      cTime={car.date}
                      cDrive={car.type}
                      cFuel={car.fuel}
                      cPeople={car.seats}
                      cReview={car.review}
                      cId={car._id}
                      cUpdate={true}
                      onUpdate={handleUpdating}
                    />
                  ))
                ) : (
                  <p className="text-gray-500">No cars in your collection.</p>
                )}
              </div>

              <div style={{ height: "50px" }}></div>
            </div>
          )}
        </div>
      </div>
    </ConfigProvider>
  );
}
