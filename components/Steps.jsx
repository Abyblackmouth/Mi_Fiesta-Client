import clsx from "clsx"
export default function Steps({ step }) {
    return (
        <>
            <div className="w-full sm:w-3/4 mx-auto">
                <div className="-mt-14">
                    <div className="hidden sm:block bg-slate-400 overflow-hidden rounded-full w-full">
                        <div className={clsx('bg-[#249f95] h-2 rounded-full', step)} />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-4 px-2 text-gray-500 text-sm text-center font-medium">
                        <div className="text-[#23877f]">Informacion</div>
                        <div className="text-[#23877f]">Datos del negocio</div>
                        <div className="text-[#23877f]">Servicios que ofrece</div>
                        <div className="text-[#23877f]">Suscripcion</div>
                    </div>
                </div>
            </div>
        </>
    )
}