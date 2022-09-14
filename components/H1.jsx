import React from 'react'
import clsx from "clsx"

export default function H1({ texto }) {
  return (
    <>
      <h1 className={clsx('font-size: 1.125rem ext-red-600')}>
        {texto}</h1>
    </>
  )
}