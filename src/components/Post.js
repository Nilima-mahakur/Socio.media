import React, {useState} from 'react'
import './Post.css'
import {FaEllipsisV,FaRegGrinHearts} from "react-icons/fa"
import Img from './friend3.jpg'
import emoji from './emoji.jpg'

export default function Post({post}) {

const [like,setlike] =useState(34)
const [isliked,setisliked] =useState(false)
const likehandler=()=>{
  setlike(isliked ? like-1 : like+1)
  setisliked(!isliked)
}



  return (
    <div>
      <div className='post'>
        <div className='postwrapper'>
            <div className='posttop'>
                <div className='posttopleft'>
                    <img className='postpimg' src={Img} alt='' />
                    <span className='postusername'>Bhumi Kaur</span>
                    <span className='date'>6 minutes ago</span>
                </div>
                <div className='posttopright'>
                <FaEllipsisV/>
                </div>
            </div>
            <div className='postcenter'>
                <span className='posttext'>Hey, its my new profile pic</span>
                <FaRegGrinHearts className='postemoji'/>
                <img className='postimg' src={Img} alt=''/>
            </div>
            <div className='postbottom'></div>
          <div className='postbottomleft'>
            <img className='emojiicon' src={emoji} onClick={likehandler} alt=''/>
            <span className='postlikecounter'>34 people like it</span>
          </div>
          <div className='postbottomright'>
            <span className='posttextcomment'>20 comments</span>
            </div>
        </div>
      </div>
    </div>
  )
}
