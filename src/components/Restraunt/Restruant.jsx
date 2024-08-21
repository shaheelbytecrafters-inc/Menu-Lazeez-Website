import { Box, Button, Typography } from '@mui/material';
import MainSearchBar from '../Searchbar/MainSearchBar';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import DirectionIcon from '@mui/icons-material/Directions';
import ShareIcon from '@mui/icons-material/Share';
import './Restaurant.css';

const Restruant = () => {


  // adfadf

  const settings = {
    dots: true,
    lazyLoad: 'ondemand',
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
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
      px={"3px"}

    >
      {console.log('a')}
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
          p={'3px'}
          borderRadius={'12px'}
        >
          <Typography variant="h5" flex={2} fontWeight={'bold'}>Restro-web</Typography>
          <Box display={{ xs: 'none', sm: 'flex' }} flex={6}>
            <MainSearchBar />
          </Box>
          <Box flex={1} display={'flex'} justifyContent={'flex-end'}>User</Box>
        </Box>

        <Divider />

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
              backgroundColor: 'white',
              borderRadius: "10px",
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Box>

        {/* Main Section */}
        <Box display="flex" flexDirection="column" height="93vh">

          {/* Gallery */}
          <Box className="restroGallery" sx={{ width: "auto", }} height={{ xs: '30vh', sm: '40vh' }} marginBottom={'5px'} onClick={handleOpen} >
            {itemData.map((item, index) => (
              <Box key={index} id={`box-${index + 1}`} className="box">
                <img src={item.img} alt={item.title} />
              </Box>
            ))}
          </Box>

          <Box display="flex" justifyContent="space-between" mt={2}>
            <Box flex={1}>
              <Typography variant="h4" color="black">
                Biryani Blues
              </Typography>
              <Typography>Biryani, Hydrabadi, Mughlai</Typography>
              <Typography>DLF Avenue, Saket, New Delhi</Typography>
              <Typography>Opens - 9:30 - 10:00</Typography>

              <Box display="flex" gap={1} mt={1}>
                <Button
                  variant="outlined"
                  size="small"
                  startIcon={<DirectionIcon sx={{ color: 'red' }} />}
                  sx={{
                    backgroundColor: 'transparent',
                    color: 'black',
                    borderColor: 'lightgray'
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
                    borderColor: 'lightgray'
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
                    borderColor: 'lightgray'
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

          <Box display="flex" gap={3} borderBottom="1px solid gray" mx="10px" mt={2}>
            <Button>Overview</Button>
            <Button>Order Online</Button>
            <Button>Reviews</Button>
            <Button>Photos</Button>
            <Button>Menu</Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Restruant;

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