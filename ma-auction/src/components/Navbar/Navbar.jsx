import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";

import "./AuthNavbar.css";
import { Dropdown } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext";
import AuthNavbar from "./AuthNavbar";
import ProfilePopup from "./ProfilePopup";
import { useSelector } from "react-redux";
import Bmw from "../../images/bmw-logo-svgrepo-com.svg";


const Navbar = () => {
  let [popup, setPopup] = useState(false);
  const { currentUser } = useAuth();
  const { logout } = useAuth();

  return (
    <div>
    <>
   
      {!currentUser && (
          <nav className='auth-navbar'>
       <div className='navbar-title'>
            <div className="left">
              <img src={Bmw} alt="Spawn Logo" />
              <h3>MuntherAuto</h3>
            </div>

            <div className="item">
              <Link className="link" to="/cars/1">
                New Pickups
              </Link>
            </div>
            <div className="item">
              <Link className="link" to="/cars/2">
                Categories
              </Link>
            </div>
            <div className="item">
              <Link className="link" to="/products/3">
                Auction Dates
              </Link>
            </div>
          </div><div className="center">
              <Link className="link" to="/">
                MunthersAutoStore
              </Link>
            </div><div className="item">
              <Link className="link" to="/sign-in">
                SignUp/Login
              </Link>
            </div><div className="item">
              <Link className="link" to="/">
                Locations
              </Link>
            </div><div className="icons">
              <SearchIcon />
              <PersonOutlineOutlinedIcon />
              <FavoriteBorderOutlinedIcon />
            </div>
      </nav>
      
    )}
    </>
      :
      {currentUser && (
        <>
          <AuthNavbar />
        </>
      )}
    </div>

  );
};

export default Navbar;
