import React, { useEffect, useRef } from 'react';
import './InteractiveBackground.css';

const InteractiveBackground = ({ darkMode }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const lines = [];
    const lineCount = 100;
    const maxDistance = 200;

    for (let i = 0; i < lineCount; i++) {
      lines.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        length: Math.random() * 40 + 20,
        angle: Math.random() * Math.PI * 2,
      });
    }

    let mouseX = canvas.width / 2;
    let mouseY = canvas.height / 2;

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = darkMode ? 'rgba(200, 200, 200, 0.6)' : 'rgba(100, 100, 100, 0.6)';
      ctx.lineWidth = 1.2;

      lines.forEach((line) => {
        const dx = mouseX - line.x;
        const dy = mouseY - line.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        let angle = line.angle;

        if (distance < maxDistance) {
          angle = Math.atan2(dy, dx);
        }

        const x2 = line.x + Math.cos(angle) * line.length;
        const y2 = line.y + Math.sin(angle) * line.length;

        ctx.beginPath();
        ctx.moveTo(line.x, line.y);
        ctx.lineTo(x2, y2);
        ctx.stroke();
      });

      requestAnimationFrame(draw);
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    draw();

    return () => {
      canvas.removeEventListener('mousemove', handleMouseMove);
    };
  }, [darkMode]);

  return <canvas ref={canvasRef} className="interactive-canvas" />;
};

export default InteractiveBackground;
