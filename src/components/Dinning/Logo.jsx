import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Card, CardMedia, IconButton, Typography } from "@mui/material";
import { styled } from "@mui/system";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// Custom styles for the arrow buttons
const ArrowButton = styled(Box)(({ direction }) => ({
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  cursor: "pointer",
  zIndex: 1,
  [direction]: direction === "left" ? "17px" : "17px",
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
        left: "-25px",
        top:"-20px",
        position: "absolute",
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
        right: "-5px",
        bottom:"-20px",
        position: "absolute",
      }}
    >
      <ArrowForwardIosIcon />
    </IconButton>
  </ArrowButton>
);

function Logo() {
  const cards = [
    {
      image:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRSYdfOYlAVZDhwXqqdf3C9KuJ53kRWkvKJ0ltzSnCcphhSKDGG",
    },
    {
      image:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRSYdfOYlAVZDhwXqqdf3C9KuJ53kRWkvKJ0ltzSnCcphhSKDGG",
    },
    {
      image:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRSYdfOYlAVZDhwXqqdf3C9KuJ53kRWkvKJ0ltzSnCcphhSKDGG",
    },
    {
      image:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRSYdfOYlAVZDhwXqqdf3C9KuJ53kRWkvKJ0ltzSnCcphhSKDGG",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjKEHoDOOMNp-wXRHDoFP9_LRtyKsvLHX43A&s",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjKEHoDOOMNp-wXRHDoFP9_LRtyKsvLHX43A&s",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjKEHoDOOMNp-wXRHDoFP9_LRtyKsvLHX43A&s",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjKEHoDOOMNp-wXRHDoFP9_LRtyKsvLHX43A&s",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Default number of slides to show
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


  return (
    <Box sx={{ paddingBottom: "50px" }}>
      <Box
        sx={{
          width: "100%",
          maxWidth: "1200px", // Increased the maxWidth for larger containers
          margin: "0 auto",
          position: "relative",
        }}
      >
        {/* Brown Container */}
        <Box
          sx={{
            // backgroundColor: "#A52A2A", // Changed brown to a hex value for consistency
            padding: "20px",
            // display:"flex",
            justifyContent:"center",
            alignItems:"center",
            borderRadius: "12px", // Added border-radius for rounded corners
            position: "relative",
            // paddingLeft: "50px", // Add left padding to the entire slider container
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
                  KFC
                </Typography>
              </Box>
            ))}
          </Slider>
        </Box>
      </Box>
    </Box>
  );
}

export default Logo;