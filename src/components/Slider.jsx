import React from 'react';
import { sliderItems } from '../data'; 
import Carousel from 'react-bootstrap/Carousel';

const Slider = () => {

  return (
      <Carousel variant="dark">
        {sliderItems.map((item, i)=>(
          <Carousel.Item key={i}>
            <img
              className="d-block w-100"
              src={item.img}
              alt="First slide"
            />
          </Carousel.Item>
        ))}
        </Carousel>
  )
}

export default Slider
