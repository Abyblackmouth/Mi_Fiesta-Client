import clsx from "clsx"
import Subtitle from "./Subtitle"
import Button from "./Button"

export default function Card() {
  return (
    <>
     <div className="w-3/4 overflow-hidden flex">
    <article className={clsx('w-1/3',
        'bg-white',
        'shadow-md',
        'flex flex-col justify-center items-center')}>
        <header className={clsx(
          'my-5'
        )}>
          <Subtitle>Mensual</Subtitle>
        </header>
        <body className={clsx('')}>
          <div>
            <p>beneficio 1</p>
            <p>beneficio 2</p>
            <p>beneficio 3</p>
          </div>
          <div className={clsx('my-10')}>
            <p>Price</p>
          </div>
        </body>
        <footer className={clsx('mb-10')}>
          <Button etiqueta='Elegir' isSubmit />
        </footer>
      </article>    

      <article className={clsx('w-1/3',
        'bg-white',
        'shadow-md',
        'flex flex-col justify-center items-center')}>
        <header className={clsx(
          'my-5'
        )}>
          <Subtitle>Mensual</Subtitle>
        </header>
        <body className={clsx('')}>
          <div>
            <p>beneficio 1</p>
            <p>beneficio 2</p>
            <p>beneficio 3</p>
          </div>
          <div className={clsx('my-10')}>
            <p>Price</p>
          </div>
        </body>
        <footer className={clsx('mb-10')}>
          <Button etiqueta='Elegir' isSubmit />
        </footer>
      </article> 


      <article className={clsx('w-1/3',
        'bg-white',
        'shadow-md',
        'flex flex-col justify-center items-center')}>
        <header className={clsx(
          'my-5'
        )}>
          <Subtitle>Mensual</Subtitle>
        </header>
        <body className={clsx('')}>
          <div>
            <p>beneficio 1</p>
            <p>beneficio 2</p>
            <p>beneficio 3</p>
          </div>
          <div className={clsx('my-10')}>
            <p>Price</p>
          </div>
        </body>
        <footer className={clsx('mb-10')}>
          <Button etiqueta='Elegir' isSubmit />
        </footer>
      </article> 
      </div>
    </>)
}