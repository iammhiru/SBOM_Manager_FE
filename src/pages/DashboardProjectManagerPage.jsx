// src/pages/DashboardProjectManagerPage.jsx
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import SidebarProjectManager from '../components/SidebarProjectManager';
import HomeTab from '../components/HomeTab';
import ProjectTab from '../components/ProjectTab';
import SBOMTab from '../components/SBOMTab';
import AddProject from '../components/AddProject';
import ProjectDetails from '../components/ProjectDetails';
import CreateSBOM from '../components/CreateSBOM';
import '../css/DashboardProjectManagerPage.css';

const DashboardProjectManagerPage = () => {
  return (
    <div className="dashboard">
      <SidebarProjectManager />
      <div className="dashboard-content">
        <Routes>
          <Route path="/" element={<Navigate to="home" />} />
          <Route path="home" element={<HomeTab />} />
          <Route path="project" element={<ProjectTab />} />
          <Route path="project/add" element={<AddProject />} />
          <Route path="project/:projectId" element={<ProjectDetails />} />
          <Route path="project/:projectId/create-sbom" element={<CreateSBOM />} /> {/* Create SBOM Route */}
          <Route path="sbom" element={<SBOMTab />} />
        </Routes>
      </div>
    </div>
  );
};

export default DashboardProjectManagerPage;
