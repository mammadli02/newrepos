import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
   <>
   <ul>
    <li>
        <Link to='/cards'>HOME</Link>
        </li>
        <li>
        <Link to='/add'>Add</Link>
        </li>
        
        </ul></>
  )
}

export default Navbar