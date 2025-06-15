import Link from 'next/link';
import Image from 'next/image';
import './navbar.css';

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link href="/">
          {/* Imagen como logo */}
          <Image src="/imgbody/logo.png" alt="Logo" width={50} height={50} />
        </Link>
      </div>
      <ul className="navLinks">
        <li><Link href="/">Inicio</Link></li>
        <li><Link href="/servicios">Servicios</Link></li>
        <li><Link href="/nosotros">Nosotros</Link></li>
        <li><Link href="/contacto">Contacto</Link></li>
      </ul>
    </nav>
  );
};