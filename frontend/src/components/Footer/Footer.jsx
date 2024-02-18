import React from 'react';
import './Footer.css';

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className='Footer'>
      &copy;{year} Made By Bhaskar
    </div>
  )
}

export default Footer