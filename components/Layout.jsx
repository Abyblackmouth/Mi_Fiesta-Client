import clsx from "clsx"
import Link from "next/link";

export default function Layout({children, style}) {
  return (
    <>
{/*       <nav className={clsx(
        'bg-[#249F95]/60', 
        'shadow-xl',
        'h-[80px]'
        )}>
          <img className="" src="" alt="" />
      </nav> */}

<nav className={clsx(
    'bg-[#249F95]/60', 
    'shadow-xl',
    'h-[80px]',
    'flex space-x-10 space-y-4',
      )}>
        <Link href='/landing'>
          <img className="h-20" src="/Logo2.png" alt="Logo mi fiesta.com" />
        </Link>
        <div className="flex justify-end items-center text-sm text-slate-700 font-bold gap-6 mr-16">
          <a href="">Inicio</a>
          <a href="">Eventos</a>
          <a href="">Perfil</a>
        </div>

      </nav>
      
      <main className={clsx(
        'bg-gradient-to-b from-[#249F95]/50 to-white',
        'h-[calc(100%-80px)]',
        'pt-20 md:pt-24',
        'px-6 md:px-16 lg:px-12',
        'pb-14 md:pb-16',
         style
        )}>
          {children}
      </main>    
       
    </>
  )
}