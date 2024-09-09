import React from 'react';
import { Box, Typography, Card, CardContent, Avatar } from '@mui/material';

const safetyMeasures = [
  { icon: 'https://www.repairerdrivennews.com/wp-content/uploads/2020/05/covid-19-disinfecting-iStock-1212809229-scaled.jpg', title: 'Well Sanitized Kitchen' },
  { icon: 'https://images.creativemarket.com/0.1.0/ps/8095339/2000/2000/m1/fpnw/wm0/flat-modern-design-illustration-of-coronavirus-how-to-use-hand-sanitizer-3-.jpg?1586338006&s=32dfff352b3159c35496b765065485e4', title: 'Rider Hand Wash' },
  { icon: 'https://thumbs.dreamstime.com/z/sanitization-cleaning-disinfection-city-due-to-emergence-covid-virus-specialized-team-protective-suits-184479885.jpg', title: 'Daily Temp. Checks' },
];

const SafetyMeasures = () => {
  return (
    <Box display="flex" justifyContent="space-around" alignItems="center" p={1} gap={'10px'}>
      {safetyMeasures.map((measure, index) => (
        <Card
          key={index}
          variant="outlined"
          sx={{
            display: 'flex',
            alignItems: 'center',
            p: '9x 7px',
            borderRadius: '16px',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
            width: '235px',
            height: '61px'
          }}
        >
          <Avatar src={measure.icon} sx={{ width: 37, height: 37, mx: 1 }} />
          <CardContent sx={{ p: 0, marginTop: '18px' }}>
            <Typography sx={{fontSize: '11px', color: 'lightgray'}}>
              RESTAURANT SAFETY MEASURE
            </Typography>
            <Typography sx={{fontSize: '14px', color: 'gray'}}>
              {measure.title}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default SafetyMeasures;
