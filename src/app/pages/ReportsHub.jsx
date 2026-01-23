import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FileText, Printer, Filter, Calendar, Building, User } from 'lucide-react';

const ReportsHub = () => {
    const navigate = useNavigate();
    const [selectedReport, setSelectedReport] = useState(null);
    const [selectedYear, setSelectedYear] = useState('2025');

    const reports = [
        { id: 'P24', title: 'P24 - Year End Certificates', type: 'Annual', code: 'GOJ-P24-V2' },
        { id: 'P45', title: 'P45 - Employee Termination', type: 'Ad-hoc', code: 'GOJ-P45-X1' },
        { id: 'S01', title: 'S01 - Monthly Statutory Remittance', type: 'Monthly', code: 'GOJ-S01-M' },
        { id: 'NIS', title: 'NIS Annual Contribution Report', type: 'Annual', code: 'GOJ-NIS-04' },
        { id: 'NHT', title: 'NHT Annual Contribution Report', type: 'Annual', code: 'GOJ-NHT-02' },
        { id: 'PAY', title: 'Master Payroll Summary', type: 'Internal', code: 'INT-PAY-SUM' },
    ];

    return (
        <div className="flex flex-col h-full w-full bg-[#EBE9D8] font-sans">
            {/* Header */}
            <div className="bg-[#D4D0C8] border-b border-gray-400 px-4 py-2 flex items-center justify-between">
                <span className="font-black text-gray-700 text-sm uppercase italic">Statutory Reporting Centre</span>
                <span className="text-[10px] font-bold text-gray-500 uppercase">Jamaica Compliance Module 4.2</span>
            </div>

            <div className="flex flex-1 overflow-hidden">
                {/* Left Sidebar - Report List */}
                <div className="w-64 bg-white border-r border-gray-400 overflow-y-auto flex flex-col">
                    <div className="p-2 bg-gray-100 border-b border-gray-200 text-xs font-bold text-gray-600 uppercase">Available Reports</div>
                    {reports.map((report) => (
                        <button
                            key={report.id}
                            onClick={() => setSelectedReport(report)}
                            className={`p-3 text-left border-b border-gray-100 hover:bg-blue-50 transition-colors ${selectedReport?.id === report.id ? 'bg-[#316AC5] text-white hover:bg-[#316AC5]' : 'text-gray-700'}`}
                        >
                            <div className="font-bold text-xs">{report.title}</div>
                            <div className={`text-[9px] mt-1 ${selectedReport?.id === report.id ? 'text-blue-200' : 'text-gray-400'}`}>Code: {report.code}</div>
                        </button>
                    ))}
                </div>

                {/* Right Content - Parameters & Preview */}
                <div className="flex-1 flex flex-col p-4 overflow-hidden relative">
                    {/* Background Watermark */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
                        <FileText size={300} className="text-gray-500" />
                    </div>

                    {!selectedReport ? (
                        <div className="flex items-center justify-center h-full text-gray-400 text-sm font-bold uppercase italic">
                            Select a report format to begin
                        </div>
                    ) : (
                        <div className="flex flex-col h-full gap-4 z-10">
                            {/* Filter Section */}
                            <fieldset className="border border-gray-400 p-4 bg-[#F2F0E4] rounded-sm">
                                <legend className="text-[10px] font-black uppercase text-gray-500 px-2 bg-[#F2F0E4]">Report Parameters</legend>
                                <div className="flex flex-wrap gap-4 items-end">
                                    <div className="flex flex-col gap-1">
                                        <label className="text-[10px] font-bold text-gray-600 uppercase">Tax Year</label>
                                        <select
                                            value={selectedYear}
                                            onChange={(e) => setSelectedYear(e.target.value)}
                                            className="border border-gray-400 p-1 text-xs px-2 min-w-[100px]"
                                        >
                                            <option>2026</option>
                                            <option>2025</option>
                                            <option>2024</option>
                                        </select>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <label className="text-[10px] font-bold text-gray-600 uppercase">Entity Scope</label>
                                        <div className="flex items-center bg-white border border-gray-400 p-1">
                                            <Building size={14} className="mr-2 text-gray-400" />
                                            <select className="border-none outline-none text-xs bg-transparent min-w-[150px]">
                                                <option>Entire Organization</option>
                                                <option>Kingston Branch</option>
                                                <option>Remote Teams</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-1 flex-1">
                                        <label className="text-[10px] font-bold text-gray-600 uppercase">Specific Employee (Optional)</label>
                                        <div className="flex items-center bg-white border border-gray-400 p-1">
                                            <User size={14} className="mr-2 text-gray-400" />
                                            <input type="text" placeholder="Type Last Name..." className="border-none outline-none text-xs bg-transparent w-full" />
                                        </div>
                                    </div>
                                    <button className="bg-[#316AC5] text-white px-6 py-1.5 text-xs font-bold uppercase shadow-sm hover:bg-blue-600 border border-blue-800">
                                        Generate Preview
                                    </button>
                                </div>
                            </fieldset>

                            {/* Report Preview - Crystal Report Style */}
                            <div className="flex-1 bg-gray-500 p-8 overflow-auto shadow-inner flex justify-center">
                                <div className="bg-white w-[210mm] min-h-[297mm] shadow-2xl p-[10mm] text-black font-serif text-[10pt] relative">
                                    {/* Header */}
                                    <div className="border-b-2 border-black pb-4 mb-4">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <h1 className="text-xl font-bold uppercase tracking-widest">Government of Jamaica</h1>
                                                <h2 className="text-lg font-bold">{selectedReport.title}</h2>
                                                <p className="text-xs mt-1">Form No: {selectedReport.code}</p>
                                            </div>
                                            <div className="text-right">
                                                <p className="font-bold">Tax Year: {selectedYear}</p>
                                                <p className="text-xs">Generated: {new Date().toLocaleDateString()}</p>
                                            </div>
                                        </div>
                                        <div className="mt-4 flex justify-between text-xs">
                                            <div>
                                                <span className="font-bold">Employer:</span> ACME JAMAICA LTD<br />
                                                <span className="font-bold">TRN:</span> 000-000-000
                                            </div>
                                            <div className="text-right">
                                                <span className="font-bold">Period:</span> Jan 01 - Dec 31
                                            </div>
                                        </div>
                                    </div>

                                    {/* Content Placeholder */}
                                    <div className="border border-black min-h-[500px] flex items-center justify-center bg-gray-50 relative overflow-hidden">
                                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/lined-paper.png')] opacity-20"></div>
                                        <p className="text-gray-400 font-bold uppercase tracking-widest italic transform -rotate-12 text-2xl">
                                            Document Preview Only
                                        </p>
                                    </div>

                                    {/* Footer */}
                                    <div className="absolute bottom-[10mm] left-[10mm] right-[10mm] border-t border-black pt-2 flex justify-between text-[8pt]">
                                        <span>System Generated Document - Smart HRM</span>
                                        <span>Page 1 of 1</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ReportsHub;
