// import React from "react";
import { Box, Typography, Chip, Stack, Divider } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import DirectionsBikeIcon from "@mui/icons-material/DirectionsBike";
import ProductCard from "./ProductCard";

const RestaurantCardDetails = () => {
  return (
    <Box>
      <Box sx={{ padding: "1rem", maxWidth: "700px", margin: "auto" }}>
        {/* Breadcrumb */}
        <Typography
          variant="body2"
          color="textSecondary"
          sx={{ marginBottom: "0.5rem" }}
        >
          Home / Delhi / Biryani's King
        </Typography>

        {/* Restaurant Name */}
        <Typography
          variant="h3"
          sx={{ fontWeight: "bold", marginTop: "0.5rem", fontSize: "1.3rem" }}
        >
          Biryani's King
        </Typography>

        {/* Rating and Pricing Section */}
        <Box
          marginTop="2rem"
          boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)"
          border="1px solid #ccc"
          padding="0.8rem"
          borderRadius="1rem"
        >
          <Stack direction="row" alignItems="center">
            <Chip
              icon={<StarIcon />}
              sx={{
                height: 35,
                fontWeight: "bold",
                fontSize: "14px",
                backgroundColor: "transparent", // Removes the gray background
              }}
              label={
                <Box display="flex" alignItems="center">
                  <Typography variant="body2" fontWeight="bold" fontSize="1rem">
                    3.9
                  </Typography>
                  <Typography
                    variant="body2"
                    color="black"
                    fontWeight="bold"
                    fontSize="1rem"
                    sx={{ marginLeft: "4px" }}
                  >
                    (14K+ ratings)
                  </Typography>
                </Box>
              }
            />

            <Typography
              variant="body1"
              sx={{ marginLeft: "1rem", fontWeight: "bold" }}
            >
              ₹150 for one
            </Typography>
          </Stack>

          {/* Cuisine Links */}
          <Typography
            variant="body1"
            sx={{ color: "#fe0604", fontWeight: "bold", fontSize: "0.8rem" }}
          >
            Biryani, North Indian
          </Typography>

          {/* Outlet and Delivery Time */}
          <Stack direction="row" alignItems="center" spacing={2}>
            {/* Vertical Line with Dots */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  width: 8,
                  height: 8,
                  backgroundColor: "#ccc",
                  borderRadius: "50%",
                }}
              />
              <Divider
                orientation="vertical"
                sx={{ height: 22, borderWidth: "1px", borderColor: "#ccc" }}
              />
              <Box
                sx={{
                  width: 8,
                  height: 8,
                  backgroundColor: "#ccc",
                  borderRadius: "50%",
                }}
              />
            </Box>

            {/* Outlet Information and Delivery Time */}
            <Box>
              <Box display="flex" gap="1rem">
                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: "bold",
                    fontSize: "0.8rem",
                    marginTop: "0.5rem",
                  }}
                >
                  Outlet
                </Typography>
                <Typography
                  variant="body1"
                  color="gray"
                  fontSize="0.8rem"
                  marginTop="0.5rem"
                >
                  Dwarka
                </Typography>
              </Box>
              <Typography
                variant="body1"
                sx={{ fontWeight: "bold", fontSize: "0.8rem", lineHeight: 3 }}
              >
                45-50 mins
              </Typography>
            </Box>
            <Box></Box>
          </Stack>

          <Divider sx={{ width: "100%", marginTop: "7px" }} />

          {/* Delivery Fee Section */}
          <Box
            sx={{ display: "flex", alignItems: "center", marginTop: "0.5rem" }}
          >
            <DirectionsBikeIcon sx={{ marginRight: 1 }} />
            <Typography variant="body2" sx={{ color: "gray" }}>
              5.0 kms | ₹39 Delivery fee will apply
            </Typography>
          </Box>

          <Divider sx={{ width: "100%", marginTop: "10px" }} />

          {/* Free Delivery Offer */}
          <Box
            sx={{
              marginTop: "0.5rem",
              borderRadius: "8px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography
              variant="body1"
              color="#fe0604"
              sx={{ fontWeight: "bold", fontSize: "0.8rem" }}
            >
              Free delivery on orders above ₹199
            </Typography>
          </Box>
        </Box>
      </Box>
      <ProductCard/>
    </Box>
  );
};

export default RestaurantCardDetails;
