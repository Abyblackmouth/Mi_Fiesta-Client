import clsx from "clsx"
import Image from 'next/image'
import React from "react"
import {useForm} from "react-hook-form"
import Input from "./Input"
import Button from "./Button"

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
            'flex flex-col justify-center items-center'
            )}>

            <div className="flex flex-col justify-center items-center w-full ">

                <h1 className={clsx(
                    'text-center',
                    'text-xl',
                    'py-11'
                    )}>No tienes ningún evento
                </h1>
                
                <div flex flex-col justify-center items-center>
                    <Button label='Comienza a cotizar'/>
                </div>
                

                
                 

 
                <img src="/empty_1.png" 
                    className={clsx(                            
                        'w-full h-full',
                        'md:w-[737.72px]',
                        'md:h-[440.30px]'                       
                        )}         
                    alt="" />
                    
                 
            </div>          

        </section>

      

                
            

           
            
        
        
    </>
  )
}