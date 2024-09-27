import React from "react";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import { Delete } from "@mui/icons-material";
import AddressForm from "./AddressForm";

function AddToCartPage({
  products,
  quantities,
  incrementQuantity,
  decrementQuantity,
  removeProduct,
}) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        gap: 2,
        width: "100%",
        height: { sm: "15rem", md: "19rem" },
        "@media (min-width: 768px) and (max-width: 1024px)": {
          height: "17rem",
        },
        "@media (min-width: 344px) and (max-width: 822px)": {
          height: "20rem",
        },
        bgcolor: "black",
      }}
    >
      {products.map((product) => (
        <Card
          key={product.id}
          sx={{
            display: "flex",
            flexDirection: { xs: "row", sm: "row" },
            width: {
              xs: "100%",
              sm: "100%",
              md: "100%",
              lg: "97%",
            },
            p: 1,
            position: "relative",
          }}
        >
          <CardMedia
            component="img"
            alt={product.name}
            sx={{
              width: { xs: "30%", sm: "50px", md: "95px" },
              height: { xs: "auto", sm: "auto", md: "95px" },
              objectFit: "cover",
              display: "block",
              "@media (min-width: 768px) and (max-width: 1024px)": {
                height: "60px",
                width: "60px",
              },
              "@media (min-width: 344px) and (max-width: 822px)": {
                height: "60px",
                width: "60px",
              },
            }}
            image={product.image}
          />
          <CardContent
            sx={{
              flex: "1 0 auto",
              padding: "1px",
              marginLeft: "6px",
            }}
          >
            <Box>
              <Typography
                variant="h6"
                component="div"
                sx={{
                  fontSize: { sm: "1rem" },
                  "@media (min-width: 768px) and (max-width: 1024px)": {
                    fontSize: "1rem",
                  },
                }}
              >
                {product.name}
              </Typography>
              <Delete
                sx={{
                  position: "absolute",
                  top: 12,
                  right: 10,
                  color: "#fe0604",
                  cursor: "pointer",
                }}
                onClick={() => removeProduct(product.id)}
              />
            </Box>
            <Box>
              <Typography
                variant="subtitle2"
                color="text.secondary"
                sx={{
                  fontSize: { sm: "0.8rem", md: "0.8rem" },
                }}
              >
                {product.subheading}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography
                variant="body1"
                color={"#fe0604"}
                sx={{
                  fontSize: "0.8rem",
                  "@media (min-width: 768px) and (max-width: 1024px)": {
                    fontSize: "0.7rem",
                  },
                }}
              >
                ${product.price}
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Button
                  variant="contained"
                  sx={{
                    minWidth: "15px",
                    height: "28px",
                    fontSize: "1rem",
                    backgroundColor: "#fe0604",
                    color: "#fff",
                    "@media (min-width: 768px) and (max-width: 1024px)": {
                      height: "20px",
                      width: "15px",
                    },
                    "&:hover": {
                      backgroundColor: "#fe0604",
                    },
                  }}
                  onClick={() => decrementQuantity(product.id)}
                >
                  -
                </Button>
                <Typography variant="body1" sx={{ fontSize: "1rem" }}>
                  {quantities[product.id]}
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    minWidth: "15px",
                    height: "28px",
                    fontSize: "1rem",
                    backgroundColor: "#fe0604",
                    color: "#fff",
                    "@media (min-width: 768px) and (max-width: 1024px)": {
                      height: "20px",
                      width: "15px",
                    },
                    "&:hover": {
                      backgroundColor: "#fe0604",
                    },
                  }}
                  onClick={() => incrementQuantity(product.id)}
                >
                  +
                </Button>
              </Box>
            </Box>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}

function BillDetailsCard() {
  return (
    <Card
      sx={{
        maxWidth: 280,
        width: "100%",
        boxShadow: 1,
        height: "17rem",
        marginBottom: "-1rem",
        bgcolor: "#f9f9f9", // Slight background color for distinction
        p: 2,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <CardContent>
        <Typography
          variant="h6"
          component="div"
          sx={{ mb: 1.5, fontWeight: "bold", fontSize: "1.25rem" }}
        >
          Bill Details
        </Typography>
        <Box sx={{ mb: 2 }}>
          <Typography
            variant="body2"
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mb: 1,
              fontSize: "0.875rem",
            }}
          >
            Item Total
            <span style={{ color: "#fe0604" }}>$559</span>
          </Typography>
          <Typography
            variant="body2"
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mb: 1,
              fontSize: "0.875rem",
            }}
          >
            Delivery Fee | 1.7 kms
            <span>$63</span>
          </Typography>
          <Typography
            variant="body2"
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mb: 1,
              fontSize: "0.875rem",
            }}
          >
            Delivery Tip
            <Button
              variant="text"
              color="primary"
              sx={{ fontSize: "0.875rem" }}
            >
              Add tip
            </Button>
          </Typography>
          <Typography
            variant="body2"
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mb: 1,
              fontSize: "0.875rem",
            }}
          >
            Platform Fee
            <span>$7.00</span>
          </Typography>
          <Typography
            variant="body2"
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mb: 1,
              fontSize: "0.875rem",
            }}
          >
            GST and Restaurant Charges
            <span>$55.28</span>
          </Typography>
        </Box>
        <Typography
          variant="h6"
          component="div"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            fontWeight: "bold",
            fontSize: "1.25rem",
          }}
        >
          TO PAY
          <span>$683</span>
        </Typography>
      </CardContent>
    </Card>
  );
}

function CombinedView() {
  const initialProducts = [
    {
      id: 1,
      name: "Kebab",
      subheading: "Melt in your mouth kebabs",
      price: 49.99,
      image:
        "https://c.ndtvimg.com/2020-01/a39okhfk_620_625x300_21_January_20.jpg",
    },
    {
      id: 2,
      name: "Biryani",
      subheading: "A biryani a day keeps the doctor away",
      price: 59.99,
      image:
        "https://www.licious.in/blog/wp-content/uploads/2023/01/Shutterstock_2047827035-1024x683.jpg",
    },
    {
      id: 3,
      name: "Egg Curry",
      subheading: "Savor the flavor, taste the difference",
      price: 69.99,
      image:
        "https://www.whiskaffair.com/wp-content/uploads/2020/04/Kerala-Style-Egg-Curry-2-3-500x500.jpg",
    },
  ];

  const initialQuantities = {
    1: 2,
    2: 1,
    3: 1,
  };

  const incrementQuantity = (productId) => {
    // Logic to increment quantity
  };

  const decrementQuantity = (productId) => {
    // Logic to decrement quantity
  };

  const removeProduct = (productId) => {
    // Logic to remove product
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        gap: 3,
        justifyContent: "center",
        alignItems: "start",
        bgcolor: "#f5f5f5",
        p: 2,
      }}
    >
      <AddToCartPage
        products={initialProducts}
        quantities={initialQuantities}
        incrementQuantity={incrementQuantity}
        decrementQuantity={decrementQuantity}
        removeProduct={removeProduct}
      />
      <BillDetailsCard />
    </Box>
  );
}

export default CombinedView;
