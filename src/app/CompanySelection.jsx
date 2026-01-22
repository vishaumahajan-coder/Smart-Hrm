import React, { useState } from 'react';
import { Check, PlusSquare, LogOut } from 'lucide-react';

const CompanySelection = ({ onSelect, onExit }) => {
    const companies = [
        { id: 1, name: 'ANGL Account Outsourcing Group Jamaica Limited', frequency: 'Weekly' },
        { id: 2, name: 'ANGL Account Outsourcing Group Jamaica Limited-MGMT', frequency: 'Weekly' },
    ];

    const [selectedId, setSelectedId] = useState(companies[0].id);

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center font-sans tracking-tight">
            <div className="w-[600px] bg-[#EBE9D8] border-2 border-[#0055E5] shadow-2xl flex flex-col">
                {/* Title Bar */}
                <div className="bg-[#0055E5] text-white px-2 py-1 flex justify-between items-center text-sm font-bold">
                    <div className="flex items-center gap-1">
                        <span className="w-4 h-4 bg-white/20 rounded-sm italic flex items-center justify-center text-[10px]">C</span>
                        Company Selection
                    </div>
                    <button
                        onClick={onExit}
                        className="bg-[#E81123] hover:bg-red-600 text-white w-5 h-5 flex items-center justify-center text-xs leading-none"
                    >
                        ✕
                    </button>
                </div>

                {/* Content Wrapper */}
                <div className="p-4 flex flex-col gap-4">
                    {/* Table Area */}
                    <div className="bg-white border-2 border-gray-400 h-[300px] overflow-auto shadow-inner">
                        <table className="w-full border-collapse text-xs">
                            <thead className="sticky top-0 bg-[#D4D0C8] border-b border-gray-400">
                                <tr>
                                    <th className="text-left px-2 py-1 border-r border-gray-100 shadow-[inset_-1px_0_0_#808080]">Payroll Description</th>
                                    <th className="text-left px-2 py-1 border-r border-gray-100 shadow-[inset_-1px_0_0_#808080]">Frequency</th>
                                </tr>
                            </thead>
                            <tbody>
                                {companies.map((company) => (
                                    <tr
                                        key={company.id}
                                        onClick={() => setSelectedId(company.id)}
                                        className={`cursor-default ${selectedId === company.id
                                                ? 'bg-[#000080] text-white'
                                                : 'hover:bg-blue-50'
                                            }`}
                                    >
                                        <td className="px-2 py-0.5 border-r border-gray-100 uppercase font-medium">{company.name}</td>
                                        <td className="px-2 py-0.5 uppercase font-medium">{company.frequency}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Bottom Controls */}
                    <div className="flex justify-between items-end">
                        <div className="flex gap-2">
                            <button
                                onClick={() => onSelect(companies.find(c => c.id === selectedId))}
                                className="bg-white border-b-2 border-r-2 border-gray-600 hover:bg-gray-100 p-2 flex flex-col items-center justify-center min-w-[70px] min-h-[70px] transition-all active:translate-x-0.5 active:translate-y-0.5 active:border-0 shadow-sm"
                            >
                                <Check size={28} className="text-green-600 stroke-[3px]" />
                                <span className="text-[10px] font-bold mt-1 uppercase tracking-tighter">Select</span>
                            </button>

                            <button
                                className="bg-white border-b-2 border-r-2 border-gray-600 hover:bg-gray-100 p-2 flex flex-col items-center justify-center min-w-[70px] min-h-[70px] transition-all active:translate-x-0.5 active:translate-y-0.5 active:border-0 shadow-sm"
                            >
                                <PlusSquare size={28} className="text-gray-500" />
                                <span className="text-[10px] font-bold mt-1 uppercase tracking-tighter">Add</span>
                            </button>
                        </div>

                        <button
                            onClick={onExit}
                            className="bg-white border-b-2 border-r-2 border-gray-600 hover:bg-gray-100 p-2 flex flex-col items-center justify-center min-w-[70px] min-h-[70px] transition-all active:translate-x-0.5 active:translate-y-0.5 active:border-0 shadow-sm"
                        >
                            <LogOut size={28} className="text-blue-600" />
                            <span className="text-[10px] font-bold mt-1 uppercase tracking-tighter">Exit</span>
                        </button>
                    </div>
                </div>

                {/* Status Bar */}
                <div className="bg-[#D4D0C8] border-t border-white px-2 py-0.5 text-[10px] flex justify-between text-gray-700">
                    <span>Record 1/1</span>
                    <span>Exclusive</span>
                </div>
            </div>
        </div>
    );
};

export default CompanySelection;
