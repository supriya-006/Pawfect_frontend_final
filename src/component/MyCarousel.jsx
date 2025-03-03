import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import React from 'react'

const MyCarousel = () => {
  return (
    <>
     <Carousel>
     <div>
                    <img src="./R.jpg" />
                    <p className="pet"></p>
                </div>
                <div>
                    <img src="./persian.jpeg" />
                    <p className="pet"></p>
                </div>
                
                <div>
                    <img src="./retriever.jpg" />
                    <p className="pet"></p>
                </div>
            </Carousel>
    </>
  )
}

export default MyCarousel