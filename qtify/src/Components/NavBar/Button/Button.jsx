import React from 'react'
import "./Button.css";

const Button = ({text}) => {
  return (
    <button className='navButton'>{text}</button>
  )
}

export default Button