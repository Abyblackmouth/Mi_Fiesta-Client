import React from 'react'
import clsx from "clsx"

export default function Input({label,id,type,value,message,placeholder,htmlFor,required,register}) {
  return (
    <>
      <label className={clsx(
        ' block ',
        'text-gray-700 text-sm font-bold mb-2')}
        htmlFor={htmlFor}>
        {label}
      </label>
      <input className={clsx(
        'shadow',
        'appearance-none',
        'border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline',
        'hover:border-cyan-400 border-2'
      )}
        id={id}
        type={type}
        placeholder={placeholder}
         {...register(label, {required} ,{
          pattern: {
            value: {value},
            message:{message}
          }
        })} />
    </>
  )
}