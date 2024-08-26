import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Card, IconButton, CardMedia, Typography } from "@mui/material";
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
  [direction]: direction === "left" ? "-30px" : "-30px", // Adjust this value to position the button
  "@media (max-width: 768px)": {
    [direction]: direction === "left" ? "-15px" : "-15px", // Adjust for smaller screens
  },
}));

const PrevArrow = ({ onClick }) => (
  <ArrowButton direction="left" onClick={onClick}>
    <IconButton
      sx={{
        height: "35px",
        width: "35px",
        color: "black",
        background: "#fff",
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        "&:hover": {
          background: "#fff",
        },
      }}
    >
      <ArrowBackIosIcon sx={{ height: "20px", width: "20px" }} />
    </IconButton>
  </ArrowButton>
);

const NextArrow = ({ onClick }) => (
  <ArrowButton direction="right" onClick={onClick}>
    <IconButton
      sx={{
        height: "35px",
        width: "35px",
        color: "black",
        background: "#fff",
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        "&:hover": {
          background: "#fff",
        },
      }}
    >
      <ArrowForwardIosIcon sx={{ height: "20px", width: "20px" }} />
    </IconButton>
  </ArrowButton>
);

function Variety() {
  const cards = [
    {
      image:
        "https://b.zmtcdn.com/data/dish_images/d5ab931c8c239271de45e1c159af94311634805744.png",
    },
    {
      image:
        "https://b.zmtcdn.com/data/dish_images/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.png",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0EbtAMkvjstpwiT8oSwwiPDJXVpC_KAaHdw&s",
    },
    {
      image:
        "https://b.zmtcdn.com/data/dish_images/d5ab931c8c239271de45e1c159af94311634805744.png",
    },
    {
      image:
        "https://b.zmtcdn.com/data/dish_images/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.png",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0EbtAMkvjstpwiT8oSwwiPDJXVpC_KAaHdw&s",
    },
    {
      image:
        "https://b.zmtcdn.com/data/dish_images/d5ab931c8c239271de45e1c159af94311634805744.png",
    },
    {
      image:
        "https://b.zmtcdn.com/data/o2_assets/8dc39742916ddc369ebeb91928391b931632716660.png",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 430,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Box
      sx={{
        paddingTop: "50px",
        paddingBottom: "50px",
        paddingInline: "20px",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          marginBottom: "20px",
          fontWeight: "bold",
          fontSize: { xs: "1rem", md: "1.3rem" }, // Responsive font size
          textAlign: "left", // Ensures the text stays aligned to the left
          paddingLeft: { xs: "10px", md: "20px" }, // Adds some padding to the left for better spacing
          "@media (min-width: 800px) and (max-width: 1280px)": {
            marginLeft: "120px", // Custom marginLeft for screens between 800px and 1280px
          },
          "@media (min-width: 820px) and (max-width: 1180px)": {
            marginLeft: "35px", // Custom marginLeft for screens between 800px and 1280px
          },
        }}
      >
        Inspiration for your first order
      </Typography>

      <Box
        sx={{
          width: "100%",
          maxWidth: "950px",
          margin: "0 auto",
          position: "relative",
        }}
      >
        <Slider {...settings}>
          {cards.map((card, index) => (
            <Box
              key={index}
              sx={{
                padding: {
                  xs: "0 5px",
                  sm: "0 10px",
                  md: "0 15px",
                  lg: "0 20px",
                },
                boxSizing: "border-box",
              }}
            >
              <Card
                sx={{
                  overflow: "hidden",
                  boxShadow: 3,
                  margin: "0 auto",
                  width: {
                    xs: "120px",
                    sm: "100px",
                    md: "120px",
                    lg: "120px",
                  }, // Adjust the width for each screen size
                  height: {
                    xs: "120px",
                    sm: "100px",
                    md: "120px",
                    lg: "120px",
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
                variant="body2"
                align="center"
                sx={{ marginTop: "10px", fontWeight: "bold" }}
              >
                Cake
              </Typography>
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
}

export default Variety;
