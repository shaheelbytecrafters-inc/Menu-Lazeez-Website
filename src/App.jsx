import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RestaurantPage from "./pages/RestaurantPage";
import Footer from "./components/footer/Footer";
import PartnerPage from "./components/Partner/PartnerPage";
import Navbar from "./components/Header/Navbar";
import FoodCartApp from "./components/Cart/FoodCartApp";
import ShoppingCart from "./components/Cart/ShoppingCart";
import SearchInput from "./components/SearchInput/SearchInput";
import NightlifeComponent from "./components/NightLifePage/MainNightLife";
// import SignIn from "./components/authComponent/SignIn";
// import Profile from "./components/ProfileSection/Profile";
import SidebarWithTabs from "./components/Profile/SidebarWithTabs";
import OTPInput from "./components/authComponent/Otp";

function AppContent() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div style={{ padding: isHomePage ? "0" : "90px 0" }}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/restaurantname" element={<RestaurantPage />} />
        <Route path="/foodDetails" element={<NightlifeComponent />} />

        <Route path="/foodCartApp" element={<FoodCartApp />} />

        <Route path="/partner" element={<PartnerPage />} />
        <Route path="/cart" element={<ShoppingCart />} />
        <Route path="/searchBar" element={<SearchInput />} />
        <Route path="/profile" element={<SidebarWithTabs />} />
        <Route path="/otp" element={<OTPInput/>} />
      </Routes>
    </div>
  );
}

function App() {
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/firebase-messaging-sw.js") // This should match the location of the SW file
    .then(function (registration) {
      console.log("Service Worker registered with scope:", registration.scope);
    })
    .catch(function (err) {
      console.log("Service Worker registration failed:", err);
    });
}

  return (
    <BrowserRouter>
      {/* Ensure the Navbar styles don't push it to the left */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: 0,
          padding: 0,
        }}
      >
        <Navbar />
      </div>
      <AppContent />
      <Footer />
      {/* <SignIn/> */}
      {/* <SignIn/> */}
      
    </BrowserRouter>
  );
}

export default App;
