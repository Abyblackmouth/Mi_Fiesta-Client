import clsx from "clsx"
import Image from 'next/image'
import React from "react"
import {useForm} from "react-hook-form"
import Input from "./Input"

export default function Empty({ }) {
const {register,handleSubmit} = useForm()
const onSubmit = async data => {
  {console.log(data)}
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

            <div>
                <h1 className={clsx(
                    'text-center',
                    'text-xl',
                    'py-11'
                    )}>No tienes ningún evento
                </h1>
                        
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
                    Comienza a cotizar
                </button>
            </div>                

        </section>

        <section className={clsx(
            'md:py-10 md:px-5', 
            'lg:max-w-screen-xl w-full', 
            'flex',             
            'lg:space-x-20 md:content-center'
            )}>

                xxxxxx
            <article className={clsx(                
                'bg-empty bg-contain bg-center bg-no-repeat', 
                )}
            ></article>

           
            
        </section>
        
    </>
  )
}