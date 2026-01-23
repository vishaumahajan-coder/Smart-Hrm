import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Building, Send, FileText, CheckCircle, Download, Landmark, Save, LogOut } from 'lucide-react';

const BankIntegrations = ({ bank = 'BNS' }) => {
    const navigate = useNavigate();

    const bankConfig = {
        'BNS': { name: 'Scotiabank (BNS)', color: 'text-red-700', bg: 'bg-red-50' },
        'NCB': { name: 'National Continental Bank (NCB)', color: 'text-yellow-700', bg: 'bg-yellow-50' },
        'JN': { name: 'JN Bank', color: 'text-blue-800', bg: 'bg-blue-50' },
        'JMMB': { name: 'JMMB Bank', color: 'text-purple-700', bg: 'bg-purple-50' }
    };

    const currentBank = bankConfig[bank] || bankConfig['BNS'];

    return (
        <div className="flex flex-col h-full w-full bg-[#EBE9D8] font-sans">
            {/* Header */}
            <div className="bg-[#D4D0C8] border-b border-gray-400 px-4 py-2 flex items-center justify-between shadow-sm">
                <div className="flex items-center gap-2">
                    <Landmark className={currentBank.color} size={18} />
                    <span className="font-bold text-gray-700 text-sm uppercase italic">Electronic Salary Transfer - {currentBank.name}</span>
                </div>
                <div className="bg-green-600 text-white text-[10px] font-black px-2 py-0.5 rounded-full animate-pulse">
                    CONNECTION ACTIVE
                </div>
            </div>

            <div className="flex-1 p-4 md:p-8 overflow-auto">
                <div className="max-w-5xl mx-auto flex flex-col gap-6">
                    {/* Main Transfer UI */}
                    <div className="bg-white border-b-4 border-r-4 border-gray-400 p-6 md:p-8">
                        <div className="flex flex-col md:flex-row justify-between mb-8 gap-4 border-b border-gray-100 pb-6">
                            <div className="flex gap-4">
                                <div className={`${currentBank.bg} p-4 rounded-lg`}>
                                    <Building className={currentBank.color} size={32} />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-black text-gray-800 italic">{currentBank.name} Portal</h2>
                                    <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">Electronic Beneficiary Transfer Module</p>
                                </div>
                            </div>
                            <div className="flex flex-col items-end">
                                <span className="text-xs font-bold text-gray-400 uppercase tracking-tighter">Transfer Balance</span>
                                <span className="text-3xl font-black text-gray-800 italic">$2,450,000.00 JMD</span>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Left: Transfer Config */}
                            <div className="md:col-span-1 border-r border-gray-100 pr-8">
                                <h3 className="text-sm font-black text-blue-900 italic mb-4 uppercase">Batch Settings</h3>
                                <div className="flex flex-col gap-4">
                                    <div className="flex flex-col gap-1">
                                        <label className="text-[10px] font-black text-gray-500 uppercase">Batch Reference</label>
                                        <input type="text" value={`SALARY-JAN-2024-${bank}`} className="p-2 border border-gray-300 bg-gray-50 text-xs font-bold font-mono" />
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <label className="text-[10px] font-black text-gray-500 uppercase">Effective Date</label>
                                        <input type="date" className="p-2 border border-gray-300 bg-gray-50 text-xs font-bold" />
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <label className="text-[10px] font-black text-gray-500 uppercase">Format</label>
                                        <select className="p-2 border border-gray-300 bg-gray-50 text-xs font-bold">
                                            <option>BNS Beneficiary Listing (TXT)</option>
                                            <option>ISO 20022 XML</option>
                                            <option>Fixed Length ACH</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            {/* Right: Beneficiary List */}
                            <div className="md:col-span-2">
                                <h3 className="text-sm font-black text-blue-900 italic mb-4 uppercase">Selected Beneficiaries (Batch Summary)</h3>
                                <div className="border border-gray-200 shadow-inner max-h-64 overflow-y-auto">
                                    <table className="w-full text-[11px]">
                                        <thead className="bg-gray-50 sticky top-0 border-b border-gray-200">
                                            <tr className="text-left font-black text-gray-500 uppercase">
                                                <th className="p-2">Employee</th>
                                                <th className="p-2">Account #</th>
                                                <th className="p-2">Transit</th>
                                                <th className="p-2 text-right">Amount</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
                                                <tr key={i} className="border-b border-gray-50 hover:bg-blue-50">
                                                    <td className="p-2 font-bold">Employee Name {i}</td>
                                                    <td className="p-2 font-mono">00349583{i}</td>
                                                    <td className="p-2">9002{i}</td>
                                                    <td className="p-2 text-right font-black">$ 45,000.00</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                        <tfoot className="bg-blue-900 text-white sticky bottom-0">
                                            <tr className="font-black italic">
                                                <td colSpan="3" className="p-2 text-right uppercase">Total Batch Value</td>
                                                <td className="p-2 text-right">$ 360,000.00</td>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Security Info */}
                    <div className="bg-blue-900 text-white p-4 flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 border border-white/20 flex items-center justify-center rounded">
                                <CheckCircle size={20} className="text-green-400" />
                            </div>
                            <div>
                                <div className="text-[10px] font-black uppercase text-blue-300">Encryption Active</div>
                                <p className="text-xs font-bold italic">Files are formatted using Bank of Jamaica Standard ACH-612 Protocol.</p>
                            </div>
                        </div>
                        <button className="bg-white text-blue-900 px-6 py-2 text-xs font-black uppercase italic hover:bg-blue-50 transition-colors flex items-center gap-2">
                            <Send size={16} /> Authorize & Upload Batch
                        </button>
                    </div>
                </div>
            </div>

            {/* Bottom Action Bar */}
            <div className="bg-[#D4D0C8] border-t border-gray-400 p-2 flex justify-end gap-2">
                <button
                    onClick={() => navigate(-1)}
                    className="btn-classic px-6 py-1.5 flex items-center gap-2 text-xs font-black text-red-700"
                >
                    <LogOut size={16} /> CLOSE MODULE
                </button>
                <button className="btn-classic px-8 py-1.5 bg-blue-600 text-white border-blue-700 flex items-center gap-2 text-xs font-black">
                    <Download size={16} /> DOWNLOAD BANK FILE
                </button>
            </div>
        </div>
    );
};

export default BankIntegrations;
