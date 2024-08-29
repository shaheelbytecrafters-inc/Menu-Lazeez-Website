import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Card, CardContent, Typography, CardMedia } from "@mui/material";
import { styled } from "@mui/system";

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

function LazeezPartner() {
  const cards = [
    {
      image:
        "https://b.zmtcdn.com/merchant-onboarding/d2bcadb70abdd99811cceda4cc757f5a1600670711.png",
      title: "1000+ cities",
      description: "In India",
    },
    {
      image:
        "https://b.zmtcdn.com/merchant-onboarding/77b29f40bd0fb6c74c78695b07cdee901600670728.png",
      title: "3 lakh+ ",
      description: "restaurant listings",
    },
    {
      image:
        "https://b.zmtcdn.com/merchant-onboarding/e2b1283698fb6d3532c2df0c22a11fca1600670743.png",
      title: "5.0 crore+",
      description: "monthly orders",
    },
  ];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false, 
    dots: false, 
    centerMode: false, 
    centerPadding: "0", 
    responsive: [
      {
        breakpoint: 1024, 
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: false, 
          dots: false, 
        },
      },
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true, 
          dots: true,
        },
      },
      {
        breakpoint: 480, 
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true, 
          dots: true,
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
        Why should you partner with Lazeez?
      </Typography>
      <Typography
        fontWeight="500"
        sx={{
          fontSize: {
            xs: "12px",
            sm: "14px",
            md: "16px", 
            lg: "20px", 
          },
          marginInline: {
            xs: "1rem", 
            sm: "2rem", 
            md: "3rem", 
            lg: "7rem", 
            xl: "5rem",
          },
          textAlign: "center",
          marginBottom: "4rem",
          color: "#696969",
        }}
      >
        Lazeez enables you to get 60% more revenue, 10x new customers and boost
        your brand visibility by providing insights to improve your business.
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
                padding: "0 8px",
                boxSizing: "border-box",
              }}
            >
              <Card
                sx={{
                  borderRadius: "10px",
                  overflow: "hidden",
                  width: "100%",
                  boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                }}
              >
                <CardContent
                  sx={{
                    display: "flex", 
                    alignItems: "center", 
                    padding: "10px", 
                  }}
                >
                  <CardMedia
                    component="img"
                    image={card.image}
                    alt={card.title}
                    sx={{
                      width: "30px",
                      height: "30px", 
                      marginInline: "20px", 
                    }}
                  />
                  <Box>
                    <Typography
                      fontSize="24px"
                      fontWeight="540"
                      component="div"
                      sx={{ margin: "0", color: "#0366D6" }} 
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
                  </Box>
                </CardContent>
              </Card>
            </Box>
          ))}
        </CustomSlider>
      </Box>
    </Box>
  );
}

export default LazeezPartner;
