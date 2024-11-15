// src/components/ProjectOverview.jsx
import React from 'react';
import '../css/ProjectOverview.css';

const ProjectOverview = ({ project }) => {
  return (
    <div className="project-overview">
      <div className="overview-field">
        <label>Name</label>
        <div className="overview-value">{project.name}</div>
      </div>
      <div className="overview-field">
        <label>Description</label>
        <div className="overview-value">{project.description}</div>
      </div>
      <div className="overview-field">
        <label>Repository URL</label>
        <div className="overview-value">{project.repoURL}</div>
      </div>
      <div className="overview-field">
        <label>Repository Token (optional)</label>
        <div className="overview-value">{project.repoAPIToken || 'N/A'}</div>
      </div>
    </div>
  );
};

export default ProjectOverview;
