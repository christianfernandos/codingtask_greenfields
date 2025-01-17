import React, { useState } from "react";

function Dashboard() {
  // State untuk menyimpan daftar audit
  const [audits, setAudits] = useState([]);
  const [newAudit, setNewAudit] = useState({
    title: "",
    area: "",
    date: "",
    closeDate: "",
  });

  const [showForm, setShowForm] = useState(false);

  // Fungsi untuk menangani perubahan input
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewAudit({ ...newAudit, [name]: value });
  };

  // Fungsi untuk menambahkan audit baru
  const handleAddAudit = (e) => {
    e.preventDefault();
    if (newAudit.title && newAudit.area && newAudit.date && newAudit.closeDate) {
      setAudits([...audits, newAudit]);
      setNewAudit({
        title: "",
        area: "",
        date: "",
        closeDate: "",
      });
      setShowForm(false);
    } else {
      alert("Semua field harus diisi!");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Header */}
      <header className="bg-blue-900 text-white py-4 shadow-md">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-semibold">Dashboard Audit</h1>
          <button
            onClick={() => (window.location.href = "/login")}
            className="text-sm bg-white text-blue-900 py-1 px-3 rounded-md hover:bg-gray-200"
          >
            Logout
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Daftar Audit</h2>
          <button
            onClick={() => setShowForm(!showForm)}
            className="bg-blue-900 text-white py-2 px-4 rounded-md hover:bg-blue-800"
          >
            {showForm ? "Tutup Form" : "Tambah Audit"}
          </button>
        </div>

        {/* Form Tambah Audit */}
        {showForm && (
          <form
            onSubmit={handleAddAudit}
            className="bg-white p-6 rounded-md shadow-md mb-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Judul</label>
                <input
                  type="text"
                  name="title"
                  value={newAudit.title}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Masukkan judul audit"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Area</label>
                <input
                  type="text"
                  name="area"
                  value={newAudit.area}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Masukkan area audit"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Tanggal</label>
                <input
                  type="date"
                  name="date"
                  value={newAudit.date}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Tanggal Close</label>
                <input
                  type="date"
                  name="closeDate"
                  value={newAudit.closeDate}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>
            <button
              type="submit"
              className="mt-4 bg-blue-900 text-white py-2 px-4 rounded-md hover:bg-blue-800"
            >
              Tambah Audit
            </button>
          </form>
        )}

        {/* Tabel Daftar Audit */}
        <div className="bg-white p-6 rounded-md shadow-md">
          <table className="w-full text-sm text-left border">
            <thead className="bg-blue-900 text-white">
              <tr>
                <th className="px-4 py-2 border">#</th>
                <th className="px-4 py-2 border">Judul</th>
                <th className="px-4 py-2 border">Area</th>
                <th className="px-4 py-2 border">Tanggal</th>
                <th className="px-4 py-2 border">Tanggal Close</th>
              </tr>
            </thead>
            <tbody>
              {audits.length > 0 ? (
                audits.map((audit, index) => (
                  <tr key={index} className="hover:bg-gray-100">
                    <td className="px-4 py-2 border text-center">{index + 1}</td>
                    <td className="px-4 py-2 border">{audit.title}</td>
                    <td className="px-4 py-2 border">{audit.area}</td>
                    <td className="px-4 py-2 border">{audit.date}</td>
                    <td className="px-4 py-2 border">{audit.closeDate}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="5"
                    className="px-4 py-2 border text-center text-gray-500"
                  >
                    Tidak ada data audit.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-4 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} PT. Greenfields Indonesia. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
}

export default Dashboard;