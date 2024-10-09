import React from "react";
import { Grid, Box, Skeleton } from "@mui/material";

const ProfileShimmer = () => {
  return (
    <Box >
      <Skeleton
        // variant="rectangular"
        width={150}
        height={40}
        sx={{ marginBottom: "1rem" }}
      />
      <Box sx={{display:"flex",gap:"20px"}}>
        <Skeleton
          // variant="rectangular"
          width={150}
          height={30}
          sx={{ marginBottom: "1rem" }}
        />{" "}
        <Skeleton
          // variant="rectangular"
          width={150}
          height={30}
          sx={{ marginBottom: "1rem" }}
        />
      </Box>
      <Box sx={{ display: "flex", padding: "2rem" }}>
        {/* Sidebar Skeleton */}
        <Box sx={{ width: "200px", marginRight: "2rem" }}>
          <Skeleton
            variant="rectangular"
            height={40}
            sx={{ marginBottom: "1rem" }}
          />
          <Skeleton
            variant="rectangular"
            height={40}
            sx={{ marginBottom: "1rem" }}
          />
          <Skeleton
            variant="rectangular"
            height={40}
            sx={{ marginBottom: "1rem" }}
          />
          <Skeleton
            variant="rectangular"
            height={40}
            sx={{ marginBottom: "1rem" }}
          />
          <Skeleton
            variant="rectangular"
            height={40}
            sx={{ marginBottom: "1rem" }}
          />
        </Box>

        {/* Card Section Skeleton */}
        <Grid container spacing={2}>
          {[...Array(4)].map((_, index) => (
            <Grid item xs={12} sm={12} md={6} lg={6} key={index}>
              <Box border="1px solid #ccc" padding="1rem">
                <Box
                  sx={{
                    borderRadius: "8px",
                    display: "flex",
                    gap: "1rem",
                    alignItems: "flex-start",
                  }}
                >
                  {/* Left Side - Image Skeleton */}
                  <Skeleton variant="rectangular" height={120} width={160} />

                  {/* Right Side - Text Content Skeleton */}
                  <Box sx={{ flex: 1 }}>
                    <Skeleton
                      variant="text"
                      height={25}
                      width={150}
                      sx={{ marginBottom: "0.5rem" }}
                    />
                    <Skeleton
                      variant="text"
                      height={25}
                      width={120}
                      sx={{ marginBottom: "0.5rem" }}
                    />
                    <Skeleton
                      variant="text"
                      height={25}
                      width={110}
                      sx={{ marginBottom: "0.5rem" }}
                    />
                    <Skeleton
                      variant="text"
                      height={25}
                      width={100}
                      sx={{ marginBottom: "0.5rem" }}
                    />
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    gap: "10px",
                  }}
                >
                  <Skeleton
                    variant="text"
                    height={50}
                    width={100}
                    sx={{ marginBottom: "0.5rem" }}
                  />
                  <Skeleton
                    variant="text"
                    height={50}
                    width={100}
                    sx={{ marginBottom: "0.5rem" }}
                  />
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default ProfileShimmer;
