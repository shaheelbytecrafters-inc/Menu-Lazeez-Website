import { Box, Button, Typography } from "@mui/material";
import RestaurantCard from "../../card/RestaurantCard";
// import data from "../../card/dummyCardData";
import { fetchRestaurants } from "../../redux/restaurantSlice/Allrestaurant";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import ShimmerUiCard from "./ShimmerUiCrad";
// import HoverFilterButton from "../Delivery/HoverFilterButton";

const NightlifeComponent = () => {
  const dispatch = useDispatch();
  const { restaurants, isLoading, error } = useSelector(
    (state) => state.restaurants

  );

  // Fetch data when component mounts
   useEffect(() => {
     if (!restaurants.length) {
       dispatch(fetchRestaurants());
     }
   }, [dispatch, restaurants.length]);
  
  if (isLoading) {
    return <ShimmerUiCard />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }


  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "grid",
              gap: "3rem",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, 1fr)",
                md: "repeat(3, 1fr)",
                lg: "repeat(3,1fr)",
              },
              width: "90%",
              justifyItems: "center",
            }}
          >
            {console.log("++++++++++++++", restaurants)}
            {restaurants.map((restaurant) => (
              <RestaurantCard
                key={restaurant.restaurantId}
                restaurant={restaurant}
                restaurantId={restaurant.restaurantId}
              />
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default NightlifeComponent;
