import React from 'react'
import { FaUserCircle } from 'react-icons/fa'

const Header = ({username,}) => {
  return (
    <div className="header-div">
        <h1>Hello {username}!</h1>
        <FaUserCircle id='user-avatar'/>
    </div>
  )
}

export default Header