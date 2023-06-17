import React from 'react'

type Props = {}

const Box = (props: Props) => {
    const style = {
        backgroundColor: "red",
        width: "20px",
        height: "20px"
      }
  return (
    <div style={style}>1</div>
  )
}

export default Box