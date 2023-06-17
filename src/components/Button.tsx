import React from 'react'

interface ButtonProps {
  title: string;
  color: string;
  bgColor: string;
  padding: number;
  rounded: boolean
}

const Button = ({title, color, bgColor, padding, rounded}:ButtonProps) => {
    const style = {
        color,
        backgroundColor: bgColor,
        padding: `${padding}px`,
        borderRadius: rounded ? "10px" : undefined
    }
  return (
    <button style={style}>{title}</button>
  )
}

export default Button