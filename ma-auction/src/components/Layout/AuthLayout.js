import React from "react";
import { Outlet, Navigate } from "react-router-dom";

import Footer from "../Footer/Footer";

import AuthNavbar from "../Navbar/AuthNavbar";
import { AuthProvider, useAuth } from "../../contexts/AuthContext";

/**
 * Layout page for the various pages of the application
 * @author Mohamad Alhaddad
 * @returns
 */
export default function AuthLayout({ children }) {
  // Grab the current user; if one does not exist, will return the user back to the login page.
  let { currentUser } = useAuth();
  if (!currentUser) {
    return <Navigate to="/" />;
  } else
    return (
      <AuthProvider>
        <div className="layout-container">
               {/* set CurrentUser to useAuth hook from authContext*/}
          <AuthNavbar user={currentUser} />
          <div className="layout-main">
            <div className="right-pane">
              {/* Outlet component serves as the props.children variable in react-router-v6 */}
              <Outlet />
              <Footer />
            </div>
          </div>
        </div>
      </AuthProvider>
    );
}
