import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import AuthNavbar from "./components/Navbar/AuthNavbar";
import Cars from "./pages/Cars/Cars";
import Car from "./pages/Car/Car";
import { AuthProvider } from "./contexts/AuthContext";
import SignUp from "./pages/SignUp/sign-up";
import Login from "./pages/SignUp/sign-in";

const Layout = () => {
  return (
    <AuthProvider>
    <div className="app">
      <AuthNavbar />
      <Outlet />
      <Footer />
    </div>
    </AuthProvider>
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
        element: <SignUp/>
      },
      {
        path: "/login",
        element: <Login/>
      }
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
