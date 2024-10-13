import React from "react";
import { Container, Grid, Paper, Skeleton, Box, Typography } from "@mui/material";

const ShimmerCart = () => {
  return (
    <Container sx={{ marginTop: 4 }}>
      <Typography
        variant="h4"
        gutterBottom
        // fontFamily="'Poppins', sans-serif"
        fontFamily="Playwrite DE Grund, cursive"
        fontWeight="bold"
        sx={{
          textAlign: "center",
          color: "black",
          marginBottom: "2rem",
        }}
      >
        Your Shopping Cart
      </Typography>
      <Grid container spacing={2}>
        {/* Placeholder for the Cart Items */}
        <Grid item xs={12} md={8}>
          {[1, 2, 3].map((_, index) => (
            <Paper
              key={index}
              sx={{
                padding: 2,
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
                gap: 1,
                marginBottom: 2,
                boxShadow:
                  "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
              }}
            >
              {/* Placeholder for Image */}

              <Skeleton
                variant="rectangular"
                width={80}
                height={80}
                sx={{ flexShrink: 0, borderRadius: "5px" }}
              />

              {/* Placeholder for Product Name */}
              <Box sx={{ flex: 1, minWidth: 150, marginLeft: "1rem" }}>
                <Skeleton variant="text" width="70%" height={28} />
              </Box>

              {/* Placeholder for Price */}
              <Skeleton variant="text" width={60} height={28} />

              {/* Placeholder for Quantity Controls */}
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Skeleton variant="circular" width={32} height={32} />
                <Skeleton
                  variant="rectangular"
                  width={50}
                  height={32}
                  sx={{ mx: 1 }}
                />
                <Skeleton variant="circular" width={32} height={32} />
              </Box>

              {/* Placeholder for Delete Button */}
              <Skeleton variant="circular" width={32} height={32} />

              {/* Placeholder for Total Price */}
              <Box
                sx={{
                  minWidth: 80,
                  textAlign: "right",
                  flexShrink: 0,
                  ml: "auto",
                }}
              >
                <Skeleton
                  variant="text"
                  width="60%"
                  height={28}
                  boxShadow="rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"
                />
              </Box>
            </Paper>
          ))}
        </Grid>

        {/* Placeholder for the Summary Section */}
        <Grid item xs={12} md={4}>
          <Paper
            sx={{
              padding: 2,
              boxShadow:
                "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
            }}
          >
            <Box
              display="flex"
              flexDirection="column"
              height="100%"
              justifyContent="space-between"
            >
              <Box>
                {[1, 2, 3].map((_, index) => (
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    mb={1}
                    key={index}
                  >
                    <Skeleton variant="text" width="40%" />
                    <Skeleton variant="text" width="20%" />
                  </Box>
                ))}
                <Skeleton
                  variant="rectangular"
                  width="100%"
                  height={2}
                  sx={{ my: 1 }}
                />
                <Box display="flex" justifyContent="space-between">
                  <Skeleton variant="text" width="30%" height={28} />
                  <Skeleton variant="text" width="20%" height={28} />
                </Box>
                <Skeleton variant="text" width="100%" height={45} />
              </Box>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ShimmerCart;
