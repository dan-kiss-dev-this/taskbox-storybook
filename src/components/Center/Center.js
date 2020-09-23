import React from 'react'
import './Center.css'

function Button(props) {
  // const { variant = 'primary', children, ...rest } = props;

  return (
    <div className='center'>
      {props.children}
    </div>
  )
}

export default Button
