import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Rightbar from './Rightbar'
import Main from './Main'


export default function Home() {
  return (
    <div>
      <Navbar />
      <div className='container'>
      <Sidebar/>
      <Main/>
       <Rightbar/>
      </div>
    </div>
  )
}
