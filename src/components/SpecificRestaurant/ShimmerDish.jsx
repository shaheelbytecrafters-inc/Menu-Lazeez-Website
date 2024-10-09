import { Box, Grid } from "@mui/material";

const ShimmerDish = () => {
  const shimmerArray = [1, 2, 3, 4];

  return (
    <Box
      sx={{
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // bgcolor: "red",
      }}
    >
      <Box
        sx={{
          width: {
            xs: "100%", // 100% width on extra-small screens
            sm: "100%",
            md:"80%",
            lg:"80%"
          },
        }}
      >
        <Grid
          container
          spacing={0} // No gap between cards
          sx={{
            justifyContent: "center",
          }}
        >
          {shimmerArray.map((index) => (
            <Grid
              item
              key={index}
              xs={12} // Full width on extra-small screens
              sm={12} // Full width on small screens
              md={6} // 3 cards on medium screens (3 per row)
              lg={6} // 2 cards on large screens (2 per row)
            >
              <Box
                height="270px"
                width="100%" // Full width for the card to remove gaps
                sx={{
                  borderRadius: "8px",
                  position: "relative",
                  overflow: "hidden",
                  margin: 0, // Remove any margin
                  display: "flex",
                  alignItems: "center", // Center content vertically
                  justifyContent: "center", // Center content horizontally
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    padding: "16px",
                    width: "100%", // Ensures the content scales with the card
                  }}
                >
                  {/* Shimmer Header */}
                  <Box
                    sx={{
                      width: "100%",
                      height: "20px",
                      borderRadius: "8px",
                      backgroundColor: "#f0f0f0", // Shimmer effect on header
                      mb: "10px",
                      animation: "shimmer 1.5s infinite",
                      background: `linear-gradient(to right, #f0f0f0 8%, #e0e0e0 18%, #f0f0f0 33%)`,
                      backgroundSize: "800px 104px",
                    }}
                  ></Box>
                  <Box
                    display="flex"
                    gap="0.5rem"
                    borderBottom="1px solid #e0e0e0"
                    marginBottom="0.5rem"
                  >
                    <Box
                      sx={{
                        width: "14%",
                        height: "15px",
                        borderRadius: "8px",
                        backgroundColor: "#f0f0f0", // Shimmer effect on header
                        mb: "10px",
                        animation: "shimmer 1.5s infinite",
                        background: `linear-gradient(to right, #f0f0f0 8%, #e0e0e0 18%, #f0f0f0 33%)`,
                        backgroundSize: "800px 104px",
                      }}
                    ></Box>
                    <Box
                      sx={{
                        width: "25%",
                        height: "15px",
                        borderRadius: "8px",
                        backgroundColor: "#f0f0f0", // Shimmer effect on header
                        mb: "10px",
                        animation: "shimmer 1.5s infinite",
                        background: `linear-gradient(to right, #f0f0f0 8%, #e0e0e0 18%, #f0f0f0 33%)`,
                        backgroundSize: "800px 104px",
                      }}
                    ></Box>
                  </Box>

                  {/* Shimmer Image + Text */}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    {/* Shimmer Image */}
                    <Box
                      sx={{
                        width: "70%",
                        height: "130px",
                        backgroundColor: "#f0f0f0", // Shimmer effect on image
                        borderRadius: "8px",
                        animation: "shimmer 1.5s infinite",
                        background: `linear-gradient(to right, #f0f0f0 8%, #e0e0e0 18%, #f0f0f0 33%)`,
                        backgroundSize: "800px 104px",
                        mb: "16px", // Spacing between image and text
                      }}
                    ></Box>

                    {/* Shimmer Text Blocks */}
                    <Box
                      sx={{
                        width: "100%", // Full width
                        display: "flex",
                        flexDirection: "column",
                        marginLeft: "1rem",
                      }}
                    >
                      <Box
                        sx={{
                          width: "70%",
                          height: "15px",
                          borderRadius: "8px",
                          backgroundColor: "#f0f0f0", // Shimmer effect on text
                          animation: "shimmer 1.5s infinite",
                          background: `linear-gradient(to right, #f0f0f0 8%, #e0e0e0 18%, #f0f0f0 33%)`,
                          backgroundSize: "800px 104px",
                        }}
                      ></Box>

                      {/* Shimmer Price Block */}
                      <Box
                        sx={{
                          width: "65%",
                          height: "12px",
                          backgroundColor: "#f0f0f0", // Shimmer effect on price block
                          borderRadius: "8px",
                          animation: "shimmer 1.5s infinite",
                          background: `linear-gradient(to right, #f0f0f0 8%, #e0e0e0 18%, #f0f0f0 33%)`,
                          backgroundSize: "800px 104px",
                          mt: "15px",
                        }}
                      ></Box>
                      <Box
                        sx={{
                          width: "65%",
                          height: "12px",
                          backgroundColor: "#f0f0f0", // Shimmer effect on price block
                          borderRadius: "8px",
                          animation: "shimmer 1.5s infinite",
                          background: `linear-gradient(to right, #f0f0f0 8%, #e0e0e0 18%, #f0f0f0 33%)`,
                          backgroundSize: "800px 104px",
                          mt: "15px",
                        }}
                      ></Box>
                      <Box
                        sx={{
                          width: "30%",
                          height: "15px",
                          backgroundColor: "#f0f0f0", // Shimmer effect on price block
                          borderRadius: "8px",
                          animation: "shimmer 1.5s infinite",
                          background: `linear-gradient(to right, #f0f0f0 8%, #e0e0e0 18%, #f0f0f0 33%)`,
                          backgroundSize: "800px 104px",
                          mt: "15px",
                        }}
                      ></Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default ShimmerDish;
