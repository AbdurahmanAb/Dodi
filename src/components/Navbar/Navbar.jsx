import React, { useState } from "react";
import {
  FaTh,
  FaBars,
  FaUserAlt,
  FaRegChartBar,
  FaCommentAlt,
  FaShoppingBag,
  FaThList,
  FaHome,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./navbar.scss";
const Navbar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: "/",
      name: "Home",
      icon: <FaHome />,
    },
    {
      path: "/reports",
      name: "Reports",
      icon: <FaTh />,
    },
    {
      path: "/employee",
      name: "Employee",
      icon: <FaUserAlt />,
    },
    {
      path: "/contrats",
      name: "Contrats",
      icon: <FaRegChartBar />,
    },
    {
      path: "/change",
      name: "Change Password",
      icon: <FaCommentAlt />,
    },
    {
      path: "/login",
      name: "Log out",
      icon: <FaShoppingBag />,
    },
  ];
  return (
    <div className="container1">
      <div style={{ width: isOpen ? "200px" : "50px" }} className="sidebar">
        <div className="top_section">
          <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
            DODI
          </h1>
          <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
            <FaBars onClick={toggle} style={{ cursor: "pointer" }} />
          </div>
        </div>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeclassname="active"
          >
            <div className="icon">{item.icon}</div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="link_text"
            >
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Navbar;
