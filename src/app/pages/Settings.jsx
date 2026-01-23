import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Save, LogOut, Settings as SettingsIcon, Shield, Globe, Bell, Database, User } from 'lucide-react';

const Settings = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('general');

    const [settings, setSettings] = useState({
        systemName: 'SMART Pay',
        language: 'English',
        timezone: 'GMT-5 (Jamaica)',
        dateFormat: 'DD/MM/YYYY',
        currency: 'JMD',
        enableNotifications: true,
        autoBackup: true,
        backupFrequency: 'Daily',
        theme: 'Classic Win98',
        sessionTimeout: '30'
    });

    const handleInputChange = (field, value) => {
        setSettings(prev => ({ ...prev, [field]: value }));
    };

    const handleSave = () => {
        alert('Settings saved successfully!');
    };

    const tabs = [
        { id: 'general', label: 'General Settings', icon: <SettingsIcon size={16} /> },
        { id: 'security', label: 'Security & Access', icon: <Shield size={16} /> },
        { id: 'localization', label: 'Localization', icon: <Globe size={16} /> },
        { id: 'notifications', label: 'Notifications', icon: <Bell size={16} /> },
        { id: 'database', label: 'Database & Backup', icon: <Database size={16} /> }
    ];

    return (
        <div className="flex flex-col h-full w-full bg-[#EBE9D8] font-sans text-xs">
            {/* Header */}
            <div className="bg-[#D4D0C8] border-b border-gray-400 px-2 py-1 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <SettingsIcon size={14} className="text-gray-700" />
                    <span className="font-bold text-gray-700">System Configuration & Settings</span>
                </div>
            </div>

            {/* Content Area */}
            <div className="flex-1 p-4 flex gap-4 overflow-hidden">
                {/* Left Sidebar Tabs */}
                <div className="w-48 bg-[#D4D0C8] border border-gray-400 flex flex-col">
                    {tabs.map(tab => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex items-center gap-2 px-3 py-2 text-left border-b border-gray-300 transition-none ${activeTab === tab.id
                                    ? 'bg-[#316AC5] text-white font-bold border-r-4 border-r-yellow-400'
                                    : 'text-black hover:bg-gray-300'
                                }`}
                        >
                            {tab.icon}
                            <span>{tab.label}</span>
                        </button>
                    ))}
                    <div className="flex-1"></div>
                    <div className="p-2 border-t border-gray-400 bg-gray-200">
                        <div className="text-[10px] font-bold text-gray-500 uppercase italic">Version 4.0.2</div>
                    </div>
                </div>

                {/* Right Tab Content */}
                <div className="flex-1 bg-white border border-gray-400 shadow-inner p-6 overflow-auto">
                    {activeTab === 'general' && (
                        <div className="max-w-2xl animate-in fade-in duration-300">
                            <h2 className="text-sm font-bold border-b border-gray-300 pb-2 mb-6 text-blue-800">General System Preferences</h2>

                            <div className="grid grid-cols-[150px_1fr] gap-6 items-center">
                                <label className="font-bold text-gray-600 text-right">System Display Name</label>
                                <input
                                    type="text"
                                    value={settings.systemName}
                                    onChange={(e) => handleInputChange('systemName', e.target.value)}
                                    className="p-1.5 border border-gray-400 shadow-inner focus:outline-blue-500 font-bold"
                                />

                                <label className="font-bold text-gray-600 text-right">UI Theme Style</label>
                                <select
                                    value={settings.theme}
                                    onChange={(e) => handleInputChange('theme', e.target.value)}
                                    className="p-1.5 border border-gray-400 shadow-inner focus:outline-blue-500 font-bold font-serif"
                                >
                                    <option>Classic Win98</option>
                                    <option>Modern Professional</option>
                                    <option>Dark Mode (Night Owl)</option>
                                    <option>High Contrast</option>
                                </select>

                                <label className="font-bold text-gray-600 text-right">Session Timeout (m)</label>
                                <input
                                    type="number"
                                    value={settings.sessionTimeout}
                                    onChange={(e) => handleInputChange('sessionTimeout', e.target.value)}
                                    className="p-1.5 border border-gray-400 shadow-inner w-32 font-bold"
                                />

                                <div className="col-start-2 pt-4">
                                    <label className="flex items-center gap-2 cursor-pointer group">
                                        <input
                                            type="checkbox"
                                            checked={settings.enableNotifications}
                                            onChange={(e) => handleInputChange('enableNotifications', e.target.checked)}
                                            className="w-4 h-4 cursor-pointer"
                                        />
                                        <span className="font-bold text-gray-700 group-hover:text-blue-600 transition-colors">Enable In-App System Alerts & Notifications</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'localization' && (
                        <div className="max-w-2xl">
                            <h2 className="text-sm font-bold border-b border-gray-300 pb-2 mb-6 text-blue-800">Regional & Language Settings</h2>

                            <div className="grid grid-cols-[150px_1fr] gap-6 items-center">
                                <label className="font-bold text-gray-600 text-right">System Language</label>
                                <select
                                    value={settings.language}
                                    onChange={(e) => handleInputChange('language', e.target.value)}
                                    className="p-1.5 border border-gray-400 shadow-inner font-bold"
                                >
                                    <option>English (US)</option>
                                    <option>English (UK)</option>
                                    <option>Spanish</option>
                                    <option>French</option>
                                </select>

                                <label className="font-bold text-gray-600 text-right">Time Zone</label>
                                <select
                                    value={settings.timezone}
                                    onChange={(e) => handleInputChange('timezone', e.target.value)}
                                    className="p-1.5 border border-gray-400 shadow-inner font-bold"
                                >
                                    <option>GMT-5 (Jamaica)</option>
                                    <option>GMT-4 (Eastern)</option>
                                    <option>GMT+0 (London)</option>
                                    <option>GMT+5:30 (India)</option>
                                </select>

                                <label className="font-bold text-gray-600 text-right">Date Format</label>
                                <select
                                    value={settings.dateFormat}
                                    onChange={(e) => handleInputChange('dateFormat', e.target.value)}
                                    className="p-1.5 border border-gray-400 shadow-inner font-bold"
                                >
                                    <option>DD/MM/YYYY</option>
                                    <option>MM/DD/YYYY</option>
                                    <option>YYYY-MM-DD</option>
                                </select>

                                <label className="font-bold text-gray-600 text-right">Default Currency</label>
                                <input
                                    type="text"
                                    value={settings.currency}
                                    onChange={(e) => handleInputChange('currency', e.target.value)}
                                    className="p-1.5 border border-gray-400 shadow-inner w-32 font-bold"
                                />
                            </div>
                        </div>
                    )}

                    {activeTab === 'database' && (
                        <div className="max-w-2xl">
                            <h2 className="text-sm font-bold border-b border-gray-300 pb-2 mb-6 text-blue-800">Data Management & Backups</h2>

                            <div className="grid grid-cols-[150px_1fr] gap-6 items-center">
                                <div className="col-start-2">
                                    <label className="flex items-center gap-2 cursor-pointer font-bold text-gray-700">
                                        <input
                                            type="checkbox"
                                            checked={settings.autoBackup}
                                            onChange={(e) => handleInputChange('autoBackup', e.target.checked)}
                                            className="w-4 h-4 cursor-pointer"
                                        />
                                        Enable Autonomous Database Backups
                                    </label>
                                </div>

                                <label className="font-bold text-gray-600 text-right">Backup Frequency</label>
                                <select
                                    value={settings.backupFrequency}
                                    onChange={(e) => handleInputChange('backupFrequency', e.target.value)}
                                    className="p-1.5 border border-gray-400 shadow-inner font-bold"
                                    disabled={!settings.autoBackup}
                                >
                                    <option>Every Hour</option>
                                    <option>Daily</option>
                                    <option>Weekly</option>
                                    <option>Monthly</option>
                                </select>

                                <div className="col-start-2 pt-6 flex gap-4">
                                    <button className="px-4 py-2 bg-blue-600 text-white font-bold hover:bg-blue-700 active:scale-95 transition-all shadow-md">
                                        Run Manual Backup Now
                                    </button>
                                    <button className="px-4 py-2 border-2 border-red-500 text-red-600 font-bold hover:bg-red-50 bg-white active:scale-95 transition-all shadow-md">
                                        Purge Old Log Files
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                    {(activeTab === 'security' || activeTab === 'notifications') && (
                        <div className="flex flex-col items-center justify-center h-full text-gray-400 italic">
                            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4 border border-gray-300">
                                <SettingsIcon size={32} />
                            </div>
                            <p className="text-lg font-bold uppercase tracking-widest">{activeTab} Modules</p>
                            <p>This module is under development for your organization.</p>
                        </div>
                    )}
                </div>

                {/* Vertical Buttons */}
                <div className="flex flex-col gap-2 w-20">
                    <button
                        onClick={handleSave}
                        className="flex flex-col items-center justify-center p-2 border border-gray-400 border-b-2 border-r-2 border-gray-500 bg-[#E0DCCF] hover:bg-gray-200 active:border-0 active:translate-y-0.5"
                    >
                        <Save className="text-blue-600 mb-1" size={20} />
                        <span className="font-bold text-[10px]">SAVE ALL</span>
                    </button>
                    <button
                        onClick={() => navigate(-1)}
                        className="flex flex-col items-center justify-center p-2 border border-gray-400 border-b-2 border-r-2 border-gray-500 bg-[#E0DCCF] hover:bg-gray-200 active:border-0 active:translate-y-0.5"
                    >
                        <LogOut className="text-red-600 mb-1" size={20} />
                        <span className="font-bold text-[10px]">CLOSE</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Settings;
