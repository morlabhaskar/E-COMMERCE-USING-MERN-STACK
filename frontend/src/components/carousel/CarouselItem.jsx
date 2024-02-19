import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'antd'
import { shortenText } from '../../utils'
import './Carousel.css';

const CarouselItem = ({ url, name, price, description }) => {

  return (
    <div className='image-item'>
      <Link to="/product-details">
        <div className="bank-account">
          <img src={url} alt="" />
          <div className='item-content p-2'>
            <div className="prices ml-2">
              <p className='mt-0.5'>$50</p>
              <h3 className='ml-2'>{price}</h3>
            </div>
            <h5 className="product-name">{shortenText(name, 10)}</h5>
            <p className=''>{shortenText(description, 30)}</p>
            <Link to="/"><Button>Add to Cart</Button></Link>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default CarouselItem