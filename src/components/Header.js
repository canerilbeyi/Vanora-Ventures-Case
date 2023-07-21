import React from "react";
import logo from "../assets/logo.svg";
import { FaBars } from "react-icons/fa";
import { links } from "../utils/data";
import { useGlobalContext } from "../contex";
import Wrapper from "../assets/wrappers/Header";

const Header = () => {
  const { openSidebar } = useGlobalContext();

  return (
    <Wrapper>
      <div className="nav-center">
        <img src={logo} className="logo" alt="logo" />
        <div className="links-container">
          <ul className="links">
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <button className="nav-toggle">
          <FaBars onClick={openSidebar} />
        </button>
      </div>
    </Wrapper>
  );
};

export default Header;
