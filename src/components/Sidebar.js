import React from "react";
import { links } from "../utils/data";
import { useGlobalContext } from "../contex";
import { FaGreaterThan, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.svg";
import Wrapper from "../assets/wrappers/Sidebar";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();

  return (
    <Wrapper>
      <div className={`${isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}`}>
        <div className="sidebar-header">
          <img src={logo} className="logo" alt="logo" />
          <button className="close-btn">
            <FaTimes onClick={closeSidebar} />
          </button>
        </div>
        <ul className="links">
          {links.map((link) => {
            const { id, url, text } = link;
            return (
              <div className="link-container" key={id}>
                <li className="links-item">
                  <a href={url}>{text}</a>
                  <FaGreaterThan className="icon" />
                </li>
                <div className="line"></div>
              </div>
            );
          })}
        </ul>
      </div>
    </Wrapper>
  );
};

export default Sidebar;
