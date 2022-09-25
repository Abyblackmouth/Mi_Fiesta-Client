import clsx from 'clsx'
import Button from '../Button'
import H2 from './H2'

export default function InvitationCompaniesSection({ invitations }) {
  return (
    <>
      <H2>Únete a mi fiesta</H2>
      <div className={clsx(
        'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
        'gap-y-6 sm:gap-x-4',
        'w-full'
      )}>
        {invitations?.map((invitation, index) => {
          return (
            <div
              className={clsx(
                'bg-violet-300/75',
                'border border-white/75 rounded-xl',
                'grid grid-cols-1 grid-rows-2',
                'shadow-lg',
                'text-slate-700',
                'w-full'
              )}
              key={`invitation-${index}`}
            >
              <div className={clsx(
                'row-start-1',
              )}>
                <img
                  className={clsx(
                    'h-full',
                    'rounded-t-xl',
                    'object-cover'
                  )}
                  src={invitation.img}
                  alt={invitation.title}
                />
              </div>
              <div className={clsx(
                'flex flex-col justify-between',
                'row-start-2',
                'px-4 py-6',
                'w-full',
              )}>
                <h3 className="font-bold text-xl">{invitation.title}</h3>
                <p className="text-gray-700 text-base">
                  {invitation.description}
                </p>
                <Button label="SABER MAS" style="text-xs" />
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}
