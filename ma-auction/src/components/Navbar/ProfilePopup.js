import { useAuth } from "../../contexts/AuthContext";
import React, { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";

// import { getInfo } from "../../API/User";

export default function ProfilePopup() {
  const {userInfo, logout, currentUser} = useAuth();

  
  const [userCalledInfo, setUserCalledInfo] = useState();
  const wrapperRef = useRef(null);
  const navigate = useNavigate();
  const userRef = useRef(useAuth);

  

  setUserCalledInfo(currentUser);
  // alerter(wrapperRef);

  let profileImg = "";

  //Calls the getUserInfo
  // useEffect(() => {

  //     async function getUserInfo() {
  //         try {
  //             let res = await getInfo()
  //             setUserCalledInfo(res.findUser)
  //             console.log("Seting inside pfofile popup edit")
  //             profileImg = userCalledInfo.profilePic
  //         } catch(e) {
  //             console.log(e)
  //         }
  //     }
  //     getUserInfo()
  // }, [])

  return (
    <div className="profile-popup" >
      <div className="popup-user">
        <img src={profileImg} alt="ProfileImage" />
        <div className="profile-metadata">
          <h3>{currentUser.email}</h3>
          {/* This will be an auto-filled field based on the user type (once implemented) */}
          {/* <p>{currrentUser.role}</p> */}
          <p>Buyer</p>
        </div>
      </div>

      <div className="profile-btn-wrapper">
        <button>My Profile</button>
      </div>
      <hr />
      <div className="popup-options">
        <h3>Account</h3>
        <p>Settings and Sign-in</p>
        <p>Language</p>
        <p>Auction Plus</p>
      </div>
      <hr />
      <div className="popup-options">
        <p>Help</p>

        <p>Logout</p>
      </div>
    </div>
  );
}
