import clsx from "clsx"
import H1 from "./H1"
import Layout from "./Layout"


export default function Steps(){
    return (
    <>
    <div className="w-3/4">
        <div className="-mt-14">
            <div className="md:bg-slate-400 md:overflow-hidden md:rounded-full">
                <div className="md:bg-[#249f95] md:h-2 md:rounded-full md:w-2/4"/>
            </div>
                <div className="hidden sm:grid grid-cols-4 px-2 text-gray-500 text-sm text-center font-medium">
                    <div className="text-indigo-500">Informacion</div>
                    <div className="text-indigo-500">Datos del negocio</div>
                    <div className="text-indigo-500">Servicios que ofrece</div>
                    <div className="text-indigo-500">Suscripcion</div>
                </div>
        </div>
    </div>
    </>
    )
}