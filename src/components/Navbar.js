import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { SIdebarData } from "./SidebarData";
import { IconContext } from "react-icons/lib";
import "./Navbar.css";
const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);

  const [topbar, setTopbar] = useState(false);

  const [toggleItem, setToggleItem] = useState(false);

  const showSidebar = () => {
    setSidebar(!sidebar);
    setTopbar(!topbar);
    setToggleItem(!toggleItem);
  };

  useEffect(() => {
    console.log("dari navbar", toggleItem);
  }, [toggleItem]);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div
          className={topbar ? "navbar fixed-top active" : "navbar fixed-top"}
        >
          <Link to="#" className="menu-bars">
            <FaBars
              onClick={showSidebar}
              className={toggleItem ? "toggle-item active" : "toggle-item"}
            />
          </Link>
          <h3 className="pe-5 pt-3 text-white">React JS - Kelas A</h3>
        </div>

        <nav className={sidebar ? "nav-menu active" : "nav-menu "}>
          <ul onClick={showSidebar} className="nav-menu-items">
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiOutlineClose />
              </Link>
            </li>
            {SIdebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      isActive ? "link-active" : "link"
                    }
                  >
                    {item.icon}
                    <span>{item.title}</span>
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
