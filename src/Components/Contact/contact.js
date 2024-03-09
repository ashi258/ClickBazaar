import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faPhone } from "@fortawesome/free-solid-svg-icons";

import "./contact.css";
const Body = () => {
  return (
    <div className="body-main">
      <div className="body-t-C">
        <div className="address-t-main">
          <div className="address-t">
            <span>
              <FontAwesomeIcon
                icon={faMapMarkerAlt}
                style={{ color: "red", fontSize: "30px" }}
              />{" "}
              Sector 32, Gurgaon
            </span>

            <span
              className="aihp-Exe"
              style={{ fontSize: "70px", marginRight: "5px" }}
            >
              AIHP EXECUTIVE
            </span>
            <span
              className="aihp-Exe"
              style={{ fontSize: "70px", marginRight: "5px" }}
            >
              CENTER
            </span>
            <div className="addr-mediaquery">
              <div
                className="contact-text-address"
                style={{ display: "flex", flexDirection: "row" }}
              >
                <div style={{ color: "red", fontSize: "30px" }}>&#8226;</div>
                <div style={{ marginLeft: "5px", fontSize: "30px" }}>
                  2000+ Seats Available
                </div>
              </div>
              <div
                className="contact-text-address"
                style={{ display: "flex", flexDirection: "row" }}
              >
                <div style={{ color: "red", fontSize: "30px" }}>&#8226;</div>
                <div style={{ marginLeft: "5px", fontSize: "30px" }}>
                  Nearest Metro Station Huda City Centre
                </div>
              </div>
              <div
                className="contact-text-address"
                style={{ display: "flex", flexDirection: "row" }}
              >
                <div style={{ color: "red", fontSize: "30px" }}>&#8226;</div>
                <div style={{ marginLeft: "5px", fontSize: "30px" }}>
                  Near Medanta Hospital
                </div>
              </div>
            </div>
            <div className="get-touch" style={{ marginTop: "10px" }}>
              <a href="tel:YourPhoneNumber" style={{ textDecoration: "none" }}>
                <span
                  className="get-touch-call"
                  style={{
                    color: "white",
                    backgroundColor: "red",
                    padding: "5px 10px",
                    marginRight: "415px",
                  }}
                >
                  <FontAwesomeIcon
                    icon={faPhone}
                    style={{ color: "white", marginRight: "5px" }}
                  />
                  Get in touch
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="contact-f">
          <div
            class="elementor-element elementor-element-f45f2dd e-flex e-con-boxed e-con e-child"
            data-id="f45f2dd"
            data-element_type="container"
            data-settings='{"background_background":"classic","content_width":"boxed"}'
          >
            <div class="e-con-inner">
              <div
                class="elementor-element elementor-element-9ee7bad elementor-widget elementor-widget-text-editor"
                data-id="9ee7bad"
                data-element_type="widget"
                data-widget_type="text-editor.default"
              ></div>
              <div
                class="elementor-element elementor-element-d309594 elementor-button-align-stretch elementor-widget elementor-widget-form"
                data-id="d309594"
                data-element_type="widget"
                data-settings='{"step_next_label":"Next","step_previous_label":"Previous","button_width":"100","step_type":"number_text","step_icon_shape":"circle"}'
                data-widget_type="form.default"
              >
                <div class="elementor-widget-container">
                  <form
                    class="elementor-form"
                    method="post"
                    name="Google Leads"
                  >
                    <div>
                      <p>
                        <span
                          style={{
                            color: "#1f1f1f",
                            textAlign: "center",
                            display: "block",
                          }}
                        >
                          Get In Touch
                        </span>
                      </p>
                    </div>
                    <input type="hidden" name="post_id" value="1649" />
                    <input type="hidden" name="form_id" value="d309594" />
                    <input
                      type="hidden"
                      name="referer_title"
                      value="Fully Furnished & Premium offices Space for Rent in Gurgaon"
                    />
                    <input type="hidden" name="queried_id" value="1649" />
                    <div class="elementor-form-fields-wrapper elementor-labels-">
                      <div class="elementor-field-type-text elementor-field-group elementor-column elementor-field-group-name elementor-col-100">
                        <input
                          size="1"
                          type="text"
                          name="form_fields[name]"
                          id="form-field-name"
                          class="elementor-field elementor-size-sm elementor-field-textual"
                          placeholder="Name"
                        />
                      </div>
                      <div class="elementor-field-type-email elementor-field-group elementor-column elementor-field-group-email elementor-col-100 elementor-field-required">
                        <input
                          size="1"
                          type="email"
                          name="form_fields[email]"
                          id="form-field-email"
                          class="elementor-field elementor-size-sm elementor-field-textual"
                          placeholder="Email"
                          required="required"
                          aria-required="true"
                        />
                      </div>
                      <div class="elementor-field-type-text elementor-field-group elementor-column elementor-field-group-field_acbe126 elementor-col-100 elementor-field-required">
                        <input
                          size="1"
                          type="text"
                          name="form_fields[field_acbe126]"
                          id="form-field-field_acbe126"
                          class="elementor-field elementor-size-sm elementor-field-textual"
                          placeholder="Phone No."
                          required="required"
                          aria-required="true"
                        />
                      </div>
                      <div class="elementor-field-type-textarea elementor-field-group elementor-column elementor-field-group-message elementor-col-100">
                        <textarea
                          class="elementor-field-textual elementor-field elementor-size-sm"
                          name="form_fields[message]"
                          id="form-field-message"
                          rows="4"
                          placeholder="Message"
                        ></textarea>
                      </div>
                      <div class="elementor-field-group elementor-column elementor-field-type-submit elementor-col-100 e-form__buttons submit-btn">
                        <button
                          type="submit"
                          class="elementor-button elementor-size-sm"
                        >
                          <span>
                            <span class="elementor-align-icon-left elementor-button-icon">
                              <i aria-hidden="true" class="far fa-envelope"></i>
                            </span>
                            <span class="elementor-button-text">Submit </span>
                          </span>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
