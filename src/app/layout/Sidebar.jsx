import React from 'react';
import { LayoutDashboard, Users, Package, BookText, FileSpreadsheet, Receipt, Landmark, Database } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    const menuItems = [
        { title: 'Dashboard', icon: <LayoutDashboard size={18} />, path: '/' },
        {
            title: 'Masters',
            icon: <Database size={18} />,
            children: [
                { title: 'Parties', path: '/masters/parties' },
                { title: 'Items', path: '/masters/items' },
                { title: 'Ledgers', path: '/masters/ledgers' },
            ],
        },
        {
            title: 'Entries',
            icon: <Receipt size={18} />,
            children: [
                { title: 'Sales', path: '/entries/sales' },
                { title: 'Purchase', path: '/entries/purchase' },
                { title: 'Payment', path: '/entries/payment' },
            ],
        },
        {
            title: 'Reports',
            icon: <FileSpreadsheet size={18} />,
            children: [
                { title: 'Ledger Report', path: '/reports/ledger' },
                { title: 'Trial Balance', path: '/reports/trial-balance' },
                { title: 'Profit & Loss', path: '/reports/profit-loss' },
            ],
        },
    ];

    return (
        <div className="w-64 bg-[#F0F0F0] border-r-2 border-white shadow-[1px_0_0_0_rgba(128,128,128,1)] h-screen overflow-y-auto">
            <div className="p-4 bg-[#0055E5] text-white font-bold mb-2">
                HRM System
            </div>
            <nav>
                {menuItems.map((item, idx) => (
                    <div key={idx} className="mb-1">
                        {item.children ? (
                            <div>
                                <div className="px-4 py-2 text-sm font-bold text-gray-700 flex items-center gap-2 bg-gray-200 border-b border-gray-300">
                                    {item.icon} {item.title}
                                </div>
                                <div className="pl-6">
                                    {item.children.map((child, cIdx) => (
                                        <NavLink
                                            key={cIdx}
                                            to={child.path}
                                            className={({ isActive }) =>
                                                `block px-4 py-1.5 text-sm transition-colors ${isActive
                                                    ? 'bg-[#0055E5] text-white'
                                                    : 'text-gray-600 hover:bg-gray-200'
                                                }`
                                            }
                                        >
                                            {child.title}
                                        </NavLink>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <NavLink
                                to={item.path}
                                className={({ isActive }) =>
                                    `flex items-center gap-2 px-4 py-2 text-sm font-bold transition-colors ${isActive
                                        ? 'bg-[#0055E5] text-white'
                                        : 'text-gray-700 hover:bg-gray-200'
                                    }`
                                }
                            >
                                {item.icon} {item.title}
                            </NavLink>
                        )}
                    </div>
                ))}
            </nav>
        </div>
    );
};

export default Sidebar;
