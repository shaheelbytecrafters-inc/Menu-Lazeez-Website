import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

// Sample foods array
const foods = [
  {
    id: 1,
    name: "Pizza",
    image:
      "https://wallup.net/wp-content/uploads/2017/11/22/371886-food-pizza.jpg",
    description: "Delicious cheese pizza with pepperoni",
  },
  {
    id: 3,
    name: "Pizza",
    image:
      "https://wallup.net/wp-content/uploads/2017/11/22/371886-food-pizza.jpg",
    description: "Delicious cheese pizza with pepperoni",
  },
  {
    id: 2,
    name: "burger",
    image:
      "https://i0.wp.com/thenutritionadventure.com/wp-content/uploads/2017/07/PourHouseAmericanBurger.jpg?resize=5236%2C3490",
    description: "Delicious cheese burger with pepperoni",
  },
  {
    id: 4,
    name: "burger",
    image:
      "https://i0.wp.com/thenutritionadventure.com/wp-content/uploads/2017/07/PourHouseAmericanBurger.jpg?resize=5236%2C3490",
    description: "Delicious cheese burger with pepperoni",
  },
  {
    id: 5,
    name: "Pizza",
    image:
      "https://wallup.net/wp-content/uploads/2017/11/22/371886-food-pizza.jpg",
    description: "Delicious cheese pizza with pepperoni",
  },
  {
    id: 6,
    name: "Pizza",
    image:
      "https://wallup.net/wp-content/uploads/2017/11/22/371886-food-pizza.jpg",
    description: "Delicious cheese pizza with pepperoni",
  },
  {
    id: 7,
    name: "burger",
    image:
      "https://i0.wp.com/thenutritionadventure.com/wp-content/uploads/2017/07/PourHouseAmericanBurger.jpg?resize=5236%2C3490",
    description: "Delicious cheese burger with pepperoni",
  },
  {
    id: 8,
    name: "burger",
    image:
      "https://i0.wp.com/thenutritionadventure.com/wp-content/uploads/2017/07/PourHouseAmericanBurger.jpg?resize=5236%2C3490",
    description: "Delicious cheese burger with pepperoni",
  },
];

const FlexCard = styled(Card)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  margin: "1px",
  padding: "5px",
  cursor: "pointer",
  bgcolor: "blue",
}));

const CardImage = styled(CardMedia)({
  width: "100px",
  height: "100px",
  borderRadius: "10px",
  objectFit: "cover",
});

const ContentBox = styled(CardContent)({
  // display: 'flex',
  // flexDirection: 'column',
  // justifyContent: 'center',
});

function SearchItem() {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: { xs: "none", sm: "flex" },
        flexDirection: "column",
        width: { xs: "100%", md: "70%" },
        height: "250px",
        overflow: "auto",
        bgcolor: "#fff",
        mt: { xs: "108px", sm: "87px" },
        pt: 2,
        borderRadius: "10px",
      }}
    >
      {foods.map((food,index) => (
        <Stack
          direction={"row"}
          spacing={2}
          sx={{
            width: "100%",
            height: "138px",
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
            py: "10px",
            bgcolor: "#fff",
            ":hover": {
              bgcolor: "#f2f4f6",
            },
            borderRadius: 0,
            borderWidth: "0px",
            boxShadow: "none",
            cursor: "pointer",
          }}
          key={index}
        >
          <Box sx={{ width: "20%", height: "108px", pl: "15px" }}>
            <img
              src={food.image}
              alt={food.name}
              style={{ width: "72px", height: "72px", borderRadius: "10px" }}
            />
          </Box>
          <Stack
            direction={"column"}
            spacing={"2px"}
            sx={{ width: "100%", height: "108px", textAlign: "left" }}
          >
            <Typography
              variant="h6"
              sx={{
                border: "0px solid blue",
                fontSize: "16px",
                fontWeight: 500,
              }}
            >
              {food.name}
            </Typography>
            <Stack
              direction={"row"}
              spacing={3}
              sx={{ border: "0px solid red" }}
            >
              <Stack
                direction={"row"}
                spacing={1}
                sx={{ border: "0px solid pink" }}
              >
                <Stack
                  direction={"row"}
                  spacing={"2px"}
                  sx={{
                    width: "40px",
                    heigth: "20px",
                    bgcolor: "#267e3e",
                    color: "#fff",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "4px",
                  }}
                >
                  <Typography variant="p" sx={{ fontSize: "16px" }}>
                    4.2
                  </Typography>
                  <StarIcon sx={{ fontSize: "13px" }} />
                </Stack>
                <Typography variant="p">Dinning</Typography>
              </Stack>
              <Stack
                direction={"row"}
                spacing={1}
                sx={{ border: "0px solid pink" }}
              >
                <Stack
                  direction={"row"}
                  spacing={"2px"}
                  sx={{
                    width: "40px",
                    heigth: "20px",
                    bgcolor: "#267e3e",
                    color: "#fff",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "4px",
                  }}
                >
                  <Typography variant="p" sx={{ fontSize: "16px" }}>
                    4.2
                  </Typography>
                  <StarIcon sx={{ fontSize: "13px" }} />
                </Stack>
                <Typography variant="p">Delivery</Typography>
              </Stack>
            </Stack>
            <Typography variant="p" sx={{ fontWeight: 300 }}>
              Paharganj, New Delhi
            </Typography>
            <Stack sx={{ border: "0px solid blue" }} direction={"column"}>
              <Stack
                direction={"row"}
                sx={{ justifyContent: "space-between", alignItems: "center" }}
              >
                <Stack
                  direction="row"
                  sx={{
                    justifyContent: "start",
                    alignItems: "center",
                    ":hover": {
                      gap: 1, // Gap when hovered
                    },
                  }}
                >
                  <Typography
                    variant="p"
                    sx={{ color: "red", fontSize: "14px", fontWeight: 300 }}
                  >
                    Order Now
                  </Typography>
                  <ArrowDropDownIcon
                    sx={{
                      color: "red",
                      transform: "rotate(270deg)",
                      fontSize: "20px",
                    }}
                  />
                </Stack>
                <Stack
                  direction="row"
                  sx={{
                    width: "32%",
                    justifyContent: "start",
                    alignItems: "center",
                    ":hover": {
                      gap: 1,
                    },
                  }}
                >
                  <Typography
                    variant="p"
                    sx={{ color: "red", fontSize: "14px", fontWeight: 300 }}
                  >
                    View all outlets
                  </Typography>
                  <ArrowDropDownIcon
                    className="move-icon"
                    sx={{
                      color: "red",
                      transform: "rotate(270deg)",
                      fontSize: "20px",
                    }}
                  />
                </Stack>
              </Stack>
              <Typography variant="p" sx={{ color: "gray", fontSize: "15px" }}>
                Delivery in 39 min
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      ))}
    </Box>
  );
}

export default SearchItem;
