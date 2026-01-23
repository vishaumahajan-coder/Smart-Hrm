import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Save, LogOut, Plus, Edit, RefreshCw, X, Search, Folder,
    User, DollarSign, ShieldCheck, Phone, MapPin, Briefcase,
    CreditCard, Percent, FileText, Mail
} from 'lucide-react';

const EmployeeManagement = () => {
    const navigate = useNavigate();
    const [isEditing, setIsEditing] = useState(true); // Default to editable as per request
    const [selectedRow, setSelectedRow] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [activeTab, setActiveTab] = useState('Personal');

    // Enhanced Form fields state
    const [formData, setFormData] = useState({
        employeeId: '',
        firstName: '',
        lastName: '',
        trn: '', // Tax Registration Number (Used for payslip password)
        email: '',
        phone: '',
        street: '',
        city: '',
        parish: '',
        country: 'Jamaica',
        emergencyName: '',
        emergencyRelationship: '',
        emergencyPhone: '',
        department: '',
        designation: '',
        joinDate: '',
        status: 'Active',
        // Payroll Configuration
        baseSalary: '0',
        paymentMethod: 'Bank Transfer',
        bankAccount: '',
        // Additions
        travelAllowance: '0',
        lunchAllowance: '0',
        bonus: '0',
        // Deductions
        healthInsurance: '0',
        lifeInsurance: '0',
        staffLoan: '0',
        pensionContribution: '0',
        nisExempt: false,
        nhtExempt: false,
    });

    // Employees table data
    const [employees, setEmployees] = useState([
        {
            id: 1,
            employeeId: 'EMP001',
            firstName: 'John',
            lastName: 'Doe',
            trn: '123-456-789',
            email: 'john.doe@company.com',
            phone: '876-555-0101',
            department: 'IT',
            designation: 'Software Developer',
            status: 'Active',
            baseSalary: '250000',
            lunchAllowance: '15000',
            healthInsurance: '5000'
        },
        {
            id: 2,
            employeeId: 'EMP002',
            firstName: 'Jane',
            lastName: 'Smith',
            trn: '987-654-321',
            email: 'jane.smith@company.com',
            phone: '876-555-0202',
            department: 'HR',
            designation: 'HR Manager',
            status: 'Active',
            baseSalary: '300000',
            lunchAllowance: '15000',
            healthInsurance: '5000'
        }
    ]);

    const handleInputChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleNew = () => {
        setFormData({
            employeeId: '', firstName: '', lastName: '', trn: '', email: '', phone: '',
            street: '', city: '', parish: '', country: 'Jamaica',
            emergencyName: '', emergencyRelationship: '', emergencyPhone: '', department: '', designation: '', joinDate: '',
            status: 'Active', baseSalary: '0', paymentMethod: 'Bank Transfer', bankAccount: '',
            lunchAllowance: '0', travelAllowance: '0', bonus: '0', healthInsurance: '0',
            lifeInsurance: '0', staffLoan: '0', pensionContribution: '0', nisExempt: false, nhtExempt: false,
        });
        setSelectedRow(null);
        setIsEditing(true);
    };

    const handleEnter = () => {
        if (formData.employeeId && formData.firstName && formData.lastName) {
            const newEmployee = { id: employees.length + 1, ...formData };
            setEmployees(prev => [...prev, newEmployee]);
            handleNew();
        }
    };

    const handleUpdate = () => {
        if (selectedRow) {
            setEmployees(prev => prev.map(emp => emp.id === selectedRow ? { ...formData } : emp));
        }
    };

    const handleDelete = () => {
        if (selectedRow) {
            setEmployees(prev => prev.filter(emp => emp.id !== selectedRow));
            setSelectedRow(null);
            handleNew();
        }
    };

    const handleRowClick = (id) => {
        setSelectedRow(id);
        const employee = employees.find(e => e.id === id);
        if (employee) setFormData({ ...formData, ...employee });
    };

    const filteredEmployees = employees.filter(emp =>
        emp.employeeId.toLowerCase().includes(searchTerm.toLowerCase()) ||
        emp.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        emp.lastName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="flex flex-col h-full w-full bg-[#EBE9D8] font-sans">
            {/* Header / Title Bar */}
            <div className="bg-[#D4D0C8] border-b border-gray-400 px-4 py-2 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <User className="text-blue-700" size={16} />
                    <span className="font-black text-gray-700 text-sm uppercase italic">Employee Central - HRM & Payroll Integration</span>
                </div>
                <div className="flex items-center gap-4">
                    <span className="text-[10px] font-bold text-gray-500 uppercase">Status: {isEditing ? 'Editing Mode' : 'View Mode'}</span>
                </div>
            </div>

            {/* Content Area */}
            <div className="flex-1 p-2 md:p-4 overflow-hidden flex flex-col">
                <div className="flex flex-col lg:flex-row gap-4 flex-1">

                    {/* Left Side - Comprehensive Form */}
                    <div className="flex flex-col gap-2 w-full lg:w-[450px] bg-white border border-gray-400 shadow-inner">

                        {/* Tab Navigation */}
                        <div className="bg-[#D4D0C8] flex border-b border-gray-400 overflow-x-auto no-scrollbar">
                            {[
                                { id: 'Personal', icon: <User size={14} /> },
                                { id: 'Employment', icon: <Briefcase size={14} /> },
                                { id: 'Payroll', icon: <DollarSign size={14} /> },
                                { id: 'Additions', icon: <Plus size={14} /> },
                                { id: 'Deductions', icon: <Percent size={14} /> },
                                { id: 'Emergency', icon: <Phone size={14} /> }
                            ].map(tab => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`px-4 py-2 flex items-center gap-2 text-[10px] font-black uppercase tracking-tighter transition-all shrink-0 ${activeTab === tab.id ? 'bg-[#316AC5] text-white border-b-2 border-white' : 'text-gray-600 hover:bg-gray-200'}`}
                                >
                                    {tab.icon} {tab.id}
                                </button>
                            ))}
                        </div>

                        {/* Form Content */}
                        <div className="p-4 overflow-y-auto flex-1 h-[400px] lg:h-auto">

                            {activeTab === 'Personal' && (
                                <div className="flex flex-col gap-4">
                                    <h4 className="border-b border-gray-200 text-blue-900 font-black italic text-xs pb-1 flex items-center gap-2">
                                        <MapPin size={14} /> Residence & Identity
                                    </h4>
                                    <div className="grid grid-cols-[100px_1fr] gap-3 items-center">
                                        <label className="text-[10px] font-black text-gray-500 uppercase tracking-tighter text-right">Employee ID</label>
                                        <input type="text" value={formData.employeeId} onChange={(e) => handleInputChange('employeeId', e.target.value)} className="p-1 border border-gray-300 bg-gray-50 text-blue-800 font-bold" />

                                        <label className="text-[10px] font-black text-gray-500 uppercase tracking-tighter text-right">First Name</label>
                                        <input type="text" value={formData.firstName} onChange={(e) => handleInputChange('firstName', e.target.value)} className="p-1 border border-gray-300 bg-gray-50 text-blue-800 font-bold" />

                                        <label className="text-[10px] font-black text-gray-500 uppercase tracking-tighter text-right">Last Name</label>
                                        <input type="text" value={formData.lastName} onChange={(e) => handleInputChange('lastName', e.target.value)} className="p-1 border border-gray-300 bg-gray-50 text-blue-800 font-bold" />

                                        <label className="text-[10px] font-black text-blue-700 uppercase tracking-tighter text-right flex items-center justify-end gap-1">
                                            TRN No. <ShieldCheck size={10} />
                                        </label>
                                        <input type="text" value={formData.trn} placeholder="XXX-XXX-XXX" onChange={(e) => handleInputChange('trn', e.target.value)} className="p-1 border border-blue-200 bg-blue-50 text-blue-900 font-black shadow-inner" />

                                        <label className="text-[10px] font-black text-gray-500 uppercase tracking-tighter text-right">Email Address</label>
                                        <input type="email" value={formData.email} onChange={(e) => handleInputChange('email', e.target.value)} className="p-1 border border-gray-300 bg-gray-50 text-blue-800 font-bold" />

                                        <label className="text-[10px] font-black text-gray-500 uppercase tracking-tighter text-right">Street Address</label>
                                        <textarea rows="2" value={formData.street} onChange={(e) => handleInputChange('street', e.target.value)} className="p-1 border border-gray-300 bg-gray-50 text-blue-800 font-bold text-[10px]"></textarea>

                                        <label className="text-[10px] font-black text-gray-500 uppercase tracking-tighter text-right">City / Town</label>
                                        <input type="text" value={formData.city} onChange={(e) => handleInputChange('city', e.target.value)} className="p-1 border border-gray-300 bg-gray-50 text-blue-800 font-bold" />

                                        <label className="text-[10px] font-black text-gray-500 uppercase tracking-tighter text-right">Parish</label>
                                        <select value={formData.parish} onChange={(e) => handleInputChange('parish', e.target.value)} className="p-1 border border-gray-300 bg-gray-50 font-bold text-[10px]">
                                            <option value="">Select Parish</option>
                                            <option value="Kingston">Kingston</option>
                                            <option value="St. Andrew">St. Andrew</option>
                                            <option value="St. Catherine">St. Catherine</option>
                                            <option value="Clarendon">Clarendon</option>
                                            <option value="Manchester">Manchester</option>
                                            <option value="St. Elizabeth">St. Elizabeth</option>
                                            <option value="Westmoreland">Westmoreland</option>
                                            <option value="Hanover">Hanover</option>
                                            <option value="St. James">St. James</option>
                                            <option value="Trelawny">Trelawny</option>
                                            <option value="St. Ann">St. Ann</option>
                                            <option value="St. Mary">St. Mary</option>
                                            <option value="Portland">Portland</option>
                                            <option value="St. Thomas">St. Thomas</option>
                                        </select>

                                        <label className="text-[10px] font-black text-gray-500 uppercase tracking-tighter text-right">Country</label>
                                        <input type="text" value={formData.country} readOnly className="p-1 border border-gray-300 bg-gray-100 text-gray-600 font-bold cursor-not-allowed" />
                                    </div>
                                </div>
                            )}

                            {activeTab === 'Employment' && (
                                <div className="flex flex-col gap-4">
                                    <h4 className="border-b border-gray-200 text-blue-900 font-black italic text-xs pb-1 flex items-center gap-2">
                                        <Briefcase size={14} /> Organization Role
                                    </h4>
                                    <div className="grid grid-cols-[100px_1fr] gap-3 items-center">
                                        <label className="text-[10px] font-black text-gray-500 uppercase tracking-tighter text-right">Department</label>
                                        <select value={formData.department} onChange={(e) => handleInputChange('department', e.target.value)} className="p-1 border border-gray-300 bg-gray-50 font-bold">
                                            <option value="">Select Dept</option>
                                            <option value="IT">Management Information Systems</option>
                                            <option value="HR">Human Resources</option>
                                            <option value="Finance">Finance & Control</option>
                                        </select>

                                        <label className="text-[10px] font-black text-gray-500 uppercase tracking-tighter text-right">Designation</label>
                                        <input type="text" value={formData.designation} onChange={(e) => handleInputChange('designation', e.target.value)} className="p-1 border border-gray-300 bg-gray-50 font-bold" />

                                        <label className="text-[10px] font-black text-gray-500 uppercase tracking-tighter text-right">Join Date</label>
                                        <input type="date" value={formData.joinDate} onChange={(e) => handleInputChange('joinDate', e.target.value)} className="p-1 border border-gray-300 bg-gray-50 font-bold" />

                                        <label className="text-[10px] font-black text-gray-500 uppercase tracking-tighter text-right">Status</label>
                                        <select value={formData.status} onChange={(e) => handleInputChange('status', e.target.value)} className="p-1 border border-gray-300 bg-gray-50 font-bold">
                                            <option value="Active">Active Duty</option>
                                            <option value="On Leave">Statutory Leave</option>
                                            <option value="Inactive">Separated / Quit</option>
                                        </select>
                                    </div>
                                </div>
                            )}

                            {activeTab === 'Payroll' && (
                                <div className="flex flex-col gap-4">
                                    <h4 className="border-b border-gray-200 text-green-700 font-black italic text-xs pb-1 flex items-center gap-2">
                                        <DollarSign size={14} /> Salary Base & Disbursement
                                    </h4>
                                    <div className="grid grid-cols-[100px_1fr] gap-3 items-center">
                                        <label className="text-[10px] font-black text-gray-500 uppercase tracking-tighter text-right">Base Salary (JMD)</label>
                                        <input type="number" value={formData.baseSalary} onChange={(e) => handleInputChange('baseSalary', e.target.value)} className="p-1 border border-gray-300 bg-gray-50 font-black text-green-700 text-sm italic" />

                                        <label className="text-[10px] font-black text-gray-500 uppercase tracking-tighter text-right">Payment Method</label>
                                        <select value={formData.paymentMethod} onChange={(e) => handleInputChange('paymentMethod', e.target.value)} className="p-1 border border-gray-300 bg-gray-50 font-bold">
                                            <option>Bank Transfer (ACH)</option>
                                            <option>Cheque Printing</option>
                                            <option>Cash Disbursement</option>
                                        </select>

                                        <label className="text-[10px] font-black text-gray-500 uppercase tracking-tighter text-right">Bank Account #</label>
                                        <input type="text" value={formData.bankAccount} onChange={(e) => handleInputChange('bankAccount', e.target.value)} className="p-1 border border-gray-300 bg-gray-50 font-bold font-mono" />
                                    </div>
                                </div>
                            )}

                            {activeTab === 'Additions' && (
                                <div className="flex flex-col gap-4">
                                    <h4 className="border-b border-gray-200 text-blue-700 font-black italic text-xs pb-1 flex items-center gap-2">
                                        <Plus size={14} /> Recurring Monthly Additions
                                    </h4>
                                    <div className="grid grid-cols-[120px_1fr] gap-3 items-center">
                                        <label className="text-[10px] font-black text-gray-500 uppercase tracking-tighter text-right">Lunch Allowance</label>
                                        <input type="number" value={formData.lunchAllowance} onChange={(e) => handleInputChange('lunchAllowance', e.target.value)} className="p-1 border border-gray-300 bg-gray-50 font-bold" />

                                        <label className="text-[10px] font-black text-gray-500 uppercase tracking-tighter text-right">Travel Allowance</label>
                                        <input type="number" value={formData.travelAllowance} onChange={(e) => handleInputChange('travelAllowance', e.target.value)} className="p-1 border border-gray-300 bg-gray-50 font-bold" />

                                        <label className="text-[10px] font-black text-gray-500 uppercase tracking-tighter text-right">Performance Bonus</label>
                                        <input type="number" value={formData.bonus} onChange={(e) => handleInputChange('bonus', e.target.value)} className="p-1 border border-gray-300 bg-gray-50 font-bold" />
                                    </div>
                                </div>
                            )}

                            {activeTab === 'Deductions' && (
                                <div className="flex flex-col gap-4">
                                    <h4 className="border-b border-gray-200 text-red-700 font-black italic text-xs pb-1 flex items-center gap-2">
                                        <Percent size={14} /> Recurring Deductions & Exemptions
                                    </h4>
                                    <div className="grid grid-cols-[120px_1fr] gap-3 items-center">
                                        <label className="text-[10px] font-black text-gray-500 uppercase tracking-tighter text-right">Health Insurance</label>
                                        <input type="number" value={formData.healthInsurance} onChange={(e) => handleInputChange('healthInsurance', e.target.value)} className="p-1 border border-gray-300 bg-gray-50 font-bold" />

                                        <label className="text-[10px] font-black text-gray-500 uppercase tracking-tighter text-right">Life Insurance</label>
                                        <input type="number" value={formData.lifeInsurance} onChange={(e) => handleInputChange('lifeInsurance', e.target.value)} className="p-1 border border-gray-300 bg-gray-50 font-bold" />

                                        <label className="text-[10px] font-black text-gray-500 uppercase tracking-tighter text-right">Staff Loan</label>
                                        <input type="number" value={formData.staffLoan} onChange={(e) => handleInputChange('staffLoan', e.target.value)} className="p-1 border border-gray-300 bg-gray-50 font-bold" />

                                        <label className="text-[10px] font-black text-gray-500 uppercase tracking-tighter text-right">Pension (EE %)</label>
                                        <input type="number" value={formData.pensionContribution} onChange={(e) => handleInputChange('pensionContribution', e.target.value)} className="p-1 border border-gray-300 bg-gray-50 font-bold" />

                                        <div className="col-start-2 flex flex-col gap-2 pt-2">
                                            <label className="flex items-center gap-2 text-[10px] font-black uppercase text-gray-600">
                                                <input type="checkbox" checked={formData.nisExempt} onChange={(e) => handleInputChange('nisExempt', e.target.checked)} />
                                                NIS Contribution Exempt
                                            </label>
                                            <label className="flex items-center gap-2 text-[10px] font-black uppercase text-gray-600">
                                                <input type="checkbox" checked={formData.nhtExempt} onChange={(e) => handleInputChange('nhtExempt', e.target.checked)} />
                                                NHT Contribution Exempt
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-span-2 mt-4 bg-yellow-50 border border-yellow-200 p-2 rounded flex items-center gap-2">
                                        <div className="w-1 h-8 bg-blue-500"></div>
                                        <p className="text-[9px] text-gray-600 font-bold italic">
                                            Values entered here are automatically included in the monthly salary calculation.
                                            Changes affect the next payroll cycle.
                                        </p>
                                    </div>
                                </div>
                            )}

                            {activeTab === 'Emergency' && (
                                <div className="flex flex-col gap-4">
                                    <h4 className="border-b border-gray-200 text-orange-700 font-black italic text-xs pb-1 flex items-center gap-2">
                                        <Phone size={14} /> Emergency Contact Details
                                    </h4>
                                    <div className="grid grid-cols-[100px_1fr] gap-3 items-center">
                                        <label className="text-[10px] font-black text-gray-500 uppercase tracking-tighter text-right">Contact Name</label>
                                        <input type="text" value={formData.emergencyName} onChange={(e) => handleInputChange('emergencyName', e.target.value)} className="p-1 border border-gray-300 bg-gray-50 font-bold" />

                                        <label className="text-[10px] font-black text-gray-500 uppercase tracking-tighter text-right">Relation</label>
                                        <input type="text" value={formData.emergencyRelationship} onChange={(e) => handleInputChange('emergencyRelationship', e.target.value)} className="p-1 border border-gray-300 bg-gray-50 font-bold" />

                                        <label className="text-[10px] font-black text-gray-500 uppercase tracking-tighter text-right">Primary Phone</label>
                                        <input type="text" value={formData.emergencyPhone} onChange={(e) => handleInputChange('emergencyPhone', e.target.value)} className="p-1 border border-gray-300 bg-gray-50 font-bold" />
                                    </div>
                                </div>
                            )}

                        </div>

                        {/* Summary View (Mini Calculation) */}
                        <div className="mt-auto bg-gray-100 p-2 border-t border-gray-300 flex justify-between items-center px-4">
                            <div className="flex flex-col">
                                <span className="text-[8px] font-bold uppercase text-gray-400">Estimated Monthly Net</span>
                                <span className="text-sm font-black text-blue-900 italic">$
                                    {(Number(formData.baseSalary) + Number(formData.lunchAllowance) + Number(formData.travelAllowance) - Number(formData.healthInsurance) - Number(formData.lifeInsurance) - Number(formData.staffLoan)).toLocaleString()}
                                </span>
                            </div>
                            <div className="flex gap-2">
                                <button className="p-1.5 bg-blue-600 text-white rounded hover:bg-blue-700 shadow-sm" title="Email Verification">
                                    <Mail size={14} />
                                </button>
                                <button className="p-1.5 bg-gray-600 text-white rounded hover:bg-gray-700 shadow-sm" title="Export Profile">
                                    <FileText size={14} />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Middle Action Bar */}
                    <div className="flex flex-row lg:flex-col gap-2 w-full lg:w-20 overflow-x-auto pb-2 lg:pb-0 shrink-0">
                        <button onClick={handleNew} className="btn-classic flex flex-col items-center justify-center p-2 min-w-[60px] bg-[#E0DCCF] hover:bg-gray-200 active:translate-y-0.5">
                            <Plus className="text-orange-600 mb-1" size={20} />
                            <span className="font-bold text-[10px]">NEW</span>
                        </button>
                        <button onClick={handleEnter} className="btn-classic flex flex-col items-center justify-center p-2 min-w-[60px] bg-[#E0DCCF] hover:bg-gray-200 active:translate-y-0.5">
                            <Save className="text-blue-600 mb-1" size={20} />
                            <span className="font-bold text-[10px]">SAVE (ENT)</span>
                        </button>
                        <button onClick={handleUpdate} className="btn-classic flex flex-col items-center justify-center p-2 min-w-[60px] bg-[#E0DCCF] hover:bg-gray-200 active:translate-y-0.5">
                            <RefreshCw className="text-green-600 mb-1" size={20} />
                            <span className="font-bold text-[10px]">UPDATE</span>
                        </button>
                        <div className="flex-1 hidden lg:block"></div>
                        <button onClick={handleDelete} className="btn-classic flex flex-col items-center justify-center p-2 min-w-[60px] bg-[#E0DCCF] hover:bg-gray-200 active:translate-y-0.5">
                            <X className="text-red-600 mb-1" size={20} />
                            <span className="font-bold text-[10px]">DELETE</span>
                        </button>
                    </div>

                    {/* Right Side - Employee Grid */}
                    <div className="flex-1 flex flex-col bg-white border border-gray-400 shadow-inner overflow-hidden">
                        <div className="bg-[#D4D0C8] p-2 flex justify-between items-center border-b border-gray-300">
                            <div className="relative flex-1 max-w-xs">
                                <Search className="absolute left-2 top-1.5 text-gray-400" size={14} />
                                <input
                                    type="text"
                                    placeholder="SEARCH STAFF..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full pl-8 p-1 border border-gray-300 bg-white text-[11px] font-bold"
                                />
                            </div>
                            <span className="text-[10px] font-black text-blue-900 uppercase italic ml-4">Total Records: {employees.length}</span>
                        </div>

                        <div className="flex-1 overflow-auto">
                            <table className="w-full text-left border-collapse min-w-[800px]">
                                <thead className="bg-gray-100 sticky top-0 border-b border-gray-200 text-[10px] font-black text-gray-500 uppercase">
                                    <tr>
                                        <th className="p-3 border-r border-gray-200">ID</th>
                                        <th className="p-3 border-r border-gray-200">Name</th>
                                        <th className="p-3 border-r border-gray-200">Department</th>
                                        <th className="p-3 border-r border-gray-200">Designation</th>
                                        <th className="p-3 border-r border-gray-200">Phone</th>
                                        <th className="p-3">Base Salary</th>
                                    </tr>
                                </thead>
                                <tbody className="text-[11px] font-bold text-gray-700">
                                    {filteredEmployees.map(emp => (
                                        <tr
                                            key={emp.id}
                                            onClick={() => handleRowClick(emp.id)}
                                            className={`border-b border-gray-50 cursor-pointer hover:bg-yellow-50 ${selectedRow === emp.id ? 'bg-[#316AC5] text-white' : 'odd:bg-gray-50/50'}`}
                                        >
                                            <td className="p-3 border-r border-gray-200 font-mono tracking-tighter">{emp.employeeId}</td>
                                            <td className="p-3 border-r border-gray-200 uppercase">{emp.firstName} {emp.lastName}</td>
                                            <td className="p-3 border-r border-gray-200 italic">{emp.department}</td>
                                            <td className="p-3 border-r border-gray-200 uppercase text-blue-900">{emp.designation}</td>
                                            <td className="p-3 border-r border-gray-200">{emp.phone}</td>
                                            <td className="p-3 text-green-700">$ {Number(emp.baseSalary).toLocaleString()}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Dynamic Status Bar for List */}
                        <div className="bg-[#EBE9D8] px-3 py-1 text-[9px] font-bold text-gray-500 flex justify-between">
                            <span>GRID READY: {activeTab.toUpperCase()} CONTEXT</span>
                            <span className="uppercase tracking-widest">Connected to Main HR Engine</span>
                        </div>
                    </div>

                </div>
            </div>

            {/* Global Actions (Footer) */}
            <div className="bg-[#D4D0C8] border-t border-gray-400 p-2 flex justify-end gap-2 px-8">
                <button
                    onClick={() => navigate('/')}
                    className="btn-classic px-8 py-1.5 flex items-center gap-2 text-[11px] font-black text-red-700"
                >
                    <LogOut size={16} /> EXIT CENTRAL
                </button>
            </div>
        </div>
    );
};

export default EmployeeManagement;
