import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShieldAlert, LogOut, FileText, UserMinus, AlertTriangle, Calculator, FileWarning } from 'lucide-react';

const Redundancy = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col h-full w-full bg-[#EBE9D8] font-sans text-xs">
            <div className="bg-fire-red bg-[#8B0000] text-white px-4 py-2 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <ShieldAlert size={18} />
                    <span className="font-black italic uppercase tracking-widest text-[11px]">Termination & Redundancy Settlement Station</span>
                </div>
                <div className="text-[9px] font-black border border-white/30 px-2 py-1 italic uppercase">Highly Restricted Access</div>
            </div>

            <div className="flex-1 p-10 flex flex-col items-center">
                <div className="w-full max-w-5xl bg-white border-4 border-gray-400 shadow-2xl p-10 grid grid-cols-[1fr_350px] gap-12">
                    <div>
                        <div className="flex items-center gap-6 mb-10 pb-6 border-b-4 border-red-500">
                            <div className="p-4 bg-red-100 rounded-full text-red-600">
                                <UserMinus size={48} />
                            </div>
                            <div className="flex-1">
                                <h1 className="text-3xl font-black text-gray-900 italic uppercase leading-none">Employee Redundancy</h1>
                                <p className="text-red-700 font-bold uppercase tracking-widest text-xs mt-2 italic">Legal Settlement & Final Pay Calculation</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-8 mb-10">
                            <div className="space-y-4">
                                <label className="font-black text-gray-500 uppercase text-[9px]">Select Target Account</label>
                                <div className="flex gap-2">
                                    <input type="text" placeholder="ENTER EMPLOYEE ID..." className="flex-1 p-3 border-2 border-gray-300 font-black italic bg-gray-50 focus:border-red-500 outline-none" />
                                    <button className="bg-red-600 text-white px-4 py-3 font-bold hover:bg-black transition-all">LOAD</button>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <label className="font-black text-gray-500 uppercase text-[9px]">Type of Termination</label>
                                <select className="w-full p-3 border-2 border-gray-300 font-black italic bg-gray-50 focus:border-red-500 outline-none">
                                    <option>Standard Redundancy (Legal)</option>
                                    <option>Voluntary Resignation</option>
                                    <option>Termination for Cause</option>
                                    <option>Retirement Settlement</option>
                                </select>
                            </div>
                        </div>

                        <div className="bg-gray-100 p-8 border-2 border-dashed border-gray-400 text-center flex flex-col items-center gap-4">
                            <FileWarning size={48} className="text-gray-300" />
                            <p className="font-black italic text-gray-400 text-lg uppercase">Account Profile Not Loaded</p>
                            <p className="max-w-md text-[10px] font-bold text-gray-500 uppercase tracking-tighter opacity-70">
                                Please search for an employee above to calculate statutory redundancy payments, notice pay, and holiday pay entitlements.
                            </p>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="bg-[#EBE9D8] border-2 border-gray-500 p-6 flex flex-col gap-4 shadow-inner">
                            <h3 className="font-black italic text-blue-900 border-b border-gray-400 pb-2 uppercase tracking-widest text-[11px] flex items-center gap-2">
                                <Calculator size={16} /> Settlement Factors
                            </h3>
                            <div className="space-y-3">
                                <label className="flex items-center gap-3 cursor-pointer group">
                                    <input type="checkbox" className="w-4 h-4 cursor-pointer" />
                                    <span className="font-bold text-gray-700 group-hover:text-red-600 uppercase text-[10px] italic">Include Years of Service (YTD)</span>
                                </label>
                                <label className="flex items-center gap-3 cursor-pointer group">
                                    <input type="checkbox" className="w-4 h-4 cursor-pointer" />
                                    <span className="font-bold text-gray-700 group-hover:text-red-600 uppercase text-[10px] italic">Notice Pay Entitlement</span>
                                </label>
                                <label className="flex items-center gap-3 cursor-pointer group">
                                    <input type="checkbox" className="w-4 h-4 cursor-pointer" />
                                    <span className="font-bold text-gray-700 group-hover:text-red-600 uppercase text-[10px] italic">Statutory Redundancy Multiplier</span>
                                </label>
                            </div>

                            <div className="mt-4 pt-4 border-t border-gray-400">
                                <p className="text-[9px] font-bold text-gray-400 uppercase italic leading-tight">
                                    Statutory redundancy in Jamaica is typically 2 weeks' pay for each year of service (up to 10 years).
                                </p>
                            </div>
                        </div>

                        <div className="bg-red-50 border-2 border-red-200 p-4 flex flex-col gap-2">
                            <div className="flex items-center gap-2 text-red-700 font-bold uppercase italic text-[10px]">
                                <AlertTriangle size={14} /> Critical Warning
                            </div>
                            <p className="text-[9px] font-bold text-red-900 tracking-tighter opacity-70 uppercase leading-none">
                                Termination records cannot be reversed once posted. Cross-check with HR legal team.
                            </p>
                        </div>

                        <button className="w-full bg-black text-white p-5 font-black italic uppercase tracking-widest shadow-2xl hover:bg-red-900 transition-all flex items-center justify-center gap-3 active:translate-y-1">
                            GENERATE SETTLEMENT
                        </button>
                    </div>
                </div>
            </div>

            <div className="bg-white border-t border-gray-400 p-4 flex justify-between px-10 items-center no-print">
                <button className="flex items-center gap-2 font-black italic text-gray-500 hover:text-red-600 uppercase">
                    <FileText size={18} /> VIEW STATUTORY GUIDELINES
                </button>
                <button
                    onClick={() => navigate(-1)}
                    className="bg-gray-100 border-2 border-gray-400 text-gray-600 px-12 py-3 font-black italic hover:bg-gray-200 shadow-md uppercase transition-all"
                >
                    EXIT MODULE
                </button>
            </div>
        </div>
    );
};

export default Redundancy;
