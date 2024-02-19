import React from 'react'
import Hero from './Hero/Hero'
import HomeInfo from './HomeInfo/HomeInfo'
// import { Button } from 'antd'
import './Home.css'
import { productData } from '../../components/carousel/data.jsx'
import CarouselItem from '../../components/carousel/CarouselItem'
import ProductCarousel from '../../components/carousel/ProductCarousel.jsx'


// const PageHeading = ({ heading, btnText }) => {
//   return (
//     <>
//       <div className="HomeProductSlide-heading-total d-flex justify-content-between">
//         <h2 className="HomeProductSlide-head">{heading}</h2>
//         <Button className="HomeProductSlide-btn">{btnText}</Button>
//       </div>
//       <hr />
//     </>
//   )
// }

const Home = () => {
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

  return (
    <div className='html'>
      
      <section>
      <Hero />
      </section>

      <section>
        <HomeInfo />
      </section>

      <section>
        {/* <PageHeading heading={"Latest Products"} btnText={"Show More >>"} /> */}
        <ProductCarousel products={productss} />
      </section>



    </div>
  )
}

export default Home


// 1.Hero
// 2.HomeInfo
// 3.HomeProductSlide or latest products
// 4.category