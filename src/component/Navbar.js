import React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import { useTheme } from "../ThemeContext";
import { MdLightMode } from "react-icons/md";
import { MdNightlight } from "react-icons/md";

function Navbar() {
  const { theme, toggleTheme } = useTheme();
  return (
    <nav className="navbar">
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/dashboard">Dashboard</Link>
        {theme === "dark" ? (
          <div
            style={{
              height: "30px",
              width: "30px",
              borderRadius: "50%",
              justifyContent: "center",
              alignItems: "center",
              border: "1px solid white",
              cursor: "pointer",
            }}
            onClick={() => toggleTheme()}
          >
            <MdLightMode size="1.2rem" />
          </div>
        ) : (
          <div
            style={{
              height: "30px",
              width: "30px",
              borderRadius: "50%",
              backgroundColor: "inherit",
              justifyContent: "center",
              alignItems: "center",
              border: "1px solid black",
              cursor: "pointer",
            }}
            onClick={() => toggleTheme()}
          >
            <MdNightlight size="1.2rem" />
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
