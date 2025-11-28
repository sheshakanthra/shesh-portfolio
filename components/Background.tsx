"use client";

import { useEffect, useRef } from "react";

export default function Background() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId = 0;
    const dpr = window.devicePixelRatio || 1;

    const mouse = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
      targetX: window.innerWidth / 2,
      targetY: window.innerHeight / 2,
    };

    const resize = () => {
      const { innerWidth, innerHeight } = window;
      canvas.width = innerWidth * dpr;
      canvas.height = innerHeight * dpr;
      canvas.style.width = `${innerWidth}px`;
      canvas.style.height = `${innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener("resize", resize);

    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    const gridSpacing = 80;
    const speed = 0.03;
    const lineColor = "rgba(45, 212, 191, 0.25)"; // emerald lines
    const glowColor = "rgba(16, 185, 129, 0.45)"; // node glow

    let lastTime = 0;

    const render = (time: number) => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      const dt = time - lastTime;
      lastTime = time;

      // smooth mouse for parallax
      const lerpFactor = 0.05;
      mouse.x += (mouse.targetX - mouse.x) * lerpFactor;
      mouse.y += (mouse.targetY - mouse.y) * lerpFactor;

      ctx.clearRect(0, 0, width, height);

      // subtle dark vignette background
      const gradient = ctx.createRadialGradient(
        width * 0.5,
        height * 0.15,
        0,
        width * 0.5,
        height * 0.6,
        width * 0.9
      );
      gradient.addColorStop(0, "rgba(15,23,42,0.2)");
      gradient.addColorStop(1, "rgba(2,6,23,1)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      ctx.lineWidth = 1;
      ctx.strokeStyle = lineColor;

      const timeOffset = time * speed;

      // parallax offset based on mouse
      const offsetX = (mouse.x - width / 2) * 0.03;
      const offsetY = (mouse.y - height / 2) * 0.05;

      // horizontal lines (scrolling forward = dev "timeline")
      for (let y = -gridSpacing; y < height + gridSpacing; y += gridSpacing) {
        const yWithOffset =
          y + ((timeOffset + y) % gridSpacing) + offsetY * 0.6;
        ctx.beginPath();
        ctx.moveTo(0, yWithOffset);
        ctx.lineTo(width, yWithOffset);
        ctx.stroke();
      }

      // vertical lines with slight futuristic curve
      for (let x = -gridSpacing; x < width + gridSpacing; x += gridSpacing) {
        const xWithOffset = x + offsetX * 0.8;
        const curve = Math.sin((time * 0.0007 + x) * 0.2) * 40;

        ctx.beginPath();
        ctx.moveTo(xWithOffset, 0);
        ctx.lineTo(xWithOffset + curve, height);
        ctx.stroke();
      }

      // glowing intersection nodes that respond to mouse
      ctx.fillStyle = glowColor;
      ctx.shadowBlur = 18;
      ctx.shadowColor = "#22c55e";

      for (let y = -gridSpacing; y < height + gridSpacing; y += gridSpacing) {
        for (
          let x = -gridSpacing;
          x < width + gridSpacing;
          x += gridSpacing
        ) {
          const nx = x + offsetX * 0.8;
          const ny = y + ((timeOffset + y) % gridSpacing) + offsetY * 0.6;

          const dx = nx - mouse.x;
          const dy = ny - mouse.y;
          const distSq = dx * dx + dy * dy;
          const radius = 2;

          if (distSq < 26000) {
            const intensity = 1 - distSq / 26000;
            ctx.globalAlpha = 0.15 + intensity * 0.85;
            ctx.beginPath();
            ctx.arc(nx, ny, radius + intensity * 2, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }

      ctx.globalAlpha = 1;
      ctx.shadowBlur = 0;

      animationId = requestAnimationFrame(render);
    };

    animationId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 -z-10"
    />
  );
}
