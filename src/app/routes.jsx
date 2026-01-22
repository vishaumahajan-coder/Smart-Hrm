import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import Parties from './masters/Parties';
import Items from './masters/Items';
import Ledgers from './masters/Ledgers';
import Sales from './entries/Sales';
import Purchase from './entries/Purchase';
import Payment from './entries/Payment';
import LedgerReport from './reports/LedgerReport';
import TrialBalance from './reports/TrialBalance';
import ProfitLoss from './reports/ProfitLoss';
import CompanySettings from './pages/CompanySettings';

const AppRoutes = ({ onLogout }) => {
    return (
        <Routes>
            <Route element={<MainLayout onLogout={onLogout} />}>
                <Route path="/" element={<Navigate to="/company/setup" replace />} />
                <Route path="/masters/parties" element={<Parties />} />
                <Route path="/masters/items" element={<Items />} />
                <Route path="/masters/ledgers" element={<Ledgers />} />
                <Route path="/entries/sales" element={<Sales />} />
                <Route path="/entries/purchase" element={<Purchase />} />
                <Route path="/entries/payment" element={<Payment />} />
                <Route path="/reports/ledger" element={<LedgerReport />} />
                <Route path="/reports/trial-balance" element={<TrialBalance />} />
                <Route path="/reports/profit-loss" element={<ProfitLoss />} />
                <Route path="/company/setup" element={<CompanySettings />} />
            </Route>
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
};

export default AppRoutes;
