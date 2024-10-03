import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'; // Make sure this is installed

const ProjectDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/projects/${id}`)
      .then((response) => {
        setProject(response.data);
      })
      .catch((error) => {
        console.error('Error fetching project details:', error);
      });
  }, [id]);

  if (!project) return <div>Loading...</div>;

  return (
    <div>
      <h1>{project.name}</h1>
      <p>{project.description}</p>
      {/* Add more project details here */}
    </div>
  );
};

export default ProjectDetails;
