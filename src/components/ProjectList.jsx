// src/components/ProjectList.jsx
import React from 'react';
import ProjectItem from './ProjectItem';
import '../css/ProjectList.css';

const ProjectList = ({ projects }) => {
  return (
    <div className="project-list">
      {projects.map((project) => (
        <ProjectItem key={project.projectId} project={project} /> 
      ))}
    </div>
  );
};

export default ProjectList;
