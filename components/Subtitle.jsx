import React from 'react'
import clsx from "clsx"

export default function Subtitle({children}) {
  return (
    <>
      <h1 className={clsx(
      'text-[#313445] text-sm font-bold m-2',
      'flex',
      'capitalize'
      )}>
        {children}
      </h1>

    </>
  )
}