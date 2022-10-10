import clsx from "clsx"
import Subtitle from "../Subtitle"
import Button from "../Button"

export default function CardTask() {
  return (
    <>

      
     <div className="w-2/3 overflow-hidden flex ">
      <article className={clsx( //'w-60 px-8 ',  'mx-5',
          'gap-y-4',
          'px-6',
          'bg-gray-50',
          'bg-opacity-50',
          'shadow-md',
          'rounded-md',
          'flex flex-col items-center')}>

          <div className={clsx( 'my-5' )}>

              <Subtitle>Productos</Subtitle>             

          </div>

          {/* Cards */}

          <a href="#" class="inline-flex items-center text-blue-600 hover:underline">
            Agregar productos 

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>

          </a>

          <div class="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              
              <h3 class="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                Pastel para 50 personas
              </h3>
              
              <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">
                    Pastel para 50 personas
                    2 pisos 
                    Relleno de vainilla
                    Decorado con chocolate
                    
              </p>

              <a href="#" class="inline-flex items-center text-blue-600 hover:underline">
                  DETALLE
                  <svg class="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path></svg>
              </a>
          </div>
            

          <div class="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              
              <h3 class="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                Pastel para 100 personas
              </h3>
              
              <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">
                    Pastel para 100 personas
                    2 pisos 
                    Relleno de vainilla
                    Decorado con chocolate
                    
              </p>

              <a href="#" class="inline-flex items-center text-blue-600 hover:underline">
                  DETALLE
                  <svg class="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path></svg>
              </a>
          </div>


        </article>    

      
      
      </div>
    </>)
}