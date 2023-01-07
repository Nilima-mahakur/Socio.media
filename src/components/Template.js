import React from 'react'
import './Template.css'
import {FaRegImages,FaTag,FaMapMarkerAlt,FaGrinAlt} from "react-icons/fa"
import Dpimg from './dp.jpg'


export default function Template() {
  return (
    <div>
      <div className='template'>
        <div className='templatewrapper'>
            <div className='templatetop'>
                <img className='profile' src={Dpimg} alt=''/>
                <input  placeholder='What are your thoughts...' className='inputtemplate'/>
             </div>
             <hr className='templatehr'/>
             <div className='templatebottom'>
                <div className='templateoptions'>
                    <div className='templateoption'>
                        <FaRegImages  className='templateicon1'/>
                        <span className='templatetext'>Photo or Video</span>
                    </div>
                    <div className='templateoption'>
                        <FaTag className='templateicon2'/>
                        <span className='templatetext'>Tag</span>
                    </div>
                    <div className='templateoption'>
                        <FaMapMarkerAlt className='templateicon3'/>
                        <span className='templatetext'>Check In</span>
                    </div>
                    <div className='templateoption'>
                        <FaGrinAlt  className='templateicon4'/>
                        <span className='templatetext'>Feelings</span>
                    </div>
                </div>
                <button className='templatebutton'>Share</button>
             </div>
        </div>
      </div>
    </div>
  )
}
