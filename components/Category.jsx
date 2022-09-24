import clsx from "clsx"

export default function Category({ label,style }) {

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
      >
        {onclick = () => console.log('diste click')}
        {label}
      </div>
  )
}