import React from "react";
import {
  User,
  Heart,
  MapPin,
  Phone,
  Mail,
  Car,
  Star,
  Fuel,
  Users,
  Calendar,
  GripHorizontal,
} from "lucide-react";
import CarCard from "../Car_Card-noFeatured/CarCard";
import axiosModel from "../../api/axiosConfig.js";
import { useState, useEffect } from "react";

const ProfileInfo = () => {
  const [user, setUser] = useState(null);

  //favorite cars//
  const [favCars, setFavCars] = useState([]);
  const fetchingUserData = async () => {
    try {
      const response = await axiosModel.get("/users/profile");
      if (!response || response.status !== 200) {
        throw new Error("User data not found");
      }
      setUser(response.data);
      console.log(response);
    } catch (error) {
      console.error("Error fetching user data:", error.message);
    }
  };

  //------//
  const fetchingUserCars = async () => {
    try {
      const response = await axiosModel.get("/favorite-cars");
      if (!response || response.status !== 200) {
        throw new Error("User cars not found");
      }
      setFavCars(response.data.cars);
      console.log(response);
    } catch (err) {
      console.error("Error fetching user cars:", err.message);
    }
  };
  useEffect(() => {
    fetchingUserData();
    fetchingUserCars();
  }, []);

  //----Handle delete-----//
  const removeCarFromList = async (id) => {
    const newFavList = favCars.filter((car) => car.carId._id !== id);
    console.log("remove car successfully");
    setFavCars(newFavList);
  };
  GripHorizontal;

  //User profile
  const [activeTab, setActiveTab] = useState("profile"); // 'profile' hoặc 'favorites'

  // --- Theme Colors (Dựa trên Hình 3) ---
  const colors = {
    background: "#0B141B",
    sidebar: "#0F1A24",
    card: "#162431",
    accent: "#00A3FF",
    textMain: "#FFFFFF",
    textSecondary: "#A0AEC0",
    border: "#2D3748",
  };

  // --- Styles ---
  const styles = {
    container: {
      display: "flex",
      minHeight: "100vh",
      backgroundColor: colors.background,
      color: colors.textMain,
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    },
    sidebar: {
      width: "280px",
      backgroundColor: colors.sidebar,
      borderRight: `1px solid ${colors.border}`,
      padding: "40px 20px",
      display: "flex",
      flexDirection: "column",
      gap: "10px",
      position: "fixed",
      height: "100vh",
    },
    navItem: (isActive) => ({
      display: "flex",
      alignItems: "center",
      gap: "15px",
      padding: "15px 20px",
      borderRadius: "12px",
      cursor: "pointer",
      backgroundColor: isActive ? colors.accent : "transparent",
      transition: "0.3s",
      color: isActive ? "#fff" : colors.textSecondary,
      fontWeight: "600",
    }),
    mainContent: {
      marginLeft: "280px",
      flex: 1,
      padding: "60px",
    },
    profileSection: {
      maxWidth: "900px",
    },
    avatarContainer: {
      display: "flex",
      alignItems: "center",
      gap: "30px",
      marginBottom: "50px",
    },
    avatar: {
      width: "150px",
      height: "150px",
      borderRadius: "20px",
      objectFit: "cover",
      backgroundColor: "#cbd5e1",
    },
    infoGrid: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "30px",
    },
    inputGroup: {
      display: "flex",
      flexDirection: "column",
      gap: "10px",
    },
    label: {
      color: colors.textSecondary,
      fontSize: "14px",
      textTransform: "uppercase",
      letterSpacing: "1px",
    },
    input: {
      padding: "15px",
      backgroundColor: colors.card,
      border: `1px solid ${colors.border}`,
      borderRadius: "8px",
      color: "#fff",
      fontSize: "16px",
      outline: "none",
    },
    // Car Card Styles (Dựa trên Hình 2)
    carGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(280px, auto))",
      columnGap: "70px",
      rowGap: "30px",
      justifyContent: "center",
      width: "100%",
    },
    carCard: {
      backgroundColor: colors.card,
      borderRadius: "16px",
      overflow: "hidden",
      border: `1px solid ${colors.border}`,
    },
    carImagePlaceholder: {
      width: "100%",
      height: "180px",
      backgroundColor: "#2D3748",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
    },
    badge: {
      position: "absolute",
      top: "15px",
      left: "15px",
      backgroundColor: colors.accent,
      padding: "5px 12px",
      borderRadius: "4px",
      fontSize: "12px",
      fontWeight: "bold",
    },
    carContent: {
      padding: "20px",
    },
    carTitle: {
      fontSize: "18px",
      fontWeight: "bold",
      marginBottom: "10px",
      height: "50px",
    },
    carPrice: {
      color: colors.accent,
      fontSize: "22px",
      fontWeight: "bold",
      marginBottom: "15px",
    },
    carSpecs: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "10px",
      borderTop: `1px solid ${colors.border}`,
      paddingTop: "15px",
      color: colors.textSecondary,
      fontSize: "14px",
    },
  };

  // Render Component Thông tin cá nhân
  const ProfileInfo = () => (
    <div style={styles.profileSection}>
      <h1 style={{ marginBottom: "40px", fontSize: "32px" }}>
        Thông tin tài khoản
      </h1>
      <div style={styles.avatarContainer}>
        {/* Hình 1: Avatar mặc định */}
        <img
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
          alt="Avatar"
          style={styles.avatar}
        />
        <div>
          <h2 style={{ margin: 0 }}>{user?.name}</h2>

          <button
            style={{
              marginTop: "10px",
              padding: "8px 20px",
              backgroundColor: "transparent",
              border: `1px solid ${colors.accent}`,
              color: colors.accent,
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Thay đổi ảnh
          </button>
        </div>
      </div>

      <div style={styles.infoGrid}>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Full Name</label>
          <input style={styles.input} defaultValue={user?.name} />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Phone Number</label>
          <input style={styles.input} defaultValue={user?.phone} />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Email</label>
          <input style={styles.input} defaultValue={user?.email} />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Address</label>
          <input style={styles.input} defaultValue={user?.address} />
        </div>
      </div>

      <button
        style={{
          marginTop: "40px",
          padding: "15px 40px",
          backgroundColor: colors.accent,
          border: "none",
          borderRadius: "8px",
          color: "white",
          fontWeight: "bold",
          cursor: "pointer",
          fontSize: "16px",
        }}
      >
        Lưu thay đổi
      </button>
    </div>
  );
  // Render Component Xe yêu thích (Placeholder như Hình 2)
  const FavoriteCars = () => (
    <div>
      {favCars.length > 1 ? (
        <h1 style={{ marginBottom: "40px", fontSize: "32px" }}>
          {favCars.length} Results
        </h1>
      ) : (
        <h1 style={{ marginBottom: "40px", fontSize: "32px" }}>
          {favCars.length} Result
        </h1>
      )}
      <div style={styles.carGrid}>
        {favCars.length > 0 ? (
          favCars.map((car) => (
            <CarCard
              key={car.carId.id}
              cImg={car.carId.img1}
              cTitle={car.carId.name}
              cPrice={car.carId.cost}
              cLocation={car.carId.location}
              cTime={car.carId.date}
              cDrive={car.carId.type}
              cFuel={car.carId.fuel}
              cPeople={car.carId.seats}
              cReview={car.carId.review}
              cId={car.carId._id}
              cLiked={true}
              onRemoveCar={removeCarFromList}
            />
          ))
        ) : (
          <p className="text-gray-500">No favorite cars in your collection.</p>
        )}
      </div>
    </div>
  );

  return (
    <div style={styles.container}>
      {/* Sidebar Điều hướng bên trái */}
      <div style={styles.sidebar}>
        <div
          style={styles.navItem(activeTab === "profile")}
          onClick={() => setActiveTab("profile")}
        >
          <User size={20} /> Hồ sơ cá nhân
        </div>

        <div
          style={styles.navItem(activeTab === "favorites")}
          onClick={() => setActiveTab("favorites")}
        >
          <Heart size={20} /> Xe yêu thích
        </div>

        <div style={{ ...styles.navItem(false), marginTop: "auto" }}>
          Đăng xuất
        </div>
      </div>

      {/* Nội dung chính */}
      <div style={styles.mainContent}>
        {activeTab === "profile" ? <ProfileInfo /> : <FavoriteCars />}
      </div>
    </div>
  );
};

export default ProfileInfo;
