import React from "react";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
import InboxOutlinedIcon from "@mui/icons-material/InboxOutlined";
import "./About.css";
import image from "../../assets/index";


const About = () => {
  return (
    <div className="app__about app__wrapper section__padding">
      {/* img left */}
      
      <div className="app__wrapper_img">
        <img src={image.img2} alt=""/>
      </div>

      {/* text right */}
      <div className="app__wrapper_info" style={{ padding: "1rem" }}>
        <h1 className="app__head-title">
          Voluptatem dignissimos provident quasi
        </h1>
        <p className="app__p-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute
          irure dolor in reprehenderit
        </p>

        {/* bottom text */}
        <div className="app__wrapper" style={{marginTop: '1rem'}}>
          <div className="app__wrapper_info" >
            {/* icon  */}
            <HistoryEduIcon className="app__icon" style={{fontSize:60}}/>
            <h3 className="app__head-subtitle">Corporis voluptates</h3>
            <p className="app__p-text">
              Consequuntur sunt aut quasi enim aliquam quae harum pariatur
              laboris nisi ut aliquip
            </p>
          </div>

          <div className="app__wrapper_info" >
            <InboxOutlinedIcon className="app__icon" style={{fontSize:60}}/>
            <h3 className="app__head-subtitle">Ullamco laboris nisi</h3>
            <p className="app__p-text">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
