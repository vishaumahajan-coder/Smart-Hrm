import React, { useState } from 'react';
import {
    FileText, Download, ShieldCheck, Calendar,
    ChevronRight, Lock
} from 'lucide-react';

const MyPayslips = () => {
    // Mock Data for Employee View
    const [history] = useState([
        { id: 101, period: 'January 2026', date: '25 Jan 2026', net: '$45,000.00', status: 'Available' },
        { id: 102, period: 'December 2025', date: '20 Dec 2025', net: '$45,000.00', status: 'Available' },
        { id: 103, period: 'November 2025', date: '24 Nov 2025', net: '$42,500.00', status: 'Archived' },
    ]);

    return (
        <div className="flex flex-col h-full w-full bg-[#F3F4F6] font-sans p-4 md:p-8 overflow-y-auto">
            {/* Header */}
            <div className="flex flex-col gap-2 mb-8">
                <h1 className="text-2xl font-black text-gray-800 uppercase italic tracking-tighter flex items-center gap-3">
                    <FileText className="text-blue-600" /> My Payslip History
                </h1>
                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest pl-1">Confidential Financial Records</p>
            </div>

            {/* Security Notice */}
            <div className="bg-blue-900 text-white p-4 rounded-xl shadow-lg mb-8 flex items-center gap-4 border-l-8 border-blue-400">
                <div className="p-3 bg-blue-800 rounded-full">
                    <Lock size={24} className="text-blue-200" />
                </div>
                <div>
                    <h3 className="text-sm font-black uppercase tracking-wide">Secure Document Access</h3>
                    <p className="text-xs text-blue-100 mt-1">
                        Your payslips are encrypted. You will need your <span className="font-bold text-white underline">TRN Number</span> to open downloaded files.
                    </p>
                </div>
            </div>

            {/* Payslip List */}
            <div className="grid gap-4">
                {history.map((slip) => (
                    <div key={slip.id} className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all flex items-center justify-between group">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                                <Calendar size={20} />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-sm font-black text-gray-800 uppercase">{slip.period}</span>
                                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Disbursed: {slip.date}</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-6">
                            <div className="hidden md:flex flex-col items-end">
                                <span className="text-xs font-bold text-gray-400 uppercase">Net Pay</span>
                                <span className="text-sm font-black text-gray-700">{slip.net}</span>
                            </div>
                            <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-black uppercase transition-all shadow-blue-200 shadow-lg active:scale-95">
                                <Download size={14} /> Download
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Footer / Help */}
            <div className="mt-8 flex justify-center">
                <p className="text-[10px] font-bold text-gray-400 uppercase italic">
                    Need help accessing your documents? Contact HR at extension 404.
                </p>
            </div>
        </div>
    );
};

export default MyPayslips;
