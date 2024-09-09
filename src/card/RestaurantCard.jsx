import { Box, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { useNavigate } from "react-router-dom";

export default function RestaurantCard({ restaurant }) {
  const navigate=useNavigate()
  const locationArray = Array.isArray(restaurant.location)
    ? restaurant.location
    : restaurant.location
    ? restaurant.location.split(",")
    : [];

  const locationText = locationArray.join(", ") || "Location not available";


  return (
    <Box
      sx={{
        borderRadius: "0.5rem",
        overflow: "hidden",
        width: "95%", // Ensures the card takes full width of the grid column
        transition: "box-shadow 0.3s ease",
        boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.1)",
        "&:hover": {
          boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.3)",
        },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "1rem",
      }}
      onClick={() => navigate("/restaurantname")}
    >
      <Box
        component="img"
        src={restaurant.image}
        alt={restaurant.name}
        sx={{
          display: "block",
          width: "100%",
          height: "200px",
          objectFit: "cover",
          borderRadius: "7px",
          marginBottom: "1rem",
        }}
      />

      <Box sx={{ width: "100%" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "0.5rem",
          }}
        >
          <Typography
            sx={{
              fontSize: "1rem",
              fontWeight: "600",
            }}
          >
            {restaurant.name}
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "green",
              borderRadius: "4px",
              color: "white",
              height: "1rem",
              padding: "2px",
            }}
          >
            <Typography fontSize="0.7rem" fontWeight="bold">
              {restaurant.rating}
            </Typography>
            <StarIcon
              sx={{
                fontSize: "0.6rem",
                marginLeft: "2px",
              }}
            />
          </Box>
        </Box>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {locationText}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          ₹{restaurant.price_for_two} for two
        </Typography>

        <Typography
          fontSize="0.7rem"
          color="text.secondary"
          textAlign={"left"}
          fontWeight="bold"
        >
          {restaurant.delivery_time}
        </Typography>
      </Box>
    </Box>
  );
}
