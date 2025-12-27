import React, { useState } from "react";
import "./SearchResult.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import CarCard from "../CarCard/CarCard";

const SearchResult = () => {
  const [viewMode, setViewMode] = useState("grid"); // 'grid' or 'list'
  const [currentPage, setCurrentPage] = useState(1);

  // Sample car data - Thay thế bằng data từ API
  const sampleCars = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1619405399517-d7fce0f13302?w=800',
      brand: 'Toyota',
      model: 'Camry',
      year: 2023,
      condition: 'Used',
      mileage: '15,000 km',
      transmission: 'Automatic',
      fuelType: 'Gasoline',
      seats: '5',
      color: 'Black',
      price: 850000000,
      location: 'Ho Chi Minh City',
      seller: 'CarDealer Pro',
      featured: true,
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800',
      brand: 'Honda',
      model: 'Civic',
      year: 2022,
      condition: 'New',
      mileage: '5,000 km',
      transmission: 'Manual',
      fuelType: 'Gasoline',
      seats: '5',
      color: 'White',
      price: 720000000,
      location: 'Hanoi',
      seller: 'Honda Official',
      featured: false,
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800',
      brand: 'Mercedes',
      model: 'C-Class',
      year: 2023,
      condition: 'New',
      mileage: '2,000 km',
      transmission: 'Automatic',
      fuelType: 'Diesel',
      seats: '5',
      color: 'Silver',
      price: 1850000000,
      location: 'Ho Chi Minh City',
      seller: 'Mercedes Benz VN',
      featured: true,
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800',
      brand: 'BMW',
      model: 'X5',
      year: 2022,
      condition: 'Used',
      mileage: '25,000 km',
      transmission: 'Automatic',
      fuelType: 'Diesel',
      seats: '7',
      color: 'Blue',
      price: 2150000000,
      location: 'Da Nang',
      seller: 'BMW Vietnam',
      featured: false,
    },
  ];

  return (
    <div className="search-result-page">
      {/* Header */}
      <Header />

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

            <div className="filter-content">
              {/* Search Field */}

              {/* Condition Radio Buttons */}
              <div className="filter-group">
                <h3>Condition</h3>
                <div className="radio-group">
                  <label className="radio-option">
                    <input
                      type="radio"
                      name="condition"
                      value="all"
                      defaultChecked
                    />
                    <span className="radio-label">All</span>
                  </label>
                  <label className="radio-option">
                    <input type="radio" name="condition" value="new" />
                    <span className="radio-label">New</span>
                  </label>
                  <label className="radio-option">
                    <input type="radio" name="condition" value="used" />
                    <span className="radio-label">Used</span>
                  </label>
                </div>
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
                <div className="accordion-content">
                  <label className="checkbox-option">
                    <input type="checkbox" />
                    <span>2016</span>
                  </label>
                  <label className="checkbox-option">
                    <input type="checkbox" />
                    <span>2017</span>
                  </label>
                  <label className="checkbox-option">
                    <input type="checkbox" />
                    <span>2018</span>
                  </label>
                  <label className="checkbox-option">
                    <input type="checkbox" />
                    <span>2019</span>
                  </label>
                  <a href="#" className="see-more">
                    See More
                  </a>
                </div>
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
                <div className="accordion-content">
                  <label className="checkbox-option">
                    <input type="checkbox" />
                    <span>Audi</span>
                  </label>
                  <label className="checkbox-option">
                    <input type="checkbox" />
                    <span>BMW</span>
                  </label>
                  <label className="checkbox-option">
                    <input type="checkbox" />
                    <span>Chevrolet</span>
                  </label>
                  <label className="checkbox-option">
                    <input type="checkbox" />
                    <span>Ford</span>
                  </label>
                  <a href="#" className="see-more">
                    See More
                  </a>
                </div>
              </div>

              {/* Dropdowns */}
              <div className="dropdown disabled">
                <span>Model</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M6 9L12 15L18 9"
                    stroke="#989898"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <div className="dropdown">
                <span>Body Type</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M6 9L12 15L18 9"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <div className="dropdown">
                <span>Transmission</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M6 9L12 15L18 9"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <div className="dropdown">
                <span>Fuel Type</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M6 9L12 15L18 9"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <div className="dropdown">
                <span>Drivetrain</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M6 9L12 15L18 9"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <div className="dropdown">
                <span>Passenger Capacity</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M6 9L12 15L18 9"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <div className="dropdown">
                <span>Exterior Color</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M6 9L12 15L18 9"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              {/* Reset Filter Button */}
              <button className="reset-button"> Filter</button>
            </div>
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
              <input type="text" placeholder="Search" />
            </div>

            {/* Results Header */}
            <div className="results-header">
              <h2 className="results-count">12 Results</h2>
              <div className="results-controls">
                <div className="sort-dropdown">
                  <span>Sort By</span>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M5 7.5L10 12.5L15 7.5"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
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
              {sampleCars.map((car) => (
                <CarCard key={car.id} car={car} viewMode={viewMode} />
              ))}
            </div>

            {/* Pagination */}
            <div className="pagination">
              <button className="page-btn prev">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M12.5 15L7.5 10L12.5 5"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button
                className={`page-btn ${currentPage === 1 ? "active" : ""}`}
                onClick={() => setCurrentPage(1)}
              >
                1
              </button>
              <button
                className={`page-btn ${currentPage === 2 ? "active" : ""}`}
                onClick={() => setCurrentPage(2)}
              >
                2
              </button>
              <button className="page-btn next">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M7.5 15L12.5 10L7.5 5"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </main>
        </div>
      </div>

      {/* Footer */}
      <Footer />

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
