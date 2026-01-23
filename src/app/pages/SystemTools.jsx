import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Hammer, Calculator, ShieldAlert, Cpu, HardDrive, Settings, LogOut, ChevronRight } from 'lucide-react';

const SystemTools = () => {
    const navigate = useNavigate();

    const tools = [
        { id: 'calc', name: 'Financial Calculator', icon: <Calculator />, desc: 'Payroll and tax calculation helper' },
        { id: 'diag', name: 'System Diagnostics', icon: <Cpu />, desc: 'Check station and database health' },
        { id: 'clean', name: 'Database Cleanup', icon: <HardDrive />, desc: 'Purge old logs and optimize tables' },
        { id: 'sec', name: 'Security Audit', icon: <ShieldAlert />, desc: 'Scan for unauthorized access attempts' },
    ];

    return (
        <div className="flex flex-col h-full w-full bg-[#EBE9D8] font-sans text-xs">
            <div className="bg-[#D4D0C8] border-b border-gray-400 px-3 py-1 flex items-center gap-2">
                <Hammer size={14} className="text-gray-600" />
                <span className="font-bold text-gray-700 uppercase">Station Utility Toolkit & Diagnostics</span>
            </div>

            <div className="flex-1 p-12 flex flex-col items-center justify-center">
                <div className="w-full max-w-4xl grid grid-cols-2 gap-8">
                    {tools.map(tool => (
                        <button
                            key={tool.id}
                            className="bg-white border-2 border-gray-500 p-6 flex items-start gap-6 shadow-[6px_6px_0_rgba(0,0,0,0.1)] hover:border-blue-600 hover:translate-x-1 hover:-translate-y-1 transition-all group"
                        >
                            <div className="p-4 bg-blue-50 text-blue-600 border border-blue-200 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                {React.cloneElement(tool.icon, { size: 32 })}
                            </div>
                            <div className="flex-1 text-left">
                                <h3 className="text-xl font-black text-blue-900 italic uppercase leading-none mb-2">{tool.name}</h3>
                                <p className="text-gray-500 font-bold uppercase tracking-tighter text-[10px] italic">{tool.desc}</p>
                            </div>
                            <ChevronRight className="text-gray-300 self-center" size={24} />
                        </button>
                    ))}
                </div>

                <div className="mt-12 w-full max-w-4xl bg-blue-900 text-white p-6 shadow-2xl border-4 border-white flex justify-between items-center">
                    <div>
                        <h4 className="font-black italic text-lg uppercase tracking-widest leading-none">Automated Maintenance</h4>
                        <p className="font-bold opacity-60 uppercase text-[10px] mt-1">Last full optimization performed on 21/01/2026</p>
                    </div>
                    <button className="bg-white text-blue-900 px-8 py-3 font-black italic hover:bg-black hover:text-white transition-all uppercase tracking-widest text-xs">
                        START ENGINE SCAN
                    </button>
                </div>
            </div>

            <div className="bg-white border-t border-gray-400 p-2 flex justify-end px-12 no-print">
                <button
                    onClick={() => navigate(-1)}
                    className="flex items-center gap-2 bg-[#E0DCCF] border-2 border-white border-b-gray-600 border-r-gray-600 px-10 py-3 font-black italic hover:bg-gray-200 shadow-md active:translate-y-0.5"
                >
                    <LogOut size={18} className="text-red-600" />
                    CLOSE TOOLKIT
                </button>
            </div>
        </div>
    );
};

export default SystemTools;
