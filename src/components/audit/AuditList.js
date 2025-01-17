import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function AuditList() {
  const [audits, setAudits] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAudits();
  }, []);

  const fetchAudits = async () => {
    try {
      const response = await fetch('/api/audits');
      if (response.ok) {
        const data = await response.json();
        setAudits(data);
      }
    } catch (error) {
      console.error('Error fetching audits:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this audit?')) {
      try {
        const response = await fetch(`/api/audits/${id}`, {
          method: 'DELETE',
        });
        
        if (response.ok) {
          setAudits(audits.filter(audit => audit.id !== id));
        }
      } catch (error) {
        console.error('Error deleting audit:', error);
      }
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-6xl mx-auto p-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Audit List</h2>
        <Link
          to="/audit/new"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          New Audit
        </Link>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border">
          <thead>
            <tr>
              <th className="px-6 py-3 border-b">Title</th>
              <th className="px-6 py-3 border-b">Area</th>
              <th className="px-6 py-3 border-b">Audit Date</th>
              <th className="px-6 py-3 border-b">Close Date</th>
              <th className="px-6 py-3 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {audits.map((audit) => (
              <tr key={audit.id}>
                <td className="px-6 py-4 border-b">{audit.title}</td>
                <td className="px-6 py-4 border-b">{audit.area}</td>
                <td className="px-6 py-4 border-b">{audit.auditDate}</td>
                <td className="px-6 py-4 border-b">{audit.closeDate}</td>
                <td className="px-6 py-4 border-b">
                  <button
                    onClick={() => handleDelete(audit.id)}
                    className="text-red-500 hover:text-red-700 mr-4"
                  >
                    Delete
                  </button>
                  <Link
                    to={`/audit/edit/${audit.id}`}
                    className="text-blue-500 hover:text-blue-700"
                  >
                    Edit
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AuditList;