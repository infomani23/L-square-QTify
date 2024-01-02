import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Carousel from "../Carousel/Carousel.jsx";

function CustomTabPanel({ value, index, children }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      {value === index && (
        <Box sx={{ marginLeft: "-30px", padding: "0px 0px" }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function FilterSection({album}) {
  const [value, setValue] = useState(0);
  const [genre, setGenre] = useState([]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  

  useEffect(() => {
    const fetchGenre= async() =>{
      try{
        const req= await fetch("https://qtify-backend-labs.crio.do/genres");
        const reqData= await req.json();
        setGenre(reqData.data);
      }
      catch(error)
      {
        console.log("Error fetching genre", error);
      }
    }
    fetchGenre();
  }, []);

  const genreList= ["Jazz", "Rock", "Pop", "Blues"];

  const filterSongs= (type) => {
    return album.filter((elem, index) => {
      return elem.genre.label === type
    });
  }

  return (
    <Box sx={{ width: "100%", paddingTop: "15px" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          sx={{
            '& .MuiTabs-flexContainer': {
              '& button': {
                color: 'var(--color--white)', 
                fontSize: "16px",
                fontFamily: "Poppins",
                fontWeight:"600" 
              },
            },
          }}
          TabIndicatorProps={{
            style: {
              backgroundColor: 'var(--color--primary)',
            },
          }}
        >
          <Tab label="All" {...a11yProps(0)} />
          {
            genre.map((elem, index) => (
              <Tab label={elem.label} {...a11yProps(index+1)} />
            ))
          }
        </Tabs>

      </Box>

      <CustomTabPanel value={value} index={0}>
        <Carousel album={album} cardType={false} />
      </CustomTabPanel>

      {
  genreList.map((elem, index) => (
    <CustomTabPanel key={elem} value={value} index={index+1}>
      <Carousel album={filterSongs(elem)} cardType={false} />
    </CustomTabPanel>
  ))
}

    </Box>
  );
}

export default FilterSection;