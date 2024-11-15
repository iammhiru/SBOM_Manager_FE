// src/components/ProjectItem.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/ProjectItem.css';

const ProjectItem = ({ project }) => {
  const navigate = useNavigate();

  const handleProjectClick = () => {
    navigate(`/dashboardProjectManager/project/${project.projectId}`);
  };

  return (
    <div className="project-item" onClick={handleProjectClick}>
      <p>{project.name}</p> {/* Only display the name */}
    </div>
  );
};

export default ProjectItem;
