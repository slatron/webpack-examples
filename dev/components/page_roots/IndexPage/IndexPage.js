import React, { useState } from 'react'
import Menu from 'components/Menu/Menu'

const IndexPage = (props) => {
  return (
    // <> is shorthand for a container to keep multiple root JSX nodes
    <>
      <Menu />
      <h2>Home</h2>
      <div className="loading">
        testing css background loading gif...
      </div>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, provident, ex! Iure autem quos eos in expedita repellat, molestiae omnis voluptatibus! At, asperiores expedita laboriosam inventore eaque est odio ab.</p>
    </>
  )
}

export default IndexPage
