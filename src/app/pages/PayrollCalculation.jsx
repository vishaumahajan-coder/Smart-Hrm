import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Calculator, Save, Play, RefreshCw, CheckCircle2,
    AlertCircle, FileText, Mail, Download, Search
} from 'lucide-react';

const PayrollCalculation = () => {
    const navigate = useNavigate();
    const [period, setPeriod] = useState('2026-01');
    const [isCalculating, setIsCalculating] = useState(false);
    const [calcStage, setCalcStage] = useState('');
    const [selectedDept, setSelectedDept] = useState('All');

    // Mock Data for Demo
    const [staffRecords, setStaffRecords] = useState([
        { id: 1, name: 'John Doe', trn: '123-456-789', gross: 250000, nis: 0, nht: 0, edTax: 0, paye: 0, net: 0, status: 'Ready' },
        { id: 2, name: 'Jane Smith', trn: '987-654-321', gross: 300000, nis: 0, nht: 0, edTax: 0, paye: 0, net: 0, status: 'Ready' },
        { id: 3, name: 'Robert Brown', trn: '456-789-123', gross: 120000, nis: 0, nht: 0, edTax: 0, paye: 0, net: 0, status: 'Ready' },
        { id: 4, name: 'Emily Davis', trn: '321-654-987', gross: 450000, nis: 0, nht: 0, edTax: 0, paye: 0, net: 0, status: 'Ready' },
    ]);

    const runCalculations = () => {
        setIsCalculating(true);
        setCalcStage('Initializing Engine...');

        setTimeout(() => {
            setCalcStage('Applying Jamaica Statutory Rates (2026)...');

            setStaffRecords(prev => prev.map(staff => {
                const gross = staff.gross;

                // Jamaica Logic (Simplified for Demo)
                // NIS: 3% of Gross
                const nis = gross * 0.03;

                // NHT: 2% of Gross
                const nht = gross * 0.02;

                // Taxable Income for Ed Tax = Gross - NIS
                const taxableForEdTax = gross - nis;
                const edTax = taxableForEdTax * 0.0225;

                // PAYE Logic
                // Annual Threshold = 1,500,000 => Monthly = 125,000
                const threshold = 125000;
                const taxableIncome = gross - nis - threshold;
                const paye = taxableIncome > 0 ? taxableIncome * 0.25 : 0;

                const net = gross - nis - nht - edTax - paye;

                return {
                    ...staff,
                    nis: nis.toFixed(2),
                    nht: nht.toFixed(2),
                    edTax: edTax.toFixed(2),
                    paye: paye.toFixed(2),
                    net: net.toFixed(2),
                    status: 'Calculated'
                };
            }));

            setTimeout(() => {
                setCalcStage('Generating Digital Payslips...');
                setTimeout(() => {
                    setCalcStage('');
                    setIsCalculating(false);
                }, 1000);
            }, 1500);
        }, 1500);
    };

    return (
        <div className="flex flex-col h-full w-full bg-[#EBE9D8] font-sans">
            {/* Header */}
            <div className="bg-[#D4D0C8] border-b border-gray-400 px-4 py-2 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Calculator className="text-blue-700" size={18} />
                    <span className="font-black text-gray-700 text-sm uppercase italic">Payroll Processing Center - Jamaica Engine</span>
                </div>
                <div className="flex items-center gap-4">
                    <div className="bg-white px-2 py-1 border border-gray-300 rounded shadow-inner">
                        <span className="text-[10px] font-black text-gray-400 uppercase mr-2">Tax Period:</span>
                        <input
                            type="month"
                            value={period}
                            onChange={(e) => setPeriod(e.target.value)}
                            className="text-[10px] font-black text-blue-900 focus:outline-none"
                        />
                    </div>
                </div>
            </div>

            <div className="flex-1 p-4 flex flex-col gap-4 overflow-hidden">

                {/* Control Panel */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="bg-white border border-gray-400 p-4 shadow-sm flex flex-col gap-2 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-1 opacity-10">
                            <RefreshCw size={40} />
                        </div>
                        <h4 className="text-[10px] font-black text-gray-400 uppercase italic">Step 1: Prep</h4>
                        <button className="bg-gray-100 hover:bg-gray-200 p-2 text-[10px] font-black uppercase text-gray-700 border border-gray-300 transition-all flex items-center justify-center gap-2">
                            <Search size={14} /> Import Attendance
                        </button>
                    </div>

                    <div className="bg-white border border-gray-400 p-4 shadow-sm flex flex-col gap-2 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-1 opacity-10">
                            <Play size={40} className="text-blue-600" />
                        </div>
                        <h4 className="text-[10px] font-black text-blue-900 uppercase italic">Step 2: Calculate</h4>
                        <button
                            disabled={isCalculating}
                            onClick={runCalculations}
                            className={`p-2 text-[10px] font-black uppercase shadow-inner border border-blue-400 transition-all flex items-center justify-center gap-2 ${isCalculating ? 'bg-gray-100 text-gray-400' : 'bg-blue-600 hover:bg-blue-700 text-white'}`}
                        >
                            <Play size={14} /> {isCalculating ? 'Processing...' : 'Run Master Engine'}
                        </button>
                    </div>

                    <div className="bg-white border border-gray-400 p-4 shadow-sm flex flex-col gap-2 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-1 opacity-10">
                            <FileText size={40} className="text-green-600" />
                        </div>
                        <h4 className="text-[10px] font-black text-green-700 uppercase italic">Step 3: Audit</h4>
                        <button
                            className="bg-green-600 hover:bg-green-700 text-white p-2 text-[10px] font-black uppercase shadow-inner border border-green-400 transition-all flex items-center justify-center gap-2"
                        >
                            <FileText size={14} /> Review Summary
                        </button>
                    </div>

                    <div className="bg-white border border-gray-400 p-4 shadow-sm flex flex-col gap-2 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-1 opacity-10">
                            <Mail size={40} className="text-orange-600" />
                        </div>
                        <h4 className="text-[10px] font-black text-orange-700 uppercase italic">Step 4: Finalize</h4>
                        <button
                            className="bg-orange-600 hover:bg-orange-700 text-white p-2 text-[10px] font-black uppercase shadow-inner border border-orange-400 transition-all flex items-center justify-center gap-2"
                        >
                            <Mail size={14} /> Email Payslips
                        </button>
                    </div>
                </div>

                {/* Progress Monitor */}
                {isCalculating && (
                    <div className="bg-blue-900 p-3 flex items-center justify-between border-l-8 border-blue-400 animate-pulse">
                        <div className="flex items-center gap-4 text-white">
                            <RefreshCw className="animate-spin" size={16} />
                            <span className="text-xs font-black uppercase italic tracking-widest">{calcStage}</span>
                        </div>
                        <div className="w-64 h-2 bg-blue-800 rounded-full overflow-hidden">
                            <div className="h-full bg-blue-400 w-1/2 animate-[progress_2s_infinite]"></div>
                        </div>
                    </div>
                )}

                {/* Main Grid */}
                <div className="flex-1 bg-white border border-gray-400 shadow-inner overflow-hidden flex flex-col">
                    <div className="bg-gray-100 p-2 border-b border-gray-300 flex justify-between items-center">
                        <div className="flex items-center gap-2">
                            <span className="text-[10px] font-black text-gray-500 uppercase">Department Filter:</span>
                            <select
                                value={selectedDept}
                                onChange={(e) => setSelectedDept(e.target.value)}
                                className="text-[10px] font-black text-blue-900 border border-gray-300 bg-white p-1"
                            >
                                <option>All Departments</option>
                                <option>MIS/IT</option>
                                <option>Finance</option>
                                <option>Operations</option>
                            </select>
                        </div>
                        <div className="flex gap-2">
                            <button className="p-1 px-3 bg-gray-200 text-gray-700 border border-gray-400 rounded text-[9px] font-black uppercase flex items-center gap-1 hover:bg-gray-300">
                                <Download size={12} /> CSV
                            </button>
                            <button className="p-1 px-3 bg-gray-200 text-gray-700 border border-gray-400 rounded text-[9px] font-black uppercase flex items-center gap-1 hover:bg-gray-300">
                                <FileText size={12} /> PDF
                            </button>
                        </div>
                    </div>

                    <div className="flex-1 overflow-auto">
                        <table className="w-full text-left border-collapse min-w-[1000px]">
                            <thead className="bg-[#D4D0C8] border-b border-gray-400 text-[10px] font-black text-gray-600 uppercase italic sticky top-0">
                                <tr>
                                    <th className="p-3 border-r border-gray-300">Staff Member</th>
                                    <th className="p-3 border-r border-gray-300 text-right">Gross Pay</th>
                                    <th className="p-3 border-r border-gray-300 text-right bg-blue-50 text-blue-900">NIS EE</th>
                                    <th className="p-3 border-r border-gray-300 text-right bg-blue-50 text-blue-900">NHT EE</th>
                                    <th className="p-3 border-r border-gray-300 text-right bg-blue-50 text-blue-900">ED TAX EE</th>
                                    <th className="p-3 border-r border-gray-300 text-right bg-red-50 text-red-900">PAYE</th>
                                    <th className="p-3 border-r border-gray-300 text-right font-black text-green-700">Net Pay</th>
                                    <th className="p-3">Status</th>
                                </tr>
                            </thead>
                            <tbody className="text-[11px] font-bold text-gray-700">
                                {staffRecords.map(staff => (
                                    <tr key={staff.id} className="border-b border-gray-100 hover:bg-yellow-50 transition-colors">
                                        <td className="p-3 border-r border-gray-200 uppercase flex flex-col">
                                            <span>{staff.name}</span>
                                            <span className="text-[9px] text-gray-400 font-mono tracking-tighter">TRN: {staff.trn}</span>
                                        </td>
                                        <td className="p-3 border-r border-gray-200 text-right italic">${staff.gross.toLocaleString()}</td>
                                        <td className="p-3 border-r border-gray-200 text-right text-blue-800">${staff.nis}</td>
                                        <td className="p-3 border-r border-gray-200 text-right text-blue-800">${staff.nht}</td>
                                        <td className="p-3 border-r border-gray-200 text-right text-blue-800">${staff.edTax}</td>
                                        <td className="p-3 border-r border-gray-200 text-right text-red-700 font-black">${staff.paye}</td>
                                        <td className="p-3 border-r border-gray-200 text-right text-green-700 font-black bg-green-50/30 text-base italic tracking-tighter">${staff.net}</td>
                                        <td className="p-3">
                                            <span className={`px-2 py-0.5 rounded-full text-[9px] font-black uppercase ${staff.status === 'Calculated' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'}`}>
                                                {staff.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Footer Summary */}
                    <div className="bg-[#D4D0C8] p-4 border-t border-gray-400 grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="flex flex-col">
                            <span className="text-[9px] font-black text-gray-500 uppercase">Batch Total Gross</span>
                            <span className="text-sm font-black text-gray-800">$1,120,000.00</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[9px] font-black text-blue-700 uppercase">Statutory Deductions</span>
                            <span className="text-sm font-black text-blue-800">$142,560.50</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[9px] font-black text-red-700 uppercase">Income Tax (PAYE)</span>
                            <span className="text-sm font-black text-red-800">$185,000.00</span>
                        </div>
                        <div className="flex flex-col border-l-2 border-gray-500 pl-4 bg-gray-100/50">
                            <span className="text-[9px] font-black text-green-700 uppercase italic">Net Disbursement</span>
                            <span className="text-lg font-black text-green-800 italic tracking-tighter">$792,439.50</span>
                        </div>
                    </div>
                </div>

            </div>

            {/* System Status Bar */}
            <div className="bg-[#316AC5] text-white px-4 py-1 flex justify-between items-center">
                <div className="flex items-center gap-4 text-[10px] font-bold">
                    <span className="flex items-center gap-1"><AlertCircle size={12} /> Compliance: Jamaica Tax Act 2024</span>
                    <span className="flex items-center gap-1"><CheckCircle2 size={12} /> NIS Ceiling Applied</span>
                </div>
                <div className="flex gap-4">
                    <button onClick={() => navigate('/')} className="bg-white/10 hover:bg-white/20 px-4 py-0.5 rounded text-[10px] font-black uppercase">Close Window</button>
                    <button className="bg-green-500 hover:bg-green-600 px-4 py-0.5 rounded text-[10px] font-black uppercase text-white shadow-lg">Finalize Batch</button>
                </div>
            </div>
        </div>
    );
};

export default PayrollCalculation;
