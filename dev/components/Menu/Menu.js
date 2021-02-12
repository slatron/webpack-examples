import React from 'react'
import './Menu.scss'

const Menu = (props) => {
  return (
    <ul className="site-nav">
      <li className={props.current === 'home' ? 'active': ''}><a href="/newpage.html">Home</a></li>
      <li className={props.current === 'contact' ? 'active': ''}><a href="/contact.html">Contact</a></li>
    </ul>
  )
}

export default Menu
