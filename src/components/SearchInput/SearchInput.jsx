import React, { useState, useEffect } from "react";
import { TextField, Typography, Box } from "@mui/material";
import { Search } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import {
  setQuery,
  fetchSearchResults,
} from "../../redux/searchSlice/searchSlice.js";
import food from "../../../src/assets/images/food.jpeg";
import StarIcon from "@mui/icons-material/Star";
import SearchBarSlider from "./SearchBarSlider.jsx";
import { useNavigate, useSearchParams } from "react-router-dom";
import ShimmerDish from "./ShimmerDish.jsx";
import SearchGIF from "../../assets/images/Search.png"; // Path to your GIF

const SearchInput = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedTerm, setDebouncedTerm] = useState(searchTerm);
  const [searchParams, setSearchParams] = useSearchParams();
  const { results, isLoading, error } = useSelector((state) => state.search);
  const navigate = useNavigate();

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedTerm(searchTerm);
    }, 500); // 500ms debounce

    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm]);

  useEffect(() => {
    if (debouncedTerm) {
      dispatch(setQuery(debouncedTerm));
      dispatch(fetchSearchResults(debouncedTerm));
      setSearchParams({ query: debouncedTerm }); // Set the URL search param
    }
  }, [debouncedTerm, dispatch, setSearchParams]);

  const getFilteredDishes = (restaurants) => {
    if (!debouncedTerm) return [];

    let matchedDishes = [];
    restaurants.forEach((restaurant) => {
      const filteredMenu = restaurant.menu.filter((dish) =>
        dish.name.toLowerCase().includes(debouncedTerm.toLowerCase())
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

  const handleRestaurantClick = () => {
    navigate(`/restroAndDishes`, { state: { query: debouncedTerm } }); // Pass the search query in state
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center", // Center horizontally
        alignItems: "center", // Center vertically
        width: "100%",
        // bgcolor:"red"
        // minHeight: "100vh", // Ensure it takes full viewport height
      }}
    >
      <Box
        width={{ xs: "80%", sm: "85%", md: "75%" }} // Adjust width for responsiveness
        display="flex"
        flexDirection="column"
        justifyContent="center"
        // bgcolor="black"
        alignItems="center" // Center items vertically inside the column
      >
        <TextField
          variant="outlined"
          placeholder="Search for restaurants and food"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          sx={{
            width: { xs: "100%", sm: "100%", md: "100%" }, // Responsive width
            borderRadius: "30px", // Smoother round corners for a modern look

            "& .MuiInputBase-root": {
              // backgroundColor: "#F9F9F9", // Light grey for a cleaner look
              borderRadius: "30px", // Match the rounded corners of the outer container
              paddingRight: "3rem", // Increased padding to make space for the icon
            },
            "& .MuiInputBase-input": {
              padding: "12px 20px", // More padding for a comfortable typing experience
            },
            "& .MuiInputBase-input::placeholder": {
              fontWeight: "500",
              color: "#A0A0A0", // Lighter grey for a softer placeholder
            },
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "transparent", // Removing border for a clean look
              },
              "&:hover fieldset": {
                borderColor: "#DDDDDD", // Subtle border on hover
              },
              "&.Mui-focused fieldset": {
                borderColor: "#A0A0A0", // Flipkart's blue on focus
                border: "2px solid #A0A0A0",
              },
              borderRadius: "30px", // Matching outer container's rounded corners

              border: "1px solid #A0A0A0",
            },
          }}
          InputProps={{
            endAdornment: (
              <Search
                style={{
                  color: "#A0A0A0", // Flipkart's blue for the icon
                  fontSize: "2.3rem", // Keeping the large icon size
                  position: "absolute", // Align icon to the right inside the input
                  right: "20px", // More space for a balanced look
                }}
              />
            ),
            sx: {
              // paddingRight: "8px",
              backgroundColor: "#FFFFFF",
              marginBottom: "1rem",
            },
          }}
        />

        {/* {!searchTerm && <SearchBarSlider />} */}

        <Box
          sx={{
            width: "100%", // Ensure full width of inner box
            paddingBlock: "0.5rem",
            // bgcolor:"yellow",
            // paddingInline:"1rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {!searchTerm ? (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                // bgcolor:"green"
              }}
            >
              <Typography variant="h6" sx={{ color: "#9E9E9E" }}>
                Search for your favorite food!
              </Typography>
              <img
                src={SearchGIF}
                alt="Search"
                style={{
                  width: "70%",
                  height: "100%",
                  marginBottom: "1rem",
                }}
              />
            </Box>
          ) : isLoading ? (
            <ShimmerDish />
          ) : (
            <>
              {Array.isArray(results) && results.length > 0 ? (
                getFilteredDishes(results).map((restaurant, index) => (
                  <Box
                    key={index}
                    sx={{ width: "98%", cursor: "pointer" }}
                    onClick={handleRestaurantClick}
                  >
                    {restaurant.dishes.map((dish) => (
                      <Box
                        key={dish.dishId}
                        sx={{
                          display: "flex",
                          justifyContent:"space-between",
                          alignItems: "center",
                          padding: "10px",
                          borderBottom: "1px solid #eee",
                          borderRadius: "10px",
                          backgroundColor: "#fff",
                          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                          marginBottom: "1rem",
                          width: "95%",
                        }}
                      >
                        <img
                          src={food}
                          alt={dish.name}
                          style={{
                            width: "8rem",
                            height: "6rem",
                            marginRight: "16px",
                            borderRadius: "8px",
                            objectFit: "cover",
                          }}
                        />
                        <Box sx={{  flexGrow: 1 }}>
                          <Typography
                            variant="h6"
                            sx={{
                              color: "#3b3a39",
                              fontSize: { xs: "14px", sm: "16px", md: "16px" },
                              fontWeight: "600",
                              marginBottom: "0.1rem",
                            }}
                          >
                            {dish.name}
                          </Typography>

                          <Box
                            display="flex"
                            alignItems="center"
                            marginBottom="0.5rem"
                          >
                            <Box
                              display="flex"
                              alignItems="center"
                              marginRight="1.5rem"
                            >
                              <StarIcon
                                sx={{
                                  width: "1rem",
                                  height: "1rem",
                                  color: "#FFC107",
                                  marginRight: "0.3rem",
                                  marginBottom: "0.1rem",
                                }}
                              />
                              <Typography
                                sx={{
                                  fontSize: "0.9rem",
                                  fontWeight: "bold",
                                  color: "#3b3a39",
                                }}
                              >
                                {dish.rating}
                              </Typography>
                            </Box>

                            <Typography
                              sx={{
                                fontSize: "0.9rem",
                                fontWeight: "bold",
                                color: "#3b3a39",
                              }}
                            >
                              ₹{dish.price} for two
                            </Typography>
                          </Box>

                          <Typography
                            variant="subtitle2"
                            sx={{
                              color: "gray",
                              fontSize: { xs: "10px", sm: "12px", md: "14px" },
                              whiteSpace: { xs: "nowrap", sm: "normal" },
                              overflow: { xs: "hidden", sm: "visible" },
                              textOverflow: { xs: "ellipsis", sm: "clip" },
                              maxWidth: { xs: "10rem", sm: "none" },
                            }}
                          >
                            {dish.description}
                          </Typography>
                        </Box>
                      </Box>
                    ))}
                  </Box>
                ))
              ) : (
                <Typography>No results found.</Typography>
              )}
            </>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default SearchInput;
