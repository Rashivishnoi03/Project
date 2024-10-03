// src/components/ProjectForm.js

import React, { useState } from 'react';
// import ProjectForm from '../components/ProjectForm';
import { TextField, Button, Grid2, Typography, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ProjectForm = ({ onSubmit }) => {
    const navigate = useNavigate();
  const [projectName, setProjectName] = useState('');
  const [description, setDescription] = useState('');
  const [technologies, setTechnologies] = useState('');
  const [creator, setCreator] = useState('');
  const [links, setLinks] = useState('');
  const [sourceCode, setSourceCode] = useState('');
  const [collaborators, setCollaborators] = useState('');
  const [tags, setTags] = useState('');
  const [rating, setRating] = useState('');
  const [dateCreated, setDateCreated] = useState(new Date().toISOString().substring(0, 10)); // Today's date
  const [lastUpdated, setLastUpdated] = useState(new Date().toISOString().substring(0, 10)); // Today's date

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProject = {
      projectName,
      description,
      technologies: technologies.split(',').map(tech => tech.trim()), // Convert to array
      creator,
      links: links.split(',').map(link => link.trim()), // Convert to array
      sourceCode,
      collaborators: collaborators.split(',').map(collab => collab.trim()), // Convert to array
      tags: tags.split(',').map(tag => tag.trim()), // Convert to array
      rating,
      dateCreated,
      lastUpdated,
    };
    console.log('New Project:', newProject); // Debugging line to check project data

    onSubmit(newProject);
    // Reset the form
    resetForm();

    navigate('/');
  };

  const resetForm = () => {
    setProjectName('');
    setDescription('');
    setTechnologies('');
    setCreator('');
    setLinks('');
    setSourceCode('');
    setCollaborators('');
    setTags('');
    setRating('');
    setDateCreated(new Date().toISOString().substring(0, 10));
    setLastUpdated(new Date().toISOString().substring(0, 10));
  };

  return (
    <Paper elevation={3} style={{ padding: '20px', borderRadius: '8px', marginBottom: '20px' }}>

    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <Typography variant="h5" gutterBottom>
        Create a New Project
      </Typography>
      <Grid2 container spacing={2}>
        <Grid2 item xs={12}>
          <TextField
            label="Project Name"
            variant="outlined"
            fullWidth
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            required
            style={{ marginBottom: '16px' }} // Add spacing between fields

          />
        </Grid2>
        <Grid2 item xs={12}>
          <TextField
            label="Description"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            style={{ marginBottom: '16px' }} // Add spacing between fields

          />
        </Grid2>
        <Grid2 item xs={12}>
          <TextField
            label="Technologies (comma-separated)"
            variant="outlined"
            fullWidth
            value={technologies}
            onChange={(e) => setTechnologies(e.target.value)}
            required
            style={{ marginBottom: '16px' }} // Add spacing between fields

          />
        </Grid2>
        <Grid2 item xs={12}>
          <TextField
            label="Creator"
            variant="outlined"
            fullWidth
            value={creator}
            onChange={(e) => setCreator(e.target.value)}
            required
            style={{ marginBottom: '16px' }} // Add spacing between fields

          />
        </Grid2>
        <Grid2 item xs={12}>
          <TextField
            label="Links (comma-separated)"
            variant="outlined"
            fullWidth
            value={links}
            onChange={(e) => setLinks(e.target.value)}
            required
            style={{ marginBottom: '16px' }} // Add spacing between fields

          />
        </Grid2>
        <Grid2 item xs={12}>
          <TextField
            label="Source Code URL"
            variant="outlined"
            fullWidth
            value={sourceCode}
            onChange={(e) => setSourceCode(e.target.value)}
            required
            style={{ marginBottom: '16px' }} // Add spacing between fields

          />
        </Grid2>
        <Grid2 item xs={12}>
          <TextField
            label="Collaborators (comma-separated)"
            variant="outlined"
            fullWidth
            value={collaborators}
            onChange={(e) => setCollaborators(e.target.value)}
            required
            style={{ marginBottom: '16px' }} // Add spacing between fields

          />
        </Grid2>
        <Grid2 item xs={12}>
          <TextField
            label="Tags (comma-separated)"
            variant="outlined"
            fullWidth
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            required
            style={{ marginBottom: '16px' }} // Add spacing between fields

          />
        </Grid2>
        <Grid2 item xs={12}>
          <TextField
            label="Rating"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            style={{ marginBottom: '16px' }} // Add spacing between fields

          />
        </Grid2>
        <Grid2 item xs={6}>
          <TextField
            label="Date Created"
            type="date"
            variant="outlined"
            fullWidth
            value={dateCreated}
            onChange={(e) => setDateCreated(e.target.value)}
            required
            InputLabelProps={{
              shrink: true}}
              style={{ marginBottom: '16px' }} // Add spacing between fields

          />
        </Grid2>
        <Grid2 item xs={6}>
          <TextField
            label="Last Updated"
            type="date"
            variant="outlined"
            fullWidth
            value={lastUpdated}
            onChange={(e) => setLastUpdated(e.target.value)}
            required
            InputLabelProps={{
              shrink: true}}
              style={{ marginBottom: '16px' }} // Add spacing between fields

          />
        </Grid2>
        <Grid2 item xs={12}>
          <Button type="submit" variant="contained" color="primary">
            Create Project
          </Button>
        </Grid2>
      </Grid2>
    </form>
    </Paper>
  );
};

export default ProjectForm;
