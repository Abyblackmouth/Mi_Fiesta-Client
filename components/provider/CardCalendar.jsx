import React, { useState } from 'react'
import clsx from "clsx"
import Subtitle from "../Subtitle"
import Button from "../Button"
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';

export default function CardCalendar() {

    const [value, onChange] = useState(new Date());


   

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

                    <Subtitle>Calendario</Subtitle>

                </div>

                {/* Cards */}

                <div className="flex flex-col items-center p-0 max-w-xs bg-blue-500 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">

                    <Calendar onChange={onChange} value={value} />

                </div> 
            
            </article>    
            
        </div>

    </>)
}