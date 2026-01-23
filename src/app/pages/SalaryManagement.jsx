import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Save, LogOut, Plus, Edit, RefreshCw, X, Search, Folder, DollarSign } from 'lucide-react';

const SalaryManagement = () => {
    const navigate = useNavigate();
    const [isEditing, setIsEditing] = useState(false);
    const [selectedRow, setSelectedRow] = useState(null);

    // Form fields state
    const [formData, setFormData] = useState({
        employeeId: '',
        employeeName: '',
        basicSalary: '',
        allowances: '',
        deductions: '',
        netSalary: '',
        month: '',
        year: '',
        status: 'Pending'
    });

    // Salary records
    const [salaryRecords, setSalaryRecords] = useState([
        {
            id: 1,
            employeeId: 'EMP001',
            employeeName: 'John Doe',
            basicSalary: '40000',
            allowances: '10000',
            deductions: '5000',
            netSalary: '45000',
            month: 'January',
            year: '2026',
            status: 'Paid'
        },
        {
            id: 2,
            employeeId: 'EMP002',
            employeeName: 'Jane Smith',
            basicSalary: '50000',
            allowances: '10000',
            deductions: '6000',
            netSalary: '54000',
            month: 'January',
            year: '2026',
            status: 'Paid'
        }
    ]);

    const handleInputChange = (field, value) => {
        setFormData(prev => {
            const updated = { ...prev, [field]: value };
            // Auto calculate net salary
            if (field === 'basicSalary' || field === 'allowances' || field === 'deductions') {
                const basic = parseFloat(updated.basicSalary) || 0;
                const allow = parseFloat(updated.allowances) || 0;
                const deduct = parseFloat(updated.deductions) || 0;
                updated.netSalary = (basic + allow - deduct).toFixed(2);
            }
            return updated;
        });
    };

    const handleNew = () => {
        setFormData({
            employeeId: '',
            employeeName: '',
            basicSalary: '',
            allowances: '',
            deductions: '',
            netSalary: '',
            month: new Date().toLocaleString('default', { month: 'long' }),
            year: new Date().getFullYear().toString(),
            status: 'Pending'
        });
        setSelectedRow(null);
        setIsEditing(true);
    };

    const handleEnter = () => {
        if (formData.employeeId && formData.basicSalary) {
            const newRecord = {
                id: salaryRecords.length + 1,
                ...formData
            };
            setSalaryRecords(prev => [...prev, newRecord]);
            handleNew();
        }
    };

    const handleEdit = () => {
        if (selectedRow) {
            const record = salaryRecords.find(r => r.id === selectedRow);
            if (record) {
                setFormData(record);
                setIsEditing(true);
            }
        }
    };

    const handleUpdate = () => {
        if (selectedRow && formData.employeeId) {
            setSalaryRecords(prev => prev.map(record =>
                record.id === selectedRow ? { ...formData } : record
            ));
            setIsEditing(false);
        }
    };

    const handleDelete = () => {
        if (selectedRow) {
            setSalaryRecords(prev => prev.filter(record => record.id !== selectedRow));
            setSelectedRow(null);
            handleNew();
        }
    };

    const handleRowClick = (id) => {
        setSelectedRow(id);
        const record = salaryRecords.find(r => r.id === id);
        if (record) {
            setFormData(record);
        }
    };

    return (
        <div className="flex flex-col h-full w-full bg-[#EBE9D8] font-sans text-xs">
            {/* Header */}
            <div className="bg-[#D4D0C8] border-b border-gray-400 px-2 py-1">
                <span className="font-bold text-gray-700">Salary Management</span>
            </div>

            {/* Content Area */}
            <div className="flex-1 p-4 overflow-auto">
                <div className="flex gap-4 h-full">
                    {/* Left Side - Form Fields */}
                    <div className="flex flex-col gap-4 w-80">
                        <fieldset className="border border-blue-200 p-3 rounded relative bg-blue-50/50">
                            <legend className="text-white bg-blue-600 px-2 py-0.5 font-bold absolute -top-3 left-2 border border-blue-700 shadow-sm text-xs">
                                Salary Configuration (Auto-Calculated)
                            </legend>

                            <div className="grid grid-cols-[120px_1fr] gap-y-3 gap-x-4 items-center mt-2">
                                <label className="text-gray-700 font-bold text-right">Employee ID</label>
                                <input
                                    type="text"
                                    value={formData.employeeId}
                                    readOnly
                                    className="p-1 border border-gray-300 bg-gray-100 text-gray-600 font-bold shadow-inner cursor-not-allowed"
                                />

                                <label className="text-gray-700 font-bold text-right">Employee Name</label>
                                <input
                                    type="text"
                                    value={formData.employeeName}
                                    readOnly
                                    className="p-1 border border-gray-300 bg-gray-100 text-gray-600 font-bold shadow-inner cursor-not-allowed"
                                />

                                <label className="text-gray-700 font-bold text-right">Month</label>
                                <input
                                    type="text"
                                    value={formData.month}
                                    readOnly
                                    className="p-1 border border-gray-300 bg-gray-100 text-gray-600 font-bold shadow-inner cursor-not-allowed"
                                />

                                <label className="text-gray-700 font-bold text-right">Year</label>
                                <input
                                    type="text"
                                    value={formData.year}
                                    readOnly
                                    className="p-1 border border-gray-300 bg-gray-100 text-gray-600 font-bold shadow-inner cursor-not-allowed"
                                />

                                <div className="col-span-2 border-t border-blue-200 my-1"></div>

                                <label className="text-gray-700 font-bold text-right">Basic Salary</label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        value={formData.basicSalary}
                                        readOnly
                                        className="w-full p-1 border border-gray-300 bg-gray-100 text-gray-600 font-bold shadow-inner cursor-not-allowed"
                                    />
                                    <span className="absolute right-1 top-1 text-[8px] bg-gray-200 text-gray-500 px-1 rounded">LOCKED</span>
                                </div>

                                <label className="text-gray-700 font-bold text-right">Allowances</label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        value={formData.allowances}
                                        readOnly
                                        className="w-full p-1 border border-gray-300 bg-gray-100 text-gray-600 font-bold shadow-inner cursor-not-allowed"
                                    />
                                    <span className="absolute right-1 top-1 text-[8px] bg-gray-200 text-gray-500 px-1 rounded">HR DATA</span>
                                </div>

                                <label className="text-gray-700 font-bold text-right">Deductions</label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        value={formData.deductions}
                                        readOnly
                                        className="w-full p-1 border border-gray-300 bg-gray-100 text-gray-600 font-bold shadow-inner cursor-not-allowed"
                                    />
                                    <span className="absolute right-1 top-1 text-[8px] bg-gray-200 text-gray-500 px-1 rounded">HR DATA</span>
                                </div>

                                <label className="text-blue-900 font-black text-right">Net Salary</label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        value={formData.netSalary}
                                        readOnly
                                        className="w-full p-1 border border-blue-300 bg-blue-100 text-blue-900 font-black shadow-inner"
                                    />
                                    <span className="absolute right-1 top-1 text-[8px] bg-blue-200 text-blue-800 px-1 rounded">AUTO</span>
                                </div>

                                <div className="col-span-2 mt-2">
                                    <p className="text-[9px] text-gray-500 italic text-center border p-1 rounded bg-yellow-50 border-yellow-200">
                                        <span className="font-bold">Note:</span> Salary is calculated automatically from HR data and shared with Payroll via integration. Manual entry is disabled.
                                    </p>
                                </div>

                                <label className="text-gray-700 font-bold text-right mt-2">Status</label>
                                <select
                                    value={formData.status}
                                    onChange={(e) => handleInputChange('status', e.target.value)}
                                    className="p-1 border border-gray-400 bg-white text-blue-800 font-bold shadow-inner mt-2"
                                    disabled={!isEditing}
                                >
                                    <option value="Pending">Pending</option>
                                    <option value="Paid">Paid</option>
                                    <option value="Hold">Hold</option>
                                </select>
                            </div>
                        </fieldset>
                    </div>

                    {/* Middle - Action Buttons */}
                    <div className="flex flex-col gap-2 w-20">
                        <button
                            onClick={() => {/* Search logic */ }}
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
                                        <th className="border-r border-gray-400 p-1.5 text-left font-bold">Month</th>
                                        <th className="border-r border-gray-400 p-1.5 text-left font-bold">Basic</th>
                                        <th className="border-r border-gray-400 p-1.5 text-left font-bold">Allowances</th>
                                        <th className="border-r border-gray-400 p-1.5 text-left font-bold">Deductions</th>
                                        <th className="border-r border-gray-400 p-1.5 text-left font-bold">Net Salary</th>
                                        <th className="p-1.5 text-left font-bold">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {salaryRecords.map((record) => (
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
                                            <td className="border-r border-gray-200 p-1.5 font-bold">{record.month} {record.year}</td>
                                            <td className="border-r border-gray-200 p-1.5 font-bold">{record.basicSalary}</td>
                                            <td className="border-r border-gray-200 p-1.5 font-bold">{record.allowances}</td>
                                            <td className="border-r border-gray-200 p-1.5 font-bold">{record.deductions}</td>
                                            <td className="border-r border-gray-200 p-1.5 font-bold">{record.netSalary}</td>
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
                            onClick={() => {/* Save logic */ }}
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

export default SalaryManagement;

