import clsx from "clsx"
import SectionLayout from "../components/home/SectionLayout"

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
            <SectionLayout style=''>
                <section className={clsx(
                    'grid', 
                    'grid-cols-2', 
                    'md:grid-cols-4', 
                    'gap-7',
                    'w-full', 
                )}>
                    <div className={clsx(
                        'col-start-1', 
                        'row-start-1', 
                        'relative'
                        )}>
                        <div className="flex justify-center items-center inset-0  absolute z-40 bg-zinc-600/25 text-white text-2xl rounded-xl">Flores</div>
                        <img className="image-service-card" src="/servicios/Flores.png"  alt=""  />
                    </div>
                    <div className={clsx(
                        'col-start-2', 
                        'row-start-1',
                        'relative' 
                    )}>
                        <h2 className="flex justify-center items-center inset-0  absolute z-40 bg-zinc-600/25 text-white text-2xl rounded-xl">Musica</h2>
                        <img className="image-service-card" src="/servicios/Musica.png" alt="" />
                    </div>
                    <div className={clsx(
                        'col-start-1',
                        'md:col-start-3', 
                        'row-start-2', 
                        'md:row-start-1', 
                        'col-span-2',
                        'relative'
                    )}>
                        <h2 className="text-service-card">Fotografia</h2>
                        <img className="image-service-card" src="/servicios/Fotografia.png" alt="Fotografia" />
                    </div>
                     <div className="relative">
                        <h2 className="text-service-card">Bartender</h2>
                         <img className="image-service-card" src="/servicios/Bartender.png" alt="Bartender" />
                     </div>
                    <div className="relative">
                        <h2 className="text-service-card">Shows</h2>
                        <img className="image-service-card" src="/servicios/Show.png" alt="Shows" />
                    </div>
                     <div className={clsx(
                        'col-span-2',
                        'relative'
                         )}>
                        <h2 className="text-service-card">Mobiliario</h2>   
                        <img className="image-service-card" src="/servicios/Banquete.png" alt="Banquete" />
                     </div>
                     <div className="relative">
                        <h2 className="text-service-card">Pasteles</h2>
                        <img className="image-service-card" src="/servicios/Pasteleria.png" alt="Pasteleria" />
                     </div>
                    <div className="relative">
                        <h2 className="text-service-card">Catering</h2>
                        <img className="image-service-card" src="/servicios/Catering.png" alt="Catering" />
                    </div>
                    <div className="relative">
                        <h2 className="text-service-card">DJ</h2>
                        <img className="image-service-card" src="/servicios/Dj.png" alt="DJ" />
                    </div>
                    <div className="relative">
                        <h2 className="text-service-card">Exteriores</h2>
                        <img className="image-service-card" src="/servicios/Exteriores.png" alt="Exteriores" />
                        </div> 
                </section>
            </SectionLayout>
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