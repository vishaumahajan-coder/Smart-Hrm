import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Save, LogOut, Plus, Edit, RefreshCw, X, Search, Folder, Clock } from 'lucide-react';

const AttendanceManagement = () => {
    const navigate = useNavigate();
    const [isEditing, setIsEditing] = useState(false);
    const [selectedRow, setSelectedRow] = useState(null);
    const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);

    // Form fields state
    const [formData, setFormData] = useState({
        employeeId: '',
        employeeName: '',
        date: selectedDate,
        checkIn: '',
        checkOut: '',
        hoursWorked: '',
        status: 'Present',
        remarks: ''
    });

    // Attendance records
    const [attendanceRecords, setAttendanceRecords] = useState([
        {
            id: 1,
            employeeId: 'EMP001',
            employeeName: 'John Doe',
            date: '2026-01-23',
            checkIn: '09:00',
            checkOut: '18:00',
            hoursWorked: '9',
            status: 'Present',
            remarks: ''
        },
        {
            id: 2,
            employeeId: 'EMP002',
            employeeName: 'Jane Smith',
            date: '2026-01-23',
            checkIn: '09:15',
            checkOut: '18:30',
            hoursWorked: '9.25',
            status: 'Present',
            remarks: ''
        }
    ]);

    const handleInputChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleNew = () => {
        setFormData({
            employeeId: '',
            employeeName: '',
            date: selectedDate,
            checkIn: '',
            checkOut: '',
            hoursWorked: '',
            status: 'Present',
            remarks: ''
        });
        setSelectedRow(null);
        setIsEditing(true);
    };

    const handleEnter = () => {
        if (formData.employeeId && formData.date) {
            const newRecord = {
                id: attendanceRecords.length + 1,
                ...formData
            };
            setAttendanceRecords(prev => [...prev, newRecord]);
            handleNew();
        }
    };

    const handleEdit = () => {
        if (selectedRow) {
            const record = attendanceRecords.find(r => r.id === selectedRow);
            if (record) {
                setFormData(record);
                setIsEditing(true);
            }
        }
    };

    const handleUpdate = () => {
        if (selectedRow && formData.employeeId) {
            setAttendanceRecords(prev => prev.map(record =>
                record.id === selectedRow ? { ...formData } : record
            ));
            setIsEditing(false);
        }
    };

    const handleDelete = () => {
        if (selectedRow) {
            setAttendanceRecords(prev => prev.filter(record => record.id !== selectedRow));
            setSelectedRow(null);
            handleNew();
        }
    };

    const handleRowClick = (id) => {
        setSelectedRow(id);
        const record = attendanceRecords.find(r => r.id === id);
        if (record) {
            setFormData(record);
        }
    };

    const calculateHours = () => {
        if (formData.checkIn && formData.checkOut) {
            const [inHour, inMin] = formData.checkIn.split(':').map(Number);
            const [outHour, outMin] = formData.checkOut.split(':').map(Number);
            const inTime = inHour * 60 + inMin;
            const outTime = outHour * 60 + outMin;
            const hours = (outTime - inTime) / 60;
            handleInputChange('hoursWorked', hours.toFixed(2));
        }
    };

    React.useEffect(() => {
        if (formData.checkIn && formData.checkOut) {
            calculateHours();
        }
    }, [formData.checkIn, formData.checkOut]);

    const filteredRecords = attendanceRecords.filter(record =>
        record.date === selectedDate
    );

    return (
        <div className="flex flex-col h-full w-full bg-[#EBE9D8] font-sans text-xs">
            {/* Header */}
            <div className="bg-[#D4D0C8] border-b border-gray-400 px-2 py-1">
                <span className="font-bold text-gray-700">Attendance Management</span>
            </div>

            {/* Content Area */}
            <div className="flex-1 p-4 overflow-auto">
                <div className="flex gap-4 h-full">
                    {/* Left Side - Form Fields */}
                    <div className="flex flex-col gap-4 w-80">
                        <fieldset className="border border-gray-400 p-3 rounded relative">
                            <legend className="text-white bg-[#316AC5] px-2 py-0.5 font-bold absolute -top-3 left-2 border border-gray-500">
                                Attendance Information
                            </legend>

                            <div className="grid grid-cols-[120px_1fr] gap-y-3 gap-x-4 items-center mt-2">
                                <label className="text-gray-700 font-bold text-right">Employee ID</label>
                                <input
                                    type="text"
                                    value={formData.employeeId}
                                    onChange={(e) => handleInputChange('employeeId', e.target.value)}
                                    className="p-1 border border-gray-400 bg-white text-blue-800 font-bold shadow-inner"
                                    readOnly={!isEditing}
                                />

                                <label className="text-gray-700 font-bold text-right">Employee Name</label>
                                <input
                                    type="text"
                                    value={formData.employeeName}
                                    onChange={(e) => handleInputChange('employeeName', e.target.value)}
                                    className="p-1 border border-gray-400 bg-white text-blue-800 font-bold shadow-inner"
                                    readOnly={!isEditing}
                                />

                                <label className="text-gray-700 font-bold text-right">Date</label>
                                <input
                                    type="date"
                                    value={formData.date}
                                    onChange={(e) => {
                                        handleInputChange('date', e.target.value);
                                        setSelectedDate(e.target.value);
                                    }}
                                    className="p-1 border border-gray-400 bg-white text-blue-800 font-bold shadow-inner"
                                    readOnly={!isEditing}
                                />

                                <label className="text-gray-700 font-bold text-right">Check In</label>
                                <input
                                    type="time"
                                    value={formData.checkIn}
                                    onChange={(e) => handleInputChange('checkIn', e.target.value)}
                                    className="p-1 border border-gray-400 bg-white text-blue-800 font-bold shadow-inner"
                                    readOnly={!isEditing}
                                />

                                <label className="text-gray-700 font-bold text-right">Check Out</label>
                                <input
                                    type="time"
                                    value={formData.checkOut}
                                    onChange={(e) => handleInputChange('checkOut', e.target.value)}
                                    className="p-1 border border-gray-400 bg-white text-blue-800 font-bold shadow-inner"
                                    readOnly={!isEditing}
                                />

                                <label className="text-gray-700 font-bold text-right">Hours Worked</label>
                                <input
                                    type="text"
                                    value={formData.hoursWorked}
                                    readOnly
                                    className="p-1 border border-gray-400 bg-blue-50 text-blue-800 font-bold shadow-inner"
                                />

                                <label className="text-gray-700 font-bold text-right">Status</label>
                                <select
                                    value={formData.status}
                                    onChange={(e) => handleInputChange('status', e.target.value)}
                                    className="p-1 border border-gray-400 bg-white text-blue-800 font-bold shadow-inner"
                                    disabled={!isEditing}
                                >
                                    <option value="Present">Present</option>
                                    <option value="Absent">Absent</option>
                                    <option value="Late">Late</option>
                                    <option value="Half Day">Half Day</option>
                                    <option value="Leave">Leave</option>
                                </select>

                                <label className="text-gray-700 font-bold text-right">Remarks</label>
                                <textarea
                                    value={formData.remarks}
                                    onChange={(e) => handleInputChange('remarks', e.target.value)}
                                    className="p-1 border border-gray-400 bg-white text-blue-800 font-bold shadow-inner"
                                    readOnly={!isEditing}
                                    rows="3"
                                />
                            </div>
                        </fieldset>
                    </div>

                    {/* Middle - Action Buttons */}
                    <div className="flex flex-col gap-2 w-20">
                        <button
                            onClick={() => {/* Search logic */}}
                            className="flex flex-col items-center justify-center p-2 border border-gray-400 border-b-2 border-r-2 border-gray-500 bg-[#E0DCCF] hover:bg-gray-200 active:border-0 active:translate-y-0.5"
                        >
                            <Search className="text-blue-600 mb-1" size={20} />
                            <span className="font-bold text-xs">Search</span>
                        </button>

                        <button
                            onClick={handleDelete}
                            className="flex flex-col items-center justify-center p-2 border border-gray-400 border-b-2 border-r-2 border-gray-500 bg-[#E0DCCF] hover:bg-gray-200 active:border-0 active:translate-y-0.5"
                        >
                            <X className="text-red-600 mb-1" size={20} />
                            <span className="font-bold text-xs">Delete</span>
                        </button>

                        <button
                            onClick={handleUpdate}
                            className="flex flex-col items-center justify-center p-2 border border-gray-400 border-b-2 border-r-2 border-gray-500 bg-[#E0DCCF] hover:bg-gray-200 active:border-0 active:translate-y-0.5"
                        >
                            <RefreshCw className="text-green-600 mb-1" size={20} />
                            <span className="font-bold text-xs">Update</span>
                        </button>

                        <button
                            onClick={handleEdit}
                            className="flex flex-col items-center justify-center p-2 border border-gray-400 border-b-2 border-r-2 border-gray-500 bg-[#E0DCCF] hover:bg-gray-200 active:border-0 active:translate-y-0.5"
                        >
                            <Edit className="text-blue-600 mb-1" size={20} />
                            <span className="font-bold text-xs">Edit</span>
                        </button>

                        <button
                            onClick={handleEnter}
                            className="flex flex-col items-center justify-center p-2 border border-gray-400 border-b-2 border-r-2 border-gray-500 bg-[#E0DCCF] hover:bg-gray-200 active:border-0 active:translate-y-0.5"
                        >
                            <Folder className="text-gray-600 mb-1" size={20} />
                            <span className="font-bold text-xs">Enter</span>
                        </button>

                        <button
                            onClick={handleNew}
                            className="flex flex-col items-center justify-center p-2 border border-gray-400 border-b-2 border-r-2 border-gray-500 bg-[#E0DCCF] hover:bg-gray-200 active:border-0 active:translate-y-0.5"
                        >
                            <Plus className="text-yellow-600 mb-1" size={20} />
                            <span className="font-bold text-xs">New</span>
                        </button>
                    </div>

                    {/* Right Side - Table */}
                    <div className="flex-1 flex flex-col">
                        <div className="mb-2">
                            <label className="text-gray-700 font-bold mr-2">Filter by Date:</label>
                            <input
                                type="date"
                                value={selectedDate}
                                onChange={(e) => setSelectedDate(e.target.value)}
                                className="p-1 border border-gray-400 bg-white text-blue-800 font-bold shadow-inner"
                            />
                        </div>
                        <div className="bg-white border border-gray-400 shadow-inner flex-1 overflow-auto">
                            <table className="w-full border-collapse">
                                <thead className="bg-[#D4D0C8] border-b border-gray-400 text-xs text-gray-700 sticky top-0">
                                    <tr>
                                        <th className="border-r border-gray-400 p-1.5 text-left font-bold">Emp ID</th>
                                        <th className="border-r border-gray-400 p-1.5 text-left font-bold">Name</th>
                                        <th className="border-r border-gray-400 p-1.5 text-left font-bold">Date</th>
                                        <th className="border-r border-gray-400 p-1.5 text-left font-bold">Check In</th>
                                        <th className="border-r border-gray-400 p-1.5 text-left font-bold">Check Out</th>
                                        <th className="border-r border-gray-400 p-1.5 text-left font-bold">Hours</th>
                                        <th className="p-1.5 text-left font-bold">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredRecords.map((record) => (
                                        <tr
                                            key={record.id}
                                            onClick={() => handleRowClick(record.id)}
                                            className={`cursor-pointer ${selectedRow === record.id
                                                    ? 'bg-[#316AC5] text-white'
                                                    : 'odd:bg-blue-50 even:bg-white hover:bg-yellow-100'
                                                }`}
                                        >
                                            <td className="border-r border-gray-200 p-1.5 font-bold">{record.employeeId}</td>
                                            <td className="border-r border-gray-200 p-1.5 font-bold">{record.employeeName}</td>
                                            <td className="border-r border-gray-200 p-1.5 font-bold">{record.date}</td>
                                            <td className="border-r border-gray-200 p-1.5 font-bold">{record.checkIn}</td>
                                            <td className="border-r border-gray-200 p-1.5 font-bold">{record.checkOut}</td>
                                            <td className="border-r border-gray-200 p-1.5 font-bold">{record.hoursWorked}</td>
                                            <td className="p-1.5 font-bold">{record.status}</td>
                                        </tr>
                                    ))}
                                    {filteredRecords.length === 0 && (
                                        <tr>
                                            <td colSpan="7" className="p-4 text-center text-gray-500">No attendance records found for selected date</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Far Right - Exit/Save Buttons */}
                    <div className="flex flex-col gap-2 w-20">
                        <div className="flex-1"></div>
                        <button
                            onClick={() => {/* Save logic */}}
                            className="flex flex-col items-center justify-center p-2 border border-gray-400 border-b-2 border-r-2 border-gray-500 bg-[#E0DCCF] hover:bg-gray-200 active:border-0 active:translate-y-0.5"
                        >
                            <Save className="text-blue-600 mb-1" size={20} />
                            <span className="font-bold text-xs">Save</span>
                        </button>
                        <button
                            onClick={() => navigate(-1)}
                            className="flex flex-col items-center justify-center p-2 border border-gray-400 border-b-2 border-r-2 border-gray-500 bg-[#E0DCCF] hover:bg-gray-200 active:border-0 active:translate-y-0.5"
                        >
                            <LogOut className="text-red-600 mb-1" size={20} />
                            <span className="font-bold text-xs">Exit</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AttendanceManagement;

