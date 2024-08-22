import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
} from "@mui/material";
import { styled } from "@mui/system";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link } from "react-router-dom";

// Custom styles for the arrow buttons
const ArrowButton = styled(Box)(({ direction }) => ({
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  cursor: "pointer",
  zIndex: 1,
  [direction]: direction === "left" ? "-10px" : "-10px", // Adjust this value to position the button
}));

// Custom Arrow Components
const PrevArrow = ({ onClick }) => (
  <ArrowButton direction="left" onClick={onClick}>
    <IconButton
      sx={{
        color: "white",
        background: "#D32F2F", // Initial background color
        "&:hover": {
          background: "#B71C1C", // Darker background color on hover
        },
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
        background: "#D32F2F", // Initial background color
        "&:hover": {
          background: "#B71C1C", // Darker background color on hover
        },
      }}
    >
      <ArrowForwardIosIcon />
    </IconButton>
  </ArrowButton>
);

function CardSlider() {
  const cards = [
    {
      image:
        "https://assets.cntraveller.in/photos/63d8e5103d7229d4cf308f01/16:9/w_1024%2Cc_limit/Prequel-lead.jpg",
      title: "Restaurant 1",
      description: "Description for Restaurant 1",
    },
    {
      image:
        "https://assets.cntraveller.in/photos/63d8e5103d7229d4cf308f01/16:9/w_1024%2Cc_limit/Prequel-lead.jpg",
      title: "Restaurant 2",
      description: "Description for Restaurant 2",
    },
    {
      image:
        "https://assets.cntraveller.in/photos/63d8e5103d7229d4cf308f01/16:9/w_1024%2Cc_limit/Prequel-lead.jpg",
      title: "Restaurant 3",
      description: "Description for Restaurant 3",
    },
    {
      image:
        "https://assets.cntraveller.in/photos/63d8e5103d7229d4cf308f01/16:9/w_1024%2Cc_limit/Prequel-lead.jpg",
      title: "Restaurant 4",
      description: "Description for Restaurant 4",
    },
    {
      image:
        "https://assets.cntraveller.in/photos/63d8e5103d7229d4cf308f01/16:9/w_1024%2Cc_limit/Prequel-lead.jpg",
      title: "Restaurant 5",
      description: "Description for Restaurant 5",
    },
    {
      image:
        "https://assets.cntraveller.in/photos/63d8e5103d7229d4cf308f01/16:9/w_1024%2Cc_limit/Prequel-lead.jpg",
      title: "Restaurant 6",
      description: "Description for Restaurant 6",
    },
    // Add more cards as needed
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    centerMode: false, // Ensure consistent spacing
    centerPadding: "0", // Ensure no additional padding is added in the center mode
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
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
  };

  return (
    <Box sx={{ paddingTop: "50px", paddingBottom: "50px" }}>
      <Typography
        variant="h4"
        sx={{
          fontSize: {
            xs: "1.4rem",
            sm: "1.5rem",
            md: "1.7rem",
            lg: "2rem",
          },
          pl: {
            xs: 2,
            sm: 4,
            md: 6,
            lg: 8,
          },
          pb: {
            xs: 0.8,
            sm: 1,
            md: 2,
            lg: 3,
          },
          fontWeight: "bold",
        }}
      >
        Popular restaurants
      </Typography>

      <Box
        sx={{
          width: "100%",
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "20px 0",
          position: "relative",
        }}
      >
        <Slider {...settings}>
          {cards.map((card, index) => (
            <Link to="/restrauntname" style={{textDecoration:"none"}} key={index}>
            <Box
              
              sx={{
                padding: "0 5px", // Reduced space around each card to ~5px
                boxSizing: "border-box",
              }}
            >
              <Card
                sx={{
                  borderRadius: "10px",
                  overflow: "hidden",
                  boxShadow: 3,
                  width: "100%", // Full width for responsiveness
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
                  <Button
                    variant="contained"
                    size="small"
                    fullWidth
                    sx={{
                      mt: "5px",
                      mb: 2,
                      backgroundColor: "#D32F2F", // Set button background color
                      color: "white", // Set button text color
                      "&:hover": {
                        backgroundColor: "#B71C1C", // Darker shade for hover effect
                      },
                    }}
                  >
                    Order now
                  </Button>
                </CardContent>
              </Card>
            </Box>
            </Link>
          ))}
        </Slider>
      </Box>
    </Box>
  );
}

export default CardSlider;