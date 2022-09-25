import clsx from "clsx"

export default function H2({ children, label }) {
  return (
    <div className={clsx(
      'flex',
      'justify-center',
      'items-center',
      'h-36',
      'text-slate-500',
      'text-3xl',
      label
    )}>
      {children}
    </div>
  )
}