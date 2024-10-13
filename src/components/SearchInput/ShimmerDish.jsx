// import React from "react";
import { Box, Skeleton } from "@mui/material";

const ShimmerDish = () => {
  return (
    <>
      {Array.from(new Array(5)).map((_, index) => (
        <Box 
        sx={{
          display:"flex",
          justifyContent:"center",
          alignItems:"center",
          width:"100%"
        }}>
          <Box
            key={index}
            sx={{
              display: "flex",
              alignItems: "center",
              padding: "8px",
              border: "2px solid #ccc",
              backgroundColor: "white",
              marginBottom: "1rem",
              borderRadius:"1rem",
              width: "100%",
            }}
          >
            {/* Skeleton for image */}
            <Skeleton
              variant="rectangular"
              width="9rem"
              height="6rem"
              sx={{ marginRight: "10px", borderRadius: "5px" }}
            />
            {/* Skeleton for text content */}
            <Box sx={{ textAlign: "left", width: "100%" }}>
              <Skeleton
                variant="text"
                sx={{
                  width: "20%",
                  fontSize: {
                    xs: "12px",
                    sm: "13px",
                    md: "14px",
                    lg: "15px",
                  },
                }}
              />
              <Box
                display="flex"
                alignItems="center"
                sx={{ marginTop: "0.5rem" }}
              >
                <Skeleton variant="text" width="2rem" />
                <Skeleton
                  variant="text"
                  width="4rem"
                  sx={{ marginLeft: "1rem" }}
                />
              </Box>
              <Skeleton
                variant="text"
                sx={{
                  marginTop: "0.5rem",
                  width: "60%",
                  fontSize: {
                    xs: "10px",
                    sm: "12px",
                    md: "14px",
                  },
                }}
              />
            </Box>
          </Box>
        </Box>
      ))}
    </>
  );
};

export default ShimmerDish;
