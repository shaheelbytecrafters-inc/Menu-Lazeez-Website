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
      name: "Biryani",
    },
    {
      image:
        "https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617187721.png?output-format=webp",
      name: "Paratha",
    },
    {
      image:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQATE8CWDGoYO7lufrdU3QbooyT0y0-U8Y-dNYT7bemPEpRo1MN",
      name: "Rolls",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIkKOhEntuHLbX9oT_Uxrfs6z3KF-mm14nMmnli8JRmXSYDjJuGypCY76j5CkuNwAeVd8&usqp=CAU",
      name: "Dosa",
    },
    {
      image:
        "https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617187721.png?output-format=webp",
      name: "Food",
    },
    {
      image:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRZ5Q1bB313dmGzI95pLJy5lC04lyOOkmYHUgt8i5tbSQGPbaj9",
      name: "Chicken",
    },
    {
      image:
        "https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617187721.png?output-format=webp",
      name: "Rolls",
    },
    {
      image:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRZ5Q1bB313dmGzI95pLJy5lC04lyOOkmYHUgt8i5tbSQGPbaj9",
      name: "biryani",
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
        paddingBottom: "50px",
        paddingInline: "50px",
        display: "flex", // Use flexbox
        justifyContent: "center", // Center the slider horizontally
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "1200px", // Adjust the maximum width of the slider
          margin: "0 auto",
        }}
      >
        <Typography
          sx={{
            fontSize: "1.6rem",
            marginBottom: "1rem",
            fontWeight: "600",
            marginLeft:"1rem"
            // textAlign: "center",
          }}
        >
          Inspiration for your first order
        </Typography>
        <CustomSlider {...settings}>
          {cards.map((card, index) => (
            <Box
              key={index}
              sx={{
                boxSizing: "border-box",
                // border: "2px solid black",
                display: "flex",
                flexDirection: "column", // Stack image and text vertically
                justifyContent: "center", // Center content vertically
                alignItems: "center", // Center content horizontally
                // background: "red",
                height: "200px",
                width: "200px",
                textAlign: "center", // Center text horizontally in case of longer text
                padding: "2.4rem", // Add padding if needed
              }}
            >
              <Box>
                <img
                  src={card.image}
                  alt={card.name}
                  style={{
                    height: "100px",
                    width: "100px",
                    borderRadius: "50%",
                    border: "2px solid black",
                    marginBottom: "1rem",
                  }}
                />
              </Box>
              <Typography
                sx={{
                  fontWeight: "600",
                }}
              >
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
