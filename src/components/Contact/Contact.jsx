import React from "react";
import "./Contact.css";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";

import image from "../../assets/index";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const Contact = () => {
  return (
    <div className="app__contact section__padding">
      <div style={{ marginBottom: 50, position: "relative" }}>
        <h3 className="app__head-subtitle">Contact Us</h3>
        <h1 className="app__head-title content__title">
          Contact us to get started
        </h1>
      </div>

      <div className="app__wrapper">
        {/* address */}
        <div className="app__wrapper_info-30 app__contact-card" 
        style={{height: 550, }}>
          <div className="app__wrapper-contact">
            <div className="app__wrapper_info">
              <LocationOnIcon
                style={{ padding: 10, fontSize: 50 }}
                className="app__contact-icon"
              />
            </div>
            <div className="app__contact-address">
              <h3 className="app__head-subtitle">Location : </h3>
              <p className="app__p-text" style={{ fontSize: 16 }}>
                A108 Adam Street, New York, NY 535022
              </p>
            </div>
          </div>
          <div className="app__wrapper-contact">
            <div className="app__wrapper_info">
              <EmailIcon
                style={{ padding: 10, fontSize: 50 }}
                className="app__contact-icon"
              />
            </div>
            <div className="app__contact-address">
              <h3 className="app__head-subtitle">Email : </h3>
              <p className="app__p-text" style={{ fontSize: 16 }}>
                info@example.com
              </p>
            </div>
          </div>
          <div className="app__wrapper-contact">
            <div className="app__wrapper_info">
              <PhoneIphoneIcon
                style={{ padding: 10, fontSize: 50 }}
                className="app__contact-icon"
              />
            </div>
            <div className="app__contact-address">
              <h3 className="app__head-subtitle">Call : </h3>
              <p className="app__p-text" style={{ fontSize: 16 }}>
                09123456789
              </p>
            </div>
          </div>
          <br />
          <div className="app__wrapper" style={{width: '100%'}}>
            <img src={image.address} alt="" style={{ width: "100%", }} />
          </div>
        </div>

        {/* email */}
        <div className="app__wrapper_info-70 app__contact-card" 
        style={{justifyContent: 'flex-start', height: 550}}>
          <div className="app__wrapper-contact" style={{ width: "100%", }}>
            <div className="app__wrapper_info">
              <p className="app__contact-email-text">Your Name : </p>
              <input
                className="app__contact-input"
                type="text"
                placeholder="Your Name"
              />
            </div>
            <div className="app__wrapper_info" style={{ paddingRight: 0 }}>
              <p className="app__contact-email-text">Your Email : </p>
              <input
                className="app__contact-input"
                type="text"
                placeholder="Your Email"
              />
            </div>
          </div>
          <br />

          <div className="" style={{ width: "100%", textAlign: "left" }}>
            <p className="app__contact-email-text">Subject : </p>
            <input
              className="app__contact-input"
              type="text"
              placeholder="Subject"
            />
            <br />
          </div>
          <br />

          <div className="" style={{ width: "100%", textAlign: "left" }}>
            <p className="app__contact-email-text">Message : </p>
            <textarea
              rows="10"
              cols="50"
              className="app__contact-input"
            ></textarea>
            <br />
          </div>
          <br /><br /><br />

          <div style={{width: '100%'}}>
            <button className="app__button" style={{ borderRadius: 5, margin: 'auto' }}>
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
