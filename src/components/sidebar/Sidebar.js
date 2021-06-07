import React, { useRef } from "react";
import { Link } from 'react-router-dom';
import "./sidebar.css";
import { useDetectOutsideClick } from "./useDetectOutsideClick";

export default function Sidebar() {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const onClick = () => setIsActive(!isActive);

  return (
    
      <div className="sidebar">
      <div className="menu-container">

        <button onClick={onClick} className="menu-trigger">
          
          <img src="/images/menu.png"alt="Menu"/>
          <span>MENÜ</span>
          <i className="fas fa-angle-down angle-down"></i>
        </button>
        
        <nav ref={dropdownRef} className={`menu ${isActive ? "active" : "inactive"}`}>
          <ul>
            <li>
              <Link className="link" to="/test">Ablage</Link>
            </li>
            <li>
              <Link className="link" to="/test">Didet</Link>
            </li>
            <li>
              <Link className="link" to="/test">Sonstiges</Link>
            </li>
            <li>
              <Link className="link" to="/test">Urinal</Link>
            </li>
            <li>
              <Link className="link" to="/test">Waschtische</Link>
            </li>
            <li>
              <Link className="link" to="/test">WC</Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="right-side">
        <h1>Products List</h1>
      </div>
      
      </div>
    
  );
}