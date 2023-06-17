import React from 'react'

const Button = ({title, color, bgColor, padding}) => {
    const style = {
        color,
        backgroundColor: bgColor,
        padding: `${padding}px`
    }
  return (
    <button style={style}>{title}</button>
  )
}

export default Button