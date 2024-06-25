import React from 'react';
import { Modal, Box, IconButton, Typography } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import { Height } from '@mui/icons-material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  width: '90%',
  maxWidth: '700px', 
  borderRadius: '8px',
  '@media (max-width: 600px)': {
    width: '80%',
    p: 2,
  },
};

function Modale({ open, handleClose, data }) {
  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <IconButton
          onClick={handleClose}
          sx={{
            position: 'absolute',
            top: '0',
            right: '0',
            justifyContent: 'flex-end',
            margin: '5px 10px',
            color: "#840033",
          }}
        >
          <ClearIcon style={{ color: "#840033" }} />
        </IconButton>
        <Typography
          variant="h5"
          className="font-poppin font-semibold text-2xl mb-6 text-primary-0 mt-8"
          sx={{
            fontSize: { xs: '1.5rem', md: '2rem' },
            mt: { xs: '4rem', md: '4rem' }, 
          }}
        >
          Successfully registered to the NBT Book Fair
        </Typography>
        <Box
          className="font-poppin font-medium text-base px-8 py-3 border rounded-xl mb-6"
          sx={{
            marginBottom: '32px',
            padding: { xs: '16px', md: '24px' },
            fontSize: { xs: '0.875rem', md: '1rem' },
          }}
        >
          <Typography
            variant="body1"
            className="mb-4 font-poppin font-medium"
            sx={{ marginBottom: '16px' }}
          >
            Date of Event : 21/06/24
          </Typography>
          <Typography variant="body1">
            Address :
         
            Denesik Harbors,
           
            Overpass,
            
            Washington
          </Typography>
        </Box>
        <Box
          className="font-poppin font-medium text-base px-8 py-3 border rounded-xl"
          sx={{
            padding: { xs: '16px', md: '24px' }, 
            fontSize: { xs: '0.875rem', md: '1rem' }, 
          }}
        >
          <Typography
            variant="body1"
            className="mb-4 font-poppin font-medium"
            sx={{ marginBottom: '16px' }}
          >
            Name : {data.name}
          </Typography>
          <Typography variant="body1" className="font-poppin font-medium">
            Mobile No: {data.mobile}
          </Typography>
        </Box>
      </Box>
    </Modal>
  );
}

export default Modale;
