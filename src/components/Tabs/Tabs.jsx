import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

export default function TabsScroll(props) {
  const { onChange, value, tabs } = props;
  //const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    //setValue(newValue);
    onChange?.(newValue);
  };

  return (
    <Tabs
      value={value}
      onChange={handleChange}
      variant="scrollable"
      scrollButtons="auto"
      aria-label="scrollable auto tabs example"
      style={{ backgroundColor: "#DCD8D8" }}
    >
      {tabs.map((tab, index) => (
        <Tab label={tab} key={index} />
      ))}
    </Tabs>
  );
}
