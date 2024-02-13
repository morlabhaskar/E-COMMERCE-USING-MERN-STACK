import React from 'react'
import "./Logo.css";
import "./Navbar.css"
import logoimg from "../../assets/img/logo.png"
import {Link} from 'react-router-dom';
import styles from "./Header.module.scss"

export const logo = (
  <div className='logo-parent'>
    <Link to='/'>
      <span><img className='mb-1' src={logoimg} alt="" /><h1 className='logo-title ml-1'>Shopy</h1></span>
    </Link>

  </div>
);
const Navbar = () => {
  return (
    
    <div className='navbar'>
      <div class="logo">
        <div>{logo}</div>
      </div>

      <nav className='mt-3'>
        <ul>
          <li class="link">Shop</li>
          <li class="link">Dashboard</li>
          <Link to='/login'><li class="link">Login</li></Link>
        </ul>
        <button class="menu-icon">
          <svg fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 6H20M4 12H20M13 18H20" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
          </svg>
        </button>
      </nav>


    </div>

  )
}

export default Navbar