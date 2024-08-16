import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { styled } from "@mui/system";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// Custom styles for the arrow buttons
const ArrowButton = styled("div")(({ direction, isHidden }) => ({
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  cursor: "pointer",
  zIndex: 1,
  [direction]: "-20px", // Positioning the arrow slightly outside the slider for a Zomato-like design
  display: isHidden ? "none" : "block", // Hide the button if it's at the edge
  color: "#000", // Black color for the icons
}));

function CardSlider() {
  const [hideLeftArrow, setHideLeftArrow] = useState(true);
  const [hideRightArrow, setHideRightArrow] = useState(false);

  const cards = [
    {
      title: "Card 1",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG3jTszSflQt-SjZGIWqJRegF0GrAVzpCQtg&s",
      description: "Description 1",
    },
    {
      title: "Card 2",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG3jTszSflQt-SjZGIWqJRegF0GrAVzpCQtg&s",
      description: "Description 2",
    },
    {
      title: "Card 3",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG3jTszSflQt-SjZGIWqJRegF0GrAVzpCQtg&s",
      description: "Description 3",
    },
    {
      title: "Card 4",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG3jTszSflQt-SjZGIWqJRegF0GrAVzpCQtg&s",
      description: "Description 4",
    },
    {
      title: "Card 5",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG3jTszSflQt-SjZGIWqJRegF0GrAVzpCQtg&s",
      description: "Description 5",
    },
  ];

  const settings = {
    dots: false,
    infinite: false, // Set to false to show/hide arrows at edges
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1, // Scrolls one card at a time
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: (
      <ArrowButton direction="right" isHidden={hideRightArrow}>
        <ArrowForwardIosIcon />
      </ArrowButton>
    ),
    prevArrow: (
      <ArrowButton direction="left" isHidden={hideLeftArrow}>
        <ArrowBackIosIcon />
      </ArrowButton>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    beforeChange: (current, next) => {
      // Hide the left arrow when on the first slide
      setHideLeftArrow(next === 0);
      // Hide the right arrow when on the last slide
      setHideRightArrow(next === cards.length - settings.slidesToShow);
    },
  };

  return (
    <Box sx={{ paddingTop: "50px" , paddingBottom:"50px"}}>
      {" "}
      {/* Added padding from the top */}
      <Box
        sx={{
          width: "90%",
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "20px 0",
          position: "relative",
        }}
      >
        <Slider {...settings}>
          {cards.map((card, index) => (
            <Box
              key={index}
              sx={{
                padding: "0 5px", // Adjusted padding to include space around each card
              }}
            >
              <Card
                sx={{
                  width: "calc(100% - 10px)", // Adjusted width to account for the padding on both sides
                  borderRadius: "10px",
                  overflow: "hidden",
                  boxShadow: 3,
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={card.image}
                  alt={card.title}
                />
                <CardContent>
                  <Typography variant="h6" component="div">
                    {card.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {card.description}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
}

export default CardSlider;
