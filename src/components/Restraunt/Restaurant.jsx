import { Box, Button, Card, CardContent, CardMedia, Divider, Grid, IconButton, InputAdornment, Modal, styled, TextField, Typography } from '@mui/material';
import MainSearchBar from '../Searchbar/MainSearchBar';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import DirectionIcon from '@mui/icons-material/Directions';
import ShareIcon from '@mui/icons-material/Share';
import './Restaurant.css';
import SearchIcon from '@mui/icons-material/Search';
import StarIcon from '@mui/icons-material/Star';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useEffect, useRef, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CustomCard } from './CustomCard';
import { MenuCard } from './RestrauntMenu';
import RestaurantCard from './RestrauntCard';
import RestaurantReviewUserCard from './RestaurantReviewuserCard'
import RestaurantOverview from './RestaurantTabs/RestaurantOverview';
import RestaunrantOrderOnline from './RestaurantTabs/RestaunrantOrderOnline';
import RestaurantReviews from './RestaurantTabs/RestaurantReviews';
import RestaurantPhotos from './RestaurantTabs/RestaurantPhotos';
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import RestaurantBooking from './RestaurantTabs/RestaurantBooking';
import RestaurantMenu from './RestaurantTabs/RestaurantMenuTab';
import BreadcrumbNavigation from './BreadcrumbNavigation'

const ArrowButton = styled(Box)(({ direction }) => ({
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  cursor: "pointer",
  zIndex: 1,
  [direction]: direction === "left" ? "-50px" : "-50px", // Adjust this value to position the button
}));

// Custom Arrow Components
const PrevArrow = ({ onClick }) => (
  <ArrowButton direction="left" onClick={onClick}>
    <IconButton
      sx={{
        color: "white",
        fontWeight: "bold",
        background: "#f0ae46", // Initial background color
        "&:hover": {
          background: "#f0ae46", // Darker background color on hover
        },
        boxShadow: "0px 4px 10px #f0ae46", // Add shadow to the icon
        mx: { sm: '0px', xs: '100px' }
      }}
    >
      <ArrowBackIosIcon />
    </IconButton>
  </ArrowButton>
);

const NextArrow = ({ onClick }) => (
  <ArrowButton direction="right" onClick={onClick}>
    <IconButton
      sx={{
        color: "white",
        background: "#f0ae46", // Initial background color
        "&:hover": {
          background: "#f0ae46", // Darker background color on hover
        },
        boxShadow: "0px 4px 10px #f0ae46", // Add shadow to the icon
        mx: { xs: '100px', sm: '0px' }
      }}
    >
      <ArrowForwardIosIcon />
    </IconButton>
  </ArrowButton>
);

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "80vw",
  height: "80vh",
  border: '0px solid #000',
  p: 4,

};


