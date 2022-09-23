import clsx from "clsx"

export default function Layout({children, style}) {
  return (
    <>
      <nav className={clsx(
        'bg-[#249F95]/60', 
        'shadow-xl',
        'h-[80px]'
        )}>
          <img className=""></img>
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