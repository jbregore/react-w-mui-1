import React, { useState } from "react";
import "./Faq.css";

import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "1rem", color: '#eb5d1e' }} />}
    {...props}
  />
))(({ theme }) => ({
  borderBottom: `1px solid ${theme.palette.divider}`,
  paddingBottom: 10,
  paddingTop: 10,
  backgroundColor: 'rgb(254, 248, 245)',
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  backgroundColor: 'rgb(254, 248, 245)',
  textAlign: 'left'
}));

const accordionList = [
  {
    id: 'panel1',
    title: "Non consectetur a erat nam at lectus urna duis?",
    text: `Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. 
    Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.`
  },
  {
    id: 'panel2',
    title: "Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque?",
    text: `Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. 
    Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus 
    scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim.
     Mauris ultrices eros in cursus turpis massa tincidunt dui.`
  },
  {
    id: 'panel3',
    title: "Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi?",
    text: `Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. 
    Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit.
     Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. 
     Urna molestie at elementum eu facilisis sed odio morbi quis`
  },
  {
    id: 'panel4',
    title: "Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?",
    text: `Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. 
    Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus 
    scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. 
    Mauris ultrices eros in cursus turpis massa tincidunt dui.`
  },
  {
    id: 'panel5',
    title: "Tempus quam pellentesque nec nam aliquam sem et tortor consequat?",
    text: `Molestie a iaculis at erat pellentesque adipiscing commodo. 
    Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan.
     Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in`
  }
]

const Faq = () => {
  const [expanded, setExpanded] = useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className="app__faq section__padding">
      <div style={{ marginBottom: 50, position: "relative" }}>
        <h3 className="app__head-subtitle">F.A.Q</h3>
        <h1 className="app__head-title content__title">
          Frequently Asked Questions
        </h1>
      </div>

      {/* accordion */}
      <div>
        {accordionList.map((item, index) => (
          <Accordion
          expanded={expanded === item.id}
          onChange={handleChange(item.id)}
        >
          <AccordionSummary aria-controls={`${item.id}d-content`} id={`${item.id}d-header`}>
            <p className="app__p-text" style={{color: expanded === item.id ? '#eb5d1e' : "#555",
             fontWeight: 'bold', padding: 0}}>
              {item.title}
            </p>
          </AccordionSummary>
          <AccordionDetails>
            <p className="app__p-text">
            {item.text}
            </p>
          </AccordionDetails>
        </Accordion>
        ))}
        
      </div>
    </div>
  );
};

export default Faq;
