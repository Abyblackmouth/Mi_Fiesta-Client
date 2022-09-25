import clsx from "clsx"

export default function Category ({etiqueta }) {

    return(
        <>
       <a className={clsx(
                'bg-indigo-50',
                'w-30',
                'h-10',
                'text-slate-900',
                'font-bold',
                'overflow-clip',
                'py-2 px-4',
                'w-40',
                'rounded',
                'focus:outline-none focus:shadow-outline',
              )}
              >          
               {etiqueta}
              </a>
        </>
    )
}