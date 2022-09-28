import clsx from "clsx"
import Subtitle from "./Subtitle"
import Button from "./Button"

export default function Card() {
  return (
    <>
     <div className="w-3/4 overflow-hidden flex ">
    <article className={clsx('w-1/3',
        'mx-5',
        'bg-white',
        'shadow-md',
        'flex flex-col justify-center items-center rounded-xl')}>
        <div className={clsx(
          'my-5'
        )}>
          <Subtitle>Mensual</Subtitle>
        </div>
        <div className={clsx('')}>
          <div>
            <p>beneficio 1</p>
            <p>beneficio 2</p>
            <p>beneficio 3</p>
          </div>
          <div className={clsx('my-10')}>
            <p>$100 MXN</p>
          </div>
        </div>
        <div className={clsx('mb-10')}>
          <Button etiqueta='Elegir' isSubmit />
        </div>
      </article>    

      <article className={clsx('w-1/3',
        'mx-5',
        'bg-white',
        'shadow-md',
        'flex flex-col justify-center items-center rounded-xl')}>
        <div className={clsx(
          'my-5'
        )}>
          <Subtitle>Trimestral</Subtitle>
        </div>
        <div className={clsx('')}>
          <div>
            <p>beneficio 1</p>
            <p>beneficio 2</p>
            <p>beneficio 3</p>
          </div>
          <div className={clsx('my-10')}>
            <p>$250 MXN</p>
          </div>
        </div>
        <div className={clsx('mb-10')}>
          <Button etiqueta='Elegir' isSubmit />
        </div>
      </article> 


      <article className={clsx('w-1/3',
        'bg-white',
        'mx-5',
        'shadow-md',
        'flex flex-col justify-center items-center rounded-xl')}>
        <div className={clsx(
          'my-5'
        )}>
          <Subtitle>Anual</Subtitle>
        </div>
        <div className={clsx('')}>
          <div>
            <p>beneficio 1</p>
            <p>beneficio 2</p>
            <p>beneficio 3</p>
          </div>
          <div className={clsx('my-10')}>
            <p>$800 MXN</p>
          </div>
        </div>
        <div className={clsx('mb-10')}>
          <Button etiqueta='Elegir' isSubmit />
        </div>
      </article> 
      </div>
    </>)
}