const Restaurant = () => {
  const cards = [
    {
      image:
        "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
      title: "Cheese Burger",
      description: "Burger Arena",
      price: "$3.35",
    },
    {
      image:
        "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
      title: "Cheese Burger",
      description: "Burger Arena",
      price: "$3.35",
    },
    {
      image:
        "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
      title: "Cheese Burger",
      description: "Burger Arena",
      price: "$3.35",
    },
    {
      image:
        "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
      title: "Cheese Burger",
      description: "Burger Arena",
      price: "$3.35",
    },
    {
      image:
        "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
      title: "Cheese Burger",
      description: "Burger Arena",
      price: "$3.35",
    },
    {
      image:
        "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
      title: "Cheese Burger",
      description: "Burger Arena",
      price: "$3.35",
    },
    {
      image:
        "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
      title: "Cheese Burger",
      description: "Burger Arena",
      price: "$3.35",
    },
    {
      image:
        "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
      title: "Cheese Burger",
      description: "Burger Arena",
      price: "$3.35",
    },
  ];

  const tabStyles = {
    textTransform: 'none',
    fontFamily: 'Poppins, sans-serif',
    fontSize: '17px',
    color: 'gray',
    fontWeight: '350',
    '&.Mui-selected': {
      color: 'red',
    },
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    centerMode: false,
    centerPadding: "0",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const settingsForSmallScreenCarousel = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    centerMode: false,
    centerPadding: "0",
  };

  const [open, setOpen] = useState(false);
  const sliderRef = useRef(null);

  useEffect(() => {
    if (open && sliderRef.current) {
      sliderRef.current.slickGoTo(0);
    }
  }, [open]);

  const [value, setValue] = useState(0);

  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => setOpen(false)

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && <Box sx={{ my: '10px' }} >{children}</Box>}
      </div>
    );
  }

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }



  return (
    <Box
      display="flex"
      flexDirection="column"
      width="100vw"
      justifyContent="center"
      alignItems="center"
      boxSizing={'border-box'}
    >
      <Box
        maxWidth={'1115px'}
        width={'100%'}
      >
        {/* Header */}
        <Box
          display="flex"
          flexDirection="row"
          height="7vh"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography
            sx={{
              fontSize: { xs: 25, sm: 35 },
              fontFamily: 'poppins, sans-serif',
              color: 'black',
              fontStyle: 'italic',
              fontWeight: '800',
              fontSize: '30px',
              marginRight: {sm:"10px", md: '0px'}
            }}
          >Lazeez</Typography>
          <Box display={{ xs: 'none', sm: 'block' }} sx={{ borderRadius: '10px',  boxShadow:'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;', maxWidth: '700px', flex: '2' }}>
            <MainSearchBar />
          </Box>
          <Box display={'flex'} justifyContent={'flex-end'} marginRight={'5px'} >
            <Button sx={{fontFamily: 'poppins, sans-serif', fontWeight: '300', color: 'gray'}}>Login</Button>
            <Button sx={{fontFamily: 'poppins, sans-serif', fontWeight: '300', color: 'gray'}}>Sign up</Button>
          </Box>
        </Box>

        <Divider sx={{}}/>

        {/* smallScreenSearchBar */}
        <Box
          display={{ xs: 'flex', sm: 'none' }}
          py={'10px'}
          position={'sticky'}
          top={0}
          zIndex={10}
        >
          <TextField
            placeholder='Search for the restaurant or a dish'
            variant='outlined'
            name='searchValue'
            fullWidth
            sx={{
              bgcolor: 'white',
              border: '1px solid gray',
              borderRadius: "30px",
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  border: "none",
                },
              }
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
              sx: {
                '& input::placeholder': {
                  fontFamily: 'Poppins, sans-srif',
                  fontSize: '14px'
                },
              },
            }}
          />
        </Box>


        <BreadcrumbNavigation />

        {/* Gallery */}

        <Box sx={{ display: { xs: "block", sm: 'none' } }} >
          <Slider {...settingsForSmallScreenCarousel}>
            {cards.map((card, index) => (
              <Box
                key={index}
                sx={{
                  boxSizing: "border-box",
                  height: '27vh',
                  maxHeight: '430px'
                }}
              >
                <Box
                  sx={{
                    height: "100%",
                    maxHeight: '250px',
                    backgroundImage: `url(${card.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderRadius: "0.5rem",
                    marginBottom: "0.4rem",
                  }}
                />
              </Box>
            ))}
          </Slider>
        </Box>

        <Box sx={{ display: { xs: "none", sm: 'block' } }}>
          <Box className="restroGallery" sx={{ width: "auto" }} height={{ xs: '30vh', sm: '40vh' }} marginBottom={'5px'} onClick={handleOpen} >
            {itemData.map((item, index) => (
              <Box key={index} id={`box-${index + 1}`} className="box">
                <img src={item.img} alt={item.title} />
              </Box>
            ))}
          </Box>

          {/* SlikeModal */}
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            sx={{ bgcolor: 'red' }}

          >
            <Box sx={{ ...style, }} position={'relative'}>
              <Button
                onClick={handleClose}
                sx={{
                  position: 'absolute',
                  top: '0px',
                  right: '0px',
                  zIndex: 10,
                  color: 'white'
                }}
              >
                <CloseIcon sx={{ fontSize: '40px' }} />
              </Button>
              <Box sx={{ ...style, overflow: 'visible', display: "flex", alignItems: 'center' }}>
                {/* SLIDER  */}
                <Box
                  sx={{
                    width: "100%",
                    maxWidth: "900px",
                    margin: "0 auto",
                    maxHeight: "800px"
                  }}
                >
                  <Slider {...settings}>
                    {cards.map((card, index) => (
                      <Box
                        key={index}
                        sx={{
                          padding: "0 5px",
                          boxSizing: "border-box",
                          height: '70vh'
                        }}
                      >
                        <Box
                          sx={{
                            height: "100%",
                            backgroundImage: `url(${card.image})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            borderRadius: "0.5rem",
                            marginBottom: "0.4rem",
                          }}
                        />
                      </Box>
                    ))}
                  </Slider>
                </Box>
                {/* <Box>Hello</Box> */}
              </Box>
            </Box>
          </Modal>
        </Box>

        {/* Main Section */}
        <Box display="flex" flexDirection="column" boxSizing={'border-box'} >
          {/*  Info */}
          <Box display={'flex'} justifyContent="space-between" flexDirection={{ xs: 'column-reverse', sm: 'row' }} marginBottom={'5px'} >
            <Box flex={1}>
              <Typography color="#1d1d1d" fontFamily={'poppins, sans-serif'} fontWeight={'500'} sx={
                { fontSize: { xs: '23px', sm: '36px' }, my: { xs: '11px', sm: '3px' } }
              }>
                Biryani Blues
              </Typography>
              <Typography fontFamily={'poppins, sans-serif'} color={'#747474'} sx={{ fontWeight: 500 }}>Biryani, Hydrabadi, Mughlai</Typography>
              <Typography fontFamily={'poppins, sans-serif'} color={'#828282'}>DLF Avenue, Saket, New Delhi</Typography>
              <Typography fontFamily={'poppins, sans-serif'} color={'#747474'}>Opens - 9:30 - 10:00</Typography>

              <Box display="flex" gap={1} my={1}>
                <Button
                  variant="outlined"
                  size="small"
                  startIcon={<DirectionIcon sx={{ color: 'red' }} />}
                  sx={{
                    backgroundColor: 'transparent',
                    color: 'black',
                    borderColor: 'lightgray',
                    p: '5px',
                    px: '10px',
                    textTransform: 'none',
                    fontFamily: 'poppins, sans-serif',
                    fontWeight: '300',
                    fontSize: '14px',
                    '&:hover': {
                      border: '1px solid gray'
                    }
                  }}
                >
                  Direction
                </Button>
                <Button
                  variant="outlined"
                  size="small"
                  startIcon={<BookmarkIcon sx={{ color: 'red' }} />}
                  sx={{
                    backgroundColor: 'transparent',
                    color: 'black',
                    borderColor: 'lightgray',
                    px: '10px',
                    p: '5px',
                    textTransform: 'none',
                    fontFamily: 'poppins, sans-serif',
                    fontWeight: '300',
                    fontSize: '14px',
                    '&:hover': {
                      border: '1px solid gray'
                    }
                  }}
                >
                  Bookmark
                </Button>
                <Button
                  variant="outlined"
                  size="small"
                  startIcon={<ShareIcon sx={{ color: 'red' }} />}
                  sx={{
                    backgroundColor: 'transparent',
                    color: 'black',
                    borderColor: 'lightgray',
                    px: '10px',
                    p: '5px',
                    fontFamily: 'poppins, sans-serif',
                    textTransform: 'none',
                    fontSize: '14px',
                    fontWeight: '300',
                    '&:hover': {
                      border: '1px solid gray'
                    }
                  }}
                >
                  Share
                </Button>
              </Box>

            </Box>
            <Box display="flex" gap={2}>
              <RatingBox rating="4.4" count="935" label="Dining Ratings" />
              <RatingBox rating="4.2" count="1,671" label="Delivery Ratings" />
            </Box>
          </Box>

          {/* Bottom Section */}

          {/* SmallScreenContentSection  */}
          <Box display={{ xs: 'flex', sm: 'none' }}>
            <Box boxSizing={'border-box'}>
              <Box sx={{ marginTop: '20px' }} boxSizing={'border-box'}>
                {data.map((item, index) => (
                  <CustomCard
                    key={index}
                    icon={item.icon}
                    title={item.title}
                    offer={item.offer}
                    bgColor={item.bgColor}
                  />
                ))}
              </Box>

              <Box boxSizing={'border-box'}>
                <Box marginTop={"7px"} padding={'3px'} display={'flex'} justifyContent={'space-between'}>
                  <Typography
                    variant='h6'
                  >
                    Menu
                  </Typography>
                  <Typography>
                    View all menus
                  </Typography>

                </Box>
                <Grid container spacing={1} justifyContent="center" alignItems={'center'}>
                  {menuItems.map((item, index) => (
                    <Grid item key={index}>
                      <MenuCard image={item.image} title={item.title} pages={item.pages} />
                    </Grid>
                  ))}
                </Grid>
              </Box>

              {/* CostumerReview  */}
              <Box mx={'5px'} my={'10px'}>
                <Typography variant='h6'>Reviews</Typography>
                <RestaurantReviewUserCard />
              </Box>

              {/* RestaurantsRecommendtaion  */}
              <Box mx={'5px'}>
                <Typography variant='h6' sx={{ marginBottom: '10px' }}>Recommended Restraunts</Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '9px' }} >
                  <RestaurantCard />
                  <RestaurantCard />
                </Box>
              </Box>
            </Box>
          </Box>

          {/* LargeScreenContentSection  */}
          <Box display={{ xs: 'none', sm: 'flex', }} >
            <Box display={{ xs: 'none', sm: 'flex' }} gap={3}>
              <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                  <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Overview" {...a11yProps(0)} sx={tabStyles} />
                    <Tab label="Order Online" {...a11yProps(1)} sx={tabStyles} />
                    <Tab label="Reviews" {...a11yProps(2)} sx={tabStyles} />
                    <Tab label="Photos" {...a11yProps(3)} sx={tabStyles} />
                    <Tab label="Menu" {...a11yProps(4)} sx={tabStyles} />
                    <Tab label="Book a Table" {...a11yProps(5)} sx={tabStyles} />
                  </Tabs>

                </Box>
                <CustomTabPanel value={value} index={0}>
                  <RestaurantOverview />
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                  <RestaunrantOrderOnline />
                </CustomTabPanel>
                <CustomTabPanel value={value} index={2}>
                  <RestaurantReviews />
                </CustomTabPanel>
                <CustomTabPanel value={value} index={3}>
                  <RestaurantPhotos />
                </CustomTabPanel>
                <CustomTabPanel value={value} index={4}>
                  <RestaurantMenu />
                </CustomTabPanel>
                <CustomTabPanel value={value} index={5}>
                  <RestaurantBooking />
                </CustomTabPanel>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Restaurant;

