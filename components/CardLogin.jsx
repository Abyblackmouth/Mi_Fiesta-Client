import clsx from "clsx"


export default function CardLogin() {
  return (
    <div className={clsx(
      'w-full ',
      'shadow-md',
      'rounded-sm'
    )}
    >
      <form className={clsx(
        'bg-white',
        'shadow-md',
        'rounded px-8 pt-6 pb-8 mb-4'
      )}>
        <div className={clsx('mb-4')}>
          <label className={clsx(
            ' block ',
            'text-gray-700 text-sm font-bold mb-2')}
            htmlFor="email">
            Correo
          </label>
          <input className={clsx(
            'shadow',
            'appearance-none',
            'border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          )} id="username" type="text" placeholder="Correo" />
        </div>
        <div className={clsx(
          'mb-6'
        )}>
          <label className={clsx(
            'block',
            'text-gray-700 text-sm font-bold mb-2'
          )} htmlFor="password">
            Contraseña
          </label>
          <input className={clsx(
            'shadow',
            'appearance-none',
            'border',
            'rounded',
            'w-full',
            'py-2 px-3',
            'text-gray-700',
            'mb-3',
            'leading-tight',
            'focus:outline-none focus:shadow-outline')}
            id="password" type="password" placeholder="******************" />
        </div>
        <div className={clsx("mb-6")}>
          <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
            Repetir Contraseña
          </label>
          <input className={clsx(
            'shadow',
            'appearance-none',
            'border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight ',
            ' focus:outline-none focus:shadow-outline')}
            id="password" type="password" placeholder="******************" />
        </div>
        <div className={clsx(
          ' flex ',
          ' items-center',
          'justify-between',
          'flex-col'
          )}>
          <button className={clsx(
            'bg-gradient-to-b from-[#249F95]/50 to-white',
            'hover:bg-gradient-to-r from-teal-400 to-blue-500',
            'text-white',
            'font-bold',
            'py-2 px-4',
            'rounded',
            'focus:outline-none focus:shadow-outline')}
            type="button">
            Empezar
          </button>
          <a className={clsx(
            'inline-block',
            'align-baseline',
            'font-bold',
            'text-sm',
            'text-blue-500',
            'hover:text-blue-800'
          )} href="#">
            Ya tengo Cuenta
          </a>
        </div>
      </form>
    </div>

  )
}