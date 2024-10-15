import { Grid, Box, Skeleton } from "@mui/material";

export default function ShimmerUiCard() {
  const shimmerCount = 8; // Number of shimmer cards to display

  return (
    <Grid container spacing={2} marginInline="1rem">
      {Array.from({ length: shimmerCount }, (_, index) => (
        <Grid item xs={12} sm={6} md={6} lg={4} key={index}>
          <Box
            sx={{
              borderRadius: "0.5rem",
              overflow: "hidden",
              width: "80%", // Ensuring it takes full grid width
              padding: "1rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              transition: "box-shadow 0.3s ease",
            }}
          >
            {/* Shimmer for Image */}
            <Skeleton
              variant="rectangular"
              width="100%"
              height={200}
              sx={{
                borderRadius: "7px",
                marginBottom: "1rem",
              }}
            />

            <Box sx={{ width: "100%" }}>
              {/* Shimmer for Name and Rating */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "0.5rem",
                }}
              >
                <Skeleton
                  variant="text"
                  width="60%"
                  height={20}
                  sx={{ borderRadius: "4px" }}
                />
                <Skeleton
                  variant="text"
                  width="30px"
                  height={20}
                  sx={{ borderRadius: "4px" }}
                />
              </Box>

              {/* Shimmer for Location */}
              <Skeleton
                variant="text"
                width="80%"
                height={15}
                sx={{ borderRadius: "4px", marginBottom: "0.3rem" }}
              />
            </Box>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}
