import { Grid, Box, Skeleton } from "@mui/material";

export default function ShimmerCardUi() {
  const shimmerCount = 8; // Number of shimmer cards you want to display

  return (
    <Grid container spacing={2} marginInline={"2rem"}>
      {[...Array(shimmerCount)].map((_, index) => (
        <Grid item xs={12} sm={6} md={6} lg={4} key={index} >
          <Box
            sx={{
              borderRadius: "0.5rem",
              overflow: "hidden",
              width: "80%", // Ensuring it takes full grid width
              transition: "box-shadow 0.3s ease",
            //   boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.1)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "1rem",
              lineHeight: "1rem",
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
                sx={{ marginBottom: "0.3rem", borderRadius: "4px" }}
              />
            </Box>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}
