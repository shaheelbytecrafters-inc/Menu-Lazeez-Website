import { Box, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

export default function RestaurantCard({ restaurant }) {
  // Ensure location is an array or convert to array if it's a string
  const locationArray = Array.isArray(restaurant.location)
    ? restaurant.location
    : restaurant.location
    ? restaurant.location.split(",") // Split string by commas if it's a string
    : [];

  // Join locations with commas and add ellipses for overflow
  const locationText = locationArray.join(", ") || "Location not available";

  return (
    <Box
      sx={{
        borderRadius: "0.7rem",
        overflow: "hidden",
        maxWidth: "300px", // Increased the max width of the card
        width: "100%",
        backgroundColor: "#fff",
        transition: "box-shadow 0.3s ease",
        position: "relative",
        padding: "10px",
        "&:hover": {
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)", // Subtle shadow on hover
        },
      }}
    >
      <Box
        component="img"
        src={restaurant.image}
        alt={restaurant.name}
        sx={{
          display: "block",
          width: "100%",
          height: "240px", // Increased the height of the image
          objectFit: "cover",
          borderRadius: "0.7rem",
          marginBottom:"1rem"
        }}
      />

      <Box
        sx={{
          backgroundColor: "#fff",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "8px",

          }}
        >
          <Typography
            sx={{ fontSize: "1.1rem", fontWeight: "600", marginBottom: "0" }}
          >
            {`${restaurant.name}`}
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center", // Ensures content is vertically centered
              backgroundColor: "green",
              borderRadius: "4px",
              color: "white",
              height:"1rem",
              marginTop:"5px",
              padding:"2px"
            }}
          >
            <Typography
              fontSize="0.8rem"
              fontWeight="bold"
              sx={{ lineHeight: "1" }}
            >
              {restaurant.rating}
            </Typography>
            <StarIcon
              sx={{
                fontSize: "0.7rem",
                marginLeft: "2px", // Adds minimal space between the rating and the star icon
              }}
            />
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "8px",
          }}
        >
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              width: "55%",
            }}
          >
            {locationText}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            ₹{restaurant.price_for_two} for two
          </Typography>
        </Box>

        <Typography
          fontSize="0.8rem"
          color="text.secondary"
          textAlign={"end"}
          fontWeight="bold"
        >
          {`${restaurant.delivery_time}`}
        </Typography>
      </Box>
    </Box>
  );
}
