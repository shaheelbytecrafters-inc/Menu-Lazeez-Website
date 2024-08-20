import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import StarIcon from '@mui/icons-material/Star';
import { Box, Chip } from '@mui/material';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard() {

  return (
    <Card sx={{ width: '100%' }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            A
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            Follow
          </IconButton>
        }
        title="Aryan"
        subheader="0 reviews 1 Followers"
      />
      <CardContent>
        <Box display={'flex'} marginBottom={'5px'}>
      <Chip
            icon={<StarIcon sx={{ color: 'white', fontSize: '1rem' }} />}
            label="4.4"
            sx={{
              backgroundColor: '#4caf50',
              color: 'white',
              fontWeight: 'bold',
              marginRight: '8px',
              height: '24px',
              borderRadius: '5px',
              fontSize: '14px',
              paddingLeft: '4px',
              paddingRight: '4px',
            }}
          />
          <Typography variant="body2" color="textSecondary" sx={{ marginRight: '8px' }}>
            DINING
          </Typography>
          </Box>
        <Typography variant="body2" color="text.secondary">
          first time here the food was pretty nice and the dessert (coconut & jaggery pudding) really blew me away. it has to be my favourite pan Asian place in towen because everything on their meny is basolutely delicious from the dumsums to suchi to the drunken noodless!!
        </Typography>
      </CardContent>
    </Card>
  );
}
