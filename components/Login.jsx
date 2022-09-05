import clsx from "clsx"
import Image from 'next/image'

export default function Login({ }) {
  return(
    <>
      <section className={clsx(
        'py-10 px-5', 
        'lg:max-w-screen-xl w-full', 
        'border-2 border-black', 
        'flex justify-center', 
        'h-full'
      )}>
        <article className={clsx(
          'hidden lg:flex',
          'lg:w-1/2',
          'bg-login bg-contain bg-center bg-no-repeat'
          )}
        >
        </article>
        <article className={clsx(
          'h-full', 
          'w-full lg:w-1/2', 
          'bg-sky-200')}
        >
          Aquí va el login
        </article>
      </section>
        
    </>
  )
}