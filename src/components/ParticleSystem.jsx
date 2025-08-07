import React, { useEffect, useRef } from 'react';

const ParticleSystem = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationId;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle class
    class Particle {
      constructor() {
        this.reset();
        this.y = Math.random() * canvas.height;
        this.life = Math.random() * 0.5 + 0.5;
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = -10;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = Math.random() * 2 + 1;
        this.life = 1;
        this.decay = Math.random() * 0.01 + 0.003;
        this.size = Math.random() * 3 + 1;
        this.hue = Math.random() * 60 + 180; // Cyan to purple range
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.life -= this.decay;

        if (this.life <= 0 || this.y > canvas.height + 10) {
          this.reset();
        }
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = this.life * 0.8;
        ctx.shadowBlur = 20;
        ctx.shadowColor = `hsl(${this.hue}, 100%, 60%)`;
        
        // Create gradient for particle
        const gradient = ctx.createRadialGradient(
          this.x, this.y, 0,
          this.x, this.y, this.size
        );
        gradient.addColorStop(0, `hsl(${this.hue}, 100%, 80%)`);
        gradient.addColorStop(1, `hsla(${this.hue}, 100%, 40%, 0)`);
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    // Create particles
    const particles = [];
    for (let i = 0; i < 50; i++) {
      particles.push(new Particle());
    }

    // Animation loop
    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 1,
        opacity: 0.6,
      }}
    />
  );
};

export default ParticleSystem;
