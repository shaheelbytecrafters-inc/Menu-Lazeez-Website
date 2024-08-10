import {BrowserRouter, Route, Routes} from "react-router-dom"
import HomePage from "./pages/HomePage";
import RestrauntPage from './pages/RestrauntPage'

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/restrauntname' element={<RestrauntPage />}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App