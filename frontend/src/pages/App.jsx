import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Navbar from "../components/Navbar/Navbar.jsx";
import Login from "./Login/Login.jsx";
import Shop from "../components/Shop/Shop.jsx";
import Footer from "../components/Footer/Footer.jsx";
import { useEffect } from "react";
import './App.css'
// import MainLoader from "../components/Loaders/MainLoader.jsx";
// import {Spinner} from '../components/Loaders/MainLoader.jsx'


function App() {

  useEffect(() => {
    const body = document.body;
    const progressBar = document.querySelector('.progress__bar');
    console.log(progressBar)
    const updateProgress = () => {
      let scrollPos = (window.scrollY / (body.scrollHeight - window.innerHeight)) * 100;
      console.log(scrollPos)
      progressBar.style.width = `${scrollPos}%`;
      requestAnimationFrame(updateProgress);
    };
    updateProgress()
  }, [])



  return (
    <>
      <div className="progress__wrapper">
        <div className="progress__bar"></div>
      </div>
      <BrowserRouter>
      {/* <MainLoader/> */}
      {/* <Spinner/> */}
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <Home />
            }
          />
          <Route
            path="/login"
            element={
              <Login />
            }
          />
          <Route
            path="/shop"
            element={
              <Shop />
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>


    </>
  )
}

export default App
