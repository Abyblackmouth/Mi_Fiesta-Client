import clsx from "clsx"
import Image from 'next/image'

export default function Login({ }) {
  return(
    <>
      <section className={clsx(
        
        'md:py-10 md:px-5', 
        'lg:max-w-screen-xl w-full', 
        'flex  lg:flex space-x-10'
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
        <div className={clsx(
          'text-2xl font-bold text-white',
          'flex justify-center',
          'my-10'
        )}
        > Registro 
          </div>  
          <ul class="flex border-b">
            <li class="w-1/2">
              <a class="rounded-t-lg w-full bg-white inline-block border-l border-r py-2 px-4 text-blue-700 font-semibold" href="#">Cliente</a>
            </li>
            <li class="w-1/2">
              <a class="rounded-t-lg w-full bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold" href="#">Proveedor</a>
            </li>
          </ul>
      <form className={clsx(
        'bg-white',
        'shadow-md',
        'rounded px-8 pt-6 pb-8 mb-4'
      )}
      action="url">
        <div className={clsx('mb-4')}>
          <label className={clsx(
            ' block ',
            'text-gray-700 text-sm font-bold mb-2')}
            for="email">
            Correo
          </label>
          <input className={clsx(
            'shadow',
            'appearance-none',
            'border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          )} id="username" type="text" placeholder="Correo" name="email" />
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
            'focus:outline-none focus:shadow-outline')}
            id="password" type="password" name="password" placeholder="******************" />
        </div>
        <div className={clsx("mb-6")}>
          <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
            Repetir Contraseña
          </label>
          <input className={clsx(
            'shadow',
            'appearance-none',
            'border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight ',
            ' focus:outline-none focus:shadow-outline')}
            id="password" type="password" placeholder="******************" n />
        </div>
        <div className={clsx(
          ' flex ',
          ' items-center',
          'justify-between',
          'flex-col'
          )}>
          <button className={clsx(
            'bg-gradient-to-b from-[#249F95]/50 to-white',
            'hover:bg-gradient-to-r from-teal-400 to-blue-500',
            'text-white',
            'font-bold',
            'py-2 px-4',
            'rounded',
            'focus:outline-none focus:shadow-outline')}
            type="button">
            Empezar
          </button>
          <a className={clsx(
            'inline-block',
            'align-baseline',
            'font-bold',
            'text-sm',
            'text-blue-500',
            'hover:text-blue-800'
          )} href="#">
            Ya tengo Cuenta
          </a>
        </div>
      </form>
          
        </article>
      </section>
        
    </>
  )
}