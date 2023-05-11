import React from "react";
import "../styles/Header.css";
import { ContactLogo } from "../assets/icons/ContactLogo";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <div className="header">
      <div>
        <ContactLogo width="80px" height="80px" color="white" />
        <p
          style={{
            margin: "0",
            marginLeft: "9%",
            fontWeight: "bold",
            color: "white",
          }}
        >
          Contacts
        </p>
      </div>
      <div className="header-nav">
        <NavLink
          style={({ isActive }) =>
            isActive
              ? {
                  color: "white",
                  borderBottom: "1.5px solid white",
                  padding: "10px",
                  transition: "0.4s all",
                }
              : { color: "#ededed", padding: "15px", transition: "0.4s all" }
          }
          to="/"
        >
          Contacts
        </NavLink>
        <NavLink
          style={({ isActive }) =>
            isActive
              ? {
                  color: "white",
                  borderBottom: "1.5px solid white",
                  padding: "10px",
                  transition: "0.4s all",
                }
              : { color: "#ededed", padding: "15px", transition: "0.4s all" }
          }
          to="/about"
        >
          About
        </NavLink>
      </div>
    </div>
  );
};
