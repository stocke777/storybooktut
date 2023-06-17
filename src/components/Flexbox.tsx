import React, { ReactNode } from 'react'

export type Props = {
    justify: "center"|"start" | "end"
    align: string;
    bgColor: string;
    children: ReactNode;
    gap: number;
    direction: "row"|"column"
}

const Flexbox = ({justify, align, bgColor, children, gap, direction}: Props) => {

    const style ={
        display: "flex",
        justifyContent: justify,
        alignItems: align,
        backgroundColor: bgColor,
        gap: `${gap}px`,
        flexDirection: direction
    }
  return (
    <div style={style}>{children}</div>
  )
}

export default Flexbox