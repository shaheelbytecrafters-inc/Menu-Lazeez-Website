import {
  CardContent,
  Typography,
  Box,
  Button,
  CardMedia,
  Divider,
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import StarIcon from "@mui/icons-material/Star";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  setQuery,
  fetchSearchResults,
} from "../../redux/searchSlice/searchSlice.js";
import food from "../../../src/assets/images/food.jpeg";

const Dish = () => {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("query")?.toLowerCase() || "";
  const dispatch = useDispatch();

  const { results, status, error } = useSelector((state) => state.search);
  console.log(results,"++++++++++++++++++++++++++++++++++")

  useEffect(() => {
    if (searchQuery.length > 0) {
      dispatch(fetchSearchResults(searchQuery));
      dispatch(setQuery(searchQuery));
    }
  }, [dispatch, searchQuery]);

  // Function to filter dishes based on the search query
  const getFilteredDishes = (restaurants, searchTerm) => {
    if (!searchTerm) return [];

    let matchedDishes = [];
    restaurants.forEach((restaurant) => {
      const filteredMenu = restaurant.menu.filter((dish) =>
        dish.name.toLowerCase().includes(searchTerm.toLowerCase())
      );

      if (filteredMenu.length > 0) {
        matchedDishes.push({
          restaurantName: restaurant.name,
          dishes: filteredMenu,
        });
      }
    });
    return matchedDishes;
  };

  // Get filtered dishes based on the search query
  const filteredDishes = getFilteredDishes(results, searchQuery);

  // Render loading, error, or empty states
  if (status === "loading") {
    return <Typography>Loading...</Typography>;
  }

  if (status === "failed") {
    return <Typography>Error: {error}</Typography>;
  }

  if (filteredDishes.length === 0) {
    return <Typography>No results found</Typography>;
  }

  return (
    <Box
      height="100%"
      width="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        height="auto"
        width="860px"
        display="flex"
        flexWrap="wrap"
        justifyContent="center"
        alignItems="center"
        marginInline="5rem"
      >
        {filteredDishes.map(({ restaurantName, dishes }) =>
          dishes.map((dish, index) => (
            <Box
              key={index}
              sx={{
                borderRadius: "8px",
                // Width: "370px",
                border: "1px solid #eee",
                margin: "16px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                height:"270px",
                width:"370px"

              }}
            >
              {/* Vendor Info Section */}
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                px={2}
                pt={2}
              >
                <Box>
                  <Typography
                    variant="subtitle2"
                    color="textSecondary"
                    sx={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    {restaurantName}
                  </Typography>
                  <Box display="flex" alignItems="center" mt={0.5}>
                    <StarIcon sx={{ fontSize: "16px", color: "#fbc02d" }} />
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      sx={{ ml: 0.5, fontSize: "14px" }}
                    >
                      {dish.rating} · {dish.reviewsCount} reviews
                    </Typography>
                  </Box>
                </Box>
                <ArrowForwardIosIcon
                  sx={{ fontSize: "16px", color: "#757575" }}
                />
              </Box>

              {/* Divider */}
              <Divider
                sx={{ width: "90%", marginTop: "10px", marginLeft: "1rem" }}
              />

              {/* Content Section */}
              <Box
                sx={{ display: "flex", padding: "16px", borderRadius: "10px" }}
              >
                <Box>
                  <CardMedia
                    component="img"
                    sx={{
                      width: 120,
                      height: 120,
                      borderRadius: "8px",
                      objectFit: "cover",
                    }}
                    image={food}  // Use default image if dish image not found
                    alt={dish.name || "Dish image"}
                  />
                  <Box mt={1} display="flex" justifyContent="center">
                    <Button
                      variant="contained"
                      sx={{
                        fontFamily: "Poppins, sans-serif",
                        bgcolor: "red",
                        fontSize: "14px",
                        fontWeight: 600,
                        px: 3,
                        py: 0.5,
                        textTransform: "none",
                      }}
                    >
                      ADD
                    </Button>
                  </Box>
                </Box>

                {/* Product Info */}
                <Box flex={1} sx={{ marginLeft: "30px" }}>
                  <CardContent sx={{ padding: "0" }}>
                    <Typography
                      variant="h6"
                      sx={{
                        fontFamily: "Poppins, sans-serif",
                        fontSize: "18px",
                        fontWeight: 600,
                      }}
                    >
                      {dish.name || "Dish Name"}
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "Poppins, sans-serif",
                        fontSize: "18px",
                        fontWeight: "bold",
                        color: "black",
                        mt: 1,
                      }}
                    >
                      ₹{dish.price || "Price"}
                    </Typography>
                  </CardContent>
                </Box>
              </Box>
            </Box>
          ))
        )}
      </Box>
    </Box>
  );
};

export default Dish;
