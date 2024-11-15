import React from 'react';
import { HashRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import DashboardProjectManagerPage from './pages/DashboardProjectManagerPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboardProjectManager/*" element={<DashboardProjectManagerPage />} />
      </Routes>
    </Router>
  );
}


export default App;