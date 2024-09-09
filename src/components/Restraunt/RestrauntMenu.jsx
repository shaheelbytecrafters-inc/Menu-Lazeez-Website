import React, { useState } from 'react';
import { Card, CardMedia, CardContent, Typography, Grid, Box, Modal, styled } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const StyledModal = styled(Modal)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative'
});

export const MenuCard = ({ image, title, pages }) => {
  const [showMenuModal, setShowMenuModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const handleShowMenuModal = (image) => {
    setSelectedImage(image);
    setShowMenuModal(true);
  };

  const handleCloseMenuModal = () => {
    setShowMenuModal(false);
  };

  return (
    <>
      <Card sx={{ maxWidth: 200, boxShadow: 'none', cursor: 'pointer' }} onClick={() => handleShowMenuModal(image)}>
        <CardMedia
          component="img"
          height="300px"
          image={image}
          alt={title}
          sx={{ borderRadius: '8px' }}
        />
        <CardContent sx={{ p: 0 }}>
          <Typography sx={{ fontSize: '20px', fontFamily: 'Poppins, sans-serif' }}>
            {title}
          </Typography>
          <Typography sx={{ color: 'gray', fontSize: "13px" }}>
            {pages}
          </Typography>
        </CardContent>
      </Card>
      <StyledModal open={showMenuModal} onClose={handleCloseMenuModal}>
        <Box>
          <Box 
            position={'absolute'} 
            top={0} 
            right={0} 
            p={2} 
            sx={{ cursor: 'pointer' }} 
            onClick={handleCloseMenuModal}
          >
            <CloseIcon  sx={{color: 'black', fontSize: '40px'}}/>
          </Box>
          <Box
            sx={{
              width: '100vw',
              height: '100vh',
              backgroundColor: 'white',
              backgroundImage: `url(${selectedImage})`,
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          />
        </Box>
      </StyledModal>
    </>
  )
}