import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Printer, LogOut, FileText } from 'lucide-react';

const EmployeeReport = () => {
    const navigate = useNavigate();
    const [filters, setFilters] = useState({
        department: '',
        status: '',
        dateFrom: '',
        dateTo: ''
    });

    const employees = [
        { id: 1, employeeId: 'EMP001', name: 'John Doe', department: 'IT', designation: 'Software Developer', status: 'Active', joinDate: '2024-01-15' },
        { id: 2, employeeId: 'EMP002', name: 'Jane Smith', department: 'HR', designation: 'HR Manager', status: 'Active', joinDate: '2023-06-20' }
    ];

    return (
        <div className="flex flex-col h-full w-full bg-[#EBE9D8] font-sans text-xs">
            <div className="bg-[#D4D0C8] border-b border-gray-400 px-2 py-1">
                <span className="font-bold text-gray-700">Employee Report</span>
            </div>
            <div className="flex-1 p-4 overflow-auto">
                <div className="bg-white border border-gray-400 shadow-inner p-4">
                    <table className="w-full border-collapse">
                        <thead className="bg-[#D4D0C8]">
                            <tr>
                                <th className="border p-2 text-left">Employee ID</th>
                                <th className="border p-2 text-left">Name</th>
                                <th className="border p-2 text-left">Department</th>
                                <th className="border p-2 text-left">Designation</th>
                                <th className="border p-2 text-left">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {employees.map(emp => (
                                <tr key={emp.id} className="odd:bg-blue-50">
                                    <td className="border p-2">{emp.employeeId}</td>
                                    <td className="border p-2">{emp.name}</td>
                                    <td className="border p-2">{emp.department}</td>
                                    <td className="border p-2">{emp.designation}</td>
                                    <td className="border p-2">{emp.status}</td>
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

export default EmployeeReport;

