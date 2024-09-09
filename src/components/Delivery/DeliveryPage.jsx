import RestaurantCard from "../../card/RestaurantCard";
import data from "../../card/dummyCardData";
import { Box } from "@mui/material";
// import Variety from "./Variety";
// import Logo from "./Logo";
// import HoverFilterButton from "./HoverFilterButton";
import MyLogo from "./MyLogo";
import VarietySlider from "./VarietySlider"

const DeliverPage = () => {
  return (
    <Box
    sx={{
      width:"100vw"
    }}>
      <Box
        // backgroundColor="red"
        sx={{
          marginInline: {
            lg: "3rem",
            xl: "2rem",
          },
        }}
      >
        {/* <Variety />  */}
        {/* <Logo />*/}
        <MyLogo/>
        <VarietySlider/>
      
      </Box>

      {/* Container for the Restaurant Cards */}
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
    // </Box>
  );
};

export default DeliverPage;
