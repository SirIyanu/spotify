import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { Landing } from "./pages/Landing";
import { LoginPage } from "./pages/Login";
import { IsProtectedRoute } from "./hoc/IsProtectedRoute";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { routes } from "./route";
import { DashboardPage } from "./pages/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <IsProtectedRoute>
        <Landing />
      </IsProtectedRoute>
    ),
  },
  {
    path: routes.dashboard,
    element: (
      <IsProtectedRoute>
        <DashboardPage />
      </IsProtectedRoute>
    ),
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/home",
    element: <Landing />,
  },
  {
    path: "*",
    element: <h1>404</h1>,
  },
]);

export function App() {
  return (
    <>
      <ToastContainer />
      <RouterProvider router={router} />;
    </>
  );
}
