import React from "react";
import "./Footer.css";

import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <div className="footer section__padding">
      <div className="app__footer">
        <h1 className="app__p-text" style={{ fontSize: 24, color: "#555" }}>
          Join Our Newsletter
        </h1>
        <p className="app__p-text">
          Tamen quem nulla quae legam multos aute sint culpa legam noster magna
        </p>
        <div style={{ position: "relative", maxWidth: 550, margin: "auto" }}>
          <input type="email" className="app__footer-input" />
          <button className="app__button">Subscribe</button>
        </div>
      </div>

      <div className="app__wrapper" style={{ marginTop: 50 }}>
        {/* div 1  */}
        <div className="app__wrapper_info">
          <h3 className="app__head-subtitle">NineStars</h3>
          <p className="app__p-text" style={{fontSize: 14}}>
            A108 Adam Street <br />
            New York, NY 535022
            <br />
            United States
            <br />
          </p>
          <br />

          <p className="app__p-text" style={{ fontSize: 14, lineHeight: 0 }}>
            <b>Phone :</b> 09123456789
          </p>
          <p className="app__p-text" style={{ fontSize: 14 }}>
            <b>Email :</b> info@example.com
          </p>
        </div>

        {/* div 2 */}
        <div className="app__wrapper_info">
          <h3 className="app__head-subtitle">Useful Links</h3>
          <ul>
            <li> <span className="footer__arrow-right">&#8250; </span> Home</li>
            <li> <span className="footer__arrow-right">&#8250; </span> About us</li>
            <li> <span className="footer__arrow-right">&#8250; </span> Services</li>
            <li> <span className="footer__arrow-right">&#8250; </span> Terms of service</li>
            <li> <span className="footer__arrow-right">&#8250; </span> Privacy policy</li>
          </ul>
        </div>

        {/* div 3 */}
        <div className="app__wrapper_info">
          <h3 className="app__head-subtitle">Our Services</h3>
          <ul>
            <li> <span className="footer__arrow-right">&#8250; </span> Web Design</li>
            <li> <span className="footer__arrow-right">&#8250; </span> Web Development</li>
            <li> <span className="footer__arrow-right">&#8250; </span> Product Management</li>
            <li> <span className="footer__arrow-right">&#8250; </span> Marketing</li>
            <li> <span className="footer__arrow-right">&#8250; </span> Graphic Design</li>
          </ul>
        </div>

        {/* div 4 */}
        <div className="app__wrapper_info">
          <h3 className="app__head-subtitle">Our Social Networks</h3>
          <p className="app__p-text">
            Cras fermentum odio eu feugiat lide par naso tierra videa magna
            derita valies
          </p>

          <div>
            <TwitterIcon className="footer__icon" style={{marginLeft: -5}}/>
            <FacebookIcon className="footer__icon"/>
            <InstagramIcon className="footer__icon"/>
            <LinkedInIcon className="footer__icon"/>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
