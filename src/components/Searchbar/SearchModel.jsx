// import React from 'react';
// import { Box, Card, CardContent, CardMedia, Typography, styled } from '@mui/material';
// import { useNavigate } from 'react-router-dom';
// // Sample foods array
// const foods = [
//   {
//     id: 1,
//     name: 'Pizza',
//     image: 'https://wallup.net/wp-content/uploads/2017/11/22/371886-food-pizza.jpg',
//     description: 'Delicious cheese pizza with pepperoni',
//   },
//   {
//     id: 3,
//     name: 'Pizza',
//     image: 'https://wallup.net/wp-content/uploads/2017/11/22/371886-food-pizza.jpg',
//     description: 'Delicious cheese pizza with pepperoni',
//   },
//   {
//     id: 2,
//     name: 'burger',
//     image: 'https://i0.wp.com/thenutritionadventure.com/wp-content/uploads/2017/07/PourHouseAmericanBurger.jpg?resize=5236%2C3490',
//     description: 'Delicious cheese burger with pepperoni',
//   },
//   {
//     id: 4,
//     name: 'burger',
//     image: 'https://i0.wp.com/thenutritionadventure.com/wp-content/uploads/2017/07/PourHouseAmericanBurger.jpg?resize=5236%2C3490',
//     description: 'Delicious cheese burger with pepperoni',
//   }, {
//     id: 5,
//     name: 'Pizza',
//     image: 'https://wallup.net/wp-content/uploads/2017/11/22/371886-food-pizza.jpg',
//     description: 'Delicious cheese pizza with pepperoni',
//   },
//   {
//     id: 6,
//     name: 'Pizza',
//     image: 'https://wallup.net/wp-content/uploads/2017/11/22/371886-food-pizza.jpg',
//     description: 'Delicious cheese pizza with pepperoni',
//   },
//   {
//     id: 7,
//     name: 'burger',
//     image: 'https://i0.wp.com/thenutritionadventure.com/wp-content/uploads/2017/07/PourHouseAmericanBurger.jpg?resize=5236%2C3490',
//     description: 'Delicious cheese burger with pepperoni',
//   },
//   {
//     id: 8,
//     name: 'burger',
//     image: 'https://i0.wp.com/thenutritionadventure.com/wp-content/uploads/2017/07/PourHouseAmericanBurger.jpg?resize=5236%2C3490',
//     description: 'Delicious cheese burger with pepperoni',
//   },
// ];

// const FlexCard = styled(Card)(({ theme }) => ({
//   display: 'flex',
//   alignItems: 'center',
//   margin: '1px',
//   padding: '5px',
//   cursor: 'pointer',
// }));

// const CardImage = styled(CardMedia)({
//   width: '100px',
//   height: '100px',
//   borderRadius: '10px',
//   objectFit: 'cover',
// });

// const ContentBox = styled(CardContent)({
//   display: 'flex',
//   flexDirection: 'column',
//   justifyContent: 'center',
// });

// function SearchItem() {
//   const navigate=useNavigate()

//   const handleClick=()=>{
//     console.log("I am Clicked")
    
//   }
  
//   return (
//     <Box
//       sx={{  flexDirection: "column", height: "400px",  overflow: 'auto'}}>
//       {foods.map((food) => (
//         <FlexCard key={food.id} onClick={handleClick}>
//           <CardImage
//             component="img"
//             image={food.image}
//             alt={food.name}
//           />
//           <ContentBox>
//             <Typography gutterBottom variant="h6" component="div">
//               {food.name}
//             </Typography>
//             <Typography variant="body2" color="text.secondary">
//               {food.description}
//             </Typography>
//           </ContentBox>
//         </FlexCard>
//       ))}
//     </Box>
//   );
// }

// export default SearchItem;


import React from 'react';
import { Box, Card, CardContent, CardMedia, Typography, styled } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
// Sample foods array
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
  },
  {
    id: 2,
    name: 'burger',
    image: 'https://i0.wp.com/thenutritionadventure.com/wp-content/uploads/2017/07/PourHouseAmericanBurger.jpg?resize=5236%2C3490',
    description: 'Delicious cheese burger with pepperoni',
  },
  {
    id: 4,
    name: 'burger',
    image: 'https://i0.wp.com/thenutritionadventure.com/wp-content/uploads/2017/07/PourHouseAmericanBurger.jpg?resize=5236%2C3490',
    description: 'Delicious cheese burger with pepperoni',
  }, {
    id: 5,
    name: 'Pizza',
    image: 'https://wallup.net/wp-content/uploads/2017/11/22/371886-food-pizza.jpg',
    description: 'Delicious cheese pizza with pepperoni',
  },
  {
    id: 6,
    name: 'Pizza',
    image: 'https://wallup.net/wp-content/uploads/2017/11/22/371886-food-pizza.jpg',
    description: 'Delicious cheese pizza with pepperoni',
  },
  {
    id: 7,
    name: 'burger',
    image: 'https://i0.wp.com/thenutritionadventure.com/wp-content/uploads/2017/07/PourHouseAmericanBurger.jpg?resize=5236%2C3490',
    description: 'Delicious cheese burger with pepperoni',
  },
  {
    id: 8,
    name: 'burger',
    image: 'https://i0.wp.com/thenutritionadventure.com/wp-content/uploads/2017/07/PourHouseAmericanBurger.jpg?resize=5236%2C3490',
    description: 'Delicious cheese burger with pepperoni',
  },
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
function SearchItem({setShowModels}) {
  const navigate = useNavigate();

  const handleClick = () => {
    // setShowModels("searchValue")
    console.log("Navigating to food details for id:");
    navigate(`/foodDetails`);
  };

  return (
    <Box
      sx={{ flexDirection: "column", height: "400px", overflow: 'auto' }}>
      {foods.map((food) => (

        <Link  to={"/foodDetails"} style={{textDecoration:"none"}} key={food.id}>
        <FlexCard >
        
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
          </Link>
      ))}
    </Box>
  );
}
export default SearchItem;