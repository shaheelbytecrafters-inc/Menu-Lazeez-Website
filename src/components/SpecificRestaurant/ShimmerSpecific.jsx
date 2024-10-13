import {
  Box,
  Skeleton,
  Stack,
  Divider,
  Card,
  CardContent,
  Grid,
} from "@mui/material";

const ShimmerSpecific = () => {
  const shimmerArray = Array.from({ length: 5 }); // Change length as needed to render multiple shimmer cards

  return (
    <Box sx={{ padding: "1rem", maxWidth: "60%", margin: "auto" }}>
      {/* Shimmer for Breadcrumb */}
      <Skeleton width="30%" height={27} />
      {/* Shimmer for Restaurant Name */}
      <Skeleton width="40%" height={45} sx={{ marginTop: "0.5rem" }} />

      {/* Shimmer for a container with details */}
      <Box
        marginTop="2rem"
        boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)"
        border="1px solid #ccc"
        padding="2rem"
        borderRadius="1rem"
      >
        <Stack direction="row" alignItems="center" spacing={5}>
          <Skeleton width="25%" height={25} />
          <Skeleton width="20%" height={25} />
        </Stack>

        {/* Cuisine Shimmer */}
        <Skeleton width="10%" height={20} sx={{ marginTop: "0.5rem" }} />

        {/* Outlet and Delivery Time Shimmer */}
        <Stack
          direction="row"
          alignItems="center"
          spacing={2}
          sx={{ marginTop: "1rem" }}
        >
          <Skeleton width="10%" height={30} />
          <Skeleton width="30%" height={30} />
        </Stack>

        <Skeleton width="20%" height={30} />

        {/* Horizontal separator */}
        <Box
          sx={{ borderBottom: "1px solid #ccc", marginBlock: "0.3rem" }}
        ></Box>

        {/* Delivery Fee Shimmer */}
        <Skeleton width="50%" height={40} marginBlock={"1rem"} />
        <Box
          sx={{ borderBottom: "1px solid #ccc", marginBlock: "0.3rem" }}
        ></Box>
        <Skeleton sx={{ width: "40%" }} />
      </Box>

      {/* Shimmer for Menu and Reviews Buttons */}
      <Stack direction="row" spacing={2} sx={{ marginTop: "2rem" }}>
        <Skeleton width={100} height={80} borderRadius="0.5rem" />
        <Skeleton width={120} height={80} borderRadius="0.5rem" />
      </Stack>

      {/* Multiple shimmer cards for products */}
      <Grid container spacing={2}>
        {shimmerArray.map((_, index) => (
          <Grid
            key={index}
            item
            xs={12}
            sm={12}
            md={6}
            lg={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width:"90vw"
            }}
          >
            <Box
              sx={{
                marginBottom: "10px",
                width: { xs: "100%", sm: "80%", md: "90%", lg: "95%" },
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
                    {/* Image Shimmer */}
                    <Skeleton
                      variant="rectangular"
                      width={{ xs: 110, sm: 170, md: 130, lg: 170 }}
                      height={{ xs: 80, sm: 120, md: 100, lg: 120 }}
                      sx={{ borderRadius: "1rem" }}
                    />
                    {/* Button Shimmer */}
                    <Skeleton
                      variant="rectangular"
                      width={80}
                      height={30}
                      sx={{ mt: 1, borderRadius: 2 }}
                    />
                  </Grid>

                  <Grid item xs={8}>
                    <CardContent>
                      {/* Title Shimmer */}
                      <Skeleton
                        variant="text"
                        width="60%"
                        height={30}
                        sx={{ marginBottom: "10px" }}
                      />
                      {/* Price Shimmer */}
                      <Skeleton
                        variant="text"
                        width="40%"
                        height={25}
                        sx={{ marginBottom: "10px" }}
                      />
                      {/* Description Shimmer */}
                      <Skeleton
                        variant="text"
                        width="80%"
                        height={20}
                        sx={{ marginBottom: "10px" }}
                      />
                    </CardContent>
                  </Grid>
                </Grid>
              </Card>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ShimmerSpecific;
