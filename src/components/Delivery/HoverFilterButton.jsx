// import { useState } from "react";
// import { Fab, Popover, Typography, Box, Button } from "@mui/material";
// import FilterAltIcon from "@mui/icons-material/FilterAlt";
// import MoveToInboxIcon from "@mui/icons-material/MoveToInbox";

// const HoverFilterButton = () => {
//   const [anchorEl, setAnchorEl] = useState(null);

//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   const open = Boolean(anchorEl);
//   const id = open ? "simple-popover" : undefined;

//   const buttonStyle = {
//     color: "gray",
//     borderColor: "gray",
//     borderWidth: 1.4, // Reduced border thickness
//     borderRadius: "4rem",
//     padding: "2px 8px", // Reduced padding
//     fontSize: "0.75rem", // Decreased font size
//     "&:hover": {
//       borderColor: "gray",
//       backgroundColor: "transparent",
//       color: "black",
//     },
//   };

//   const priceBtn = {
//     ...buttonStyle,
//     borderRadius: "3px",
//     padding: "2px 8px", // Reduced padding
//   };

//   return (
//     <Box>
//       <Fab
//         variant="extended"
//         sx={{
//           display: "flex",
//           alignItems: "center",
//           mt: 2,
//           mb: "3px",
//           // zIndex: 1300,
//           bgcolor: "white",
//           color: "black",
//         }}
//         onClick={handleClick}
//       >
//         <FilterAltIcon sx={{ mr: 1 }} />
//         Filter
//       </Fab>
//       <Popover
//         id={id}
//         open={open}
//         anchorEl={anchorEl}
//         onClose={handleClose}
//         anchorOrigin={{
//           vertical: "bottom",
//           horizontal: "left",
//         }}
//         transformOrigin={{
//           vertical: "top",
//           horizontal: "left",
//         }}
//         sx={{
//           zIndex: 1400,
//           mt: 1,
//         }}
//       >
//         <Box
//           m={"1rem"} // Decreased margin
//           sx={{
//             width: {
//               xs: "80vw",
//               sm: "70vw",
//               md: "45vw",
//               lg: "25vw",
//               xl: "20vw",
//             },
//             overflow: "hidden",
//             maxHeight: "60vh", // Reduced height
//             paddingRight: { xs: "12px", sm: "8px" },
//           }}
//         >
//           <Typography
//             sx={{
//               textAlign: "end",
//               fontSize: { xs: "0.7rem", sm: "0.8rem" }, // Decreased font size
//               fontWeight: "bold",
//               mb: 0.5,
//               pr: { xs: "16px", sm: "10px" }, // Reduced padding-right
//             }}
//           >
//             Reset All Filters
//           </Typography>
//           <Typography
//             sx={{ fontSize: { xs: "0.7rem", sm: "0.9rem" }, mb: 1 }} // Decreased font size
//           >
//             Food Preference
//           </Typography>
//           <Box
//             sx={{
//               display: "flex",
//               flexDirection: { xs: "column", sm: "row" },
//               gap: { xs: 0.5, sm: 0.8 },
//               alignItems: "flex-start",
//               flexWrap: "wrap",
//             }}
//           >
//             <Button
//               variant="outlined"
//               href="#outlined-buttons"
//               sx={buttonStyle}
//             >
//               Veg
//             </Button>
//             <Button
//               variant="outlined"
//               href="#outlined-buttons"
//               sx={{
//                 ...buttonStyle,
//                 mt: { xs: 0.5, sm: 0 },
//                 ml: { xs: 0, sm: 0.4 },
//               }}
//             >
//               Contains Egg
//             </Button>
//           </Box>
//           <Box
//             sx={{
//               mt: 1,
//               display: "flex",
//               gap: { xs: 0.5, sm: 0.8 },
//               flexWrap: "wrap",
//             }}
//           >
//             <Button
//               variant="outlined"
//               href="#outlined-buttons"
//               sx={buttonStyle}
//             >
//               Non Veg
//             </Button>
//           </Box>
//           <Typography
//             sx={{ fontSize: { xs: "0.7rem", sm: "0.9rem" }, mt: 1, mb: 1 }} // Decreased font size
//           >
//             Cuisine
//           </Typography>
//           <Box
//             sx={{
//               display: "flex",
//               flexDirection: { xs: "column", sm: "row" },
//               gap: { xs: 0.5, sm: 0.8 },
//               alignItems: "flex-start",
//               flexWrap: "wrap",
//             }}
//           >
//             <Button
//               variant="outlined"
//               href="#outlined-buttons"
//               sx={buttonStyle}
//             >
//               World Cuisine
//             </Button>
//             <Button
//               variant="outlined"
//               href="#outlined-buttons"
//               sx={{
//                 ...buttonStyle,
//                 mt: { xs: 0.5, sm: 0 },
//                 ml: { xs: 0, sm: 0.4 },
//               }}
//             >
//               618 cal I Calorie
//             </Button>
//             <Button
//               variant="outlined"
//               href="#outlined-buttons"
//               sx={{
//                 ...buttonStyle,
//                 mt: { xs: 0.5, sm: 0 },
//                 ml: { xs: 0, sm: 0.4 },
//               }}
//             >
//               Universal
//             </Button>
//           </Box>
//           <Typography
//             sx={{ fontSize: { xs: "0.7rem", sm: "0.9rem" }, mt: 1, mb: 1 }} // Decreased font size
//           >
//             Trending
//           </Typography>
//           <Box>
//             <Button
//               variant="outlined"
//               href="#outlined-buttons"
//               sx={buttonStyle}
//             >
//               Best Offer
//             </Button>
//           </Box>
//           <Typography
//             sx={{ fontSize: { xs: "0.7rem", sm: "0.9rem" }, mt: 1, mb: 1 }} // Decreased font size
//           >
//             Price
//           </Typography>
//           <Button
//             variant="outlined"
//             endIcon={<MoveToInboxIcon />}
//             sx={{ ...priceBtn }}
//           >
//             Price
//           </Button>
//         </Box>
//         <Box
//           sx={{
//             padding: "0.8rem", // Decreased padding
//             backgroundColor: "#fe0604",
//             textAlign: "center",
//             fontSize: "0.9rem", // Decreased font size
//             fontWeight: "bold",
//             color: "white",
//           }}
//         >
//           Apply (377 Dishes)
//         </Box>
//       </Popover>
//     </Box>
//   );
// };

