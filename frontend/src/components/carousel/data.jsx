import one from "../../assets/img/carousel/one.webp"
import two from "../../assets/img/carousel/two.webp"
import three from "../../assets/img/carousel/three.webp"
import four from "../../assets/img/carousel/four.webp"
import five from "../../assets/img/carousel/five.webp"
import six from "../../assets/img/carousel/six.webp"

export const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide:1 //optional, default to 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide:1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide:1
    }
  };

  export const productData = [
    {
        id:1,
        imageurl:one,
        name:"One",
        price:"$19.23",
        description:"Some text about the product"
    },
    {
        id:2,
        imageurl:two,
        name:"Two",
        price:"$19.23",
        description:"Some text about the product"
    },
    {
        id:3,
        imageurl:three,
        name:"Three",
        price:"$19.23",
        description:"Some text about the product"
    },
    {
        id:4,
        imageurl:four,
        name:"Four",
        price:"$19.23",
        description:"Some text about the product"
    },
    {
        id:5,
        imageurl:five,
        name:"Five",
        price:"$19.23",
        description:"Some text about the product"
    },
    {
        id:6,
        imageurl:six,
        name:"Six",
        price:"$19.23",
        description:"Some text about the product"
    },
    {
        id:7,
        imageurl:one,
        name:"One",
        price:"$19.23",
        description:"Some text about the product"
    },
    {
        id:8,
        imageurl:two,
        name:"Two",
        price:"$19.23",
        description:"Some text about the product"
    },
    {
        id:9,
        imageurl:three,
        name:"Three",
        price:"$19.23",
        description:"Some text about the product"
    },
    {
        id:10,
        imageurl:four,
        name:"Four",
        price:"$19.23",
        description:"Some text about the product"
    },
    {
        id:11,
        imageurl:five,
        name:"Five",
        price:"$19.23",
        description:"Some text about the product"
    },
    {
        id:12,
        imageurl:six,
        name:"Six",
        price:"$19.23",
        description:"Some text about the product"
    },
  ]