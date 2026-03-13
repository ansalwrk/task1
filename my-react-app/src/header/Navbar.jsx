import React, { useState } from "react";
import gpsLogo from "../assets/gps.png";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Shared button style to reduce code clutter
  const baseBtnStyle = {
    background: "transparent",
    color: "white",
    border: "none",
    fontSize: "14px",
    cursor: "pointer",
    padding: "8px 12px",
    transition: "0.3s",
  };

  return (
    <>
      <style>
        {`
          /* Hover & Active States (Inline cannot do these) */
          .nav-btn:hover { color: #ec7718 !important; }
          .contact-btn:hover { background-color: #ff5a00 !important; }
          .menu-icon.active div:nth-child(1) { transform: translateY(9px) rotate(45deg); }
          .menu-icon.active div:nth-child(2) { opacity: 0; }
          .menu-icon.active div:nth-child(3) { transform: translateY(-9px) rotate(-45deg); }

          /* Responsive Logic */
          @media (max-width: 850px) {
            .menu-icon { display: flex !important; }
            .nav-links {
              position: fixed !important;
              top: 0; right: 0; height: 100vh; width: 250px;
              background: #111 !important;
              flex-direction: column !important;
              justify-content: center !important;
              border-left: 1px solid #333 !important;
              transform: translateX(${isOpen ? "0%" : "100%"}) !important;
              transition: transform 0.4s ease-in-out !important;
            }
          }
          @media (max-width: 1100px) {
            .nav-container { padding: 0 30px !important; }
          }
        `}
      </style>

      <nav 
        className="nav-container"
        style={{
        position: "fixed",
        width: "100%",
        height: "80px",
        backgroundColor: "#000000",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        zIndex: 1000,
        padding: "0 68px",  
        boxSizing: "border-box"
        }}
      >
        <div className="flex-justify-"></div>
        <img src={gpsLogo} alt="Logo" style={{ height: "45px", objectFit: "contain" }} />

        {/* Mobile Menu Toggle */}
        <div 
          className={`menu-icon ${isOpen ? "active" : ""}`} 
          onClick={() => setIsOpen(!isOpen)}
          style={{ display: "none", flexDirection: "column", gap: "6px", cursor: "pointer", zIndex: 1100 }}
        >
          {[1, 2, 3].map((i) => (
            <div key={i} style={{ width: "28px", height: "3px", background: "white", transition: "0.4s" }} />
          ))}
        </div>

        {/* Navigation Links */}
        <ul 
          className="nav-links"
          style={{ display: "flex", gap: "15px", listStyle: "none", alignItems: "center", margin: 0, padding: 0 }}
        >
          <li><button className="nav-btn" style={baseBtnStyle}>Features</button></li>
          <li><button className="nav-btn" style={baseBtnStyle}>Benefits</button></li>
          <li><button className="nav-btn" style={baseBtnStyle}>Industries</button></li>
          <li><button className="nav-btn" style={baseBtnStyle}>Devices</button></li>
          <li>
            <button className="nav-btn" style={{ ...baseBtnStyle, display: "flex", alignItems: "center", gap: "8px", fontWeight: "bold" }}>
              <svg style={{ width: "16px", color: "#f97316" }} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              +91 9876543210
            </button>
          </li>
          <li>
            <button className="contact-btn" style={{ backgroundColor: "#e24800", color: "white", border: "none", padding: "10px 22px", cursor: "pointer", borderRadius: "6px", fontWeight: "600" }}>
              Contact us
            </button>
          </li>
        </ul>
      </nav>

      {/* Spacer to prevent content from hiding under navbar */}
      <div style={{ height: "80px" }}></div>
    </>
  );
};