import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Mail, ShieldLock, Send, Search, CheckCircle2,
    Clock, AlertTriangle, FileText, Download, LogOut,
    Eye, Trash2
} from 'lucide-react';

const EmailPayslips = () => {
    const navigate = useNavigate();
    const [isSending, setIsSending] = useState(false);
    const [progress, setProgress] = useState(0);
    const [statusMessage, setStatusMessage] = useState('System Idle');

    const [disbursements, setDisbursements] = useState([
        { id: 'EMP001', name: 'John Doe', email: 'john.doe@company.com', trn: '123-456-789', status: 'Ready' },
        { id: 'EMP002', name: 'Jane Smith', email: 'jane.smith@company.com', trn: '987-654-321', status: 'Ready' },
        { id: 'EMP003', name: 'Robert Brown', email: 'r.brown@mail.com', trn: '456-789-123', status: 'Ready' },
        { id: 'EMP004', name: 'Emily Davis', email: 'emily.d@web.com', trn: '321-654-987', status: 'Pending' },
    ]);

    const handleBatchEmail = () => {
        setIsSending(true);
        setProgress(0);
        setStatusMessage('Initializing Secure SMTP...');

        const steps = disbursements.length;
        let current = 0;

        const interval = setInterval(() => {
            if (current < steps) {
                const emp = disbursements[current];
                setStatusMessage(`Encrypting PDF for ${emp.id} (TRN: ${emp.trn})...`);

                setDisbursements(prev => prev.map((d, i) =>
                    i === current ? { ...d, status: 'Sent' } : d
                ));

                current++;
                setProgress((current / steps) * 100);
            } else {
                clearInterval(interval);
                setIsSending(false);
                setStatusMessage('All Payslips Dispatched Successfully.');
            }
        }, 1200);
    };

    return (
        <div className="flex flex-col h-full w-full bg-[#EBE9D8] font-sans">
            {/* Header */}
            <div className="bg-[#D4D0C8] border-b border-gray-400 px-4 py-2 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Mail className="text-blue-700" size={18} />
                    <span className="font-black text-gray-700 text-sm uppercase italic text-blue-900 border-l-4 border-blue-900 pl-2">Payslip Dispatch Module (Encrypted)</span>
                </div>
            </div>

            <div className="flex-1 p-4 md:p-8 overflow-hidden flex flex-col gap-6">

                {/* Security Advisory */}
                <div className="bg-blue-900 text-white p-4 rounded shadow-lg flex items-center justify-between border-l-8 border-blue-400">
                    <div className="flex items-center gap-4">
                        <ShieldLock size={32} className="text-blue-300" />
                        <div>
                            <h3 className="text-sm font-black uppercase italic tracking-widest">Enhanced Identity Protection</h3>
                            <p className="text-[10px] font-bold text-blue-200">All PDF attachments are AES-256 encrypted using the employee's TRN as the decryption key.</p>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <div className="px-3 py-1 bg-blue-800 border border-blue-700 rounded text-[9px] font-black uppercase">Protocol: Secure SMTP</div>
                        <div className="px-3 py-1 bg-green-600 rounded text-[9px] font-black uppercase">Status: Online</div>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-6 flex-1 overflow-hidden">

                    {/* Left: Queue List */}
                    <div className="flex-1 bg-white border border-gray-400 shadow-inner overflow-hidden flex flex-col">
                        <div className="bg-gray-100 p-2 border-b border-gray-300 flex justify-between items-center px-4">
                            <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Email Submission Queue</span>
                            <span className="text-[10px] font-black text-blue-900">{disbursements.length} Records Loaded</span>
                        </div>

                        <div className="flex-1 overflow-auto">
                            <table className="w-full text-left border-collapse">
                                <thead className="bg-gray-50 sticky top-0 border-b border-gray-200 text-[10px] font-black text-gray-400 uppercase italic">
                                    <tr>
                                        <th className="p-3 border-r border-gray-200">ID</th>
                                        <th className="p-3 border-r border-gray-200">Recipient Name</th>
                                        <th className="p-3 border-r border-gray-200">Email Address</th>
                                        <th className="p-3 border-r border-gray-200">Password Hook</th>
                                        <th className="p-3">Status</th>
                                        <th className="p-3">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="text-[11px] font-bold text-gray-600">
                                    {disbursements.map(emp => (
                                        <tr key={emp.id} className="border-b border-gray-50 hover:bg-blue-50/50">
                                            <td className="p-3 border-r border-gray-200 font-mono tracking-tighter">{emp.id}</td>
                                            <td className="p-3 border-r border-gray-200 uppercase">{emp.name}</td>
                                            <td className="p-3 border-r border-gray-200 text-blue-700 italic underline">{emp.email}</td>
                                            <td className="p-3 border-r border-gray-200">
                                                <div className="flex items-center gap-2">
                                                    <ShieldLock size={12} className="text-gray-400" />
                                                    <span className="text-gray-400 text-[10px]">TRN: XXX-XX-{emp.trn.slice(-3)}</span>
                                                </div>
                                            </td>
                                            <td className="p-3">
                                                <span className={`px-2 py-0.5 rounded-full text-[9px] font-black uppercase ${emp.status === 'Sent' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'}`}>
                                                    {emp.status}
                                                </span>
                                            </td>
                                            <td className="p-3">
                                                <div className="flex gap-2 text-gray-400">
                                                    <button className="hover:text-blue-600 transition-colors"><Eye size={14} /></button>
                                                    <button className="hover:text-red-600 transition-colors"><Trash2 size={14} /></button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Right: Dispatch Controls */}
                    <div className="w-full lg:w-80 flex flex-col gap-4">
                        <div className="bg-white border border-gray-400 p-6 flex flex-col gap-6 shadow-sm">
                            <h3 className="text-xs font-black text-blue-900 uppercase italic border-b border-gray-200 pb-2">Dispatch Control</h3>

                            <div className="flex flex-col gap-2">
                                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Select Cycle</label>
                                <select className="p-2 border border-gray-300 bg-gray-50 font-black text-gray-700 text-xs">
                                    <option>January 2026 - Monthly</option>
                                    <option>December 2025 - Monthly</option>
                                </select>
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Dispatch Preference</label>
                                <div className="space-y-2">
                                    <label className="flex items-center gap-2 text-[10px] font-bold text-gray-600">
                                        <input type="checkbox" defaultChecked /> Attach Employee Labels
                                    </label>
                                    <label className="flex items-center gap-2 text-[10px] font-bold text-gray-600">
                                        <input type="checkbox" defaultChecked /> CC Human Resources
                                    </label>
                                </div>
                            </div>

                            <button
                                disabled={isSending}
                                onClick={handleBatchEmail}
                                className={`w-full py-4 rounded font-black text-xs uppercase tracking-widest transition-all shadow-lg flex items-center justify-center gap-3 ${isSending ? 'bg-gray-200 text-gray-400' : 'bg-blue-600 hover:bg-blue-700 text-white active:scale-95'}`}
                            >
                                <Send size={18} /> {isSending ? 'Dispatched...' : 'Trigger Batch Send'}
                            </button>
                        </div>

                        {/* Visual Progress */}
                        {isSending && (
                            <div className="bg-white border border-gray-400 p-4 flex flex-col gap-2">
                                <div className="flex justify-between items-center text-[10px] font-black text-blue-900 uppercase">
                                    <span>Dispatch Progress</span>
                                    <span>{Math.round(progress)}%</span>
                                </div>
                                <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden border border-gray-200">
                                    <div className="h-full bg-blue-600 transition-all duration-300" style={{ width: `${progress}%` }}></div>
                                </div>
                                <p className="text-[9px] font-bold text-gray-400 italic mt-1">{statusMessage}</p>
                            </div>
                        )}
                    </div>

                </div>
            </div>

            {/* Global Actions */}
            <div className="bg-[#D4D0C8] border-t border-gray-400 p-2 flex justify-end gap-2 px-8 shadow-inner">
                <button
                    onClick={() => navigate('/')}
                    className="px-8 py-1.5 flex items-center gap-2 text-[11px] font-black text-red-700 hover:bg-red-50 transition-colors uppercase italic"
                >
                    <LogOut size={16} /> Close Dispatcher
                </button>
                <button className="px-8 py-1.5 bg-gray-100 border border-gray-400 flex items-center gap-2 text-[11px] font-black text-gray-700 hover:bg-gray-200 transition-all uppercase shadow-sm">
                    <Clock size={16} /> Batch History
                </button>
            </div>
        </div>
    );
};

export default EmailPayslips;
