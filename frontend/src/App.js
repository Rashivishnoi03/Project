// src/App.js

import React, {useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import '../src/index.css';
import ProjectDetails from './pages/ProjectDetails';
import ProjectForm from './components/ProjectForm';

const App = () => {
  const [projects, setProjects] = useState([]); // Manage state for projects here

  const handleProjectSubmit = (newProject) => {
    const updatedProject = { id: projects.length + 1, ...newProject };
    setProjects(
      (prevProjects) => [...prevProjects, updatedProject]);
  };

    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home projects={projects} onProjectSubmit={handleProjectSubmit}/>} />
          <Route path="/add-project" element={<ProjectForm onSubmit={handleProjectSubmit} />} />
          <Route path="/projects/:id" element={<ProjectDetails />} /> {/* Route for project details */}

          {/* Add other routes as needed */}
        </Routes>
      </Router>
    );
};

export default App;
