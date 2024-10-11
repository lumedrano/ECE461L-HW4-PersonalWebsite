import React from 'react';
import { Box, Typography, Button, TextField } from '@mui/material';
import HardwareSet from './HardwareSet';

const ProjectList = ({ project, onJoinLeave, onCheckInOut }) => {
  return (
    <Box sx={{ p: 2, borderBottom: '1px solid #ddd' }}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h6">{project.name}</Typography>
        <Button 
          variant="contained" 
          onClick={() => onJoinLeave(project.id)}
        >
          {project.joined ? 'Leave' : 'Join'}
        </Button>
      </Box>
      <Typography variant="body2" color="text.secondary">
        {project.users}
      </Typography>
      {project.hardwareSets.map((hwSet, index) => (
        <HardwareSet 
          key={index}
          hwSet={hwSet}
          onCheckInOut={(action) => onCheckInOut(project.id, hwSet.name, action)}
        />
      ))}
    </Box>
  );
};

export default ProjectList;