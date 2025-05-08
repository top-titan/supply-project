import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { UserRoleProvider } from './contexts/UserRoleContext';
import Layout from './components/layout/Layout';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import CompaniesPage from './pages/CompaniesPage';
import ShopsPage from './pages/ShopsPage';
import FamilyManagement from './pages/FamilyManagement';
import UsersPage from './pages/UsersPage';
import ConsumptionPage from './pages/ConsumptionPage';
import ReportsPage from './pages/ReportsPage';
import SecurityPage from './pages/SecurityPage';
import ProfilePage from './pages/ProfilePage';
import NotFoundPage from './pages/NotFoundPage';
import ProtectedRoute from './components/common/ProtectedRoute';

function App() {
  return (
    <Router>
      <AuthProvider>
        <UserRoleProvider>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            
            <Route path="/" element={
              <ProtectedRoute>
                <Layout />
              </ProtectedRoute>
            }>
              <Route index element={<DashboardPage />} />
              <Route path="companies" element={
                <ProtectedRoute requiredRole={['topManager', 'companyManager']}>
                  <CompaniesPage />
                </ProtectedRoute>
              } />
              <Route path="shops" element={
                <ProtectedRoute requiredRole={['topManager', 'companyManager', 'shopManager']}>
                  <ShopsPage />
                </ProtectedRoute>
              } />
              <Route path="families" element={
                <ProtectedRoute requiredRole={['topManager', 'companyManager', 'shopManager']}>
                  <FamilyManagement />
                </ProtectedRoute>
              } />
              <Route path="users" element={
                <ProtectedRoute requiredRole={['topManager', 'companyManager', 'shopManager']}>
                  <UsersPage />
                </ProtectedRoute>
              } />
              <Route path="consumption" element={
                <ProtectedRoute requiredRole={['topManager', 'companyManager', 'shopManager', 'familyMember']}>
                  <ConsumptionPage />
                </ProtectedRoute>
              } />
              <Route path="reports" element={
                <ProtectedRoute requiredRole={['topManager', 'companyManager', 'shopManager']}>
                  <ReportsPage />
                </ProtectedRoute>
              } />
              <Route path="security" element={
                <ProtectedRoute requiredRole={['securityChecker']}>
                  <SecurityPage />
                </ProtectedRoute>
              } />
              <Route path="profile" element={
                <ProtectedRoute>
                  <ProfilePage />
                </ProtectedRoute>
              } />
            </Route>
            
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </UserRoleProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
