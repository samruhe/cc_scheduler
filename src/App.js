import './App.css';
import './styles/main.css';
import './styles/cards.css';

import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import { AuthProvider, RequireAuth } from './context/Auth';

import Layout from './components/Layout';

import HomePage from './pages/Home';
import DashboardPage from './pages/Dashboard';
import LoginPage from './pages/Login';
import CheckEmailPage from './pages/CheckEmail';
import VerifyPage from './pages/Verify';

import AccountPage from './pages/Account';
import InfoPage from './pages/Info';
import FinancialAccountsPage from './pages/FinancialAccounts';

import NotFoundPage from './pages/NotFound';
import UnauthorizedPage from './pages/Unauthorized';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    // loader: rootLoader,
    children: [
      {
        path: '',
        element: <HomePage />,
        // loader: teamLoader,
      },
      {
        path: 'login',
        element: <LoginPage />,
        // loader: teamLoader,
      },
      {
        path: 'login/checkemail',
        element: <CheckEmailPage />,
        // loader: teamLoader,
      },
      {
        path: 'login/verify',
        element: <VerifyPage />,
      },
      {
        path: 'unauthorized',
        element: <UnauthorizedPage />,
        // loader: teamLoader,
      },
      {
        path: '*',
        element: <NotFoundPage />,
        // loader: teamLoader,
      },
      {
        element: <RequireAuth />,
        children: [
          {
            path: '/dashboard',
            element: <DashboardPage />,
          },
          {
            path: '/account',
            element: <AccountPage />,
            children: [
              {
                index: true,
                element: <Navigate to='/account/info' replace />
              },
              {
                path: 'info',
                element: <InfoPage />,
              },
              {
                path: 'accounts',
                element: <FinancialAccountsPage />,
              },
            ],
          },
        ]
      },
    ],
  },
]);

const App = () => {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
};

export default App;
