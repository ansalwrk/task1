import React from "react";

export const Navbar = () => {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        background: "#000000",
        color: "white",
        padding: "10px 20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}
    >
      <h2 style={{ margin: 0 }}>My Website</h2>

      <ul
        style={{
          display: "flex",
          gap: "20px",
          listStyle: "none",
          margin: 0,
          padding: 0,
          alignItems: "center"
        }}
      >
        <li>What is AIS140?</li>
        <li>About</li>
        <li>
         <li><button>Contact</button></li>
        </li>
      </ul>
    </nav>
  );
};