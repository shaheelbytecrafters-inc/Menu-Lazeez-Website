import { Box, Tab, Tabs } from '@mui/material'
import React, { useState } from 'react'

const RestaunrantOrderOnline = () => {

  const [value, setValue] = useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box display={{ xs: 'none', sm: 'flex' }} gap={3} mx="10px">
      <Box sx={{ width: '100%', display: 'flex', flexDirection: 'row' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', width: '200px', borderRight: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" orientation="vertical">
            <Tab label="Today'Exclusive Dishes(3)" {...a11yProps(0)} sx={{ textTransform: 'none' }} />
            <Tab label="Meal for One" {...a11yProps(1)} sx={{ textTransform: 'none' }} />
            <Tab label="Dimusm" {...a11yProps(2)} sx={{ textTransform: 'none' }} />
            <Tab label="Ramen" {...a11yProps(3)} sx={{ textTransform: 'none' }} />
            <Tab label="Baos" {...a11yProps(4)} sx={{ textTransform: 'none' }} />
            <Tab label="Rice & Noodles" {...a11yProps(5)} sx={{ textTransform: 'none' }} />
          </Tabs>
        </Box>
        <Box sx={{ width: '100%', mx: '10px'}}>
          <CustomTabPanel value={value} index={0}>
            Today Exclusive
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            Meal for one
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            Dimusm
          </CustomTabPanel>
          <CustomTabPanel value={value} index={3}>
            Ramen
          </CustomTabPanel>
          <CustomTabPanel value={value} index={4}>
            Baos
          </CustomTabPanel>
          <CustomTabPanel value={value} index={5}>
            Rice and Noodles
          </CustomTabPanel>
        </Box>
      </Box>
    </Box>

  )
}

export default RestaunrantOrderOnline;

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