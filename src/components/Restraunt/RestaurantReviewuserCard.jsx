import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import StarIcon from '@mui/icons-material/Star';
import { Box, Button, Chip } from '@mui/material';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';

export default function ReviewCard() {
  return (
    <Card sx={{ width: '100%', my: '3px', boxShadow: 'none', borderBottom: '1px solid lightgray' }}>
      <Box display={'flex'} justifyContent={'space-between'}>
      <CardHeader
        avatar={
          <Avatar src="/path/to/avatar.jpg" aria-label="user-avatar" />
        }
        title="Aryan Agarwal"
        subheader="0 reviews • 16 Followers"
        sx={{
          paddingBottom: '0',
          '& .MuiCardHeader-title': {
            fontSize: '17px',
            fontWeight: 400,
            fontFamily: 'poppins, sans-serif'
          },
          '& .MuiCardHeader-subheader': {
            fontSize: '12px',
            color: 'gray',
            fontFamily: 'poppins, sans-serif',
            fontWeight: '300'
          },
        }}
      />
      <Button sx={{color: 'red', fontFamily: 'poppins, sans-serif', border: '1px solid pink', fontSize: '12px'}}>Follow</Button>
      </Box>
      <CardContent>
        <Box display={'flex'} alignItems="center" marginBottom={'5px'}>
        <Chip
            label={<span style={{ order: 1, fontFamily: 'poppins, sans-serif', fontWeight: '500'}}>4.7</span>}
            icon={<StarIcon sx={{
              color: 'white', fontSize: '13px', order: 2}} />}
            sx={{
              backgroundColor: '#4caf50',
              color: 'white',
              marginRight: '6px',
              height: '20px',
              width: '50px',
              borderRadius: '5px',
              fontSize: '12px',
              bgcolor: 'green',
              '& .MuiChip-label': {
                px: '0px'
              },           
              '& .MuiChip-icon' : {
                color : 'white'

              }
            }}
          />
          <Typography
            sx={{
              marginRight: '8px',
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 350,
              color: 'black',
              fontSize: "13px"
            }}
          >
            DINING
          </Typography>
          <Typography
            sx={{ fontFamily: 'Poppins, sans-serif', color: '#666', fontSize: '13px' }}
          >
            3 hours ago
          </Typography>
        </Box>
        <Typography variant="body2" color="text.secondary" fontFamily={'Poppins, sans-serif'}>
          Mohan served very well! Tasty food
        </Typography>
        <Typography fontFamily={'Poppins, sans-serif'} my={'6px'} color={'gray'} fontSize={'13px'} fontWeight={'200'}>
         0 votes for helpful, 1 Comment
        </Typography>
        <Box display={'flex'} alignItems="center" marginTop={'10px'}>
          <IconButton aria-label="helpful" sx={{ padding: '5px' }}>
            <ThumbUpAltOutlinedIcon sx={{ fontSize: '18px' }} />
          </IconButton>
          <Typography variant="body2" sx={{ marginRight: '16px', fontFamily: 'Poppins, sans-serif' }}>
            Helpful
          </Typography>
          <IconButton aria-label="comment" sx={{ padding: '5px' }}>
            <ChatBubbleOutlineOutlinedIcon sx={{ fontSize: '18px' }} />
          </IconButton>
          <Typography variant="body2" sx={{ marginRight: '16px', fontFamily: 'Poppins, sans-serif' }}>
            Comment
          </Typography>
          <IconButton aria-label="share" sx={{ padding: '5px' }}>
            <ShareOutlinedIcon sx={{ fontSize: '18px' }} />
          </IconButton>
          <Typography variant="body2" sx={{ fontFamily: 'Poppins, sans-serif' }}>
            Share
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
