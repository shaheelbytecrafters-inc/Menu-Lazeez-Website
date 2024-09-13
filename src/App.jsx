import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RestaurantPage from "./pages/RestaurantPage";
import Footer from "./components/footer/Footer";
import PartnerPage from "./components/Partner/PartnerPage";
import Navbar from "./components/Header/Navbar";
import ButtonTab from "./components/RestaurantTabPage/ButtonTab";
import AddToCartPage from "../src/components/Cart/AddToCartPage";
import FoodCartApp from "./components/Cart/FoodCartApp";
import ShoppingCart from "./components/Cart/ShoppingCart";
import Searchbar from "./components/Searchbar/Searchbar";
import SearchInput from "./components/SearchInput/SearchInput";
import { Box } from "@mui/material";
// import RestaurantMainTab from "./components/RestaurantTabPage/RestaurantMainTab";

function AppContent() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div style={{ padding: isHomePage ? "0" : "90px 0" }}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/restaurantname" element={<RestaurantPage />} />
        <Route path="/foodDetails" element={<ButtonTab />} />

        <Route path="/foodCartApp" element={<FoodCartApp />} />

        <Route path="/partner" element={<PartnerPage />} />
        <Route path="/cart" element={<ShoppingCart />} />
        <Route path="/searchBar" element={<SearchInput />} />
        {/* <Route path="/shoppingCart" element={<ShoppingCart/>}/> */}
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
