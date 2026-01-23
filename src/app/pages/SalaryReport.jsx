import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Printer, LogOut } from 'lucide-react';

const SalaryReport = () => {
    const navigate = useNavigate();
    const [filters, setFilters] = useState({
        employeeId: '',
        month: '',
        year: ''
    });

    const salaryData = [
        { id: 1, employeeId: 'EMP001', name: 'John Doe', month: 'January', year: '2026', basic: '40000', allowances: '10000', deductions: '5000', net: '45000' },
        { id: 2, employeeId: 'EMP002', name: 'Jane Smith', month: 'January', year: '2026', basic: '50000', allowances: '10000', deductions: '6000', net: '54000' }
    ];

    return (
        <div className="flex flex-col h-full w-full bg-[#EBE9D8] font-sans text-xs">
            <div className="bg-[#D4D0C8] border-b border-gray-400 px-2 py-1">
                <span className="font-bold text-gray-700">Salary Report</span>
            </div>
            <div className="flex-1 p-4 overflow-auto">
                <div className="bg-white border border-gray-400 shadow-inner p-4">
                    <table className="w-full border-collapse">
                        <thead className="bg-[#D4D0C8]">
                            <tr>
                                <th className="border p-2 text-left">Employee ID</th>
                                <th className="border p-2 text-left">Name</th>
                                <th className="border p-2 text-left">Month</th>
                                <th className="border p-2 text-left">Basic</th>
                                <th className="border p-2 text-left">Allowances</th>
                                <th className="border p-2 text-left">Deductions</th>
                                <th className="border p-2 text-left">Net Salary</th>
                            </tr>
                        </thead>
                        <tbody>
                            {salaryData.map(record => (
                                <tr key={record.id} className="odd:bg-blue-50">
                                    <td className="border p-2">{record.employeeId}</td>
                                    <td className="border p-2">{record.name}</td>
                                    <td className="border p-2">{record.month} {record.year}</td>
                                    <td className="border p-2">{record.basic}</td>
                                    <td className="border p-2">{record.allowances}</td>
                                    <td className="border p-2">{record.deductions}</td>
                                    <td className="border p-2">{record.net}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="flex gap-2 mt-4">
                    <button className="flex items-center gap-2 px-4 py-2 bg-[#316AC5] text-white">
                        <Printer size={16} />
                        Print
                    </button>
                    <button onClick={() => navigate(-1)} className="flex items-center gap-2 px-4 py-2 bg-gray-500 text-white">
                        <LogOut size={16} />
                        Exit
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SalaryReport;

