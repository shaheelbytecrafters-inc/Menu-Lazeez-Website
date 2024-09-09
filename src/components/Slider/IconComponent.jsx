import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import {
  FaLocationDot,
  FaBell,
  FaFileInvoiceDollar,
  FaCircleUser,
} from "react-icons/fa6";

// Custom styles for the footer
const FooterContainer = styled(Box)(({ theme }) => ({
  borderTop: `1px solid ${theme.palette.divider}`,
  backgroundImage:
    'url("https://www.transparenttextures.com/patterns/smoke.png")',
  backgroundSize: "cover",
  backgroundBlendMode: "overlay",
  padding: theme.spacing(4),
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  padding: theme.spacing(2),
}));

const Description = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(1),
  fontWeight: "bold",
  fontSize: "1.2rem",
}));

const iconData = [
  {
    icon: (
      <FaLocationDot
        fontSize="5rem"
        color="#f0ae46"
        filter="drop-shadow(6px 5px 10px #f0ae46)"
      />
    ),
    title: "Select location",
    description: "Choose the location where your food will be delivered",
  },
  {
    icon: (
      <FaBell
        fontSize="5rem"
        color="#f0ae46"
        filter="drop-shadow(6px 5px 10px #f0ae46)"
      />
    ),
    title: "Choose order",
    description: "Check over hundreds of menus to pick your favorite food",
  },
  {
    icon: (
      <FaFileInvoiceDollar
        fontSize="5rem"
        color="#f0ae46"
        filter="drop-shadow(6px 5px 10px #f0ae46)"
      />
    ),
    title: "Pay advanced",
    description:
      "It's quick, safe, and simple. Select several methods of payment",
  },
  {
    icon: (
      <FaCircleUser
        fontSize="5rem"
        color="#f0ae46"
        filter="drop-shadow(6px 5px 10px #f0ae46)"
      />
    ),
    title: "Enjoy meals",
    description: "Food is made and delivered directly to your home",
  },
];

function IconComponent() {
  return (
    <Box
      // backgroundColor="#FFFBF7"
      sx={{
        marginInline: {
          xs: "1rem",
          sm: "2rem",
          md: "3rem",
          lg: "6rem",
        },
      }}
    >
      <FooterContainer>
        <Typography
          sx={{
            fontSize: {
              xs: "1.3rem",
              sm: "1.4rem",
              md: "1.5rem",
              lg: "1.7rem",
            },
            pl: {
              xs: 2,
              sm: 4,
              md: 6,
              lg: 8,
            },
            fontWeight: "900",
            textAlign: "center",
            color: "#fc8803",
            marginBottom: {
              xs: "1rem",
              sm: "1.5rem",
              md: "2rem",
              lg: "2.5rem",
            },
          }}
        >
          How Does it work
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: {
              xs: "column", // Column layout on extra-small screens
              sm: "row", // Row layout on small screens and above
            },
            flexWrap: "wrap", // Allow items to wrap in row layout
            justifyContent: "center",
            gap: "1rem", // Adjust spacing between items
          }}
        >
          {iconData.map((item, index) => (
            <Box
              key={index}
              sx={{
                flex: "1 1 100%", // Full width on extra-small screens
                maxWidth: "25rem", // Maximum width for each item
                textAlign: "center",
                marginBottom: {
                  xs: "2rem", // Margin at the bottom for column layout
                  sm: 0, // No margin for row layout
                },
                // Additional responsiveness based on screen size
                "@media (min-width: 600px)": {
                  flex: "1 1 48%", // Approximately half width on small screens
                },
                "@media (min-width: 900px)": {
                  flex: "1 1 22%", // Approximately one-fourth width on medium screens
                },
              }}
            >
              <IconWrapper>
                {item.icon}
                <Description
                  sx={{
                    marginTop: "1.4rem",
                    fontSize: {
                      xs: "0.9rem",
                      sm: "0.9rem",
                      md: "1rem",
                      lg: "1rem",
                    },
                    marginBottom: "0.8rem",
                  }}
                >
                  {item.title}
                </Description>
                <Typography
                  variant="body2"
                  color="gray"
                  sx={{
                    fontSize: {
                      xs: "0.8rem",
                      sm: "0.9rem",
                      md: "1rem",
                      lg: "0.8rem",
                    },
                  }}
                >
                  {item.description}
                </Typography>
              </IconWrapper>
            </Box>
          ))}
        </Box>
      </FooterContainer>
    </Box>
  );
}

export default IconComponent;
