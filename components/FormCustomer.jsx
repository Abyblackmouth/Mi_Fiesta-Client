import React from "react"
import { useForm } from "react-hook-form"
import Input  from "./Input"
import clsx from "clsx"
import Subtitle from "./Subtitle"
import Button from "./Button"
import {registerCustomer} from '../lib/api'

export default function FormCustomer() {
  
  const {register,handleSubmit} = useForm()
const onSubmit = async data => {
  const data2 = {
    userName:"Lenny",
    email:"nasss1j@gmail.com",
    password:"1258sjkd"
  }
  
console.log('data:',data)
  let resultado = registerCustomer(data2)
 console.log('resultado:',resultado)
  // console.log(await result.json())
}
  return (
    <>
      <form className={clsx(
        'w-2/12',
        'background-color: rgba(255, 255, 255, 0.4)',
        'box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08)',
        ' flex-direction:column content-center'
      )}>
        <div className={clsx('w-full')}>
          <Subtitle>Nombre y Contacto</Subtitle>


          <Input htmlFor='userName' 
          id='userName'
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
        <Button etiqueta='Guardar' onClick={onSubmit}/>
      </form>
    </>
  )

}