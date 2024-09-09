import { Box, Button, Typography } from "@mui/material";
import HomePageCard from "./HomePageCard"; // Assuming this is the card component
import data from "../card/dummyCardData"; // Import the data array
import { useNavigate } from "react-router-dom";

const HomePageCardCalling = () => {
  const navigate = useNavigate();

  const handleShowMoreClick = () => {
    // Scroll to the top of the page
    window.scrollTo({ top: 0, behavior: "smooth" });

    // Navigate to the desired page
    navigate("/foodDetails");
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <Typography
        sx={{
          textAlign: "Left",
          fontSize: { xs: "1.5rem", sm: "2rem" },
          fontWeight: "bold",
          marginBlock: "2rem",
        }}
      >
        MealMate
      </Typography>
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
              lg: "repeat(4,1fr)",
            },
            width: "90%",
            justifyItems: "center", // Center items within their grid columns
          }}
        >
          {data.slice(0, 8).map((restaurant) => (
            <HomePageCard key={restaurant.id} restaurant={restaurant} />
          ))}
        </Box>
      </Box>

      <Box sx={{ textAlign: "center", marginBlock: "20px" }}>
        <Button
          variant="contained"
          // className="button-90"
          sx={{
            // backgroundColor: " #f24a07",
            backgroundColor: "#fe0604 ",

            color: "white",
            "&:hover": {
              backgroundColor: " #fe0604",
            },
            fontSize: "1.3rem",
            fontWeight: "bold",
            textTransform: "none",
          }}
          onClick={handleShowMoreClick}
        >
          Show More
        </Button>
      </Box>
    </Box>
  );
};

export default HomePageCardCalling;
