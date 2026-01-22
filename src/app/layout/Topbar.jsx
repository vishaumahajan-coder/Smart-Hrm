import React from 'react';
import { User, LogOut, Settings } from 'lucide-react';

const Topbar = ({ onLogout }) => {
    return (
        <div className="h-12 bg-[#0055E5] text-white flex items-center justify-between px-6 shadow-md z-10">
            <div className="flex items-center gap-4">
                <span className="font-bold flex items-center gap-2 italic">
                    <div className="w-6 h-6 bg-white rotate-45 flex items-center justify-center">
                        <span className="text-[#0055E5] -rotate-45 font-black text-xs">HRM</span>
                    </div>
                    SMART HRM SOLUTIONS
                </span>
            </div>
            <div className="flex items-center gap-6">
                <div className="flex items-center gap-2 hover:bg-blue-600 px-2 py-1 rounded cursor-pointer transition-colors">
                    <User size={18} />
                    <span className="text-sm">Admin User</span>
                </div>
                <div className="flex items-center gap-4">
                    <Settings size={18} className="cursor-pointer hover:rotate-90 transition-transform duration-500" />
                    <button
                        onClick={onLogout}
                        className="flex items-center gap-1 hover:text-red-300 transition-colors text-sm font-bold"
                    >
                        <LogOut size={18} />
                        LOGOUT
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Topbar;
