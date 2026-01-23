import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    FileText, Download, Upload, CheckCircle, Printer,
    Save, LogOut, ShieldCheck, Landmark, Search
} from 'lucide-react';

const JamaicaStatutory = ({ type = 'S01' }) => {
    const navigate = useNavigate();
    const [period, setPeriod] = useState('2026-01');

    const reports = {
        'P45': {
            title: 'P45 - Employee Termination Certificate',
            formCode: 'F-P45-TAJ',
            fields: [
                { label: 'Employee Full Name', category: 'Identification' },
                { label: 'TRN (Taxpayer Registration Number)', category: 'Identification' },
                { label: 'Date of Cessation', category: 'Employment Detail' },
                { label: 'Cumulative Gross Pay (JMD)', category: 'Financials' },
                { label: 'Cumulative Income Tax (JMD)', category: 'Financials' },
                { label: 'Employer TRN', category: 'Entity' }
            ]
        },
        'NIS-NHT': {
            title: 'NIS / NHT Multi-Year Contributions',
            formCode: 'F-NIS/NHT-ANNUAL',
            fields: [
                { label: 'Employer Registration Number', category: 'Entity' },
                { label: 'Total Number of Employees', category: 'Batch' },
                { label: 'Gross Pay for Period', category: 'Financials' },
                { label: 'NIS Employer (3%)', category: 'Financials' },
                { label: 'NIS Employee (3%)', category: 'Financials' },
                { label: 'NHT Employer (3%)', category: 'Financials' },
                { label: 'NHT Employee (2%)', category: 'Financials' }
            ]
        },
        'S01': {
            title: 'S01 - Monthly Statutory Remittance',
            formCode: 'F-S01-MONTHLY',
            fields: [
                { label: 'PAYE Liability', category: 'Taxation' },
                { label: 'Education Tax (ER)', category: 'Taxation' },
                { label: 'Education Tax (EE)', category: 'Taxation' },
                { label: 'NIS Contribution', category: 'Social Security' },
                { label: 'NHT Contribution', category: 'Housing' },
                { label: 'HEART Trust (3%)', category: 'Social Security' }
            ]
        },
        'S02': {
            title: 'S02 - Annual Statutory Declaration',
            formCode: 'F-S02-YEARLY',
            fields: [
                { label: 'Calendar Year', category: 'Period' },
                { label: 'Total Annual Gross', category: 'Financials' },
                { label: 'Total PAYE Withheld', category: 'Financials' },
                { label: 'Total Ed Tax Paid', category: 'Financials' },
                { label: 'Total NIS Remitted', category: 'Financials' }
            ]
        },
        'Pension': {
            title: 'Approved Pension Fund Report',
            formCode: 'P-FUND-AUDIT',
            fields: [
                { label: 'Fund Certification #', category: 'Audit' },
                { label: 'Employee Contributions', category: 'Financials' },
                { label: 'Employer Matchings', category: 'Financials' },
                { label: 'Vesting Status', category: 'Compliance' }
            ]
        },
        'TaxUpload': {
            title: 'RAiS e-Filing Compatibility Check',
            formCode: 'X-RAIS-XML',
            fields: [
                { label: 'Target Portal (RAiS)', category: 'System' },
                { label: 'Schema Version 2.1', category: 'System' },
                { label: 'Validation Status', category: 'System' }
            ]
        }
    };

    const currentReport = reports[type] || reports['S01'];

    return (
        <div className="flex flex-col h-full w-full bg-[#525659] font-sans selection:bg-blue-200">
            {/* Report Toolbar */}
            <div className="bg-[#323639] border-b border-black px-4 py-2 flex items-center justify-between no-print shadow-xl z-20">
                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2">
                        <FileText className="text-white" size={18} />
                        <span className="text-white text-xs font-black uppercase tracking-tighter">{currentReport.title}</span>
                    </div>
                    <div className="h-6 w-px bg-gray-600"></div>
                    <div className="flex items-center gap-3">
                        <span className="text-[10px] font-black text-gray-400 uppercase italic">Filing Period:</span>
                        <input
                            type="month"
                            value={period}
                            onChange={(e) => setPeriod(e.target.value)}
                            className="bg-[#202124] border border-gray-700 text-blue-400 text-[10px] font-black p-1 rounded focus:outline-none"
                        />
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <button className="p-1 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded text-[10px] font-black uppercase shadow-inner transition-all flex items-center gap-2">
                        <Printer size={14} /> Print Report
                    </button>
                    <button className="p-1 px-4 bg-gray-700 hover:bg-gray-600 text-white rounded text-[10px] font-black uppercase border border-gray-600 transition-all flex items-center gap-2">
                        <Download size={14} /> Export PDF
                    </button>
                    <div className="h-6 w-px bg-gray-600 mx-2"></div>
                    <button onClick={() => navigate('/')} className="text-gray-400 hover:text-white transition-colors">
                        <LogOut size={20} />
                    </button>
                </div>
            </div>

            {/* Crystal Reports "Sheet" View */}
            <div className="flex-1 overflow-auto p-4 md:p-12 flex justify-center bg-[#525659]">
                <div className="bg-white w-full max-w-[8.5in] min-h-[11in] shadow-2xl p-12 md:p-16 flex flex-col relative">

                    {/* Watermark Logo (Abstract) */}
                    <div className="absolute top-16 right-16 opacity-10">
                        <div className="w-24 h-24 border-8 border-blue-900 rounded-full flex items-center justify-center font-black text-blue-900 text-4xl italic">S</div>
                    </div>

                    {/* Report Header */}
                    <div className="mb-12 border-b-2 border-blue-900 pb-8">
                        <div className="flex justify-between items-start">
                            <div>
                                <h1 className="text-3xl font-black text-blue-900 italic tracking-tighter leading-none mb-1">OFFICIAL RETURN</h1>
                                <p className="text-[12px] font-black text-gray-500 uppercase tracking-[0.2em]">{currentReport.title}</p>
                                <div className="mt-4 text-[10px] font-bold text-gray-400">FORM CODE: <span className="text-gray-800">{currentReport.formCode}</span></div>
                            </div>
                            <div className="text-right">
                                <p className="text-[10px] font-black text-gray-400 uppercase">Government of Jamaica</p>
                                <p className="text-[11px] font-black text-blue-900 uppercase">Tax Administration Jamaica (TAJ)</p>
                                <div className="mt-2 text-[10px] font-bold text-gray-400 italic">Snapshot ID: {Math.random().toString(36).substr(2, 9).toUpperCase()}</div>
                            </div>
                        </div>
                    </div>

                    {/* Report Content Sections */}
                    <div className="flex-1 space-y-10">

                        {/* Grouped Fields */}
                        {Array.from(new Set(currentReport.fields.map(f => f.category))).map((cat, idx) => (
                            <div key={idx} className="space-y-4">
                                <h3 className="text-[11px] font-black text-blue-900 uppercase tracking-widest border-l-4 border-blue-900 pl-3 bg-gray-50 py-1">Section {idx + 1}: {cat}</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 px-4">
                                    {currentReport.fields.filter(f => f.category === cat).map((field, fIdx) => (
                                        <div key={fIdx} className="flex flex-col border-b border-gray-100 pb-1 group hover:border-blue-200 transition-colors">
                                            <span className="text-[9px] font-bold text-gray-400 uppercase">{field.label}</span>
                                            <input
                                                type="text"
                                                className="text-xs font-black text-gray-800 uppercase focus:outline-none bg-transparent py-1 no-print"
                                                placeholder="[ DATA_FIELD ]"
                                            />
                                            <span className="hidden print:block text-xs font-black text-gray-800 uppercase py-1 italic">PREVIEW_MODE</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}

                    </div>

                    {/* Professional Auditor's Note */}
                    <div className="mt-20 p-6 border-2 border-dashed border-gray-200 bg-gray-50 flex gap-6 italic">
                        <ShieldCheck className="text-blue-900 shrink-0" size={24} />
                        <div>
                            <p className="text-[10px] font-black text-gray-500 uppercase italic mb-1">Certification & Integrity Statement</p>
                            <p className="text-[11px] text-gray-600 leading-relaxed font-bold">
                                I hereby certify that the information provided in this statutory return is true and correct to the best of my knowledge, and has been computed in accordance with the <span className="text-blue-900">Tax Administration Act of Jamaica</span>.
                            </p>
                            <div className="mt-8 flex justify-between items-end border-t border-gray-300 pt-4">
                                <div className="w-48 border-b-2 border-gray-400 h-8 flex items-end justify-center text-[9px] font-black text-gray-400 uppercase italic">Signature of Authorized Agent</div>
                                <div className="text-[10px] font-black text-gray-400 uppercase">Stamp / Seal</div>
                            </div>
                        </div>
                    </div>

                    {/* Footer / Page Numbering */}
                    <div className="mt-12 pt-4 border-t border-gray-100 flex justify-between items-center opacity-50">
                        <span className="text-[9px] font-bold text-gray-400 uppercase italic tracking-widest">Page 1 of 1 — HRM PLUS JAMAICA EDITION</span>
                        <div className="flex items-center gap-2">
                            < Landmark size={12} className="text-gray-400" />
                            <span className="text-[9px] font-bold text-gray-400 italic">Confidential Corporate Document</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JamaicaStatutory;