const itemData = [
  {
    img: 'https://b.zmtcdn.com/data/pictures/chains/9/21197839/4d9e82d351b9dfa74d248bdc29dd4f76.jpeg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*',
    title: 'Bed',
  },
  {
    img: 'https://b.zmtcdn.com/data/pictures/chains/9/21197839/6cc8e0a0bc61b5acbe02ddd089965299.jpg?output-format=webp&fit=around|300:273&crop=300:273;*,*',
    title: 'Kitchen',
  },
  {
    img: 'https://b.zmtcdn.com/data/pictures/chains/9/21197839/d7e565496c8b49321a5ca651956da1e0.jpeg?output-format=webp&fit=around|300:273&crop=300:273;*,*',
    title: 'Sink',
  },
  {
    img: 'https://images.unsplash.com/photo-1525097487452-6278ff080c31',
    title: 'Books',
  },
];

const RatingBox = ({ rating, count, label }) => (
  <Box display="flex" gap={0.5}>
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      sx={{
        backgroundColor: '#248045',
        color: 'white',
        padding: '0 6px',
        borderRadius: '4px',
        height: '24px',
        marginTop: '5px'
      }}
    >
      <Typography variant="body2" component="span" sx={{ display: 'flex', alignItems: 'center', }}>
        {rating}
        <StarIcon sx={{ fontSize: 16, ml: 0.5 }} />
      </Typography>
    </Box>
    <Box ml={1}>
      <Typography variant="body2">{count}</Typography>
      <Typography
        variant="caption"
        color="textSecondary"
        sx={{ display: 'block', lineHeight: '1' }}
      >
        {label}
      </Typography>
    </Box>
  </Box>
);

