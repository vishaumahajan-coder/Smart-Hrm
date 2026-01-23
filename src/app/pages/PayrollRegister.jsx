import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, Printer, LogOut } from 'lucide-react';

const PayrollRegister = () => {
    const navigate = useNavigate();

    // Order Options state
    const [orderOptions, setOrderOptions] = useState({
        primaryOrder: 'None',
        primarySort: 'Ascending',
        secondaryOrder: 'None',
        secondarySort: 'Ascending',
        tertiaryOrder: 'None',
        tertiarySort: 'Ascending'
    });

    // Report Options state
    const [reportOptions, setReportOptions] = useState({
        displayYTDCurrentTrans: false,
        displayPensionRate: false,
        displayPaymentDetails: false,
        displayJobTitle: false,
        displayEmployeesPaidOnly: false,
        convertToLocalCurrency: false,
        printWideFormat: false,
        inputNarratives: false,
        displayPensionSeparately: false,
        displayPayPeriod: false
    });

    // Filter Options state
    const [filterOptions, setFilterOptions] = useState({
        payPeriod: '3',
        ofYear: '2026',
        paySeries: '',
        payGrade: '',
        employee: '',
        department: '',
        branch: '',
        location: ''
    });

    const handleOrderChange = (field, value) => {
        setOrderOptions(prev => ({ ...prev, [field]: value }));
    };

    const handleReportChange = (field) => {
        setReportOptions(prev => ({ ...prev, [field]: !prev[field] }));
    };

    const handleFilterChange = (field, value) => {
        setFilterOptions(prev => ({ ...prev, [field]: value }));
    };

    return (
        <div className="flex flex-col h-full w-full bg-[#EBE9D8] font-sans text-xs">
            {/* Header */}
            <div className="bg-[#D4D0C8] border-b border-gray-400 px-2 py-1">
                <span className="font-bold text-gray-700">Payroll Register</span>
            </div>

            {/* Content Area */}
            <div className="flex-1 p-4 overflow-auto">
                <div className="flex gap-4 h-full">
                    {/* Main Content */}
                    <div className="flex-1 flex flex-col gap-4">
                        {/* Order Options Section */}
                        <fieldset className="border border-gray-400 p-3 rounded relative">
                            <legend className="text-blue-600 px-1 font-bold absolute -top-2 left-2 bg-[#EBE9D8]">
                                Order Options
                            </legend>

                            <div className="grid grid-cols-3 gap-4 mt-2">
                                {/* Primary Order */}
                                <div className="flex flex-col gap-2">
                                    <label className="text-gray-700 font-bold">Primary Order</label>
                                    <select
                                        value={orderOptions.primaryOrder}
                                        onChange={(e) => handleOrderChange('primaryOrder', e.target.value)}
                                        className="p-1 border border-gray-400 bg-white text-blue-800 font-bold shadow-inner"
                                    >
                                        <option value="None">None</option>
                                        <option value="Employee ID">Employee ID</option>
                                        <option value="Department">Department</option>
                                        <option value="Branch">Branch</option>
                                    </select>
                                    <div className="flex gap-4">
                                        <label className="flex items-center gap-1">
                                            <input
                                                type="radio"
                                                name="primarySort"
                                                checked={orderOptions.primarySort === 'Ascending'}
                                                onChange={() => handleOrderChange('primarySort', 'Ascending')}
                                            />
                                            <span>Ascending</span>
                                        </label>
                                        <label className="flex items-center gap-1">
                                            <input
                                                type="radio"
                                                name="primarySort"
                                                checked={orderOptions.primarySort === 'Descending'}
                                                onChange={() => handleOrderChange('primarySort', 'Descending')}
                                            />
                                            <span>Descending</span>
                                        </label>
                                    </div>
                                </div>

                                {/* Secondary Order */}
                                <div className="flex flex-col gap-2">
                                    <label className="text-gray-700 font-bold">Secondary Order</label>
                                    <select
                                        value={orderOptions.secondaryOrder}
                                        onChange={(e) => handleOrderChange('secondaryOrder', e.target.value)}
                                        className="p-1 border border-gray-400 bg-white text-blue-800 font-bold shadow-inner"
                                    >
                                        <option value="None">None</option>
                                        <option value="Employee ID">Employee ID</option>
                                        <option value="Department">Department</option>
                                        <option value="Branch">Branch</option>
                                    </select>
                                    <div className="flex gap-4">
                                        <label className="flex items-center gap-1">
                                            <input
                                                type="radio"
                                                name="secondarySort"
                                                checked={orderOptions.secondarySort === 'Ascending'}
                                                onChange={() => handleOrderChange('secondarySort', 'Ascending')}
                                            />
                                            <span>Ascending</span>
                                        </label>
                                        <label className="flex items-center gap-1">
                                            <input
                                                type="radio"
                                                name="secondarySort"
                                                checked={orderOptions.secondarySort === 'Descending'}
                                                onChange={() => handleOrderChange('secondarySort', 'Descending')}
                                            />
                                            <span>Descending</span>
                                        </label>
                                    </div>
                                </div>

                                {/* Tertiary Order */}
                                <div className="flex flex-col gap-2">
                                    <label className="text-gray-700 font-bold">Tertiary Order</label>
                                    <select
                                        value={orderOptions.tertiaryOrder}
                                        onChange={(e) => handleOrderChange('tertiaryOrder', e.target.value)}
                                        className="p-1 border border-gray-400 bg-white text-blue-800 font-bold shadow-inner"
                                    >
                                        <option value="None">None</option>
                                        <option value="Employee ID">Employee ID</option>
                                        <option value="Department">Department</option>
                                        <option value="Branch">Branch</option>
                                    </select>
                                    <div className="flex gap-4">
                                        <label className="flex items-center gap-1">
                                            <input
                                                type="radio"
                                                name="tertiarySort"
                                                checked={orderOptions.tertiarySort === 'Ascending'}
                                                onChange={() => handleOrderChange('tertiarySort', 'Ascending')}
                                            />
                                            <span>Ascending</span>
                                        </label>
                                        <label className="flex items-center gap-1">
                                            <input
                                                type="radio"
                                                name="tertiarySort"
                                                checked={orderOptions.tertiarySort === 'Descending'}
                                                onChange={() => handleOrderChange('tertiarySort', 'Descending')}
                                            />
                                            <span>Descending</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </fieldset>

                        {/* Report Options Section */}
                        <fieldset className="border border-gray-400 p-3 rounded relative">
                            <legend className="text-blue-600 px-1 font-bold absolute -top-2 left-2 bg-[#EBE9D8]">
                                Report Options
                            </legend>

                            <div className="grid grid-cols-2 gap-x-8 gap-y-2 mt-2">
                                <label className="flex items-center gap-2">
                                    <input
                                        type="checkbox"
                                        checked={reportOptions.displayYTDCurrentTrans}
                                        onChange={() => handleReportChange('displayYTDCurrentTrans')}
                                    />
                                    <span>Display Year To Dates For Current Transactions Only</span>
                                </label>

                                <label className="flex items-center gap-2">
                                    <input
                                        type="checkbox"
                                        checked={reportOptions.inputNarratives}
                                        onChange={() => handleReportChange('inputNarratives')}
                                    />
                                    <span>Input Narratives</span>
                                </label>

                                <label className="flex items-center gap-2">
                                    <input
                                        type="checkbox"
                                        checked={reportOptions.displayPensionRate}
                                        onChange={() => handleReportChange('displayPensionRate')}
                                    />
                                    <span>Display Pension Rate</span>
                                </label>

                                <label className="flex items-center gap-2">
                                    <input
                                        type="checkbox"
                                        checked={reportOptions.displayPensionSeparately}
                                        onChange={() => handleReportChange('displayPensionSeparately')}
                                    />
                                    <span>Display required and voluntary pension amounts separately</span>
                                </label>

                                <label className="flex items-center gap-2">
                                    <input
                                        type="checkbox"
                                        checked={reportOptions.displayPaymentDetails}
                                        onChange={() => handleReportChange('displayPaymentDetails')}
                                    />
                                    <span>Display Payment Details</span>
                                </label>

                                <label className="flex items-center gap-2">
                                    <input
                                        type="checkbox"
                                        checked={reportOptions.displayPayPeriod}
                                        onChange={() => handleReportChange('displayPayPeriod')}
                                    />
                                    <span>Display Pay Period</span>
                                </label>

                                <label className="flex items-center gap-2">
                                    <input
                                        type="checkbox"
                                        checked={reportOptions.displayJobTitle}
                                        onChange={() => handleReportChange('displayJobTitle')}
                                    />
                                    <span>Display Job Title</span>
                                </label>

                                <div></div>

                                <label className="flex items-center gap-2">
                                    <input
                                        type="checkbox"
                                        checked={reportOptions.displayEmployeesPaidOnly}
                                        onChange={() => handleReportChange('displayEmployeesPaidOnly')}
                                    />
                                    <span>Display Employee's Paid this Period Only</span>
                                </label>

                                <div></div>

                                <label className="flex items-center gap-2">
                                    <input
                                        type="checkbox"
                                        checked={reportOptions.convertToLocalCurrency}
                                        onChange={() => handleReportChange('convertToLocalCurrency')}
                                    />
                                    <span>Convert to Local Currency</span>
                                </label>

                                <div></div>

                                <label className="flex items-center gap-2">
                                    <input
                                        type="checkbox"
                                        checked={reportOptions.printWideFormat}
                                        onChange={() => handleReportChange('printWideFormat')}
                                    />
                                    <span>Print Wide Format</span>
                                </label>
                            </div>
                        </fieldset>

                        {/* Filter Options Section */}
                        <fieldset className="border border-gray-400 p-3 rounded relative">
                            <legend className="text-blue-600 px-1 font-bold absolute -top-2 left-2 bg-[#EBE9D8]">
                                Filter Options
                            </legend>

                            <div className="grid grid-cols-2 gap-4 mt-2">
                                {/* Left Column */}
                                <div className="flex flex-col gap-2">
                                    <div className="flex items-center gap-2">
                                        <label className="text-gray-700 font-bold w-24">Pay Period</label>
                                        <input
                                            type="text"
                                            value={filterOptions.payPeriod}
                                            onChange={(e) => handleFilterChange('payPeriod', e.target.value)}
                                            className="w-16 p-1 border border-gray-400 bg-white text-blue-800 font-bold shadow-inner"
                                        />
                                        <span className="text-gray-700 font-bold">Of Year</span>
                                        <input
                                            type="text"
                                            value={filterOptions.ofYear}
                                            onChange={(e) => handleFilterChange('ofYear', e.target.value)}
                                            className="w-20 p-1 border border-gray-400 bg-white text-blue-800 font-bold shadow-inner"
                                        />
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <label className="text-gray-700 font-bold w-24">Pay Series</label>
                                        <input
                                            type="text"
                                            value={filterOptions.paySeries}
                                            onChange={(e) => handleFilterChange('paySeries', e.target.value)}
                                            className="flex-1 p-1 border border-gray-400 bg-white text-blue-800 font-bold shadow-inner"
                                        />
                                        <button className="px-2 py-1 border border-gray-400 bg-[#E0DCCF] hover:bg-gray-200 font-bold">Filter</button>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <label className="text-gray-700 font-bold w-24">Pay Grade</label>
                                        <input
                                            type="text"
                                            value={filterOptions.payGrade}
                                            onChange={(e) => handleFilterChange('payGrade', e.target.value)}
                                            className="flex-1 p-1 border border-gray-400 bg-white text-blue-800 font-bold shadow-inner"
                                        />
                                        <button className="px-2 py-1 border border-gray-400 bg-[#E0DCCF] hover:bg-gray-200 font-bold">Filter</button>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <label className="text-gray-700 font-bold w-24">Employee</label>
                                        <input
                                            type="text"
                                            value={filterOptions.employee}
                                            onChange={(e) => handleFilterChange('employee', e.target.value)}
                                            className="flex-1 p-1 border border-gray-400 bg-white text-blue-800 font-bold shadow-inner"
                                        />
                                        <button className="px-2 py-1 border border-gray-400 bg-[#E0DCCF] hover:bg-gray-200 font-bold">Filter</button>
                                    </div>
                                </div>

                                {/* Right Column */}
                                <div className="flex flex-col gap-2">
                                    <div className="flex items-center gap-2">
                                        <label className="text-gray-700 font-bold w-24">Department</label>
                                        <input
                                            type="text"
                                            value={filterOptions.department}
                                            onChange={(e) => handleFilterChange('department', e.target.value)}
                                            className="flex-1 p-1 border border-gray-400 bg-white text-blue-800 font-bold shadow-inner"
                                        />
                                        <button className="px-2 py-1 border border-gray-400 bg-[#E0DCCF] hover:bg-gray-200 font-bold">Filter</button>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <label className="text-gray-700 font-bold w-24">Branch</label>
                                        <input
                                            type="text"
                                            value={filterOptions.branch}
                                            onChange={(e) => handleFilterChange('branch', e.target.value)}
                                            className="flex-1 p-1 border border-gray-400 bg-white text-blue-800 font-bold shadow-inner"
                                        />
                                        <button className="px-2 py-1 border border-gray-400 bg-[#E0DCCF] hover:bg-gray-200 font-bold">Filter</button>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <label className="text-gray-700 font-bold w-24">Location</label>
                                        <input
                                            type="text"
                                            value={filterOptions.location}
                                            onChange={(e) => handleFilterChange('location', e.target.value)}
                                            className="flex-1 p-1 border border-gray-400 bg-white text-blue-800 font-bold shadow-inner"
                                        />
                                        <button className="px-2 py-1 border border-gray-400 bg-[#E0DCCF] hover:bg-gray-200 font-bold">Filter</button>
                                    </div>
                                </div>
                            </div>
                        </fieldset>
                    </div>

                    {/* Right Side - Action Buttons */}
                    <div className="flex flex-col gap-2 w-24">
                        <button
                            onClick={() => navigate('/payroll/register/print')}
                            className="flex flex-col items-center justify-center p-3 border border-gray-400 border-b-2 border-r-2 border-gray-500 bg-[#E0DCCF] hover:bg-gray-200"
                        >
                            <Eye size={24} className="text-blue-600 mb-1" />
                            <span className="font-bold">Preview</span>
                        </button>

                        <button
                            onClick={() => navigate('/payroll/register/print')}
                            className="flex flex-col items-center justify-center p-3 border border-gray-400 border-b-2 border-r-2 border-gray-500 bg-[#E0DCCF] hover:bg-gray-200"
                        >
                            <Printer size={24} className="text-gray-600 mb-1" />
                            <span className="font-bold">Print</span>
                        </button>

                        <div className="flex-1"></div>

                        <button
                            onClick={() => navigate(-1)}
                            className="flex flex-col items-center justify-center p-3 border border-gray-400 border-b-2 border-r-2 border-gray-500 bg-[#E0DCCF] hover:bg-gray-200"
                        >
                            <LogOut size={24} className="text-green-600 mb-1" />
                            <span className="font-bold">Exit</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PayrollRegister;
