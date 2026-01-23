import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DollarSign, Save, LogOut, Search, User, CreditCard, ChevronRight } from 'lucide-react';

const AdvancePayment = () => {
    const navigate = useNavigate();
    const [selectedEmployee, setSelectedEmployee] = useState(null);

    const accounts = [
        { id: 'EMP101', name: 'John Doe', limit: '25,000', balance: '0.00' },
        { id: 'EMP102', name: 'Jane Smith', limit: '30,000', balance: '5,000.00' },
        { id: 'EMP204', name: 'Mike Ross', limit: '15,000', balance: '0.00' },
    ];

    return (
        <div className="flex flex-col h-full w-full bg-[#EBE9D8] font-sans text-xs">
            {/* Header */}
            <div className="bg-[#0055E5] text-white h-8 flex items-center justify-between px-3 text-[11px] font-black italic tracking-widest uppercase">
                <div className="flex items-center gap-2">
                    <DollarSign size={16} />
                    <span>Advance Payment & Loan Disbursement Module</span>
                </div>
                <div className="flex items-center gap-4">
                    <span>Station: PAY-01</span>
                    <span>Admin: SuperUser</span>
                </div>
            </div>

            <div className="flex-1 p-6 flex gap-6 overflow-hidden">
                {/* Left - Employee Selector */}
                <div className="w-80 flex flex-col gap-4">
                    <div className="bg-white border-2 border-gray-500 p-4 shadow-[4px_4px_0_rgba(0,0,0,0.1)]">
                        <div className="flex items-center gap-2 bg-gray-100 p-2 border border-gray-400 mb-4">
                            <Search size={16} className="text-gray-400" />
                            <input
                                type="text"
                                placeholder="FIND EMPLOYEE..."
                                className="bg-transparent outline-none font-bold placeholder:italic w-full italic"
                            />
                        </div>

                        <div className="space-y-1 overflow-auto max-h-[400px]">
                            {accounts.map(acc => (
                                <button
                                    key={acc.id}
                                    onClick={() => setSelectedEmployee(acc)}
                                    className={`w-full text-left p-3 border font-black italic flex items-center justify-between group transition-all ${selectedEmployee?.id === acc.id
                                            ? 'bg-blue-600 text-white border-blue-700 shadow-inner'
                                            : 'bg-gray-50 text-gray-700 border-gray-300 hover:bg-blue-50'
                                        }`}
                                >
                                    <div className="flex flex-col">
                                        <span className="text-[10px] opacity-70">{acc.id}</span>
                                        <span>{acc.name}</span>
                                    </div>
                                    <ChevronRight size={16} className={selectedEmployee?.id === acc.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'} />
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="bg-blue-900 text-white p-4 italic font-black text-center shadow-lg uppercase tracking-widest text-[10px]">
                        Corporate Trust Management
                    </div>
                </div>

                {/* Right - Form */}
                <div className="flex-1 flex flex-col gap-6">
                    <div className="bg-white border-2 border-gray-500 p-8 shadow-[8px_8px_0_rgba(0,0,0,0.1)] flex-1 overflow-auto">
                        {!selectedEmployee ? (
                            <div className="h-full flex flex-col items-center justify-center text-gray-400 italic font-black uppercase tracking-widest opacity-30">
                                <User size={80} className="mb-4" strokeWidth={1} />
                                Please select an employee to begin
                            </div>
                        ) : (
                            <div className="animate-in fade-in slide-in-from-right-4 duration-300 translate-none">
                                <div className="flex items-center gap-4 mb-8 border-b-2 border-gray-100 pb-6">
                                    <div className="w-20 h-20 bg-blue-100 border-4 border-white shadow-md rounded-full flex items-center justify-center text-blue-600">
                                        <User size={40} />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-black text-blue-900 italic uppercase leading-none">{selectedEmployee.name}</h2>
                                        <p className="text-gray-400 font-bold uppercase tracking-widest text-xs mt-1">Acct #: {selectedEmployee.id}</p>
                                    </div>
                                    <div className="ml-auto text-right">
                                        <p className="text-[10px] font-black text-gray-400 uppercase">Available Advance Limit</p>
                                        <p className="text-3xl font-black text-green-600 italic leading-none">${selectedEmployee.limit}</p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-12">
                                    <div className="space-y-6">
                                        <div className="space-y-2">
                                            <label className="font-black text-blue-800 uppercase italic text-[10px]">Disbursement Amount</label>
                                            <div className="relative">
                                                <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-600" size={20} />
                                                <input
                                                    type="number"
                                                    placeholder="0.00"
                                                    className="w-full pl-10 pr-4 py-4 border-2 border-blue-600 bg-blue-50/30 text-2xl font-black italic text-blue-900 outline-none focus:bg-blue-50 transition-colors"
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="font-black text-gray-600 uppercase italic text-[10px]">Repayment Terms (Months)</label>
                                            <select className="w-full p-4 border-2 border-gray-300 font-black italic text-gray-700 outline-none focus:border-blue-600">
                                                <option>1 Month (Full Deduction)</option>
                                                <option>2 Months (Split 50/50)</option>
                                                <option>3 Months (Installments)</option>
                                                <option>6 Months (Long Term Loan)</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="space-y-6">
                                        <div className="bg-gray-100 p-6 border-2 border-dashed border-gray-400">
                                            <h3 className="font-black text-gray-500 uppercase italic text-[10px] mb-4 flex items-center gap-2">
                                                <CreditCard size={14} /> Payment Details
                                            </h3>
                                            <div className="space-y-3">
                                                <div className="flex justify-between items-center bg-white p-3 border border-gray-300">
                                                    <span className="font-bold text-gray-600">Pending Advance</span>
                                                    <span className="font-black text-red-600 italic">${selectedEmployee.balance}</span>
                                                </div>
                                                <div className="flex justify-between items-center bg-white p-3 border border-gray-300">
                                                    <span className="font-bold text-gray-600">Admin Charge (1%)</span>
                                                    <span className="font-black text-blue-600 italic">$0.00</span>
                                                </div>
                                                <div className="pt-2 border-t border-gray-300 flex justify-between items-center">
                                                    <span className="font-black text-gray-900 uppercase">Total Disbursement</span>
                                                    <span className="text-xl font-black text-blue-900 italic">$0.00</span>
                                                </div>
                                            </div>
                                        </div>

                                        <button className="w-full bg-blue-600 text-white p-4 font-black italic uppercase tracking-widest hover:bg-blue-700 transition-all shadow-xl flex items-center justify-center gap-3">
                                            <DollarSign size={20} /> DISBURSE FUNDS
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="flex justify-end gap-3 no-print">
                        <button className="flex items-center gap-2 px-6 py-3 bg-[#E0DCCF] border-2 border-white border-b-gray-600 border-r-gray-600 font-black italic hover:bg-gray-200 shadow-md">
                            <Save size={18} className="text-blue-600" /> SAVE RECORD
                        </button>
                        <button
                            onClick={() => navigate(-1)}
                            className="flex items-center gap-2 px-6 py-3 bg-[#E0DCCF] border-2 border-white border-b-gray-600 border-r-gray-600 font-black italic hover:bg-gray-200 shadow-md"
                        >
                            <LogOut size={18} className="text-red-600" /> EXIT MODULE
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdvancePayment;
