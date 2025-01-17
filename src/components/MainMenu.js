import React from 'react';
import { useNavigate } from 'react-router-dom';

function MainMenu() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Main Menu</h1>
      <button onClick={() => navigate('/audit-form')}>Form Input Audit</button>
      <button onClick={() => navigate('/audit-results')}>View Audit Results</button>
    </div>
  );
}
export default MainMenu;

