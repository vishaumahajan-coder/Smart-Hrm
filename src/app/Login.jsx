import React, { useState } from 'react';
import { Key, XCircle } from 'lucide-react';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // For now, just call onLogin if there's any input
    if (username && password) {
      onLogin();
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center font-sans">
      <div className="w-[450px] bg-[#EBE9D8] border-2 border-[#0055E5] shadow-xl overflow-hidden">
        {/* Title Bar */}
        <div className="bg-[#0055E5] text-white px-2 py-1 flex justify-between items-center text-sm font-bold">
          <div className="flex items-center gap-1">
            <span className="w-4 h-4 bg-white/20 rounded-sm"></span>
            User Verification
          </div>
          <button className="bg-[#E81123] hover:bg-red-600 text-white w-5 h-5 flex items-center justify-center text-xs leading-none">
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="p-6 flex gap-6">
          {/* Left blue bar decoration */}
          <div className="w-10 bg-[#0055E5] self-stretch mb-4 shadow-inner"></div>

          <form onSubmit={handleLogin} className="flex-1 flex flex-col gap-4">
            <div className="mb-2">
              <h1 className="text-[#000080] font-bold text-lg mb-4">User Verification</h1>
            </div>

            <div className="flex items-center gap-4">
              <label className="w-24 text-sm font-bold text-gray-700">User Name</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="flex-1 border-2 border-gray-400 bg-white px-1 py-0.5 outline-none focus:border-blue-500"
              />
            </div>

            <div className="flex items-center gap-4">
              <label className="w-24 text-sm font-bold text-gray-700">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="flex-1 border-2 border-gray-400 bg-white px-1 py-0.5 outline-none focus:border-blue-500"
              />
            </div>
          </form>

          {/* Buttons */}
          <div className="flex flex-col gap-3">
            <button
              onClick={handleLogin}
              className="bg-white border-b-2 border-r-2 border-gray-500 hover:bg-gray-100 p-2 flex flex-col items-center justify-center w-20 h-20 transition-all active:border-t-2 active:border-l-2 active:border-b-0 active:border-r-0"
            >
              <Key size={32} className="text-gray-500" />
              <span className="text-xs font-bold mt-1">Logon</span>
            </button>
            <button
              type="button"
              className="bg-white border-b-2 border-r-2 border-gray-500 hover:bg-gray-100 p-2 flex flex-col items-center justify-center w-20 h-20 transition-all active:border-t-2 active:border-l-2 active:border-b-0 active:border-r-0"
            >
              <XCircle size={32} className="text-red-500" />
              <span className="text-xs font-bold mt-1 text-gray-700">Cancel</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
