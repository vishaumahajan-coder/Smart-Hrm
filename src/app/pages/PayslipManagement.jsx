import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    FileText, Search, Send, Download, Eye,
    CheckCircle2, AlertTriangle, ShieldCheck
} from 'lucide-react';

const PayslipManagement = () => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedPeriod, setSelectedPeriod] = useState('January 2026');

    // Mock Data
    const [payslips, setPayslips] = useState([
        { id: 'EMP001', name: 'John Doe', period: 'January 2026', trn: '123-456-789', status: 'Generated', sent: false },
        { id: 'EMP002', name: 'Jane Smith', period: 'January 2026', trn: '987-654-321', status: 'Generated', sent: true },
        { id: 'EMP003', name: 'Robert Brown', period: 'January 2026', trn: '456-789-123', status: 'Pending', sent: false },
    ]);

    const handleSendEmail = (id) => {
        setPayslips(prev => prev.map(p => p.id === id ? { ...p, sent: true } : p));
    };

    return (
        <div className="flex flex-col h-full w-full bg-[#EBE9D8] font-sans">
            {/* Header */}
            <div className="bg-[#D4D0C8] border-b border-gray-400 px-4 py-2 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <FileText className="text-blue-700" size={18} />
                    <span className="font-black text-gray-700 text-sm uppercase italic">Payslip Management Center</span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold text-gray-500 uppercase">Period:</span>
                    <select
                        value={selectedPeriod}
                        onChange={(e) => setSelectedPeriod(e.target.value)}
                        className="text-xs font-bold p-1 border border-gray-400"
                    >
                        <option>January 2026</option>
                        <option>December 2025</option>
                    </select>
                </div>
            </div>

            <div className="flex-1 p-4 flex flex-col gap-4 overflow-hidden">
                {/* Security Note */}
                <div className="bg-yellow-50 border border-yellow-200 p-3 flex items-center gap-3 rounded shadow-sm">
                    <ShieldCheck className="text-orange-500" size={24} />
                    <div>
                        <h4 className="text-xs font-black text-orange-800 uppercase">Security Protocol Active</h4>
                        <p className="text-[10px] font-bold text-gray-600">Generated payslips are automatically password protected. The default password is the employee's TRN unless overridden.</p>
                    </div>
                </div>

                {/* Actions Bar */}
                <div className="flex justify-between items-center bg-white p-2 border border-gray-400 shadow-sm">
                    <div className="flex items-center gap-2 w-1/3">
                        <Search size={16} className="text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search Employee..."
                            className="text-xs font-bold w-full p-1 border-b border-gray-200 outline-none"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <button className="btn-classic px-4 py-1.5 flex items-center gap-2 bg-[#E0DCCF] hover:bg-gray-200 text-xs font-black uppercase text-blue-900 shadow-sm border border-gray-400">
                        <CheckCircle2 size={14} /> Generate for Period
                    </button>
                </div>

                {/* Table */}
                <div className="flex-1 bg-white border border-gray-400 shadow-inner overflow-auto">
                    <table className="w-full text-left border-collapse">
                        <thead className="bg-[#D4D0C8] sticky top-0 border-b border-gray-400 text-[10px] font-black text-gray-600 uppercase">
                            <tr>
                                <th className="p-2 border-r border-gray-300">Employee</th>
                                <th className="p-2 border-r border-gray-300">Period</th>
                                <th className="p-2 border-r border-gray-300">Security (TRN)</th>
                                <th className="p-2 border-r border-gray-300">Status</th>
                                <th className="p-2 text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="text-[11px] font-bold text-gray-700">
                            {payslips.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase())).map(row => (
                                <tr key={row.id} className="border-b border-gray-100 hover:bg-blue-50">
                                    <td className="p-2 border-r border-gray-100">
                                        <div className="flex flex-col">
                                            <span className="uppercase">{row.name}</span>
                                            <span className="text-[9px] text-gray-400">{row.id}</span>
                                        </div>
                                    </td>
                                    <td className="p-2 border-r border-gray-100">{row.period}</td>
                                    <td className="p-2 border-r border-gray-100 font-mono text-gray-500">
                                        TRN-{row.trn.slice(-4)}
                                    </td>
                                    <td className="p-2 border-r border-gray-100">
                                        <span className={`px-2 py-0.5 rounded text-[9px] uppercase ${row.status === 'Generated' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'}`}>
                                            {row.status}
                                        </span>
                                    </td>
                                    <td className="p-2 flex items-center justify-center gap-2">
                                        <button className="text-gray-400 hover:text-blue-600" title="View PDF">
                                            <Eye size={16} />
                                        </button>
                                        <button
                                            onClick={() => handleSendEmail(row.id)}
                                            className={`${row.sent ? 'text-green-600' : 'text-gray-400 hover:text-blue-600'}`}
                                            title="Send Email"
                                        >
                                            <Send size={16} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default PayslipManagement;
