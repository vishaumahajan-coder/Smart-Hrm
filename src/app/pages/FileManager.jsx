import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Folder, Database, Download, Upload, ShieldCheck, History, LogOut, FileCode } from 'lucide-react';

const FileManager = () => {
    const navigate = useNavigate();
    const [backups, setBackups] = useState([
        { id: 'BK01', date: '22/01/2026', size: '45.2 MB', user: 'Admin' },
        { id: 'BK02', date: '21/01/2026', size: '44.8 MB', user: 'System' },
        { id: 'BK03', date: '20/01/2026', size: '44.1 MB', user: 'Admin' },
    ]);

    return (
        <div className="flex flex-col h-full w-full bg-[#EBE9D8] font-sans text-xs">
            <div className="bg-[#D4D0C8] border-b border-gray-400 px-3 py-1 flex items-center gap-2">
                <Folder size={14} className="text-yellow-600" />
                <span className="font-bold text-gray-700 uppercase">System File Management & Data Integrity</span>
            </div>

            <div className="flex-1 p-6 flex gap-6 overflow-hidden">
                {/* Left - Operations */}
                <div className="w-72 flex flex-col gap-4">
                    <div className="bg-white border-2 border-gray-500 p-5 shadow-[4px_4px_0_rgba(0,0,0,0.1)]">
                        <h3 className="font-black text-blue-900 italic uppercase mb-4 border-b pb-2">Primary Operations</h3>
                        <div className="space-y-3">
                            <button className="w-full flex items-center gap-3 p-3 bg-blue-50 border border-blue-200 text-blue-700 font-bold hover:bg-blue-100 active:translate-y-0.5 transition-all text-left">
                                <Database size={18} />
                                <div>
                                    <div className="leading-none">INITIATE BACKUP</div>
                                    <div className="text-[9px] opacity-60">Full Master Database</div>
                                </div>
                            </button>
                            <button className="w-full flex items-center gap-3 p-3 bg-green-50 border border-green-200 text-green-700 font-bold hover:bg-green-100 active:translate-y-0.5 transition-all text-left">
                                <Upload size={18} />
                                <div>
                                    <div className="leading-none">IMPORT DATA</div>
                                    <div className="text-[9px] opacity-60">Excel, CSV or XML</div>
                                </div>
                            </button>
                            <button className="w-full flex items-center gap-3 p-3 bg-purple-50 border border-purple-200 text-purple-700 font-bold hover:bg-purple-100 active:translate-y-0.5 transition-all text-left">
                                <Download size={18} />
                                <div>
                                    <div className="leading-none">EXPORT MASTER</div>
                                    <div className="text-[9px] opacity-60">YTD Full Statistics</div>
                                </div>
                            </button>
                        </div>
                    </div>

                    <div className="bg-red-900 text-white p-5 border-2 border-white shadow-lg overflow-hidden relative">
                        <div className="relative z-10 flex items-start gap-3">
                            <ShieldCheck size={28} className="shrink-0" />
                            <div>
                                <h4 className="font-black italic text-[10px] uppercase tracking-tighter mb-1">Security Alert</h4>
                                <p className="text-[9px] leading-tight font-bold opacity-80 uppercase tracking-tighter">
                                    All exported files are encrypted with Station RSA-4096. Password required for restore operations.
                                </p>
                            </div>
                        </div>
                        <FileCode className="absolute -bottom-8 -right-8 opacity-10 rotate-12" size={120} />
                    </div>
                </div>

                {/* Right - History */}
                <div className="flex-1 overflow-hidden flex flex-col bg-white border-2 border-gray-500 shadow-[8px_8px_0_rgba(0,0,0,0.1)]">
                    <div className="bg-[#EBE9D8] p-2 border-b border-gray-400 flex items-center justify-between px-4">
                        <div className="flex items-center gap-2 font-black italic text-gray-700 uppercase">
                            <History size={16} />
                            Recent Operations Log
                        </div>
                        <button className="bg-white border border-gray-400 px-3 py-1 font-bold text-[10px] hover:bg-gray-100">REFRESH LIST</button>
                    </div>

                    <div className="flex-1 overflow-auto">
                        <table className="w-full text-left border-collapse">
                            <thead className="bg-gray-50 sticky top-0 border-b border-gray-300 font-black italic text-gray-500 uppercase">
                                <tr>
                                    <th className="p-4">OP ID</th>
                                    <th className="p-4">DATE STAMP</th>
                                    <th className="p-4">FILE SIZE</th>
                                    <th className="p-4">CREATED BY</th>
                                    <th className="p-4 text-right">STATUS</th>
                                </tr>
                            </thead>
                            <tbody>
                                {backups.map(b => (
                                    <tr key={b.id} className="border-b border-gray-100 hover:bg-blue-50 cursor-pointer transition-colors group">
                                        <td className="p-4 font-black text-blue-600">#{b.id}</td>
                                        <td className="p-4 font-mono">{b.date}</td>
                                        <td className="p-4 font-bold">{b.size}</td>
                                        <td className="p-4 font-black italic text-gray-700">{b.user}</td>
                                        <td className="p-4 text-right">
                                            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full font-black italic text-[9px] uppercase">VERIFIED</span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="bg-[#EBE9D8] p-3 border-t border-gray-400 text-right">
                        <button
                            onClick={() => navigate(-1)}
                            className="bg-red-500 text-white px-8 py-2 font-black italic hover:bg-red-600 shadow-md active:translate-y-0.5"
                        >
                            EXIT FILE MANAGER
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FileManager;
