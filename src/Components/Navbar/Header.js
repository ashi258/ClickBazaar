import React, { useState, useEffect } from "react";
import "./Header.css"; // Import your CSS file

function Navbar() {
  const [isChecked, setIsChecked] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="nav-main-bar">
      <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
        <div className="left">
          <img
            src="https://offices.aihp.in/wp-content/uploads/2023/09/Aihp-logo.png"
            alt="Description of the image"
          />
        </div>
        <div className="right">
          <input
            type="checkbox"
            className="myCheckBox"
            id="check"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          <label htmlFor="check" className="checkBtn">
            <i className="fa fa-bars"></i>
          </label>
          <ul className={isChecked ? "active" : ""}>
            <li>
              <a href="/" className="active">
                Overview
              </a>
            </li>
            <li>
              <a href="/">Overview</a>
            </li>
            <li>
              <a href="/">Overview</a>
            </li>
            <li>
              <a href="/">Overview</a>
            </li>
            <li>
              <a href="/">Overview</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
