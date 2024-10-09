import { Box, Card, Skeleton, Typography } from "@mui/material";
import React from "react";

const CardShimmer = () => {
  return (
    <Box
      sx={{
        paddingTop: "1rem",
        paddingBottom: "50px",
        paddingInline: "50px",
        cursor: "pointer",
        color: "black",
        // backgroundColor:"black"
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "1100px",
          margin: "0 auto",
          position: "relative",
        }}
      >

        {/* Shimmer Cards */}
        <Box display="flex" gap={2}>
          {[...Array(4)].map((_, index) => (
            <Card
              key={index}
              sx={{
                borderRadius: "10px",
                overflow: "hidden",
                width: "1100px",
                // padding: "0 5px",
                boxSizing: "border-box",
              }}
            >
              {/* Shimmer Image */}
              <Skeleton
                variant="rectangular"
                width="100%"
                height={300}
                // sx={{ borderRadius: "10px" }}
              />

              {/* Shimmer Text */}
              <Box
                sx={{
                  padding: "8px 12px",
                  background: "rgba(0, 0, 0, 0.1)",
                }}
              >
              </Box>
            </Card>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default CardShimmer;
