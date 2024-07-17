import React from 'react';
import { Modal, Box, Typography, Button } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';


const Thanks = ({ open, handleClose }) => {
  return (
    <Modal open={open} onClose={handleClose} aria-labelledby="thank-you-modal" aria-describedby="thank-you-message">
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 300,
          bgcolor: 'background.paper',
          border: '2px solid #000',
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
          textAlign: 'center',
        }}
      >
        <CheckCircleOutlineIcon
          sx={{
            fontSize: 50,
            color: 'green',
            animation: 'fadeIn 1.7s ease-in-out infinite',
            '@keyframes fadeIn': {
              '0%': { opacity: 0 },
              '100%': { opacity: 1 },
              
            },
          }}
        />
        <Typography id="thank-you-modal" variant="h6" component="h2" sx={{ mt: 2 }}>
          Thank You!
        </Typography>
        <Typography id="thank-you-message" sx={{ mt: 2 }}>
          Your order has been placed successfully.
        </Typography>
        <Button variant="contained" color="primary" onClick={handleClose} sx={{ mt: 2 }}>
          Close
        </Button>
      </Box>
    </Modal>
  );
};

export default Thanks;
