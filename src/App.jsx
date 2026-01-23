import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './app/routes';
import Login from './app/Login';
import CompanySelection from './app/CompanySelection';
import Topbar from './app/layout/Topbar';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState(null);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleCompanySelect = (company) => {
    setSelectedCompany(company);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setSelectedCompany(null);
  };

  return (
    <BrowserRouter>
      <div className="flex flex-col h-screen w-full overflow-hidden bg-[#333333]">
        {/* 1. Global Navbar/Toolbar */}
        <div className="no-print">
          <Topbar
            onLogout={handleLogout}
            onSelectCompany={() => setSelectedCompany(null)}
            companyName={selectedCompany?.name || (isLoggedIn ? 'Awaiting Company' : 'Logon Screen')}
            isCompanySelected={!!selectedCompany}
          />
        </div>

        {/* 2. Main Content Area with Gear Background */}
        <div className="flex-1 relative overflow-hidden flex items-center justify-center">
          {/* Dashboard Background with Gear Logo - Visible throughout */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10 z-0">
            <div className="relative w-[300px] h-[300px] md:w-[600px] md:h-[600px]">
              <div className="absolute inset-0 border-[60px] md:border-[120px] border-gray-400 rounded-full animate-[spin_180s_linear_infinite]"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-40 h-40 md:w-80 md:h-80 bg-blue-600 rounded-full flex items-center justify-center text-white text-6xl md:text-9xl font-black italic shadow-2xl">
                  S
                </div>
              </div>
            </div>
          </div>

          {/* Actual Components/Routes */}
          <div className="relative z-10 w-full h-full overflow-auto">
            {!isLoggedIn ? (
              <div className="w-full h-full flex items-center justify-center p-4">
                <Login onLogin={handleLogin} />
              </div>
            ) : !selectedCompany ? (
              <div className="w-full h-full flex items-center justify-center p-4">
                <CompanySelection onSelect={handleCompanySelect} onExit={handleLogout} />
              </div>
            ) : (
              <AppRoutes onLogout={handleLogout} selectedCompany={selectedCompany} />
            )}
          </div>
        </div>

        {/* 3. Global Status Bar */}
        <div className="bg-[#EBE9D8] border-t border-gray-400 h-6 px-4 flex items-center justify-between text-[10px] text-gray-700 font-bold z-50 no-print">
          <div className="flex gap-4">
            <span>{isLoggedIn ? 'System Ready' : 'User Verification Required'}</span>
            <span className="border-l border-gray-400 pl-4">Record 1/1</span>
          </div>
          <div className="flex gap-4">
            <span className="border-l border-gray-400 pl-4 uppercase tracking-tighter">Exclusive Mode</span>
            <span className="border-l border-gray-400 pl-4 flex items-center gap-1">
              <div className={`w-2 h-2 rounded-full ${isLoggedIn ? 'bg-green-500 shadow-[0_0_5px_green]' : 'bg-red-500 animate-pulse'}`}></div>
              {isLoggedIn ? 'STATION CONNECTED' : 'AWAITING AUTH'}
            </span>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
