import React from 'react'


export default function NavbarSearchResult({userImg, userFullName, userName}) {
  return (
    <div className='navbar-search-result'>
        <img src = {userImg} />
        <div className='search-result-metadata'>
            <h4>{userFullName}</h4>
            <p>{userName}</p>
        </div>
    </div>
  )
}