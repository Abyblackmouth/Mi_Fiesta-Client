import React from 'react'
import clsx from "clsx"

export default function H1({children}) {
  return (
    <>
      <h1 className={clsx('text-[1.125rem] text-red-600')}>
        {children}
      </h1>

    </>
  )
}