// src/components/SidebarProjectManager.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../css/SidebarProjectManager.css';

const SidebarProjectManager = () => {
  const location = useLocation();

  return (
    <div className="sidebar">
      <Link to="/dashboardProjectManager/home" className={`sidebar-item ${location.pathname === '/dashboardProjectManager/home' ? 'active' : ''}`}>Home</Link>
      <Link to="/dashboardProjectManager/project" className={`sidebar-item ${location.pathname === '/dashboardProjectManager/project' ? 'active' : ''}`}>Project</Link>
      <Link to="/dashboardProjectManager/sbom" className={`sidebar-item ${location.pathname === '/dashboardProjectManager/sbom' ? 'active' : ''}`}>SBOM</Link>
      <div className="sidebar-item">User & Role</div>
    </div>
  );
};

export default SidebarProjectManager;
