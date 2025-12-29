import React from 'react';
import './CarCard.css';

const CarCard = ({ car, viewMode = 'grid' }) => {
  // Default car data nếu không có props
  const carData = car || {
    id: 1,
    image: 'https://via.placeholder.com/400x300?text=Car+Image',
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
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
    }).format(price);
  };

  return (
    <div className={`car-card ${viewMode}`}>
      {/* Car Image Section */}
      <div className="car-image-container">
        <img src={carData.image} alt={`${carData.brand} ${carData.model}`} className="car-image" />
        {carData.featured && (
          <div className="featured-badge">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M7 1L8.854 5.146L13 7L8.854 8.854L7 13L5.146 8.854L1 7L5.146 5.146L7 1Z"
                fill="#FFD700"
                stroke="#FFD700"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>Featured</span>
          </div>
        )}
        <div className="condition-badge">{carData.condition}</div>
      </div>

      {/* Car Info Section */}
      <div className="car-info">
        {/* Title and Price */}
        <div className="car-header">
          <div className="car-title">
            <h3 className="car-name">{carData.brand} {carData.model}</h3>
            <p className="car-year">{carData.year}</p>
          </div>
          <div className="car-price-section">
            <p className="car-price">{formatPrice(carData.price)}</p>
          </div>
        </div>

        {/* Specifications */}
        <div className="car-specs">
          <div className="spec-item">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <circle cx="10" cy="10" r="8" stroke="#4DA8DA" strokeWidth="1.5" />
              <path d="M10 10L14 10" stroke="#4DA8DA" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <span>{carData.mileage}</span>
          </div>
          <div className="spec-item">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <rect x="4" y="7" width="12" height="8" rx="1" stroke="#4DA8DA" strokeWidth="1.5" />
              <path d="M7 7V5C7 4.44772 7.44772 4 8 4H12C12.5523 4 13 4.44772 13 5V7" stroke="#4DA8DA" strokeWidth="1.5" />
              <circle cx="10" cy="11" r="1.5" fill="#4DA8DA" />
            </svg>
            <span>{carData.transmission}</span>
          </div>
          <div className="spec-item">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M6 10C6 7.79086 7.79086 6 10 6C12.2091 6 14 7.79086 14 10V14H6V10Z" stroke="#4DA8DA" strokeWidth="1.5" />
              <rect x="5" y="13" width="10" height="3" rx="0.5" stroke="#4DA8DA" strokeWidth="1.5" />
            </svg>
            <span>{carData.fuelType}</span>
          </div>
          <div className="spec-item">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M6 8H8M12 8H14M6 11H8M12 11H14" stroke="#4DA8DA" strokeWidth="1.5" strokeLinecap="round" />
              <rect x="4" y="6" width="12" height="9" rx="1" stroke="#4DA8DA" strokeWidth="1.5" />
            </svg>
            <span>{carData.seats} Seats</span>
          </div>
          <div className="spec-item">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <circle cx="10" cy="10" r="6" stroke="#4DA8DA" strokeWidth="1.5" />
              <circle cx="10" cy="10" r="3" fill="#4DA8DA" />
            </svg>
            <span>{carData.color}</span>
          </div>
        </div>

        {/* Location and Seller */}
        <div className="car-footer">
          <div className="car-location">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M8 1.5C5.51472 1.5 3.5 3.51472 3.5 6C3.5 9.5 8 14.5 8 14.5C8 14.5 12.5 9.5 12.5 6C12.5 3.51472 10.4853 1.5 8 1.5Z"
                stroke="#A9A9A9"
                strokeWidth="1.5"
              />
              <circle cx="8" cy="6" r="1.5" fill="#A9A9A9" />
            </svg>
            <span>{carData.location}</span>
          </div>
          <div className="car-seller">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle cx="8" cy="5" r="2.5" stroke="#A9A9A9" strokeWidth="1.5" />
              <path
                d="M3 13C3 10.7909 5.23858 9 8 9C10.7614 9 13 10.7909 13 13"
                stroke="#A9A9A9"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
            <span>{carData.seller}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="car-actions">
          <button className="btn-details">
            View Details
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M6 12L10 8L6 4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button className="btn-favorite">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M10 17.5L8.8375 16.4625C4.5 12.5875 1.5 9.89375 1.5 6.5625C1.5 3.86875 3.58125 1.875 6.1875 1.875C7.65 1.875 9.05625 2.55 10 3.62187C10.9437 2.55 12.35 1.875 13.8125 1.875C16.4188 1.875 18.5 3.86875 18.5 6.5625C18.5 9.89375 15.5 12.5875 11.1625 16.4625L10 17.5Z"
                stroke="#4DA8DA"
                strokeWidth="1.5"
                fill="none"
              />
            </svg>
          </button>
          <button className="btn-compare">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <rect x="2" y="6" width="6" height="12" rx="1" stroke="#4DA8DA" strokeWidth="1.5" />
              <rect x="12" y="2" width="6" height="16" rx="1" stroke="#4DA8DA" strokeWidth="1.5" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
