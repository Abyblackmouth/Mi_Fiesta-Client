import clsx from "clsx"

export default function Category ({etiqueta }) {

    return(
        <>

       <div className={clsx(
                'bg-indigo-50',
                'm-3',               
                'h-10',
                'text-slate-900',
                'font-bold',
                'overflow-clip',
                'py-2 px-4',
                'w-{154px}',
                'rounded',
                'focus:outline-none focus:shadow-outline'
              )}
              >   
              {onclick=()=>console.log('diste click')}
               {etiqueta}
              </div>
        
        </>
    )
}