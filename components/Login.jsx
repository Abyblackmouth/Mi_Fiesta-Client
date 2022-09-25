import clsx from "clsx"
import Image from 'next/image'
import React from "react"
import {useForm} from "react-hook-form"
import Button from "./Button"
import Input from "./Input"
import { ToastContainer,toast } from "react-toastify"
import { login } from "../lib/api"

export default function Login({ }) {
const {register,handleSubmit} = useForm()
const onSubmit = async data => {
  {console.log(data)}
  const result = await login(data)
  console.log("result:", result)
  if(!result ){
    toast.error("ups hubo un error")
  } 

}
  return(
    <>
      <section className={clsx(
        'md:py-10 md:px-5', 
        'lg:max-w-screen-xl w-full', 
        'flex', 
        'lg:space-x-20 md:content-center'
      )}>
        <article className={clsx(
          'hidden lg:flex',
          'lg:w-1/2',
          'bg-login bg-contain bg-center bg-no-repeat', 
          )}
        >
        </article>
        <article className={clsx(
          'h-full', 
          'w-full lg:w-1/2', 
        )}  
        >
      <form className={clsx(
        'bg-white',
        'shadow-md',
        'rounded-lg px-8 pt-6 pb-8 mb-4'
      )} onSubmit={handleSubmit(onSubmit)}>
        <ToastContainer/>
        <div className={clsx('mb-4')}>
          <h1 className={clsx(
            'text-center',
            'text-xl',
            'py-11'
          )}>Iniciar Sesión</h1>
          
          <Input htmlFor='email' 
          label='Correo'
          id='username2'
          type='email'
          placeholder='Ingresa tu correo'
          value={/\S+@\S+\.\S+/}
          message='error'
          register={register} />

          <label className={clsx(
            'block',
            'text-gray-700 text-sm font-bold mb-3 mt-3'
          )} htmlFor="password">
            Contraseña
          </label>
          <input className={clsx(
            'shadow',
            'appearance-none',
            'border',
            'rounded',
            'w-full',
            'py-2 px-3',
            'text-gray-700',
            'mb-3',
            'leading-tight',
            'hover:border-cyan-400 border-2',
            'focus:outline-none focus:shadow-outline')}
            id="password" 
            type="password" 
            placeholder="******************" {...register("password", { required: true, maxLength:16,minLength:8     
            })}/>  
        </div>
        <div className={clsx(
          ' flex ',
          ' items-center',
          'justify-between',
          'flex-col'
          )}>

          <Button
            label='Entrar'
            isSubmit/>
          
          <span className='text-sm'>¿No tienes una cuenta?    
          <a className={clsx(
            'inline-block',
            'align-baseline',
            'font-bold',
            'text-blue-500',
            'hover:text-blue-800',
            'py-4',
            'ml-5'
          )}  href="./customer-registration">
            Crear cuenta
          </a></span>
        </div>
      </form>
          
        </article>
      </section>
        
    </>
  )
}