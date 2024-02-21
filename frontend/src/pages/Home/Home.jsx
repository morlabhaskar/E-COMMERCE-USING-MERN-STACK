import React from 'react'
import Hero from './Hero/Hero'
import HomeInfo from './HomeInfo/HomeInfo'
import './Home.css'
import { electronics, productData } from '../../components/carousel/data.jsx'
import CarouselItem from '../../components/carousel/CarouselItem'
import ProductCarousel from '../../components/carousel/ProductCarousel.jsx'
import ProductCarousel2 from '../../components/carousel/ProductCarousel2.jsx'

const Home = () => {
  //latest products
  const productss = productData.map((item) => (
    <div key={item.id}>
      <CarouselItem
        name={item.name}
        url={item.imageurl}
        oriprice={item.oriprice}
        price={item.price}
        description={item.description}
      />
    </div>
  ))

  //electronics
  const electronicss = electronics.map((item1) => (
    <div key={item1.id}>
      <CarouselItem
        name={item1.name}
        url={item1.imageurl}
        oriprice={item1.oriprice}
        price={item1.price}
        description={item1.description}
      />
    </div>
  ))

  return (
    <div className='html'>
      <section>
      <Hero />
      </section>
      

      <section>
        <ProductCarousel products={productss} />
      </section>
      
      <section>
        <HomeInfo />
      </section>

      <section>
        <ProductCarousel2 electronics={electronicss}/>
      </section>
      
    </div>
  )
}

export default Home