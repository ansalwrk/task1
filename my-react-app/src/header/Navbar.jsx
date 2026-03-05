import React from "react";
import { Menu } from "./Menu";

export const Navbar = () => {
  return (
    <nav style={{ padding: "20px", background: "#eee" }}>
      <h2>My Website</h2>
      <Menu />
    </nav>
  );
};