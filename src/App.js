import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/audit/Login'; // Adjust the path based on your structure
import Register from './components/auth/Register'; // Adjust the path based on your structure
import MainMenu from './components/MainMenu'; // Adjust the path based on your structure
import AuditForm from './components/audit/AuditForm'; // Adjust the path based on your structure
import AuditResults from './components/audit/AuditResults'; // Adjust the path based on your structure

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/main-menu" element={<MainMenu />} />
          <Route path="/audit-form" element={<AuditForm />} />
          <Route path="/audit-results" element={<AuditResults />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;