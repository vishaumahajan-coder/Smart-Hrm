import React, { useState } from 'react';
import { Key, XCircle } from 'lucide-react';

const Login = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        if (username && password) {
            onLogin();
        }
    };

    return (
        <div className="w-[450px] bg-[#EBE9D8] border-2 border-[#0055E5] shadow-2xl overflow-hidden font-sans">
            {/* Title Bar */}
            <div className="bg-[#0055E5] text-white px-2 py-1 flex justify-between items-center text-xs font-bold shadow-[inset_0_1px_0_rgba(255,255,255,0.3)]">
                <div className="flex items-center gap-1">
                    <div className="w-4 h-4 bg-white/20 rounded-sm flex items-center justify-center italic text-[10px]">V</div>
                    User Verification
                </div>
                <button className="bg-[#E81123] hover:bg-red-600 text-white w-4 h-4 flex items-center justify-center text-[10px] border border-white/20">
                    ✕
                </button>
            </div>

            {/* Content */}
            <div className="p-6 flex gap-6">
                {/* Left blue bar decoration */}
                <div className="w-10 bg-[#0055E5] self-stretch mb-4 shadow-[inset_2px_2px_5px_rgba(0,0,0,0.3)]"></div>

                <form onSubmit={handleLogin} className="flex-1 flex flex-col gap-4">
                    <div className="mb-2">
                        <h1 className="text-[#000080] font-bold text-lg mb-4 underline decoration-[#0055E5]">User Verification</h1>
                    </div>

                    <div className="flex items-center gap-4">
                        <label className="w-24 text-xs font-bold text-gray-700">User Name</label>
                        <input
                            type="text"
                            autoFocus
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="flex-1 border-2 border-gray-400 bg-white px-1 py-0.5 outline-none focus:border-blue-500 text-sm shadow-inner"
                        />
                    </div>

                    <div className="flex items-center gap-4">
                        <label className="w-24 text-xs font-bold text-gray-700">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="flex-1 border-2 border-gray-400 bg-white px-1 py-0.5 outline-none focus:border-blue-500 text-sm shadow-inner"
                        />
                    </div>
                </form>

                {/* Buttons */}
                <div className="flex flex-col gap-3">
                    <button
                        onClick={handleLogin}
                        className="bg-white border-b-2 border-r-2 border-gray-600 hover:bg-gray-100 p-2 flex flex-col items-center justify-center w-20 h-20 transition-all active:translate-x-0.5 active:translate-y-0.5 active:border-0 shadow-sm"
                    >
                        <Key size={32} className="text-gray-500" />
                        <span className="text-[10px] font-bold mt-1 uppercase">Logon</span>
                    </button>
                    <button
                        type="button"
                        className="bg-white border-b-2 border-r-2 border-gray-600 hover:bg-gray-100 p-2 flex flex-col items-center justify-center w-20 h-20 transition-all active:translate-x-0.5 active:translate-y-0.5 active:border-0 shadow-sm"
                    >
                        <XCircle size={32} className="text-red-500" />
                        <span className="text-[10px] font-bold mt-1 uppercase text-gray-700">Cancel</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;
