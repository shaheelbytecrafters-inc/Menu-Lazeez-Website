import { useState } from "react";
import { Fab, Popover, Typography, Box, Button } from "@mui/material";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import MoveToInboxIcon from "@mui/icons-material/MoveToInbox";

const HoverFilterButton = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const buttonStyle = {
    color: "gray",
    borderColor: "gray",
    borderWidth: 1.4, // Reduced border thickness
    borderRadius: "4rem",
    padding: "2px 8px", // Reduced padding
    fontSize: "0.75rem", // Decreased font size
    "&:hover": {
      borderColor: "gray",
      backgroundColor: "transparent",
      color: "black",
    },
  };

  const priceBtn = {
    ...buttonStyle,
    borderRadius: "3px",
    padding: "2px 8px", // Reduced padding
  };

  return (
    <Box>
      <Fab
        variant="extended"
        sx={{
          display: "flex",
          alignItems: "center",
          mt: 2,
          mb: "3px",
          zIndex: 1300,
          bgcolor: "white",
          color: "black",
        }}
        onClick={handleClick}
      >
        <FilterAltIcon sx={{ mr: 1 }} />
        Filter
      </Fab>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        sx={{
          zIndex: 1400,
          mt: 1,
        }}
      >
        <Box
          m={"1rem"} // Decreased margin
          sx={{
            width: {
              xs: "80vw",
              sm: "70vw",
              md: "45vw",
              lg: "25vw",
              xl: "20vw",
            },
            overflow: "hidden",
            maxHeight: "60vh", // Reduced height
            paddingRight: { xs: "12px", sm: "8px" },
          }}
        >
          <Typography
            sx={{
              textAlign: "end",
              fontSize: { xs: "0.7rem", sm: "0.8rem" }, // Decreased font size
              fontWeight: "bold",
              mb: 0.5,
              pr: { xs: "16px", sm: "10px" }, // Reduced padding-right
            }}
          >
            Reset All Filters
          </Typography>
          <Typography
            sx={{ fontSize: { xs: "0.7rem", sm: "0.9rem" }, mb: 1 }} // Decreased font size
          >
            Food Preference
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              gap: { xs: 0.5, sm: 0.8 },
              alignItems: "flex-start",
              flexWrap: "wrap",
            }}
          >
            <Button
              variant="outlined"
              href="#outlined-buttons"
              sx={buttonStyle}
            >
              Veg
            </Button>
            <Button
              variant="outlined"
              href="#outlined-buttons"
              sx={{
                ...buttonStyle,
                mt: { xs: 0.5, sm: 0 },
                ml: { xs: 0, sm: 0.4 },
              }}
            >
              Contains Egg
            </Button>
          </Box>
          <Box
            sx={{
              mt: 1,
              display: "flex",
              gap: { xs: 0.5, sm: 0.8 },
              flexWrap: "wrap",
            }}
          >
            <Button
              variant="outlined"
              href="#outlined-buttons"
              sx={buttonStyle}
            >
              Non Veg
            </Button>
          </Box>
          <Typography
            sx={{ fontSize: { xs: "0.7rem", sm: "0.9rem" }, mt: 1, mb: 1 }} // Decreased font size
          >
            Cuisine
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              gap: { xs: 0.5, sm: 0.8 },
              alignItems: "flex-start",
              flexWrap: "wrap",
            }}
          >
            <Button
              variant="outlined"
              href="#outlined-buttons"
              sx={buttonStyle}
            >
              World Cuisine
            </Button>
            <Button
              variant="outlined"
              href="#outlined-buttons"
              sx={{
                ...buttonStyle,
                mt: { xs: 0.5, sm: 0 },
                ml: { xs: 0, sm: 0.4 },
              }}
            >
              618 cal I Calorie
            </Button>
            <Button
              variant="outlined"
              href="#outlined-buttons"
              sx={{
                ...buttonStyle,
                mt: { xs: 0.5, sm: 0 },
                ml: { xs: 0, sm: 0.4 },
              }}
            >
              Universal
            </Button>
          </Box>
          <Typography
            sx={{ fontSize: { xs: "0.7rem", sm: "0.9rem" }, mt: 1, mb: 1 }} // Decreased font size
          >
            Trending
          </Typography>
          <Box>
            <Button
              variant="outlined"
              href="#outlined-buttons"
              sx={buttonStyle}
            >
              Best Offer
            </Button>
          </Box>
          <Typography
            sx={{ fontSize: { xs: "0.7rem", sm: "0.9rem" }, mt: 1, mb: 1 }} // Decreased font size
          >
            Price
          </Typography>
          <Button
            variant="outlined"
            endIcon={<MoveToInboxIcon />}
            sx={{ ...priceBtn }}
          >
            Price
          </Button>
        </Box>
        <Box
          sx={{
            padding: "0.8rem", // Decreased padding
            backgroundColor: "#D32F2F",
            textAlign: "center",
            fontSize: "0.9rem", // Decreased font size
            fontWeight: "bold",
            color: "white",
          }}
        >
          Apply (377 Dishes)
        </Box>
      </Popover>
    </Box>
  );
};

export default HoverFilterButton;
