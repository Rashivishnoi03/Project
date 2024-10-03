// src/pages/Home.js

import React, { useState } from 'react';
// import ProjectForm from '../components/ProjectForm';
import Grid from '@mui/material/Grid';
import {Card, CardContent, CardMedia, Typography, CardActions, Button,Paper,Container } from '@mui/material';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

// Sample project data
const initialProjects = [
  { id: 1, name: 'Project Management App', description: 'Manage your tasks and projects.' },
  { id: 2, name: 'E-commerce Platform', description: 'An online platform to sell goods.' },
  { id: 3, name: 'Social Media App', description: 'Connect with your friends and family.' },
];

const Home = () => {
  const [projects, setProject] = useState(initialProjects);

  return (
    <>
    <Navbar />
    <Container maxWidth = "lg" style={{ padding: '20px' }}>
       
      <Typography variant="h4" gutterBottom>
        Your Projects
      </Typography>
       
       <div style={{display:'flex', justifyContent:'flex-end', marginBottom: '20px'}}>     
        <Button variant="contained" color="primary" component={Link} to="/add-project" style={{ marginBottom: '20px', float:'right' }}>
        Add New Project
      </Button>
      </div>

      <Grid container spacing={8} justifyContent="center" alignItems="center">
        {projects.map((project) => (
          <Grid item xs={12} sm={6} md={4} key={project.id}>
            <Card sx={{ transition: '0.3s', '&:hover': { boxShadow: 6 } }}>
              <CardMedia
                component="img"
                height="140"
                image={project.imageUrl || 'https://via.placeholder.com/140'} // Fallback image
                alt={project.name}
              />
              <CardContent>
                <Typography variant="h5" component="div" gutterBottom>
                  {project.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {project.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary" component={Link} to={`/projects/${project.id}`}>
                  View Details
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
    </>
  );
};

export default Home;
