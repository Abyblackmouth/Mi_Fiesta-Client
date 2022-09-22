import clsx from 'clsx';

export default function Navbar() {
  let links = [
    { name: 'Iniciar sesión', link: '/' },
    { name: 'Registrate', link: '/' },
  ];

  return (
    <div className="shadow-md w-full fixed top-0 left-0 ">
      <div className="md:flex pl-4 pr-11 items-center justify-between bg-white py-5">
        <div className='md:flex'>
        <img
          className="h-20 w-50"
          src="https://img.freepik.com/vector-gratis/globos-coloridos-helio-fondo-blanco_1308-18056.jpg?w=2000"
        />
        <div className="font-bold text-2xl cursor-pointer flex items-center font-serif text-gray-800">MiFiesta.com</div>
        </div>
        <ul className='md:flex md:items-center'>
          {links.map((link, index) => (
            <li key={index} className='md:ml-8 text-xl'>
              <a className='text-gray-800 hover:text-gray-400 duration-500 text-bold' href={link.link}> {link.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
