import React from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div className="relative w-full h-full overflow-hidden">
            {/* Dashboard Background with Logo */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10">
                <div className="relative w-[300px] h-[300px] md:w-[600px] md:h-[600px]">
                    <div className="absolute inset-0 border-[60px] md:border-[120px] border-gray-400 rounded-full animate-[spin_120s_linear_infinite]"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-40 h-40 md:w-80 md:h-80 bg-blue-600 rounded-full flex items-center justify-center text-white text-6xl md:text-9xl font-black italic shadow-2xl">
                            S
                        </div>
                    </div>
                </div>
            </div>

            {/* Actual Content - usually in a window-like container for classic feel */}
            <div className="relative z-10 w-full h-full overflow-auto">
                <div className="p-4 min-h-full">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default MainLayout;
