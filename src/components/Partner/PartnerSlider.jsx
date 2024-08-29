import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Card, CardContent, Typography, IconButton } from "@mui/material";
import { styled } from "@mui/system";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

const CustomSlider = styled(Slider)({
  ".slick-dots li button:before": {
    fontSize: "12px",
    color: "black", 
    fontWeight: "bold", 
  },
  ".slick-dots li.slick-active button:before": {
    color: "black", 
  },
});
const ArrowButton = styled(Box)(({ direction }) => ({
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  cursor: "pointer",
  zIndex: 1,
  [direction]: direction === "left" ? "-15px" : "-15px", 
}));

// Custom Arrow Components
const PrevArrow = ({ onClick }) => (
  <ArrowButton direction="left" onClick={onClick}>
    <IconButton
      sx={{
        color: "black",
        fontWeight: "bold",
        background: "white", 
        "&:hover": {
          background: "white",
        },
        boxShadow: "0px 4px 10px black",
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
        color: "black",
        background: "white", 
        "&:hover": {
          background: "white",
        },
        boxShadow: "0px 4px 10px black",
      }}
    >
      <ArrowForwardIosIcon />
    </IconButton>
  </ArrowButton>
);

function PartnerSlider() {
  const cards = [
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHco3Wl590Hq9y_Jn_DDEV2Fx1RK8Uq5WGzw&s",
      title: "Advertise",
      description: "We’re hiring! Explore job openings at Zomato...",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmQqDoEA3Kp_GwIMozy5q-odqx6RYMSHyJtg&s",
      title: "Business Card",
      description: "We’re hiring! Explore job openings at Zomato...",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHco3Wl590Hq9y_Jn_DDEV2Fx1RK8Uq5WGzw&s",
      title: "Business Card",
      description: "We’re hiring! Explore job openings at Zomato...",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmQqDoEA3Kp_GwIMozy5q-odqx6RYMSHyJtg&s",
      title: "Premium ",
      description: "Unlock exclusive deals and offers with Zomato Gold...",
    },

  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    centerMode: false,
    centerPadding: "0", 
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
    <Box
      sx={{
        paddingTop: "50px",
        paddingBottom: "50px",
        paddingInline: "50px",
      }}
    >
      <Typography
        fontWeight="500"
        sx={{
          fontSize: {
            xs: "1.4rem",
            sm: "1.5rem",
            md: "1.7rem",
            lg: "36px",
          },
          pl: {
            xs: 2,
            lg: 8,
          },
          pb: {
            xs: 0.8,
            sm: 1,
            md: 2,
            lg: 3,
          },
          textAlign: "center",
          marginBottom: "1rem",
        }}
      >
        Our Products
      </Typography>

      <Box
        sx={{
          width: "100%",
          maxWidth: "900px",
          margin: "0 auto",
          position: "relative",
        }}
      >
        <CustomSlider {...settings}>
          {cards.map((card, index) => (
            <Box
              key={index}
              sx={{
                padding: "0 15px",
                boxSizing: "border-box",
              }}
            >
              <Card
                sx={{
                  borderRadius: "10px",
                  overflow: "hidden",
                  width: "100%", 
                  boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                  height: "21rem",
                }}
              >
                <Box
                  sx={{
                    height: "200px",
                    backgroundImage: `url(${card.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderRadius: "0.5rem",
                    marginBottom: "0.4rem",
                  }}
                />
                <CardContent
                  sx={{
                    padding: "10px", 
                  }}
                >
                  <Typography
                    fontSize="24px"
                    fontWeight="540"
                    component="div"
                    sx={{ margin: "0" }} 
                  >
                    {card.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    display="flex"
                    alignItems="center"
                    fontSize="1rem"
                    sx={{
                      margin: "0",
                      paddingBlock: "0.5rem",
                      lineHeight: "1",
                    }}
                  >
                    {card.description}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.primary"
                    sx={{
                      margin: "0",
                      lineHeight: "1",
                      color: "#0366D6",
                      fontSize: "1rem",
                      display: "flex", 
                      alignItems: "center",
                    }}
                  >
                    Learn More
                    <ArrowRightIcon sx={{ marginLeft: "4px" }} />
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          ))}
        </CustomSlider>
      </Box>
    </Box>
  );
}

export default PartnerSlider;
