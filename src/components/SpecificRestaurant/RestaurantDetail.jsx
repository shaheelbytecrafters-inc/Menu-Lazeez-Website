import React from "react";
import { Typography, Box, Chip } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import DirectionsBikeIcon from "@mui/icons-material/DirectionsBike";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  setQuery,
  fetchSearchResults,
} from "../../redux/searchSlice/searchSlice.js";

const RestaurantDetail = () => {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("query")?.toLowerCase() || "";
  const dispatch = useDispatch();

  const { results, status, error } = useSelector((state) => state.search);

  useEffect(() => {
    if (searchQuery.length > 0) {
      dispatch(fetchSearchResults(searchQuery));
      dispatch(setQuery(searchQuery));
    }
  }, [dispatch, searchQuery]);

  // Render loading, error, or empty states
  if (status === "loading") {
    return <Typography>Loading...</Typography>;
  }

  if (status === "failed") {
    return <Typography>Error: {error}</Typography>;
  }

  if (results.length === 0) {
    return <Typography>No results found</Typography>;
  }

  return (
    <Box sx={{ padding: "1rem", maxWidth: "800px", margin: "auto" }}>
      {results.map((restaurant) => (
        <Box
          key={restaurant.restaurantId}
          sx={{
            mb: 3,
            backgroundColor: "#fff", // White background for the dish-like card
            borderRadius: "12px", // Rounded corners
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)", // Subtle shadow
            padding: "1.5rem", // Increased padding
          }}
        >
          {/* Restaurant Name */}
          <Typography variant="h4" sx={{ fontWeight: "bold", color: "#333" }}>
            {restaurant.name}
          </Typography>

          {/* Rating and Price Section */}
          {/* <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}> */}
          <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
            <Chip
              icon={<StarIcon sx={{ color: "white" }} />}
              label={`${restaurant.rating} (${restaurant.reviewsCount} ratings)`}
              sx={{
                backgroundColor: "#4CAF50",
                color: "white",
                height: 30,
                fontWeight: "bold",
                fontSize: "14px",
                paddingLeft: 1,
                paddingRight: 1,
              }}
            />
            <Typography
              variant="body1"
              sx={{ marginLeft: "1rem", fontWeight: "bold" }}
            >
              ₹{restaurant.priceForOne} for one
            </Typography>
          </Box>

          {/* Location */}
          <Box sx={{ mt: 2 }}>
            <Typography
              variant="body1"
              sx={{ fontWeight: "bold", color: "#666" }}
            >
              Location
            </Typography>
            <Typography variant="body2" sx={{ color: "#555" }}>
              {restaurant.location.address}, {restaurant.location.city},{" "}
              {restaurant.location.state}, {restaurant.location.zipCode}
            </Typography>
          </Box>

          {/* Contact Details */}
          <Box sx={{ mt: 2 }}>
            <Typography
              variant="body1"
              sx={{ fontWeight: "bold", color: "#666" }}
            >
              Contact
            </Typography>
            <Typography variant="body2" sx={{ color: "#555" }}>
              Phone: {restaurant.contact.phone}
            </Typography>
            <Typography variant="body2" sx={{ color: "#555" }}>
              Email: {restaurant.contact.email}
            </Typography>
          </Box>

          {/* Delivery Distance and Fee */}
          {/* <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
            <DirectionsBikeIcon sx={{ marginRight: 1 }} />
            <Typography variant="body2" sx={{ color: "gray" }}>
              4.9 kms | ₹39 Delivery fee will apply
            </Typography>
          </Box> */}

          {/* Free Delivery Message */}
          {/* <Box
            sx={{
              backgroundColor: "#ffe0e0",
              padding: "0.5rem 1rem",
              mt: 2,
              borderRadius: "8px",
            }}
          > */}
          {/* <Typography
              variant="body1"
              color="error"
              sx={{ fontWeight: "bold" }}
            >
              Free delivery on orders above ₹199
            </Typography> */}
          {/* </Box> */}
        </Box>
      ))}
    </Box>
  );
};

export default RestaurantDetail;
