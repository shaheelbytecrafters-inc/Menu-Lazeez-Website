import React, { useEffect } from "react";
import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  setQuery,
  fetchSearchResults,
} from "../../redux/searchSlice/searchSlice.js";
import food from "../../../src/assets/images/food.jpeg";

// RestaurantCard component that accepts props
const SpecificRestaurant = () => {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("query")?.toLowerCase() || "";
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { results, status, error } = useSelector((state) => state.search);
  console.log("results======", results);
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
    <Box
      height="100%"
      width="100vw"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        height="auto"
        // width="860px"
        display="flex"
        flexWrap="wrap"
        gap="2rem"
        justifyContent="center"
        alignItems="center"
        marginInline="5rem"
      >
        {results.map((restaurant) => (
          <Card
            key={restaurant.restaurantId}
            sx={{
              display: "flex",
              borderRadius: "8px",
              width: 500,
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              position: "relative",
              height: "7rem",
              padding: "1rem",
              textAlign: "left",
            }}
            // onClick=(()=>navigate("/"))
            onClick={() =>
              navigate(`/specificDetails/${restaurant.restaurantId}`)
            } // Pass restaurantId in the URL
          >
            {/* Image and Discount Badge */}
            <Box sx={{ position: "relative" }}>
              {/* Ad Badge */}
              <Box
                sx={{
                  position: "absolute",
                  top: 8,
                  left: 8,
                  backgroundColor: "black",
                  color: "white",
                  padding: "2px 6px",
                  borderRadius: "4px",
                  fontSize: "10px",
                  zIndex: 1,
                }}
              >
                Ad
              </Box>
              {/* Card Image */}
              <CardMedia
                component="img"
                sx={{ width: 150, height: 110, borderRadius: "8px" }}
                image={food}
                alt={restaurant.name}
              />
            </Box>

            {/* Content Section */}
            <CardContent sx={{ paddingLeft: 2, paddingY: 1 }}>
              {/* Restaurant Name */}
              <Typography
                variant="subtitle1"
                noWrap
                sx={{
                  fontWeight: "bold",
                  fontSize: "18px",
                  maxWidth: "200px",
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                {restaurant.name}
              </Typography>

              {/* Rating and Price in Flex */}
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                mt={0.5}
              >
                {/* Rating */}
                <Box display="flex" alignItems="center">
                  <StarIcon sx={{ fontSize: "16px", color: "#fbc02d" }} />
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    sx={{ ml: 0.5, fontSize: "14px" }}
                  >
                    {restaurant.rating}
                  </Typography>
                </Box>

                {/* Price for One */}
                <Typography
                  variant="body2"
                  color="textSecondary"
                  sx={{ fontSize: "14px", ml: 2 }} // Added spacing for clarity
                >
                  ₹{restaurant.priceForOne} for one
                </Typography>
              </Box>

              {/* Location */}
              <Typography
                variant="body2"
                sx={{ fontSize: "12px", color: "#757575", mt: 0.5 }}
              >
                {restaurant.location.address}, {restaurant.location.city},
                {restaurant.location.state}, {restaurant.location.zipCode}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default SpecificRestaurant;
