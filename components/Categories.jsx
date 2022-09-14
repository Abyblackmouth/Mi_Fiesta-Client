import clsx from "clsx"
import H1 from "./H1"
export default function Categories (){
    return (
    <>
    <div>
       <H1 texto='Servicios que ofreces'/>
    </div>    
    <div> <p>Selecciona los servicios o productos que ofreces</p></div>
   
    <main className={clsx( 
        'flex flex-direction: column justify-between')}>
        <section>
            <h2>Lugar</h2>
            <input className={clsx('shadow',
        'appearance-none',
        'bg-gradient-to-b from-[#249F95]/50 to-white',
        'border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline',
        'hover:border-cyan-400 border-2')} type="button" value={'Salón de fiestas'}/>

        </section>
        <section>
            <h2>Consumibles</h2>

        </section>
        <section>
            <h2>Entretenimiento</h2>

        </section>
        <section>
            <h2>Complementos</h2>

        </section>
    </main>
    <div></div>
    
    
    </>
    )
}