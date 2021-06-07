import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
          COLONS.de
          </NavLink>


          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/test"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                <div className="icon">
                    <i className="fa fa-shipping-fast" aria-hidden="true"></i>
                    <i className="fa fa-shipping-fast" aria-hidden="true"></i>
                    </div>
                    <div className="name"><span data-text="Schnellbestellung">Schnellbestellung</span></div>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                <div className="icon">
                        <i className="fa fa-exchange-alt" aria-hidden="true"></i>	
                        <i className="fa fa-exchange-alt" aria-hidden="true"></i>		
                    </div>
                    <div className="name"><span data-text="Vergleichen">Vergleichen</span></div>
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                <div className="icon">
                        <i className="fa fa-user" aria-hidden="true"></i>	
                        <i className="fa fa-user" aria-hidden="true"></i>
                    </div>
                    <div className="name"><span data-text="Mein konto">Mein konto</span></div>
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                <div className="icon">
                        <i className="fa fa-clipboard" aria-hidden="true"></i>
                        <i className="fa fa-clipboard" aria-hidden="true"></i>		
                    </div>
                    <div className="name"><span data-text="Merkliste">Merkliste</span></div>
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                <div className="icon">
                        <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                        <i className="fa fa-shopping-cart" aria-hidden="true"></i>		
                    </div>
                    <div className="name"><span data-text="Warenkrob">Warenkrob</span></div>
              </NavLink>
            </li>
            
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;