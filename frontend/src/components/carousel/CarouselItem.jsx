import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'antd'
import { shortenText } from '../../utils'
import './Carousel.css';

const CarouselItem = ({ url, name, price, description }) => {
  
  return (
    <div className='image-item'>
      <Link to="/product-details" className="bank-account">
        <img
          className="flag"
          aria-hidden="true"
          src={url}
          // style="object-position: -11px center;"
          alt="US"
        />
        <div>
          <h2 role="presentation">
            {`${price}`}

          </h2>
          <div className="currency">
          {shortenText(name, 18)}
          </div>
          <p>{shortenText(description, 26)}</p>
          <Button>Add to Cart</Button>
        </div>
      </Link>
    </div>
  )
}

export default CarouselItem