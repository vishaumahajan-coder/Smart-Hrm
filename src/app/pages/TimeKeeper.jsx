import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Save, LogOut, Clock, Play, Pause, RefreshCw, Calendar, User } from 'lucide-react';

const TimeKeeper = () => {
    const navigate = useNavigate();
    const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());
    const [entries, setEntries] = useState([
        { id: 1, name: 'John Doe', department: 'IT', clockIn: '08:30 AM', status: 'Working' },
        { id: 2, name: 'Jane Smith', department: 'HR', clockIn: '09:00 AM', status: 'Working' },
        { id: 3, name: 'Mike Ross', department: 'Finance', clockIn: '08:45 AM', status: 'On Break' },
    ]);

    // Update clock every second
    React.useEffect(() => {
        const timer = setInterval(() => setCurrentTime(new Date().toLocaleTimeString()), 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="flex flex-col h-full w-full bg-[#EBE9D8] font-sans text-xs">
            {/* Header */}
            <div className="bg-[#D4D0C8] border-b border-gray-400 px-2 py-1 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <Clock size={14} className="text-blue-700" />
                    <span className="font-bold text-gray-700 uppercase tracking-tighter">Time Keeper - Real Time Monitoring</span>
                </div>
                <div className="text-blue-800 font-black text-sm italic pr-2">{currentTime}</div>
            </div>

            {/* Content area */}
            <div className="flex-1 p-4 flex gap-4 overflow-hidden">
                {/* Control Panel */}
                <div className="w-64 bg-[#D4D0C8] border border-gray-400 p-3 shadow-[inset_1px_1px_0_white]">
                    <div className="bg-[#316AC5] text-white px-2 py-1 font-bold mb-4 shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)]">
                        CONTROLS
                    </div>

                    <div className="flex flex-col gap-3">
                        <button className="flex items-center gap-3 w-full bg-white border border-gray-500 p-2 hover:bg-blue-50 active:translate-y-0.5 shadow-sm">
                            <Play size={18} className="text-green-600" />
                            <span className="font-bold">START SHIFT LOG</span>
                        </button>
                        <button className="flex items-center gap-3 w-full bg-white border border-gray-500 p-2 hover:bg-yellow-50 active:translate-y-0.5 shadow-sm">
                            <Pause size={18} className="text-yellow-600" />
                            <span className="font-bold">PAUSE MONITORING</span>
                        </button>
                        <button className="flex items-center gap-3 w-full bg-gray-100 border border-gray-500 p-2 opacity-50 cursor-not-allowed">
                            <RefreshCw size={18} className="text-blue-600" />
                            <span className="font-bold italic">SYNC BIOMETRIC</span>
                        </button>
                    </div>

                    <div className="mt-8 border-t border-gray-400 pt-4">
                        <div className="text-[10px] font-bold text-gray-600 uppercase mb-2">Filters / Views</div>
                        <select className="w-full p-1 border border-gray-400 mb-2 font-bold">
                            <option>All Departments</option>
                            <option>IT Department</option>
                            <option>Human Resources</option>
                        </select>
                        <div className="bg-white p-2 border border-gray-400 text-[10px] font-bold">
                            <div>Total Active: 12</div>
                            <div>On Lunch: 3</div>
                            <div>Signed Out: 45</div>
                        </div>
                    </div>
                </div>

                {/* Tracking Table */}
                <div className="flex-1 overflow-hidden flex flex-col border border-gray-400 bg-white shadow-inner">
                    <div className="bg-[#EBE9D8] p-1 border-b border-gray-400 flex items-center justify-between px-3">
                        <span className="font-bold">Live Status Feed</span>
                        <div className="flex items-center gap-1">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            <span className="text-[10px] text-green-700 font-bold uppercase">System Online</span>
                        </div>
                    </div>

                    <div className="flex-1 overflow-auto">
                        <table className="w-full text-left border-collapse">
                            <thead className="bg-gray-100 sticky top-0 border-b border-gray-300">
                                <tr>
                                    <th className="p-2 border-r border-gray-200">ID</th>
                                    <th className="p-2 border-r border-gray-200">Employee Name</th>
                                    <th className="p-2 border-r border-gray-200">Dept</th>
                                    <th className="p-2 border-r border-gray-200">Clock In</th>
                                    <th className="p-2 border-r border-gray-200">Break Status</th>
                                    <th className="p-2">Current Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {entries.map(entry => (
                                    <tr key={entry.id} className="border-b border-gray-100 hover:bg-blue-50 transition-colors cursor-default">
                                        <td className="p-2 font-bold text-gray-600">#{entry.id}</td>
                                        <td className="p-2 flex items-center gap-2">
                                            <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                                                <User size={12} className="text-blue-600" />
                                            </div>
                                            <span className="font-black text-blue-900">{entry.name}</span>
                                        </td>
                                        <td className="p-2 font-bold">{entry.department}</td>
                                        <td className="p-2 font-mono text-gray-500">{entry.clockIn}</td>
                                        <td className="p-2">
                                            <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${entry.status === 'On Break' ? 'bg-yellow-200 text-yellow-800' : 'bg-green-100 text-green-700'}`}>
                                                {entry.status === 'On Break' ? 'OUT' : 'IN'}
                                            </span>
                                        </td>
                                        <td className="p-2">
                                            <div className="flex items-center gap-1">
                                                <div className={`w-1.5 h-1.5 rounded-full ${entry.status === 'Working' ? 'bg-green-500' : 'bg-yellow-500'}`}></div>
                                                <span className="font-bold">{entry.status}</span>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Footer Stats */}
                    <div className="bg-[#EBE9D8] p-2 border-t border-gray-400 flex justify-between px-4 text-[10px] font-bold text-gray-600">
                        <span>LAST SYNC: JUST NOW</span>
                        <div className="flex gap-4 uppercase">
                            <span>Total Hours: 1,450.4</span>
                            <span className="text-blue-700">Overtime Alerts: 2</span>
                        </div>
                    </div>
                </div>

                {/* Right Side buttons */}
                <div className="flex flex-col gap-2 w-20">
                    <button className="flex flex-col items-center justify-center p-2 border-2 border-white border-b-gray-600 border-r-gray-600 bg-[#E0DCCF] hover:bg-gray-200 active:border-gray-500 transition-none">
                        <Save className="text-blue-600 mb-1" size={20} />
                        <span className="font-bold text-[10px]">SAVE Logs</span>
                    </button>
                    <button className="flex flex-col items-center justify-center p-2 border-2 border-white border-b-gray-600 border-r-gray-600 bg-[#E0DCCF] hover:bg-gray-200 active:border-gray-500 transition-none">
                        <Calendar className="text-gray-600 mb-1" size={20} />
                        <span className="font-bold text-[10px]">History</span>
                    </button>
                    <div className="flex-1"></div>
                    <button
                        onClick={() => navigate(-1)}
                        className="flex flex-col items-center justify-center p-2 border-2 border-white border-b-gray-600 border-r-gray-600 bg-[#E0DCCF] hover:bg-gray-200 active:border-gray-500"
                    >
                        <LogOut className="text-red-600 mb-1" size={20} />
                        <span className="font-bold text-[10px]">EXIT</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TimeKeeper;
