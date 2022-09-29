import clsx from "clsx"
import Subtitle from "../Subtitle"
import Button from "../Button"
import Calendar from 'react-calendar'

export default function CardCalendar() {
  return (
    <>

      
    <div className="w-2/3 overflow-hidden flex ">

        <article className={clsx( // 'w-60 px-8 ', 'mx-5',  'bg-white',
            'w-30',
            'gap-y-4',
            'px-6 ',
            'bg-gray-50',
            'bg-opacity-50',
            'shadow-md',
            'rounded-md',
            'flex flex-col items-center')}>

            <div className={clsx( 'my-5' )}>

              <Subtitle>Calendario</Subtitle>

            </div>

            {/* Cards */}

            <div class="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">

                <Calendar />

            </div>
        
        </article>    
        
    </div>

    </>)
}