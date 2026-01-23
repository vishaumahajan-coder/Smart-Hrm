import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Users, Calendar, Clock, DollarSign, BarChart3,
    FileText, Plus, ArrowRight, Wallet, ShieldCheck,
    Mail, CreditCard, Activity, Landmark
} from 'lucide-react';

const Dashboard = () => {
    const navigate = useNavigate();

    const stats = [
        { label: 'Total Employees', value: '42', icon: <Users size={20} />, color: 'bg-blue-600', sub: '3 Pending Onboarding' },
        { label: 'Payroll Status', value: 'Pending', icon: <Clock size={20} />, color: 'bg-orange-500', sub: 'Jan 2026 Cycle' },
        { label: 'Gross This Month', value: '$1.2M', icon: <DollarSign size={20} />, color: 'bg-green-600', sub: '+5% from Dec' },
        { label: 'Tax Compliance', value: 'Active', icon: <ShieldCheck size={20} />, color: 'bg-indigo-600', sub: 'TRN Verified' },
        { label: 'Average Overtime', value: '18.5h', icon: <Clock size={20} />, color: 'bg-purple-600', sub: 'MIS Department' },
        { label: 'S01 Prepared', value: 'Ready', icon: <FileText size={20} />, color: 'bg-red-500', sub: 'Filing Due: Feb 15' },
    ];

    const quickActions = [
        { label: 'Process Payroll', icon: <Activity />, path: '/processing/payroll-calculation', desc: 'Run Jamaica Tax Engine' },
        { label: 'New Employee', icon: <Plus />, path: '/employees', desc: 'Add Staff to Registry' },
        { label: 'Electronic Transfer', icon: <Landmark />, path: '/banking/bns', desc: 'Bank Advice Files' },
        { label: 'Batch Email Slips', icon: <Mail />, path: '/reports/email-p24', desc: 'Password Protected Slips' },
        { label: 'Statutory Returns', icon: <FileText />, path: '/statutory/s01', desc: 'P45, NIS, NHT, S01' },
        { label: 'Cheque Printing', icon: <CreditCard />, path: '/processing/cheque-printing', desc: 'Physical Payment Slips' },
    ];

    return (
        <div className="flex flex-col h-full w-full bg-[#F3F4F6] font-sans p-4 md:p-8 overflow-y-auto">
            {/* Header / Welcome */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                <div>
                    <h1 className="text-2xl font-black text-gray-800 uppercase italic tracking-tighter">
                        Human Capital & <span className="text-blue-700">Payroll Command</span>
                    </h1>
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mt-1">Enterprise Management Dashboard — Jamaica Region</p>
                </div>
                <div className="flex items-center gap-3">
                    <div className="bg-white px-4 py-2 border border-gray-200 shadow-sm rounded flex items-center gap-3">
                        <Calendar className="text-blue-600" size={16} />
                        <span className="text-xs font-black text-gray-700 uppercase">{new Date().toLocaleDateString('en-JM', { dateStyle: 'long' })}</span>
                    </div>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 mb-8">
                {stats.map((stat, idx) => (
                    <div key={idx} className="bg-white p-4 border border-gray-200 shadow-sm rounded-lg hover:shadow-md transition-shadow relative overflow-hidden group">
                        <div className={`absolute top-0 right-0 w-12 h-12 -mr-4 -mt-4 rotate-12 opacity-10 ${stat.color} transition-transform group-hover:scale-150`}></div>
                        <div className="flex flex-col gap-1">
                            <div className={`w-8 h-8 ${stat.color} text-white rounded flex items-center justify-center mb-1`}>
                                {stat.icon}
                            </div>
                            <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest leading-none">{stat.label}</span>
                            <span className="text-xl font-black text-gray-800 tracking-tighter">{stat.value}</span>
                            <span className="text-[8px] font-bold text-gray-400 uppercase italic">{stat.sub}</span>
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left: Quick Action Desk */}
                <div className="lg:col-span-2 flex flex-col gap-4">
                    <h3 className="text-xs font-black text-gray-500 uppercase tracking-widest flex items-center gap-2">
                        <Wallet size={14} className="text-blue-600" /> Operational Control Desk
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {quickActions.map((action, idx) => (
                            <button
                                key={idx}
                                onClick={() => navigate(action.path)}
                                className="bg-white p-4 border border-gray-200 rounded-xl shadow-sm hover:border-blue-400 hover:shadow-lg transition-all text-left flex items-start gap-4 group"
                            >
                                <div className="p-3 bg-gray-50 rounded-lg text-gray-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                    {action.icon}
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-xs font-black text-gray-800 uppercase tracking-tight group-hover:text-blue-700">{action.label}</span>
                                    <span className="text-[10px] text-gray-500 font-medium">{action.desc}</span>
                                </div>
                                <ArrowRight className="ml-auto text-gray-300 group-hover:text-blue-600 transition-colors" size={16} />
                            </button>
                        ))}
                    </div>

                    {/* Pending Tasks / Alerts */}
                    <div className="mt-4 bg-red-50 border-2 border-red-100 p-4 rounded-xl flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <div className="p-2 bg-red-500 text-white rounded-full animate-pulse">
                                <ShieldCheck size={16} />
                            </div>
                            <div>
                                <h4 className="text-[10px] font-black text-red-700 uppercase tracking-widest">Compliance Alert</h4>
                                <p className="text-xs font-bold text-red-900 italic">5 Employees have expired Tax Exemption certificates. Please update profiles.</p>
                            </div>
                        </div>
                        <button onClick={() => navigate('/employees')} className="bg-red-600 text-white px-4 py-1.5 rounded-lg text-[10px] font-black uppercase hover:bg-red-700 transition-colors">Resolve Now</button>
                    </div>
                </div>

                {/* Right: Activity & Analytics */}
                <div className="flex flex-col gap-4">
                    <h3 className="text-xs font-black text-gray-500 uppercase tracking-widest flex items-center gap-2">
                        <BarChart3 size={14} className="text-blue-600" /> System Activity
                    </h3>
                    <div className="bg-white border border-gray-200 rounded-xl p-4 flex-1 shadow-sm">
                        <div className="flex flex-col gap-4">
                            {[
                                { user: 'Admin', act: 'Processed Payroll Batch', time: '10 mins ago', type: 'PAYROLL' },
                                { user: 'System', act: 'Auto-Emailed Payslips (EMP001-042)', time: '1 hour ago', type: 'EMAIL' },
                                { user: 'Finance', act: 'Updated Tax Thresholds', time: 'Yesterday', type: 'CONFIG' },
                                { user: 'HR', act: 'Added 2 New Employees', time: '2 days ago', type: 'HRM' },
                            ].map((log, i) => (
                                <div key={i} className="flex gap-4 items-start border-l-2 border-gray-100 pl-4 py-1">
                                    <div className="flex flex-col">
                                        <div className="flex items-center gap-2">
                                            <span className="text-[10px] font-black text-gray-800">{log.user}</span>
                                            <span className={`text-[8px] px-1.5 py-0.5 rounded font-black text-white ${log.type === 'PAYROLL' ? 'bg-green-500' : 'bg-blue-500'}`}>{log.type}</span>
                                        </div>
                                        <p className="text-[11px] text-gray-500 font-medium">{log.act}</p>
                                        <span className="text-[8px] text-gray-400 font-bold uppercase">{log.time}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button className="w-full mt-6 py-2 border-2 border-dashed border-gray-200 text-gray-400 text-[10px] font-black uppercase hover:border-blue-300 hover:text-blue-500 transition-all">View All Audit Logs</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
