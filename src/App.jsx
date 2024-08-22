import {BrowserRouter, Route, Routes} from "react-router-dom"
// import HomePage from "./pages/HomePage";
// import RestrauntPage from './pages/RestrauntPage'
import Footer from "./components/footer/Footer";
// import DeliverPage from "./components/Delivery/DeliveryPage";
// import RestaurantMainTab from './components/RestaurantTabPage/RestaurantMainTab'
import RestaurantMenuTab from './components/RestaurantTabPage/RestaurantMainTab'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<HomePage />} /> */}
          {/* <Route path='/restrauntname' element={<RestrauntPage />}/> */}
          {/* <Route path="/" element={<DeliverPage/>} /> */}
          <Route path="/" element={<RestaurantMenuTab/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App