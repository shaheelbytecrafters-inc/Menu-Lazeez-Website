import Card from "@mui/material/Card";
// import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
// import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
// import { red } from "@mui/material/colors";
// import MoreVertIcon from "@mui/icons-material/MoreVert";
// import {IconButton} from "@mui/icons-material"
import { Box } from "@mui/material";
// import data from "./dummyCardData"; // Import your dummy data

export default function RestaurantCard({ restaurant }) {
  return (
    <Box>
      <Card
        key={restaurant.id}
        sx={{
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Optional: shadow for better visual
          transition: "background-color 0.3s ease, box-shadow 0.3s ease", // Smooth transition
          borderRadius:"0.7rem",
          "&:hover": {
              transform: "scale(1.05)",
            backgroundColor: "#f0f0f0", // Change background color on hover
            boxShadow: "0px 6px 10px rgba(0, 4, 6, 0.2)", // Change shadow on hover

          },
        }}
      >
        {/* <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              {restaurant.name[0]}
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={restaurant.name}
          subheader={restaurant.cuisine}
        /> */}
        <CardMedia
          component="img"
          height="194"
          image={restaurant.image}
          alt={restaurant.name}
        />
        <CardContent>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="body2" color="text.secondary">
              {`₹${restaurant.price_for_two} for two`}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {restaurant.rating} stars
            </Typography>
          </Box>

          <Typography variant="body2" color="text.secondary">
            {restaurant.location}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {`Delivery time: ${restaurant.delivery_time}`}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
