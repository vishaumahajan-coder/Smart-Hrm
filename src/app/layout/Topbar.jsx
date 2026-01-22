import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Monitor, Settings, FileText, Printer, Search,
    CheckSquare, Folder, Layout, LogOut, X,
    ChevronDown, Save, Plus, HelpCircle, ChevronRight
} from 'lucide-react';

const Topbar = ({ onLogout, onSelectCompany, companyName }) => {
    const [activeMenu, setActiveMenu] = useState(null);
    const [activeSubMenu, setActiveSubMenu] = useState(null);
    const navigate = useNavigate();

    const menus = [
        {
            name: 'System',
            items: [
                { label: 'Select Company', action: 'select_company' },
                {
                    label: 'Company Setup',
                    subItems: [
                        { label: 'General Setup', action: 'company_general_setup' },
                        { label: 'Additional Setup Options', action: 'company_additional_setup' }
                    ]
                },
                { label: 'Customized Modules', action: 'customized_modules' },
                { label: 'Log Out', action: 'logout' },
                { label: 'Quit', action: 'quit' }
            ]
        },
        { name: 'Processing', items: [] },
        { name: 'Files', items: [] },
        { name: 'Transactions', items: [] },
        { name: 'Edit', items: [] },
        { name: 'Tools', items: [] },
        { name: 'Reports', items: [] },
        { name: 'Window', items: [] },
        { name: 'Report Format', items: [] },
    ];

    const handleMenuClick = (item) => {
        if (item.subItems) return; // Handled by hover mostly, or click to expand if mobile

        if (item.action === 'select_company') onSelectCompany();
        if (item.action === 'logout' || item.action === 'quit') onLogout();
        if (item.action === 'company_general_setup') navigate('/company/setup');

        setActiveMenu(null);
        setActiveSubMenu(null);
    };

    return (
        <div className="flex flex-col w-full font-sans select-none">
            {/* 1. Title Bar */}
            <div className="bg-[#0055E5] text-white h-7 flex items-center justify-between px-2 text-xs font-bold shadow-[inset_0_1px_0_rgba(255,255,255,0.3)]">
                <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-white/20 rounded-sm flex items-center justify-center text-[10px] italic">S</div>
                    <span>SMART Pay - {companyName || 'No Company Selected'} [Payroll Management System]</span>
                </div>
                <div className="flex items-center gap-0.5">
                    <button className="w-5 h-5 bg-[#316AC5] border border-white/20 flex items-center justify-center hover:bg-blue-400">_</button>
                    <button className="w-5 h-5 bg-[#316AC5] border border-white/20 flex items-center justify-center hover:bg-blue-400">□</button>
                    <button className="w-5 h-5 bg-[#E81123] border border-white/20 flex items-center justify-center hover:bg-red-600">✕</button>
                </div>
            </div>

            {/* 2. Menu Bar */}
            <div className="bg-[#EBE9D8] border-b border-gray-400 flex items-center px-1 h-6 relative z-50">
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
                            <div className="absolute top-full left-0 bg-[#EBE9D8] border border-gray-500 shadow-md py-1 min-w-[200px] z-[100]">
                                {menu.items.map((item, idx) => (
                                    <div
                                        key={idx}
                                        className="relative group"
                                        onMouseEnter={() => setActiveSubMenu(item.label)}
                                    >
                                        <button
                                            onClick={() => handleMenuClick(item)}
                                            className="w-full text-left px-4 py-1.5 text-xs hover:bg-[#316AC5] hover:text-white flex justify-between items-center"
                                        >
                                            <span>{item.label}</span>
                                            {item.subItems && <ChevronRight size={12} />}
                                            {item.label === 'Quit' && <span className="text-gray-500 group-hover:text-blue-100 ml-4">CTRL+Q</span>}
                                        </button>

                                        {/* Nested Submenu */}
                                        {item.subItems && activeSubMenu === item.label && (
                                            <div className="absolute top-0 left-full bg-[#EBE9D8] border border-gray-500 shadow-md py-1 min-w-[200px] z-[101]">
                                                {item.subItems.map((subItem, subIdx) => (
                                                    <button
                                                        key={subIdx}
                                                        onClick={() => handleMenuClick(subItem)}
                                                        className="w-full text-left px-4 py-1.5 text-xs hover:bg-[#316AC5] hover:text-white"
                                                    >
                                                        {subItem.label}
                                                    </button>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* 3. Toolbar Icons */}
            <div className="bg-[#EBE9D8] border-b border-gray-400 flex items-center gap-1.5 px-2 py-1 h-10 shadow-[inset_0_1px_0_#fff]">
                {[
                    { icon: <Monitor size={20} />, color: 'text-blue-600' },
                    { icon: <Plus size={20} />, color: 'text-red-500' },
                    { icon: <FileText size={20} />, color: 'text-yellow-600' },
                    { icon: <Printer size={20} />, color: 'text-gray-600' },
                    { icon: <Settings size={20} />, color: 'text-purple-600' },
                    { icon: <Search size={20} />, color: 'text-blue-500' },
                    { icon: <CheckSquare size={20} />, color: 'text-green-600' },
                    { icon: <Folder size={20} />, color: 'text-blue-400' },
                    { icon: <Layout size={20} />, color: 'text-blue-700' },
                    { icon: <HelpCircle size={20} />, color: 'text-blue-500' },
                ].map((tool, idx) => (
                    <button
                        key={idx}
                        className="p-1 hover:bg-white hover:border-gray-300 border border-transparent shadow-none hover:shadow-inner transition-all active:translate-y-0.5"
                    >
                        <div className={tool.color}>{tool.icon}</div>
                    </button>
                ))}
                {/* Placeholder for spacer */}
                <div className="flex-1"></div>
                <div className="text-[10px] font-bold text-gray-600 pr-2">Salary</div>
            </div>

            {/* Dropdown Backdrop to close menus */}
            {activeMenu && (
                <div
                    className="fixed inset-0 z-40 bg-transparent"
                    onClick={() => setActiveMenu(null)}
                ></div>
            )}
        </div>
    );
};

export default Topbar;
