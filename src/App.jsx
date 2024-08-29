import {BrowserRouter, Route, Routes} from "react-router-dom"
import HomePage from "./pages/HomePage";
import RestaurantPage from './pages/RestaurantPage'
import Footer from "./components/footer/Footer";
import RestaurantMenuTab from './components/RestaurantTabPage/RestaurantMainTab'

function App() {

  return (
    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path='/restaurantname' element={<RestaurantPage />}/>
          <Route path="/foodDetails" element={<RestaurantMenuTab/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
  
  );
}

export default App