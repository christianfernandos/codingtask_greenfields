import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    
    // Simple username/password validation
    if (email === 'chris@gmail.com' && password === 'chris098') {
      localStorage.setItem('userToken', 'dummyToken'); // Replace with actual token if needed
      navigate('/main-menu');
    } else {
      setError('Login Failed: Invalid email or password');
    }

    try {
      // Uncomment below for API-based login (replace with your actual API URL)
      // const response = await axios.post('http://your-api-url/login', { email, password });
      // localStorage.setItem('userToken', response.data.token);
      // navigate('/main-menu');
    } catch (error) {
      // If you use API login, handle the error here.
      setError('Login Failed: Invalid email or password');
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col"
      style={{ backgroundImage: `url(/login.jpg)` }} // Apply background image here
    >
      <header className="bg-green-900 text-white text-center py-4 shadow-md">
        <h1 className="text-lg font-semibold tracking-wide">PT. Greenfields Indonesia</h1>
      </header>

      <div className="flex-grow flex items-center justify-center px-4">
        {/* Wrapper div for gradient border */}
        <div className="relative p-1 rounded-xl bg-transparent">
          {/* Inner form with solid background */}
          <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-sm border-4 border-transparent 
                          bg-clip-border border-[transparent] 
                          hover:border-gradient-to-t from-green-400 to-green-600 transition-all duration-500">
            <div className="text-center mb-6">
              <h1 className="text-3xl font-bold text-gray-900 tracking-wide">AUDIT APP</h1>
              <p className="text-gray-600 text-sm">PT. Greenfields Indonesia</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 bg-gray-100 border rounded-md text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Email"
                  required
                />
              </div>

              <div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 bg-gray-100 border rounded-md text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Password"
                  required
                />
              </div>

              {error && (
                <div className="text-red-500 text-sm text-center">
                  {error}
                </div>
              )}

              <div className="text-sm text-center">
                <a href="/register" className="text-green-500 hover:underline">
                  Don\'t have an account? Register
                </a>
              </div>

              <button
                type="submit"
                className="w-full py-2 bg-green-900 text-white text-sm font-semibold rounded-md hover:bg-green-800 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-900"
              >
                LOG IN
              </button>
            </form>

            {/* About Us button */}
            <div className="mt-4 text-center">
              <a
                href="https://greenfieldsdairy.com/tentang-greenfields"
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 px-4 text-green-700 text-sm font-semibold underline hover:bg-green-100 transition-colors"
              >
                About Us
              </a>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-green-900 text-white text-center py-4">
        <p className="text-sm">
          © {new Date().getFullYear()} PT. Greenfields Indonesia. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default Login;