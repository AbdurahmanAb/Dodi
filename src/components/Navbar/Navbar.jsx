import React, { useState, useRef, useEffect } from "react";
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
import { GrLogout, GrShieldSecurity, GrVmMaintenance } from "react-icons/gr";
import { NavLink } from "react-router-dom";
import "./navbar.scss";
import { useLocation } from "react-router-dom";
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
      path: "/maintaince",
      name: "Maintanace",
      icon: <GrVmMaintenance />,
    },
    {
      path: "/change",
      name: "Change Password",
      icon: <GrShieldSecurity />,
    },
    {
      path: "/login",
      name: "Log out",
      icon: <GrLogout />,
    },
  ];
  const sidebarRef = useRef();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/login") {
      sidebarRef.current.style.visibility = "hidden";
      sidebarRef.current.style.opacity = "0";
    }
  }, [location.pathname]);

  return (
    <div className="container1">
      <div
        style={{ width: isOpen ? "200px" : "50px" }}
        ref={sidebarRef}
        className="sidebar"
      >
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
