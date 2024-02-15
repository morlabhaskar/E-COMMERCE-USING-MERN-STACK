import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./Home/Home";
import Navbar from "../components/Navbar/Navbar.jsx";
import Login from "./Login/Login.jsx";
import Shop from "../components/Shop/Shop.jsx";


function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar/>
          <Routes>
              <Route 
                  path="/" 
                  element={
                     <Home/>
                  }
              />
              <Route 
                  path="/login" 
                  element={
                    <Login/>
                  } 
              />
              <Route 
                  path="/shop" 
                  element={
                    <Shop/>
                  } 
              />
          </Routes>
      </BrowserRouter>
      
        
    </>
  )
}

export default App
