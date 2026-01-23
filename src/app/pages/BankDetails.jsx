import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Save, LogOut, Plus, Edit, RefreshCw, X, Search, Folder } from 'lucide-react';

const BankDetails = () => {
    const navigate = useNavigate();
    const [isEditing, setIsEditing] = useState(false);
    const [selectedRow, setSelectedRow] = useState(null);

    // Form fields state
    const [formData, setFormData] = useState({
        bank: '',
        bankBranch: '',
        companyACNo: '',
        identificationNo: '',
        glAccount: '',
        exportPath: ''
    });

    // Bank accounts table data - matching screenshot
    const [bankAccounts, setBankAccounts] = useState([
        {
            id: 1,
            bank: '',
            branch: 'WESTGATE',
            accountNo: '601980',
            identificationNo: 'ACCOUNTUUT'
        }
    ]);

    const handleInputChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleNew = () => {
        setFormData({
            bank: '',
            bankBranch: '',
            companyACNo: '',
            identificationNo: '',
            glAccount: '',
            exportPath: ''
        });
        setSelectedRow(null);
        setIsEditing(true);
    };

    const handleEnter = () => {
        if (formData.bank && formData.bankBranch && formData.companyACNo) {
            const newAccount = {
                id: bankAccounts.length + 1,
                bank: formData.bank,
                branch: formData.bankBranch,
                accountNo: formData.companyACNo,
                identificationNo: formData.identificationNo
            };
            setBankAccounts(prev => [...prev, newAccount]);
            handleNew();
        }
    };

    const handleEdit = () => {
        if (selectedRow) {
            const account = bankAccounts.find(a => a.id === selectedRow);
            if (account) {
                setFormData({
                    bank: account.bank,
                    bankBranch: account.branch,
                    companyACNo: account.accountNo,
                    identificationNo: account.identificationNo,
                    glAccount: '',
                    exportPath: ''
                });
                setIsEditing(true);
            }
        }
    };

    const handleUpdate = () => {
        if (selectedRow && formData.bank) {
            setBankAccounts(prev => prev.map(account =>
                account.id === selectedRow
                    ? {
                        ...account,
                        bank: formData.bank,
                        branch: formData.bankBranch,
                        accountNo: formData.companyACNo,
                        identificationNo: formData.identificationNo
                    }
                    : account
            ));
            setIsEditing(false);
        }
    };

    const handleDelete = () => {
        if (selectedRow) {
            setBankAccounts(prev => prev.filter(account => account.id !== selectedRow));
            setSelectedRow(null);
            handleNew();
        }
    };

    const handleRowClick = (id) => {
        setSelectedRow(id);
        const account = bankAccounts.find(a => a.id === id);
        if (account) {
            setFormData({
                bank: account.bank,
                bankBranch: account.branch,
                companyACNo: account.accountNo,
                identificationNo: account.identificationNo,
                glAccount: '',
                exportPath: ''
            });
        }
    };

    return (
        <div className="flex flex-col h-full w-full bg-[#EBE9D8] font-sans text-xs">
            {/* Header */}
            <div className="bg-[#D4D0C8] border-b border-gray-400 px-2 py-1">
                <span className="font-bold text-gray-700">Bank Information</span>
            </div>

            {/* Content Area */}
            <div className="flex-1 p-4 overflow-auto">
                <div className="flex gap-4 h-full">
                    {/* Left Side - Form Fields */}
                    <div className="flex flex-col gap-4">
                        <fieldset className="border border-gray-400 p-3 rounded relative">
                            <legend className="text-white bg-[#316AC5] px-2 py-0.5 font-bold absolute -top-3 left-2 border border-gray-500">
                                Electronic Transfer Information
                            </legend>

                            <div className="grid grid-cols-[140px_200px] gap-y-3 gap-x-4 items-center mt-2">
                                <label className="text-gray-700 font-bold text-right">Bank</label>
                                <input
                                    type="text"
                                    value={formData.bank}
                                    onChange={(e) => handleInputChange('bank', e.target.value)}
                                    className="p-1 border border-gray-400 bg-white text-blue-800 font-bold shadow-inner"
                                    readOnly={!isEditing}
                                />

                                <label className="text-gray-700 font-bold text-right">Bank Branch</label>
                                <input
                                    type="text"
                                    value={formData.bankBranch}
                                    onChange={(e) => handleInputChange('bankBranch', e.target.value)}
                                    className="p-1 border border-gray-400 bg-white text-blue-800 font-bold shadow-inner"
                                    readOnly={!isEditing}
                                />

                                <label className="text-gray-700 font-bold text-right">Company A/C No.</label>
                                <input
                                    type="text"
                                    value={formData.companyACNo}
                                    onChange={(e) => handleInputChange('companyACNo', e.target.value)}
                                    className="p-1 border border-gray-400 bg-white text-blue-800 font-bold shadow-inner"
                                    readOnly={!isEditing}
                                />

                                <label className="text-gray-700 font-bold text-right">Identification No.</label>
                                <input
                                    type="text"
                                    value={formData.identificationNo}
                                    onChange={(e) => handleInputChange('identificationNo', e.target.value)}
                                    className="p-1 border border-gray-400 bg-white text-blue-800 font-bold shadow-inner"
                                    readOnly={!isEditing}
                                />

                                <label className="text-gray-700 font-bold text-right">GL Account</label>
                                <input
                                    type="text"
                                    value={formData.glAccount}
                                    onChange={(e) => handleInputChange('glAccount', e.target.value)}
                                    className="p-1 border border-gray-400 bg-white text-blue-800 font-bold shadow-inner"
                                    readOnly={!isEditing}
                                />

                                <label className="text-gray-700 font-bold text-right">Export Path</label>
                                <input
                                    type="text"
                                    value={formData.exportPath}
                                    onChange={(e) => handleInputChange('exportPath', e.target.value)}
                                    className="p-1 border border-gray-400 bg-white text-blue-800 font-bold shadow-inner"
                                    readOnly={!isEditing}
                                />
                            </div>
                        </fieldset>
                    </div>

                    {/* Middle - Action Buttons - Order: Search, Delete, Update, Edit, Enter, New */}
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
                                        <th className="border-r border-gray-400 p-1.5 text-left font-bold">Bank</th>
                                        <th className="border-r border-gray-400 p-1.5 text-left font-bold">Branch</th>
                                        <th className="border-r border-gray-400 p-1.5 text-left font-bold">AccountNo</th>
                                        <th className="p-1.5 text-left font-bold">Identification No.</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {bankAccounts.map((account) => (
                                        <tr
                                            key={account.id}
                                            onClick={() => handleRowClick(account.id)}
                                            className={`cursor-pointer ${selectedRow === account.id
                                                    ? 'bg-[#316AC5] text-white'
                                                    : 'odd:bg-blue-50 even:bg-white hover:bg-yellow-100'
                                                }`}
                                        >
                                            <td className="border-r border-gray-200 p-1.5 font-bold">{account.bank}</td>
                                            <td className="border-r border-gray-200 p-1.5 font-bold">{account.branch}</td>
                                            <td className="border-r border-gray-200 p-1.5 font-bold">{account.accountNo}</td>
                                            <td className="p-1.5 font-bold">{account.identificationNo}</td>
                                        </tr>
                                    ))}
                                    {/* Empty rows for visual consistency */}
                                    {[...Array(Math.max(0, 10 - bankAccounts.length))].map((_, i) => (
                                        <tr key={`empty-${i}`} className="odd:bg-blue-50 even:bg-white h-7">
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

export default BankDetails;
