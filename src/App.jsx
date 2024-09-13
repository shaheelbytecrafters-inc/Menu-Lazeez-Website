import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RestaurantPage from "./pages/RestaurantPage";
import Footer from "./components/footer/Footer";
import PartnerPage from "./components/Partner/PartnerPage";
import Navbar from "./components/Header/Navbar";
import FoodCartApp from "./components/Cart/FoodCartApp";
import ShoppingCart from "./components/Cart/ShoppingCart";
import SearchInput from "./components/SearchInput/SearchInput";
import { Box } from "@mui/material";
import RestaurantBookTableSmallScreen from "./components/Restraunt/RestaurantPages/RestaurantBookTableSmallScreen";
import RestaurantOrderOnlineSmallScreen from "./components/Restraunt/RestaurantPages/RestaurantOrderOnlineSmallScreen";
import MainNightLife from "./components/NightLifePage/MainNightLife";

function AppContent() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div style={{ padding: isHomePage ? "0" : "90px 0" }}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/restaurantname" element={<RestaurantPage />} />
        <Route path="/foodDetails" element={<MainNightLife />} />

        <Route path="/foodCartApp" element={<FoodCartApp />} />

        <Route path="/partner" element={<PartnerPage />} />
        <Route path="/cart" element={<ShoppingCart />} />
        <Route path="/searchBar" element={<SearchInput />} />
        <Route
          path="/RestaurantBookTableSmallScreen"
          element={<RestaurantBookTableSmallScreen />}
        />
        <Route
          path="/RestaurantOrderOnlineSmallScreen"
          element={<RestaurantOrderOnlineSmallScreen />}
        />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
        {/* Ensure the Navbar styles don't push it to the left */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            margin: 0,
            padding: 0,
            width:"auto",
          }}
        >
          <Navbar />
          
        </Box>
        <AppContent />
        <Footer />
    </BrowserRouter>
  );
}

export default App;
