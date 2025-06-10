import centro from './centro.css';
import Image from 'next/image';

export const Centro = () => {


    const imagenes = [
        '/imgbody/arte pinceles.jpg',
        '/imgbody/pinceles.jpg',
        '/imgbody/pituras.jpg',
        '/imgbody/vinilos.jpg',
        '/imgbody/arte pinceles.jpg',
        '/imgbody/pinceles.jpg',
        '/imgbody/pituras.jpg',
        '/imgbody/vinilos.jpg',
    ]

    return (
        <div className="container-centro">
      <h2>Galería del Centro</h2>
      <div className="galeria">
        {imagenes.map((src, index) => (
          <div className="imagen" key={index}>
            <Image src={src} alt={`Imagen ${index + 1}`} width={300} height={200} />
          </div>
        ))}
      </div>
    </div>
    )
}
