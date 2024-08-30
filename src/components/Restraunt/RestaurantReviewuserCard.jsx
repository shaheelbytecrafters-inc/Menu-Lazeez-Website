import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import StarIcon from '@mui/icons-material/Star';
import { Box, Chip } from '@mui/material';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';

export default function ReviewCard() {
  return (
    <Card sx={{ width: '100%', my: '3px', boxShadow: 'none', borderBottom: '1px solid lightgray'}}>
      <CardHeader
        avatar={
          <Avatar src="/path/to/avatar.jpg" aria-label="user-avatar" />
        }
        title="Aryan Agarwal"
        subheader="0 reviews • 16 Followers"
        sx={{ paddingBottom: '0' }} 
      />
      <CardContent>
        <Box display={'flex'} alignItems="center" marginBottom={'5px'}>
          <Chip
            icon={<StarIcon sx={{ color: 'white', fontSize: '1rem' }} />}
            label="5"
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
          <Typography
            variant="body2"
            color="textSecondary"
            sx={{
              marginRight: '8px',
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 350,
              color: '#666',
            }}
          >
            DINING
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            sx={{ fontFamily: 'Poppins, sans-serif', color: '#666' }}
          >
            3 hours ago
          </Typography>
        </Box>
        <Typography variant="body2" color="text.secondary" fontFamily={'Poppins, sans-serif'}>
          Mohan served very well! Tasty food
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
