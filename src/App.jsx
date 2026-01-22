import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './app/routes';
import Login from './app/Login';
import CompanySelection from './app/CompanySelection';

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
      {!isLoggedIn ? (
        <Login onLogin={handleLogin} />
      ) : !selectedCompany ? (
        <CompanySelection onSelect={handleCompanySelect} onExit={handleLogout} />
      ) : (
        <AppRoutes onLogout={handleLogout} />
      )}
    </BrowserRouter>
  );
}

export default App;
