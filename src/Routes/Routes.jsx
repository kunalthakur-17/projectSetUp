import React, { lazy, Suspense } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import ProtectedRoute from "./ProtectedRouting";
import PublicRoute from "./PublicRouting";
import Layout from "./Layout";
import Profile from "../Pages/ProtectedPage/Profile/Profile";

const Login = lazy(() => import("../Pages/AuthPage/Login/Login"));
const Register = lazy(() => import("../Pages/AuthPage/Register/Register"));
const Blogs = lazy(() => import("../Pages/ProtectedPage/Bolgs/Bolgs"));
const Users = lazy(() => import("../Pages/ProtectedPage/Users/Users"));
const HomePage = lazy(() => import("../Pages/ProtectedPage/HomePage/HomePage"));

const withSuspense = (Component) => (
  <Suspense fallback={<div>Loading...</div>}>
    <Component />
  </Suspense>
);

const RootRedirect = () => {
  const token = localStorage.getItem("token");
  return <Navigate to={token ? "/home" : "/login"} replace />;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootRedirect />,
  },
  {
    path: "/login",
    element: <PublicRoute />,
    children: [
      {
        path: "",
        element: withSuspense(Login),
      },
    ],
  },
  {
    path: "/register",
    element: <PublicRoute />,
    children: [
      {
        path: "",
        element: withSuspense(Register),
      },
    ],
  },
  {
    path: "/",
    element: <ProtectedRoute />,
    children: [
      {
        path: "",
        element: <Layout />,
        children: [
          {
            path: "home",
            element: withSuspense(HomePage),
          },
          {
            path: "blogs",
            element: withSuspense(Blogs),
          },
          {
            path: "users",
            element: withSuspense(Users),
          },
          // Add more protected routes here
          {
            path: "profile",
            element: withSuspense(Profile)
          }
        ],
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/" />,
  },
]);

export default router;
