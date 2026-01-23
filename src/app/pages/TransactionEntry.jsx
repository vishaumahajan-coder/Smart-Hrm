import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, Save, X, Upload, Download, LogOut } from 'lucide-react';

const TransactionEntry = () => {
    const navigate = useNavigate();
    const [selectedRow, setSelectedRow] = useState(null);

    // Form fields state
    const [formData, setFormData] = useState({
        employeeNo: '',
        code: '',
        type: '',
        department: '',
        branch: '',
        location: '',
        glAC: '',
        notes: '',
        transDate: '23/01/2026',
        amount: '0.00',
        rate: '0.000000'
    });

    // Transaction entries table data
    const [transactions, setTransactions] = useState([]);

    const handleInputChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleNew = () => {
        setFormData({
            employeeNo: '',
            code: '',
            type: '',
            department: '',
            branch: '',
            location: '',
            glAC: '',
            notes: '',
            transDate: '23/01/2026',
            amount: '0.00',
            rate: '0.000000'
        });
        setSelectedRow(null);
    };

    const handleEnter = () => {
        if (formData.employeeNo && formData.code) {
            const newTransaction = {
                id: transactions.length + 1,
                rate: formData.rate,
                quantity: '1',
                duty: '',
                trans: formData.code,
                employee: formData.employeeNo,
                department: formData.department,
                branch: formData.branch,
                locationGL: formData.location,
                loc: ''
            };
            setTransactions(prev => [...prev, newTransaction]);
            handleNew();
        }
    };

    const handleDelete = () => {
        if (selectedRow) {
            setTransactions(prev => prev.filter(t => t.id !== selectedRow));
            setSelectedRow(null);
            handleNew();
        }
    };

    const handleRowClick = (id) => {
        setSelectedRow(id);
    };

    return (
        <div className="flex flex-col h-full w-full bg-[#EBE9D8] font-sans text-xs">
            {/* Header */}
            <div className="bg-[#D4D0C8] border-b border-gray-400 px-2 py-1">
                <span className="font-bold text-gray-700">Transaction Entry</span>
            </div>

            {/* Content Area */}
            <div className="flex-1 p-2 overflow-auto">
                <div className="flex gap-2 h-full">
                    {/* Left Side - Form Fields */}
                    <div className="flex flex-col gap-2 w-[180px]">
                        <div className="flex flex-col gap-1">
                            <label className="text-gray-700 font-bold">Employee No.</label>
                            <div className="flex gap-1">
                                <input
                                    type="text"
                                    value={formData.employeeNo}
                                    onChange={(e) => handleInputChange('employeeNo', e.target.value)}
                                    className="flex-1 p-1 border border-gray-400 bg-white text-blue-800 font-bold shadow-inner"
                                />
                                <button className="px-2 border border-gray-400 bg-[#E0DCCF] hover:bg-gray-200">...</button>
                            </div>
                        </div>

                        <div className="flex flex-col gap-1">
                            <label className="text-gray-700 font-bold">Code</label>
                            <input
                                type="text"
                                value={formData.code}
                                onChange={(e) => handleInputChange('code', e.target.value)}
                                className="p-1 border border-gray-400 bg-white text-blue-800 font-bold shadow-inner"
                            />
                        </div>

                        <div className="flex flex-col gap-1">
                            <label className="text-gray-700 font-bold">Type</label>
                            <input
                                type="text"
                                value={formData.type}
                                onChange={(e) => handleInputChange('type', e.target.value)}
                                className="p-1 border border-gray-400 bg-white text-blue-800 font-bold shadow-inner"
                            />
                        </div>

                        <div className="flex flex-col gap-1">
                            <label className="text-gray-700 font-bold">Department</label>
                            <select
                                value={formData.department}
                                onChange={(e) => handleInputChange('department', e.target.value)}
                                className="p-1 border border-gray-400 bg-white text-blue-800 font-bold shadow-inner"
                            >
                                <option value="">Select...</option>
                                <option value="HR">HR</option>
                                <option value="Finance">Finance</option>
                                <option value="IT">IT</option>
                            </select>
                        </div>

                        <div className="flex flex-col gap-1">
                            <label className="text-gray-700 font-bold">Branch</label>
                            <select
                                value={formData.branch}
                                onChange={(e) => handleInputChange('branch', e.target.value)}
                                className="p-1 border border-gray-400 bg-white text-blue-800 font-bold shadow-inner"
                            >
                                <option value="">Select...</option>
                                <option value="Main">Main</option>
                                <option value="Branch1">Branch 1</option>
                            </select>
                        </div>

                        <div className="flex flex-col gap-1">
                            <label className="text-gray-700 font-bold">Location</label>
                            <select
                                value={formData.location}
                                onChange={(e) => handleInputChange('location', e.target.value)}
                                className="p-1 border border-gray-400 bg-white text-blue-800 font-bold shadow-inner"
                            >
                                <option value="">Select...</option>
                            </select>
                        </div>

                        <div className="flex flex-col gap-1">
                            <label className="text-gray-700 font-bold">GL A/C</label>
                            <select
                                value={formData.glAC}
                                onChange={(e) => handleInputChange('glAC', e.target.value)}
                                className="p-1 border border-gray-400 bg-white text-blue-800 font-bold shadow-inner"
                            >
                                <option value="">Select...</option>
                            </select>
                        </div>

                        <div className="flex flex-col gap-1">
                            <label className="text-gray-700 font-bold">Notes</label>
                            <input
                                type="text"
                                value={formData.notes}
                                onChange={(e) => handleInputChange('notes', e.target.value)}
                                className="p-1 border border-gray-400 bg-white text-blue-800 font-bold shadow-inner"
                            />
                        </div>

                        <div className="flex flex-col gap-1">
                            <label className="text-gray-700 font-bold">Trans. Date</label>
                            <input
                                type="text"
                                value={formData.transDate}
                                onChange={(e) => handleInputChange('transDate', e.target.value)}
                                className="p-1 border border-gray-400 bg-white text-blue-800 font-bold shadow-inner"
                            />
                        </div>

                        <div className="mt-2 p-2 border border-gray-400 bg-[#D4D0C8]">
                            <label className="text-blue-600 font-bold">Filter Options</label>
                            <div className="flex items-center gap-1 mt-1">
                                <span className="text-gray-700">&gt;</span>
                            </div>
                        </div>
                    </div>

                    {/* Middle - Amount/Rate and Action Buttons */}
                    <div className="flex flex-col gap-2 w-[120px]">
                        <div className="flex flex-col gap-1">
                            <label className="text-gray-700 font-bold">Amount</label>
                            <input
                                type="text"
                                value={formData.amount}
                                onChange={(e) => handleInputChange('amount', e.target.value)}
                                className="p-1 border border-gray-400 bg-white text-blue-800 font-bold shadow-inner text-right"
                            />
                        </div>

                        <div className="flex flex-col gap-1">
                            <label className="text-gray-700 font-bold">Rate</label>
                            <input
                                type="text"
                                value={formData.rate}
                                onChange={(e) => handleInputChange('rate', e.target.value)}
                                className="p-1 border border-gray-400 bg-white text-blue-800 font-bold shadow-inner text-right"
                            />
                        </div>

                        <div className="flex flex-col gap-1 mt-4">
                            <button
                                onClick={handleNew}
                                className="flex items-center justify-center gap-1 p-2 border border-gray-400 border-b-2 border-r-2 border-gray-500 bg-[#E0DCCF] hover:bg-gray-200"
                            >
                                <Plus size={16} className="text-yellow-600" />
                                <span className="font-bold">New</span>
                            </button>

                            <button
                                onClick={handleEnter}
                                className="flex items-center justify-center gap-1 p-2 border border-gray-400 border-b-2 border-r-2 border-gray-500 bg-[#E0DCCF] hover:bg-gray-200"
                            >
                                <Save size={16} className="text-gray-600" />
                                <span className="font-bold">Enter</span>
                            </button>

                            <button
                                onClick={handleDelete}
                                className="flex items-center justify-center gap-1 p-2 border border-gray-400 border-b-2 border-r-2 border-gray-500 bg-[#E0DCCF] hover:bg-gray-200"
                            >
                                <X size={16} className="text-red-600" />
                                <span className="font-bold">Delete</span>
                            </button>
                        </div>
                    </div>

                    {/* Right Side - Table */}
                    <div className="flex-1 flex flex-col">
                        <div className="bg-white border border-gray-400 shadow-inner flex-1 overflow-auto">
                            <table className="w-full border-collapse text-xs">
                                <thead className="bg-[#D4D0C8] border-b border-gray-400 text-gray-700 sticky top-0">
                                    <tr>
                                        <th className="border-r border-gray-400 p-1 text-left font-bold min-w-[60px]">Rate</th>
                                        <th className="border-r border-gray-400 p-1 text-left font-bold min-w-[60px]">Quantity</th>
                                        <th className="border-r border-gray-400 p-1 text-left font-bold min-w-[50px]">Duty</th>
                                        <th className="border-r border-gray-400 p-1 text-left font-bold min-w-[50px]">Trans.</th>
                                        <th className="border-r border-gray-400 p-1 text-left font-bold min-w-[70px]">Employee</th>
                                        <th className="border-r border-gray-400 p-1 text-left font-bold min-w-[80px]">Department</th>
                                        <th className="border-r border-gray-400 p-1 text-left font-bold min-w-[60px]">Branch</th>
                                        <th className="border-r border-gray-400 p-1 text-left font-bold min-w-[80px]">Location GL</th>
                                        <th className="p-1 text-left font-bold min-w-[50px]">Loc.</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {transactions.map((transaction) => (
                                        <tr
                                            key={transaction.id}
                                            onClick={() => handleRowClick(transaction.id)}
                                            className={`cursor-pointer ${selectedRow === transaction.id
                                                ? 'bg-[#316AC5] text-white'
                                                : 'odd:bg-blue-50 even:bg-white hover:bg-yellow-100'
                                                }`}
                                        >
                                            <td className="border-r border-gray-200 p-1">{transaction.rate}</td>
                                            <td className="border-r border-gray-200 p-1">{transaction.quantity}</td>
                                            <td className="border-r border-gray-200 p-1">{transaction.duty}</td>
                                            <td className="border-r border-gray-200 p-1">{transaction.trans}</td>
                                            <td className="border-r border-gray-200 p-1">{transaction.employee}</td>
                                            <td className="border-r border-gray-200 p-1">{transaction.department}</td>
                                            <td className="border-r border-gray-200 p-1">{transaction.branch}</td>
                                            <td className="border-r border-gray-200 p-1">{transaction.locationGL}</td>
                                            <td className="p-1">{transaction.loc}</td>
                                        </tr>
                                    ))}
                                    {/* Empty rows for visual consistency */}
                                    {[...Array(Math.max(0, 15 - transactions.length))].map((_, i) => (
                                        <tr key={`empty-${i}`} className="odd:bg-blue-50 even:bg-white h-6">
                                            <td className="border-r border-gray-200"></td>
                                            <td className="border-r border-gray-200"></td>
                                            <td className="border-r border-gray-200"></td>
                                            <td className="border-r border-gray-200"></td>
                                            <td className="border-r border-gray-200"></td>
                                            <td className="border-r border-gray-200"></td>
                                            <td className="border-r border-gray-200"></td>
                                            <td className="border-r border-gray-200"></td>
                                            <td></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Far Right - Import/Export/Exit Buttons */}
                    <div className="flex flex-col gap-2 w-20">
                        <button
                            className="flex flex-col items-center justify-center p-2 border border-gray-400 border-b-2 border-r-2 border-gray-500 bg-[#E0DCCF] hover:bg-gray-200"
                        >
                            <Upload size={20} className="text-green-600 mb-1" />
                            <span className="font-bold text-xs">Import</span>
                        </button>

                        <button
                            className="flex flex-col items-center justify-center p-2 border border-gray-400 border-b-2 border-r-2 border-gray-500 bg-[#E0DCCF] hover:bg-gray-200"
                        >
                            <Download size={20} className="text-blue-600 mb-1" />
                            <span className="font-bold text-xs">Export</span>
                        </button>

                        <div className="flex-1"></div>

                        <button
                            onClick={() => navigate(-1)}
                            className="flex flex-col items-center justify-center p-2 border border-gray-400 border-b-2 border-r-2 border-gray-500 bg-[#E0DCCF] hover:bg-gray-200"
                        >
                            <LogOut size={20} className="text-green-600 mb-1" />
                            <span className="font-bold text-xs">Exit</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TransactionEntry;
