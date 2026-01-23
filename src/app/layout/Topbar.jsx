import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Monitor, Settings, FileText, Printer, Search,
    CheckSquare, Folder, Layout, LogOut, X,
    ChevronDown, Save, Plus, HelpCircle, ChevronRight, Menu
} from 'lucide-react';

const Topbar = ({ onLogout, onSelectCompany, companyName, isCompanySelected = false }) => {
    const [activeMenu, setActiveMenu] = useState(null);
    const [activeSubMenu, setActiveSubMenu] = useState(null);
    const [activeSubSubMenu, setActiveSubSubMenu] = useState(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const navigate = useNavigate();

    const menus = [
        {
            name: 'System',
            items: [
                { label: 'Select Company', action: 'select_company' },
                {
                    label: 'General',
                    subItems: [
                        { label: 'General Details', action: 'general_details' },
                        {
                            label: 'Additional',
                            subItems: [
                                { label: 'Bank Details', action: 'bank_details' }
                            ]
                        }
                    ]
                },
                {
                    label: 'Company Setup',
                    subItems: [
                        { label: 'General Setup', action: 'company_general_setup' },
                        {
                            label: 'Additional Setup Options',
                            subItems: [
                                { label: 'Bank Details', action: 'bank_details' }
                            ]
                        }
                    ]
                },
                { label: 'Customized Modules', action: 'customized_modules' },
                { label: 'System Settings', action: 'system_settings' },
                { label: 'Log Out', action: 'logout' },
                { label: 'Quit', action: 'quit' }
            ]
        },
        {
            name: 'Processing',
            items: [
                {
                    label: 'Transaction Entry',
                    subItems: [
                        { label: 'All Entries', action: 'all_entries' },
                        { label: 'User Labels', action: 'user_labels' },
                        { label: 'Mass Entry', action: 'mass_entry' },
                        { label: 'Import Saved Entries', action: 'import_saved_entries' },
                        { label: 'Import Time Sheets', action: 'import_time_sheets' },
                        { label: 'Payroll Wizard', action: 'payroll_wizard' },
                        { label: 'Generate Sales Share', action: 'generate_sales_share' },
                        { label: 'Gang Shift Maintenance', action: 'gang_shift_maintenance' },
                        { label: 'Import JMD To FX Transactions', action: 'import_jmd_fx' }
                    ]
                },
                { label: 'Entered Transaction Register', action: 'entered_transaction_register' },
                { type: 'separator' },
                { label: 'Time Keeper', action: 'time_keeper' },
                { label: 'Post Transactions', action: 'post_transactions', shortcut: 'CTRL+F1' },
                { label: 'Posted Transaction Register', action: 'posted_transaction_register', shortcut: 'CTRL+F2' },
                { type: 'separator' },
                { label: 'Payroll Calculation', action: 'payroll_calculation' },
                { label: 'Calculation Register', action: 'calculation_register', shortcut: 'CTRL+F3' },
                { type: 'separator' },
                { label: 'Payroll Update', action: 'payroll_update' },
                { label: 'Payroll Register', action: 'payroll_register' },
                { label: 'Payroll Register Summary', action: 'payroll_register_summary' },
                { type: 'separator' },
                { label: 'Pay Disbursement', action: 'pay_disbursement' },
                {
                    label: 'Cheque Printing',
                    subItems: [
                        { label: 'Batch Printing', action: 'cheque_batch' },
                        { label: 'Single Cheque', action: 'cheque_single' },
                        { label: 'Print History', action: 'cheque_history' }
                    ]
                },
                { type: 'separator' },
                {
                    label: 'Electronic Payments',
                    subItems: [
                        { label: 'BNS Beneficiary Transfer', action: 'bank_bns' },
                        { label: 'NCB Transfer', action: 'bank_ncb' },
                        { label: 'JN Bank Transfer', action: 'bank_jn' },
                        { label: 'JMMB Transfer', action: 'bank_jmmb' },
                        { label: 'Scotiabank Transfer', action: 'bank_scotia' },
                        { label: 'CIBC/First Global Transfer', action: 'bank_cibc' }
                    ]
                },
                { type: 'separator' },
                { label: 'Processing Status', action: 'processing_status' },
                { type: 'separator' },
                { label: 'Advance Payment', action: 'advance_payment' },
                { type: 'separator' },
                { label: 'Redundancy', action: 'redundancy' }
            ]
        },
        {
            name: 'Jamaica Statutory',
            items: [
                { label: 'P45 Report', action: 'stat_p45' },
                { type: 'separator' },
                { label: 'NIS / NHT Returns', action: 'stat_nis_nht' },
                { type: 'separator' },
                { label: 'S01 Monthly Return', action: 'stat_s01' },
                { label: 'S02 Annual Return', action: 'stat_s02' },
                { type: 'separator' },
                { label: 'Pension Reports', action: 'stat_pension' },
                { type: 'separator' },
                { label: 'Tax Website Upload Files', action: 'stat_tax_upload' }
            ]
        },
        {
            name: 'HRM',
            items: [
                { label: 'Employee Management', action: 'employee_management' },
                { type: 'separator' },
                { label: 'Attendance Management', action: 'attendance_management' },
                { type: 'separator' },
                { label: 'Leave Management', action: 'leave_management' },
                { type: 'separator' },
                { label: 'Salary Management', action: 'salary_management' },
                { type: 'separator' },
                { label: 'Payroll Management', action: 'payroll_register' }
            ]
        },
        {
            name: 'Reports',
            items: [
                { label: 'Employee Report', action: 'employee_report' },
                { type: 'separator' },
                { label: 'Attendance Report', action: 'attendance_report' },
                { type: 'separator' },
                { label: 'Payroll Report', action: 'payroll_register' },
                { type: 'separator' },
                { label: 'Salary Report', action: 'salary_report' },
                { label: 'Bank Transfer Advice', action: 'bank_transfer_advice' },
                { label: 'Email P24 Advice', action: 'email_p24' }
            ]
        },
        {
            name: 'Files',
            items: [
                { label: 'Export Data', action: 'files_export' },
                { label: 'Import Data', action: 'files_import' },
                { label: 'Backup System', action: 'files_backup' },
                { label: 'Restore System', action: 'files_restore' }
            ]
        }
    ];

    const handleMenuClick = (item) => {
        if (item.subItems) return;

        if (item.action === 'select_company') onSelectCompany();
        if (item.action === 'logout' || item.action === 'quit') onLogout();

        if (isCompanySelected) {
            // Navigation logic for all actions
            const navigateTo = {
                'company_general_setup': '/company/setup',
                'general_details': '/company/setup',
                'system_settings': '/company/settings',
                'bank_details': '/bank/details',
                'all_entries': '/transaction/entry',
                'user_labels': '/processing/user-labels',
                'mass_entry': '/processing/mass-entry',
                'import_saved_entries': '/processing/import-saved',
                'import_time_sheets': '/processing/import-timesheets',
                'payroll_wizard': '/processing/payroll-wizard',
                'generate_sales_share': '/processing/sales-share',
                'gang_shift_maintenance': '/processing/gang-shift',
                'entered_transaction_register': '/processing/transaction-register',
                'time_keeper': '/processing/time-keeper',
                'post_transactions': '/processing/post-transactions',
                'posted_transaction_register': '/processing/posted-register',
                'payroll_calculation': '/processing/payroll-calculation',
                'calculation_register': '/processing/calculation-register',
                'payroll_update': '/processing/update',
                'payroll_register': '/payroll/register',
                'pay_disbursement': '/processing/disbursement',
                'processing_status': '/processing/status',
                'advance_payment': '/processing/advance',
                'redundancy': '/processing/redundancy',
                'employee_management': '/employees',
                'attendance_management': '/attendance',
                'leave_management': '/leave',
                'salary_management': '/salary',
                'employee_report': '/reports/employee',
                'attendance_report': '/reports/attendance',
                'salary_report': '/reports/salary',
                // New routes
                'stat_p45': '/statutory/p45',
                'stat_nis_nht': '/statutory/nis-nht',
                'stat_s01': '/statutory/s01',
                'stat_s02': '/statutory/s02',
                'stat_pension': '/statutory/pension',
                'stat_tax_upload': '/statutory/tax-upload',
                'bank_bns': '/banking/bns',
                'bank_ncb': '/banking/ncb',
                'bank_jn': '/banking/jn',
                'bank_jmmb': '/banking/jmmb',
                'bank_scotia': '/banking/bns', // Placeholder or specific route if exists
                'bank_cibc': '/banking/ncb',   // Placeholder
                'cheque_batch': '/processing/cheque-printing',
                'email_p24': '/reports/email-p24',
            };

            const path = navigateTo[item.action];
            if (path) {
                navigate(path);
            } else if (item.action?.startsWith('files_')) {
                navigate('/files');
            } else if (item.action) {
                // Default fallback for newly added items not yet in navigateTo
                navigate('/processing/status');
            }
        }

        if (!item.subItems) {
            setActiveMenu(null);
            setActiveSubMenu(null);
            setActiveSubSubMenu(null);
        }
        setIsMobileMenuOpen(false);
    };

    return (
        <div className="flex flex-col w-full font-sans select-none">
            {/* 1. Title Bar */}
            <div className="bg-[#0055E5] text-white h-7 flex items-center justify-between px-2 text-xs font-bold shadow-[inset_0_1px_0_rgba(255,255,255,0.3)]">
                <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-white/20 rounded-sm flex items-center justify-center text-[10px] italic">S</div>
                    <span className="truncate max-w-[200px] md:max-w-none">SMART Pay - {companyName || 'No Company Selected'}</span>
                </div>
                <div className="flex items-center gap-0.5">
                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden w-6 h-6 flex items-center justify-center hover:bg-blue-400 mr-1"
                    >
                        <Menu size={16} />
                    </button>
                    <div className="hidden md:flex items-center gap-0.5">
                        <button className="w-5 h-5 bg-[#316AC5] border border-white/20 flex items-center justify-center hover:bg-blue-400">_</button>
                        <button className="w-5 h-5 bg-[#316AC5] border border-white/20 flex items-center justify-center hover:bg-blue-400">□</button>
                        <button className="w-5 h-5 bg-[#E81123] border border-white/20 flex items-center justify-center hover:bg-red-600">✕</button>
                    </div>
                </div>
            </div>

            {/* 2. Menu Bar (Desktop) */}
            <div className="hidden md:flex bg-[#EBE9D8] border-b border-gray-400 items-center px-1 h-6 relative z-50">
                {menus.map((menu) => (
                    <div
                        key={menu.name}
                        className="relative"
                        onMouseEnter={() => {
                            if (activeMenu) setActiveMenu(menu.name);
                        }}
                    >
                        <button
                            onClick={() => setActiveMenu(activeMenu === menu.name ? null : menu.name)}
                            className={`px-3 py-0.5 text-xs hover:bg-[#316AC5] hover:text-white transition-none ${activeMenu === menu.name ? 'bg-[#316AC5] text-white' : 'text-black'
                                }`}
                        >
                            {menu.name}
                        </button>

                        {activeMenu === menu.name && menu.items && menu.items.length > 0 && (
                            <div className={`absolute top-full left-0 bg-[#EBE9D8] border border-gray-500 shadow-md py-1 min-w-[200px] z-[100] ${menu.name === 'Processing' || menu.name === 'System' ? '' : 'max-h-[85vh] overflow-y-auto'}`}>
                                {menu.items.map((item, idx) => (
                                    item.type === 'separator' ? (
                                        <div key={idx} className="border-t border-gray-400 my-1"></div>
                                    ) : (
                                        <div
                                            key={idx}
                                            className="relative group"
                                            onMouseEnter={() => setActiveSubMenu(item.label)}
                                        >
                                            <button
                                                onClick={() => {
                                                    if (item.subItems) {
                                                        setActiveSubMenu(activeSubMenu === item.label ? null : item.label);
                                                    } else {
                                                        handleMenuClick(item);
                                                    }
                                                }}
                                                className="w-full text-left px-4 py-1.5 text-xs hover:bg-[#316AC5] hover:text-white flex justify-between items-center"
                                            >
                                                <span>{item.label}</span>
                                                {item.subItems && <ChevronRight size={12} />}
                                                {item.shortcut && <span className="text-gray-500 group-hover:text-blue-100 ml-4 font-normal">{item.shortcut}</span>}
                                            </button>

                                            {/* Nested Submenu - Level 2 */}
                                            {item.subItems && activeSubMenu === item.label && (
                                                <div className="absolute top-0 left-full bg-[#EBE9D8] border border-gray-500 shadow-md py-1 min-w-[220px] z-[101]">
                                                    {item.subItems.map((subItem, subIdx) => (
                                                        subItem.type === 'separator' ? (
                                                            <div key={subIdx} className="border-t border-gray-400 my-1"></div>
                                                        ) : (
                                                            <div
                                                                key={subIdx}
                                                                className="relative group"
                                                                onMouseEnter={() => setActiveSubSubMenu(subItem.label)}
                                                            >
                                                                <button
                                                                    onClick={() => handleMenuClick(subItem)}
                                                                    className="w-full text-left px-4 py-1.5 text-xs hover:bg-[#316AC5] hover:text-white flex justify-between items-center"
                                                                >
                                                                    <span>{subItem.label}</span>
                                                                    {subItem.subItems && <ChevronRight size={12} />}
                                                                </button>

                                                                {/* Nested Submenu - Level 3 */}
                                                                {subItem.subItems && activeSubSubMenu === subItem.label && (
                                                                    <div className="absolute top-0 left-full bg-[#EBE9D8] border border-gray-500 shadow-md py-1 min-w-[200px] z-[102]">
                                                                        {subItem.subItems.map((subSubItem, subSubIdx) => (
                                                                            <button
                                                                                key={subSubIdx}
                                                                                onClick={() => handleMenuClick(subSubItem)}
                                                                                className="w-full text-left px-4 py-1.5 text-xs hover:bg-[#316AC5] hover:text-white"
                                                                            >
                                                                                {subSubItem.label}
                                                                            </button>
                                                                        ))}
                                                                    </div>
                                                                )}
                                                            </div>
                                                        )
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    )
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 top-7 bg-[#EBE9D8] z-[200] overflow-y-auto">
                    <div className="p-4 flex flex-col gap-2">
                        {menus.map((menu) => (
                            <div key={menu.name} className="border-b border-gray-300 pb-2">
                                <div className="font-bold text-sm text-[#0055E5] mb-2 px-2 uppercase">{menu.name}</div>
                                <div className="flex flex-col gap-1">
                                    {menu.items.map((item, idx) => (
                                        item.type !== 'separator' && (
                                            <div key={idx}>
                                                <button
                                                    onClick={() => {
                                                        if (item.subItems) {
                                                            setActiveSubMenu(activeSubMenu === item.label ? null : item.label);
                                                        } else {
                                                            handleMenuClick(item);
                                                        }
                                                    }}
                                                    className="w-full text-left px-4 py-2 text-sm hover:bg-blue-100 flex justify-between items-center rounded"
                                                >
                                                    <span>{item.label}</span>
                                                    {item.subItems && <ChevronDown size={14} className={activeSubMenu === item.label ? 'rotate-180' : ''} />}
                                                </button>
                                                {item.subItems && activeSubMenu === item.label && (
                                                    <div className="pl-6 bg-gray-50 rounded mt-1">
                                                        {item.subItems.map((subItem, si) => (
                                                            subItem.type !== 'separator' && (
                                                                <button
                                                                    key={si}
                                                                    onClick={() => handleMenuClick(subItem)}
                                                                    className="w-full text-left px-4 py-2 text-sm hover:bg-blue-50 border-l-2 border-blue-200"
                                                                >
                                                                    {subItem.label}
                                                                </button>
                                                            )
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        )
                                    ))}
                                </div>
                            </div>
                        ))}
                        <button
                            onClick={onLogout}
                            className="mt-4 bg-red-600 text-white p-3 rounded flex items-center justify-center gap-2 font-bold"
                        >
                            <LogOut size={18} /> LOG OUT
                        </button>
                    </div>
                </div>
            )}

            {/* 3. Toolbar Icons (Scrollable on Mobile) */}
            <div className="bg-[#EBE9D8] border-b border-gray-400 flex items-center gap-1.5 px-2 py-1 h-12 md:h-10 overflow-x-auto no-scrollbar shadow-[inset_0_1px_0_#fff]">
                {[
                    { icon: <Monitor size={20} />, color: 'text-blue-600', action: () => navigate('/'), title: 'Dashboard' },
                    { icon: <Plus size={20} />, color: 'text-red-500', action: () => navigate('/employees'), title: 'New Employee' },
                    { icon: <FileText size={20} />, color: 'text-yellow-600', action: () => navigate('/reports/employee'), title: 'Reports' },
                    { icon: <Printer size={20} />, color: 'text-gray-600', action: () => window.print(), title: 'Print' },
                    { icon: <Settings size={20} />, color: 'text-purple-600', action: () => navigate('/company/settings'), title: 'Settings' },
                    { icon: <Search size={20} />, color: 'text-blue-500', action: () => { }, title: 'Search' },
                    { icon: <CheckSquare size={20} />, color: 'text-green-600', action: () => { }, title: 'Validate' },
                    { icon: <Folder size={20} />, color: 'text-blue-400', action: () => { }, title: 'Files' },
                    { icon: <Layout size={20} />, color: 'text-blue-700', action: () => { }, title: 'Layout' },
                    { icon: <HelpCircle size={20} />, color: 'text-blue-500', action: () => { }, title: 'Help' },
                ].map((tool, idx) => (
                    <button
                        key={idx}
                        onClick={tool.action}
                        title={tool.title}
                        className="p-1.5 md:p-1 hover:bg-white hover:border-gray-300 border border-transparent shadow-none hover:shadow-inner transition-all active:translate-y-0.5 shrink-0"
                    >
                        <div className={tool.color}>{tool.icon}</div>
                    </button>
                ))}
                <div className="flex-1 min-w-[20px]"></div>
                <div className="text-[10px] font-bold text-gray-600 pr-2 whitespace-nowrap hidden sm:block">Salary</div>
            </div>

            {/* Dropdown Backdrop to close menus (Desktop) */}
            {activeMenu && (
                <div
                    className="hidden md:block fixed inset-0 z-40 bg-transparent"
                    onClick={() => setActiveMenu(null)}
                ></div>
            )}
        </div>
    );
};

export default Topbar;
