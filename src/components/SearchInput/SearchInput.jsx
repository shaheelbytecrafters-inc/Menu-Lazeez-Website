import { useState, useEffect } from "react";
import { TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Search } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import {
  setQuery,
  fetchSearchResults,
} from "../../redux/searchSlice/searchSlice.js";
import food from "../../../src/assets/images/food.jpeg";
// import StarRateIcon from "@mui/icons-material/StarRate";
import StarIcon from "@mui/icons-material/Star";
import SearchBarSlider from "./SearchBarSlider.jsx";
// import RestaurantCard from "../SpecificRestaurant/SpecificRestaurant.jsx";
// import SpecificRestaurant from "../SpecificRestaurant/Dish.jsx";
import CallingRestaurantPage from "../SpecificRestaurant/CallingRestaurantPage.jsx";
import {  useSearchParams } from "react-router-dom";
// import Dish from "../SpecificRestaurant/Dish.jsx";

const SearchInput = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedTerm, setDebouncedTerm] = useState(searchTerm);
 const [searchParams, setSearchParams] = useSearchParams();
  const { results, status, error } = useSelector((state) => state.search);

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

  return (
    <Box>
      <Box
        sx={{
          display: "block",
          textAlign: "center",
        }}
      >
        <TextField
          variant="outlined"
          placeholder="Search for restaurants and food"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          sx={{
            width: "70%",
            "& .MuiInputBase-input::placeholder": {
              fontWeight: "bold",
            },
            "& .MuiOutlinedInput-root": {
              "&:hover fieldset": {
                borderColor: "gray",
              },
              "&.Mui-focused fieldset": {
                borderColor: "gray",
              },
            },
          }}
          InputProps={{
            endAdornment: <Search style={{ color: "#282C3F" }} />,
          }}
        />
        <SearchBarSlider />
        <Box
          sx={{
            width: "70%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
            marginTop: "2rem",
            marginX: "auto",
            paddingBlock: "2rem",
          }}
        >
          {status === "loading" && <Typography>Loading...</Typography>}
          {status === "failed" && <Typography>Error: {error}</Typography>}
          {status === "succeeded" && (
            <>
              {Array.isArray(results) && results.length > 0 ? (
                getFilteredDishes(results).map((restaurant, index) => (
                  <Box key={index} sx={{ width: "100%" }}>
                    {restaurant.dishes.map((dish) => (
                      <Box
                        key={dish.dishId}
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          padding: "8px",
                          borderBottom: "1px solid #ccc",
                          backgroundColor: "white",
                          marginBottom: "1rem",
                        }}
                      >
                        <img
                          src={food}
                          alt={dish.name}
                          style={{
                            width: "6rem",
                            height: "5rem",
                            marginRight: "10px",
                            borderRadius: "5px",
                            color: "#3b3a39",
                          }}
                        />
                        <Box sx={{ textAlign: "left" }}>
                          <Typography
                            variant="h6"
                            sx={{
                              color: "#3b3a39",
                              fontSize: {
                                xs: "12px",
                                sm: "13px",
                                md: "14px",
                                lg: "15px",
                              },
                              lineHeight: "17px",
                              fontWeight: "bold",
                            }}
                          >
                            {dish.name}
                          </Typography>
                          <Box display="flex" alignItems="center">
                            <Typography component="div">
                              <Box
                                display="flex"
                                alignItems="center"
                                marginRight="2rem"
                              >
                                <StarIcon
                                  sx={{
                                    width: "0.8rem",
                                    height: "0.8rem",
                                    marginRight: "0.3rem",
                                    fontWeight: "bolder",
                                    color: "#3b3a39",
                                    marginBottom: "0.2rem",
                                  }}
                                />
                                <Box
                                  sx={{
                                    fontSize: "0.8rem",
                                    lineHeight: "1rem",
                                    fontWeight: "bolder",
                                    color: "#3b3a39",
                                  }}
                                >
                                  {dish.rating}
                                </Box>
                              </Box>
                            </Typography>
                            <Typography
                              variant="subtitle2"
                              color="#3b3a39"
                              fontWeight="bold"
                            >
                              ₹{dish.price} for two
                            </Typography>
                          </Box>

                          {/* Truncate description for small screens */}
                          <Typography
                            variant="subtitle2"
                            sx={{
                              color: "gray",
                              fontSize: { xs: "10px", sm: "12px", md: "14px" },
                              whiteSpace: { xs: "nowrap", sm: "normal" }, // Truncate only on small screens
                              overflow: { xs: "hidden", sm: "visible" },
                              textOverflow: { xs: "ellipsis", sm: "clip" },
                              maxWidth: { xs: "10rem", sm: "none" }, // Limit width for small screens
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

        <CallingRestaurantPage />
      
      </Box>
    </Box>
  );
};

export default SearchInput;
