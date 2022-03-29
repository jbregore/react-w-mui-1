import React from "react";
import SportsBasketballOutlinedIcon from '@mui/icons-material/SportsBasketballOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';

import "./Services.css";
import { Box } from "@mui/material";
const Services = () => {
  return (
    <div className="app__services section__padding">
      <div style={{marginBottom: 50, position: 'relative'}}>
        <h3 className="app__head-subtitle">Services</h3>
        <h1 className="app__head-title content__title">
          Check out the great services we offer
        </h1>
      </div>

      {/* grid 4 rows */}
      <div className="app__wrapper" >
        {/* div 1  */}
        <Box className="app__wrapper_info" sx={{ boxShadow: 1, }}>
          {/* icon  */}
          <SportsBasketballOutlinedIcon className="app__icon" style={{fontSize:60}}/>
          <h3 className="app__head-subtitle">Lorem Ipsum</h3>
          <p className="app__p-text">
            Voluptatum deleniti atque corrupti quos dolores et quas molestias
            excepturi sint occaecati cupiditate
          </p>
        </Box>

        {/* div 2 */}
        <Box className="app__wrapper_info" sx={{ boxShadow: 1 }}>
          {/* icon  */}
          <ArticleOutlinedIcon className="app__icon" style={{fontSize:60}}/>
          <h3 className="app__head-subtitle">Sed ut perspiciatis</h3>
          <p className="app__p-text">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla
          </p>
        </Box>

        {/* div 3 */}
        <Box className="app__wrapper_info" sx={{ boxShadow: 1 }}>
          {/* icon  */}
          <AdminPanelSettingsOutlinedIcon className="app__icon" style={{fontSize:60}}/>
          <h3 className="app__head-subtitle">Magni Dolores</h3>
          <p className="app__p-text">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim
          </p>
        </Box>

        {/* div 4 */}
        <Box className="app__wrapper_info" sx={{ boxShadow: 1 }}>
          {/* icon  */}
          <PublicOutlinedIcon className="app__icon" style={{fontSize:60}}/>
          <h3 className="app__head-subtitle">Nemo Enim</h3>
          <p className="app__p-text">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum
          </p>
        </Box>
      </div>
    </div>
  );
};

export default Services;
