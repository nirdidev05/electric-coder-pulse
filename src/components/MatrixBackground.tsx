import React, { useEffect, useRef } from 'react';

const MatrixBackground: React.FC = () => {
  const matrixRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const matrix = matrixRef.current;
    if (!matrix) return;

    const chars = '01ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const columns = Math.floor(window.innerWidth / 20);
    
    for (let i = 0; i < columns; i++) {
      const column = document.createElement('div');
      column.className = 'matrix-column';
      column.style.left = `${i * 20}px`;
      column.style.animationDelay = `${Math.random() * 4}s`;
      column.style.animationDuration = `${4 + Math.random() * 4}s`;
      
      let text = '';
      for (let j = 0; j < 50; j++) {
        text += chars[Math.floor(Math.random() * chars.length)] + '<br/>';
      }
      column.innerHTML = text;
      
      matrix.appendChild(column);
    }

    return () => {
      if (matrix) {
        matrix.innerHTML = '';
      }
    };
  }, []);

  return <div ref={matrixRef} className="matrix-bg" />;
};

export default MatrixBackground;