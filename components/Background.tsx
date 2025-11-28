"use client";

import { motion } from "framer-motion";

const symbols = ["{", "}", ";", "<", ">", "/", "+", "-", "=", "1", "0"];

const items = Array.from({ length: 40 }).map((_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  delay: Math.random() * 5,
  duration: 8 + Math.random() * 6,
  char: symbols[Math.floor(Math.random() * symbols.length)],
}));

export default function Background() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {/* gradient glow */}
      <div className="absolute -top-40 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-emerald-500/20 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-72 w-72 bg-emerald-500/10 blur-3xl" />
      <div className="absolute bottom-10 right-10 h-48 w-48 rounded-full border border-emerald-500/40 opacity-60" />

      {/* floating code symbols */}
      {items.map((item) => (
        <motion.span
          key={item.id}
          className="font-mono text-xs text-emerald-500/40"
          initial={{ opacity: 0, x: `${item.x}%`, y: "110%" }}
          animate={{
            opacity: [0, 1, 0],
            y: ["110%", `${item.y}%`, "-10%"],
          }}
          transition={{
            duration: item.duration,
            repeat: Infinity,
            delay: item.delay,
          }}
        >
          {item.char}
        </motion.span>
      ))}
    </div>
  );
}
