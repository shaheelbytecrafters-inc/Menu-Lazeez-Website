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
      {shimmerArray.map((_, index) => (
        <Box key={index} sx={{ width: "100%" }}>
          <Divider
            sx={{ width: "100%", marginBottom: "10px"  }}
          />
          <Card
            sx={{
              display: "flex",
              justifyContent: "space-between",
              boxShadow: "none",
              border: "none",
            //   bgcolor: "red",
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={8}>
                <CardContent>
                  <Skeleton variant="text" width="40%" height={30} />
                  <Skeleton
                    variant="text"
                    width="20%"
                    height={25}
                    sx={{ mb: 1 }}
                  />
                  <Skeleton variant="text" width="80%" height={20} />
                </CardContent>
              </Grid>
              <Grid
                item
                xs={4}
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
              >
                <Skeleton
                  variant="rectangular"
                  width={120}
                  height={120}
                  sx={{ borderRadius: 2, mb: 1 }}
                />
                <Skeleton variant="rectangular" width={80} height={40} />
              </Grid>
            </Grid>
          </Card>
          <Divider sx={{ width: "100%", marginTop: "10px" }} />
        </Box>
      ))}
    </Box>
  );
};

export default ShimmerSpecific;
