import React, { useState } from 'react'
import './Menu.scss'

const Menu = (props) => {
  return (
    <ul className="site-nav">
      <li><a href="/index.html">Home</a></li>
      <li><a href="/contact.html">Contact</a></li>
    </ul>
  )
}

export default Menu
