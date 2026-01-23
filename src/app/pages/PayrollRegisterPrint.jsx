import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Printer, LogOut, ZoomIn, ZoomOut, ChevronLeft, ChevronRight } from 'lucide-react';

const PayrollRegisterPrint = () => {
    const navigate = useNavigate();

    // Sample employee data for the report
    const employeeData = [
        {
            trn: '139-252-075',
            employeeId: 'RATES',
            name: 'Tot Free: SALARIES OF 1,799,375.00',
            amountYTD: '',
            nis: '',
            description: 'AMOUNT YTD',
            net: '',
            amountYTD2: '3,545.17',
            nis2: '3,794.28',
            description2: '3,829.27',
            net2: '3,770.37',
            nht: '34,261.28',
            edtax: '',
            pension: '951.00',
            ytdPay: '',
            netPay: '',
        }
    ];

    const reportData = {
        companyName: 'AMGL Account Outsourcing Group Jamaica Limited-MGMT',
        reportTitle: 'PAYROLL REGISTER',
        systemAuditInfo: {
            payrollPeriod: '1 of 52 / 2026',
            periodEnding: 'Friday, January 16, 2026',
            payrollCycle: '1 Weekly',
            printDateTime: 'Wednesday, January 22, 2026 at 01:48:07 PM',
            printedBy: '1 MCBOOKS'
        },
        reportOptions: {
            employees: 'BENAPFL, Ricardo',
            departments: 'ALL',
            branches: 'ALL',
            locations: 'ALL',
            paySeries: 'ALL',
            payGrade: 'ALL',
            orderedBy: 'Employee ID (ASC)'
        }
    };

    return (
        <div className="flex flex-col h-full w-full bg-[#808080] font-sans text-xs">
            {/* Toolbar */}
            <div className="bg-[#EBE9D8] border-b border-gray-400 px-2 py-1 flex items-center gap-2 no-print">
                <span className="font-bold text-gray-700">PayrollRegister.frx - Page 1</span>
                <div className="flex-1"></div>
                <div className="flex items-center gap-1">
                    <button className="p-1 border border-gray-400 bg-white hover:bg-gray-100">
                        <ZoomOut size={16} />
                    </button>
                    <span className="px-2">100%</span>
                    <button className="p-1 border border-gray-400 bg-white hover:bg-gray-100">
                        <ZoomIn size={16} />
                    </button>
                    <button className="p-1 border border-gray-400 bg-white hover:bg-gray-100">
                        <ChevronLeft size={16} />
                    </button>
                    <span className="px-2">1 / 1</span>
                    <button className="p-1 border border-gray-400 bg-white hover:bg-gray-100">
                        <ChevronRight size={16} />
                    </button>
                </div>
            </div>

            {/* Content Area - Print Preview */}
            <div className="flex-1 p-4 overflow-auto flex justify-center">
                <div className="bg-white shadow-lg border border-gray-300 w-[900px] min-h-[1100px] p-8">
                    {/* Report Header */}
                    <div className="text-center mb-4">
                        <h1 className="text-sm font-bold">{reportData.companyName}</h1>
                        <h2 className="text-lg font-bold mt-1">{reportData.reportTitle}</h2>
                    </div>

                    {/* Two Column Layout for System Audit Info and Report Options */}
                    <div className="flex gap-8 mb-6 text-[10px]">
                        {/* System Audit Info */}
                        <div className="flex-1">
                            <div className="font-bold mb-1 border-b border-gray-400">SYSTEM AUDIT INFO</div>
                            <div className="grid grid-cols-[120px_1fr] gap-y-0.5">
                                <span className="font-bold">Payroll Period(s)</span>
                                <span>: {reportData.systemAuditInfo.payrollPeriod}</span>
                                <span className="font-bold">Period Ending</span>
                                <span>: {reportData.systemAuditInfo.periodEnding}</span>
                                <span className="font-bold">Payroll Cycle</span>
                                <span>: {reportData.systemAuditInfo.payrollCycle}</span>
                                <span className="font-bold">Print Date/Time</span>
                                <span>: {reportData.systemAuditInfo.printDateTime}</span>
                                <span className="font-bold">Printed By</span>
                                <span>: {reportData.systemAuditInfo.printedBy}</span>
                            </div>
                        </div>

                        {/* Report Options */}
                        <div className="flex-1">
                            <div className="font-bold mb-1 border-b border-gray-400">REPORT OPTION(S)</div>
                            <div className="grid grid-cols-[100px_1fr] gap-y-0.5">
                                <span className="font-bold">Employee(s)</span>
                                <span>: {reportData.reportOptions.employees}</span>
                                <span className="font-bold">Department(s)</span>
                                <span>: {reportData.reportOptions.departments}</span>
                                <span className="font-bold">Branch(es)</span>
                                <span>: {reportData.reportOptions.branches}</span>
                                <span className="font-bold">Location(s)</span>
                                <span>: {reportData.reportOptions.locations}</span>
                                <span className="font-bold">Pay Series</span>
                                <span>: {reportData.reportOptions.paySeries}</span>
                                <span className="font-bold">Pay Grade</span>
                                <span>: {reportData.reportOptions.payGrade}</span>
                                <span className="font-bold">Ordered By</span>
                                <span>: {reportData.reportOptions.orderedBy}</span>
                            </div>
                        </div>
                    </div>

                    {/* Employee Section */}
                    <div className="mb-4">
                        <div className="flex gap-4 text-[10px] border-b border-gray-600 pb-1 mb-2">
                            <div>
                                <span className="font-bold">NIS #:</span> <span>1392907E</span>
                            </div>
                            <div>
                                <span className="font-bold">Employee ID:</span> <span>LASSER</span>
                            </div>
                        </div>

                        {/* Main Data Table */}
                        <table className="w-full text-[9px] border-collapse">
                            <thead>
                                <tr className="border-b border-gray-400">
                                    <th className="text-left p-1 font-bold">TRN</th>
                                    <th className="text-left p-1 font-bold">EMPLOYEE</th>
                                    <th className="text-right p-1 font-bold">AMOUNT</th>
                                    <th className="text-right p-1 font-bold">AMOUNT YTD</th>
                                    <th className="text-right p-1 font-bold">NIS</th>
                                    <th className="text-left p-1 font-bold">DESCRIPTION</th>
                                    <th className="text-right p-1 font-bold">NET</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="p-1">139-252-075</td>
                                    <td className="p-1">BENAPFL, Ricardo</td>
                                    <td className="p-1 text-right">1,000.00</td>
                                    <td className="p-1 text-right">17,671.20</td>
                                    <td className="p-1 text-right">63,244.00</td>
                                    <td className="p-1">Tot Free: SALARIES OF 1,799,375.00</td>
                                    <td className="p-1 text-right">L20</td>
                                </tr>
                            </tbody>
                        </table>

                        {/* NIS RELATIVLY/Rendu Section */}
                        <div className="mt-4 text-[9px]">
                            <div className="font-bold border-b border-gray-400 mb-1">NIS# RELATIVLY/Rendu</div>
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr className="border-b border-gray-300">
                                        <th className="text-left p-1 font-bold">DESCRIPTION</th>
                                        <th className="text-right p-1 font-bold">UNITS</th>
                                        <th className="text-right p-1 font-bold">AMOUNT YTD</th>
                                        <th className="text-right p-1 font-bold">NIS</th>
                                        <th className="text-right p-1 font-bold">AMOUNT YTD</th>
                                        <th className="text-right p-1 font-bold">YTD TAX AMT</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="p-1">D - 1 - Ded</td>
                                        <td className="p-1 text-right">45.00</td>
                                        <td className="p-1 text-right">3,581.93</td>
                                        <td className="p-1 text-right">3,024.13</td>
                                        <td className="p-1 text-right">3,545.17</td>
                                        <td className="p-1 text-right">3,794.28</td>
                                    </tr>
                                    <tr>
                                        <td className="p-1">D - 1 - Ded</td>
                                        <td className="p-1 text-right"></td>
                                        <td className="p-1 text-right">5,068.12</td>
                                        <td className="p-1 text-right">6,284.4</td>
                                        <td className="p-1 text-right">3,829.27</td>
                                        <td className="p-1 text-right">3,770.37</td>
                                    </tr>
                                    <tr>
                                        <td className="p-1">D - 1 Spl Pay</td>
                                        <td className="p-1 text-right"></td>
                                        <td className="p-1 text-right">1,581.100</td>
                                        <td className="p-1 text-right">6,821.6</td>
                                        <td className="p-1 text-right">34,261.28</td>
                                        <td className="p-1 text-right">951.00</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* Summary Section */}
                        <div className="mt-4 flex gap-8 text-[9px]">
                            <div className="border border-gray-400 p-2">
                                <div className="font-bold mb-1">TOTALS</div>
                                <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                                    <span>Vol. Ded</span>
                                    <span className="text-right">0.00</span>
                                    <span>Gross</span>
                                    <span className="text-right">8,526.65</span>
                                    <span>NIS Gross</span>
                                    <span className="text-right">8,526.65</span>
                                </div>
                            </div>

                            <div className="border border-gray-400 p-2">
                                <div className="font-bold mb-1">TAX INFO</div>
                                <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                                    <span>NHT</span>
                                    <span className="text-right">170.53</span>
                                    <span>EDTAX</span>
                                    <span className="text-right">0.00</span>
                                    <span>NIS</span>
                                    <span className="text-right">213.17</span>
                                    <span>HEART</span>
                                    <span className="text-right">0.00</span>
                                </div>
                            </div>

                            <div className="border border-gray-400 p-2">
                                <div className="font-bold mb-1">YTD FOR 1/2026</div>
                                <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                                    <span>MrsPLTB</span>
                                    <span className="text-right">0</span>
                                    <span>Hrs</span>
                                    <span className="text-right">9</span>
                                    <span>Taxable Inc.</span>
                                    <span className="text-right">29,341.54</span>
                                </div>
                            </div>

                            <div className="border border-gray-400 p-2">
                                <div className="font-bold mb-1">477</div>
                                <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                                    <span>YTD PAY</span>
                                    <span className="text-right">14581</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Toolbar */}
            <div className="bg-[#EBE9D8] border-t border-gray-400 px-2 py-1 flex items-center gap-2 no-print">
                <button
                    onClick={() => window.print()}
                    className="flex items-center gap-1 px-3 py-1 border border-gray-400 bg-white hover:bg-gray-100"
                >
                    <Printer size={16} />
                    <span className="font-bold">Print</span>
                </button>
                <div className="flex-1"></div>
                <button
                    onClick={() => navigate(-1)}
                    className="flex items-center gap-1 px-3 py-1 border border-gray-400 bg-white hover:bg-gray-100"
                >
                    <LogOut size={16} />
                    <span className="font-bold">Close</span>
                </button>
            </div>
        </div>
    );
};

export default PayrollRegisterPrint;
