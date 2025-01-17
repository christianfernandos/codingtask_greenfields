import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

function Dashboard() {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-lg">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-xl font-bold">PT Greenfield Audit System</h1>
            <div className="flex items-center space-x-4">
              <span>{user?.email}</span>
              <button
                onClick={logout}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>
      
      <div className="max-w-6xl mx-auto mt-8 p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link
            to="/audit/new"
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
          >
            <h2 className="text-xl font-bold mb-2">Create New Audit</h2>
            <p className="text-gray-600">Start a new audit process</p>
          </Link>
          
          <Link
            to="/audit/list"
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
          >
            <h2 className="text-xl font-bold mb-2">View Audits</h2>
            <p className="text-gray-600">Review existing audits</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;