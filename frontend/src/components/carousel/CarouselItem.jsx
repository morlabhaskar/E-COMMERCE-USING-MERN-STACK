import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'antd'
import { shortenText } from '../../utils'
import './Carousel.css';
import { IoBagCheckOutline } from "react-icons/io5";
import { MdCurrencyRupee } from "react-icons/md";

const CarouselItem = ({ url, name, price, description }) => {

  return (
    <div className='image-item'>
      <Link to="/product-details">
        <div className="bank-account">
          <div className="image">
            <img src={url} alt="" />

          </div>

          <div className='item-content p-2'>
            <div className="prices ml-2">
              <p className='mt-1'> <MdCurrencyRupee size={10} />50</p>
              <h3 className='ml-2'> <MdCurrencyRupee size={20}/>{price}</h3>
            </div>
            <h5 className="product-name">{shortenText(name, 10)}</h5>
            <p className=''>{shortenText(description, 30)}</p>
            <Link to="/"><Button>Add to Cart <IoBagCheckOutline className='ml-2 mb-1' size={20} /></Button></Link>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default CarouselItem