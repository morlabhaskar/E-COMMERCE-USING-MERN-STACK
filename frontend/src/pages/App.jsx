import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./Home/Home";
// import MainLoader from "../components/Loaders/MainLoader";
// import Logo from "../components/Logo/Logo";
import Navbar from "../components/Navbar/Navbar.jsx";
import Login from "./Login/Login.jsx";


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
          </Routes>
      </BrowserRouter>
      
        
    </>
  )
}

export default App