import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
  Box,
  Typography,
  Tab,
  Tabs,
  styled,
  Divider,
  Slider,
  TextField,
  InputAdornment
} from '@mui/material';

import SearchIcon from "@mui/icons-material/Search";


const HoverFilterButton = () => {
  const [value, setValue] = useState(0);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [selectedValue, setSelectedValue] = useState('Popularity');

  // const handleChange = (event) => {
  //   setSelectedValue(event.target.value);
  // };

  const marks = [
    {
      value: 0,
      label: 'Any',
    },
    {
      value: 3.5,
      label: '3.5',
    },
    {
      value: 4,
      label: '4.0',
    },
    {
      value: 4.5,
      label: '4.5',
    },
    {
      value: 5,
      label: '5.0',
    },
  ];

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const tabStyles = {
    padding: 0,
    px: { xs: '5px', sm: '7px', md: '9px' },
    textTransform: 'none',
    alignItems: 'flex-start',
    fontFamily: 'Poppins, sans-serif',
    fontSize: { xs: '15px', sm: '17px' },
    color: 'gray',
    fontWeight: '300',
    justifyContent: 'flex-start',
    textAlign: 'left',
    '&.Mui-selected': {
      color: 'red',
      fontWeight: '400',
    },
  };

  const [range, setRange] = useState([0, 5]);

  const handleChangeRange = (event, newValue) => {
    setValue(newValue);
  };

  const valuetext = (value) => {
    return `${value}`;
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
    <>
      <Button variant="outlined" onClick={handleOpen}>Filters</Button>
      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <Box bgcolor={"green"} sx={{ width: "700px" }}>
          <DialogTitle sx={{ p: 0, px: { xs: "5px", sm: '7px', md: "9px" }, my: { xs: '5px', sm: '8px', md: '11px' }, fontFamily: 'poppins, sans-serif', fontWeight: "500", fontSize: { xs: "20px", sm: '24px', md: "27px" } }}>
            Filters
          </DialogTitle>
          <Divider sx={{ marginBottom: { xs: "5px", sm: '10px', md: '13px' } }} />
          <DialogContent sx={{ p: 0 }}>
            <Box display="flex">
              <Box
                display="flex"
                flexDirection="column"
                width="200px"
                mr={2}
                borderRight="1px solid #ccc"
              >
                <Box flexGrow={1} sx={{ borderBottom: 1, borderColor: 'divider', }}>
                  <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" orientation='vertical'>
                    <Tab label="Sort by" {...a11yProps(0)} sx={tabStyles} />
                    <Tab label="Cuisines" {...a11yProps(1)} sx={tabStyles} />
                    <Tab label="Rating" {...a11yProps(2)} sx={tabStyles} />
                    <Tab label="Cost per person" {...a11yProps(3)} sx={tabStyles} />
                  </Tabs>
                </Box>
              </Box>

              <Box flexGrow={2}>
                <CustomTabPanel value={value} index={0}>
                  <FormControl component="fieldset">
                    <Typography variant="h6">Sort by</Typography>
                    <RadioGroup value={selectedValue} onChange={handleChange}>
                      <FormControlLabel value="Popularity" control={<Radio />} label="Popularity" />
                      <FormControlLabel value="Rating: High to Low" control={<Radio />} label="Rating: High to Low" />
                      <FormControlLabel value="Delivery Time" control={<Radio />} label="Delivery Time" />
                      <FormControlLabel value="Cost: Low to High" control={<Radio />} label="Cost: Low to High" />
                      <FormControlLabel value="Cost: High to Low" control={<Radio />} label="Cost: High to Low" />
                    </RadioGroup>
                  </FormControl>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                  <Box display={'flex'} justifyContent={"center"}>
                    <TextField
                      sx={{
                        width: '90%', backgroundColor: 'white',
                        borderRadius: "10px",
                      }}
                      placeholder='Search here'
                      variant='outlined'
                      name='location'
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <Button
                              sx={{
                                minWidth: 'auto',
                                padding: 0
                              }}
                            >
                              <SearchIcon sx={{ color: 'red' }} />
                            </Button>
                          </InputAdornment>
                        ),
                      }}
                    ></TextField>
                  </Box>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={2}>
                  <Box>
                    <Box sx={{ width: 300, margin: "0 auto" }}>
                      <Typography gutterBottom>Rating</Typography>
                      <Slider
                        value={range}
                        onChange={handleChangeRange}
                        valueLabelDisplay="auto"
                        getAriaLabel={() => 'Range'}
                        getAriaValueText={valuetext}
                        step={0.5}
                        marks={marks}
                        min={3}
                        max={5}
                        sx={{
                          '& .MuiSlider-thumb': {
                            color: 'red',
                          },
                          '& .MuiSlider-track': {
                            color: 'red',
                          },
                          '& .MuiSlider-rail': {
                            color: '#e0e0e0',
                          },
                        }}
                      />
                    </Box>
                  </Box>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={3}>
                  <Box>
                    <Typography sx={{ fontFamily: 'poppins, sans-serif', fontSize: { xs: '12px', sm: '14px' }, fontWeight: '300' }}>Cost per person</Typography>
                    <Typography sx={{ fontFamily: "poppins, sans-serfi", fontSize: { xs: '20px', sm: '23px', fontWeight: '500' } }}>Any-Any</Typography>
                  </Box>
                </CustomTabPanel>
              </Box>
            </Box>
          </DialogContent>
        </Box>

        <Box display="flex" justifyContent="space-between" p={2}>
          <Button sx={{
            color: 'white', bgcolor: 'red', fontFamily: "poppins, sans-serif", fontWeight: "300", ":hover": {
              bgcolor: "red", color: "white"
            }
          }}>Clear all</Button>
          <Button sx={{
            color: 'white', bgcolor: 'red', fontFamily: "poppins, sans-serif", fontWeight: "500", ":hover": {
              bgcolor: "red", color: "white"
            }
          }}>Apply</Button>
        </Box>
      </Dialog>
    </>
  );
};

export default HoverFilterButton

// export default HoverFilterButton;
