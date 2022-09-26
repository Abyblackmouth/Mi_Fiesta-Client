import Link from "next/link";
import clsx from "clsx";
import Button from "../Button";

export default function LandingNav() {
  return (
    <>
      <nav className={clsx(
        'bg-[#ffffff]/40',
        'shadow-xl',
        'h-[80px]',
        'flex fixed top-0',
        'z-40',
        'w-full',
        'space-x-96 ',
      )}>
        <Link href='/landing'>
          <img src="/Logo2.png" alt="Logo mi fiesta.com" />
        </Link>
        <div className="flex justify-end items-center  text-sm text-[#385890] font-bold gap-6 mr-16">
          <a href="">Explora</a>
          <a href="">Registrate como proveedor</a>
          <a href="/login">Inicia sesion</a>
          <Button label='COTIZA TU EVENTO' style='text-xs'></Button>
        </div>
      </nav>
      <div className="bg-hero w-full h-80 bg-cover"></div>
    </>
  )
}