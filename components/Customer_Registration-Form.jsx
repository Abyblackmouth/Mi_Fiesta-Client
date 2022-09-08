import clsx from "clsx";
import React from "react"
import {useForm} from "react-hook-form"

export default function Form_Customer () {
    return(
        <>
        <form>
            <div>
                <h1>Nombre y Contacto</h1>
            <label className={clsx(
            ' block ',
            'text-gray-700 text-sm font-bold mb-2')}
            htmlFor="name">
            Nombre del Usuario
          </label>
          <input className={clsx(
            'shadow',
            'appearance-none',
            'border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline',
            'hover:border-cyan-400 border-2'
          )}/>
            <label className={clsx(
            ' block ',
            'text-gray-700 text-sm font-bold mb-2')}
            htmlFor="name">
            Teléfono 1
          </label>
          <input className={clsx(
            'shadow',
            'appearance-none',
            'border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline',
            'hover:border-cyan-400 border-2'
          )}/>
                      <label className={clsx(
            ' block ',
            'text-gray-700 text-sm font-bold mb-2')}
            htmlFor="name">
            Teléfono 2
          </label>
          <input className={clsx(
            'shadow',
            'appearance-none',
            'border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline',
            'hover:border-cyan-400 border-2'
          )}/>
            </div>
            <div>

            </div>
        </form>
        </>


    )

}