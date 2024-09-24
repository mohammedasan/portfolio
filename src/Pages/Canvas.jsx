// // src/Pages/Canvas.jsx
// import React, { useRef, useEffect } from 'react';

// const Canvas = ({ bg, globalCompositeOperation, onCanvasInited, onResize }) => {
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext('2d');
//     let animationFrameId;

//     const handleResize = () => {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//       if (onResize) {
//         onResize(canvas.width, canvas.height);
//       }
//     };

//     // Initialize the canvas and Proton engine
//     if (onCanvasInited) {
//       onCanvasInited(canvas, canvas.width, canvas.height);
//     }

//     window.addEventListener('resize', handleResize);
//     handleResize();

//     return () => {
//       window.removeEventListener('resize', handleResize);
//       cancelAnimationFrame(animationFrameId);
//     };
//   }, [onCanvasInited, onResize]);

//   return (
//     <canvas
//       ref={canvasRef}
//       style={{
//         position: 'absolute',
//         top: 0,
//         left: 0,
//         zIndex: 0,
//         backgroundColor: bg ? 'transparent' : '#000',
//       }}
//     />
//   );
// };

// export default Canvas;
import React, { useRef, useEffect } from 'react';

const Canvas = ({ bg, globalCompositeOperation, onCanvasInited, onResize }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const handleResize = () => {
      // Make canvas responsive
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      // Call the onResize handler if provided
      if (onResize) {
        onResize(canvas.width, canvas.height);
      }
    };

    // Initialize Proton when the canvas is first created
    if (onCanvasInited) {
      onCanvasInited(canvas, canvas.width, canvas.height);
    }

    // Handle canvas resizing for responsiveness
    window.addEventListener('resize', handleResize);
    handleResize();  // Initial resize to fit the screen

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [onCanvasInited, onResize]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed', // Make the canvas cover the whole screen
        top: 0,
        left: 0,
        width: '100vw',  // Full width of the viewport
        height: '100vh', // Full height of the viewport
        zIndex: 0,       // Ensure it's behind other content
        backgroundColor: bg ? 'transparent' : '#000',
      }}
    />
  );
};

export default Canvas;
