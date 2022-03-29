import React from "react";
import "./Portfolio.css";
import AddIcon from '@mui/icons-material/Add';
import LinkIcon from '@mui/icons-material/Link';
import image from "../../assets/index";

const imagePortfolio = [
  {
    id: 1,
    source: image.portfolio1,
  },
  {
    id: 2,
    source: image.portfolio2,
  },
  {
    id: 3,
    source: image.portfolio3,
  },
  {
    id: 4,
    source: image.portfolio4,
  },
  {
    id: 5,
    source: image.portfolio5,
  },
  {
    id: 6,
    source: image.portfolio6,
  },
  {
    id: 7,
    source: image.portfolio7,
  },
  {
    id: 8,
    source: image.portfolio8,
  },
  {
    id: 9,
    source: image.portfolio9,
  },
];

const Portfolio = () => {
  return (
    <div className="app__portfolio section__padding">
      {/* title */}
      <div style={{ marginBottom: 50, position: 'relative' }}>
        <h3 className="app__head-subtitle">Portfolio</h3>
        <h1 className="app__head-title content__title">Check out our beautiful portfolio</h1>
      </div>

      {/* img col */}
      <div className="app__wrapper">
        {imagePortfolio.map((item, index) => (
          <div className="app__portfolio-container">
            <img src={item.source} alt="" />
            <div className="app__portfolio-overlay">
              <div className="app__portfolio-text">
                <div className="app__portfolio-icon-container">
                  <AddIcon  
                  style={{backgroundColor: '#fff', color: "#eb5d1e",
                  borderRadius: '50%', fontSize: 35, margin: 'auto', padding: 5}}/>
                  <LinkIcon size={40} 
                  style={{backgroundColor: '#fff', color: "#eb5d1e",
                  borderRadius: '50%', fontSize: 35,  margin: 'auto', padding: 5}}/>
                </div>

                <div className="app__portfolio-text-bottom">
                  <p className="app__p-text" style={{ fontWeight: 700 }}>
                    Lorem
                  </p>
                  <p className="app__p-text">Lorem ipsum</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
