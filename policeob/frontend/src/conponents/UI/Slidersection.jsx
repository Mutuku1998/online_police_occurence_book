import React from 'react'
import Slider from "react-slick"
import { Container } from 'reactstrap'
import "../styles/slidesection.css"
const Slidersection = () => {

  const settings = {
    fade:true,
    speed:1000,
    autoplaySpeed:3000,
    infinite:true,
    autoplay:true,
    slidesToShow: 1,
    slidesToScroll:1,
    pauseOnHover:false,
}
  return (
    <Slider {...settings} className='hero-slider'>
    <div className='slider-item slider-item-01 mt-0'>
       <Container>
        <div className='slider-content'>
            <h4 className='text-light mb-3 capitalize'>
      Report crime online
            </h4>
            <h1 className='text-light mb-4 capitalize' >
            online crime reporting system 
      </h1>
                 <button className='btn reserve-btn mt-4 text-white'>
                   Report Now
                 </button>
        </div>
        </Container> 
    </div>
    <div className='slider-item slider-item-02 mt-0'>
       <Container>
        <div className='slider-content'>
            <h4 className='text-light mb-3'>
         Domestic violence and Gender based Violence
            </h4>
            <h1 className='text-light mb-4' >
                 Report Criminal offence here</h1>
                 <button className='btn reserve-btn text-white mt-4'>
            Report Now
                 </button>
        </div>
        </Container> 
    </div>
    <div className='slider-item slider-item-03 mt-0'>
       <Container>
        <div className='slider-content'>
            <h4 className='text-light mb-3'>
                Call for emergency 
            </h4>
            <h1 className='text-light mb-4' >
                 Reach us for assistance</h1>
                 <button className='btn reserve-btn mt-4 text-white'>
                     Report Now 
                 </button>
        </div>
        </Container> 
    </div>
    </Slider>
  )
}

export default Slidersection