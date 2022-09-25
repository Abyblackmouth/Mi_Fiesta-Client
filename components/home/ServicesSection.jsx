export default function ServicesSection() {
  return (
    <>
      <div>
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
      </div>
      <div>
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
      </div>
      <div>
        <h1 className="flex justify-start items-center text-slate-500 hover:text-blue-500 text-2xl my-8">
          Entretenimiento
        </h1>
        <div className="flex flex-row text-slate-500 hover:text-blue-400">
          <div className="w-1/2">
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
      </div>
      </>



  )
}