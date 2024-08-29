  import Slider from "react-slick";
  import "slick-carousel/slick/slick.css";
  import "slick-carousel/slick/slick-theme.css";
  import { Box, Card, CardContent, Typography, IconButton } from "@mui/material";
  import { styled } from "@mui/system";
  import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
  import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
  import { useNavigate } from "react-router-dom";
  // import LocationOnIcon from "@mui/icons-material/LocationOn";
  import FmdGoodIcon from "@mui/icons-material/FmdGood";
  

  // Custom styles for the arrow buttons
  const ArrowButton = styled(Box)(({ direction }) => ({
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    cursor: "pointer",
    zIndex: 1,
    [direction]: direction === "left" ? "-50px" : "-50px", // Adjust this value to position the button
  }));

  // Custom Arrow Components
  const PrevArrow = ({ onClick }) => (
    <ArrowButton direction="left" onClick={onClick}>
      <IconButton
        sx={{
          color: "white",
          fontWeight: "bold",
          background: "#f0ae46", // Initial background color
          "&:hover": {
            background: "#f0ae46", // Darker background color on hover
          },
          boxShadow: "0px 4px 10px #f0ae46", // Add shadow to the icon
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
          background: "#f0ae46", // Initial background color
          "&:hover": {
            background: "#f0ae46", // Darker background color on hover
          },
          boxShadow: "0px 4px 10px #f0ae46", // Add shadow to the icon
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
          "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
        title: "Cheese Burger",
        description: "Burger Arena",
        price: "$3.35",
      },
      {
        image:
          "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
        title: "Cheese Burger",
        description: "Burger Arena",
        price: "$3.35",
      },
      {
        image:
          "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
        title: "Cheese Burger",
        description: "Burger Arena",
        price: "$3.35",
      },
      {
        image:
          "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
        title: "Cheese Burger",
        description: "Burger Arena",
        price: "$3.35",
      },
      {
        image:
          "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
        title: "Cheese Burger",
        description: "Burger Arena",
        price: "$3.35",
      },
      {
        image:
          "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
        title: "Cheese Burger",
        description: "Burger Arena",
        price: "$3.35",
      },
      {
        image:
          "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
        title: "Cheese Burger",
        description: "Burger Arena",
        price: "$3.35",
      },
      {
        image:
          "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
        title: "Cheese Burger",
        description: "Burger Arena",
        price: "$3.35",
      },
      // Add more cards as needed
    ];

    const navigate = useNavigate();
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
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
    const handleRedirect=()=>{
      navigate("/restaurantname");
      console.log("Hello")
    }

    return (
      <Box
        sx={{
          paddingTop: "50px",
          paddingBottom: "50px",
          paddingInline: "50px",
          cursor: "pointer",
          // backgroundColor:"red"
          // zIndex:1
        }}
      >
        <Typography
          // variant="h6"
          // fontSize="0rem"
          fontWeight="800"
          sx={{
            fontSize: {
              xs: "1.4rem",
              sm: "1.5rem",
              md: "1.7rem",
              lg: "1.6rem",
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
            // fontWeight: "bold",
            textAlign: "center",
            marginBottom: "1rem",
            // zIndex: -5,
          }}
        >
          Popular restaurants
        </Typography>

        <Box
          sx={{
            width: "100%",
            maxWidth: "900px",
            margin: "0 auto",
            position: "relative",
            cursor: "pointer",
            zIndex:"-1"
          
          }}
        >
          <Slider {...settings}>
            {cards.map((card, index) => (
              <Box
                onClick={() => handleRedirect()}
                key={index}
                sx={{
                  padding: "0 5px", // Reduced space around each card to ~5px
                  boxSizing: "border-box",
                }}
              >
                <Card
                  sx={{
                    borderRadius: "10px",
                    overflow: "hidden",
                    width: "100%", // Full width for responsiveness
                    boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px", // Corrected box shadow syntax
                    // box-shadow: ;

                    // padding:"5px"
                  }}
                >
                  <Box
                    sx={{
                      height: "150px",
                      backgroundImage: `url(${card.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      borderRadius: "0.5rem",
                      marginBottom: "0.4rem",
                    }}
                  />
                  <CardContent
                    sx={{
                      padding: "0", // Remove padding around the content
                    }}
                  >
                    <Typography
                      fontSize="0.9rem"
                      fontWeight="bold"
                      component="div"
                      sx={{ margin: "0" }} // Ensure no margin and minimal padding
                    >
                      {card.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      display="flex"
                      alignItems="center"
                      sx={{
                        margin: "0",
                        paddingBlock: "0.5rem",
                        color: "#f0ae46",
                        lineHeight: "1",
                      }} // Ensure no margin and minimal padding
                    >
                      <FmdGoodIcon
                        sx={{
                          fontSize: "14px",
                          marginRight: "4px",
                          lineHeight: "1",
                        }}
                      />
                      {card.description}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.primary"
                      fontWeight="bolder"
                      sx={{ margin: "0", lineHeight: "1" }} // Adjust line height for the price }} // Ensure no margin
                      
                    >
                      {card.price}
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