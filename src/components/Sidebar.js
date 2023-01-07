import React from 'react'
import './Sidebar.css'
import {FaRss,FaCommentAlt,FaPlayCircle,FaUserFriends,FaBookmark,FaBrain,FaRegCalendarCheck,FaBriefcase,FaRegListAlt} from "react-icons/fa";
import myimage1 from './friend1.jpg'
import myimage2 from './friend2.jpg'
import myimage3 from './friend3.jpg'
import myimage4 from './friend4.jpg'



export default function Sidebar() {
  return (
    <div>
    <div className='sidebar'>
      <div className='sidebarwrap'>
        <ul className='sidebarlist'>
          <li className='sidebarlistitem'>
          <FaRss className='sidebaricon'/>
            <span className='sidebarlistitemheading'>Feed</span>
          </li>
          <li className='sidebarlistitem'>
          <FaCommentAlt className='sidebaricon'/>
            <span className='sidebarlistitemheading'>Chats</span>
          </li>
          <li className='sidebarlistitem'>
          <FaPlayCircle className='sidebaricon'/>
            <span className='sidebarlistitemheading'>Videos</span>
          </li>
          <li className='sidebarlistitem'>
          <FaUserFriends className='sidebaricon'/>
            <span className='sidebarlistitemheading'>Groups</span>
          </li>
          <li className='sidebarlistitem'>
          <FaBookmark className='sidebaricon'/>
            <span className='sidebarlistitemheading'>Saved</span>
          </li>
          <li className='sidebarlistitem'>
          <FaBrain className='sidebaricon'/>
            <span className='sidebarlistitemheading'>Questions</span>
          </li>
          <li className='sidebarlistitem'>
          <FaBriefcase className='sidebaricon'/>
            <span className='sidebarlistitemheading'>Jobs</span>
          </li>
          <li className='sidebarlistitem'>
          <FaRegCalendarCheck className='sidebaricon'/>
            <span className='sidebarlistitemheading'>Events</span>
          </li>
          <li className='sidebarlistitem'>
          <FaRegListAlt className='sidebaricon'/>
            <span className='sidebarlistitemheading'>Courses</span>
          </li>
        </ul>
        <button className='sidebarbtn'>Show More</button>
        <hr className='hr'/>
        <h3>Friends</h3>
        <ul className='friendlist'>
          <li className='sidebarfriends'>
            <img className='dp' src={myimage1} alt=''/>
          <span className='friendname'>Meena Kumari</span>
          </li>
          <li className='sidebarfriends'>
            <img className='dp' src={myimage2} alt=''/>
          <span className='friendname'>Namrata Singh</span>
          </li>
          <li className='sidebarfriends'>
            <img className='dp' src={myimage3} alt=''/>
          <span className='friendname'>Bhumi kaur</span>
          </li>
          <li className='sidebarfriends'>
            <img className='dp' src={myimage4} alt=''/>
          <span className='friendname'>Riya Bansal</span>
          </li>
        </ul>
      </div>
    </div>
    </div>
  )
}
