import clsx from "clsx"

export default function SectionLayout({children, style}) {
  return (

      <div className={clsx(
        'pt-20 md:pt-24',
        'px-6 md:px-16 lg:px-12',
        'pb-14 md:pb-16',
        'flex justify-center',
         style
        )}>
        <div className="max-w-screen-xl ">
            {children}
        </div>
      </div>    
       
  )
}