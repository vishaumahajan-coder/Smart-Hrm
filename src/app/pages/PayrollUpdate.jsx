import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Upload, CheckCircle, AlertCircle, FileText, Database, ShieldCheck, LogOut } from 'lucide-react';

const PayrollUpdate = () => {
    const navigate = useNavigate();
    const [isUpdating, setIsUpdating] = useState(false);
    const [isFinished, setIsFinished] = useState(false);

    const handleUpdate = () => {
        setIsUpdating(true);
        setTimeout(() => {
            setIsUpdating(false);
            setIsFinished(true);
        }, 3000);
    };

    return (
        <div className="flex flex-col h-full w-full bg-[#EBE9D8] font-sans text-xs">
            <div className="bg-[#D4D0C8] border-b border-gray-400 px-3 py-1">
                <span className="font-bold text-gray-700 uppercase italic">Final Payroll Update & General Ledger Posting</span>
            </div>

            <div className="flex-1 p-12 flex flex-col items-center">
                <div className="w-full max-w-3xl bg-white border-2 border-gray-500 shadow-[12px_12px_0_rgba(0,0,0,0.1)] p-10">
                    <div className="flex items-center gap-6 mb-10 pb-6 border-b-2 border-red-600">
                        <div className="p-4 bg-red-100 rounded-lg text-red-600 shadow-inner">
                            <Upload size={48} />
                        </div>
                        <div>
                            <h1 className="text-3xl font-black text-gray-900 italic uppercase leading-none">Payroll Master Update</h1>
                            <p className="text-red-700 font-bold uppercase tracking-widest text-xs mt-2 italic animate-pulse">Critical: Permanent Data Posting Operation</p>
                        </div>
                    </div>

                    {!isFinished ? (
                        <div className="space-y-8">
                            <div className="bg-yellow-50 border-2 border-yellow-200 p-6 flex items-start gap-4">
                                <AlertCircle className="text-yellow-600 shrink-0" size={24} />
                                <div className="space-y-2">
                                    <p className="font-black text-yellow-900 uppercase italic">Pre-Update Verification</p>
                                    <ul className="text-[10px] font-bold text-yellow-800 space-y-1 uppercase tracking-tight opacity-80">
                                        <li>• Calculation register has been reviewed and verified.</li>
                                        <li>• Bank disbursement files have been successfully generated.</li>
                                        <li>• System backup has been performed in the last 24 hours.</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-6">
                                <div className="p-4 bg-gray-50 border border-gray-300 space-y-3">
                                    <h3 className="font-black text-gray-400 uppercase text-[9px]">Posting Destination</h3>
                                    <div className="flex items-center gap-3">
                                        <Database className="text-blue-600" size={20} />
                                        <div className="font-black italic text-gray-700">PR-MASTER-DB-2026</div>
                                    </div>
                                </div>
                                <div className="p-4 bg-gray-50 border border-gray-300 space-y-3">
                                    <h3 className="font-black text-gray-400 uppercase text-[9px]">Security Protocol</h3>
                                    <div className="flex items-center gap-3">
                                        <ShieldCheck className="text-green-600" size={20} />
                                        <div className="font-black italic text-gray-700">ENCRYPTED KEY SIGNED</div>
                                    </div>
                                </div>
                            </div>

                            <button
                                onClick={handleUpdate}
                                disabled={isUpdating}
                                className={`w-full p-6 font-black italic text-xl uppercase tracking-[0.2em] shadow-2xl transition-all flex flex-col items-center justify-center gap-2 ${isUpdating ? 'bg-gray-400 text-gray-200 cursor-wait' : 'bg-red-600 text-white hover:bg-red-700 active:translate-y-1'
                                    }`}
                            >
                                {isUpdating ? (
                                    <>
                                        <RefreshCw size={32} className="animate-spin" />
                                        COMMITTING TO MASTER DATA...
                                    </>
                                ) : (
                                    <>
                                        POST & UPDATE MASTER RECORDS
                                    </>
                                )}
                            </button>
                        </div>
                    ) : (
                        <div className="text-center space-y-8 animate-in zoom-in duration-500">
                            <div className="p-10 bg-green-50 border-4 border-green-500 flex flex-col items-center">
                                <CheckCircle size={80} className="text-green-600 mb-4" />
                                <h2 className="text-3xl font-black text-green-900 italic uppercase">POSTING SUCCESSFUL</h2>
                                <p className="font-bold text-green-700 uppercase mt-2">All salary records have been updated to Master History.</p>
                            </div>
                            <div className="flex gap-4">
                                <button className="flex-1 p-4 bg-blue-900 text-white font-black italic uppercase tracking-widest hover:bg-black transition-all">
                                    PRINT POSTING AUDIT
                                </button>
                                <button
                                    onClick={() => navigate('/')}
                                    className="flex-1 p-4 bg-gray-200 text-gray-700 font-black italic uppercase tracking-widest hover:bg-gray-300 transition-all border border-gray-400"
                                >
                                    BACK TO DASHBOARD
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <div className="bg-white border-t border-gray-400 p-2 flex justify-between items-center px-6 no-print">
                <button className="flex items-center gap-2 p-2 font-black italic text-gray-500 hover:text-blue-700">
                    <FileText size={16} /> VIEW PREVIOUS UPDATES
                </button>
                <button
                    onClick={() => navigate(-1)}
                    className="bg-gray-100 border border-gray-400 text-gray-600 px-8 py-2 font-black italic hover:bg-gray-200"
                >
                    CLOSE MODULE
                </button>
            </div>
        </div>
    );
};

export default PayrollUpdate;
