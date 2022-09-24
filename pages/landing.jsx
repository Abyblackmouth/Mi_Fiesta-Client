import clsx from "clsx"
import Button from "../components/Button"
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
          <div className="flex justify-end items-center text-sm text-[#385890] font-bold gap-6 mr-16">
            <a href="">Explora</a>
            <a href="">Registrate como proveedor</a>
            <a href="">Inicia sesion</a>
            <Button etiqueta='COTIZA TU EVENTO' style='text-xs'></Button>
            
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

             <section>
                <h1 className="flex justify-start items-center text-slate-500 hover:text-blue-500 text-2xl my-8">
                    Musica
                </h1>
                <div className="flex flex-row">
                    <div className="w-1/2">
                        <ol>
                            <li className="text-slate-500 hover:text-blue-400">Grupo a capella para eventos</li>
                            <li className="text-slate-500 hover:text-blue-400">Orquesta para eventos</li>
                            <li className="text-slate-500 hover:text-blue-400">Banda musical</li>
                            <li className="text-slate-500 hover:text-blue-400">Espectaculo de conjunto musical</li>
                            <li className="text-slate-500 hover:text-blue-400">Concierto de quinteto</li>
                            <li className="text-slate-500 hover:text-blue-400 mb-8">DJ</li>
                        </ol>
                    </div>
                    <ol>
                        <li className="text-slate-500 hover:text-blue-400">Maquinas de karaoke</li>
                        <li className="text-slate-500 hover:text-blue-400">Dúo de musica</li>
                        <li className="text-slate-500 hover:text-blue-400">Espectaculo de jazz</li>
                        <li className="text-slate-500 hover:text-blue-400">Banda de mariachis</li>
                        <li className="text-slate-500 hover:text-blue-400">Cuarteto de cuerdas para eventos</li>
                        <li className="text-slate-500 hover:text-blue-400">Espectaculo de solista</li>
                    </ol>
                </div>
            </section>
            <section>
            <h1 className="flex justify-start items-center text-slate-500 hover:text-blue-500 text-2xl mb-8">
                    Comida
                </h1>
                <div className="w-1/2 border-t-cyan-400"></div>
                <div className="flex flex-row ">
                    <div className="w-1/2">
                        <ol>
                            <li className="text-slate-500 hover:text-blue-400">Comida para un evento</li>
                            <li className="text-slate-500 hover:text-blue-400">Catering movil</li>
                            <li className="text-slate-500 hover:text-blue-400">Servicio de chef pesonal</li>
                        </ol>
                    </div>
                    <div>
                        <ol>
                            <li className="text-slate-500 hover:text-blue-400">Sevico de bufett</li>
                            <li className="text-slate-500 hover:text-blue-400">Pasteleria</li>
                            <li className="text-slate-500 hover:text-blue-400">Servicio de mesero</li>
                        </ol>
                    </div>
                </div>
            </section>
            <section>
            <h1 className="flex justify-start items-center text-slate-500 hover:text-blue-500 text-2xl my-8">
                    Entretenimiento
                </h1>
                <div className="flex flex-row text-slate-500 hover:text-blue-400">
                    <div  className="w-1/2">
                        <ol>
                            <li className="text-slate-500 hover:text-blue-400">Shows infantiles</li>
                            <li className="text-slate-500 hover:text-blue-400">Payasos</li>
                            <li className="text-slate-500 hover:text-blue-400">Animadores</li>
                        </ol>
                    </div>
                    <div>
                        <ol>
                            <li className="text-slate-500 hover:text-blue-400">Magos</li>
                            <li className="text-slate-500 hover:text-blue-400">Espectaculos con robots</li>
                            <li className="text-slate-500 hover:text-blue-400">Stand Up </li>
                        </ol>
                    </div>
                </div>
            </section>
            <h1 className="flex justify-center items-center h-36 text-slate-500 text-3xl">Unete a Mi Fiesta</h1>

            <section className="flex justify-center w-full text-center">
                <div className="max-w-sm rounded overflow-hidden shadow-lg w-1/3 m-2 text-slate-700">
                    <img className="w-full" src="/cardsHome/Chef.jpg" alt="Chef"/>
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">Registra tu restaurante</div>
                        <p class="text-gray-700 text-base">
                        Accede a nuestros usuarios y disfruta de la logistica que ofrecemos.
                        </p>
                    </div>
                    <div class="px-6 pt-1 pb-2">
                        <Button etiqueta='SABER MAS'style='text-xs'></Button>
                    </div>
                </div>
                
                <div className="max-w-sm rounded overflow-hidden shadow-lg w-1/3 m-2 text-slate-700">
                    <img className="w-full" src="/cardsHome/Negocio-1.jpg" alt="Persona en su negocio"/>
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">Registra tu negocio</div>
                        <p class="text-gray-700 text-base">
                        Descubre los beneficios de asociarte con MiFiesta para impulzar tus ventas.
                        </p>
                    </div>
                    <div class="px-6 pt-1 pb-2">
                        <Button etiqueta='SABER MAS'style='text-xs'></Button>    
                    </div>
                </div>

                <div className="max-w-sm rounded overflow-hidden shadow-lg w-1/3 m-2 text-slate-700">
                    <img className="w-full" src="/cardsHome/PersonaGlobos.jpeg" alt="Persona con globos"/>
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">Cotiza tu evento</div>
                        <p class="text-gray-700 text-base">
                            Busca los mejores profecionales y ahorra tiempo para crear tu evento.
                        </p>
                    </div>
                    <div class="px-6 pt-1 pb-2">
                    <Button etiqueta='SABER MAS'style='text-xs'></Button>
                    </div>
                </div>
            </section> 
            </SectionLayout>
         </main> 
         <footer>
             <img className= "bg-hero w-full h-64 bg-cover"/>
        </footer> 
        </>
    )
}