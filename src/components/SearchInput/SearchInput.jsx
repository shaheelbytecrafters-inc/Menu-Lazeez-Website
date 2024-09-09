// import React from "react";
import { TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Search } from "@mui/icons-material";

// Sample data array for mapping
const cardData = [
  {
    imgSrc:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/nm6d4975bcmgfzirbax3",
    heading: "Biryani",
    subheading: "Dish",
  },
  {
    imgSrc:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/nm6d4975bcmgfzirbax3",
    heading: "Hyderabadi Biryani",
    subheading: "Dish",
  },
  {
    imgSrc:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/nm6d4975bcmgfzirbax3",
    heading: "Pizza Hut",
    subheading: "Italian",
  },
  {
    imgSrc:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/nm6d4975bcmgfzirbax3",
    heading: "Pizza Hut",
    subheading: "Italian",
  },
  {
    imgSrc:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/nm6d4975bcmgfzirbax3",
    heading: "Pizza Hut",
    subheading: "Italian",
  },
  {
    imgSrc:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/nm6d4975bcmgfzirbax3",
    heading: "Pizza Hut",
    subheading: "Italian",
  },
  // Add more objects as needed
];

const SearchInput = () => {
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
        sx={{
          width: "70%",
          margin: "0 auto",
          "& .MuiInputBase-input::placeholder": {
            fontWeight: "bold",
          },
          "& .MuiOutlinedInput-root": {
            "&:hover fieldset": {
              borderColor: " gray", // Changes border color on hover
            },
            "&.Mui-focused fieldset": {
              borderColor: " gray", // Keeps border color black on focus
            },
          },
        }}
        InputProps={{
          endAdornment: <Search style={{ color: "#282C3F" }} />,
        }}
      />

      {/* Outer Container */}
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
        {/* Map through the card data array */}
        {cardData.map((card, index) => (
          <Box
            key={index}
            sx={{
              height: {
                sm: "80px",
                md: "92px",
              },
              width: "65%",
              // border: "1px solid blue",
              display: "flex",
              alignItems: "center",
              padding: "8px",
            }}
          >
            <img
              src={card.imgSrc}
              alt={card.heading}
              style={{
                width: "64px",
                height: "64px",
                marginRight: "10px",
              }}
            />
            <Box sx={{ textAlign: "left" }}>
              <Typography
                variant="h6"
                sx={{ color: "black", fontSize: "15px", lineHeight: "17px" }}
              >
                {card.heading}
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{ color: "gray", fontSize: "14px" }}
              >
                {card.subheading}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default SearchInput;
