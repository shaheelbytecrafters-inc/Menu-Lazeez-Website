import React from 'react';
import { Box, Card, CardContent, CardMedia, Typography, styled } from '@mui/material';

const foods = [
  {
    id: 1,
    name: 'Pizza',
    image: 'https://wallup.net/wp-content/uploads/2017/11/22/371886-food-pizza.jpg',
    description: 'Delicious cheese pizza with pepperoni',
  },
  {
    id: 3,
    name: 'Pizza',
    image: 'https://wallup.net/wp-content/uploads/2017/11/22/371886-food-pizza.jpg',
    description: 'Delicious cheese pizza with pepperoni',
  }
 ];

const FlexCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  margin: '1px',
  padding: '5px',
  cursor: 'pointer',

}));

const CardImage = styled(CardMedia)({
  width: '100px',
  height: '100px',
  borderRadius: '10px',
  objectFit: 'cover',
});

const ContentBox = styled(CardContent)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
});

function LocationModel() {
  return (
    <Box flexDirection="column"
    sx={{ display: 'flex', alignItems: 'center', justifyContent: "flex-end", backgroundColor: 'white', my:{ xs:'33px', sm:'0px' ,lg:'0px'}, marginTop: {xs:'108px', sm: "88px", lg: '88px'}}}>
      {foods.map((food) => (
        <FlexCard key={food.id}>
          <CardImage
            component="img"
            image={food.image}
            alt={food.name}
          />
          <ContentBox>
            <Typography gutterBottom variant="h6" component="div">
              {food.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {food.description}
            </Typography>
          </ContentBox>
        </FlexCard>
      ))}
    </Box>
  );
}

export default LocationModel;
