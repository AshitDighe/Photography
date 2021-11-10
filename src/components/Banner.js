import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaFacebookF,
  FaYoutube,
  FaWhatsapp,
  FaInstagram,
} from "react-icons/fa";
const Banner = () => {
  const [state] = React.useState({
    title: "I am Jonathan Doe",
    text:
      "i,m Jonathan, professional web developer wi",
    image: "/images/man-01.png",
  });
  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="header__content">
              <div className="header__section">
                <ul className="header__ul">
                <NavLink to= {{ pathname: "http://www.instagram.com/ashitdighe" }} target="_blank" >
                  <li className="headerIcon">
                       <FaInstagram className="headerIcon" />
                  </li>
                  </NavLink>
                  <NavLink to= {{ pathname: "http://www.facebook.com/ashitdighe" }} target="_blank" >
                  <li>
                    <FaFacebookF className="headerIcon" />
                  </li>
                  </NavLink>
                  <NavLink to= {{ pathname: "https://api.whatsapp.com/send?phone=9764664230" }} target="_blank" >
                  <li>
                    <FaWhatsapp className="headerIcon" />
                  </li>
                  </NavLink>
                  <NavLink to= {{ pathname: "tel:7219115106" }} target="_blank" >
                  <li>
                    <FaYoutube className="headerIcon" />
                  </li>
                  </NavLink>
                </ul>
                <h1>{state.title}</h1>
                <p>{state.text}</p>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="banner__img">
              <img src={state.image} alt="man" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Banner;
