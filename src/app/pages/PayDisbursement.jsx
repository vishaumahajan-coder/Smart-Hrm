import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Landmark, Printer, LogOut, CheckCircle, Search, Filter } from 'lucide-react';

const PayDisbursement = () => {
    const navigate = useNavigate();
    const [status, setStatus] = useState('Draft');

    const transactions = [
        { id: 'BANK001', name: 'National Commercial Bank', employees: 42, total: '1,240,500.00' },
        { id: 'BANK002', name: 'Scotiabank Jamaica', employees: 18, total: '580,200.00' },
        { id: 'BANK003', name: 'Jamaica National', employees: 12, total: '310,000.00' },
    ];

    return (
        <div className="flex flex-col h-full w-full bg-[#EBE9D8] font-sans text-xs">
            <div className="bg-[#D4D0C8] border-b border-gray-400 px-3 py-1 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Landmark size={14} className="text-blue-800" />
                    <span className="font-bold text-gray-700 uppercase italic">Bank Pay disbursement Interface</span>
                </div>
            </div>

            <div className="flex-1 p-6 flex flex-col gap-6">
                <div className="flex gap-4">
                    <div className="flex-1 bg-white border-2 border-gray-500 p-6 shadow-md">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-xl font-black text-blue-900 uppercase italic tracking-tighter">Pending Bank Files</h2>
                            <div className="flex gap-2">
                                <button className="p-2 bg-gray-100 border border-gray-400 font-bold flex items-center gap-2 hover:bg-blue-50">
                                    <Filter size={14} /> FILTERS
                                </button>
                                <button className="p-2 bg-gray-100 border border-gray-400 font-bold flex items-center gap-2 hover:bg-blue-50">
                                    <Search size={14} /> SEARCH
                                </button>
                            </div>
                        </div>

                        <table className="w-full text-left border-collapse">
                            <thead className="bg-gray-100 border-b border-gray-400 italic">
                                <tr>
                                    <th className="p-3 font-black text-gray-700">BANK / INSTITUTION</th>
                                    <th className="p-3 font-black text-gray-700">EMPLOYEES</th>
                                    <th className="p-3 font-black text-gray-700">TOTAL JMD</th>
                                    <th className="p-3 font-black text-gray-700 text-right">ACTIONS</th>
                                </tr>
                            </thead>
                            <tbody>
                                {transactions.map((t, i) => (
                                    <tr key={i} className="border-b border-gray-100 hover:bg-blue-50">
                                        <td className="p-3 font-black text-blue-900 italic">{t.name}</td>
                                        <td className="p-3 font-bold">{t.employees}</td>
                                        <td className="p-3 font-black text-green-700 italic">{t.total}</td>
                                        <td className="p-3 text-right">
                                            <button className="px-3 py-1 bg-blue-600 text-white font-bold hover:bg-blue-700 italic uppercase text-[10px]">
                                                GENERATE FILE
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="w-80 space-y-4">
                        <div className="bg-blue-900 text-white p-6 shadow-xl border-4 border-white">
                            <h3 className="font-black italic text-sm mb-4 uppercase tracking-widest flex items-center gap-2">
                                <CheckCircle size={16} /> Batch Summary
                            </h3>
                            <div className="space-y-4 text-[10px]">
                                <div className="flex justify-between border-b border-blue-800 pb-2">
                                    <span className="font-bold opacity-70">PAYROLL PERIOD</span>
                                    <span className="font-black italic">WEEK 4 / 2026</span>
                                </div>
                                <div className="flex justify-between border-b border-blue-800 pb-2">
                                    <span className="font-bold opacity-70">TOTAL NET PAY</span>
                                    <span className="font-black italic">$2,130,700.00</span>
                                </div>
                                <div className="flex justify-between border-b border-blue-800 pb-2">
                                    <span className="font-bold opacity-70">TRANSFERS READY</span>
                                    <span className="font-black italic text-green-400">3 OF 3</span>
                                </div>
                            </div>
                            <button className="w-full mt-6 bg-white text-blue-900 p-3 font-black italic hover:bg-gray-100 transition-all uppercase tracking-widest">
                                DISBURSE ALL NOW
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white border-t border-gray-400 p-2 flex justify-between items-center px-6 no-print">
                <div className="flex gap-4">
                    <button className="flex items-center gap-2 p-2 border border-gray-400 bg-gray-50 font-bold hover:bg-white active:translate-y-0.5">
                        <Printer size={16} className="text-gray-600" /> PRINT DISBURSEMENT LOG
                    </button>
                </div>
                <button
                    onClick={() => navigate(-1)}
                    className="bg-red-500 text-white px-8 py-2 font-black italic hover:bg-red-600 shadow-lg active:translate-y-0.5"
                >
                    EXIT INTERFACE
                </button>
            </div>
        </div>
    );
};

export default PayDisbursement;
