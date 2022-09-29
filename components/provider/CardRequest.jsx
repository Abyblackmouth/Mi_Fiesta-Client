import clsx from "clsx"
import Subtitle from "../Subtitle"
import Button from "../Button"

export default function CardRequest() {
  return (
    <>

      
      <div className="w-2/3 overflow-hidden flex ">

        <article className={clsx( //'w-60 px-8 ', //'mx-5',  // 'bg-blue',
            'gap-y-4',
            'px-6',
            'bg-gray-50',
            'bg-opacity-50',
            'shadow-md',
            'rounded-lg',
            'flex flex-col items-center')}>

            <div className={clsx( 'my-5' )}>

                <Subtitle>Mis Solicitudes</Subtitle>

            </div>

            {/* Cards */}

            <div class="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                
                
                <h5 class="mb-2  font-semibold tracking-tight text-gray-900 dark:text-white">Abraham Covarrubias</h5>
                
                <h1 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  Pastel para 50 personas
                </h1>
                
                <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">Pastel de 2 pisos para  50 personas de tematica de Pokemon  ...</p>
                <a href="#" class="inline-flex items-center text-blue-600 hover:underline">
                    VER DETALLE
                    <svg class="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path></svg>
                </a>
            </div>
              

            <div class="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                
                
                <h5 class="mb-2  font-semibold tracking-tight text-gray-900 dark:text-white">Abraham Covarrubias</h5>
                
                <h1 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  Pastel para 50 personas
                </h1>
                
                <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">Pastel de 2 pisos para  50 personas de tematica de Pokemon  ...</p>
                <a href="#" class="inline-flex items-center text-blue-600 hover:underline">
                    VER DETALLE
                    <svg class="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path></svg>
                </a>
            </div>

        </article>    

      
      </div>
    </>)
}