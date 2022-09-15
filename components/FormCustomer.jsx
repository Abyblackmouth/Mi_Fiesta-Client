import React from "react"
import { useForm } from "react-hook-form"
import Input  from "./Input"
import clsx from "clsx"
import Subtitle from "./Subtitle"

export default function FormCustomer() {
  const{register} = useForm()
  return (
    <>
      <form className={clsx(
        'w-1/2',
        'background-color: rgba(255, 255, 255, 0.4)',
        'box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08)',
        ' flex-direction:column content-center'
      )}>
        <div className={clsx('w-full')}>
          <Subtitle>Nombre y Contacto</Subtitle>


          <Input htmlFor='userName' 
          id='username'
          type='string'
          placeholder='Nombre de usuario'
          message='error'
          register={register}
          />
            <Input htmlFor='phone' 
          id='phone'
          type='tel'
          placeholder='Télefono 1*'
          message='error'
          register={register}
          />
             <Input htmlFor='phone' 
          id='phone'
          type='tel'
          placeholder='Télefono 2*'
          message='error'
          register={register}
          />
        </div>
        <div className={clsx('w-full')}>
        <Subtitle>Dirección</Subtitle>
        
        <Input htmlFor='state' 
          id='state'
          type='string'
          placeholder='Estado'
          message='error'
          register={register}
          />
          <Input htmlFor='town' 
          id='twon'
          type='string'
          placeholder='Municipio'
          message='error'
          register={register}
          />

        </div>
      </form>
    </>
  )

}