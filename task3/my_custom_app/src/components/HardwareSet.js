import React, { useState } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';

const HardwareSet = ({ hwSet, onCheckInOut }) => {
  const [quantity, setQuantity] = useState('');

  const handleCheckInOut = (action) => {
    if (!quantity) return;
    onCheckInOut(action, parseInt(quantity));
    setQuantity('');
  };

  return (
    <Box display="flex" alignItems="center" mt={1}>
      <Typography variant="body2" sx={{ flexGrow: 1 }}>
        {hwSet.name}: {hwSet.available}/{hwSet.total}
      </Typography>
      <TextField 
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        size="small" 
        label="Enter qty" 
        type="number"
        variant="outlined" 
        sx={{ width: 100, mr: 1 }}
      />
      <Button variant="outlined" size="small" onClick={() => handleCheckInOut('Check In')}>
        Check In
      </Button>
      <Button variant="outlined" size="small" onClick={() => handleCheckInOut('Check Out')}>
        Check Out
      </Button>
    </Box>
  );
};

export default HardwareSet;