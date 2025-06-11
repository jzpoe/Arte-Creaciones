import React from 'react';
import Image from 'next/image';
import './modal.css'; // estilos que tú definas

export const Modal = ({ src, historia, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="cerrar" onClick={onClose}>×</button>
        <Image src={src} alt="Imagen ampliada" width={400} height={300} />
        <p className="historia">{historia}</p>
      </div>
    </div>
  );
};