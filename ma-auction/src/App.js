import { createBrowserRouter, RouterProvider, Outlet, Router } from "react-router-dom";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Cars from "./pages/Cars/Cars";
import Car from "./pages/Car/Car";
import SignUp from "./pages/SignUp/sign-up";
import { AuthProvider } from "./contexts/AuthContext";
// import { AuthProvider } from "./contexts/AuthContext";

const Layout = () => {
  return (
    <div className="app">
      <AuthProvider>
      <Navbar />
      <Outlet />
      <Footer />
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
        element: <SignUp />
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
