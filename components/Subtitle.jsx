import React from 'react'
import clsx from "clsx"

export default function Subtitle({children}) {
  return (
    <>
      <h2 className={clsx('text-[1.125rem] text-[#313445] text-[16px] font-bold',
      'flex')}>
        {children}
      </h2>

    </>
  )
}