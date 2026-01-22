import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

const MainLayout = ({ onLogout }) => {
    return (
        <div className="flex h-screen w-full bg-[#EBE9D8] overflow-hidden">
            <Sidebar />
            <div className="flex-1 flex flex-col min-w-0">
                <Topbar onLogout={onLogout} />
                <main className="flex-1 overflow-auto p-6">
                    <div className="bg-white border-2 border-gray-400 p-4 min-h-full shadow-inner">
                        <Outlet />
                    </div>
                </main>
            </div>
        </div>
    );
};

export default MainLayout;
