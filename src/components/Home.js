import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from './../assets/images/1.jpg';
import img2 from './../assets/images/2.jpg';
import img3 from './../assets/images/3.jpg';
import "./Slide.css";
import { NavLink } from "react-router-dom";
function Home () {
  return (
    <>
    <div className="Home">
              <div className="container2">
              <div className="header__buttons">
              <div className="Section-btn">
                  <NavLink to=" " className="btn btn-outline">
                  View in Marathi Language
                  </NavLink>
                </div> 
                </div>
              <div className="row-2 justifyConter">
           <Carousel className="main-slide">
                <div>
                  <img src= {img1} alt="img"/>
                  
                </div>
                <div>
                    <img src= {img2} alt="img" />
                   
                </div>
                <div>
                    <img src= {img3} alt="img" />
                  
                </div>
            </Carousel>
            </div> 
            </div>
           </div>
    </>
  )
}

export default Home
