import { Box, Button, Typography } from "@mui/material";
import RestaurantCard from "../../card/RestaurantCard";
import data from "../../card/dummyCardData";
// import HoverFilterButton from "../Delivery/HoverFilterButton";

const NightlifeComponent = () => {
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
            {data.map((restaurant) => (
              <RestaurantCard key={restaurant.id} restaurant={restaurant} />
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default NightlifeComponent;
