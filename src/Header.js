import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fabFacebook } from '@fortawesome/free-brands-svg-icons'

import './Header.css'

function Header() {
  return (
    <div>
      <nav className="navbar">
        <div className="navbar__logo">
         {/* <FontAwesomeIcon icon={faCoffee}/> <a href="/">무슨 과목 들었지?</a> */}
        </div>
        <ul className="navbar__menu">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="">Gallery</a>
          </li>
          <li>
            <a href="">FAQ</a>
          </li>
          <li>
            <a href="">Bookings</a>
          </li>
        </ul>
        <ul className="navbar__items">
          <li>
          <FontAwesomeIcon icon={fabFacebook}/>
          </li>
          <li>
            <i className="fab fa-instagram"></i>
          </li>
        </ul>
        <a href="#" className="navbar__toggleBtn">
          <i className="fas fa-bars"></i>
        </a>
      </nav>
    </div>
  );
}

export default Header;