import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Printer, FileText, CheckCircle, Save, LogOut, Search } from 'lucide-react';

const ChequePrinting = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col h-full w-full bg-[#EBE9D8] font-sans">
            {/* Header */}
            <div className="bg-[#D4D0C8] border-b border-gray-400 px-4 py-2 flex items-center justify-between shadow-sm">
                <div className="flex items-center gap-2">
                    <Printer className="text-gray-700" size={18} />
                    <span className="font-bold text-gray-700 text-sm uppercase italic">Cheque Printing Facility</span>
                </div>
            </div>

            <div className="flex-1 p-4 md:p-8 overflow-auto">
                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">

                    {/* Left: Cheque Config */}
                    <div className="md:col-span-1 bg-white border border-gray-400 p-4 flex flex-col gap-4 shadow-sm">
                        <h3 className="text-sm font-black text-blue-900 italic border-b pb-2 uppercase">Print Settings</h3>

                        <div className="flex flex-col gap-3">
                            <div className="flex flex-col gap-1">
                                <label className="text-[10px] font-black text-gray-500 uppercase">Bank Account</label>
                                <select className="p-2 border border-gray-300 bg-gray-50 text-[11px] font-bold">
                                    <option>BNS - MAIN OPERATING (****8932)</option>
                                    <option>NCB - PAYROLL ACCT (****1122)</option>
                                </select>
                            </div>
                            <div className="flex flex-col gap-1">
                                <label className="text-[10px] font-black text-gray-500 uppercase">Starting Cheque #</label>
                                <input type="number" defaultValue="104012" className="p-2 border border-gray-300 bg-gray-50 text-[11px] font-bold" />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label className="text-[10px] font-black text-gray-500 uppercase">Template</label>
                                <select className="p-2 border border-gray-300 bg-gray-50 text-[11px] font-bold">
                                    <option>Standard 3-per-page (Voucher)</option>
                                    <option>Single Cheque (Personal)</option>
                                    <option>Continuous Form</option>
                                </select>
                            </div>
                        </div>

                        <div className="mt-auto pt-4 border-t border-gray-100 italic text-[10px] text-gray-400 font-bold">
                            Printer: HP LaserJet Pro (Network)
                        </div>
                    </div>

                    {/* Right: Preview & Queue */}
                    <div className="md:col-span-2 flex flex-col gap-4">
                        {/* Visual Preview */}
                        <div className="bg-yellow-50 border-2 border-dashed border-yellow-300 p-8 flex items-center justify-center relative min-h-[150px]">
                            <div className="absolute top-2 left-4 text-[8px] font-mono text-gray-400">SAMPLE CHEQUE PREVIEW</div>
                            <div className="w-full max-w-md bg-white border border-gray-200 p-6 shadow-sm flex flex-col gap-4 font-serif">
                                <div className="flex justify-between">
                                    <span className="text-[10px] font-bold uppercase">COMPANY NAME LTD</span>
                                    <span className="text-[10px] font-bold">NO. 104012</span>
                                </div>
                                <div className="flex justify-between items-end border-b border-gray-200 pb-1">
                                    <span className="text-[8px] italic">Pay to the order of:</span>
                                    <span className="text-xs font-bold">JOHN DOE</span>
                                    <span className="text-xs font-bold border-2 border-black px-2">$ 45,000.00</span>
                                </div>
                                <div className="text-[14px] font-black italic tracking-wider mt-4 font-mono">
                                    ⑆000104012⑆ ⑈0090029⑈ ⑉003495832⑉
                                </div>
                            </div>
                        </div>

                        {/* Print Queue */}
                        <div className="bg-white border border-gray-400 flex flex-col flex-1 shadow-sm">
                            <div className="bg-blue-600 text-white p-2 text-[10px] font-black uppercase flex justify-between">
                                <span>CHEQUE PRINT QUEUE (5 ITEMS)</span>
                                <Search size={14} className="cursor-pointer" />
                            </div>
                            <div className="flex-1 max-h-48 overflow-y-auto">
                                <table className="w-full text-[10px]">
                                    <thead className="bg-gray-100 border-b border-gray-200">
                                        <tr className="text-left font-black text-gray-400 uppercase">
                                            <th className="p-2">Name</th>
                                            <th className="p-2">TRN</th>
                                            <th className="p-2 text-right">Amount</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {[1, 2, 3, 4, 5].map(i => (
                                            <tr key={i} className="border-b border-gray-50 font-bold">
                                                <td className="p-2">Employee Name {i}</td>
                                                <td className="p-2 font-mono">123-456-78{i}</td>
                                                <td className="p-2 text-right">$45,000.00</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Action Bar */}
            <div className="bg-[#D4D0C8] border-t border-gray-400 p-2 flex justify-end gap-2">
                <button
                    onClick={() => navigate(-1)}
                    className="btn-classic px-6 py-1.5 flex items-center gap-2 text-xs font-black text-red-700"
                >
                    <LogOut size={16} /> EXIT FACILITY
                </button>
                <button className="btn-classic px-10 py-1.5 bg-green-700 text-white border-green-800 flex items-center gap-2 text-xs font-black">
                    <Printer size={16} /> PRINT ALL QUEUED
                </button>
            </div>
        </div>
    );
};

export default ChequePrinting;
