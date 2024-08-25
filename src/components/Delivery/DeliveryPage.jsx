import RestaurantCard from "../../card/RestaurantCard";
import data from "../../card/dummyCardData";
import { Box } from "@mui/material";
import HoverFilterButton from "./HoverFilterButton";

const DeliverPage = () => {
  return (
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
        <HoverFilterButton />
      </Box>

      {/* Container for the Restaurant Cards */}
      <Box display="flex" justifyContent="center">
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: {
              xs: "1rem",
              sm: "1.5rem",
              md: "2rem",
              lg: "3rem",
            },
            width: "95%",
            boxSizing: "border-box",
            paddingBlock: "1.5rem",
          }}
        >
          {/* Render Restaurant Cards */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "3rem",
              "@media (max-width: 1024px)": {
                flex: "1 1 calc(50% - 4rem)", // 2 cards per row on medium screens
              },
              "@media (max-width: 768px)": {
                flex: "1 1 calc(100% - 4rem)", // 1 card per row on small screens
              },
            }}
          >
            {data.map((restaurant) => (
              <RestaurantCard restaurant={restaurant} key={restaurant.id} />
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default DeliverPage;
