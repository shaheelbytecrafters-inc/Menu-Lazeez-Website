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

function Variety() {
  const cards = [
    {
      image:
        "https://b.zmtcdn.com/data/dish_images/d5ab931c8c239271de45e1c159af94311634805744.png",
      name: "Chicken",
    },
    {
      image:
        "https://b.zmtcdn.com/data/dish_images/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.png",
      name: "Cake",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0EbtAMkvjstpwiT8oSwwiPDJXVpC_KAaHdw&s",
      name: "North Indian",
    },
    {
      image:
        "https://b.zmtcdn.com/data/dish_images/d5ab931c8c239271de45e1c159af94311634805744.png",
      name: "Rolls",
    },
    {
      image:
        "https://b.zmtcdn.com/data/dish_images/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.png",
      name: "Dosa",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0EbtAMkvjstpwiT8oSwwiPDJXVpC_KAaHdw&s",
      name: "Paratha",
    },
    {
      image:
        "https://b.zmtcdn.com/data/dish_images/d5ab931c8c239271de45e1c159af94311634805744.png",
      name: "Chicken",
    },
    {
      image:
        "https://b.zmtcdn.com/data/o2_assets/8dc39742916ddc369ebeb91928391b931632716660.png",
      name: "Food",
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
            // marginLeft:"1rem"
            // textAlign: "center",
            // fontWeight: "bold",
            marginLeft:"1rem",
            fontFamily:"Playwrite DE Grund, cursive"
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
                display: "flex",
                flexDirection: "column", 
                justifyContent: "center", 
                alignItems: "center",
                height: "200px",
                width: "200px",
                textAlign: "center",
                padding: "2.4rem",
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

export default Variety;
