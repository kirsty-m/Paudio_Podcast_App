
import React from 'react'
import './toggle.css'

const Toggle = ({onClick}) => {

  return (
    <label class="switch">
      <input type="checkbox" onClick={onClick} />
      <span class="slider round"></span>
    </label>
  )
}

export default Toggle;