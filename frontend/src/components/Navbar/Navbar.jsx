import React, { useEffect, useState } from 'react'
import "./Logo.css";
import "./Navbar.css"
import logoimg from "../../assets/img/logo.png"
import { Link } from 'react-router-dom';
import { Modal } from 'antd';

export const logo = (
  <div className='logo-parent'>
    <Link to='/'>
      <span><img className='mb-1' src={logoimg} alt="" /><h1 className='logo-title ml-1'>Shopy</h1></span>
    </Link>

  </div>
);

// const activeLink = ({isActive}) => (
//   isActive ? `${styles.active}` : ""
// )

const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);

const Navbar = () => {
  //model
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (

    <div className='navbar'>
      <div className="logo">
        <div>{logo}</div>

      </div>

      <nav>

        <ul className='pt-3'>
          <Link to='/shop'><li className="link">Shop</li></Link>
          <Link to='/dashboard'><li className="link">Dashboard</li></Link>
          <Link to='/login'><li className="link">Login</li></Link>
        </ul>
        <button className="menu-icon " onClick={showModal}>
          <svg fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 6H20M4 12H20M13 18H20" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </button>




      </nav>
      <Modal className='model' open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <ul className='pt-3'>
          <Link to='/shop'><li className="link">Shop</li></Link>
          <Link to='/dashboard'><li className="link">Dashboard</li></Link>
          <Link to='/login'><li className="link">Login</li></Link>
        </ul>

      </Modal>


    </div>

  )
}

export default Navbar