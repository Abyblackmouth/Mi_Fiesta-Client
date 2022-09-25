import clsx from "clsx"

export default function Layout({children, style}) {
  return (
    <>
      <main className={clsx(
        'bg-gradient-to-b from-[#249F95]/50 to-white',
        
        'pt-20 md:pt-24',
        'px-6 md:px-16 lg:px-12',
        'pb-14 md:pb-16',             
        'h-screen',
         style
        )}>
          {children}
      </main>    
       
    </>
  )
}