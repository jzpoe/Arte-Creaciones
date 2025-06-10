import Link from 'next/link';
import navbar from './navbar.css';

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link href="/">Cunec</Link>
      </div>
      <ul className="navLinks">
        <li><Link href="/">Inicio</Link></li>
        <li><Link href="/servicios">Servicios</Link></li>
        <li><Link href="/nosotros">Nosotros</Link></li>
        <li><Link href="/contacto">Contacto</Link></li>
      </ul>
    </nav>
  )
}
