import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  Box,
  Button,
  Card,
  CardMedia,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useState } from "react";
import "./Variety.css";

// Custom styles for the arrow buttons
const ArrowButton = styled(Box)(({ direction }) => ({
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  cursor: "pointer",
  zIndex: 1,
  [direction]: direction === "left" ? "20px" : "20px", // Set both arrows to 20px from the edge
}));

// Custom Arrow Components
const PrevArrow = ({ onClick }) => (
  <ArrowButton direction="left" onClick={onClick}>
    <IconButton
      sx={{
        color: "white",
        background: "#D32F2F",
        "&:hover": {
          background: "#B71C1C",
        },
        position: "absolute",
        left: "-25px",
        top: "-20px", // Adjusted position for better centering on iPad screens
      }}
    >
      <ArrowBackIosIcon />
    </IconButton>
  </ArrowButton>
);

const NextArrow = ({ onClick }) => (
  <ArrowButton direction="right" onClick={onClick}>
    <IconButton
      sx={{
        color: "white",
        background: "#D32F2F",
        "&:hover": {
          background: "#B71C1C",
        },
        position: "absolute",
        right: "-5px",
        bottom: "-20px", // Adjusted position for better centering on iPad screens
      }}
    >
      <ArrowForwardIosIcon />
    </IconButton>
  </ArrowButton>
);

function Variety() {
  const [showMore, setShowMore] = useState(false);

  const cards = [
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYBaq4Tg743zKNnRi1c_eEdVoLRp9JreJefQ&s",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYBaq4Tg743zKNnRi1c_eEdVoLRp9JreJefQ&s",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0EbtAMkvjstpwiT8oSwwiPDJXVpC_KAaHdw&s",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0EbtAMkvjstpwiT8oSwwiPDJXVpC_KAaHdw&s",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0EbtAMkvjstpwiT8oSwwiPDJXVpC_KAaHdw&s",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0EbtAMkvjstpwiT8oSwwiPDJXVpC_KAaHdw&s",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYBaq4Tg743zKNnRi1c_eEdVoLRp9JreJefQ&s",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYBaq4Tg743zKNnRi1c_eEdVoLRp9JreJefQ&s",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6, // Default number of slides to show
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    centerMode: false,
    centerPadding: "0",
    responsive: [
      {
        breakpoint: 1440, // Large screens, show 5 cards
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024, // Medium screens, show 3 cards
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // Tablets, show 2 cards
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // Small screens, show 1 card
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const visibleCards = showMore ? cards.length : 4;

  return (
    <Box sx={{ paddingBottom: "50px" }}>
      <Box
        sx={{
          width: "100%",
          maxWidth: "1200px",
          margin: "0 auto",
          position: "relative",
        }}
      >
        {/* Grid layout for small screens */}
        <Box
          className={"gridBox"}
          sx={{
            // backgroundColor:"red",
            display: { xs: "flex", sm: "none" },
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            py: { xs: "8px" }, // Add margin from left on small screens
          }}
        >
          <Box sx={{ width: "95%", paddingLeft: "12px" }}>
            <Grid container spacing={2}>
              {cards.slice(0, visibleCards).map((card, index) => (
                <Grid item xs={3} key={index}>
                  <Card
                    sx={{
                      overflow: "hidden",
                      boxShadow: 3,
                      height: {
                        xs: "75px", // Height for extra small screens (mobile)
                      },
                      width: {
                        xs: "75px", // Width for extra small screens (mobile)
                      },
                      margin: {
                        // xs:"8px",
                        // sm:"10px",
                      },
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "50%",
                      backgroundColor: card.bgColor,
                    }}
                  >
                    <CardMedia
                      component="img"
                      sx={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                      image={card.image}
                      alt={`Image ${index + 1}`}
                    />
                  </Card>
                  <Typography
                    variant="caption"
                    sx={{
                      textAlign: "center",
                      display: "block",
                      marginTop: "5px",
                      marginRight: "10px",
                    }}
                  >
                    Cake
                  </Typography>
                </Grid>
              ))}
            </Grid>

            {/* Show More/Less Button */}
            <Box sx={{ textAlign: "center", marginTop: "15px" }}>
              <Button
                variant="contained"
                color="primary"
                onClick={() => setShowMore((prev) => !prev)}
              >
                {showMore ? "Show Less" : "Show More"}
              </Button>
            </Box>
          </Box>
        </Box>

        {/* Slider layout for larger screens */}
        <Box
          sx={{
            display: { xs: "none", sm: "block" }, // Show slider only on larger screens
            // backgroundColor: "#A52A2A", // Changed brown to a hex value for consistency
            padding: "20px",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "12px", // Added border-radius for rounded corners
            position: "relative",
          }}
        >
          <Slider {...settings}>
            {cards.map((card, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  justifyContent: "center", // Center cards in their container
                  padding: "10px", // Add padding to manage space between cards
                }}
              >
                <Card
                  sx={{
                    overflow: "hidden",
                    boxShadow: 3,
                    width: {
                      xs: "80px",
                      sm: "100px",
                      md: "120px",
                      lg: "150px",
                    }, // Adjust the width for each screen size
                    height: {
                      xs: "80px",
                      sm: "100px",
                      md: "120px",
                      lg: "150px",
                    }, // Adjust the height for each screen size
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "50%",
                  }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                    image={card.image}
                    alt={`Image ${index + 1}`}
                  />
                </Card>
                <Typography
                  variant="caption"
                  sx={{
                    textAlign: "center",
                    display: "block",
                    marginTop: "5px",
                    fontSize: "16px",
                    marginRight: "30px",
                  }}
                >
                  Cake
                </Typography>
              </Box>
            ))}
          </Slider>
        </Box>
      </Box>
    </Box>
  );
}

export default Variety;
