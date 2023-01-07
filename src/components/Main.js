import React from 'react'
import './Main.css'
import Post from './Post'
import Template from './Template'

export default function Main() {
  return (
    <div>
      <div className='main'>
       <div className='mainwrapper'>
        <Template/>
        <Post/>
        <Post/>
        <Post/>
       </div>
      </div>
    </div>
  )
}
