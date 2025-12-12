import React from 'react';
import Masonry from 'react-masonry-css';
import './App.css';

// Importa tus imágenes
import dibujo1 from './assets/dibujo1.PNG'; // vertical
import dibujo2 from './assets/dibujo2.PNG'; // horizontal
import dibujo3 from './assets/dibujo3.PNG'; // vertical
import dibujo4 from './assets/dibujo1.PNG'; // horizontal

function App() {
  const images = [
    { id: 1, src: dibujo1, alt: 'Dibujo 1' },
    { id: 2, src: dibujo2, alt: 'Dibujo 2' },
    { id: 3, src: dibujo3, alt: 'Dibujo 3' },
    { id: 4, src: dibujo4, alt: 'Dibujo 4' }
  ];

  // Configuración de columnas responsivas
  const breakpointColumns = {
    default: 2,  // 2 columnas por defecto
    768: 2,      // tablets: 2 columnas
    480: 1       // móviles pequeños: 1 columna
  };

  return (
    <div className="app-container">
      
      <Masonry
        breakpointCols={breakpointColumns}
        className="masonry-grid"
        columnClassName="masonry-grid_column"
      >
        {images.map((image) => (
          <div key={image.id} className="masonry-item">
            <img
              src={image.src}
              alt={image.alt}
              loading="lazy"
            />
          </div>
        ))}
      </Masonry>
    </div>
  );
}

export default App;
