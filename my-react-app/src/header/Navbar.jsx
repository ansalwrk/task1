import React from "react";
import gpsLogo from "../assets/gps.png";

export const Navbar = () => {
  return (
<nav
  style={{
    position: "fixed",
    top: 0,
    width: "100%",
    borderBlockEnd:"white",
    height:"81px",
    backgroundColor: "#000000",
    color: "white",
    padding: "10px 0",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    scroll: "fixed",
    zIndex: 1000,
 




  }}
>
<img
  src={gpsLogo}
  alt="GPS Logo"
  style={{
    height: "50px",
    marginLeft: "68px",
    objectFit: "contain"
  }}
/>

<ul
  style={{
    fontSize: "14px",
    display: "flex",
    gap: "20px",
    listStyle: "none",
    margin: 0,
    padding: 0,
    alignItems: "center"
  }}
>
<button 
 style={{
        background: "transparent",
    color: "white",
    border: "none",
    fontSize: "14px",
    cursor: "pointer",
    padding: "8px 12px"
    }}
    >

</button>

    





  <button className="nav-btn">Features</button>
  <button className="nav-btn">Benefits</button>
  <button className="nav-btn">Industries</button>
  <button className="nav-btn">Devices</button>
  <button className="nav-btn">Pricing</button>
  <li>+91 98765 43210</li>
  <li>



    <div className="contact-box">
  <button
    style={{
      backgroundColor: "#e24800",
      color: "white",
      border: "none",
      padding: "10px 20px",
      cursor: "pointer",
      fontSize: "15px",
    }}
  >

    Contact us
  </button>
</div>
        </li>
      </ul>
    </nav>
  );
};