import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NotFounds from '@/pages/NotFounds';
import Home from '@/pages/Home';
import TempPage from '@/pages/TempPage';
import TestPage2 from '@/pages/TestPages/TestPage2';
// import ProtectedRoute from '@/components/ProtectedRoute';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    errorElement: <NotFounds />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        element: (
          // <ProtectedRoute>
          <TempPage />
        )
        // </ProtectedRoute>
      }
    ]
  }
]);
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
