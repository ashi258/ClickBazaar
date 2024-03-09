import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

import "./footer.css";
const footer = () => {
  return (
    <footer className="footer">
      <div className="contact-details">Contact Details</div>
      <div className="footer-content">
        <div className="f-c-item-list">
          <div className="icon">
            <FontAwesomeIcon
              icon={faEnvelope}
              style={{ color: "red", marginRight: "5px" }}
            />
          </div>
          <div> www.aihp.in</div>
        </div>
        <div className="f-c-item-list">
          <div className="phone-icon">
            <FontAwesomeIcon
              icon={faPhone}
              style={{ color: "red", marginRight: "5px" }}
            />{" "}
          </div>
          <div> 6287865130</div>
        </div>
        <div className="f-c-item-list">
          <div className="gmail-icon">
            <FontAwesomeIcon
              icon={faEnvelope}
              style={{ color: "red", marginRight: "5px" }}
            />{" "}
          </div>
          <div>ashish@gmail.com</div>
        </div>
      </div>
    </footer>
  );
};

export default footer;
