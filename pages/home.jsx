import clsx from "clsx"

export default function landing () {
    return(
        <>
      <nav className={clsx(
        'bg-[#ffffff]/40',
        'shadow-xl',
        'h-[80px]',
        'flex fixed top-0',
        'z-40',
        'w-full',
        'justify-end ',
        )}>
          <img className=""></img>
          <div className="flex justify-end items-center text-sm text-[#385890] font-bold ">
            <a href="">Explora</a>
            <a href="">Registrate como proveedor</a>
            <a href="">Inicia sesion</a>
          </div>
      </nav>
        <main className="bg-neutral-100">
            <img className= "bg-hero w-full h-64 bg-cover"/>

            <section className=" flex justify-center items-center h-36 text-slate-500 text-3xl">
                Los servicios de eventos mas importantes
            </section>
            <section className="flex flex-col-2 ">
                <div className="w-40 h-40 border-2 border-orange-500"></div>
                <div className="w-40 h-40 border-2 border-orange-500"></div>
                <div className="w-40 h-40 border-2 border-orange-500"></div>
                <div className="w-40 h-40 border-2 border-orange-500"></div>
                <div className="w-40 h-40 border-2 border-orange-500"></div>
                <div className="w-40 h-40 border-2 border-orange-500"></div>
                <div className="w-40 h-40 border-2 border-orange-500"></div>
                <div className="w-40 h-40 border-2 border-orange-500"></div>
                <div className="w-40 h-40 border-2 border-orange-500"></div>
                <div className="w-40 h-40 border-2 border-orange-500"></div>
            </section>
            <section className="bg-fuchsia-200">
                Este es la seccion de musica
            </section>
            <section className="bg-sky-50">
                Esta es la seccion de Comida
            </section>
            <section className="bg-yellow-500">
                Esta es la seccion de Entretenimeitno
            </section>
            <section>
                Aqui va unete a mi fiesta
            </section>
        </main>
        <footer>
            Aqui va el footer
        </footer>

        
        
        
        </>
    )
}