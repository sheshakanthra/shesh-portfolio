"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

const links = [
  { href: "#home", label: "01. Home" },
  { href: "#skills", label: "02. Skills" },
  { href: "#projects", label: "03. Projects" },
  { href: "#about", label: "04. About" },
  { href: "#contact", label: "05. Contact" },
];

export default function Navbar() {
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);

  return (
    <motion.header
      className="fixed top-6 left-0 right-0 z-50 mx-auto flex max-w-5xl items-center justify-between rounded-full border border-white/10 bg-slate-950/50 px-6 py-3 shadow-2xl shadow-emerald-500/10 backdrop-blur-md"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      {/* Logo */}
      <Link href="#home" className="group relative z-10 flex items-center gap-1 font-bold tracking-tighter">
        <span className="text-2xl text-emerald-400 transition-transform duration-300 group-hover:-translate-y-1">S</span>
        <span className="text-slate-200">hesh</span>
        <div className="absolute -bottom-1 left-0 h-0.5 w-0 bg-emerald-400 transition-all duration-300 group-hover:w-full" />
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:block">
        <ul className="flex items-center gap-1">
          {links.map((link) => (
            <li key={link.href} className="relative">
              <Link
                href={link.href}
                className={`relative z-10 px-4 py-2 text-sm font-medium transition-colors duration-300 ${hoveredPath === link.href ? "text-emerald-300" : "text-slate-400 hover:text-slate-200"
                  }`}
                onMouseEnter={() => setHoveredPath(link.href)}
                onMouseLeave={() => setHoveredPath(null)}
              >
                {link.label}
                {hoveredPath === link.href && (
                  <motion.div
                    layoutId="navbar-hover"
                    className="absolute inset-0 -z-10 rounded-full bg-emerald-500/10 border border-emerald-500/20"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* CTA Button */}
      <motion.a
        href="#contact"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="hidden rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 px-6 py-2 text-xs font-bold text-slate-950 shadow-lg shadow-emerald-500/20 transition-all hover:shadow-emerald-500/40 md:block"
      >
        Let&apos;s talk
      </motion.a>

      {/* Mobile Menu Toggle (Simple Placeholder for now as user focused on desktop aesthetics) */}
      <div className="md:hidden text-slate-300">
        Menu
      </div>
    </motion.header>
  );
}
