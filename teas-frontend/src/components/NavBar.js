import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  const activeStyle = {"backgroundColor": "lightcyan", "fontWeight": "bold"}
  return (
    <div className="NavBar">
      <NavLink exact activeStyle={activeStyle} to="/home"> Home </NavLink>
      <NavLink exact activeStyle={activeStyle} to="/teas"> Teas </NavLink>
      <NavLink exact activeStyle={activeStyle} to="/teas/new"> New Tea </NavLink>
     
    </div>
  )
}

export default NavBar