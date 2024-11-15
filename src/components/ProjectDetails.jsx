// src/components/ProjectDetails.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import ProjectOverview from './ProjectOverview';
import '../css/ProjectDetails.css';

const ProjectDetails = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [showOverview, setShowOverview] = useState(true);
  const [sbomVersions, setSbomVersions] = useState([]);

  const fetchProjectDetails = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/api/v1/project/${projectId}`);
      setProject(response.data.data);
      setSbomVersions(response.data.sbomVersions || []);
    } catch (error) {
      console.error('Error fetching project details:', error);
    }
  };

  useEffect(() => {
    fetchProjectDetails();
  }, [projectId]);

  const handleCreateSbom = () => {
    navigate(`/dashboardProjectManager/project/${projectId}/create-sbom`);
  };

  if (!project) return <p>Loading project details...</p>;

  return (
    <div className="project-details">
      <h2 className="project-name">{project.name}</h2>

      <div className="button-section">
        <button className={`overview-btn ${showOverview ? 'active' : ''}`} onClick={() => setShowOverview(true)}>Overview</button>
        <button className={`sbom-btn ${!showOverview ? 'active' : ''}`} onClick={() => setShowOverview(false)}>SBOM</button>
        <button className="create-sbom-btn" onClick={handleCreateSbom}>Create SBOM</button>
      </div>

      {showOverview ? (
        <ProjectOverview project={project} />
      ) : (
        <div className="sbom-list">
          {sbomVersions.map((sbom, index) => (
            <div key={index} className="sbom-item">
              <p>{sbom.version}</p>
              <button className="update-btn">Update</button>
              <button className="analyze-btn">Analyze</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectDetails;
