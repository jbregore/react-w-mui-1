import React from "react";
import "./Hero.css";

import image from "../../assets/index";

const Hero = () => {
  return (
    <div className="app__container">
      <div className="app__hero app__wrapper section__padding">
        {/* left div */}
        <div className="app__wrapper_info">
          <h1 className="app__h1">Bettter digital experience with Ninestars</h1>
          <h2 className="app__h2">
            We are team of talented designers making websites with react
          </h2>
          <button className="app__button">Get Started</button>
        </div>

        {/* right div  */}
        <div className="app__wrapper_img">
          <img src={image.img1} alt="" className="img-bounce"/>
        </div>
      </div>
    </div>
  );
};

export default Hero;
