import React from 'react';
import './botonWhatsapp.css';

export const BotonWhatsapp = () => {
  const numeroWhatsApp = '573001234567'; // Cambia por tu número real (con código de país sin "+")

  const mensaje = 'Hola, estoy interesado en recibir más información sobre los trabajos escolares.';
  const enlace = `https://wa.me/${3057767694}?text=${encodeURIComponent(mensaje)}`;

  return (
    <div className="whatsapp-container">
      <h2>¿Quieres más información?</h2>
      <p>Dale clic al botón de WhatsApp para tener más comunicación directa con nosotros.</p>
      <a href={enlace} target="_blank" rel="noopener noreferrer" className="whatsapp-boton">
        💬 Escríbenos por WhatsApp
      </a>
    </div>
  );
};