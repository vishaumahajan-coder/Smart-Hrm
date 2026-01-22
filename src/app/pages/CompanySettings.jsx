import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Save, RotateCcw, LogOut, Edit } from 'lucide-react';

const CompanySettings = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('General Info');
    const [isReadOnly, setIsReadOnly] = useState(true);

    // Mock data based on screenshot
    const [formData, setFormData] = useState({
        companyNo: '12',
        name: 'AMGL Account Outsourcing Group Jamaica Limited',
        description: 'AMGL Account Outsourcing Group Jamaica Limited-M',
        tradeName: '',
        nisReference: '7741929',
        payeReference: '002095220',
        trn: '',
        frequencyDesc: '',
        addressLine1: 'Bioprist Knowledge Park',
        addressLine2: '4th Floor, 1A Pimento Way, M',
        phoneNo: '6207645',
        mailingAddress1: '',
        mailingAddress2: '',
        emailAddress: '',
        payCycle: 'Weekly',
        currentPeriod: '4',
        currentPE: '23/01/2026',
        year: '2026',
        annualTaxCr: '1,799,376.00',
        payDay: 'Friday',
        noOfPeriods: '52',
        currentNISE: '19/01/2026',
        taxCreditType: 'Annual',
        // Preferences
        country: 'Jamaica',
        typeOfPayroll: 'Employee',
        periodClearingGL: '',
        periodSuspenseGL: '',
        deductionOptions: 'Drop',
        glAccountFormat: 'FN001',
        rentalTransCode: '0.00',
        rentalAddonPct: 'Hourly',
        defaultWageType: 'Hourly',
        defaultRegularHours: '40.00',
        payDisbursementType: 'Electronic Transfer',
        currency: 'JMD',
        nisAnnualCeiling: '5,000,000.00',
        payAdviceFormat: '0',
        useGLForm: false,
        autoCalculate: false,
        autoUpdateStatus: false,
        probationaryPeriod: '3',
        probationaryPeriodDays: '20.00',
        // YTD
        ytd_taxableGross: '3,189,390.67',
        ytd_nonTaxableGross: '0.00',
        ytd_regularPay: '1,913,500.01',
        ytd_overtimePay: '0.00',
        ytd_totalDed: '33,979.92',

        ytd_emp_incomeTax: '540,724.78',
        ytd_emp_heart: '0.0000',
        ytd_emp_nis: '64,510.11',
        ytd_emp_nht: '63,787.80',
        ytd_emp_edTax: '69,876.43',
        ytd_emp_pension: '19,261.20',

        ytd_empr_incomeTax: '0.0000',
        ytd_empr_heart: '95,681.74',
        ytd_empr_nis: '64,510.11',
        ytd_empr_nht: '95,681.74',
        ytd_empr_edTax: '108,696.65',
        ytd_empr_pension: '0.00'
    });

    const [taxData] = useState([
        { id: 'INCTAX', eeRate: '2.250', erRate: '3.500', fStart: '18', fEnd: '60', mStart: '18', mEnd: '65' },
        { id: 'HEART', eeRate: '0.000', erRate: '3.000', fStart: '0', fEnd: '0', mStart: '0', mEnd: '0' },
        { id: 'NIS', eeRate: '25.000', erRate: '0.000', fStart: '1', fEnd: '200', mStart: '1', mEnd: '200' }, // Assuming these values from blurry text
        { id: 'NHT', eeRate: '2.000', erRate: '3.000', fStart: '18', fEnd: '60', mStart: '18', mEnd: '65' },
        { id: 'EDTAX', eeRate: '3.000', erRate: '3.000', fStart: '18', fEnd: '60', mStart: '18', mEnd: '65' },
    ]);



    return (
        <div className="flex flex-col h-full w-full bg-[#EBE9D8] font-sans text-xs">
            {/* Tabs */}
            <div className="flex border-b border-gray-400 bg-[#EBE9D8] pt-1 px-1 gap-1">
                {['General Info', 'Preferences/Configuration', 'Tax Information', 'YTD Information'].map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-4 py-1.5 rounded-t-lg border-t border-l border-r border-gray-400 ${activeTab === tab
                            ? 'bg-white font-bold -mb-[1px] border-b-white z-10'
                            : 'bg-[#D4D0C8] text-gray-600 hover:bg-[#E0DCCF]'
                            }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Content Area */}
            <div className="flex-1 p-4 border-t border-white overflow-auto">
                <div className="flex gap-4 h-full">
                    {/* Left Content Column */}
                    <div className="flex-1 flex flex-col gap-6 overflow-auto pr-2">
                        {activeTab === 'General Info' && (
                            <>
                                {/* General Information Section */}
                                <fieldset className="border border-gray-400 p-2 rounded relative mt-2">
                                    <legend className="text-blue-600 px-1 font-bold absolute -top-2 left-2 bg-[#EBE9D8]">General Information</legend>
                                    <div className="grid grid-cols-[120px_1fr] gap-y-2 gap-x-4 items-center mt-2">
                                        <label className="text-gray-700 font-bold text-right">Company No.</label>
                                        <input type="text" value={formData.companyNo} readOnly className="w-16 p-1 border border-gray-400 bg-blue-50 text-blue-800 font-bold shadow-inner" />

                                        <label className="text-gray-700 font-bold text-right">Name</label>
                                        <input type="text" value={formData.name} className="w-full p-1 border border-gray-400 bg-white text-blue-800 font-bold shadow-inner" readOnly={isReadOnly} />

                                        <label className="text-gray-700 font-bold text-right">Description</label>
                                        <input type="text" value={formData.description} className="w-full p-1 border border-gray-400 bg-white text-blue-800 font-bold shadow-inner" readOnly={isReadOnly} />

                                        <label className="text-gray-700 font-bold text-right">Trade Name</label>
                                        <input type="text" value={formData.tradeName} className="w-full p-1 border border-gray-400 bg-white text-blue-800 font-bold shadow-inner" readOnly={isReadOnly} />

                                        <label className="text-gray-700 font-bold text-right">N.I.S Reference</label>
                                        <div className="flex gap-4">
                                            <input type="text" value={formData.nisReference} className="w-32 p-1 border border-gray-400 bg-white text-blue-800 font-bold shadow-inner" readOnly={isReadOnly} />
                                            <label className="text-gray-700 font-bold whitespace-nowrap">Mailing Address 1</label>
                                            <input type="text" value={formData.mailingAddress1} className="border border-gray-400 bg-white shadow-inner p-1 w-full" readOnly={isReadOnly} />
                                        </div>

                                        <label className="text-gray-700 font-bold text-right">P.A.Y.E Reference</label>
                                        <div className="flex gap-4">
                                            <input type="text" value={formData.payeReference} className="w-32 p-1 border border-gray-400 bg-white text-blue-800 font-bold shadow-inner" readOnly={isReadOnly} />
                                            <label className="text-gray-700 font-bold whitespace-nowrap">Mailing Address 2</label>
                                            <input type="text" value={formData.mailingAddress2} className="border border-gray-400 bg-white shadow-inner p-1 w-full" readOnly={isReadOnly} />
                                        </div>

                                        <label className="text-gray-700 font-bold text-right">TRN</label>
                                        <div className="flex gap-4">
                                            <input type="text" value={formData.trn} className="w-32 p-1 border border-gray-400 bg-white text-blue-800 font-bold shadow-inner" readOnly={isReadOnly} />
                                            <label className="text-gray-700 font-bold text-right w-[105px]">Email Address</label>
                                            <input type="text" value={formData.emailAddress} className="border border-gray-400 bg-white shadow-inner p-1 w-full" readOnly={isReadOnly} />
                                        </div>

                                        <label className="text-gray-700 font-bold text-right">Frequency Desc.</label>
                                        <input type="text" value={formData.frequencyDesc} className="w-full p-1 border border-gray-400 bg-white text-blue-800 font-bold shadow-inner" readOnly={isReadOnly} />
                                    </div>
                                </fieldset>

                                {/* Contact Information */}
                                <fieldset className="border border-gray-400 p-2 rounded relative mt-2">
                                    <legend className="text-blue-600 px-1 font-bold absolute -top-2 left-2 bg-[#EBE9D8]">Contact Information</legend>
                                    <div className="grid grid-cols-[120px_1fr] gap-y-2 gap-x-4 items-center mt-2">
                                        <label className="text-gray-700 font-bold text-right">Address Line 1</label>
                                        <input type="text" value={formData.addressLine1} className="w-full p-1 border border-gray-400 bg-white text-blue-800 font-bold shadow-inner" readOnly={isReadOnly} />
                                        <label className="text-gray-700 font-bold text-right">Address Line 2</label>
                                        <input type="text" value={formData.addressLine2} className="w-full p-1 border border-gray-400 bg-white text-blue-800 font-bold shadow-inner" readOnly={isReadOnly} />
                                        <label className="text-gray-700 font-bold text-right">Phone No.</label>
                                        <input type="text" value={formData.phoneNo} className="w-40 p-1 border border-gray-400 bg-white text-blue-800 font-bold shadow-inner" readOnly={isReadOnly} />
                                    </div>
                                </fieldset>

                                {/* Pay Cycle Information */}
                                <fieldset className="border border-gray-400 p-2 rounded relative mt-2">
                                    <legend className="text-blue-600 px-1 font-bold absolute -top-2 left-2 bg-[#EBE9D8]">Pay Cycle Information</legend>
                                    <div className="grid grid-cols-[120px_1fr_120px_1fr] gap-y-2 gap-x-4 items-center mt-2">
                                        <label className="text-gray-700 font-bold text-right">Pay Cycle</label>
                                        <select className="border border-gray-400 bg-white p-1 shadow-inner text-blue-800 font-bold" value={formData.payCycle} disabled={isReadOnly}>
                                            <option>Weekly</option>
                                            <option>Monthly</option>
                                            <option>Bi-Weekly</option>
                                        </select>
                                        <label className="text-gray-700 font-bold text-right">Pay Day</label>
                                        <input type="text" value={formData.payDay} className="border border-gray-400 bg-white p-1 shadow-inner text-blue-800 font-bold w-full" readOnly />

                                        <label className="text-gray-700 font-bold text-right">Current Period</label>
                                        <input type="number" value={formData.currentPeriod} className="w-16 p-1 border border-gray-400 bg-white text-blue-800 font-bold shadow-inner" readOnly={isReadOnly} />

                                        <label className="text-gray-700 font-bold text-right">No. Of Periods</label>
                                        <input type="text" value={formData.noOfPeriods} className="border border-gray-400 bg-white p-1 shadow-inner text-blue-800 font-bold w-16" readOnly />

                                        <label className="text-gray-700 font-bold text-right">Current P/E</label>
                                        <input type="text" value={formData.currentPE} className="w-32 p-1 border border-gray-400 bg-white text-blue-800 font-bold shadow-inner" readOnly={isReadOnly} />

                                        <label className="text-gray-700 font-bold text-right">Current NIS/E</label>
                                        <input type="text" value={formData.currentNISE} className="border border-gray-400 bg-white p-1 shadow-inner text-blue-800 font-bold w-32" readOnly />

                                        <label className="text-gray-700 font-bold text-right">Year</label>
                                        <input type="text" value={formData.year} className="w-20 p-1 border border-gray-400 bg-white text-blue-800 font-bold shadow-inner" readOnly={isReadOnly} />

                                        <label className="text-gray-700 font-bold text-right">Tax Credit Type</label>
                                        <input type="text" value={formData.taxCreditType} className="border border-gray-400 bg-white p-1 shadow-inner text-blue-800 font-bold w-full" readOnly />

                                        <label className="text-gray-700 font-bold text-right">Annual Tax Cr.</label>
                                        <input type="text" value={formData.annualTaxCr} className="w-32 p-1 border border-gray-400 bg-white text-blue-800 font-bold shadow-inner" readOnly={isReadOnly} />
                                    </div>
                                </fieldset>
                            </>
                        )}

                        {activeTab === 'Preferences/Configuration' && (
                            <div className="flex gap-4">
                                <div className="flex-1">
                                    <fieldset className="border border-gray-400 p-2 rounded relative mt-2 h-full">
                                        <legend className="text-blue-600 px-1 font-bold absolute -top-2 left-2 bg-[#EBE9D8]">Payroll Settings</legend>
                                        <div className="grid grid-cols-[240px_1fr] gap-y-2 gap-x-4 items-center mt-2">
                                            <label className="text-gray-700 font-bold text-right whitespace-nowrap">Country</label>
                                            <input type="text" value={formData.country} className="w-full p-1 border border-gray-400 bg-white text-blue-800 font-bold shadow-inner" readOnly={isReadOnly} />

                                            <label className="text-gray-700 font-bold text-right whitespace-nowrap">Type Of Payroll</label>
                                            <select className="border border-gray-400 bg-white p-1 shadow-inner text-blue-800 font-bold" value={formData.typeOfPayroll} disabled={isReadOnly}>
                                                <option>Employee</option>
                                            </select>

                                            <label className="text-gray-700 font-bold text-right whitespace-nowrap">Period Clearing GL Account No</label>
                                            <select className="border border-gray-400 bg-white p-1 shadow-inner text-blue-800 font-bold" disabled={isReadOnly}></select>

                                            <label className="text-gray-700 font-bold text-right whitespace-nowrap">Period Suspense GL Account No</label>
                                            <select className="border border-gray-400 bg-white p-1 shadow-inner text-blue-800 font-bold" disabled={isReadOnly}></select>

                                            <label className="text-gray-700 font-bold text-right whitespace-nowrap">Options for Deductions in Excess of Net Pay</label>
                                            <select className="border border-gray-400 bg-white p-1 shadow-inner text-blue-800 font-bold" value={formData.deductionOptions} disabled={isReadOnly}>
                                                <option>Drop</option>
                                            </select>

                                            <label className="text-gray-700 font-bold text-right whitespace-nowrap">General Ledger Account Format</label>
                                            <input type="text" value={formData.glAccountFormat} className="w-full p-1 border border-gray-400 bg-white text-blue-800 font-bold shadow-inner" readOnly={isReadOnly} />

                                            <label className="text-gray-700 font-bold text-right whitespace-nowrap">Default Rental Allowance Trans. Code</label>
                                            <div className="flex gap-2">
                                                <select className="w-16 border border-gray-400 bg-white p-1 shadow-inner text-blue-800 font-bold" disabled={isReadOnly}></select>
                                                <input type="text" value={formData.rentalTransCode} className="w-24 p-1 border border-gray-400 bg-white text-blue-800 font-bold shadow-inner text-right" readOnly={isReadOnly} />
                                            </div>

                                            <label className="text-gray-700 font-bold text-right whitespace-nowrap">Rental Addon Percentage</label>
                                            <input type="text" value={formData.rentalAddonPct} className="w-32 p-1 border border-gray-400 bg-white text-blue-800 font-bold shadow-inner" readOnly={isReadOnly} />

                                            <label className="text-gray-700 font-bold text-right whitespace-nowrap">Default Wage Type</label>
                                            <input type="text" value={formData.defaultWageType} className="w-32 p-1 border border-gray-400 bg-white text-blue-800 font-bold shadow-inner" readOnly={isReadOnly} />

                                            <label className="text-gray-700 font-bold text-right whitespace-nowrap">Default Regular Hours</label>
                                            <input type="text" value={formData.defaultRegularHours} className="w-24 p-1 border border-gray-400 bg-white text-blue-800 font-bold shadow-inner text-right" readOnly={isReadOnly} />

                                            <label className="text-gray-700 font-bold text-right whitespace-nowrap">Default Pay Disbursement Type</label>
                                            <select className="border border-gray-400 bg-white p-1 shadow-inner text-blue-800 font-bold" value={formData.payDisbursementType} disabled={isReadOnly}>
                                                <option>Electronic Transfer</option>
                                            </select>

                                            <label className="text-gray-700 font-bold text-right whitespace-nowrap">Currency</label>
                                            <div className="flex gap-2">
                                                <input type="text" value={formData.currency} className="w-20 p-1 border border-gray-400 bg-white text-blue-800 font-bold shadow-inner" readOnly={isReadOnly} />
                                                <input type="text" value="0" className="w-10 p-1 border border-gray-400 bg-white text-blue-800 font-bold shadow-inner text-center" readOnly={isReadOnly} />
                                            </div>


                                            <label className="text-gray-700 font-bold text-right whitespace-nowrap">NIS Annual Ceiling</label>
                                            <input type="text" value={formData.nisAnnualCeiling} className="w-40 p-1 border border-gray-400 bg-white text-blue-800 font-bold shadow-inner text-right" readOnly={isReadOnly} />

                                            <label className="text-gray-700 font-bold text-right whitespace-nowrap">Pay Advice Format</label>
                                            <div className="flex gap-2 items-center">
                                                <input type="text" value={formData.payAdviceFormat} className="w-12 p-1 border border-gray-400 bg-white text-blue-800 font-bold shadow-inner text-center" readOnly={isReadOnly} />
                                                <div className="w-4 h-4 bg-gray-300 border border-gray-500"></div>
                                            </div>
                                        </div>
                                    </fieldset>
                                </div>
                                <div className="w-56 mt-4 flex flex-col gap-2 pt-4">
                                    <label className="flex items-center gap-2 font-bold text-gray-700">
                                        <input type="checkbox" checked={formData.useGLForm} readOnly={!isReadOnly} />
                                        Use GL Form
                                    </label>
                                    <label className="flex items-center gap-2 font-bold text-gray-700">
                                        <input type="checkbox" checked={formData.autoCalculate} readOnly={!isReadOnly} />
                                        Auto Calculate
                                    </label>
                                    <label className="flex items-center gap-2 font-bold text-gray-700">
                                        <input type="checkbox" checked={formData.autoUpdateStatus} readOnly={!isReadOnly} />
                                        Auto Update Status
                                    </label>

                                    <div className="mt-4">
                                        <label className="block font-bold text-gray-700 mb-1">Probationary Period</label>
                                        <div className="flex items-center gap-2">
                                            <input type="number" value={formData.probationaryPeriod} className="w-12 p-1 border border-gray-400 bg-white text-blue-800 font-bold shadow-inner text-center" readOnly={isReadOnly} />
                                            <span className="font-bold text-blue-800">Month(s)</span>
                                            <input type="text" value={formData.probationaryPeriodDays} className="w-16 p-1 border border-gray-400 bg-white text-blue-800 font-bold shadow-inner text-center" readOnly={isReadOnly} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'Tax Information' && (
                            <div className="flex flex-col gap-4 h-full">
                                <fieldset className="border border-gray-400 p-2 rounded relative mt-2 flex-1">
                                    <legend className="text-blue-600 px-1 font-bold absolute -top-2 left-2 bg-[#EBE9D8]">Tax Rates</legend>

                                    {/* Top Labels */}
                                    <div className="flex items-center gap-4 mb-4 mt-2">
                                        <label className="font-bold text-gray-700">Scheme of Taxation</label>
                                        <select className="border border-gray-400 bg-white p-1 shadow-inner text-blue-800 font-bold w-40" disabled={isReadOnly}>
                                            <option>Employee</option>
                                        </select>
                                    </div>

                                    {/* Table */}
                                    <div className="bg-white border text-center border-gray-400 shadow-inner h-[400px] overflow-auto">
                                        <table className="w-full border-collapse">
                                            <thead className="bg-[#D4D0C8] border-b border-gray-400 text-xs text-gray-700 sticky top-0">
                                                <tr>
                                                    <th className="border-r border-gray-400 p-1">TaxId</th>
                                                    <th className="border-r border-gray-400 p-1">EE Rate</th>
                                                    <th className="border-r border-gray-400 p-1">ER Rate</th>
                                                    <th className="border-r border-gray-400 p-1">Fem. Start Age</th>
                                                    <th className="border-r border-gray-400 p-1">Fem. End Age</th>
                                                    <th className="border-r border-gray-400 p-1">Male Start Age</th>
                                                    <th className="border-r border-gray-400 p-1">Male End Age</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {taxData.map((row) => (
                                                    <tr key={row.id} className="odd:bg-blue-50 even:bg-white hover:bg-yellow-100">
                                                        <td className="border-r border-gray-200 p-1 font-bold text-blue-800 text-left pl-2">{row.id}</td>
                                                        <td className="border-r border-gray-200 p-1 font-bold text-right pr-2">{row.eeRate}</td>
                                                        <td className="border-r border-gray-200 p-1 font-bold text-right pr-2">{row.erRate}</td>
                                                        <td className="border-r border-gray-200 p-1 font-bold text-right pr-2">{row.fStart}</td>
                                                        <td className="border-r border-gray-200 p-1 font-bold text-right pr-2">{row.fEnd}</td>
                                                        <td className="border-r border-gray-200 p-1 font-bold text-right pr-2">{row.mStart}</td>
                                                        <td className="p-1 font-bold text-right pr-2">{row.mEnd}</td>
                                                    </tr>
                                                ))}
                                                {/* Fill empty rows for visual consistency */}
                                                {[...Array(10)].map((_, i) => (
                                                    <tr key={`empty-${i}`} className="odd:bg-blue-50 even:bg-white h-6">
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
                                </fieldset>
                            </div>
                        )}

                        {activeTab === 'YTD Information' && (
                            <div className="flex flex-col gap-4 h-full pt-4">
                                <div className="grid grid-cols-2 gap-8">
                                    {/* Left Side: Gross & Deductions */}
                                    <div className="flex flex-col gap-2">
                                        <div className="grid grid-cols-[1fr_120px] items-center gap-2">
                                            <label className="font-bold text-gray-700">Taxable Gross</label>
                                            <input type="text" value={formData.ytd_taxableGross} className="border border-gray-400 bg-white p-1 shadow-inner text-blue-800 font-bold text-right" readOnly={isReadOnly} />
                                        </div>
                                        <div className="grid grid-cols-[1fr_120px] items-center gap-2">
                                            <label className="font-bold text-gray-700">Non-Taxable Gross</label>
                                            <input type="text" value={formData.ytd_nonTaxableGross} className="border border-gray-400 bg-white p-1 shadow-inner text-blue-800 font-bold text-right" readOnly={isReadOnly} />
                                        </div>
                                        <div className="grid grid-cols-[1fr_120px] items-center gap-2">
                                            <label className="font-bold text-gray-700">Regular Pay</label>
                                            <input type="text" value={formData.ytd_regularPay} className="border border-gray-400 bg-white p-1 shadow-inner text-blue-800 font-bold text-right" readOnly={isReadOnly} />
                                        </div>
                                        <div className="grid grid-cols-[1fr_120px] items-center gap-2">
                                            <label className="font-bold text-gray-700">Overtime Pay</label>
                                            <input type="text" value={formData.ytd_overtimePay} className="border border-gray-400 bg-white p-1 shadow-inner text-blue-800 font-bold text-right" readOnly={isReadOnly} />
                                        </div>
                                        <div className="grid grid-cols-[1fr_120px] items-center gap-2">
                                            <label className="font-bold text-gray-700">Total Ded.</label>
                                            <input type="text" value={formData.ytd_totalDed} className="border border-gray-400 bg-white p-1 shadow-inner text-blue-800 font-bold text-right" readOnly={isReadOnly} />
                                        </div>
                                    </div>

                                    {/* Right Side: Employee vs Employer Breakdown */}
                                    <div className="border border-gray-400 bg-[#E0DCCF] p-4">
                                        <div className="grid grid-cols-[1fr_100px_100px] gap-2 mb-2 border-b border-gray-400 pb-1">
                                            <div></div>
                                            <div className="font-bold text-blue-800 text-center">Employee</div>
                                            <div className="font-bold text-blue-800 text-center">Employer</div>
                                        </div>

                                        {[
                                            { label: 'Income Tax', emp: formData.ytd_emp_incomeTax, empr: formData.ytd_empr_incomeTax },
                                            { label: 'H.E.A.R.T.', emp: formData.ytd_emp_heart, empr: formData.ytd_empr_heart },
                                            { label: 'NIS', emp: formData.ytd_emp_nis, empr: formData.ytd_empr_nis },
                                            { label: 'NHT', emp: formData.ytd_emp_nht, empr: formData.ytd_empr_nht },
                                            { label: 'Education Tax', emp: formData.ytd_emp_edTax, empr: formData.ytd_empr_edTax },
                                            { label: 'Pension', emp: formData.ytd_emp_pension, empr: formData.ytd_empr_pension },
                                        ].map(row => (
                                            <div key={row.label} className="grid grid-cols-[1fr_100px_100px] gap-2 mb-2 items-center">
                                                <label className="font-bold text-gray-700">{row.label}</label>
                                                <input type="text" value={row.emp} className="border border-gray-400 bg-white p-1 shadow-inner text-blue-800 font-bold text-right" readOnly={isReadOnly} />
                                                <input type="text" value={row.empr} className="border border-gray-400 bg-white p-1 shadow-inner text-blue-800 font-bold text-right" readOnly={isReadOnly} />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Shared Right Sidebar - Buttons */}
                    <div className="w-24 flex flex-col gap-2">
                        <button
                            onClick={() => setIsReadOnly(false)}
                            className={`flex flex-col items-center justify-center p-2 border-b-2 border-r-2 border-gray-500 bg-white hover:bg-gray-100 active:border-0 active:translate-y-0.5 ${!isReadOnly ? 'opacity-50 cursor-not-allowed' : ''}`}
                            disabled={!isReadOnly}
                        >
                            <Edit className="text-blue-600 mb-1" size={24} />
                            <span className="font-bold">Edit</span>
                        </button>
                        <button
                            onClick={() => setIsReadOnly(true)}
                            className="flex flex-col items-center justify-center p-2 border-b-2 border-r-2 border-gray-500 bg-white hover:bg-gray-100 active:border-0 active:translate-y-0.5"
                        >
                            <Save className="text-green-600 mb-1" size={24} />
                            <span className="font-bold">Save</span>
                        </button>
                        <button className="flex flex-col items-center justify-center p-2 border-b-2 border-r-2 border-gray-500 bg-white hover:bg-gray-100 active:border-0 active:translate-y-0.5">
                            <RotateCcw className="text-blue-400 mb-1" size={24} />
                            <span className="font-bold">Revert</span>
                        </button>

                        <div className="flex-1"></div>

                        <button
                            onClick={() => navigate('/')}
                            className="flex flex-col items-center justify-center p-2 border-b-2 border-r-2 border-gray-500 bg-white hover:bg-gray-100 active:border-0 active:translate-y-0.5 mb-4"
                        >
                            <LogOut className="text-red-600 mb-1" size={24} />
                            <span className="font-bold">Exit</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CompanySettings;
