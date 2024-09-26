import { useState, useEffect } from "react";
import { TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Search } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import {
  setQuery,
  fetchSearchResults,
} from "../../redux/searchSlice/searchSlice.js";

const SearchInput = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedTerm, setDebouncedTerm] = useState(searchTerm);

  const { results, status, error } = useSelector((state) => state.search);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedTerm(searchTerm);
    }, 500); // 500ms debounce

    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm]);

  // Fetch search results after debounce delay
  useEffect(() => {
    if (debouncedTerm) {
      dispatch(setQuery(debouncedTerm));
      dispatch(fetchSearchResults(debouncedTerm));
    }
  }, [debouncedTerm, dispatch]);

  // Filter through restaurant menu items
  const getFilteredDishes = (restaurants) => {
    if (!debouncedTerm) return [];

    let matchedDishes = [];

    // Log the current search term
    console.log("Search term:", debouncedTerm);

    // Loop through each restaurant and filter its menu
    restaurants.forEach((restaurant) => {
      console.log("Restaurant object:", restaurant); // Log the restaurant object

      if (!restaurant.name) {
        console.error("Restaurant name not found:", restaurant); // Log missing name
        return;
      }

      const filteredMenu = restaurant.menu.filter((dish) =>
        dish.name.toLowerCase().includes(debouncedTerm.toLowerCase())
      );

      if (filteredMenu.length > 0) {
        matchedDishes.push({
          restaurantName: restaurant.name, // Check this field
          dishes: filteredMenu,
        });
      }
    });

    console.log("Matched Dishes:", matchedDishes); // Log the matched dishes
    return matchedDishes;
  };

  return (
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
        onChange={(e) => setSearchTerm(e.target.value)} // Update search term on input change
        sx={{
          width: "70%",
          margin: "0 auto",
          "& .MuiInputBase-input::placeholder": {
            fontWeight: "bold",
          },
          "& .MuiOutlinedInput-root": {
            "&:hover fieldset": {
              borderColor: " gray",
            },
            "&.Mui-focused fieldset": {
              borderColor: " gray",
            },
          },
        }}
        InputProps={{
          endAdornment: <Search style={{ color: "#282C3F" }} />,
        }}
      />

      <Box
        sx={{
          height: "100vh",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          marginTop: "2rem",
          marginX: "auto",
        }}
      >
        {/* Handle loading state */}
        {status === "loading" && <Typography>Loading...</Typography>}

        {/* Handle error state */}
        {status === "failed" && <Typography>Error: {error}</Typography>}

        {/* Display search results */}
        {status === "succeeded" && (
          <>
            {Array.isArray(results) && results.length > 0 ? (
              getFilteredDishes(results).map((restaurant, index) => (
                <Box
                  key={index}
                  sx={{
                    width: "70%",
                    marginBottom: "20px",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{ color: "black", fontWeight: "bold" }}
                  >
                    {restaurant.restaurantName || "Unknown Restaurant"}{" "}
                    {/* Add fallback */}
                  </Typography>
                  {restaurant.dishes.map((dish) => (
                    <Box
                      key={dish.dishId}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        padding: "8px",
                        borderBottom: "1px solid #ccc",
                      }}
                    >
                      <img
                        src={dish.image}
                        alt={dish.name}
                        style={{
                          width: "64px",
                          height: "64px",
                          marginRight: "10px",
                        }}
                      />
                      <Box sx={{ textAlign: "left" }}>
                        <Typography
                          variant="h6"
                          sx={{
                            color: "black",
                            fontSize: "15px",
                            lineHeight: "17px",
                          }}
                        >
                          {dish.name}
                        </Typography>
                        <Typography
                          variant="subtitle2"
                          sx={{ color: "gray", fontSize: "14px" }}
                        >
                          {dish.description}
                        </Typography>
                        <Typography variant="subtitle2">
                          ₹{dish.price}
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
  );
};

export default SearchInput;
