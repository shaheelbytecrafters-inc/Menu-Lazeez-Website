import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { Stack, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

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

const MobileDrawer = ({ toggleDrawer, open }) => {
  const DrawerList = (
    <Box sx={{ width: "100%", height: "90vh" }} onClick={toggleDrawer(false)}>
      <Box
        sx={{
          flexDirection: "column",
          width: { xs: "100%", md: "70%" },
          height: "auto",
          bgcolor: "#fff",
          mt: 2,
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
              height: "80px",
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
              p: "30px 0px 5px 0px",
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
                style={{ width: "50px", height: "50px", borderRadius: "10px" }}
              />
            </Box>
            <Stack
              direction={"column"}
              spacing={"3px"}
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
                spacing={2}
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
                    <Typography variant="p" sx={{ fontSize: "13px" }}>
                      4.2
                    </Typography>
                    <StarIcon sx={{ fontSize: "10px" }} />
                  </Stack>
                  <Typography variant="p" sx={{ fontSize: "15px" }}>
                    Dinning
                  </Typography>
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
                    <Typography variant="p" sx={{ fontSize: "10px" }}>
                      4.2
                    </Typography>
                    <StarIcon sx={{ fontSize: "10px" }} />
                  </Stack>
                  <Typography variant="p" sx={{ fontSize: "15px" }}>
                    Delivery
                  </Typography>
                </Stack>
              </Stack>
              <Typography variant="p" sx={{ fontWeight: 300 }}>
                Paharganj, New Delhi
              </Typography>
            </Stack>
          </Stack>
        ))}
      </Box>
    </Box>
  );

  return (
    <div>
      <Drawer
        anchor="bottom" // Open from the bottom
        open={open}
        onClose={toggleDrawer(false)}
      >
        {DrawerList}
      </Drawer>
    </div>
  );
};

export default MobileDrawer;
