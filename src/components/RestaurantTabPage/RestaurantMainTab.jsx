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
import FlatwareIcon from "@mui/icons-material/Flatware";
import TwoWheelerIcon from "@mui/icons-material/TwoWheeler";
import DinningComponent from "../Dinning/DinningComponent";

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
        height: "100%",
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
          boxShadow: "none",
          marginInline: {
            lg: "5rem",
          },
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
              color: "black",
              "&.Mui-selected": {
                color: "#D32F2F", // Red color for selected tab
              },
              "&:hover": {
                color: "#D32F2F", // Red color on hover
              },
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
              minHeight: "auto",
              padding: isSmallScreen ? "10px 15px" : "20px 30px", // Adjust padding for small screens
              fontSize: isSmallScreen ? "1rem" : "1.5rem", // Adjust font size for small screens
              fontWeight: "bold",
              textTransform: "none",
            },
            "& .MuiTab-iconWrapper": {
              marginRight: "8px",
              fontSize: isSmallScreen ? "20px" : "30px", // Adjust icon size for small screens
            },
          }}
        >
          <Tab
            icon={
              <Box
                sx={{
                  padding: isSmallScreen ? "0.5rem" : "0.9rem", // Adjust padding for small screens
                  borderRadius: "50%",
                  backgroundColor: value === 0 ? "#bdf2f0" : "#fff",
                  transition: "background-color 0.3s ease",
                  "&:hover": {
                    backgroundColor: "#bdf2f0",
                  },
                }}
              >
                <FlatwareIcon
                  style={{ fontSize: isSmallScreen ? "20px" : "30px" }}
                />
              </Box>
            }
            label="Dining"
            {...a11yProps(0)}
          />

          <Tab
            icon={
              <Box
                sx={{
                  padding: isSmallScreen ? "0.5rem" : "0.9rem", // Adjust padding for small screens
                  borderRadius: "50%",
                  backgroundColor: value === 1 ? "#f7cd59" : "#fff",
                  transition: "background-color 0.3s ease",
                  "&:hover": {
                    backgroundColor: "#f7cd59",
                  },
                }}
              >
                <TwoWheelerIcon
                  style={{ fontSize: isSmallScreen ? "20px" : "30px" }}
                />
              </Box>
            }
            label="Delivery"
            {...a11yProps(1)}
          />

          <Tab
            icon={
              <Box
                sx={{
                  padding: isSmallScreen ? "0.5rem" : "0.9rem", // Adjust padding for small screens
                  borderRadius: "50%",
                  backgroundColor: value === 2 ? "#bdf2f0" : "#fff",
                  transition: "background-color 0.3s ease",
                  "&:hover": {
                    backgroundColor: "#bdf2f0",
                  },
                }}
              >
                <LiquorIcon
                  style={{ fontSize: isSmallScreen ? "20px" : "30px" }}
                />
              </Box>
            }
            label="Nightlife"
            {...a11yProps(2)}
          />
        </Tabs>
      </AppBar>
      <TabPanel
        value={value}
        index={0}
        dir={theme.direction}
        sx={{ width: "100%" }}
      >
        <DinningComponent/>
      </TabPanel>
      <TabPanel value={value} index={1} dir={theme.direction}>
        <Typography variant="h1" component="h1">
          {/* Deliver Page */}
          <DeliverPage />
        </Typography>
      </TabPanel>

      <TabPanel value={value} index={2} dir={theme.direction}>
        <Typography variant="h1" component="h1">
          NightLife
        </Typography>
      </TabPanel>
    </Box>
  );
}
