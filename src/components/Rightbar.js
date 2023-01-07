import React from 'react'
import './Rightbar.css'
import onlinefriend1 from './onlinefriend1.jpg'
import friend from './friend2.jpg'
import friend2 from './friend5.jpg'
import friend3 from './friend6.jpg'

export default function Rightbar() {
  return (
    <div>
      <div className='rightbar'>
       <div className='rightbarwrapper'>
        <h4 className='rightbartitle' > Online Friends</h4>
        <ul className='friendlist'>
          <li className='friend'>
            <div className='profileimgcontainer'>
              <img src={onlinefriend1} alt='' className='profilesimg'/>
              <h5>Neha Tigga</h5>
              <span className='showonline'></span>
            </div>
            <div className='profileimgcontainer'>
              <img src={friend2} alt='' className='profilesimg'/>
              <h5>Reema Kumari</h5>
              <span className='showonline'></span>
            </div>
            <div className='profileimgcontainer'>
              <img src={friend3} alt='' className='profilesimg'/>
              <h5>Tina Singh</h5>
              <span className='showonline'></span>
            </div>
     
          </li>
        </ul>
        <div className='media'>
        <div className='messagesmedia'>
          <span className='message'>Messages</span>
         </div>
         <div className='msgprofile'>
          <img src={friend} alt='' className='msgimg'/>
         </div>
         <div className='tag'>
         <span className='nametag'> Medha agarwal</span>
         <span className='timeseen'>Active 2hr ago</span>
         </div>
       </div>
       </div>
      </div>
    </div>
  )
}
