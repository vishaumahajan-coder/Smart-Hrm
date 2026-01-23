import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Activity, CheckCircle2, AlertTriangle, Clock, RefreshCw, BarChart3, LogOut } from 'lucide-react';

const ProcessingStatus = () => {
    const navigate = useNavigate();

    const modules = [
        { name: 'Employee Data Sync', status: 'Completed', time: '10:30 AM', details: 'All 142 records synced', icon: <CheckCircle2 className="text-green-500" /> },
        { name: 'Payroll Calculation', status: 'In Progress', time: '11:15 AM', details: 'Calculating Week 4...', progress: 65, icon: <RefreshCw className="text-blue-500 animate-spin" /> },
        { name: 'Bank Disbursement', status: 'Pending', time: '-', details: 'Requires Manager Approval', icon: <Clock className="text-gray-400" /> },
        { name: 'Tax Filing (SO1)', status: 'Warning', time: '09:00 AM', details: 'Missing TRN for 2 employees', icon: <AlertTriangle className="text-yellow-600" /> },
    ];

    return (
        <div className="flex flex-col h-full w-full bg-[#EBE9D8] font-sans text-xs">
            {/* Header */}
            <div className="bg-[#D4D0C8] border-b border-gray-400 px-4 py-2 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <Activity size={20} className="text-blue-700" />
                    <div>
                        <h1 className="font-black text-blue-900 border-b-2 border-yellow-400 leading-tight italic uppercase">System Processing Status</h1>
                        <p className="text-[10px] font-bold text-gray-500 uppercase italic">Real-time Station Intelligence Monitor</p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <button className="flex items-center gap-2 p-2 bg-white border border-gray-400 font-bold hover:bg-blue-50">
                        <RefreshCw size={14} className="text-blue-600" /> FORCE REFRESH
                    </button>
                </div>
            </div>

            <div className="flex-1 p-6 overflow-auto">
                <div className="grid grid-cols-[1fr_300px] gap-8">
                    {/* Left - Module Status Cards */}
                    <div className="space-y-4">
                        {modules.map((module, idx) => (
                            <div key={idx} className="bg-white border-2 border-gray-500 p-4 shadow-[4px_4px_0_rgba(0,0,0,0.1)] flex items-center gap-6 group hover:border-blue-500 transition-all">
                                <div className="p-4 bg-gray-50 border border-gray-200 group-hover:bg-blue-50">
                                    {module.icon}
                                </div>
                                <div className="flex-1">
                                    <div className="flex justify-between items-center mb-1">
                                        <h3 className="text-lg font-black text-blue-900 italic uppercase">{module.name}</h3>
                                        <span className={`text-[10px] font-black italic uppercase px-2 py-0.5 rounded border ${module.status === 'Completed' ? 'bg-green-50 border-green-200 text-green-700' :
                                                module.status === 'In Progress' ? 'bg-blue-50 border-blue-200 text-blue-700' :
                                                    module.status === 'Warning' ? 'bg-yellow-50 border-yellow-200 text-yellow-700' :
                                                        'bg-gray-50 border-gray-300 text-gray-500'
                                            }`}>
                                            STATUS: {module.status}
                                        </span>
                                    </div>
                                    <p className="text-[10px] font-bold text-gray-500 uppercase mb-3">{module.details}</p>

                                    {module.progress && (
                                        <div className="w-full h-1.5 bg-gray-100 border border-gray-200 rounded-full overflow-hidden">
                                            <div
                                                className="h-full bg-blue-600 animate-[pulse_2s_infinite]"
                                                style={{ width: `${module.progress}%` }}
                                            />
                                        </div>
                                    )}
                                </div>
                                <div className="text-right">
                                    <p className="text-[9px] font-black text-gray-400 uppercase">Last Activity</p>
                                    <p className="text-sm font-black text-gray-700 italic">{module.time}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right - Global Analytics */}
                    <div className="space-y-6">
                        <div className="bg-blue-900 text-white p-6 shadow-xl border-4 border-white">
                            <h3 className="font-black italic text-sm mb-4 border-b border-blue-700 pb-2 uppercase tracking-widest flex items-center gap-2">
                                <BarChart3 size={16} /> Global Station Load
                            </h3>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center text-[10px]">
                                    <span className="font-bold opacity-70">CPU Utilization</span>
                                    <span className="font-black italic">14.2%</span>
                                </div>
                                <div className="flex justify-between items-center text-[10px]">
                                    <span className="font-bold opacity-70">Database IO</span>
                                    <span className="font-black italic">Optimized</span>
                                </div>
                                <div className="flex justify-between items-center text-[10px]">
                                    <span className="font-bold opacity-70">Network Latency</span>
                                    <span className="font-black italic">4ms</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-[#EBE9D8] border-2 border-gray-500 p-4 italic">
                            <p className="font-black text-blue-900 uppercase italic text-[10px] mb-2">Notice for admin</p>
                            <p className="text-[10px] text-gray-600 font-bold leading-tight">
                                Scheduled system maintenance will begin at 11:00 PM EST. All stations should be logged out by then.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="bg-[#D4D0C8] border-t border-gray-400 p-3 px-6 flex justify-between items-center no-print">
                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="font-bold text-green-800 italic uppercase">System Healthy</span>
                    </div>
                </div>
                <button
                    onClick={() => navigate(-1)}
                    className="bg-[#E0DCCF] border-2 border-white border-b-gray-600 border-r-gray-600 px-8 py-2 font-black italic hover:bg-gray-200 transition-all flex items-center gap-2"
                >
                    <LogOut size={16} className="text-red-600" /> CLOSE STATUS MONITOR
                </button>
            </div>
        </div>
    );
};

export default ProcessingStatus;
