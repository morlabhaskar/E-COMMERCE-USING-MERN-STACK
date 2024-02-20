import React from 'react'
import Hero from './Hero/Hero'
import HomeInfo from './HomeInfo/HomeInfo'
// import { Button } from 'antd'
import './Home.css'
import { electronics, productData } from '../../components/carousel/data.jsx'
// import { electronics } from '../../components/carousel/data.jsx'
import CarouselItem from '../../components/carousel/CarouselItem'
import ProductCarousel from '../../components/carousel/ProductCarousel.jsx'

const Home = () => {
  //latest products
  const productss = productData.map((item) => (
    <div key={item.id}>
      <CarouselItem
        name={item.name}
        url={item.imageurl}
        price={item.price}
        description={item.description}
      />
    </div>
  ))
  const electronicss = electronics.map((item) => (
    <div key={item.id}>
      <CarouselItem
        name={item.name}
        url={item.imageurl}
        price={item.price}
        description={item.description}
      />
    </div>
  ))

  return (
    <div className='html'>
      
      <section>
      <Hero />
      </section>

      <section>
        <HomeInfo />
      </section>

      <section>
        <ProductCarousel products={productss} />
      </section>
      <section className='mt-0'>
        <ProductCarousel electronics={electronicss} />
      </section>

    </div>
  )
}

export default Home


// 1.Hero
// 2.HomeInfo
// 3.HomeProductSlide or latest products
// 4.category