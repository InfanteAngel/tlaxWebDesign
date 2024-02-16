import React, { useState } from "react";
import { Link } from "react-router-dom";
import tlaxLogo from "../images/tlax-logo.png";
import shortArrow from "../images/short-arrow.png";
import longArrow from "../images/long-arrow.png";

export const navItems = {
  sec1: "Services",
  sec2: "About",
  sec3: "Pages",
  sec4: "Contact",
};

export default function Navbar(props) {
  const [isToggled, setToggle] = useState(true);

  const toggled = () => {
    if (isToggled) {
      setToggle(false);
      return;
    } else {
      setToggle(true);
    }
  };
  const { sec1, sec2, sec3, sec4 } = props;
  return (
    <>
      <div className="logo">
        <Link to="/">
          <img src={tlaxLogo} alt="tlaxLogo" id="tlax-logo" />
        </Link>
      </div>
      <nav className="navBar header-ff">
        <ul className="navItems">
          <li className="item">
            <Link to="/Services">{sec1}</Link>
          </li>
          <li className="item">
            <Link to="/About">{sec2}</Link>
          </li>
          <li className="item">
            <Link to="/Work">{sec3}</Link>
          </li>
          <li className="item">
            <Link to="/Contact">{sec4}</Link>
          </li>
        </ul>
      </nav>

      <nav className="mobileNav">
        <div className="mb-logo">
          <Link to="/">
            <img src={tlaxLogo} alt="tlaxLogo" id="tlax-logo" />
          </Link>
        </div>
        <button className="toggleButtons" type="button" onClick={toggled}>
          {isToggled ? (
            <i class="fa-solid fa-bars "></i>
          ) : (
            <i class="fa-solid fa-x"></i>
          )}
        </button>
        {isToggled ? "" : <ActiveMobileNav {...navItems}/> }
      </nav>
    </>
  );
}

const ActiveMobileNav = (props) => {
  const { sec1, sec2, sec3, sec4 } =
    props;
  return (
    <div className="activeMbToggle">
      <div className="nav-wrap">
        <div className="mobile-arrow-wrap">
          <img src={longArrow} alt="mobile-long-arrow" id="mb-nav-arrow" />
        </div>
        <div className="nav-mb-list">
          <nav className="mobile-nav-list">
            <ul>
              <li className="item">
                <Link to="/Services">{sec1}</Link>
              </li>
              <li className="item">
                <Link to="/About">{sec2}</Link>
              </li>
              <li className="item">
                <Link to="/Work">{sec3}</Link>
              </li>
              <li className="item">
                <Link to="/Contact">{sec4}</Link>
              </li>
            </ul>
          </nav>
          <div className="shortArrow-mb-">
            <img src={shortArrow} alt="mobileNav"id="mb-nav-short-arrow" />
          </div>
        </div>
      </div>
    </div>
  );
};
