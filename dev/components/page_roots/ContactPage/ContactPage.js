import React, { useState } from 'react'
import Menu from 'components/Menu/Menu'

const ContactPage = (props) => {
  return (
    // <> is shorthand for a container to keep multiple root JSX nodes
    <>
      <Menu current="contact" />
      <h2>Contact</h2>
      <p>ONLY THE CONTACT PAGE SHOULD BE RED TEXT Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, provident, ex! Iure autem quos eos in expedita repellat, molestiae omnis voluptatibus! At, asperiores expedita laboriosam inventore eaque est odio ab.</p>
      <ul>
        <li>one</li>
        <li>two</li>
        <li>three</li>
      </ul>
    </>
  )
}

export default ContactPage