const imageData = [
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

const data = [
  {
    icon: '🛵',
    title: 'Order Online',
    offer: '₹188 OFF',
    bgColor: '#fff3e0',
  },
  {
    icon: '🍽️',
    title: 'Book a Table',
    bgColor: '#e3f2fd',
  },
];

const menuItems = [
  {
    image: 'https://cdn.geckoandfly.com/wp-content/uploads/2019/06/menu-template-restaurant-cafe-templates-30.jpg',
    title: 'Food Menu',
    pages: '7 pages',
  },
  {
    image: 'https://cdn.geckoandfly.com/wp-content/uploads/2019/06/menu-template-restaurant-cafe-templates-30.jpg',
    title: 'Beverages',
    pages: '5 pages',
  },
];

const cards = [
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0EbtAMkvjstpwiT8oSwwiPDJXVpC_KAaHdw&s",
    title: "Restaurant 1",
    description: "Description for Restaurant 1",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0EbtAMkvjstpwiT8oSwwiPDJXVpC_KAaHdw&s",
    title: "Restaurant 2",
    description: "Description for Restaurant 2",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0EbtAMkvjstpwiT8oSwwiPDJXVpC_KAaHdw&s",
    title: "Restaurant 3",
    description: "Description for Restaurant 3",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0EbtAMkvjstpwiT8oSwwiPDJXVpC_KAaHdw&s",
    title: "Restaurant 4",
    description: "Description for Restaurant 4",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0EbtAMkvjstpwiT8oSwwiPDJXVpC_KAaHdw&s",
    title: "Restaurant 5",
    description: "Description for Restaurant 5",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0EbtAMkvjstpwiT8oSwwiPDJXVpC_KAaHdw&s",
    title: "Restaurant 6",
    description: "Description for Restaurant 6",
  },
];