import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <nav className='bg-emerald-400'>
        Bienvenido a Mi Fiesta.com
      </nav>
      <main className='bg-gradient-to-rgba(36, 159, 149, 0.1) from-indigo-500 via-purple-500 to-pink-500 ...'>
        <section className='flex divide-red-400'>
          <section className='h-2/5 w-1/2 bg-sky-400 m-8'>Aqui va la imagen introductiva</section>
          <section className='h-2/5 w-1/2 bg-sky-200 m-8'>

            <span>Registro</span>
         
          <form action="" className='flex-col justify-center mt-8 space-y-6" action="#"'>
          <div>
            <label htmlFor="">Correo</label>
          <input id="email-address" name="email" type="email" autocomplete="email" required className=" relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Email address"/>
        </div>
        <div>
            <label htmlFor="">Contraseña</label>
          <input id="email-address" name="email" type="email" autocomplete="email" required class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Email address"/>
        </div>
        <div>
            <label htmlFor="">Repetir Contraseña</label>
          <input id="email-address" name="email" type="email" autocomplete="email" required class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Email address"/>
        </div>

        <button type= "button" className=' flex bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ...'>Empezar</button>
          </form>

         
          </section>
        </section>
      </main>
      <><footer>Aqui va el foother</footer></>

    </>
  )
}
