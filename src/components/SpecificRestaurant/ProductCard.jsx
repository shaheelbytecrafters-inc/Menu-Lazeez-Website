// import React from "react";
// import {
//   Box,
//   Card,
//   CardContent,
//   CardMedia,
//   Typography,
//   Button,
//   Grid,
// } from "@mui/material";
// import food from "../../assets/images/food.jpeg"; // Adjust the path to your food image

// const ProductCard = ({
//   dish,
//   restaurantId,
//   handleAddToCart,
//   totalCartItems,
// }) => {
//   // Function to truncate text to 40 words
//   const truncateText = (text, maxWords) => {
//     const words = text.split(" ");
//     return words.length > maxWords
//       ? words.slice(0, maxWords).join(" ") + "..."
//       : text;
//   };

//   const cartItem = totalCartItems.find((item) => item.itemId === dish.dishId);

//   return (
//     <Grid
//       item
//       xs={12}
//       sm={12}
//       md={6}
//       lg={6}
//       sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
//     >
//       <Box
//         sx={{
//           marginBottom: "10px",
//           width: { xs: "100%", sm: "80%", md: "90%", lg: "95%" },
//         }}
//       >
//         <Card
//           sx={{
//             display: "flex",
//             // flexDirection: { xs: "column", md: "row" },
//             flexDirection: { xs: "column", md: "row" },

//             justifyContent: "space-between",
//             boxShadow:
//               "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
//             width: "100%",
//             // padding: "10px",
//           }}
//         >
//           <Grid
//             container
//             display="flex"
//             alignItems="center"
//             justifyContent="space-between"
//             width={"100%"}
//             // bgcolor={"green"}
//             padding={"10px"}
//             // paddingInline="1rem"
//           >
//             <Grid
//               item
//               xs={12}
//               sm={4}
//               display="flex"
//               flexDirection="column"
//               alignItems="center"
//               sx={{ mt: { xs: 2, sm: 0 } }}
//             >
//               <CardMedia
//                 component="img"
//                 image={food}
//                 borderRadius="1rem"
//                 alt={dish.name}
//                 sx={{
//                   borderRadius: "1rem", // Add border radius
//                   width: { xs: 150, sm: 170, md: 120, lg: 170 },
//                   height: { xs: 100, sm: 120, md: 100, lg: 100 },
//                   overflow: "hidden",
//                   paddingInline: "2rem",
//                 }}
//               />
//               {cartItem ? (
//                 <Button
//                   variant="contained"
//                   sx={{
//                     bgcolor: "#fe0604",
//                     color: "white",
//                     fontWeight: "bold",
//                     borderRadius: 2,
//                     mt: -3,
//                     textTransform: "none",
//                     "&:hover": { bgcolor: "#cc0000" },
//                   }}
//                   onClick={() => navigate("/cart")}
//                 >
//                   Checkout
//                 </Button>
//               ) : (
//                 <Button
//                   variant="contained"
//                   sx={{
//                     bgcolor: "#fe0604",
//                     color: "white",
//                     fontWeight: "bold",
//                     borderRadius: 2,
//                     mt: -3,
//                     textTransform: "none",
//                     boxShadow: "rgba(255, 0, 0, 0.4) 0px 4px 10px",
//                     "&:hover": { bgcolor: "#cc0000" },
//                   }}
//                   onClick={() => handleAddToCart(dish, restaurantId)}
//                 >
//                   Add
//                 </Button>
//               )}
//             </Grid>
//             <Grid item xs={12} sm={8}>
//               <CardContent>
//                 <Typography
//                   variant="h6"
//                   component="div"
//                   fontWeight="bold"
//                   fontSize={{ xs: "16px", sm: "18px" }}
//                 >
//                   {dish.name}
//                 </Typography>
//                 <Typography
//                   variant="h5"
//                   component="div"
//                   sx={{
//                     fontWeight: "bold",
//                     fontSize: { xs: "14px", sm: "16px" },
//                     mb: 1,
//                     color: "red",
//                   }}
//                 >
//                   ₹{dish.price}
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary">
//                   {truncateText(dish?.description, 6)}{" "}
//                   {/* Display 40 words for the description */}
//                 </Typography>
//               </CardContent>
//             </Grid>
//           </Grid>
//         </Card>
//       </Box>
//     </Grid>
//   );
// };

// export default ProductCard;

import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Grid,
} from "@mui/material";
import food from "../../assets/images/food.jpeg"; // Adjust the path to your food image

const ProductCard = ({
  dish,
  restaurantId,
  handleAddToCart,
  totalCartItems,
}) => {
  // Function to truncate text to 40 words
  const truncateText = (text, maxWords) => {
    const words = text.split(" ");
    return words.length > maxWords
      ? words.slice(0, maxWords).join(" ") + "..."
      : text;
  };

  const cartItem = totalCartItems.find((item) => item.itemId === dish.dishId);

  return (
    <Grid
      item
      xs={12}
      sm={12}
      md={6}
      lg={6}
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Box
        sx={{
          marginBottom: "10px",
          width: { xs: "100%", sm: "80%", md: "90%", lg: "100%" },
        }}
      >
        <Card
          sx={{
            display: "flex",
            flexDirection: { xs: "row", md: "row" }, // Keep row layout for all sizes
            justifyContent: "space-between",
            boxShadow:
              "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
            width: "100%",
          }}
        >
          <Grid
            container
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            width={"100%"}
            padding={"10px"}
          >
            <Grid
              item
              xs={4}
              display="flex"
              flexDirection="column"
              alignItems="center"
              sx={{ mt: { xs: 2, sm: 0 } }}
            >
              <CardMedia
                component="img"
                image={food}
                alt={dish.name}
                sx={{
                  borderRadius: "1rem",
                  width: { xs: 110, sm: 170, md: 130, lg: 170 }, // Decrease image size for small screens
                  height: { xs: 80, sm: 120, md: 100, lg: 120 }, // Adjust height similarly
                  overflow: "hidden",
                }}
              />
              {cartItem ? (
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: "#fe0604",
                    color: "white",
                    fontWeight: "bold",
                    borderRadius: 2,
                    mt: -3,
                    textTransform: "none",
                    "&:hover": { bgcolor: "#cc0000" },
                  }}
                  onClick={() => navigate("/cart")}
                >
                  Checkout
                </Button>
              ) : (
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: "#fe0604",
                    color: "white",
                    fontWeight: "bold",
                    borderRadius: 2,
                    mt: -3,
                    textTransform: "none",
                    boxShadow: "rgba(255, 0, 0, 0.4) 0px 4px 10px",
                    "&:hover": { bgcolor: "#cc0000" },
                  }}
                  onClick={() => handleAddToCart(dish, restaurantId)}
                >
                  Add
                </Button>
              )}
            </Grid>
            <Grid item xs={8}>
              <CardContent>
                <Typography
                  variant="h6"
                  component="div"
                  fontWeight="bold"
                  fontSize={{ xs: "16px", sm: "18px" }}
                >
                  {dish.name}
                </Typography>
                <Typography
                  variant="h5"
                  component="div"
                  sx={{
                    fontWeight: "bold",
                    fontSize: { xs: "14px", sm: "16px" },
                    mb: 1,
                    color: "red",
                  }}
                >
                  ₹{dish.price}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {truncateText(dish?.description, 6)}{" "}
                </Typography>
              </CardContent>
            </Grid>
          </Grid>
        </Card>
      </Box>
    </Grid>
  );
};

export default ProductCard;
