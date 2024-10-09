import  { useEffect, useState } from "react";
import SpecificRestaurant from "./SpecificRestaurant";
import { Button, Box } from "@mui/material";
import Dish from "./Dish";
import { useLocation } from "react-router-dom";
// import RestaurantDetail from "./RestaurantDetail";

const CallingRestaurantPage = () => {
  // State to toggle between Restaurant and Dishes
  const [showRestaurant, setShowRestaurant] = useState(false);
    const location = useLocation();
     const searchParams = new URLSearchParams(location.search);
     const query = searchParams.get("query");

  useEffect(() => {
    if (query) {
      // Perform the API call with the query
      console.log("Fetching data for:", query);
      // Dispatch an action or call API to fetch results
    }
  }, [query]);

  return (
    <Box sx={{display:"flex",justifyContent:"center",alignItems:"center", width:"100vw" }}>
      {/* Buttons aligned to the left */}
      <Box>
        <Box
          sx={{
            marginBottom: "2rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            variant={showRestaurant ? "contained" : "none"}
            onClick={() => setShowRestaurant(true)}
            sx={{
              marginRight: "1rem",
              textTransform: "none",
              fontSize: "1rem",
              fontWeight: "bold",
              backgroundColor: showRestaurant ? "#fe0604" : "transparent",
              color: showRestaurant ? "white" : "red",
              border: showRestaurant ? "none" : "1px solid red",
              // padding:"5px",
              "&:hover": {
                backgroundColor: "#fe0604",
                color: "white",
              },
            }}
          >
            Restaurant
          </Button>
          <Button
            variant={!showRestaurant ? "contained" : "none"}
            onClick={() => setShowRestaurant(false)}
            sx={{
              textTransform: "none",
              fontSize: "1rem",
              fontWeight: "bold",

              backgroundColor: !showRestaurant ? "#fe0604" : "transparent",
              color: !showRestaurant ? "white" : "red",
              border: !showRestaurant ? "none" : "1px solid red",
              "&:hover": {
                backgroundColor: "red",
                color: "white",
              },
            }}
          >
            Dishes
          </Button>
        </Box>
        <Box>{showRestaurant ? <SpecificRestaurant /> : <Dish />}</Box>
      </Box>
    </Box>
  );
};

export default CallingRestaurantPage;
