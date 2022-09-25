import React from "react"
import { useForm } from "react-hook-form"
import Input  from "./Input"
import clsx from "clsx"
import Subtitle from "./Subtitle"
import Button from "./Button"

export default function FormProv
() {
    const{register} = useForm()
    return (
      <>
        <form className={clsx(
          'w-full',
          'background-color: rgba(255, 255, 255, 0.4)',
          'box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08)',
          ' flex-direction:column content-center'
        )}>
          <div className={clsx('w-full')}>
            <Subtitle>Nombre y Contacto</Subtitle>
  
            <div className="flex grid-rows-1 gap-2">
                <Input htmlFor='userName' 
                id='username'
                type='string'
                placeholder='Nombre de la empresa on negocio *'
                message='error'
                register={register}
                />
                <Input htmlFor='userName' 
                id='username'
                type='string'
                placeholder='Nombre del usuario *'
                message='error'
                register={register}
                />
            </div>

            <div className="flex grid-rows-1 gap-2 mt-2">
                <Input htmlFor='phone' 
                id='phone'
                type='tel'
                placeholder='Télefono 1 *'
                message='error'
                register={register}
                />
                <Input htmlFor='phone' 
                id='phone'
                type='tel'
                placeholder='Celular *'
                message='error'
                register={register}
            />
            </div>
            
          </div>
          <div className={clsx('w-full')}>
          <Subtitle>Web</Subtitle>
          
          <div className="flex grid-rows-1 gap-2 mt-2">
            <Input htmlFor='state' 
                id='state'
                type='string'
                placeholder='Email *'
                message='error'
                register={register}
                />
                <Input htmlFor='town' 
                id='twon'
                type='string'
                placeholder='Página web *'
                message='error'
                register={register}
                />
            </div>
                <div className="flex grid-rows-1 gap-2 mt-2">
                <Input htmlFor='town' 
                id='twon'
                type='string'
                placeholder='Instagram *'
                message='error'
                register={register}/>
                <Input htmlFor='town' 
                id='twon'
                type='string'
                placeholder='Facebook *'
                message='error'
                register={register}/>
            </div>
          </div>
          <div className={clsx('w-full')}>
          <Subtitle>Dirección</Subtitle>

            <div className="flex grid-rows-1 gap-2 mt-2">
                <Input htmlFor='state' 
                id='state'
                type='string'
                placeholder='Calle y numero*'
                message='error'
                register={register}
                />
                <Input htmlFor='town' 
                id='twon'
                type='string'
                placeholder='Colonia *'
                message='error'
                register={register}
                />
                <Input htmlFor='town' 
                id='twon'
                type='string'
                placeholder='Ciudad *'
                message='error'
                register={register}
                />
                <Input htmlFor='town' 
                id='twon'
                type='string'
                placeholder='C.P. *'
                message='error'
                register={register}
                />
            </div>
          </div>
          <div className={clsx('w-full')}>
          <Subtitle>Descripción</Subtitle>
          <textarea className={clsx(
            'flex',
            'm-1',
            'rows-2',
            'h-40',
            'cols-50',
            'shadow',
            'appearance-none',
            'border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline',
            'hover:border-cyan-400 border-2')}></textarea>
          </div>

            <div className="flex justify-center mt-7">
            <Button label='Guardar'/>
          </div>
        </form>
      </>
    )
  
  }