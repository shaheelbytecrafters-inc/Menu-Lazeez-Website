import * as React from "react";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import DeliverPage from "../Delivery/DeliveryPage";
import LiquorIcon from "@mui/icons-material/Liquor";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%", // Ensure full height for the panel
      }}
    >
      {value === index && (
        <Box sx={{ p: 1, width: "100%" }}>
          <Typography variant="h5" component="div">
            {children}
          </Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function RestaurantMainTab() {
  const [value, setValue] = React.useState(0);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        width: "100%",
        typography: "body1",
        backgroundColor: "#fff",
      }}
    >
      <AppBar
        position="static"
        sx={{
          bgcolor: "#fff",
          boxShadow: "none"
          // boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant={isSmallScreen ? "fullWidth" : "standard"}
          scrollButtons="auto"
          TabIndicatorProps={{
            style: {
              backgroundColor: "#D32F2F", // Red indicator color
            },
          }}
          sx={{
            "& .MuiTab-root": {
              color: "gray",
              "&.Mui-selected": {
                color: "#D32F2F", // Red color for selected tab
              },
              "&:hover": {
                color: "#D32F2F", // Red color on hover
              },
              display: "flex",
              alignItems: "center", // Align items vertically in the center
              justifyContent: "center", // Center items horizontally
              flexDirection: "row", // Ensure icon and label are in the same row
              minHeight: "auto",
              padding: "20px 30px", // Adjust padding as needed
              fontSize: "1rem",
              fontWeight: "bold",
              textTransform: "none", // Prevent uppercase transformation
            },
            "& .MuiTab-iconWrapper": {
              marginRight: "8px", // Space between icon and label
            },
          }}
        >
          <Tab
            icon={<LiquorIcon style={{ fontSize: "24px" }} />}
            label="Dining"
            {...a11yProps(0)}
          />

          <Tab
            icon={<LiquorIcon style={{ fontSize: "24px" }} />}
            label="Delivery"
            {...a11yProps(1)}
          />

          <Tab
            icon={<LiquorIcon style={{ fontSize: "24px" }} />}
            label="Nightlife"
            {...a11yProps(2)}
          />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0} dir={theme.direction}>
        <Typography variant="h1" component="h1">
          Dining Out
        </Typography>
      </TabPanel>
      <TabPanel
        value={value}
        index={1}
        dir={theme.direction}
        sx={{ width: "100%" }}
      >
        <DeliverPage />
      </TabPanel>
      <TabPanel value={value} index={2} dir={theme.direction}>
        <Typography variant="h1" component="h1">
          Nightlife
        </Typography>
      </TabPanel>
    </Box>
  );
}
