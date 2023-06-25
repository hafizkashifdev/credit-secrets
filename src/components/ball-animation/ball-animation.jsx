// import React, { useEffect, useRef } from 'react';
// import { Grid } from '@mui/material';
// import './ball-animation.css';

// const BallAnimation = () => {
//   const containerRef = useRef(null);

//   useEffect(() => {
//     const shapes = ['triangle', 'triangle', 'triangle', 'triangle', 'square', 'square', 'square', 'square', 'circle', 'circle', 'circle', 'circle'];
//     const numShapes = 12;
//     const elements = [];

//     const containerWidth = containerRef.current.clientWidth;
//     const containerHeight = containerRef.current.clientHeight;

//     for (let i = 0; i < numShapes; i++) {
//       const shape = shapes[i];
//       const element = document.createElement('div');
//       element.classList.add('ball', shape);
//       element.style.background = getRandomColor();
//       element.style.left = `${Math.floor(Math.random() * containerWidth)}px`;
//       element.style.top = `${Math.floor(Math.random() * containerHeight)}px`;
//       element.style.transform = `scale(${Math.random() * 2})`;
//       element.style.width = `${Math.random() * 3}em`;
//       element.style.height = element.style.width;

//       elements.push(element);
//       containerRef.current.appendChild(element);
//     }

//     elements.forEach((el, i) => {
//       const to = {
//         x: Math.random() * (i % 2 === 0 ? -11 : 11),
//         y: Math.random() * 12,
//       };

//       el.animate(
//         [
//           { transform: 'translate(0, 0)' },
//           { transform: `translate(${to.x}rem, ${to.y}rem)` },
//         ],
//         {
//           duration: (Math.random() + 1) * 2000,
//           direction: 'alternate',
//           fill: 'both',
//           iterations: Infinity,
//           easing: 'ease-in-out',
//         }
//       );
//     });

//     return () => {
//       elements.forEach((element) => {
//         element.remove();
//       });
//     };
//   }, []);

//   const getRandomColor = () => {
//     const letters = '0123456789ABCDEF';
//     let color = '#';
//     for (let i = 0; i < 6; i++) {
//       color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
//   };

//   return (
//     <div className="ball-animation">
//       <Grid ref={containerRef} className="ball-animation-container" />
//     </div>
//   );
// };

// export default BallAnimation;

import React, { useEffect, useRef } from 'react';
import { Grid } from '@mui/material';
import './ball-animation.css';

const BallAnimation = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const shapes = ['triangle', 'triangle', 'triangle', 'triangle', 'square', 'square', 'square', 'square', 'circle', 'circle', 'circle', 'circle'];
    const numShapes = 12;
    const elements = [];

    const containerWidth = containerRef.current.clientWidth;
    const containerHeight = containerRef.current.clientHeight;

    const colors = ["#1bffc2", "#ff0066", "#6CB1CB",'#888ACA'];

    for (let i = 0; i < numShapes; i++) {
      const shape = shapes[i];
      const element = document.createElement('div');
      element.classList.add('ball', shape);
      
      // Use specific colors from the colors array
      element.style.background = colors[i % colors.length];
      
      element.style.left = `${Math.floor(Math.random() * containerWidth)}px`;
      element.style.top = `${Math.floor(Math.random() * containerHeight)}px`;
      element.style.transform = `scale(${Math.random() * 2})`;
      element.style.width = `${Math.random() * 3}em`;
      element.style.height = element.style.width;

      elements.push(element);
      containerRef.current.appendChild(element);
    }

    elements.forEach((el, i) => {
      const to = {
        x: Math.random() * (i % 2 === 0 ? -11 : 11),
        y: Math.random() * 12,
      };

      el.animate(
        [
          { transform: 'translate(0, 0)' },
          { transform: `translate(${to.x}rem, ${to.y}rem)` },
        ],
        {
          duration: (Math.random() + 1) * 2000,
          direction: 'alternate',
          fill: 'both',
          iterations: Infinity,
          easing: 'ease-in-out',
        }
      );
    });

    return () => {
      elements.forEach((element) => {
        element.remove();
      });
    };
  }, []);

  return (
    <div className="ball-animation">
      <Grid ref={containerRef} className="ball-animation-container" />
    </div>
  );
};

export default BallAnimation;

