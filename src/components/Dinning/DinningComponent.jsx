// import React from "react";
import { Box } from "@mui/material";
import data from "../../card/dummyCardData";
import RestaurantCard from "../../card/RestaurantCard";
import HoverFilterButton from "../Delivery/HoverFilterButton";

const DinningComponent = () => {
  return (
    <>
      <Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "left",
            marginLeft: {
              xs: "1rem",
              sm: "3rem",
              md: "5rem",
              lg: "6rem",
            },
          }}
        >
          {/* <Logo/> */}
          <HoverFilterButton />
        </Box>
        <Box
          sx={{
            display: "flex", // Flex container
            flexWrap: "wrap", // Allows wrapping of cards onto multiple lines
            justifyContent: "center", // Centers cards horizontally
            gap: "16px", // Gap between cards
            padding: "16px",
          }}
        >
          {data.map((restaurant) => (
            <Box
              key={restaurant.id}
              sx={{
                flex: "1 1 calc(25% - 32px)", // Default to 4 cards per row
                maxWidth: "345px", // Optional: set a maximum width for each card
                boxSizing: "border-box",
                "@media (max-width: 1024px)": {
                  flex: "1 1 calc(33.33% - 32px)", // 3 cards per row on medium screens
                },
                "@media (max-width: 768px)": {
                  flex: "1 1 calc(50% - 32px)", // 2 cards per row on small screens
                },
                "@media (max-width: 480px)": {
                  flex: "1 1 calc(100% - 32px)", // 1 card per row on very small screens
                },
              }}
            >
              <RestaurantCard restaurant={restaurant} />
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default DinningComponent;
