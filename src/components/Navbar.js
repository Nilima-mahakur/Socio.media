import React from 'react';
import './Navbar.css'
import { FaSearch, FaUserAlt, FaFacebookMessenger,FaBell } from "react-icons/fa";

export default function Navbar() {
  return (

    <div className='navbar'>
      <div className='leftnav'>
        <h2 className='logo'>Socio.media</h2>
      </div>
      <div className='navbarcenter'>
        <div className='searchbar'>
          <FaSearch />
          <input type="text" placeholder='Search for friend, post or video' className='searchinput' />
        </div>
      </div>
      <div className='rightnav'>
        <div className='navbarlinks'>

          <span className='navbarlinks'>Homepage</span>
          <span className='navbarlinks'>Timeline</span>
        </div>
      </div>
      <div className='navbaricons'>
        <div className='navbariconitem'>
          <FaUserAlt />
          <span className='navbariconbadge'>1</span>
        </div>
        <div className='navbariconitem'>
          <FaFacebookMessenger />
          <span className='navbariconbadge'>2</span>
        </div>
        <div className='navbariconitem'>
          <FaBell />
          <span className='navbariconbadge'>5</span>
        </div>
      </div>
    </div >

  )
}
