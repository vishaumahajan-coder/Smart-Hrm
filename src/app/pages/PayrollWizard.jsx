import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Wand2, ChevronLeft, ChevronRight, CheckCircle, Users, Calculator, FileCheck, LogOut } from 'lucide-react';

const PayrollWizard = () => {
    const navigate = useNavigate();
    const [step, setStep] = useState(1);

    const steps = [
        { id: 1, title: 'Employee Selection', icon: <Users size={20} /> },
        { id: 2, title: 'Earnings & Deductions', icon: <Calculator size={20} /> },
        { id: 3, title: 'Validation Audit', icon: <FileCheck size={20} /> },
        { id: 4, title: 'Final Submission', icon: <CheckCircle size={20} /> },
    ];

    return (
        <div className="flex flex-col h-full w-full bg-[#EBE9D8] font-sans text-xs">
            <div className="bg-[#0055E5] text-white px-4 py-2 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Wand2 size={18} />
                    <span className="font-black italic uppercase tracking-widest text-[11px]">IntelliPay Setup Wizard - Station Guided Mode</span>
                </div>
            </div>

            <div className="flex-1 p-10 flex flex-col items-center">
                <div className="w-full max-w-4xl bg-white border-2 border-gray-500 shadow-2xl flex flex-col h-[600px]">
                    {/* Stepper Header */}
                    <div className="flex border-b-2 border-gray-200">
                        {steps.map((s, i) => (
                            <div
                                key={s.id}
                                className={`flex-1 p-4 flex flex-col items-center gap-1 border-r last:border-0 transition-colors ${step === s.id ? 'bg-blue-50 border-b-4 border-b-blue-600' :
                                        step > s.id ? 'bg-green-50' : 'bg-gray-50 opacity-40'
                                    }`}
                            >
                                <div className={`${step >= s.id ? 'text-blue-600' : 'text-gray-400'}`}>
                                    {s.icon}
                                </div>
                                <span className={`text-[9px] font-black uppercase tracking-tighter text-center ${step >= s.id ? 'text-blue-900' : 'text-gray-400'}`}>
                                    {s.title}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* Content Area */}
                    <div className="flex-1 p-12 overflow-auto flex flex-col items-center justify-center">
                        {step === 1 && (
                            <div className="text-center space-y-6 max-w-lg">
                                <Users size={64} className="text-blue-600 mx-auto opacity-20" />
                                <h2 className="text-2xl font-black text-gray-800 italic uppercase">Identify Target Group</h2>
                                <p className="font-bold text-gray-500 uppercase text-[10px] tracking-widest leading-relaxed">
                                    Select the employee category or department you wish to process for the current active period.
                                </p>
                                <div className="grid grid-cols-2 gap-4 mt-8">
                                    <button className="p-6 border-2 border-blue-600 bg-blue-50 text-blue-900 font-black italic hover:bg-blue-100 uppercase">FULL STAFF (All Active)</button>
                                    <button className="p-6 border-2 border-gray-300 bg-white text-gray-700 font-black italic hover:border-blue-600 uppercase">DEPARTMENTAL FILTER</button>
                                </div>
                            </div>
                        )}

                        {step > 1 && (
                            <div className="text-center space-y-4">
                                <div className="p-8 bg-blue-50 border-2 border-dashed border-blue-200 rounded-xl">
                                    <Calculator size={48} className="text-blue-300 mx-auto mb-4" />
                                    <p className="font-black italic text-blue-900 text-lg uppercase">Module Parameter Configuration</p>
                                    <p className="text-[10px] font-bold text-blue-700 opacity-60 uppercase tracking-widest">Awaiting Manual Verification Inputs for Step {step}</p>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Navigation Footer */}
                    <div className="p-6 bg-gray-50 border-t-2 border-gray-200 flex justify-between items-center">
                        <button
                            disabled={step === 1}
                            onClick={() => setStep(s => s - 1)}
                            className="flex items-center gap-2 px-6 py-3 bg-white border-2 border-gray-300 font-black italic uppercase text-gray-500 hover:border-gray-500 disabled:opacity-0 transition-all"
                        >
                            <ChevronLeft size={20} /> PREVIOUS STAGE
                        </button>

                        <div className="flex gap-4">
                            <button
                                onClick={() => navigate(-1)}
                                className="px-6 py-3 font-black italic uppercase text-gray-400 hover:text-red-600 transition-none"
                            >
                                CANCEL WIZARD
                            </button>
                            <button
                                onClick={() => step < 4 ? setStep(s => s + 1) : navigate('/')}
                                className="flex items-center gap-2 px-10 py-3 bg-blue-600 text-white font-black italic uppercase shadow-xl hover:bg-blue-700 active:translate-y-1 transition-all"
                            >
                                {step === 4 ? 'FINISH & RELEASE' : 'CONTINUE NEXT'}
                                {step < 4 && <ChevronRight size={20} />}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-[#D4D0C8] border-t border-gray-400 p-3 px-12 flex justify-between items-center text-[9px] font-black italic text-gray-500 uppercase tracking-widest">
                <span>Wizard Version 6.0</span>
                <span>Session Secured: 256-bit Key</span>
            </div>
        </div>
    );
};

export default PayrollWizard;
