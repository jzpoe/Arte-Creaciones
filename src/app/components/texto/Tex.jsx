import Image from 'next/image';
import './texto.css'; // Asegúrate de tener los estilos base aquí

const secciones = [
  {
    texto: 'Entrega puntual, sin excusas. Tu tarea lista justo cuando la necesitas.',
    imagen: '/imgbody/arte pinceles.jpg',
  },
  {
    texto: 'Trabajos hechos con criterio. Redacción clara y contenido estructurado.',
    imagen: '/imgbody/pituras.jpg',
  },
  {
    texto: 'Tu idea, nuestra ejecución. Presentaciones y resúmenes atractivos.',
    imagen: '/imgbody/vinilos.jpg',
  },
  {
    texto: 'Estamos contigo en cada entrega. Acompañamiento completo.',
    imagen: '/imgbody/pinceles.jpg',
  },
];

const colores = ['red', 'blue', 'green', 'orange', 'purple', 'crimson'];

export const Tex = () => {
  return (
    <div className="contenedor-principal">
      {secciones.map((item, index) => (
        <div
          className={`bloque ${index % 2 === 0 ? 'normal' : 'invertido'}`}
          key={index}
        >
          <div className="texto">
            <p>
              {item.texto.split(' ').map((palabra, i) => (
                <span
                  key={i}
                  className="palabra"
                  style={{ color: colores[i % colores.length] }}
                >
                  {palabra + ' '}
                </span>
              ))}
            </p>
          </div>
          <div className="imagen">
            <Image
              src={item.imagen}
              alt={`Imagen ${index}`}
              width={650}
              height={350}
            />
          </div>
        </div>
      ))}
    </div>
  );
};