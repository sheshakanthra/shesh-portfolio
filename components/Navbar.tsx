"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const links = [
  { href: "#home", label: "01. Home" },
  { href: "#skills", label: "02. Skills" },
  { href: "#projects", label: "03. Projects" },
  { href: "#about", label: "04. About" },
  { href: "#contact", label: "05. Contact" },
];

export default function Navbar() {
  return (
    <motion.header
      className="sticky top-0 z-20 border-b border-emerald-500/10 bg-[#02040a]/70 backdrop-blur"
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 text-sm">
        <Link href="#home" className="font-semibold tracking-tight">
          <span className="text-emerald-400">Shesh</span>
          <span className="text-slate-300">.dev</span>
        </Link>

        <ul className="hidden gap-6 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative text-slate-300/80 transition-colors hover:text-emerald-400
                         after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0
                         after:bg-emerald-400 after:transition-all hover:after:w-full"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden rounded-full border border-emerald-500/60 px-4 py-1 text-xs font-medium text-emerald-300 hover:bg-emerald-500/10 md:inline-block"
        >
          Let&apos;s talk
        </a>
      </nav>
    </motion.header>
  );
}
