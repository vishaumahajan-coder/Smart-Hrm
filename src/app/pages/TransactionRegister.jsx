import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ListFilter, Search, Printer, Download, LogOut, FileText, ChevronDown } from 'lucide-react';

const TransactionRegister = () => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');

    const records = [
        { id: 'TX5091', date: '22/01/2026', employee: 'John Doe', type: 'SALARY', amount: '85,200.00', status: 'Posted' },
        { id: 'TX5092', date: '22/01/2026', employee: 'Jane Smith', type: 'ADVANCE', amount: '5,000.00', status: 'Pending' },
        { id: 'TX5093', date: '21/01/2026', employee: 'Mike Ross', type: 'BONUS', amount: '12,000.00', status: 'Posted' },
        { id: 'TX5094', date: '21/01/2026', employee: 'Harvey Specter', type: 'SALARY', amount: '120,000.00', status: 'Voided' },
    ];

    return (
        <div className="flex flex-col h-full w-full bg-[#EBE9D8] font-sans text-xs">
            <div className="bg-[#D4D0C8] border-b border-gray-400 px-3 py-1 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <ListFilter size={14} className="text-blue-800" />
                    <span className="font-bold text-gray-700 uppercase italic">Entered Transaction Register</span>
                </div>
                <div className="flex gap-2">
                    <button className="px-3 py-1 bg-white border border-gray-400 text-[10px] font-black italic hover:bg-gray-100 flex items-center gap-1">
                        ALL PERIODS <ChevronDown size={10} />
                    </button>
                </div>
            </div>

            <div className="flex-1 p-4 flex flex-col gap-4 overflow-hidden">
                {/* Search & Tool Bar */}
                <div className="bg-white border border-gray-400 p-2 flex items-center gap-4 shadow-inner">
                    <div className="flex-1 flex items-center gap-2 px-2 bg-gray-50 border border-gray-300">
                        <Search size={16} className="text-gray-400" />
                        <input
                            type="text"
                            placeholder="FILTER BY ID, EMPLOYEE OR TYPE..."
                            className="bg-transparent outline-none p-2 font-bold w-full italic"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <div className="flex gap-2">
                        <button className="p-2 border border-gray-400 bg-[#E0DCCF] hover:bg-gray-200 shadow-sm">
                            <Printer size={16} title="Print Register" />
                        </button>
                        <button className="p-2 border border-gray-400 bg-[#E0DCCF] hover:bg-gray-200 shadow-sm">
                            <Download size={16} title="Export CSV" />
                        </button>
                    </div>
                </div>

                {/* Table Container */}
                <div className="flex-1 bg-white border border-gray-400 shadow-inner overflow-hidden flex flex-col">
                    <div className="overflow-auto flex-1">
                        <table className="w-full text-left border-collapse">
                            <thead className="bg-gray-100 sticky top-0 border-b border-gray-400 font-black italic text-gray-600">
                                <tr>
                                    <th className="p-3 border-r border-gray-300">TX ID</th>
                                    <th className="p-3 border-r border-gray-300">DATE</th>
                                    <th className="p-3 border-r border-gray-300">EMPLOYEE</th>
                                    <th className="p-3 border-r border-gray-300">CATEGORY</th>
                                    <th className="p-3 border-r border-gray-300">AMOUNT</th>
                                    <th className="p-3">STATUS</th>
                                </tr>
                            </thead>
                            <tbody>
                                {records.filter(r =>
                                    r.employee.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                    r.id.toLowerCase().includes(searchTerm.toLowerCase())
                                ).map((record, i) => (
                                    <tr key={i} className="border-b border-gray-100 hover:bg-blue-50 cursor-pointer group">
                                        <td className="p-3 font-black text-gray-500">#{record.id}</td>
                                        <td className="p-3 font-mono">{record.date}</td>
                                        <td className="p-3 font-black text-blue-900 italic group-hover:underline">{record.employee}</td>
                                        <td className="p-3">
                                            <span className="px-2 py-0.5 bg-gray-100 border border-gray-300 rounded font-bold text-[9px] uppercase tracking-tighter">
                                                {record.type}
                                            </span>
                                        </td>
                                        <td className="p-3 font-black text-blue-700 italic group-hover:scale-105 transition-transform origin-left">
                                            ${record.amount}
                                        </td>
                                        <td className="p-3">
                                            <span className={`px-2 py-0.5 rounded-full font-black italic uppercase text-[9px] ${record.status === 'Posted' ? 'bg-green-100 text-green-700' :
                                                record.status === 'Pending' ? 'bg-yellow-100 text-yellow-700 animate-pulse' :
                                                    'bg-red-100 text-red-700'
                                                }`}>
                                                {record.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Status Bar */}
                    <div className="bg-[#EBE9D8] border-t border-gray-400 p-2 flex justify-between px-4 text-[10px] font-black italic text-gray-500 uppercase tracking-widest">
                        <span>Total Records: {records.length}</span>
                        <span>Selection: None</span>
                        <span className="text-blue-800">Total Value: $222,200.00</span>
                    </div>
                </div>

                {/* Footer Buttons */}
                <div className="flex justify-end gap-3 no-print">
                    <button className="flex items-center gap-2 px-6 py-3 bg-[#E0DCCF] border-2 border-white border-b-gray-600 border-r-gray-600 font-black italic hover:bg-gray-200">
                        <FileText size={18} className="text-blue-600" /> VIEW AUDIT LOG
                    </button>
                    <button
                        onClick={() => navigate(-1)}
                        className="flex items-center gap-2 px-6 py-3 bg-[#E0DCCF] border-2 border-white border-b-gray-600 border-r-gray-600 font-black italic hover:bg-gray-200"
                    >
                        <LogOut size={18} className="text-red-600" /> CLOSE REGISTER
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TransactionRegister;
