import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

const Filter = () => {
  const [value, setValue] = React.useState("one");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: "100%" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="white"
        TabIndicatorProps={{
          style: {
            height: "5px",
            borderRadius: "20px",
            backgroundColor: "#34C94B",
          },
        }}
        aria-label="wrapped label tabs example"
      >
        <Tab value="one" label="All" wrapped />
        <Tab value="two" label="Rock" />
        <Tab value="three" label="Pop" />
        <Tab value="four" label="Jazz" />
        <Tab value="five" label="Blues" />
      </Tabs>
    </Box>
  );
};

export default Filter;