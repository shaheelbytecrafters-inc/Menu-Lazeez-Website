import { Box, Typography, IconButton } from "@mui/material";
import laptop from "../../../src/assets/images/laptop.jpeg";

const SignUpPartner = () => {
  return (
    <Box
      sx={{
        marginInline: {
          xs: "1rem",
          sm: "2rem",
          md: "4rem",
          lg: "6rem",
        },
        marginTop: "3rem",
        minHeight: "30vh", 
        marginBottom: "2rem",
      }}
    >
      <Typography
        sx={{
          fontSize: {
            xs: "1rem",
            sm: "18px",
            md: "26px",
            lg: "36px",
          },
          fontWeight: "500",
          lineHeight: "48px",
          marginBottom: "1rem",
        }}
      >
        What do you get on sign-up
      </Typography>
      <Typography
        sx={{
          fontSize: {
            xs: "12px",
            sm: "16px",
            md: "18px",
            lg: "23px",
          },
          lineHeight: "32px",
          color: "rgb(105,105,105)",
          marginBottom: "2rem",
        }}
      >
        Lazeez Partner Platform helps you take your business to new heights
        instantly with no hassle and 100% transparency!
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column",
            md: "row",
          },
        }}
      >
        {/* Left content */}
        <Box
          sx={{
            flex: 1,
            padding: "0",
            margin: "0",
          }}
        >
          {[
            {
              number: 1,
              text: "Restaurant Partner app:",
              description:
                "Manage all your orders on your smartphone with our Android app.",
            },
            {
              number: 2,
              text: "Restaurant Partner web dashboard:",
              description: "Manage all your orders on your desktop or laptop.",
            },
            {
              number: 3,
              text: "API integration:",
              description:
                "Manage all your orders on your existing Point of Sale (POS) or third-party software.",
            },
          ].map(({ number, text, description }) => (
            <Box
              key={number}
              sx={{
                boxShadow: {
                  xs: "0px 4px 10px rgba(0, 0, 0, 0.1)", 
                  md: "none", 
                  borderRadius: "8px",
                  padding: "8px",
                },
                "&:hover": {
                  boxShadow: {
                    xs: "0px 6px 15px rgba(0, 0, 0, 0.2)", 
                    md: "none", 
                  },
                },
                marginBottom: "1rem",
                "&:last-child": {
                  marginBottom: "0", 
                },
                "&:hover .icon-button": {
                  border: "2px solid #0366D6", 
                  backgroundColor: "#f2f2f2", 
                },
                "&:hover .typography-text": {
                  color: "#0366D6", 
                },
                "&:hover .icon-button, &:hover .typography-text": {
                  color: "#0366D6",
                },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "1rem",
                }}
              >
                <IconButton
                  className="icon-button"
                  sx={{
                    width: "35px",
                    height: "35px",
                    borderRadius: "50%",
                    border: "1px solid #363636", 
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "1.2rem",
                    marginRight: "0.4rem",
                    "&:hover": {
                      border: "2px solid #0366D6",
                      color: "#0366D6", 
                      backgroundColor: "#f2f2f2",
                    },
                  }}
                >
                  {number}
                </IconButton>
                <Typography
                  className="typography-text"
                  sx={{
                    fontSize: {
                      xs: "14px",
                      sm: "16px",
                      md: "18px",
                      lg: "24px",
                    },
                    fontWeight: "500",
                    "&:hover": {
                      color: "#0366D6", 
                    },
                  }}
                >
                  {text}
                </Typography>
              </Box>
              <Typography
                sx={{
                  fontSize: {
                    xs: "16px",
                    sm: "18px",
                    md: "20px",
                    lg: "20px",
                  },
                  fontWeight: "300",
                  marginBottom: "0", 
                  color: "#696969",
                }}
              >
                {description}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* Right content */}
        <Box
          sx={{
            flex: 1,
            maxHeight: "15rem",
            display: {
              xs: "none",
              md: "block",
              lg: "block",
            },
            padding: {
              xs: "1rem",
              md: "0",
            },
            backgroundImage: `url(${laptop})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            objectFit: "contain",
          }}
        ></Box>
      </Box>
    </Box>
  );
};

export default SignUpPartner;
