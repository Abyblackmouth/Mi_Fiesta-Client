import React from "react"
import { useForm } from "react-hook-form"
import Input  from "./Input"
import clsx from "clsx"

export default function FormCustomer() {
  const{register} = useForm()
  return (
    <>
      <form className={clsx(
        'background-color: rgba(255, 255, 255, 0.4)',
        'box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08)',
        'flex-direction:column '
      )}>
        <div>
          <h1>Nombre y Contacto</h1>


          <Input htmlFor='userName' 
          label='Nombre'
          id='username'
          type='string'
          placeholder='Nombre de usuario'
          message='error'
          register={register}
          />

        </div>
        <div>
        <h1>Dirección</h1>
          <label htmlFor="cars">Ciudad:</label>
          <select name="cars" id="cars">
            <option value="CDMX">Ciudad de México</option>
            <option value="Puebla">Puebla</option>
            <option value="Queretaro">Queretaro</option>
            <option value="Merida">Merida</option>
          </select>
        </div>
      </form>
    </>
  )

}