// src/components/CreateSBOM.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../css/CreateSBOM.css';

const CreateSBOM = () => {
  const { projectId } = useParams(); // Get projectId from URL
  const projectManagerId = localStorage.getItem('projectManagerId'); // Get creatorId from localStorage

  const [format, setFormat] = useState('');
  const [standard, setStandard] = useState('');

  const handleGenerateSBOM = async () => {
    if (!format || !standard) {
      alert('Please select both format and standard.');
      return;
    }

    const sbomData = {
      format,
      standard,
      creatorId: projectManagerId,
    };

    try {
      await axios.post(`http://localhost:3000/api/v1/sbom/${projectId}`, sbomData);
      alert('SBOM generated successfully');
    } catch (error) {
      console.error('Error generating SBOM:', error);
      alert('Failed to generate SBOM. Please try again.');
    }
  };

  return (
    <div className="create-sbom-container">
      <header className="header">
        <button className="projects-btn">Projects</button>
        <button className="generate-sbom-btn" onClick={handleGenerateSBOM}>Generate</button>
      </header>
      <div className="sbom-form">
        <div className="form-field">
          <label>Format</label>
          <select value={format} onChange={(e) => setFormat(e.target.value)}>
            <option value="">Select Format</option>
            <option value="JSON">JSON</option>
            <option value="XML">XML</option>
          </select>
        </div>
        <div className="form-field">
          <label>Standard</label>
          <select value={standard} onChange={(e) => setStandard(e.target.value)}>
            <option value="">Select Standard</option>
            <option value="CYCLONEDX@1.6">CYCLONEDX@1.6</option>
            <option value="CYCLONEDX@1.5">CYCLONEDX@1.5</option>
            <option value="SPDX@2.3">SPDX@2.3</option>
            <option value="SPDX@2.2">SPDX@2.2</option>
            <option value="SYFT">SYFT</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default CreateSBOM;
