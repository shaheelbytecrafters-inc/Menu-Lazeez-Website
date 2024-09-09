import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Typography } from "@mui/material";
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

function MyLogo() {
  const cards = [
    {
      image:
        "https://downloadr2.apkmirror.com/wp-content/uploads/2024/07/02/66887d409f1dd_ph.mobext.mcdelivery.png",
    },
    {
      image:
        "https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617187721.png?output-format=webp",
    },
    {
      image:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQATE8CWDGoYO7lufrdU3QbooyT0y0-U8Y-dNYT7bemPEpRo1MN",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIkKOhEntuHLbX9oT_Uxrfs6z3KF-mm14nMmnli8JRmXSYDjJuGypCY76j5CkuNwAeVd8&usqp=CAU",
    },
    {
      image:
        "https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617187721.png?output-format=webp",
    },
    {
      image:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRZ5Q1bB313dmGzI95pLJy5lC04lyOOkmYHUgt8i5tbSQGPbaj9",
    },
    {
      image:
        "https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617187721.png?output-format=webp",
    },
    {
      image:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRZ5Q1bB313dmGzI95pLJy5lC04lyOOkmYHUgt8i5tbSQGPbaj9",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    centerMode: false,
    centerPadding: "0",
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
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
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
          backgroundColor: "red",
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
              <Box
                sx={{
                  height: "100px",
                  width: "100px",
                  backgroundImage: `url(${card.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  borderRadius: "50%",
                  border: "2px solid black",
                  marginBottom: "0.4rem",
                }}
              />
            </Box>
          ))}
        </CustomSlider>
      </Box>
    </Box>
  );
}

export default MyLogo;
