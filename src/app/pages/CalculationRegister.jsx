import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FileText, Search, Printer, Download, LogOut, ChevronDown, CheckCircle } from 'lucide-react';

const CalculationRegister = () => {
    const navigate = useNavigate();

    const calculations = [
        { id: 'CALC-501', period: 'Week 4 / 2026', totalGross: '2,400,000.00', totalTax: '180,000.00', status: 'Verified' },
        { id: 'CALC-500', period: 'Week 3 / 2026', totalGross: '2,350,000.00', totalTax: '178,000.00', status: 'Posted' },
        { id: 'CALC-499', period: 'Week 2 / 2026', totalGross: '2,320,000.00', totalTax: '175,000.00', status: 'Posted' },
    ];

    return (
        <div className="flex flex-col h-full w-full bg-[#EBE9D8] font-sans text-xs">
            <div className="bg-[#D4D0C8] border-b border-gray-400 px-3 py-1 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <FileText size={14} className="text-blue-800" />
                    <span className="font-bold text-gray-700 uppercase italic">Payroll Calculation Register Log</span>
                </div>
            </div>

            <div className="flex-1 p-6 flex flex-col gap-6 overflow-hidden">
                <div className="bg-white border-2 border-gray-500 p-4 shadow-md flex items-center gap-4">
                    <div className="flex-1 flex items-center gap-2 bg-gray-50 border border-gray-300 p-2">
                        <Search size={16} className="text-gray-400" />
                        <input type="text" placeholder="FILTER BY CALC ID OR PERIOD..." className="bg-transparent outline-none font-bold w-full italic" />
                    </div>
                    <button className="p-2 border border-gray-400 bg-[#E0DCCF] hover:bg-gray-200 shadow-sm"><Printer size={16} /></button>
                </div>

                <div className="flex-1 bg-white border-2 border-gray-500 shadow-lg overflow-hidden flex flex-col">
                    <div className="bg-blue-600 text-white p-2 px-6 flex justify-between items-center italic font-black uppercase text-[10px]">
                        Historical Calculations
                    </div>
                    <div className="flex-1 overflow-auto">
                        <table className="w-full text-left border-collapse">
                            <thead className="bg-gray-100 font-black italic text-gray-500 uppercase text-[9px] border-b">
                                <tr>
                                    <th className="p-4">CALC ID</th>
                                    <th className="p-4">PAY PERIOD</th>
                                    <th className="p-4">TOTAL GROSS</th>
                                    <th className="p-4">ST. DEDUCTIONS</th>
                                    <th className="p-4">STATUS</th>
                                    <th className="p-4 text-right">ACTION</th>
                                </tr>
                            </thead>
                            <tbody>
                                {calculations.map((c, i) => (
                                    <tr key={i} className="border-b border-gray-100 hover:bg-blue-50 transition-colors">
                                        <td className="p-4 font-black">#{c.id}</td>
                                        <td className="p-4 font-bold">{c.period}</td>
                                        <td className="p-4 font-black italic text-blue-900">${c.totalGross}</td>
                                        <td className="p-4 font-black italic text-red-600">${c.totalTax}</td>
                                        <td className="p-4">
                                            <span className={`px-3 py-1 rounded-sm font-black italic text-[8px] uppercase ${c.status === 'Verified' ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-500'
                                                }`}>
                                                {c.status}
                                            </span>
                                        </td>
                                        <td className="p-4 text-right">
                                            <button className="text-blue-600 font-black italic uppercase text-[9px] hover:underline">Re-Print Details</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <div className="bg-white border-t border-gray-400 p-2 px-8 flex justify-end no-print">
                <button
                    onClick={() => navigate(-1)}
                    className="bg-red-500 text-white px-10 py-2 font-black italic hover:bg-red-600 shadow-xl active:translate-y-1 transition-all"
                >
                    CLOSE REGISTER
                </button>
            </div>
        </div>
    );
};

export default CalculationRegister;
