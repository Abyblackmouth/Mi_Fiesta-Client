import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
<>
<nav className='bg-emerald-400'>
      Bienvenido a Mi Fiesta.com
    </nav>
    <main className=''>
      <section className='flex divide-red-400'>
        <section className='h-2/5 w-1/2 bg-sky-400'>Aqui va la imagen introductiva</section>
        <section className='h-2/5 w-1/2 bg-sky-200'>Aquí va el login
        </section>
      </section>
    </main>
    <><footer>Aqui va el foother</footer></>
      
</>
  )
}
    