import clsx from "clsx"
import Subtitle from "../Subtitle"
import Button from "../Button"

export default function GridProducts() {
  return (
    <>

      
     <div className=" overflow-hidden flex w-full  ">

      <article className={clsx( //'w-60 px-8 ',  'mx-5',
          'w-full',
          'gap-y-4',
          'px-6',
          'bg-gray-50',
          'bg-opacity-50',
          'shadow-md',
          'rounded-md',
          'flex flex-col items-center')}>


          {/* Cards */}

          <a href="#" class="inline-flex items-center text-blue-600 hover:underline">
            Agregar productos 

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>

          </a>


          <div class="p-6 w-full bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        
            <div class="grid overflow-hidden grid-cols-3 grid-rows-3 gap-0.5 gap-y-0 grid-flow-row">
              <div class="box row-span-3 bg-slate-600 w-20 flex justify-center items-center" >
                  <img src="https://picsum.photos/id/237/200/300" class="w-full" />
              </div>
              <div class="box col-start-2 col-span-2 text-xl font-semibold">Pastel para 50 personas</div>
              <div class="box col-start-2 col-span-2"> 
                <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">
                      Pastel para 50 personas
                      2 pisos 
                      Relleno de vainilla
                      Decorado con chocolate                    
                </p>
              </div>
              <div class="box col-start-2 col-span-2">$ 1,000.00</div>
            </div>

          </div>          

          <div class="p-6 w-full bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        
            <div class="grid overflow-hidden grid-cols-3 grid-rows-3 gap-0.5 gap-y-0 grid-flow-row">
              <div class="box row-span-3 bg-slate-600 w-20 flex justify-center items-center" >
                  <img src="https://picsum.photos/id/238/200/300" class="w-full" />
              </div>
              <div class="box col-start-2 col-span-2 text-xl font-semibold">Pastel para 100 personas</div>
              <div class="box col-start-2 col-span-2"> 
                <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">
                      Pastel para 100 personas
                      2 pisos 
                      Relleno de vainilla
                      Decorado con chocolate                    
                </p>
              </div>
              <div class="box col-start-2 col-span-2">$ 2,000.00</div>
            </div>
            
          </div> 
            

          <div class="p-6 w-full bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        
            <div class="grid overflow-hidden grid-cols-3 grid-rows-3 gap-0.5 gap-y-0 grid-flow-row">
              <div class="box row-span-3 bg-slate-600 w-20 flex justify-center items-center" >
                  <img src="https://picsum.photos/id/239/200/300" class="w-full" />
              </div>
              <div class="box col-start-2 col-span-2 text-xl font-semibold">Pastel para 150 personas</div>
              <div class="box col-start-2 col-span-2"> 
                <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">
                      Pastel para 150 personas
                      2 pisos 
                      Relleno de vainilla
                      Decorado con chocolate                    
                </p>
              </div>
              <div class="box col-start-2 col-span-2">$ 3,000.00</div>
            </div>
            
          </div> 

  

        </article>    

      
      
      </div>
    </>)
}