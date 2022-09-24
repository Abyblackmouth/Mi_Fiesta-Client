import clsx from "clsx"

export default function Category({ label,style , onClick }) {

  return (
      <div className={clsx(
        'bg-indigo-500/25',
        // 'm-3',
        'h-10',
        'text-slate-900',
        'font-bold',
        // 'overflow-clip',
        'py-2 px-4',
        // 'w-{154px}',
        'w-full',
        'rounded',
        // 'focus:outline-none focus:shadow-outline',
        style
      )}
        onClick={onClick}
      >
        
        {label}
      </div>
  )
}