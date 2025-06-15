'use client';

import { useState } from 'react';
import centro from './centro.css';
import Image from 'next/image';
import { Modal } from '../modal/Modal';
import { Tex } from '../texto/Tex';
import { Experiencia } from '../experiencia/Experiencia';
import { BotonWhatsapp } from '../BotonWhatsapp/BotonWhatsapp';
import { CentroMensaje } from '../mensajecentro/CentroMensaje';

export const Centro = () => {
  const [imagenSeleccionada, setImagenSeleccionada] = useState(null);

  const imagenes = [
    {
      src: '/imgbody/arte pinceles.jpg',
      historia: 'Una obra que refleja el inicio de nuestra pasión por el arte.',
    },
    {
      src: '/imgbody/pinceles.jpg',
      historia: 'Los pinceles representan las herramientas de libertad creativa.',
    },
    {
      src: '/imgbody/pituras.jpg',
      historia: 'Las pinturas vibrantes muestran la energía del color.',
    },
    {
      src: '/imgbody/vinilos.jpg',
      historia: 'Vinilos y texturas únicas que adornan nuestros murales.',
    },
    // Puedes duplicar o agregar más
  ];

  return (
    <div className="container-centro">
      <CentroMensaje/>
      <Tex/>
      <Experiencia/> 
      <h2 className='info-imagenes' >Mas info click en imagenes</h2>
      <div className="galeria">
        
        {imagenes.map((img, index) => (
          <div className="imagen" key={index}>
            <button onClick={() => setImagenSeleccionada(img)}>
              <Image src={img.src} alt={`Imagen ${index + 1}`} width={300} height={200} />
            </button>
          </div>
        ))}
      </div>

      {imagenSeleccionada && (
        <Modal
          src={imagenSeleccionada.src}
          historia={imagenSeleccionada.historia}
          onClose={() => setImagenSeleccionada(null)}
        />
      )}
      
      <BotonWhatsapp/>
    </div>

   
  );
};