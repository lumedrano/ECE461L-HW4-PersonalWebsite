import React from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';

const HardwareSet = ({ hwSet, onCheckInOut }) => {
  return (
    <Box display="flex" alignItems="center" mt={1}>
      <Typography variant="body2" sx={{ flexGrow: 1 }}>
        {hwSet.name}: {hwSet.available}/{hwSet.total}
      </Typography>
      <TextField 
        size="small" 
        label="Enter qty" 
        variant="outlined" 
        sx={{ width: 100, mr: 1 }}
      />
      <Button variant="outlined" size="small" onClick={() => onCheckInOut('Check In')}>
        Check In
      </Button>
      <Button variant="outlined" size="small" onClick={() => onCheckInOut('Check Out')}>
        Check Out
      </Button>
    </Box>
  );
};

export default HardwareSet;