import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Printer, LogOut } from 'lucide-react';

const AttendanceReport = () => {
    const navigate = useNavigate();
    const [filters, setFilters] = useState({
        employeeId: '',
        dateFrom: '',
        dateTo: ''
    });

    const attendanceData = [
        { id: 1, employeeId: 'EMP001', name: 'John Doe', date: '2026-01-23', checkIn: '09:00', checkOut: '18:00', hours: '9', status: 'Present' },
        { id: 2, employeeId: 'EMP002', name: 'Jane Smith', date: '2026-01-23', checkIn: '09:15', checkOut: '18:30', hours: '9.25', status: 'Present' }
    ];

    return (
        <div className="flex flex-col h-full w-full bg-[#EBE9D8] font-sans text-xs">
            <div className="bg-[#D4D0C8] border-b border-gray-400 px-2 py-1">
                <span className="font-bold text-gray-700">Attendance Report</span>
            </div>
            <div className="flex-1 p-4 overflow-auto">
                <div className="bg-white border border-gray-400 shadow-inner p-4">
                    <table className="w-full border-collapse">
                        <thead className="bg-[#D4D0C8]">
                            <tr>
                                <th className="border p-2 text-left">Employee ID</th>
                                <th className="border p-2 text-left">Name</th>
                                <th className="border p-2 text-left">Date</th>
                                <th className="border p-2 text-left">Check In</th>
                                <th className="border p-2 text-left">Check Out</th>
                                <th className="border p-2 text-left">Hours</th>
                                <th className="border p-2 text-left">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {attendanceData.map(record => (
                                <tr key={record.id} className="odd:bg-blue-50">
                                    <td className="border p-2">{record.employeeId}</td>
                                    <td className="border p-2">{record.name}</td>
                                    <td className="border p-2">{record.date}</td>
                                    <td className="border p-2">{record.checkIn}</td>
                                    <td className="border p-2">{record.checkOut}</td>
                                    <td className="border p-2">{record.hours}</td>
                                    <td className="border p-2">{record.status}</td>
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

export default AttendanceReport;

