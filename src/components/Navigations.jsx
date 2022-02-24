import React from 'react'
import {NavLink} from 'react-router-dom'

export const Navigation = () => {
  return (
    <div>
        <NavLink className={({ isActive }) => 'mr-40 ml-10' + (isActive? " border-b-2 border-indigo-500": '')} to='/'>
          
          Form
        </NavLink>
        <NavLink className={({ isActive }) => isActive? " border-b-2 border-indigo-500": ''}  to='/table'>
          Table
          </NavLink>
    </div>
  )
}
