import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { Landing } from "./pages/Landing";
import { LoginPage } from "./pages/Login";
import { IsProtectedRoute } from "./hoc/IsProtectedRoute";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { routes } from "./route";
import { DashboardPage } from "./pages/Dashboard";
import { MainDashboard } from "./pages/Dashboard/MainDashboard";
import { AudioContext } from "./store/audioContext";
import React from "react";

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
    path: routes.dashboard(),
    element: (
      <IsProtectedRoute>
        <DashboardPage />
      </IsProtectedRoute>
    ),
    children: [
      {
        path: routes.dashboard(),
        element: <MainDashboard />,
      },
      {
        path: routes.playlist(),
        element: <h1>Afterrryyy</h1>,
      },
    ],
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
  const [audio, setAudio] = React.useState({
    playing: "",
    next: "",
    prev: "",
  });
  const update = (playing, next, prev) => {
    setAudio({ playing, next, prev });
  };
  return (
    <>
      <AudioContext.Provider value={{ audio, update }}>
        <ToastContainer />
        <RouterProvider router={router} />;
      </AudioContext.Provider>
    </>
  );
}
