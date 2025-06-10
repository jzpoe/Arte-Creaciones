import footer from './footer.css';

export const Footer = () => {
  return (
    <footer className='footer'>
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Cunec LTDA. Todos los derechos reservados.</p>
        <div className="links">
          <a href="/nosotros">Nosotros</a>
          <a href="/servicios">Servicios</a>
          <a href="/contacto">Contacto</a>
        </div>
      </div>
    </footer>
  )
}
