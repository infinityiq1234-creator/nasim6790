import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    
      <div className="flex justify-between items-center" >
        <div>Anime-Go</div>
        <div >
          <ul className='flex'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/content">Content</Link></li>
            <li><Link to="/about">About us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>
    
  )
}

export default Navbar
