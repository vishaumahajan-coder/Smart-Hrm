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
import BankDetails from './pages/BankDetails';
import Dashboard from './pages/Dashboard';
import TransactionEntry from './pages/TransactionEntry';
import PayrollRegister from './pages/PayrollRegister';
import PayrollRegisterPrint from './pages/PayrollRegisterPrint';
import EmployeeManagement from './pages/EmployeeManagement';
import AttendanceManagement from './pages/AttendanceManagement';
import LeaveManagement from './pages/LeaveManagement';
import SalaryManagement from './pages/SalaryManagement';
import EmployeeReport from './pages/EmployeeReport';
import AttendanceReport from './pages/AttendanceReport';
import SalaryReport from './pages/SalaryReport';
import Settings from './pages/Settings';
import TimeKeeper from './pages/TimeKeeper';
import PayrollCalculation from './pages/PayrollCalculation';
import AdvancePayment from './pages/AdvancePayment';
import ProcessingStatus from './pages/ProcessingStatus';
import PayDisbursement from './pages/PayDisbursement';
import TransactionRegister from './pages/TransactionRegister';
import PayrollUpdate from './pages/PayrollUpdate';
import FileManager from './pages/FileManager';
import SystemTools from './pages/SystemTools';
import TransactionRecords from './pages/TransactionRecords';
import PayrollWizard from './pages/PayrollWizard';
import Redundancy from './pages/Redundancy';
import CalculationRegister from './pages/CalculationRegister';
import ModulePlaceholder from './pages/ModulePlaceholder';
import JamaicaStatutory from './pages/JamaicaStatutory';
import BankIntegrations from './pages/BankIntegrations';
import ChequePrinting from './pages/ChequePrinting';
import EmailPayslips from './pages/EmailPayslips';

const AppRoutes = ({ onLogout }) => {
    return (
        <Routes>
            <Route element={<MainLayout onLogout={onLogout} />}>
                <Route path="/" element={<Dashboard />} />
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
                <Route path="/company/settings" element={<Settings />} />
                <Route path="/bank/details" element={<BankDetails />} />
                <Route path="/transaction/entry" element={<TransactionEntry />} />
                <Route path="/payroll/register" element={<PayrollRegister />} />
                <Route path="/payroll/register/print" element={<PayrollRegisterPrint />} />
                <Route path="/employees" element={<EmployeeManagement />} />
                <Route path="/attendance" element={<AttendanceManagement />} />
                <Route path="/leave" element={<LeaveManagement />} />
                <Route path="/salary" element={<SalaryManagement />} />
                <Route path="/reports/employee" element={<EmployeeReport />} />
                <Route path="/reports/attendance" element={<AttendanceReport />} />
                <Route path="/reports/salary" element={<SalaryReport />} />

                {/* Processing Routes */}
                <Route path="/processing/transaction-register" element={<TransactionRegister />} />
                <Route path="/processing/time-keeper" element={<TimeKeeper />} />
                <Route path="/processing/payroll-calculation" element={<PayrollCalculation />} />
                <Route path="/processing/advance" element={<AdvancePayment />} />
                <Route path="/processing/status" element={<ProcessingStatus />} />
                <Route path="/processing/disbursement" element={<PayDisbursement />} />
                <Route path="/processing/payroll-wizard" element={<PayrollWizard />} />
                <Route path="/processing/calculation-register" element={<CalculationRegister />} />
                <Route path="/processing/update" element={<PayrollUpdate />} />
                <Route path="/processing/redundancy" element={<Redundancy />} />
                <Route path="/processing/cheque-printing" element={<ChequePrinting />} />

                {/* Statutory Routes */}
                <Route path="/statutory/p45" element={<JamaicaStatutory type="P45" />} />
                <Route path="/statutory/nis-nht" element={<JamaicaStatutory type="NIS-NHT" />} />
                <Route path="/statutory/s01" element={<JamaicaStatutory type="S01" />} />
                <Route path="/statutory/s02" element={<JamaicaStatutory type="S02" />} />
                <Route path="/statutory/pension" element={<JamaicaStatutory type="Pension" />} />
                <Route path="/statutory/tax-upload" element={<JamaicaStatutory type="TaxUpload" />} />

                {/* Banking Routes */}
                <Route path="/banking/bns" element={<BankIntegrations bank="BNS" />} />
                <Route path="/banking/ncb" element={<BankIntegrations bank="NCB" />} />
                <Route path="/banking/jn" element={<BankIntegrations bank="JN" />} />
                <Route path="/banking/jmmb" element={<BankIntegrations bank="JMMB" />} />
                <Route path="/reports/email-p24" element={<EmailPayslips />} />

                {/* Other Menu Routes */}
                <Route path="/files" element={<FileManager />} />
                <Route path="/transactions" element={<TransactionRecords />} />
                <Route path="/tools" element={<SystemTools />} />
                <Route path="/window" element={<ModulePlaceholder title="Window Management" />} />
                <Route path="/format" element={<ModulePlaceholder title="Report Formatting" />} />
            </Route>
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
};

export default AppRoutes;
