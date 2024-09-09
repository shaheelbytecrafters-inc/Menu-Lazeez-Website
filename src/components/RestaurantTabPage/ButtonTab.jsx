import * as React from "react";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import DeliverPage from "../Delivery/DeliveryPage";
import DinningComponent from "../Dinning/DinningComponent";
import MainNightLife from "../NightLifePage/MainNightLife";

export default function ButtonTab() {
  const [value, setValue] = React.useState(0);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleButtonClick = (index) => {
    setValue(index);
  };

  return (
    <Box
      sx={{
        width: "100vw",
        typography: "body1",
        // backgroundColor: "black",
      }}
    >
      <AppBar
        position="static"
        sx={{
          bgcolor: "#fff",
          boxShadow: "none",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: isSmallScreen ? "space-between" : "flex-start",
            gap: isSmallScreen ? "0.5rem" : "1rem",
            padding: isSmallScreen ? "10px" : "20px",
          }}
        >
          {/* Dining Button */}
          <Button
            onClick={() => handleButtonClick(0)}
            // className="button-90"
            // startIcon={<FlatwareIcon />}
            // startIcon={
            //   <img
            //     src={spoon}
            //     alt="Delivery"
            //     style={{ width: isSmallScreen ? "20px" : "30px", color:"red" }}
            //   />
            // }
            sx={{
              color: value === 0 ? "#fff" : "#fe0604",
              backgroundColor: value === 0 ? "#fe0604" : "#fff",
              border: "2px solid #fe0604",
              transition: "background-color 0.3s ease, color 0.3s ease",
              padding: isSmallScreen ? "15px 20px" : "20px 25px",
              "&:hover": {
                backgroundColor: value === 0 ? "#fe0604" : "#fff",
                color: value === 0 ? "#fff" : "#fe0604",
              },
              height: "2rem",
              // textTransform: "none",
              fontSize: "1.2rem",
              fontWeight: "550",
            }}
          >
            Dining
          </Button>

          {/* Delivery Button */}
          <Button
            onClick={() => handleButtonClick(1)}
            // className="button-90"
            // startIcon={
            //   <img
            //     src={bike}
            //     alt="Delivery"
            //     style={{ width: isSmallScreen ? "20px" : "30px" }}
            //   />
            // }
            sx={{
              color: value === 1 ? "#fff" : "#fe0604",
              backgroundColor: value === 1 ? "#fe0604" : "#fff",
              border: "2px solid #fe0604",
              transition: "background-color 0.3s ease, color 0.3s ease",
              padding: isSmallScreen ? "15px 20px" : "20px 25px",
              "&:hover": {
                backgroundColor: value === 1 ? "#fe0604" : "#fff",
                color: value === 1 ? "#fff" : "#fe0604",
              },
              height: "2rem",
              // textTransform: "none",
              fontSize: "1.2rem",
              fontWeight: "550",
            }}
          >
            Delivery
          </Button>

          {/* Nightlife Button */}
          <Button
            onClick={() => handleButtonClick(2)}
            // className="button-90"
            // startIcon={
            //   <img
            //     src={glass}
            //     alt="Delivery"
            //     style={{ width: isSmallScreen ? "20px" : "30px" }}
            //   />
            // }
            sx={{
              color: value === 2 ? "#fff" : "#fe0604",
              backgroundColor: value === 2 ? "#fe0604" : "#fff",
              border: "2px solid #fe0604",
              transition: "background-color 0.3s ease, color 0.3s ease",
              padding: isSmallScreen ? "15px 20px" : "20px 25px",
              "&:hover": {
                backgroundColor: value === 2 ? "#fe0604" : "#fff",
                color: value === 2 ? "#fff" : "#fe0604",
              },
              height: "2rem",
              // textTransform: "none",
              fontSize: "1.2rem",
              fontWeight: "550",
            }}
          >
            Nightlife
          </Button>
        </Box>
      </AppBar>

      {/* Conditional Rendering based on selected value */}
      {value === 0 && (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            width: "100%",
          }}
        >
          <DinningComponent />
        </Box>
      )}
      {value === 1 && (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            width: "100%",
          }}
        >
          <DeliverPage />
        </Box>
      )}
      {value === 2 && (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            width: "100%",
          }}
        >
          {/* <Typography variant="h5">Nightlife</Typography> */}
          <MainNightLife/>
        </Box>
      )}
    </Box>
  );
}
