import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      
      <nav>
        <NavLink to='/posts'>AllPosts</NavLink>
      </nav>
    </div>
  )
}

export default Header
