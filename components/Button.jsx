import clsx from "clsx"

export default function Button({ etiqueta, style, onClick, isSubmit=false }) {

  return (
    <>
      {
        !isSubmit &&
        <a className={clsx(
          'bg-gradient-to-b from-[#249F95]/60 to-white', // pendiente tranformarlo a props
          'hover:bg-gradient-to-r from-teal-400 to-[#249F95]/80',
          'text-white',
          'font-bold',
          'py-2 px-4',
          'w-40',
          'rounded',
          'focus:outline-none focus:shadow-outline',
          style
        )}
          onClick={onClick}
        >
          {etiqueta}
        </a>}
      {
        isSubmit && <input className={clsx(
          'bg-gradient-to-b from-[#249F95]/60 to-white', // pendiente tranformarlo a props
          'hover:bg-gradient-to-r from-teal-400 to-[#249F95]/80',
          'text-white',
          'font-bold',
          'py-2 px-4',
          'w-40',
          'rounded',
          'focus:outline-none focus:shadow-outline',
          style
        )}
        type="submit"
        value={etiqueta}
        />
      }
    </>

  )
}