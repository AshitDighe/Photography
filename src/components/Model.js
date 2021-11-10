
import React from 'react'
  import { NavLink } from "react-router-dom";

const Model = () => {
    const [state] = React.useState([
        {
          id: 1,
          Img: <img src="/images/sumit6.jpg" alt="man" /> 
        },
        {
            id: 2,
            Img: <img src="/images/sumit6.jpg" alt="man" /> 
          },
          {
            id: 3,
            Img: <img src="/images/sumit6.jpg" alt="man" /> 
          },
          {
            id: 4,
            Img: <img src="/images/sumit6.jpg" alt="man" /> 
          },
           {
            id: 5,
            Img: <img src="/images/sumit6.jpg" alt="man" /> 
          },
          {
            id: 6,
            Img: <img src="/images/sumit6.jpg" alt="man" /> 
          },
          {
            id: 7,
            Img: <img src="/images/sumit6.jpg" alt="man" /> 
          },
          {
            id: 8,
            Img: <img src="/images/sumit6.jpg" alt="man" /> 
          },
          {
            id: 9,
            Img: <img src="/images/sumit6.jpg" alt="man" /> 
          },
          {
            id: 10,
            Img: <img src="/images/sumit6.jpg" alt="man" /> 
          },
          {
            id: 11,
            Img: <img src="/images/sumit6.jpg" alt="man" /> 
          },
          {
            id: 12,
            Img: <img src="/images/sumit6.jpg" alt="man" /> 
          }
    ]);
    return (
              <div className="Gallery">
              <div className="container2">
              <div className="header__buttons">
              <div className="Section-btn">
                  <NavLink to="/Gallery" className="btn btn-outline">
                  Candid
                  </NavLink>
                  <NavLink to="/Model" className="btn btn-outline">
                   Model
                  </NavLink>
                </div> 
                </div>
              <div className="row-2 justifyConter2">
              {state.map((Model) => (
              <div className="about__img2" key={Model.id}>
              {/* <img src="/images/sumit.jpeg" alt="man" /> */}
              {Model.Img}
              </div>
               ))}
              </div>
        </div>
        </div>
       
    )
}

export default Model
