import React, { useState } from 'react';
import { Container, Typography, Paper } from '@mui/material';
import ProjectList from './ProjectList';

const Projects = () => {
  const [projects, setProjects] = useState([
    { 
      id: 1, 
      name: 'Project Name 1', 
      users: 'list, of, authorized, users',
      hardwareSets: [
        { name: 'HWSet1', available: 50, total: 100 },
        { name: 'HWSet2', available: 0, total: 100 }
      ],
      joined: false
    },
    { 
      id: 2, 
      name: 'Project Name 2', 
      users: 'list, of, authorized, users',
      hardwareSets: [
        { name: 'HWSet1', available: 50, total: 100 },
        { name: 'HWSet2', available: 0, total: 100 }
      ],
      joined: true
    },
    { 
      id: 3, 
      name: 'Project Name 3', 
      users: 'list, of, authorized, users',
      hardwareSets: [
        { name: 'HWSet1', available: 0, total: 100 },
        { name: 'HWSet2', available: 0, total: 100 }
      ],
      joined: false
    },
  ]);

  const handleJoinLeave = (projectId) => {
    setProjects(projects.map(project => 
      project.id === projectId ? {...project, joined: !project.joined} : project
    ));
  };

  const handleCheckInOut = (projectId, hwSetName, action) => {
    console.log(`${action} for ${hwSetName} in project ${projectId}`);
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h4" gutterBottom>Projects</Typography>
      <Paper elevation={3}>
        {projects.map(project => (
          <ProjectList 
            key={project.id}
            project={project}
            onJoinLeave={handleJoinLeave}
            onCheckInOut={handleCheckInOut}
          />
        ))}
      </Paper>
    </Container>
  );
};

export default Projects;