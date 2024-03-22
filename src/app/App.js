import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { useNavigation } from "./hooks/useNavigation";
import { Landing } from "./pages/Landing";
import { LoginPage } from "./pages/Login";
import { IsProtectedRoute } from "./hoc/IsProtectedRoute";

const router = createBrowserRouter([
  {
    path: "",
    element: (
      <IsProtectedRoute>
        <Landing />
      </IsProtectedRoute>
    ),
  },
  {
    path: "dashboard",
    element: (
      <IsProtectedRoute>
        <LoginPage />
      </IsProtectedRoute>
    ),
  },
  {
    path: "login",
    element: <LoginPage />,
  },
  {
    path: "home",
    element: <Landing />,
  },
  {
    path: "*",
    element: <h1>404</h1>,
  },
]);

export function App() {
  return <RouterProvider router={router} />;
}
