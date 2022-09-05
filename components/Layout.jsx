import clsx from "clsx"

export default function Layout({children}) {
  return (
    <>
      <nav className={clsx(
        'bg-[#249F95]/40', 
        'shadow-lg',
        'h-[50px]'
        )}>
        Bienvenido a Mi Fiesta.com
      </nav>
      <main className={clsx(
        'bg-gradient-to-b from-[#249F95]/30 to-white',
        'h-[calc(100vh-50px)]',
        'flex justify-center',
        'pt-20 md:pt-24',
        'px-6 md:px-16 lg:px-12',
        'pb-14 md:pb-16',
        )}>
          {children}
      </main>    
       
    </>
  )
}