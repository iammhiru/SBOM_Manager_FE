// src/components/ProjectTab.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProjectList from './ProjectList';
import { useNavigate } from 'react-router-dom';
import '../css/ProjectTab.css';

const ProjectTab = () => {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);

  const projectManagerId = localStorage.getItem('projectManagerId');

  const fetchProjects = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/api/v1/project`, {
        params: { projectManagerId },
      });
      setProjects(response.data.data.rows); // Set the array of project objects
    } catch (error) {
      console.error('Error fetching projects:', error);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleAddProjectClick = () => {
    navigate('/dashboardProjectManager/project/add');
  };

  return (
    <div>
      <header className="dashboard-header">
        <button className="projects-btn">Projects</button>
        <button className="add-project-btn" onClick={handleAddProjectClick}>Add Project</button>
      </header>
      <div className="search-filter-section">
        <input type="text" placeholder="Search" className="search-input" />
        <button className="search-btn">Search</button>
        <button className="filter-btn">Filter</button>
      </div>
      <ProjectList projects={projects} />
    </div>
  );
};

export default ProjectTab;
