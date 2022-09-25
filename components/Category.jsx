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
        'hover:border-cyan-400 border-2',
        style
      )}
        onClick={onClick}
      >
        
        {label}
      </div>
  )
}