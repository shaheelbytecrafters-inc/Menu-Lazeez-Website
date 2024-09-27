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
      name:"Biryani"
      },
    {
      image:
        "https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617187721.png?output-format=webp",
      name:"Paratha"
      },
    {
      image:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQATE8CWDGoYO7lufrdU3QbooyT0y0-U8Y-dNYT7bemPEpRo1MN",
      name:"Rolls"
      },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIkKOhEntuHLbX9oT_Uxrfs6z3KF-mm14nMmnli8JRmXSYDjJuGypCY76j5CkuNwAeVd8&usqp=CAU",
      name:"Dosa"
      },
    {
      image:
        "https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617187721.png?output-format=webp",
      name:"Food"
      },
    {
      image:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRZ5Q1bB313dmGzI95pLJy5lC04lyOOkmYHUgt8i5tbSQGPbaj9",
      name:"Chicken"
      },
    {
      image:
        "https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617187721.png?output-format=webp",
      name:"Rolls"
       },
    {
      image:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRZ5Q1bB313dmGzI95pLJy5lC04lyOOkmYHUgt8i5tbSQGPbaj9",
      name:"biryani"
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
    arrows: false, // Disable arrow buttons
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
      <Box
        sx={{
          width: "100%",
          maxWidth: "900px",
          margin: "0 auto",
          position: "relative",
          //   backgroundColor: "red",
        }}
      >
        <Typography
          sx={{ fontSize: "1.6rem", marginBottom: "1rem", fontWeight: "600" }}
        >
          Top Brands for you
        </Typography>
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
              <Typography sx={{ textAlign: "center", fontWeight: "600" }}>
                {card.name}
              </Typography>
            </Box>
          ))}
        </CustomSlider>
      </Box>
    </Box>
  );
}

export default MyLogo;



