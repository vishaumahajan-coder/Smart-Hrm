import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Save, LogOut, Edit, Folder, Info, Settings,
    ShieldAlert, Database, Building2, Globe,
    Hash, Landmark, UserCheck
} from 'lucide-react';

const CompanySettings = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('General');
    const [isEditing, setIsEditing] = useState(true);

    const [formData, setFormData] = useState({
        companyName: 'ACME JAMAICA LTD',
        abbrv: 'AJL',
        trn: '123-456-789',
        nisNumber: 'A-1234567',
        address: '123 King Street, Kingston, Jamaica',
        phone: '1-876-000-0000',
        email: 'info@acmejamaica.com',
        website: 'www.acmejamaica.com',
        sector: 'Private',
        currency: 'JMD',
        fiscalYearStart: 'January',

        // Tax Rates & Rules
        incomeTaxThreshold: '1500000',
        nisRateEE: '3.0',
        nisRateER: '3.0',
        nhtRateEE: '2.0',
        nhtRateER: '3.0',
        educationTaxEE: '2.25',
        educationTaxER: '3.5',
        incomeTaxRate: '25.0',
        highIncomeTaxRate: '30.0',
        highIncomeThreshold: '6000000',

        // Configuration
        autoEmailSlips: true,
        passwordProtectSlips: true,
        payslipPasswordType: 'TRN',
        roundNetPay: true
    });

    const handleInputChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleSave = () => {
        // Logic to save settings
        alert('Settings saved successfully!');
    };

    return (
        <div className="flex flex-col h-full w-full bg-[#EBE9D8] font-sans">
            {/* Header / Title Bar */}
            <div className="bg-[#D4D0C8] border-b border-gray-400 px-4 py-2 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Building2 className="text-blue-700" size={16} />
                    <span className="font-black text-gray-700 text-sm uppercase italic">Master Configuration - Jamaica Compliance Engine</span>
                </div>
            </div>

            {/* Content Area */}
            <div className="flex-1 p-2 md:p-4 overflow-hidden flex flex-col">
                <div className="flex flex-col lg:flex-row gap-4 flex-1">

                    {/* Sidebar Tabs */}
                    <div className="flex flex-row lg:flex-col gap-1 w-full lg:w-48 bg-[#D4D0C8] border border-gray-400 p-1 shrink-0 overflow-x-auto no-scrollbar">
                        <button
                            onClick={() => setActiveTab('General')}
                            className={`p-3 flex items-center gap-3 text-left transition-all ${activeTab === 'General' ? 'bg-[#316AC5] text-white' : 'hover:bg-gray-200 text-gray-700'}`}
                        >
                            <Info size={16} />
                            <span className="font-bold text-[10px] uppercase">General Info</span>
                        </button>
                        <button
                            onClick={() => setActiveTab('Tax')}
                            className={`p-3 flex items-center gap-3 text-left transition-all ${activeTab === 'Tax' ? 'bg-[#316AC5] text-white' : 'hover:bg-gray-200 text-gray-700'}`}
                        >
                            <ShieldAlert size={16} />
                            <span className="font-bold text-[10px] uppercase">Tax & Compliance</span>
                        </button>
                        <button
                            onClick={() => setActiveTab('Payroll')}
                            className={`p-3 flex items-center gap-3 text-left transition-all ${activeTab === 'Payroll' ? 'bg-[#316AC5] text-white' : 'hover:bg-gray-200 text-gray-700'}`}
                        >
                            <Settings size={16} />
                            <span className="font-bold text-[10px] uppercase">Payroll Engine</span>
                        </button>
                        <button
                            onClick={() => setActiveTab('System')}
                            className={`p-3 flex items-center gap-3 text-left transition-all ${activeTab === 'System' ? 'bg-[#316AC5] text-white' : 'hover:bg-gray-200 text-gray-700'}`}
                        >
                            <Database size={16} />
                            <span className="font-bold text-[10px] uppercase">Integrations</span>
                        </button>
                    </div>

                    {/* Main Settings Panel */}
                    <div className="flex-1 bg-white border border-gray-400 shadow-inner overflow-hidden flex flex-col">
                        <div className="bg-gray-100 p-2 border-b border-gray-300 flex items-center justify-between">
                            <h3 className="text-xs font-black text-blue-900 border-l-4 border-blue-900 pl-2 uppercase">{activeTab} Configuration</h3>
                            <div className="flex items-center gap-2">
                                <span className="text-[10px] font-bold text-gray-400 uppercase">Interactive Setup</span>
                            </div>
                        </div>

                        <div className="flex-1 overflow-y-auto p-4 md:p-8">

                            {activeTab === 'General' && (
                                <div className="max-w-2xl flex flex-col gap-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="flex flex-col gap-1">
                                            <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Company Name</label>
                                            <div className="relative">
                                                <Building2 className="absolute left-2 top-2 text-gray-400" size={14} />
                                                <input value={formData.companyName} onChange={(e) => handleInputChange('companyName', e.target.value)} className="w-full pl-8 p-2 border border-gray-300 font-bold text-gray-700" placeholder="Legal Entity Name" />
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Abbrv.</label>
                                            <input value={formData.abbrv} onChange={(e) => handleInputChange('abbrv', e.target.value)} className="w-full p-2 border border-gray-300 font-bold text-gray-700 uppercase" placeholder="e.g. ACME" />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="flex flex-col gap-1">
                                            <label className="text-[10px] font-black text-blue-800 uppercase tracking-widest">Tax Registration (TRN)</label>
                                            <div className="relative">
                                                <Hash className="absolute left-2 top-2 text-blue-400" size={14} />
                                                <input value={formData.trn} onChange={(e) => handleInputChange('trn', e.target.value)} className="w-full pl-8 p-2 border border-blue-200 bg-blue-50 font-black text-blue-900 shadow-inner" placeholder="000-000-000" />
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <label className="text-[10px] font-black text-blue-800 uppercase tracking-widest">NIS Employer #</label>
                                            <div className="relative">
                                                <UserCheck className="absolute left-2 top-2 text-blue-400" size={14} />
                                                <input value={formData.nisNumber} onChange={(e) => handleInputChange('nisNumber', e.target.value)} className="w-full pl-8 p-2 border border-blue-200 bg-blue-50 font-black text-blue-900 shadow-inner" placeholder="P-0000000" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-1">
                                        <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Corporate Address</label>
                                        <div className="relative">
                                            <Globe className="absolute left-2 top-2 text-gray-400" size={14} />
                                            <textarea value={formData.address} onChange={(e) => handleInputChange('address', e.target.value)} className="w-full pl-8 p-2 border border-gray-300 font-bold text-gray-700 h-20" placeholder="Physical location in Jamaica"></textarea>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {activeTab === 'Tax' && (
                                <div className="max-w-3xl flex flex-col gap-6">
                                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                                        <div className="flex gap-3">
                                            <ShieldAlert className="text-yellow-600" />
                                            <div>
                                                <p className="text-xs font-bold text-yellow-800 uppercase">Compliance Advisory</p>
                                                <p className="text-[10px] text-yellow-700">These rates define the statutory deductions for Jamaica (NIS, NHT, Ed Tax, PAYE). Ensure these align with the latest Gazetted rates.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="space-y-4">
                                            <h4 className="font-black text-[11px] text-gray-400 border-b border-gray-200 pb-2 uppercase italic tracking-tighter">Statutory Deduction Rates (%)</h4>

                                            <div className="grid grid-cols-2 gap-4">
                                                <div className="flex flex-col gap-1">
                                                    <label className="text-[9px] font-black text-gray-500 uppercase">NIS (Employee)</label>
                                                    <input type="number" value={formData.nisRateEE} onChange={(e) => handleInputChange('nisRateEE', e.target.value)} className="p-1.5 border border-gray-300 font-bold text-right" />
                                                </div>
                                                <div className="flex flex-col gap-1">
                                                    <label className="text-[9px] font-black text-gray-500 uppercase">NIS (Employer)</label>
                                                    <input type="number" value={formData.nisRateER} onChange={(e) => handleInputChange('nisRateER', e.target.value)} className="p-1.5 border border-gray-300 font-bold text-right" />
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-2 gap-4">
                                                <div className="flex flex-col gap-1">
                                                    <label className="text-[9px] font-black text-gray-500 uppercase">NHT (Employee)</label>
                                                    <input type="number" value={formData.nhtRateEE} onChange={(e) => handleInputChange('nhtRateEE', e.target.value)} className="p-1.5 border border-gray-300 font-bold text-right" />
                                                </div>
                                                <div className="flex flex-col gap-1">
                                                    <label className="text-[9px] font-black text-gray-500 uppercase">NHT (Employer)</label>
                                                    <input type="number" value={formData.nhtRateER} onChange={(e) => handleInputChange('nhtRateER', e.target.value)} className="p-1.5 border border-gray-300 font-bold text-right" />
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-2 gap-4">
                                                <div className="flex flex-col gap-1">
                                                    <label className="text-[9px] font-black text-gray-500 uppercase">ED TAX (Employee)</label>
                                                    <input type="number" value={formData.educationTaxEE} onChange={(e) => handleInputChange('educationTaxEE', e.target.value)} className="p-1.5 border border-gray-300 font-bold text-right" />
                                                </div>
                                                <div className="flex flex-col gap-1">
                                                    <label className="text-[9px] font-black text-gray-500 uppercase">ED TAX (Employer)</label>
                                                    <input type="number" value={formData.educationTaxER} onChange={(e) => handleInputChange('educationTaxER', e.target.value)} className="p-1.5 border border-gray-300 font-bold text-right" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="space-y-4">
                                            <h4 className="font-black text-[11px] text-gray-400 border-b border-gray-200 pb-2 uppercase italic tracking-tighter">Income Tax Thresholds</h4>

                                            <div className="flex flex-col gap-1">
                                                <label className="text-[9px] font-black text-gray-500 uppercase italic">Annual Tax-Free Threshold (JMD)</label>
                                                <input type="number" value={formData.incomeTaxThreshold} onChange={(e) => handleInputChange('incomeTaxThreshold', e.target.value)} className="p-2 border-2 border-green-200 bg-green-50 font-black text-green-800 text-lg italic text-right" />
                                            </div>

                                            <div className="grid grid-cols-2 gap-4 pt-2">
                                                <div className="flex flex-col gap-1">
                                                    <label className="text-[9px] font-black text-gray-500 uppercase">Standard Rate (%)</label>
                                                    <input type="number" value={formData.incomeTaxRate} onChange={(e) => handleInputChange('incomeTaxRate', e.target.value)} className="p-1.5 border border-gray-300 font-bold text-right" />
                                                </div>
                                                <div className="flex flex-col gap-1">
                                                    <label className="text-[9px] font-black text-gray-500 uppercase">High Rate (%)</label>
                                                    <input type="number" value={formData.highIncomeTaxRate} onChange={(e) => handleInputChange('highIncomeTaxRate', e.target.value)} className="p-1.5 border border-gray-300 font-bold text-right" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {activeTab === 'Payroll' && (
                                <div className="max-w-2xl flex flex-col gap-6">
                                    <h4 className="font-black text-blue-900 border-b border-gray-200 pb-2 uppercase text-xs italic">Automation & Delivery Rules</h4>

                                    <div className="space-y-6">
                                        <div className="flex items-center justify-between p-4 bg-gray-50 border border-gray-200 rounded-lg">
                                            <div className="flex items-center gap-4">
                                                <div className="p-2 bg-blue-100 rounded text-blue-600">
                                                    <Globe size={20} />
                                                </div>
                                                <div>
                                                    <p className="text-xs font-black text-gray-700 uppercase">Auto-Email Payslips</p>
                                                    <p className="text-[9px] text-gray-500">Dispatch slips immediately after payroll finalization.</p>
                                                </div>
                                            </div>
                                            <input type="checkbox" checked={formData.autoEmailSlips} onChange={(e) => handleInputChange('autoEmailSlips', e.target.checked)} className="w-5 h-5" />
                                        </div>

                                        <div className="flex items-center justify-between p-4 bg-gray-50 border border-gray-200 rounded-lg">
                                            <div className="flex items-center gap-4">
                                                <div className="p-2 bg-red-100 rounded text-red-600">
                                                    <ShieldAlert size={20} />
                                                </div>
                                                <div>
                                                    <p className="text-xs font-black text-gray-700 uppercase italic">PDF Password Protection</p>
                                                    <p className="text-[9px] text-gray-500">Secure payslips using employee unique identifiers.</p>
                                                </div>
                                            </div>
                                            <input type="checkbox" checked={formData.passwordProtectSlips} onChange={(e) => handleInputChange('passwordProtectSlips', e.target.checked)} className="w-5 h-5" />
                                        </div>

                                        <div className="flex flex-col gap-2 p-4 bg-blue-50 border border-blue-100 rounded-lg">
                                            <label className="text-[10px] font-black text-blue-700 uppercase italic">Active Password Policy</label>
                                            <select value={formData.payslipPasswordType} onChange={(e) => handleInputChange('payslipPasswordType', e.target.value)} className="w-full p-2 border border-blue-200 font-black text-blue-900">
                                                <option value="TRN">Employee TRN (Industry Recommended)</option>
                                                <option value="DOB">Date of Birth (YYYYMMDD)</option>
                                                <option value="EMP_ID">System Employee ID</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            )}

                        </div>

                        {/* Actions Bar */}
                        <div className="p-4 bg-gray-100 border-t border-gray-300 flex justify-end gap-2">
                            <button onClick={handleSave} className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-2 rounded font-black text-[11px] shadow-sm transition-all uppercase tracking-widest active:scale-95">
                                <Save size={16} /> Update Config
                            </button>
                            <button onClick={() => navigate('/')} className="flex items-center gap-2 bg-gray-500 hover:bg-gray-600 text-white px-8 py-2 rounded font-black text-[11px] shadow-sm transition-all uppercase tracking-widest active:scale-95">
                                <LogOut size={16} /> Close
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default CompanySettings;
