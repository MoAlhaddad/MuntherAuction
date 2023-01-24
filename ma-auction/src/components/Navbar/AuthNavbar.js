import React, {useState,  useEffect} from 'react';
import { Dropdown } from 'react-bootstrap';
import ProfilePopup from './ProfilePopup';
import './AuthNavbar.css';
import Bmw from "../../images/bmw-logo-svgrepo-com.svg";
import { useAuth } from '../../contexts/AuthContext';

// Game Icons
export default function AuthNavbar() {
    let [popup, setPopup] = useState(false)
    let [type, setType] = useState('')
    let [searchInput, setSearchInput] = useState('')
    let [selectedGame, setSelectedGame] = useState(0);

    const {currentUser} = useAuth();



    function useOutsideAlerter(ref) {
        useEffect(() => {
            const handleClickOutside = (event) => {
                // This works, but try to find a better solution so it can be transferable with the message bar button as well.
                let inbounds = ref.current && !ref.current.contains(event.target) && !document.getElementsByClassName('navbar-user')[0].contains(event.target)
                if (inbounds) {setPopup(false)  }                  
            }
            document.addEventListener('mousedown', handleClickOutside);
            return () => document.removeEventListener("mousedown", handleClickOutside)
        })
    }

    const triggerPopup = () => {
        if (type == 'profile' && !popup) setPopup(!popup) 
        else if (type == 'profile' && popup) {
            setPopup(false)
            setType('')
        }
        else {
            setPopup(!popup)
            setType('profile')
        }
    }
    // This will render either the user's profile image, or the tester image that i've been using
    let profileImg =  "https://i.pinimg.com/originals/58/a7/23/58a7233cea3c4e00adf558774c652858.jpg"
  return (
    <nav className='auth-navbar'>
        <div className='navbar-title'>
            <img src = {Bmw} alt = "Spawn Logo" />
            <h3>MuntherAuto</h3>
        </div>
        <div className='navbar-input-wrapper'>
            
        </div>
     
        <div className='navbar-user-options'>
            
            <div className='navbar-user-option' onClick={triggerPopup} ><img src = {profileImg} className='navbar-user' alt = "UserProfile"/></div>
            {/* Profile Popup */}
            { popup == true && type == 'profile' ? <ProfilePopup  alerter={useOutsideAlerter}   /> : null}
            {/* <MessagePopup /> */}
        </div>
    </nav>
  );
}