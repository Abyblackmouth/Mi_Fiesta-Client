import clsx from "clsx"

export default function Button({ label, style, onClick, isSubmit=false }) {

  return (
    <>
      {
        !isSubmit &&
        <a className={clsx(
          'bg-gradient-to-b from-[#249F95]/60 to-white', // pendiente tranformarlo a props
          'hover:bg-gradient-to-r from-teal-400 to-[#249F95]/80',
          'text-white',
          'font-bold',
          'overflow-clip',
          'py-2 px-4',
           'w-full lg:w-auto',          
          'rounded',
          'focus:outline-none focus:shadow-outline',
          style
        )}
          onClick={onClick}
        >
          {label}
        </a>}
      {
        isSubmit && <input className={clsx(
          'bg-gradient-to-b from-[#249F95]/60 to-white', // pendiente tranformarlo a props
          'hover:bg-gradient-to-r from-teal-400 to-[#249F95]/80',
          'text-white',
          'font-bold',
          'py-2 px-4',
          'overflow-clip',
          'w-full lg:w-auto',
          'rounded',
          'focus:outline-none focus:shadow-outline',
          style
        )}
        type="submit"
        value={label}
        />
      }
    </>

  )
}