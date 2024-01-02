import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./ExploreAccordion.css";

/**
 * Represents an accordion component used for exploring content.
 * @param {object} data - The data object containing the question and answer.
 * @returns {JSX.Element} The rendered ExploreAccordion component.
 */
const ExploreAccordion = ({ data }) => {
  return (
    <div className="exploreaccordion">
      <Accordion style={{ border: "1px solid #FFFFFF", borderRadius: "10px" }}>
        <AccordionSummary
          style={{
            background: "#121212",
            borderRadius: "10px",
            width: "1135px",
            height: "78px",
          }}
          expandIcon={
            <ExpandMoreIcon
              style={{ color: "#34C94B", width: "55px", height: "40px", scale: "2" }}
            />
          }
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography style={{ fontSize: "20px", color: "#FFFFFF" }}>
            {data.question}
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          style={{
            border: "1px solid #FFFFFF",
            background: "#FFFFFF",
            borderRadius: "0px 0px 10px 10px",
            width: "1135px",
            height: "70px",
            overflow: "scroll",
          }}
        >
          <Typography style={{ fontSize: "25px", color: "#121212" }}>
            {data.answer}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default ExploreAccordion;