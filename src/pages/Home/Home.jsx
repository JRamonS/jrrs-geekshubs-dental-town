import React from 'react'
import './Home.css'

import Carousel from 'react-bootstrap/Carousel';
import sonrisa1 from '../../assets/sonrisa1.jpg'
import sonrisa2 from '../../assets/sonrisa2.jpg'
import sonrisa3 from '../../assets/sonrisa3.jpg'

export const Home = () => {


  return (
    <div className='homeDesign'>
        <div className='imgHome'>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block imgDesign"
              src={sonrisa1}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3 className="carouselCaptionDesign">Innovative dental surgery</h3>
              <p className="carouselCaptionDesign">
                We improve the life of out patients solving the most complicated cases
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block imgDesign"
              src={sonrisa2}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3 className="carouselCaptionDesign">Innovative dental surgery</h3>
              <p className="carouselCaptionDesign">
                We improve the life of out patients solving the most complicated cases
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block imgDesign"
              src={sonrisa3}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3 className="carouselCaptionDesign">Innovative dental surgery</h3>
              <p className="carouselCaptionDesign">
                We improve the life of out patients solving the most complicated cases
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        </div>
    </div>
  )
}


