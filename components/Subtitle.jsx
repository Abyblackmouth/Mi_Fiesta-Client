import React from 'react'
import clsx from "clsx"

export default function Subtitle({ children }) {
  return (
    <h2 className={clsx(
      'text-[#313445] text-sm font-bold m-2',
      'flex',
    )}>
      {children}
    </h2>
  )
}