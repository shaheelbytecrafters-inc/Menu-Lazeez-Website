import { Card, CardContent, Grid, Typography, Box } from "@mui/material";
import paperbag from "../../../src/assets/icons/paper-bag.png";
import motorcycle from "../../../src/assets/icons/motorcycle.png";
import fileIcon from "../../../src/assets/icons/fileIcon.png";
const cards = [
  {
    image: fileIcon,
    title: "Step 1",
    subheader: "Create your page on Zomato",
    content: "Help users discover your place by creating a listing on Zomato",
    bgColor: "#FFFCF1",
  },
  {
    image: motorcycle,
    title: "Step 2",
    subheader: "Register for online ordering",
    content: "And deliver orders to millions of customers with ease",
    bgColor: "#FFF5F6",
  },
  {
    image: paperbag,
    title: "Step 3",
    subheader: "Start receiving orders online",
    content: "Manage orders on our partner app, web dashboard, or API partners",
    bgColor: "#FFF9F1",
  },
];

function CardWork() {
  return (
    <Box
      sx={{
        width: "100%",
        position: "relative",
        width: "100%",
        backgroundImage: `url(
          "https://b.zmtcdn.com/merchant-onboarding/f57794be6408563354c463c702ab45b91600672364.png"
        )`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        overflowX: "hidden", 
        paddingBottom: "2rem", 
        zIndex: 1, 
        height: {
          lg: "50%",
        },
      }}
    >
      {/* Background Image Section */}
      <Box
        sx={{
          position: "relative",
          zIndex: 0,
        }}
      >
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            fontWeight: "500",
            color: "black",
            padding: 7,
            fontSize: { xs: "26px", sm: "30px", md: "36px" },
            position: "relative", 
            zIndex: 1,
          }}
        >
          How it works?
        </Typography>
      </Box>

      {/* Card Section */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          paddingTop: { xs: "30px", sm: "20px", md: "30px" },
          padding: "2",
          zIndex: 1, 
        }}
      >
        <Grid container spacing={2} justifyContent="center">
          {cards.map((card, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              key={index}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              {/* Card */}
              <Card
                sx={{
                  height: { xs: 370, sm: 337 },
                  width: "100%",
                  maxWidth: { xs: 350, md: 275 },
                  textAlign: "center",
                  boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  overflow: "hidden",
                }}
              >
                {card.image && (
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      sx={{
                        marginBottom: "15px",
                        height: "140px",
                        width: "140px",
                        borderRadius: "50%",
                        backgroundColor: card.bgColor,
                      }}
                    >
                      <Box
                        sx={{
                          width: "60px",
                          height: "60px",
                          display: "flex",
                          justifyContent: "center",
                          padding: "40px",
                          alignItems: "center",
                          overflow: "hidden",
                        }}
                      >
                        <img
                          src={card.image}
                          alt={card.title}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                        />
                      </Box>
                    </Box>
                  </Box>
                )}
                <CardContent sx={{ textAlign: "center" }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "550",
                      fontSize: "20px",
                      color: "#1C1C1C",
                    }}
                  >
                    {card.title}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{ fontWeight: "550", color: "#4F4F4F" }}
                  >
                    {card.subheader}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontWeight: "300",
                      lineHeight: 1.9,
                      color: "#4F4F56",
                    }}
                  >
                    {card.content}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default CardWork;