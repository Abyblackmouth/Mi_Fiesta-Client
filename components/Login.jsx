import clsx from "clsx"
import Image from 'next/image'
import React from "react"
import {useForm} from "react-hook-form"

export default function Login({ }) {
const {register,handleSubmit} = useForm()
const onSubmit = async data => {
  let result = await fetch(
    'https://mifiesta-924b9-default-rtdb.firebaseio.com/.json',
    {
      method: 'POST',
      body: JSON.stringify(data)
    }
  )
  console.log(await result.json())
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
        <div className={clsx('mb-4')}>
          <h1 className={clsx(
            'text-center',
            'text-xl',
            'py-11'
          )}>Iniciar Sesión</h1>
          <label className={clsx(
            ' block ',
            'text-gray-700 text-sm font-bold mb-2')}
            for="email">
            Correo
          </label>
          <input className={clsx(
            'shadow',
            'appearance-none',
            'border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline',
            'hover:border-cyan-400 border-2'
          )} id="username" type="email" placeholder="Correo" {...register("email", { required: true},{pattern: {
            value: /\S+@\S+\.\S+/,
            message: 'Entered value does not match email format'
          }})}/>
        </div>
        <div className={clsx(
          'mb-6'
        )}>
          <label className={clsx(
            'block',
            'text-gray-700 text-sm font-bold mb-2'
          )} for="password">
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
            id="password" type="password" placeholder="******************" {...register("password", { required: true, maxLength:16,minLength:8     
            })}/>  
        </div>
        <div className={clsx(
          ' flex ',
          ' items-center',
          'justify-between',
          'flex-col'
          )}>
          <button className={clsx(
            'bg-gradient-to-b from-[#249F95]/60 to-white',
            'hover:bg-gradient-to-r from-teal-400 to-[#249F95]/80',
            'text-white',
            'font-bold',
            'py-2 px-4',
            'w-40',
            'rounded',
            'focus:outline-none focus:shadow-outline')}
            type="submit">
            Entrar
          </button>
          <span className='text-sm'>¿No tienes una cuenta?    
          <a className={clsx(
            'inline-block',
            'align-baseline',
            'font-bold',
            'text-blue-500',
            'hover:text-blue-800',
            'py-4',
            'ml-5'
          )}  href="#">
            Crear cuenta
          </a></span>
        </div>
      </form>
          
        </article>
      </section>
        
    </>
  )
}