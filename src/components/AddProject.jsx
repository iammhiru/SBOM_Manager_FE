// src/components/AddProject.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../css/AddProject.css';

const AddProject = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [repoURL, setRepoURL] = useState('');
  const [repoAPIToken, setRepoAPIToken] = useState('');
  const navigate = useNavigate();

  const projectManagerId = localStorage.getItem('projectManagerId');

  const handleCreateProject = async (e) => {
    e.preventDefault();

    const projectData = {
      name,
      description,
      repoURL,
      repoAPIToken,
      projectManagerId,
    };

    try {
      await axios.post('http://localhost:3000/api/v1/project', projectData);
      alert('Project created successfully');
      navigate('/dashboardProjectManager/project');
    } catch (error) {
      console.error('Error creating project:', error);
      alert('Failed to create project. Please try again.');
    }
  };

  return (
    <div className="add-project-container">
      <header className="header">
        <button className="projects-btn">Projects</button>
        <button className="create-project-btn" onClick={handleCreateProject}>Create project</button>
      </header>
      <form onSubmit={handleCreateProject} className="add-project-form">
        <div className="form-field">
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-field">
          <label>Description</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className="form-field">
          <label>Repository URL</label>
          <input
            type="url"
            value={repoURL}
            onChange={(e) => setRepoURL(e.target.value)}
            required
          />
        </div>
        <div className="form-field">
          <label>Repository Token (optional)</label>
          <input
            type="password"
            value={repoAPIToken}
            onChange={(e) => setRepoAPIToken(e.target.value)}
          />
        </div>
        <button type="submit" className="submit-btn">Create Project</button>
      </form>
    </div>
  );
};

export default AddProject;
