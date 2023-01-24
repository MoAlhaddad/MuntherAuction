import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home/Home";

import Navbar from "./components/Navbar/Navbar";
import Cars from "./pages/Cars/Cars";
import Car from "./pages/Car/Car";

import SignUp from "./pages/SignUp/sign-up";
import { AuthProvider } from "./contexts/AuthContext";
// import { AuthProvider } from "./contexts/AuthContext";
// import AuthLayout from "./components/Layout/AuthLayout";

import "./App.css";

import React from "react";

import Footer from "./components/Footer/Footer";
import Login from "./pages/SignUp/sign-in";
import AuthLayout from "./components/Layout/AuthLayout";

const Layout = () => {



  return (
    <div className="app">
      <AuthProvider>
        <AuthLayout>
        <Navbar />
        <Outlet />
        <Footer />
        </AuthLayout>
      </AuthProvider>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/cars/:id",
        element: <Cars />,
      },
      {
        path: "/car/:id",
        element: <Car />,
      },
      {
        path: "/sign-up",
        element: <SignUp />,
      },
      {
        path: "/sign-in",
        element: <Login />,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
