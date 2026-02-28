import React, { useEffect, useState } from "react";
import "./SearchResult.css";
import CarCard from "../Car Card-noFeatured/CarCard";
import {
  Form,
  ConfigProvider,
  Button,
  Radio,
  Select,
  Checkbox,
  Flex,
  Input,
} from "antd";
const { Search } = Input;
const SearchResult = () => {
  // API
  const [cars, setCars] = useState([]);
  const apiUrl = "http://localhost:3000/cars";
  const dataSet = (data) => {
    setCars(data);
  };

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then(dataSet);
  }, []);

  //Filter
  const [filter, setFilter] = useState({
    condition: "All",
    year: [],
    brand: [],
    fuel: null,
    drivetrain: null,
    passenger: null,
  });
  const [searchQuery, setSearchQuery] = useState("");
  const handleFilterChange = (name, value) => {
    setFilter((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleReset = () => {
    setFilter({
      condition: "All",
      year: [],
      brand: [],
      fuel: null,
      drivetrain: null,
      passenger: null,
    });
  };
  const filteredCars = cars.filter((car) => {
    const matchSearch = car.name
      ?.toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchCondition =
      filter.condition === "All" || car.condition === filter.condition;
    const matchYear =
      filter.year.length === 0 || filter.year.includes(car.year?.toString());
    const matchBrand =
      filter.brand.length === 0 || filter.brand.includes(car.brand);
    const matchFuel = filter.fuel === null || filter.fuel === car.fuel;
    const matchDriveTrain =
      filter.drivetrain === null || filter.drivetrain === car.driveTrain;
    const matchPassenger =
      filter.passenger === null || filter.passenger === car.peopleLimit;
    return (
      matchSearch &&
      matchCondition &&
      matchYear &&
      matchBrand &&
      matchFuel &&
      matchDriveTrain &&
      matchPassenger
    );
  });

  // Condition Radio
  const conditionOptions = [
    { label: "All", value: "All" },
    { label: "New", value: "New" },
    { label: "Used", value: "Used" },
  ];

  //Year Checkbox
  const yearOptions = [
    { label: "2016", value: "2016" },
    { label: "2017", value: "2017" },
    { label: "2018", value: "2018" },
    { label: "2019", value: "2019" },
  ];
  // Brand Checkbox
  const brandOptions = [
    { label: "Ford", value: "Ford" },
    { label: "Honda", value: "Honda" },
    { label: "Tesla", value: "Tesla" },
    { label: "Acura", value: "Acura" },
    { label: "Mini", value: "MINI" },
    { label: "BMW", value: "BMW" },
  ];
  //Fuel Select
  const fuelOptions = [
    { label: "Electric", value: "Electric" },
    { label: "Diesel", value: "Diesel" },
    { label: "Gasoline", value: "Gasoline" },
  ];
  //Drive Train Select
  const driveOptions = [
    { label: "Four-Wheel", value: "Four-Wheel" },
    { label: "All-Wheel", value: "All-Wheel" },
    { label: "Front-Wheel", value: "Front-Wheel" },
  ];
  //Passenger Select
  const passengerOptions = [
    { label: "4 people", value: "4 " },
    { label: "5 people", value: "5 " },
    { label: "6 people", value: "6 " },
    { label: "7 people", value: "7 " },
    { label: "8 people", value: "8 " },
  ];

  const [viewMode, setViewMode] = useState("grid"); // 'grid' or 'list'

  return (
    <div className="search-result-page">
      {/* Page Header Section */}
      <div className="page-header">
        <div className="page-header-content">
          <h1 className="page-title">Search Result</h1>
          <p className="breadcrumb">Homepage - Search - Search Result</p>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="main-content">
        <div className="content-wrapper">
          {/* Filter Sidebar */}
          <aside className="filter-sidebar">
            <div className="filter-header">
              <h2>Filter</h2>
            </div>

            <Form className="filter-content">
              {/* Condition Radio Buttons */}
              <div className="filter-group">
                <h3>Condition</h3>
                <ConfigProvider
                  theme={{
                    components: {
                      Radio: {
                        radioSize: 18,
                        dotSize: 10,
                        colorText: "#ffffff",
                        fontFamily: "Lato, sans-serif",
                        fontWeight: 300,
                        fontSize: "16px",
                      },
                    },
                  }}
                >
                  <Radio.Group
                    block
                    options={conditionOptions}
                    className="radio-group"
                    defaultValue="All"
                    buttonStyle="solid"
                    name="condition"
                    size="large"
                    value={filter.condition}
                    onChange={(e) =>
                      handleFilterChange("condition", e.target.value)
                    }
                    title={{ width: "100px" }}
                  ></Radio.Group>
                </ConfigProvider>
              </div>

              {/* Year Accordion */}
              <div className="filter-accordion">
                <div className="accordion-header">
                  <span>Year</span>
                  <svg
                    className="chevron-icon"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M5 7.5L10 12.5L15 7.5"
                      stroke="#D7D7D7"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <ConfigProvider
                  theme={{
                    components: {
                      Checkbox: {
                        borderRadiusSM: 1,
                        controlInteractiveSize: 16,
                        radioSize: 18,
                        dotSize: 10,
                        colorText: "#ffffff",
                        fontFamily: "Lato, sans-serif",
                        fontWeight: 300,
                        fontSize: "16px",
                      },
                    },
                  }}
                >
                  <Checkbox.Group
                    className="accordion-content"
                    options={yearOptions}
                    value={filter.year}
                    onChange={(value) => handleFilterChange("year", value)}
                  ></Checkbox.Group>
                </ConfigProvider>
              </div>

              {/* Brand Accordion */}
              <div className="filter-accordion">
                <div className="accordion-header">
                  <span>Brand</span>
                  <svg
                    className="chevron-icon"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M5 7.5L10 12.5L15 7.5"
                      stroke="#D7D7D7"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <ConfigProvider
                  theme={{
                    components: {
                      Checkbox: {
                        borderRadiusSM: 1,
                        controlInteractiveSize: 16,
                        radioSize: 18,
                        dotSize: 10,
                        colorText: "#ffffff",
                        fontFamily: "Lato, sans-serif",
                        fontWeight: 300,
                        fontSize: "16px",
                      },
                    },
                  }}
                >
                  <Checkbox.Group
                    className="accordion-content"
                    options={brandOptions}
                    value={filter.brand}
                    onChange={(value) => handleFilterChange("brand", value)}
                  ></Checkbox.Group>
                </ConfigProvider>
              </div>

              {/* Dropdowns */}

              <ConfigProvider
                theme={{
                  components: {
                    Select: {
                      activeBorderColor: "transparent",
                      activeOutlineColor: "transparent",
                      hoverBorderColor: "transparent",
                      colorText: "white",
                      fontWeight: 300,
                      fontSize: "14px",
                      optionPadding: "10px 12px",
                      optionSelectedFontWeight: "400",
                      colorBorder: "#152836",
                      colorBgContainer: "#152836",
                      colorBgElevated: "#152836",
                      colorText: "white",
                    },
                  },
                }}
              >
                <Select
                  className="dropdown"
                  placeholder="Fuel Type"
                  options={fuelOptions}
                  value={filter.fuel}
                  onChange={(value) => handleFilterChange("fuel", value)}
                />
              </ConfigProvider>
              <ConfigProvider
                theme={{
                  components: {
                    Select: {
                      activeBorderColor: "transparent",
                      activeOutlineColor: "transparent",
                      hoverBorderColor: "transparent",
                      colorText: "white",
                      fontWeight: 300,
                      fontSize: "14px",
                      optionPadding: "10px 12px",
                      optionSelectedFontWeight: "400",
                      colorBorder: "#152836",
                      colorBgContainer: "#152836",
                      colorBgElevated: "#152836",
                    },
                  },
                }}
              >
                <Select
                  className="dropdown"
                  placeholder="Drivetrain"
                  options={driveOptions}
                  value={filter.drivetrain}
                  onChange={(value) => handleFilterChange("drivetrain", value)}
                />
              </ConfigProvider>
              <ConfigProvider
                theme={{
                  components: {
                    Select: {
                      activeBorderColor: "transparent",
                      activeOutlineColor: "transparent",
                      hoverBorderColor: "transparent",
                      colorText: "white",
                      fontWeight: 300,
                      fontSize: "14px",
                      optionPadding: "10px 12px",
                      optionSelectedFontWeight: "400",
                      colorBorder: "#152836",
                      colorBgContainer: "#152836",
                      colorBgElevated: "#152836",
                    },
                  },
                }}
              >
                <Select
                  className="dropdown"
                  placeholder="Passenger Capacity"
                  options={passengerOptions}
                  value={filter.passenger}
                  onChange={(value) => handleFilterChange("passenger", value)}
                />
              </ConfigProvider>

              {/* Reset Filter Button */}
              <button onClick={handleReset} className="reset-button">
                {" "}
                Reset Filter
              </button>
            </Form>
          </aside>

          {/* Results Area */}
          <main className="results-area">
            {/* Search Bar */}
            <div className="results-search">
              <svg
                className="search-icon"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M21 21L16.65 16.65"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <ConfigProvider
                theme={{
                  components: {
                    Input: {
                      activeBg: "#152836",
                      hoverBg: "#152836",
                      activeBorderColor: "transparent",
                      hoverBorderColor: "transparent",
                      activeShadow: "none",
                    },
                  },
                }}
              >
                {" "}
                <Input
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search"
                ></Input>
              </ConfigProvider>
            </div>

            {/* Results Header */}
            <div className="results-header">
              <h2 className="results-count"> {filteredCars.length} Results</h2>
              <div className="results-controls">
                <button
                  className={`view-btn ${viewMode === "list" ? "active" : ""}`}
                  onClick={() => setViewMode("list")}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <rect
                      x="3"
                      y="6"
                      width="18"
                      height="4"
                      fill="currentColor"
                    />
                    <rect
                      x="3"
                      y="14"
                      width="18"
                      height="4"
                      fill="currentColor"
                    />
                  </svg>
                </button>
                <button
                  className={`view-btn ${viewMode === "grid" ? "active" : ""}`}
                  onClick={() => setViewMode("grid")}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <rect
                      x="3"
                      y="3"
                      width="8"
                      height="8"
                      fill="currentColor"
                    />
                    <rect
                      x="13"
                      y="3"
                      width="8"
                      height="8"
                      fill="currentColor"
                    />
                    <rect
                      x="3"
                      y="13"
                      width="8"
                      height="8"
                      fill="currentColor"
                    />
                    <rect
                      x="13"
                      y="13"
                      width="8"
                      height="8"
                      fill="currentColor"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Results Grid */}
            <div className={`results-grid ${viewMode}`}>
              {filteredCars.map((carCard) => (
                <CarCard
                  key={carCard.id}
                  cImg={carCard.img1}
                  cTitle={carCard.name}
                  cPrice={carCard.cost}
                  cLocation={carCard.location}
                  cTime={carCard.date}
                  cDrive={carCard.type}
                  cFuel={carCard.fuel}
                  cPeople={carCard.seats}
                  cReview={carCard.review}
                  cId={carCard.id}
                />
              ))}
            </div>
          </main>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button className="scroll-top-btn">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M18 15L12 9L6 15"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
};

export default SearchResult;
