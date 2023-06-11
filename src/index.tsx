import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {
  createBrowserRouter,
  RouterProvider,
  redirect,
  Navigate
} from "react-router-dom";
import NotFounds from "@/pages/NotFounds";
import Home from "@/pages/Home";
import TempPage from "@/pages/TempPage";
import TableTest from "@/pages/TableTest";
import NeedLoginPage from "@/pages/NeedLoginPage";
import ProtectedRoute from "./components/ProtectedRoute";
// import ProtectedRoute from '@/components/ProtectedRoute';
const router = createBrowserRouter([
  {
    index: true, // <-- match on parent, i.e. "/"
    element: <Navigate to="/home" replace /> // <-- redirect
  },

  {
    path: "/",
    element: <App></App>,
    errorElement: <NotFounds />,
    children: [
      {
        path: "home",
        element: <Home />
      },
      {
        element: <TempPage />,
        path: "temp"
      },
      {
        element: <TableTest />,
        path: "table"
      },
      {
        element: (
          <ProtectedRoute>
            <NeedLoginPage />
          </ProtectedRoute>
        ),
        path: "needLogin"
      }
    ]
  }
]);
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
