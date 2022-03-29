import React from "react";
import "./Team.css";

import image from "../../assets/index";

import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const teamData = [
  {
    id: 1,
    image: image.team1,
    name: "Joey Boy",
    position: "CEO",
  },
  {
    id: 2,
    image: image.team2,
    name: "Sandra Marie",
    position: "Supervisor",
  },
  {
    id: 3,
    image: image.team3,
    name: "Kosang Lando",
    position: "Shiller",
  },
  {
    id: 4,
    image: image.team4,
    name: "Aling Belen",
    position: "Marketing",
  },
];
const Team = () => {
  return (
    <div className="app__team section__padding">
      {/* title */}
      <div style={{ marginBottom: 50, position: "relative" }}>
        <h3 className="app__head-subtitle">Team</h3>
        <h1 className="app__head-title content__title">
          Our team is always here to help
        </h1>
      </div>

      {/* image */}
      <div className="app__wrapper">
        {teamData.map((item, index) => (
          <div className="app__team-container" key={index}>
            <img src={item.image} alt="" />
            <div className="app__team-overlay">
              <div className="app__team-text">
                <div className="app__team-icon-container">
                  <TwitterIcon className="app__team-icon" style={{fontSize: 32, marginTop: 10}} />
                  <FacebookIcon className="app__team-icon" style={{fontSize: 32, marginTop: 10}}/>
                  <InstagramIcon className="app__team-icon" style={{fontSize: 32, marginTop: 10}}/>
                  <LinkedInIcon className="app__team-icon" style={{fontSize: 32, marginTop: 10}}/>
                </div>

                <div className="app__team-text-bottom">
                  <p
                    className="app__p-text"
                    style={{
                      fontWeight: 700,
                      color: "#fff",
                      letterSpacing: 4,
                      padding: 0,
                    }}
                  >
                    {item.name}
                  </p>
                  <p className="app__p-text" style={{ color: "#fff" }}>
                    <i> {item.position} </i>
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
