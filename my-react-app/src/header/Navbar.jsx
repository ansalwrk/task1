import React, { useState } from "react";
import gpsLogo from "../assets/gps.png";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <style>
        {`
          /* BASE STYLES */
          .nav-container {
            position: fixed;
            top: 0; left: 0; width: 100%; height: 81px;
            background-color: #000; color: white;
            display: flex; justify-content: space-between;
            align-items: center; z-index: 1000;
            border-bottom: 1px solid #333;
            padding: 0 68px; /* Desktop Padding */
            transition: padding 0.3s;
          }

          .nav-links {
            display: flex;
            gap: 20px;
            list-style: none;
            align-items: center;
          }

          .nav-btn {
            background: transparent; color: white; border: none;
            font-size: 14px; cursor: pointer; padding: 8px 12px;
            transition: 0.3s;
          }
          .nav-btn:hover { color: #ec7718; filter: drop-shadow(0 0 10px #ca6608); }
          .contact-btn:hover { background-color: #ff5a00 !important; }

          /* HAMBURGER ICON */
          .menu-icon {
            display: none;
            flex-direction: column;
            cursor: pointer;
            gap: 6px;
            z-index: 1100;
          }
          .menu-icon div {
            width: 28px; height: 3px; background: white;
            transition: 0.4s;
          }

          /* ANIMATE HAMBURGER TO 'X' */
          .menu-icon.active div:nth-child(1) { transform: translateY(9px) rotate(45deg); }
          .menu-icon.active div:nth-child(2) { opacity: 0; }
          .menu-icon.active div:nth-child(3) { transform: translateY(-9px) rotate(-45deg); }

          /* RESPONSIVE BREAKPOINTS */
          @media (max-width: 1100px) {
            .nav-container { padding: 0 30px; }
          }

          @media (max-width: 850px) {
            .menu-icon { display: flex; }

            .nav-links {
              position: fixed;
              top: 0;
              right: 0;
              height: 100vh;
              width: 250px;
              background: #111;
              flex-direction: column;
              justify-content: center;
              gap: 30px;
              border-left: 1px solid #333;
              
              /* ANIMATION LOGIC */
              transform: translateX(${isOpen ? "0%" : "100%"});
              opacity: ${isOpen ? "1" : "0"};
              transition: transform 0.4s ease-in-out, opacity 0.3s ease;
            }

            .phone-info { font-size: 12px; }
          }
        `}
      </style>

      <nav className="nav-container">
        <img src={gpsLogo} alt="GPS Logo" style={{ height: "50px", objectFit: "contain" }} />

        {/* Hamburger with dynamic 'active' class */}
        <div className={`menu-icon ${isOpen ? "active" : ""}`} onClick={() => setIsOpen(!isOpen)}>
          <div /> <div /> <div />
        </div>

        <ul className="nav-links">
          <li><button className="nav-btn">Features</button></li>
          <li><button className="nav-btn">Benefits</button></li>
          <li><button className="nav-btn">Industries</button></li>
          <li><button className="nav-btn">Devices</button></li>
          <li><button className="nav-btn">Pricing</button></li>
          <li><button className="nav-btn" style={{ display: "flex", alignItems: "center", gap: "8px", fontWeight: "bold" }}> <svg style={{ width: "16px", height: "16px", color: "#f97316" }} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg> 
        
            +919876543210</button></li>

          <li>
            <button className="contact-btn" style={{ backgroundColor: "#e24800", color: "white", border: "none", padding: "10px 20px", cursor: "pointer", fontSize: "16px", borderRadius: "4px" }}>
              Contact us
            </button>
          </li>
        </ul>
      </nav>

      <div style={{ height: "81px" }}></div>
    </>
  );
};