import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Save, LogOut, Plus, Edit, RefreshCw, X, Search, Folder, Calendar } from 'lucide-react';

const LeaveManagement = () => {
    const navigate = useNavigate();
    const [isEditing, setIsEditing] = useState(false);
    const [selectedRow, setSelectedRow] = useState(null);

    // Form fields state
    const [formData, setFormData] = useState({
        employeeId: '',
        employeeName: '',
        leaveType: '',
        startDate: '',
        endDate: '',
        days: '',
        reason: '',
        status: 'Pending',
        approvedBy: '',
        remarks: ''
    });

    // Leave records
    const [leaveRecords, setLeaveRecords] = useState([
        {
            id: 1,
            employeeId: 'EMP001',
            employeeName: 'John Doe',
            leaveType: 'Sick Leave',
            startDate: '2026-01-25',
            endDate: '2026-01-26',
            days: '2',
            reason: 'Medical emergency',
            status: 'Approved',
            approvedBy: 'HR Manager',
            remarks: 'Approved'
        },
        {
            id: 2,
            employeeId: 'EMP002',
            employeeName: 'Jane Smith',
            leaveType: 'Annual Leave',
            startDate: '2026-02-01',
            endDate: '2026-02-05',
            days: '5',
            reason: 'Vacation',
            status: 'Pending',
            approvedBy: '',
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
            leaveType: '',
            startDate: '',
            endDate: '',
            days: '',
            reason: '',
            status: 'Pending',
            approvedBy: '',
            remarks: ''
        });
        setSelectedRow(null);
        setIsEditing(true);
    };

    const handleEnter = () => {
        if (formData.employeeId && formData.leaveType && formData.startDate && formData.endDate) {
            const newRecord = {
                id: leaveRecords.length + 1,
                ...formData
            };
            setLeaveRecords(prev => [...prev, newRecord]);
            handleNew();
        }
    };

    const handleEdit = () => {
        if (selectedRow) {
            const record = leaveRecords.find(r => r.id === selectedRow);
            if (record) {
                setFormData(record);
                setIsEditing(true);
            }
        }
    };

    const handleUpdate = () => {
        if (selectedRow && formData.employeeId) {
            setLeaveRecords(prev => prev.map(record =>
                record.id === selectedRow ? { ...formData } : record
            ));
            setIsEditing(false);
        }
    };

    const handleDelete = () => {
        if (selectedRow) {
            setLeaveRecords(prev => prev.filter(record => record.id !== selectedRow));
            setSelectedRow(null);
            handleNew();
        }
    };

    const handleRowClick = (id) => {
        setSelectedRow(id);
        const record = leaveRecords.find(r => r.id === id);
        if (record) {
            setFormData(record);
        }
    };

    const calculateDays = () => {
        if (formData.startDate && formData.endDate) {
            const start = new Date(formData.startDate);
            const end = new Date(formData.endDate);
            const diffTime = Math.abs(end - start);
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;
            handleInputChange('days', diffDays.toString());
        }
    };

    React.useEffect(() => {
        if (formData.startDate && formData.endDate) {
            calculateDays();
        }
    }, [formData.startDate, formData.endDate]);

    return (
        <div className="flex flex-col h-full w-full bg-[#EBE9D8] font-sans text-xs">
            {/* Header */}
            <div className="bg-[#D4D0C8] border-b border-gray-400 px-2 py-1">
                <span className="font-bold text-gray-700">Leave Management</span>
            </div>

            {/* Content Area */}
            <div className="flex-1 p-4 overflow-auto">
                <div className="flex gap-4 h-full">
                    {/* Left Side - Form Fields */}
                    <div className="flex flex-col gap-4 w-80">
                        <fieldset className="border border-gray-400 p-3 rounded relative">
                            <legend className="text-white bg-[#316AC5] px-2 py-0.5 font-bold absolute -top-3 left-2 border border-gray-500">
                                Leave Information
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

                                <label className="text-gray-700 font-bold text-right">Leave Type</label>
                                <select
                                    value={formData.leaveType}
                                    onChange={(e) => handleInputChange('leaveType', e.target.value)}
                                    className="p-1 border border-gray-400 bg-white text-blue-800 font-bold shadow-inner"
                                    disabled={!isEditing}
                                >
                                    <option value="">Select Leave Type</option>
                                    <option value="Annual Leave">Annual Leave</option>
                                    <option value="Sick Leave">Sick Leave</option>
                                    <option value="Casual Leave">Casual Leave</option>
                                    <option value="Emergency Leave">Emergency Leave</option>
                                    <option value="Maternity Leave">Maternity Leave</option>
                                    <option value="Paternity Leave">Paternity Leave</option>
                                </select>

                                <label className="text-gray-700 font-bold text-right">Start Date</label>
                                <input
                                    type="date"
                                    value={formData.startDate}
                                    onChange={(e) => handleInputChange('startDate', e.target.value)}
                                    className="p-1 border border-gray-400 bg-white text-blue-800 font-bold shadow-inner"
                                    readOnly={!isEditing}
                                />

                                <label className="text-gray-700 font-bold text-right">End Date</label>
                                <input
                                    type="date"
                                    value={formData.endDate}
                                    onChange={(e) => handleInputChange('endDate', e.target.value)}
                                    className="p-1 border border-gray-400 bg-white text-blue-800 font-bold shadow-inner"
                                    readOnly={!isEditing}
                                />

                                <label className="text-gray-700 font-bold text-right">Days</label>
                                <input
                                    type="text"
                                    value={formData.days}
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
                                    <option value="Pending">Pending</option>
                                    <option value="Approved">Approved</option>
                                    <option value="Rejected">Rejected</option>
                                </select>

                                <label className="text-gray-700 font-bold text-right">Approved By</label>
                                <input
                                    type="text"
                                    value={formData.approvedBy}
                                    onChange={(e) => handleInputChange('approvedBy', e.target.value)}
                                    className="p-1 border border-gray-400 bg-white text-blue-800 font-bold shadow-inner"
                                    readOnly={!isEditing}
                                />

                                <label className="text-gray-700 font-bold text-right">Reason</label>
                                <textarea
                                    value={formData.reason}
                                    onChange={(e) => handleInputChange('reason', e.target.value)}
                                    className="p-1 border border-gray-400 bg-white text-blue-800 font-bold shadow-inner"
                                    readOnly={!isEditing}
                                    rows="2"
                                />

                                <label className="text-gray-700 font-bold text-right">Remarks</label>
                                <textarea
                                    value={formData.remarks}
                                    onChange={(e) => handleInputChange('remarks', e.target.value)}
                                    className="p-1 border border-gray-400 bg-white text-blue-800 font-bold shadow-inner"
                                    readOnly={!isEditing}
                                    rows="2"
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
                        <div className="bg-white border border-gray-400 shadow-inner flex-1 overflow-auto">
                            <table className="w-full border-collapse">
                                <thead className="bg-[#D4D0C8] border-b border-gray-400 text-xs text-gray-700 sticky top-0">
                                    <tr>
                                        <th className="border-r border-gray-400 p-1.5 text-left font-bold">Emp ID</th>
                                        <th className="border-r border-gray-400 p-1.5 text-left font-bold">Name</th>
                                        <th className="border-r border-gray-400 p-1.5 text-left font-bold">Leave Type</th>
                                        <th className="border-r border-gray-400 p-1.5 text-left font-bold">Start Date</th>
                                        <th className="border-r border-gray-400 p-1.5 text-left font-bold">End Date</th>
                                        <th className="border-r border-gray-400 p-1.5 text-left font-bold">Days</th>
                                        <th className="p-1.5 text-left font-bold">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {leaveRecords.map((record) => (
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
                                            <td className="border-r border-gray-200 p-1.5 font-bold">{record.leaveType}</td>
                                            <td className="border-r border-gray-200 p-1.5 font-bold">{record.startDate}</td>
                                            <td className="border-r border-gray-200 p-1.5 font-bold">{record.endDate}</td>
                                            <td className="border-r border-gray-200 p-1.5 font-bold">{record.days}</td>
                                            <td className="p-1.5 font-bold">{record.status}</td>
                                        </tr>
                                    ))}
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

export default LeaveManagement;

