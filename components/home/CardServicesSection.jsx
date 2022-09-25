import clsx from "clsx";
import H2 from "./H2";

export default function CardServiceSection() {
  return (
    <>
    <H2>Los servicios de eventos más populares</H2>
      <div className={clsx(
        'grid',
        'grid-cols-2',
        'md:grid-cols-4',
        'gap-7',
        'w-full',
      )}>
        <div className={clsx(
          'col-start-1',
          'row-start-1',
          'relative'
        )}>
          <div className="text-service-card">Flores</div>
          <img className="image-service-card" src="/servicios/Flores.png" alt="" />
        </div>
        <div className={clsx(
          'col-start-2',
          'row-start-1',
          'relative'
        )}>
          <h2 className="text-service-card">Musica</h2>
          <img className="image-service-card" src="/servicios/Musica.png" alt="" />
        </div>
        <div className={clsx(
          'col-start-1',
          'md:col-start-3',
          'row-start-2',
          'md:row-start-1',
          'col-span-2',
          'relative'
        )}>
          <h2 className="text-service-card">Fotografia</h2>
          <img className="image-service-card" src="/servicios/Fotografia.jpg" alt="Fotografia" />
        </div>
        <div className="relative">
          <h2 className="text-service-card">Bartender</h2>
          <img className="image-service-card" src="/servicios/Bartender.png" alt="Bartender" />
        </div>
        <div className="relative">
          <h2 className="text-service-card">Shows</h2>
          <img className="image-service-card" src="/servicios/Show.png" alt="Shows" />
        </div>
        <div className={clsx(
          'col-span-2',
          'relative'
        )}>
          <h2 className="text-service-card">Mobiliario</h2>
          <img className="image-service-card" src="/servicios/Banquete.png" alt="Banquete" />
        </div>
        <div className="relative">
          <h2 className="text-service-card">Pasteles</h2>
          <img className="image-service-card" src="/servicios/Pasteleria.png" alt="Pasteleria" />
        </div>
        <div className="relative">
          <h2 className="text-service-card">Catering</h2>
          <img className="image-service-card" src="/servicios/Catering.jpg" alt="Catering" />
        </div>
        <div className="relative">
          <h2 className="text-service-card">DJ</h2>
          <img className="image-service-card" src="/servicios/Dj.png" alt="DJ" />
        </div>
        <div className="relative">
          <h2 className="text-service-card">Exteriores</h2>
          <img className="image-service-card" src="/servicios/Exteriores.png" alt="Exteriores" />
        </div>
      </div>
      </>
  )

}