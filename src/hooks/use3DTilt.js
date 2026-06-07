import { useState, useRef } from 'react';

export default function use3DTilt() {
  const ref = useRef(null);
  const [style, setStyle] = useState({});

  const handleMouseMove = (e) => {
    if (!ref.current || window.innerWidth < 1024) return;
    
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    
    const tiltX = -y * 15; // Max 15 degrees tilt on X
    const tiltY = x * 15;  // Max 15 degrees tilt on Y
    const transX = x * 10; // Max 10px translate on X
    const transY = y * 10; // Max 10px translate on Y
    
    setStyle({
      transform: `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translate3d(${transX}px, ${transY}px, 15px) scale(1.02)`,
      transition: 'none'
    });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) translate3d(0px, 0px, 0px) scale(1)',
      transition: 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)'
    });
  };

  return {
    ref,
    style,
    handleMouseMove,
    handleMouseLeave
  };
}
