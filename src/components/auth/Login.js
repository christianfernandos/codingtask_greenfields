import React, { useState } from 'react';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validasi kredensial statis
    if (username === 'chris@gmail.com' && password === 'chris123') {
      // Arahkan ke dashboard setelah login berhasil
      window.location.href = '/dashboard';
    } else {
      // Jika kredensial salah, tampilkan pesan error
      setError('Username atau password salah');
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500">
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-700 to-indigo-700 text-white text-center py-4 shadow-md">
        <h1 className="text-lg font-semibold tracking-wide uppercase">
          PT. Greenfields Indonesia
        </h1>
      </header>

      {/* Main Content */}
      <div className="flex-grow flex items-center justify-center px-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-sm">
          <div className="text-center mb-6">
            <h1 className="text-4xl font-extrabold text-gray-900 tracking-wide">
              AUDIT APP
            </h1>
            <p className="text-gray-600 text-sm">
              PT. Greenfields Indonesia
            </p>
          </div>

          {/* Tampilkan pesan error jika kredensial salah */}
          {error && <div className="text-red-500 text-center mb-4">{error}</div>}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Username Input */}
            <div className="relative">
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-10 py-2 bg-gray-100 border rounded-full text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-sm"
                placeholder="Username"
                required
              />
              <span className="absolute left-3 top-2.5 text-gray-500">
                <i className="fas fa-user"></i>
              </span>
            </div>

            {/* Password Input */}
            <div className="relative">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-10 py-2 bg-gray-100 border rounded-full text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-sm"
                placeholder="Password"
                required
              />
              <span className="absolute left-3 top-2.5 text-gray-500">
                <i className="fas fa-lock"></i>
              </span>
            </div>

            <div className="text-sm text-center">
              <a
                href="/register"
                className="text-purple-500 hover:text-purple-700 transition duration-200"
              >
                Don't have an account? Register
              </a>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-sm font-semibold rounded-full hover:from-purple-700 hover:to-indigo-700 transition-colors shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
            >
              LOG IN
            </button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-purple-700 to-indigo-700 text-white text-center py-4">
        <p className="text-sm">
          © {new Date().getFullYear()} PT. Greenfields Indonesia. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default Login;