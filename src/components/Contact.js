import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaFacebookF,
  FaYoutube,
  FaWhatsapp,
  FaInstagram,
} from "react-icons/fa";
const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <div className="contactSection">
          <div className="row justifyConter">
            <div className="col-6">
              <div className="contactSection-logo">
                <img src="/images/logo.png" alt="" />
              </div>
              <p>
               @ Maitri Photography, [Created By-Ashit Dighe]
              </p>
              <ul className="contactCircles">
              <NavLink to= {{ pathname: "http://www.instagram.com/sumit_jorvekar" }} target="_blank" >
                <li>
                  <FaInstagram className="contactIcon" />
              
                </li>
                </NavLink>
                <NavLink to= {{ pathname: "http://www.facebook.com/ashitdighe" }} target="_blank" >
                <li>
                  <FaFacebookF className="contactIcon" />
                </li>
                </NavLink>
                  <NavLink to= {{ pathname: "https://api.whatsapp.com/send?phone=9764664230" }} target="_blank" >
                <li>
                  <FaWhatsapp className="contactIcon" />
                </li>
                </NavLink>
                  <NavLink to= {{ pathname: "tel:7219115106" }} target="_blank" >
                <li>
                  <FaYoutube className="contactIcon" />
                </li>
                </NavLink>
              </ul>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
